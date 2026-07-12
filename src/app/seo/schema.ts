import { buildCanonicalUrl, getSiteOrigin } from "./canonical";

type BreadcrumbItem = { name: string; path: string };

type ServiceSchemaInput = {
  name: string;
  serviceType: string;
  description: string;
  path: string;
  audience?: string;
};

type BlogSchemaInput = {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
};

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SageStone Inc",
    url: getSiteOrigin(),
    logo: buildCanonicalUrl("/sagestone-logo.png"),
    description:
      "SageStone provides structured virtual assistant, customer support, ecommerce, website maintenance, and business operations support services for growing teams.",
    email: "hello@sagestone.co",
    areaServed: "Global",
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SageStone Inc",
    url: getSiteOrigin(),
    publisher: {
      "@type": "Organization",
      name: "SageStone Inc",
      url: getSiteOrigin(),
    },
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
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

export function getServiceSchema(input: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    provider: {
      "@type": "Organization",
      name: "SageStone Inc",
      url: getSiteOrigin(),
    },
    url: buildCanonicalUrl(input.path),
    ...(input.audience
      ? {
          audience: {
            "@type": "BusinessAudience",
            audienceType: input.audience,
          },
        }
      : {}),
  };
}

export function getBlogPostingSchema(input: BlogSchemaInput) {
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
      url: getSiteOrigin(),
      logo: {
        "@type": "ImageObject",
        url: buildCanonicalUrl("/sagestone-logo.png"),
      },
    },
    mainEntityOfPage: buildCanonicalUrl(input.path),
    url: buildCanonicalUrl(input.path),
  };
}
