const FALLBACK_SITE_URL = "https://www.sagestoneinc.com";

function normalizeBaseUrl(value?: string): string {
  if (!value) return FALLBACK_SITE_URL;
  try {
    const parsed = new URL(value);
    parsed.hash = "";
    parsed.search = "";
    parsed.pathname = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return FALLBACK_SITE_URL;
  }
}

export const siteUrl = normalizeBaseUrl(
  import.meta.env.VITE_SITE_URL || import.meta.env.VITE_PUBLIC_SITE_URL,
);

const TRACKING_PARAMS = new Set([
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
  "msclkid",
]);

export function buildCanonicalUrl(pathOrUrl: string): string {
  const safePath = pathOrUrl.trim() || "/";
  const path = safePath.startsWith("http") ? new URL(safePath).pathname : safePath;
  const normalizedPath = `/${path.replace(/^\/+|\/+$/g, "")}`.replace(/\/+/g, "/");
  const withSlash = normalizedPath === "" ? "/" : normalizedPath;

  const canonical = new URL(withSlash, `${siteUrl}/`);
  [...canonical.searchParams.keys()].forEach((key) => {
    if (TRACKING_PARAMS.has(key.toLowerCase())) {
      canonical.searchParams.delete(key);
    }
  });
  canonical.hash = "";
  if (canonical.pathname !== "/" && canonical.pathname.endsWith("/")) {
    canonical.pathname = canonical.pathname.slice(0, -1);
  }
  return canonical.toString();
}
