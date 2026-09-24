import { services } from "./site";

/* ---------- Per-route <head> metadata ----------
 * Single source of truth for titles, descriptions, canonicals, social tags
 * and JSON-LD. Used in two places:
 *   - <RouteHead /> updates document.head on client-side navigation
 *   - scripts/prerender.mjs bakes the same tags into each route's static HTML
 * Keep titles under 60 chars and descriptions under 155.
 */

export const SITE_URL = "https://www.sagestoneinc.com";

export type RouteMeta = {
  path: string;
  title: string;
  description: string;
  /** Absolute or root-relative image for og:image / twitter:image. */
  image?: string;
  ogType?: "website" | "article";
  jsonLd?: Record<string, unknown>;
};

const clip = (text: string, max = 155) =>
  text.length <= max ? text : `${text.slice(0, max - 1).replace(/\s+\S*$/, "")}…`;

/* ---------- Kuha case study ---------- */
export const KUHA_URL = "https://www.kuha.app";
export const KUHA_PATH = "/case-studies/kuha";
const KUHA_TITLE = "Case Study: Launching Kuha, a QR Event Photo Platform";
const KUHA_DESCRIPTION =
  "How SageStone built the go-to-market, content, AI publishing, and SEO systems behind Kuha, a QR event photo sharing app in the Philippines.";

const kuhaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: KUHA_TITLE,
  description: KUHA_DESCRIPTION,
  url: `${SITE_URL}${KUHA_PATH}`,
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}${KUHA_PATH}` },
  // TODO(kuha): update if the publish date changes; add dateModified on edits.
  datePublished: "2026-09-24",
  inLanguage: "en",
  // TODO(kuha): add "image": "<absolute URL>" once the hero screenshot exists.
  author: { "@type": "Organization", name: "Sage Stone Inc.", url: SITE_URL },
  publisher: {
    "@type": "Organization",
    name: "Sage Stone Inc.",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/icon-512.png` },
  },
  about: { "@type": "SoftwareApplication", name: "Kuha", url: KUHA_URL },
  mentions: [
    {
      "@type": "SoftwareApplication",
      name: "Kuha",
      url: KUHA_URL,
      applicationCategory: "PhotographyApplication",
      operatingSystem: "Web",
      description: "QR code event photo sharing app for weddings, debuts, and celebrations in the Philippines.",
    },
  ],
};

export const routeMeta: RouteMeta[] = [
  {
    path: "/",
    title: "Dedicated Virtual Assistants & Outsourcing | SageStone",
    description:
      "Scale your operations with dedicated Filipino virtual assistants, customer support & back-office talent. Onboard in 24–72 hours. Book a discovery call.",
  },
  {
    path: "/about",
    title: "About SageStone | Remote Operations Partner",
    description:
      "SageStone gives growth-focused businesses a dependable operational layer: remote support that is thoughtful, structured, and genuinely embedded.",
  },
  {
    path: "/services",
    title: "Remote Support & Outsourcing Services | SageStone",
    description:
      "Virtual assistants, customer support, back office, workflow, and executive support, matched to your workflows and overseen for consistency.",
  },
  ...services.map((s) => ({
    path: `/services/${s.slug}`,
    title: `${s.title} | SageStone`,
    description: clip(s.summary),
  })),
  {
    path: "/why-philippines",
    title: "Why Hire Remote Talent in the Philippines | SageStone",
    description:
      "Professionalism, communication, and adaptability: why the Philippines is a strong market for dependable remote support, and how SageStone fits it.",
  },
  {
    path: "/industries",
    title: "Industries We Support | SageStone",
    description:
      "Remote support shaped to your industry, from agencies and e-commerce to real estate and professional services.",
  },
  {
    path: "/case-studies",
    title: "Case Studies | SageStone",
    description:
      "How SageStone brings structure, systems, and dependable support to growth-focused teams and product launches, and the outcomes that follow.",
  },
  {
    path: KUHA_PATH,
    title: "Kuha Case Study: Event Photo App Launch | SageStone",
    description: KUHA_DESCRIPTION,
    ogType: "article",
    // TODO(kuha): set image: "/case-studies/kuha/og.jpg" (1200×630) once it exists.
    jsonLd: kuhaJsonLd,
  },
  {
    path: "/faq",
    title: "FAQ | SageStone",
    description:
      "Answers about onboarding, matching, pricing, and working with SageStone's dedicated remote support team.",
  },
  {
    path: "/contact",
    title: "Contact SageStone | Book a Discovery Call",
    description:
      "Tell us about your operations and book a discovery call. Most SageStone engagements begin onboarding within 24–72 hours.",
  },
  {
    path: "/terms",
    title: "Terms of Service | SageStone",
    description:
      "The terms that govern your use of the SageStone website and the support services we provide.",
  },
];

export function getRouteMeta(pathname: string): RouteMeta | undefined {
  const normalized = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return routeMeta.find((m) => m.path === normalized);
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const absolute = (url: string) => (url.startsWith("http") ? url : `${SITE_URL}${url}`);

/** Head tags for a route, as an HTML string (used by the prerender step). */
export function renderHeadTags(meta: RouteMeta): string {
  const url = `${SITE_URL}${meta.path === "/" ? "/" : meta.path}`;
  const t = escapeHtml(meta.title);
  const d = escapeHtml(meta.description);
  const tags = [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${meta.ogType ?? "website"}" />`,
    `<meta property="og:site_name" content="SageStone" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    meta.image && `<meta property="og:image" content="${absolute(meta.image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    meta.image && `<meta name="twitter:image" content="${absolute(meta.image)}" />`,
    meta.jsonLd &&
      `<script type="application/ld+json" id="route-jsonld">${JSON.stringify(meta.jsonLd).replace(/</g, "\\u003c")}</script>`,
  ];
  return tags.filter(Boolean).join("\n      ");
}
