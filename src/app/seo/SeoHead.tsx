import { useEffect } from "react";
import { getPrimaryKeyword, getRouteSeo } from "./route-seo";
import { buildCanonicalUrl } from "./site-url";
import {
  blogPostingSchema,
  breadcrumbSchema,
  itemListSchema,
  organizationSchema,
  serviceSchema,
  websiteSchema,
} from "./structured-data";
import { blogPostBySlug } from "../content/blog";
import { services } from "../content/site";

function upsertMeta(name: string, content: string) {
  let element = document.head.querySelector(`meta[name='${name}']`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("name", name);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

function replaceJsonLd(schemas: object[]) {
  document
    .querySelectorAll("script[data-seo-jsonld='true']")
    .forEach((node) => node.remove());

  schemas.forEach((schema, index) => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoJsonld = "true";
    script.dataset.seoIndex = String(index);
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

export function SeoHead({
  path,
  includeItemList = false,
}: {
  path: string;
  includeItemList?: boolean;
}) {
  useEffect(() => {
    const route = getRouteSeo(path);
    if (!route) return;

    const canonical = buildCanonicalUrl(route.path);
    document.title = route.title;
    upsertMeta("description", route.description);
    upsertMeta("robots", route.indexable ? "index, follow" : "noindex, nofollow");
    const keyword = getPrimaryKeyword(route.path);
    if (keyword) {
      upsertMeta("keywords", keyword);
    }
    upsertLink("canonical", canonical);

    const schemas: object[] = [organizationSchema(), websiteSchema()];

    if (route.path !== "/") {
      schemas.push(breadcrumbSchema(route.breadcrumb));
    }

    if (route.type === "service" && route.serviceName) {
      schemas.push(
        serviceSchema({
          name: route.serviceName,
          description: route.description,
          path: route.path,
        }),
      );
    }

    if (route.type === "blog") {
      const slug = route.path.split("/").at(-1);
      const post = slug ? blogPostBySlug[slug] : undefined;
      if (post) {
        schemas.push(
          blogPostingSchema({
            headline: post.title,
            description: post.description,
            image: post.heroImage,
            path: route.path,
            datePublished: post.publishedAt,
            dateModified: post.modifiedAt,
            authorName: post.authorName,
          }),
        );
      }
    }

    if (includeItemList && route.path === "/solutions") {
      schemas.push(itemListSchema(services.map((service) => ({ name: service.title, path: service.path }))));
    }

    replaceJsonLd(schemas);
  }, [path, includeItemList]);

  return null;
}
