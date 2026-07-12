const DEFAULT_SITE_URL = "https://www.sagestoneinc.com";

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

function normalizeOrigin(input?: string): string {
  if (!input) return DEFAULT_SITE_URL;

  try {
    const url = new URL(input);
    const protocol = url.protocol === "https:" ? "https:" : "https:";
    const hostname = url.hostname.toLowerCase();
    const finalHost = hostname === "sagestoneinc.com" ? "www.sagestoneinc.com" : hostname;
    return `${protocol}//${finalHost}`;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function getSiteOrigin() {
  return normalizeOrigin(import.meta.env.VITE_SITE_URL);
}

export function normalizePath(pathname: string): string {
  const withLeadingSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const withoutDuplicateSlashes = withLeadingSlash.replace(/\/+/g, "/");

  if (withoutDuplicateSlashes !== "/" && withoutDuplicateSlashes.endsWith("/")) {
    return withoutDuplicateSlashes.slice(0, -1);
  }

  return withoutDuplicateSlashes;
}

export function cleanSearchParams(searchParams?: URLSearchParams | string): URLSearchParams {
  const params =
    typeof searchParams === "string"
      ? new URLSearchParams(searchParams)
      : searchParams
        ? new URLSearchParams(searchParams)
        : new URLSearchParams();

  const cleaned = new URLSearchParams();

  params.forEach((value, key) => {
    if (!TRACKING_PARAMS.has(key.toLowerCase())) {
      cleaned.append(key, value);
    }
  });

  return cleaned;
}

export function buildCanonicalUrl(pathname: string, searchParams?: URLSearchParams | string): string {
  const origin = getSiteOrigin();
  const path = normalizePath(pathname);
  const canonical = new URL(path, origin);
  const cleaned = cleanSearchParams(searchParams);

  if (cleaned.size > 0) {
    canonical.search = cleaned.toString();
  }

  return canonical.toString();
}
