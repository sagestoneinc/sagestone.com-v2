import type { SitePage } from "./site";
import { canonicalUrl, siteConfig } from "./site";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: `${siteConfig.domain}/`,
    logo: `${siteConfig.domain}${siteConfig.logo}`,
    image: `${siteConfig.domain}${siteConfig.icon}`,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    areaServed: "Worldwide",
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.email,
      telephone: siteConfig.phoneDisplay,
      contactType: "customer support",
      areaServed: "Worldwide",
      availableLanguage: "English",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: `${siteConfig.domain}/`,
    description: siteConfig.description,
  };
}

export function breadcrumbJsonLd(page: SitePage) {
  const parts = page.path.split("/").filter(Boolean);
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteConfig.domain}/`,
    },
    ...parts.map((part, index) => {
      const itemPath = `/${parts.slice(0, index + 1).join("/")}`;
      return {
        "@type": "ListItem",
        position: index + 2,
        name: titleFromSlug(part),
        item: canonicalUrl(itemPath),
      };
    }),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items,
  };
}

export function pageJsonLd(page: SitePage) {
  if (page.kind === "service") {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      provider: {
        "@type": "Organization",
        name: siteConfig.name,
        url: `${siteConfig.domain}/`,
      },
      areaServed: "Worldwide",
      serviceType: page.primaryKeyword,
      description: page.description,
      url: canonicalUrl(page.path),
    };
  }

  if (page.kind === "blog" && page.path !== "/blog") {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: page.h1,
      description: page.description,
      datePublished: page.published,
      dateModified: page.modified,
      author: {
        "@type": "Organization",
        name: siteConfig.name,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.domain}${siteConfig.icon}`,
        },
      },
      mainEntityOfPage: canonicalUrl(page.path),
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.h1,
    description: page.description,
    url: canonicalUrl(page.path),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: `${siteConfig.domain}/`,
    },
  };
}

export function faqJsonLd(page: SitePage) {
  if (!page.faqs?.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
