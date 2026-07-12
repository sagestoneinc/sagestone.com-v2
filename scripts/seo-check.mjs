import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const routeSeoPath = path.join(root, "src/app/seo/route-seo.ts");
const keywordPath = path.join(root, "src/config/seo-keywords.ts");
const sitemapPath = path.join(root, "public/sitemap.xml");
const indexPath = path.join(root, "index.html");
const seoHeadPath = path.join(root, "src/app/seo/SeoHead.tsx");

const routeSource = fs.readFileSync(routeSeoPath, "utf8");
const keywordSource = fs.readFileSync(keywordPath, "utf8");
const sitemapSource = fs.readFileSync(sitemapPath, "utf8");
const indexSource = fs.readFileSync(indexPath, "utf8");
const seoHeadSource = fs.readFileSync(seoHeadPath, "utf8");

const routeRegex = /"([^\"]+)":\s*\{([\s\S]*?)\n  \},/g;
const routes = [];

for (const match of routeSource.matchAll(routeRegex)) {
  const routePath = match[1];
  const block = match[2];
  const title = block.match(/title:\s*"([\s\S]*?)",/m)?.[1] ?? "";
  const description = block.match(/description:\s*"([\s\S]*?)",/m)?.[1] ?? "";
  const h1 = block.match(/h1:\s*"([\s\S]*?)",/m)?.[1] ?? "";
  const indexable = block.includes("indexable: true");
  const type = block.match(/type:\s*"([^"]+)"/)?.[1] ?? "website";
  const breadcrumbCount = (block.match(/\{ name:/g) || []).length;
  routes.push({ path: routePath, title, description, h1, indexable, type, breadcrumbCount });
}

const keywordMap = new Map();
for (const match of keywordSource.matchAll(/"([^\"]+)":\s*"([\s\S]*?)",/g)) {
  keywordMap.set(match[1], match[2]);
}

const normalizePath = (value) => {
  if (!value) return "/";
  const clean = value.split("?")[0].split("#")[0];
  if (clean === "/") return "/";
  return clean.replace(/\/+$/, "");
};

const indexableRoutes = routes.filter((route) => route.indexable).map((route) => route.path);
const failures = [];

const titles = new Map();
const descriptions = new Map();
const keywords = new Map();

for (const route of routes.filter((r) => r.indexable)) {
  if (!route.title) failures.push(`Missing title: ${route.path}`);
  if (!route.description) failures.push(`Missing description: ${route.path}`);
  if (!route.h1) failures.push(`Missing h1: ${route.path}`);

  if (titles.has(route.title)) failures.push(`Duplicate title: ${route.title}`);
  titles.set(route.title, route.path);

  if (descriptions.has(route.description)) failures.push(`Duplicate description: ${route.description}`);
  descriptions.set(route.description, route.path);

  const keyword = keywordMap.get(route.path);
  if (!keyword) {
    failures.push(`Missing primary keyword: ${route.path}`);
  } else {
    const normalized = keyword.trim().toLowerCase().replace(/\s+/g, " ");
    if (keywords.has(normalized)) {
      failures.push(`Duplicate primary keyword: ${keyword} (${keywords.get(normalized)} + ${route.path})`);
    }
    keywords.set(normalized, route.path);
  }

  if (route.path !== "/" && route.breadcrumbCount < 2) {
    failures.push(`Missing breadcrumb trail for ${route.path}`);
  }
}

const sitemapUrls = [...sitemapSource.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
const sitemapPaths = new Set(sitemapUrls.map((url) => normalizePath(url.replace("https://www.sagestoneinc.com", ""))));

for (const url of sitemapUrls) {
  if (!url.startsWith("https://www.sagestoneinc.com")) {
    failures.push(`Sitemap URL is not HTTPS + www: ${url}`);
  }
}

for (const route of indexableRoutes) {
  if (!sitemapPaths.has(normalizePath(route))) {
    failures.push(`Indexable route missing from sitemap: ${route}`);
  }
}

for (const pathValue of sitemapPaths) {
  if (!indexableRoutes.includes(pathValue)) {
    failures.push(`Non-indexable or unknown route appears in sitemap: ${pathValue}`);
  }
}

const appDir = path.join(root, "src/app");
const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(ts|tsx)$/.test(entry.name)) files.push(full);
  }
}
walk(appDir);

const linkCounts = new Map(indexableRoutes.map((route) => [route, 0]));
const knownInternalRoutes = new Set([
  ...indexableRoutes,
  "/services",
  "/services/:slug",
]);

for (const file of files) {
  const source = fs.readFileSync(file, "utf8");
  const matches = source.matchAll(/(?:to|href)=\"([^\"]+)\"/g);
  for (const match of matches) {
    const href = match[1];
    if (!href.startsWith("/")) continue;
    const normalized = normalizePath(href);

    if (normalized.includes(":")) continue;

    if (!knownInternalRoutes.has(normalized)) {
      failures.push(`Broken or unknown internal link target: ${normalized} (${path.relative(root, file)})`);
      continue;
    }

    if (linkCounts.has(normalized)) {
      linkCounts.set(normalized, (linkCounts.get(normalized) || 0) + 1);
    }
  }
}

for (const route of indexableRoutes) {
  if (route === "/") continue;
  if ((linkCounts.get(route) || 0) < 1) {
    failures.push(`Orphaned indexable route (no inbound links found): ${route}`);
  }
}

const serviceRoutes = routes.filter((route) => route.indexable && route.type === "service");
if (serviceRoutes.length === 0) {
  failures.push("No service routes configured for Service schema coverage.");
}

const blogRoutes = routes.filter((route) => route.indexable && route.type === "blog");
if (blogRoutes.length === 0) {
  failures.push("No blog routes configured for BlogPosting schema coverage.");
}

if (/noindex/i.test(indexSource)) {
  failures.push("index.html still contains noindex directives.");
}

if (!seoHeadSource.includes("serviceSchema")) {
  failures.push("Seo head implementation does not include Service schema injection.");
}

if (!routeSource.includes("breadcrumb")) {
  failures.push("Route SEO configuration is missing breadcrumb definitions.");
}

if (failures.length > 0) {
  console.error("SEO checks failed:\n");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("SEO checks passed.");
console.log(`Validated ${indexableRoutes.length} indexable routes.`);
