// Static prerender for the Vite SPA.
//
// Runs after `vite build` (client → dist/) and `vite build --ssr` (server
// entry → dist-ssr/). For every route in src/app/content/seo.ts it renders the
// React tree to HTML, swaps in that route's <head> tags, and writes
// dist/<route>/index.html so crawlers get full content and links without JS.
//
// It also writes:
//   dist/404.html     the NotFound page, served by Vercel with a real 404 status
//   dist/sitemap.xml  generated from the same route list
//
// vercel.json rewrites /<path> → /<path>/index.html; when no such file exists
// the request falls through to 404.html.

import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");

const HEAD_BLOCK = /<!-- route-head:start[\s\S]*?<!-- route-head:end -->/;
const ROOT_DIV = '<div id="root"></div>';

const fail = (msg) => {
  console.error(`\n[prerender] ${msg}\n`);
  process.exit(1);
};

const template = await readFile(path.join(dist, "index.html"), "utf8");
if (!HEAD_BLOCK.test(template)) fail("index.html is missing the route-head markers.");
if (!template.includes(ROOT_DIV)) fail(`index.html is missing ${ROOT_DIV}.`);

const { render, routeMeta, notFoundMeta, renderHeadTags, renderSitemap } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

const page = async (url, meta) =>
  template
    .replace(HEAD_BLOCK, renderHeadTags(meta))
    .replace(ROOT_DIV, `<div id="root">${await render(url)}</div>`);

const problems = [];
const seen = new Set();
for (const meta of routeMeta) {
  if (seen.has(meta.path)) problems.push(`${meta.path}: duplicate route`);
  seen.add(meta.path);
  if (meta.title.length > 60) problems.push(`${meta.path}: title is ${meta.title.length} chars (max 60)`);
  if (meta.description.length > 155)
    problems.push(`${meta.path}: description is ${meta.description.length} chars (max 155)`);

  const file = meta.path === "/" ? "index.html" : `${meta.path.slice(1)}/index.html`;
  if (existsSync(path.join(root, "public", file)))
    problems.push(`${meta.path}: public/${file} already exists; remove the route from seo.ts or the static file`);

  const html = await page(meta.path, meta);
  if (meta.path !== "/" && html.includes("This page couldn't be found"))
    problems.push(`${meta.path}: rendered the NotFound page; is the route registered in App.tsx?`);

  const out = path.join(dist, file);
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, html);
}

// Any path no route matches renders NotFound.
await writeFile(path.join(dist, "404.html"), await page("/__not-found__", notFoundMeta));
await writeFile(path.join(dist, "sitemap.xml"), renderSitemap());

await rm(ssrDir, { recursive: true, force: true });
if (problems.length) fail(`Route checks failed:\n  - ${problems.join("\n  - ")}`);
console.log(`[prerender] ${routeMeta.length} routes prerendered, plus 404.html and sitemap.xml.`);
