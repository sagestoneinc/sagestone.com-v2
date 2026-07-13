/* ============================================================================
   JSON-LD schema builders (Schema.org). Returned objects are stringified into
   <script type="application/ld+json"> by the <Seo> component.
   ========================================================================== */
import { SITE, canonical } from "../../content/seo";

type Json = Record<string, unknown>;

/** Organization — emitted site-wide from the Layout. */
export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    alternateName: SITE.name,
    url: `${SITE.url}/`,
    description: SITE.description,
    email: SITE.email,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneTel,
      email: SITE.email,
      contactType: "sales",
      areaServed: "US",
      availableLanguage: ["English"],
    },
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
  };
}

/** WebSite — emitted site-wide from the Layout. */
export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: `${SITE.url}/`,
    publisher: { "@type": "Organization", name: SITE.legalName },
  };
}

/** Service — one per service detail page. */
export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: canonical(input.path),
    provider: {
      "@type": "Organization",
      name: SITE.legalName,
      url: `${SITE.url}/`,
    },
    areaServed: { "@type": "Country", name: "United States" },
    serviceType: input.name,
  };
}

/** FAQPage — for /faq and service detail FAQs. */
export function faqPageSchema(
  faqs: { question: string; answer: string }[]
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** BreadcrumbList — inner pages. Pass ordered [{name, path}] from Home down. */
export function breadcrumbSchema(
  crumbs: { name: string; path: string }[]
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: canonical(c.path),
    })),
  };
}

/** Article — blog posts. */
export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    url: canonical(input.path),
    mainEntityOfPage: canonical(input.path),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@type": "Organization", name: SITE.legalName },
    publisher: { "@type": "Organization", name: SITE.legalName },
  };
}
