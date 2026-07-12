import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { seoKeywords } from "../src/config/seo-keywords";
import {
  canonicalUrl,
  getAllRoutePaths,
  getInternalLinksByPath,
  getPageByPath,
  getRedirects,
  sitemapEntries,
} from "../src/lib/site";

describe("SageStone route inventory", () => {
  it("preserves all useful live sitemap routes in the new source app", () => {
    const routes = getAllRoutePaths();

    for (const route of [
      "/",
      "/services",
      "/about",
      "/contact",
      "/gohighlevel-virtual-assistant",
      "/blog/customer-support-outsourcing-checklist",
      "/case-studies/shopify-support-operations-case-study",
      "/free-workflow-assessment",
      "/privacy",
      "/terms",
    ]) {
      assert.ok(routes.includes(route), `${route} should be preserved`);
    }
  });

  it("keeps canonical URLs normalized with www and trailing slashes only in metadata output", () => {
    assert.equal(canonicalUrl("/services"), "https://www.sagestoneinc.com/services/");
    assert.equal(canonicalUrl("/"), "https://www.sagestoneinc.com/");
  });

  it("classifies route preservation strategy for every sitemap entry", () => {
    for (const page of sitemapEntries) {
      assert.match(page.routeStatus, /^(Preserve|Rewrite|Consolidate|Redirect)$/);
      assert.ok(page.title.length >= 20, `${page.path} needs a useful title`);
      assert.ok(page.description.length >= 70, `${page.path} needs a useful description`);
      assert.ok(page.h1.length >= 12, `${page.path} needs an H1`);
    }
  });

  it("maps legacy live redirects to permanent destinations", () => {
    const redirects = getRedirects();

    assert.equal(redirects["/faqs"], "/faq");
    assert.equal(redirects["/customer-support"], "/customer-support-outsourcing");
    assert.equal(redirects["/crm-admin-support"], "/business-operations-support");
    assert.equal(redirects["/gohighlevel-virtual-assistant"], undefined);
  });
});

describe("SageStone page SEO", () => {
  it("defines homepage content for initial HTML rendering", () => {
    const home = getPageByPath("/");

    assert.equal(home?.h1, "Structured calm for growing teams.");
    assert.ok(home?.sections.some((section) => section.heading.includes("operations partner")));
    assert.ok(home?.primaryCta.href.includes("calendly.com"));
  });

  it("defines visible FAQs only where FAQ schema should be emitted", () => {
    const faq = getPageByPath("/faq");
    const services = getPageByPath("/services");

    assert.ok((faq?.faqs?.length ?? 0) >= 6);
    assert.equal(services?.faqs, undefined);
  });

  it("keeps every indexable route mapped to one unique primary keyword", () => {
    const normalizedKeywords = new Set<string>();

    for (const page of sitemapEntries) {
      assert.equal(seoKeywords[page.path as keyof typeof seoKeywords], page.primaryKeyword);

      const normalized = page.primaryKeyword.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
      assert.ok(!normalizedKeywords.has(normalized), `${page.path} duplicates keyword ${page.primaryKeyword}`);
      normalizedKeywords.add(normalized);
    }

    assert.equal(Object.keys(seoKeywords).length, sitemapEntries.length);
  });

  it("keeps important service pages internally linked with canonical paths", () => {
    const solutionLinks = getInternalLinksByPath("/solutions");

    for (const route of [
      "/virtual-assistant-services",
      "/customer-support-outsourcing",
      "/business-operations-support",
      "/ecommerce-virtual-assistant",
      "/gohighlevel-virtual-assistant",
      "/web-maintenance-support",
    ]) {
      assert.ok(solutionLinks.includes(route), `/solutions should link to ${route}`);
      assert.ok(getAllRoutePaths().includes(route), `${route} should be indexable`);
    }
  });
});
