import type { MetadataRoute } from "next";

import { canonicalUrl, sitemapEntries } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapEntries.map((page) => ({
    url: canonicalUrl(page.path),
    lastModified: page.modified ?? "2026-07-05",
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority: page.path === "/" ? 1 : 0.8,
  }));
}
