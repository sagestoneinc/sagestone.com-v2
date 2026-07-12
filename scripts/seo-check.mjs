import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const routeConfig = JSON.parse(fs.readFileSync(path.join(ROOT, "src/config/seo-routes.json"), "utf8"));
const keywordMap = JSON.parse(fs.readFileSync(path.join(ROOT, "src/config/seo-keywords.json"), "utf8"));
const sitemapXml = fs.readFileSync(path.join(ROOT, "public/sitemap.xml"), "utf8");

const errors = [];

const indexableRoutes = routeConfig.filter((route) => route.indexable);
const nonIndexableRoutes = routeConfig.filter((route) => !route.indexable);

function normalizeKeyword(keyword) {
  return keyword.trim().toLowerCase().replace(/\s+/g, " ");
}

const titles = new Map();
const descriptions = new Map();
const keywords = new Map();

for (const route of indexableRoutes) {
  if (!route.title) errors.push(`Missing title for indexable route: ${route.path}`);
  if (!route.description) errors.push(`Missing meta description for indexable route: ${route.path}`);
  if (!route.h1) errors.push(`Missing H1 in route config: ${route.path}`);

  if (titles.has(route.title)) {
    errors.push(`Duplicate title on ${titles.get(route.title)} and ${route.path}`);
  }
  titles.set(route.title, route.path);

  if (descriptions.has(route.description)) {
    errors.push(`Duplicate description on ${descriptions.get(route.description)} and ${route.path}`);
  }
  descriptions.set(route.description, route.path);

  const keyword = keywordMap[route.path];
  if (!keyword) {
    errors.push(`Missing primary keyword for indexable route: ${route.path}`);
  } else {
    const normalized = normalizeKeyword(keyword);
    if (keywords.has(normalized)) {
      errors.push(`Duplicate keyword \"${keyword}\" on ${keywords.get(normalized)} and ${route.path}`);
    }
    keywords.set(normalized, route.path);
  }
}

for (const keywordRoute of Object.keys(keywordMap)) {
  if (!indexableRoutes.some((route) => route.path === keywordRoute)) {
    errors.push(`Keyword map references non-indexable route: ${keywordRoute}`);
  }
}

const sitemapUrls = Array.from(sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)).map((match) => match[1]);
const sitemapPathSet = new Set(
  sitemapUrls.map((url) => {
    try {
      const parsed = new URL(url);
      if (parsed.protocol !== "https:" || parsed.hostname !== "www.sagestoneinc.com") {
        errors.push(`Sitemap URL must use HTTPS + www: ${url}`);
      }
      const pathname = parsed.pathname === "/" ? "/" : parsed.pathname.replace(/\/$/, "");
      return pathname;
    } catch {
      errors.push(`Invalid sitemap URL: ${url}`);
      return "";
    }
  }),
);

for (const route of indexableRoutes) {
  if (!sitemapPathSet.has(route.path)) {
    errors.push(`Indexable route missing from sitemap: ${route.path}`);
  }
}

for (const route of nonIndexableRoutes) {
  if (sitemapPathSet.has(route.path)) {
    errors.push(`Non-indexable route should not be in sitemap: ${route.path}`);
  }
}

for (const route of routeConfig) {
  const canonical = new URL(route.path === "/" ? "/" : route.path, "https://www.sagestoneinc.com");
  if (canonical.protocol !== "https:" || canonical.hostname !== "www.sagestoneinc.com") {
    errors.push(`Canonical hostname mismatch: ${route.path}`);
  }
}

const serviceRoutes = routeConfig.filter((route) => route.type === "service" && route.indexable);
if (serviceRoutes.length === 0) {
  errors.push("No indexable service routes found.");
}

const blogRoutes = routeConfig.filter((route) => route.type === "blog" && route.indexable);
if (blogRoutes.length === 0) {
  errors.push("No indexable blog article routes found.");
}

for (const route of indexableRoutes) {
  if (route.path !== "/" && !route.path.startsWith("/")) {
    errors.push(`Invalid route path format: ${route.path}`);
  }
}

const appFiles = [
  "src/app/pages/Home.tsx",
  "src/app/pages/Solutions.tsx",
  "src/app/pages/ServiceLanding.tsx",
  "src/app/pages/Blog.tsx",
  "src/app/pages/BlogArticle.tsx",
  "src/app/components/layout/Header.tsx",
  "src/app/components/layout/Footer.tsx",
];

const knownRoutes = new Set(routeConfig.map((route) => route.path));

for (const file of appFiles) {
  const fullPath = path.join(ROOT, file);
  const source = fs.readFileSync(fullPath, "utf8");
  const links = Array.from(source.matchAll(/to=\"(\/[^\"]*)\"/g)).map((match) => match[1]);

  for (const link of links) {
    if (link.startsWith("/services") || link === "/case-studies") {
      errors.push(`Link points to redirect/legacy route (${link}) in ${file}`);
      continue;
    }

    const cleaned = link.replace(/\/$/, "") || "/";
    if (!knownRoutes.has(cleaned) && !cleaned.startsWith("/blog/")) {
      errors.push(`Potential broken internal link (${link}) in ${file}`);
    }
  }
}

if (errors.length > 0) {
  console.error("SEO validation failed:\n");
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log("SEO validation passed.");
