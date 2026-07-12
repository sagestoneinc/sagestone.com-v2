import { buildCanonicalUrl } from "./site-url";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SageStone Inc",
    url: buildCanonicalUrl("/"),
    logo: buildCanonicalUrl("/logo.svg"),
    description:
      "SageStone Inc provides virtual assistant, customer support, and business operations support services for growing teams.",
    email: "hello@sagestone.co",
    areaServed: "Worldwide",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "hello@sagestone.co",
      },
    ],
    sameAs: [
      "https://www.linkedin.com",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SageStone Inc",
    url: buildCanonicalUrl("/"),
    publisher: {
      "@type": "Organization",
      name: "SageStone Inc",
      url: buildCanonicalUrl("/"),
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: buildCanonicalUrl(item.path),
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.name,
    description: input.description,
    url: buildCanonicalUrl(input.path),
    provider: {
      "@type": "Organization",
      name: "SageStone Inc",
      url: buildCanonicalUrl("/"),
    },
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: "Growing businesses",
    },
  };
}

export function blogPostingSchema(input: {
  headline: string;
  description: string;
  image: string;
  path: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: input.headline,
    description: input.description,
    image: input.image,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    author: {
      "@type": "Organization",
      name: input.authorName,
    },
    publisher: {
      "@type": "Organization",
      name: "SageStone Inc",
      logo: {
        "@type": "ImageObject",
        url: buildCanonicalUrl("/logo.svg"),
      },
    },
    mainEntityOfPage: buildCanonicalUrl(input.path),
    url: buildCanonicalUrl(input.path),
  };
}

export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: buildCanonicalUrl(item.path),
    })),
  };
}
