import { useEffect } from "react";
import { SITE } from "../../content/seo";
import { organizationSchema, websiteSchema } from "./schema";

type SeoProps = {
  title: string;
  description: string;
  /** Canonical path, e.g. "/services/virtual-assistant". */
  path: string;
  /** Set true on pages that should not be indexed (404, etc.). */
  noindex?: boolean;
  /** One or more page-specific JSON-LD objects to embed. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  ogType?: "website" | "article";
};

const MANAGED = "data-seo-managed";

/** Create-or-update a <meta> tag, keyed by name/property. */
function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    el.setAttribute(MANAGED, "true");
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/** Create-or-update the canonical <link>. */
function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    el.setAttribute(MANAGED, "true");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Per-page metadata: title, description, canonical, robots, Open Graph,
 * Twitter cards, and JSON-LD. Manages document.head imperatively (no external
 * dependency), so it is deterministic in this CSR SPA. Organization + WebSite
 * schema are always emitted; page-specific JSON-LD is appended.
 *
 * NOTE: tags are applied at runtime. JS-rendering crawlers (Googlebot) read
 * them; for non-rendering crawlers/social scrapers, prerendering/SSG is the
 * recommended follow-up.
 */
export function Seo({
  title,
  description,
  path,
  noindex = false,
  jsonLd,
  ogType = "website",
}: SeoProps) {
  useEffect(() => {
    const url = path === "/" ? `${SITE.url}/` : `${SITE.url}${path}`;

    document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    upsertCanonical(url);

    // Open Graph
    upsertMeta("property", "og:type", ogType);
    upsertMeta("property", "og:site_name", SITE.name);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);

    // Twitter
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    // JSON-LD — always Organization + WebSite, then page-specific blocks.
    // Remove previously injected LD scripts first so routes don't accumulate.
    document
      .querySelectorAll(`script[type="application/ld+json"][${MANAGED}]`)
      .forEach((n) => n.remove());

    const pageBlocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];
    const blocks = [organizationSchema(), websiteSchema(), ...pageBlocks];
    for (const block of blocks) {
      const s = document.createElement("script");
      s.type = "application/ld+json";
      s.setAttribute(MANAGED, "true");
      s.textContent = JSON.stringify(block);
      document.head.appendChild(s);
    }
  }, [title, description, path, noindex, ogType, jsonLd]);

  return null;
}
