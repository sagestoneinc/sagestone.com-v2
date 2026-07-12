import { useEffect } from "react";
import { buildCanonicalUrl } from "./canonical";
import { getOrganizationSchema, getWebsiteSchema } from "./schema";

type SeoHeadProps = {
  title: string;
  description: string;
  path: string;
  indexable?: boolean;
  schemas?: Record<string, unknown>[];
};

function upsertMeta(name: string, content: string) {
  let meta = document.querySelector(`meta[name=\"${name}\"]`) as HTMLMetaElement | null;
  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("name", name);
    document.head.appendChild(meta);
  }
  meta.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }
  canonical.setAttribute("href", href);
}

function setStructuredData(schemas: Record<string, unknown>[]) {
  document.querySelectorAll("script[data-seo-schema='true']").forEach((node) => node.remove());

  for (const schema of schemas) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo-schema", "true");
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}

export function SeoHead({ title, description, path, indexable = true, schemas = [] }: SeoHeadProps) {
  useEffect(() => {
    document.title = title;

    upsertMeta("description", description);
    upsertMeta("robots", indexable ? "index,follow" : "noindex,nofollow");

    const canonical = buildCanonicalUrl(path);
    upsertCanonical(canonical);

    setStructuredData([getOrganizationSchema(), getWebsiteSchema(), ...schemas]);
  }, [title, description, path, indexable, schemas]);

  return null;
}
