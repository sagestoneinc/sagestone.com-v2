import assert from "node:assert/strict";

import { seoKeywords } from "../src/config/seo-keywords";
import { breadcrumbJsonLd, organizationJsonLd, pageJsonLd, websiteJsonLd } from "../src/lib/seo";
import {
  canonicalUrl,
  getInternalLinksByPath,
  getRedirects,
  sitemapEntries,
  siteConfig,
} from "../src/lib/site";

const routeSet = new Set(sitemapEntries.map((page) => page.path));
const redirects = getRedirects();

function normalizeKeyword(keyword: string) {
  return keyword.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function assertUnique(values: string[], label: string) {
  const seen = new Set<string>();

  for (const value of values) {
    const normalized = value.trim().toLowerCase();
    assert.ok(!seen.has(normalized), `Duplicate ${label}: ${value}`);
    seen.add(normalized);
  }
}

function assertJson(data: unknown, label: string) {
  const serialized = JSON.stringify(data);
  assert.ok(serialized && serialized.startsWith("{"), `${label} must serialize as JSON object`);
}

assert.equal(siteConfig.domain, "https://www.sagestoneinc.com", "Production origin must be HTTPS www");
assert.equal(canonicalUrl("https://sagestoneinc.com/services?utm_source=test"), "https://www.sagestoneinc.com/services/");

assertUnique(sitemapEntries.map((page) => page.title), "title");
assertUnique(sitemapEntries.map((page) => page.description), "meta description");
assertUnique(sitemapEntries.map((page) => page.h1), "H1");
assertUnique(sitemapEntries.map((page) => normalizeKeyword(page.primaryKeyword)), "primary keyword");

for (const page of sitemapEntries) {
  assert.equal(seoKeywords[page.path as keyof typeof seoKeywords], page.primaryKeyword, `${page.path} keyword must match seoKeywords`);

  const canonical = canonicalUrl(page.path);
  assert.ok(canonical.startsWith("https://www.sagestoneinc.com/"), `${page.path} canonical must use HTTPS www`);
  assert.ok(canonical.endsWith("/"), `${page.path} canonical must use normalized trailing slash`);
  assert.ok(!redirects[page.path], `${page.path} must not be both indexable and redirected`);

  assertJson(organizationJsonLd(), `${page.path} Organization schema`);
  assertJson(websiteJsonLd(), `${page.path} WebSite schema`);
  assertJson(pageJsonLd(page), `${page.path} page schema`);

  if (page.path !== "/") {
    const breadcrumb = breadcrumbJsonLd(page);
    assert.equal(breadcrumb?.["@type"], "BreadcrumbList", `${page.path} needs BreadcrumbList schema`);
    assert.ok(breadcrumb.itemListElement.length >= 2, `${page.path} breadcrumb needs home and current page`);
  }

  if (page.kind === "service") {
    const schema = pageJsonLd(page);
    assert.equal(schema["@type"], "Service", `${page.path} needs Service schema`);
    assert.equal(schema.url, canonical, `${page.path} Service schema URL must match canonical`);
    assert.equal(schema.serviceType, page.primaryKeyword, `${page.path} Service schema must be page-specific`);
  }

  if (page.kind === "blog" && page.path !== "/blog") {
    const schema = pageJsonLd(page);
    assert.equal(schema["@type"], "BlogPosting", `${page.path} needs BlogPosting schema`);
    assert.match(page.published ?? "", /^\d{4}-\d{2}-\d{2}$/, `${page.path} needs stable datePublished`);
    assert.match(page.modified ?? "", /^\d{4}-\d{2}-\d{2}$/, `${page.path} needs stable dateModified`);
  }

  for (const link of getInternalLinksByPath(page.path)) {
    assert.ok(routeSet.has(link), `${page.path} links to missing route ${link}`);
    assert.ok(!redirects[link], `${page.path} links to redirected route ${link}`);
    assert.equal(link, link.toLowerCase(), `${page.path} links to noncanonical case variant ${link}`);
  }
}

const inbound = new Map<string, number>();
for (const page of sitemapEntries) inbound.set(page.path, 0);

for (const page of sitemapEntries) {
  for (const link of getInternalLinksByPath(page.path)) {
    inbound.set(link, (inbound.get(link) ?? 0) + 1);
  }
}

for (const page of sitemapEntries) {
  if (page.path === "/") continue;
  assert.ok((inbound.get(page.path) ?? 0) > 0, `${page.path} is orphaned`);
}

assert.equal(Object.keys(seoKeywords).length, sitemapEntries.length, "Keyword map must cover each indexable route exactly once");

console.log(`SEO check passed for ${sitemapEntries.length} indexable routes.`);
