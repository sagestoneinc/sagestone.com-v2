// Vite plugin: Markdown blog posts in src/content/blog/*.md.
//
//   import { posts, loadPostBody } from "virtual:blog";
//
// `posts` holds metadata only (small, safe to ship in the main bundle).
// `loadPostBody(slug)` dynamically imports that post's pre-rendered HTML,
// so each post body is its own chunk. Markdown is converted at build time.

import fs from "node:fs";
import path from "node:path";
import type { Plugin } from "vite";
import { markdownToHtml, parseFrontmatter, type Heading } from "./markdown";

export type BlogPostMeta = {
  slug: string;
  title: string;
  /** Optional shorter <title> when the headline is too long for 60 chars. */
  seoTitle?: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  category: string;
  tags: string[];
  services: string[];
  image?: string;
  imageAlt?: string;
  readingMinutes: number;
};

const VIRTUAL_INDEX = "virtual:blog";
const BODY_PREFIX = "virtual:blog-post/";
const RESOLVED = "\0";

const REQUIRED = ["title", "description", "date"] as const;

export function blogPlugin(dir: string): Plugin {
  const blogDir = path.resolve(dir);

  const readAll = () => {
    if (!fs.existsSync(blogDir)) return [];
    return fs
      .readdirSync(blogDir)
      .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
      .map((file) => {
        const slug = file.replace(/\.md$/, "");
        const src = fs.readFileSync(path.join(blogDir, file), "utf8");
        const { data, body } = parseFrontmatter(src);
        for (const key of REQUIRED) {
          if (!data[key]) throw new Error(`[blog] ${file}: missing frontmatter "${key}"`);
        }
        if (!/^\d{4}-\d{2}-\d{2}$/.test(String(data.date))) {
          throw new Error(`[blog] ${file}: date must be YYYY-MM-DD`);
        }
        const { html, headings, text } = markdownToHtml(body);
        const list = (v: unknown) => (Array.isArray(v) ? v : v ? [String(v)] : []);
        const meta: BlogPostMeta = {
          slug,
          title: String(data.title),
          seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
          description: String(data.description),
          date: String(data.date),
          updated: data.updated ? String(data.updated) : undefined,
          author: data.author ? String(data.author) : "Jesel Cura",
          category: data.category ? String(data.category) : "Operations",
          tags: list(data.tags),
          services: list(data.services),
          image: data.image ? String(data.image) : undefined,
          imageAlt: data.imageAlt ? String(data.imageAlt) : undefined,
          readingMinutes: Math.max(1, Math.round(text.split(" ").length / 225)),
        };
        return { meta, html, headings, draft: String(data.draft) === "true", file };
      })
      .sort((a, b) => b.meta.date.localeCompare(a.meta.date));
  };

  let isBuild = false;
  const published = () => readAll().filter((p) => !(isBuild && p.draft));

  return {
    name: "sagestone-blog",
    configResolved(config) {
      isBuild = config.command === "build";
    },
    resolveId(id) {
      if (id === VIRTUAL_INDEX || id.startsWith(BODY_PREFIX)) return RESOLVED + id;
    },
    load(id) {
      if (id !== RESOLVED + VIRTUAL_INDEX && !id.startsWith(RESOLVED + BODY_PREFIX)) return;
      const key = id.slice(RESOLVED.length);
      const posts = published();
      posts.forEach((p) => this.addWatchFile(path.join(blogDir, p.file)));

      if (key === VIRTUAL_INDEX) {
        const loaders = posts
          .map((p) => `  ${JSON.stringify(p.meta.slug)}: () => import(${JSON.stringify(BODY_PREFIX + p.meta.slug)}),`)
          .join("\n");
        return [
          `export const posts = ${JSON.stringify(posts.map((p) => p.meta))};`,
          `const loaders = {\n${loaders}\n};`,
          `export function loadPostBody(slug) { const l = loaders[slug]; return l ? l() : Promise.resolve(null); }`,
        ].join("\n");
      }
      const slug = key.slice(BODY_PREFIX.length);
      const post = posts.find((p) => p.meta.slug === slug);
      if (!post) return "export default null;";
      const body: { html: string; headings: Heading[] } = { html: post.html, headings: post.headings };
      return `export default ${JSON.stringify(body)};`;
    },
    handleHotUpdate(ctx) {
      if (!ctx.file.startsWith(blogDir)) return;
      for (const mod of ctx.server.moduleGraph.idToModuleMap.values()) {
        if (mod.id?.startsWith(RESOLVED + "virtual:blog")) ctx.server.moduleGraph.invalidateModule(mod);
      }
      ctx.server.ws.send({ type: "full-reload" });
      return [];
    },
  };
}
