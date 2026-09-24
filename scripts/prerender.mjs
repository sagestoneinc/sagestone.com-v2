// Static prerender for the Vite SPA.
//
// Runs after `vite build` (client → dist/) and `vite build --ssr` (server
// entry → dist-ssr/). For every route in src/app/content/seo.ts it renders the
// React tree to HTML, swaps in that route's <head> tags, and writes
// dist/<route>/index.html so crawlers get full content and links without JS.
// The untouched client template is kept as dist/app-shell.html, the SPA
// fallback for unknown URLs (see vercel.json).

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

const vercel = JSON.parse(await readFile(path.join(root, "vercel.json"), "utf8"));
const rewrites = new Map((vercel.rewrites ?? []).map((r) => [r.source, r.destination]));

const { render, routeMeta, renderHeadTags } = await import(
  pathToFileURL(path.join(ssrDir, "entry-server.js")).href
);

// SPA fallback shell (client-rendered, default head).
await writeFile(path.join(dist, "app-shell.html"), template);

const problems = [];
for (const meta of routeMeta) {
  if (meta.title.length > 60) problems.push(`${meta.path}: title is ${meta.title.length} chars (max 60)`);
  if (meta.description.length > 155)
    problems.push(`${meta.path}: description is ${meta.description.length} chars (max 155)`);

  const file = meta.path === "/" ? "index.html" : `${meta.path.slice(1)}/index.html`;
  if (meta.path !== "/" && rewrites.get(meta.path) !== `/${file}`)
    problems.push(`${meta.path}: add { "source": "${meta.path}", "destination": "/${file}" } to vercel.json rewrites`);
  if (existsSync(path.join(root, "public", file)))
    problems.push(`${meta.path}: public/${file} already exists; remove the route from seo.ts or the static file`);

  const appHtml = await render(meta.path);
  const html = template
    .replace(HEAD_BLOCK, renderHeadTags(meta))
    .replace(ROOT_DIV, `<div id="root">${appHtml}</div>`);

  const out = path.join(dist, file);
  await mkdir(path.dirname(out), { recursive: true });
  await writeFile(out, html);
  console.log(`[prerender] ${meta.path} → dist/${file}`);
}

await rm(ssrDir, { recursive: true, force: true });
if (problems.length) fail(`Route checks failed:\n  - ${problems.join("\n  - ")}`);
console.log(`[prerender] ${routeMeta.length} routes prerendered.`);
