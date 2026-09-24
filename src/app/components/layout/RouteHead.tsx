import { useEffect } from "react";
import { useLocation } from "react-router";
import { getRouteMeta, SITE_URL } from "../../content/seo";

/* Keeps <head> in sync with the current route on client-side navigation.
 * The prerendered HTML already carries the same tags (scripts/prerender.mjs),
 * so on first load this is a no-op; it matters when navigating in-app. */

function upsert(selector: string, create: () => HTMLElement, attr: string, value: string | undefined) {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (value === undefined) {
    el?.remove();
    return;
  }
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const meta = (key: "name" | "property", name: string) => () => {
  const el = document.createElement("meta");
  el.setAttribute(key, name);
  return el;
};

export function RouteHead() {
  const { pathname } = useLocation();

  useEffect(() => {
    const m = getRouteMeta(pathname);
    if (!m) return; // unknown routes (404) keep the defaults; NotFound adds noindex
    const url = `${SITE_URL}${m.path === "/" ? "/" : m.path}`;
    const image = m.image && (m.image.startsWith("http") ? m.image : `${SITE_URL}${m.image}`);

    document.title = m.title;
    upsert('meta[name="description"]', meta("name", "description"), "content", m.description);
    upsert('link[rel="canonical"]', () => Object.assign(document.createElement("link"), { rel: "canonical" }), "href", url);
    upsert('meta[property="og:type"]', meta("property", "og:type"), "content", m.ogType ?? "website");
    upsert('meta[property="og:title"]', meta("property", "og:title"), "content", m.title);
    upsert('meta[property="og:description"]', meta("property", "og:description"), "content", m.description);
    upsert('meta[property="og:url"]', meta("property", "og:url"), "content", url);
    upsert('meta[property="og:image"]', meta("property", "og:image"), "content", image);
    upsert('meta[name="twitter:title"]', meta("name", "twitter:title"), "content", m.title);
    upsert('meta[name="twitter:description"]', meta("name", "twitter:description"), "content", m.description);
    upsert('meta[name="twitter:image"]', meta("name", "twitter:image"), "content", image);

    document.getElementById("route-jsonld")?.remove();
    if (m.jsonLd) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "route-jsonld";
      script.textContent = JSON.stringify(m.jsonLd);
      document.head.appendChild(script);
    }
  }, [pathname]);

  return null;
}
