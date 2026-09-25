import { posts, type BlogPostMeta } from "virtual:blog";

export { posts };
export type { BlogPostMeta };

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

/** "2026-09-25" → "September 25, 2026" (UTC, so server and client agree). */
export const formatPostDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

/** Other posts, preferring ones that share a service or category. */
export const relatedPosts = (post: BlogPostMeta, limit = 3) =>
  posts
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({
      p,
      score:
        p.services.filter((s) => post.services.includes(s)).length * 2 + (p.category === post.category ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ p }) => p);
