declare module "virtual:blog" {
  export type BlogPostMeta = {
    slug: string;
    title: string;
    /** Optional shorter <title> when the headline is too long for 60 chars. */
    seoTitle?: string;
    description: string;
    /** YYYY-MM-DD */
    date: string;
    updated?: string;
    author: string;
    category: string;
    tags: string[];
    /** Related service slugs, used for internal links. */
    services: string[];
    image?: string;
    imageAlt?: string;
    readingMinutes: number;
  };
  export type BlogPostBody = {
    html: string;
    headings: { depth: number; text: string; id: string }[];
  };
  export const posts: BlogPostMeta[];
  export function loadPostBody(slug: string): Promise<{ default: BlogPostBody } | null>;
}
