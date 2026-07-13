/* ============================================================================
   Central SEO configuration — single source of truth for metadata & schema.
   Titles ≤ ~60 chars, descriptions ≤ ~155 chars.
   ========================================================================== */

export const SITE = {
  name: "SageStone",
  legalName: "SageStone Inc",
  url: "https://www.sagestoneinc.com",
  description:
    "Dedicated Filipino virtual assistants, customer support, and back-office talent for U.S. founders and growing teams.",
  email: "hello@sagestoneinc.com",
  // Phone: keep the tel: value in E.164 and the display value human-readable.
  phoneTel: "+12149459934",
  phoneDisplay: "+1 (214) 945-9934",
  // Fill these in as profiles go live — they feed Organization.sameAs.
  sameAs: [] as string[],
} as const;

/** Absolute canonical URL for a given path ("/", "/about", ...). */
export function canonical(path: string): string {
  if (path === "/") return `${SITE.url}/`;
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export type PageMeta = {
  title: string;
  description: string;
};

/** Per-route metadata for static pages (dynamic pages build their own). */
export const pageMeta = {
  home: {
    title: "Dedicated Virtual Assistants & Outsourcing | SageStone",
    description:
      "Scale your operations with dedicated Filipino virtual assistants, customer support & back-office talent. Onboard in 24–72 hours. Book a discovery call.",
  },
  about: {
    title: "About SageStone | Dedicated Remote Support Team",
    description:
      "SageStone gives U.S. founders and teams reliable, vetted Filipino remote talent with hands-on oversight. Learn how we work and what we stand for.",
  },
  services: {
    title: "Outsourcing & Virtual Assistant Services | SageStone",
    description:
      "Six core support disciplines — VA, customer support, workflow, back office, executive & remote ops. Dedicated talent with real oversight.",
  },
  whyPhilippines: {
    title: "Why Outsource to the Philippines | SageStone",
    description:
      "Why the Philippines is the top choice for remote support: English fluency, time-zone overlap, cost efficiency & culture fit. See the advantages.",
  },
  industries: {
    title: "Industries We Support | SageStone Outsourcing",
    description:
      "Dedicated remote support built for agencies, e-commerce, real estate, founders, service companies & professional firms. Find your fit.",
  },
  caseStudies: {
    title: "Client Results & Case Studies | SageStone",
    description:
      "Real outcomes from teams that scaled with SageStone support — reclaimed hours, faster response times, and cleaner operations.",
  },
  faq: {
    title: "Frequently Asked Questions | SageStone",
    description:
      "Answers on onboarding, matching, pricing, security, and how SageStone's dedicated remote support model works.",
  },
  contact: {
    title: "Book a Discovery Call | Contact SageStone",
    description:
      "Tell us what you need and get matched with dedicated remote talent in 24–72 hours. Book your free discovery call with SageStone.",
  },
  blog: {
    title: "Insights on Outsourcing & Remote Support | SageStone",
    description:
      "Guides on hiring virtual assistants, outsourcing customer support, and scaling operations with dedicated remote talent.",
  },
  privacy: {
    title: "Privacy Policy | SageStone",
    description:
      "How SageStone collects, uses, and protects your information when you use our website and services.",
  },
  terms: {
    title: "Terms of Service | SageStone",
    description:
      "The terms that govern your use of the SageStone website and services.",
  },
  notFound: {
    title: "Page Not Found | SageStone",
    description: "The page you're looking for may have moved or no longer exists.",
  },
} satisfies Record<string, PageMeta>;

/* ---- Per-service SEO (keyword-mapped titles/descriptions by slug) -------- */
export const serviceMeta: Record<string, PageMeta> = {
  "virtual-assistant": {
    title: "Virtual Assistant Services | Hire a Dedicated VA | SageStone",
    description:
      "Hire a dedicated virtual assistant to run your calendar, inbox & daily operations. Vetted Filipino talent, onboarded in days. Book a call.",
  },
  "customer-support": {
    title: "Customer Support Outsourcing | SageStone",
    description:
      "Outsource email, chat & help-desk support with on-brand, consistent responses. Cut response times 50% and scale without losing quality.",
  },
  "workflow-support": {
    title: "Workflow & Operations Support | SageStone",
    description:
      "Remove operational bottlenecks with structured workflow support. Cleaner handoffs, documented processes, and fewer dropped tasks.",
  },
  "back-office": {
    title: "Back Office Support & Outsourcing | SageStone",
    description:
      "Reliable data entry, documentation & admin work handled with 99.5% accuracy. Reduce overhead without adding headcount.",
  },
  "executive-assistance": {
    title: "Executive Assistant Services | SageStone",
    description:
      "Discreet, senior-level executive assistance for leaders who need leverage. Save 15+ hours a week. Book a discovery call.",
  },
  "remote-operations": {
    title: "Remote Operations Support | SageStone",
    description:
      "Embedded operators who keep your systems running as you scale. Structure, coordination, and process — built in.",
  },
};
