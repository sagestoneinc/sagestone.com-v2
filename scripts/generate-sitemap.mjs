import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const routeSeoPath = path.join(root, "src/app/seo/route-seo.ts");
const outputPath = path.join(root, "public/sitemap.xml");
const source = fs.readFileSync(routeSeoPath, "utf8");

const routeRegex = /"([^\"]+)":\s*\{([\s\S]*?)\n  \},/g;
const paths = [];

for (const match of source.matchAll(routeRegex)) {
  const routePath = match[1];
  const block = match[2];
  if (!block.includes("indexable: true")) continue;
  paths.push(routePath);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
  .map((route) => `  <url><loc>https://www.sagestoneinc.com${route === "/" ? "/" : route}</loc></url>`)
  .join("\n")}\n</urlset>\n`;

fs.writeFileSync(outputPath, xml);
console.log(`Generated sitemap with ${paths.length} URLs.`);
