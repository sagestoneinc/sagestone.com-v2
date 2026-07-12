import { seoKeywords } from "../../config/seo-keywords";

export type SeoRouteConfig = {
  path: string;
  title: string;
  description: string;
  h1: string;
  indexable: boolean;
  type: "website" | "service" | "blog";
  serviceName?: string;
  breadcrumb: { name: string; path: string }[];
};

export const seoRoutes: Record<string, SeoRouteConfig> = {
  "/": {
    path: "/",
    title: "Virtual Assistant & Operations Support Services | SageStone",
    description:
      "Scale with dependable virtual assistants, customer support, e-commerce assistance and business operations support from SageStone Inc.",
    h1: "Structured support for businesses built to grow.",
    indexable: true,
    type: "website",
    breadcrumb: [{ name: "Home", path: "/" }],
  },
  "/solutions": {
    path: "/solutions",
    title: "Outsourced Business Support Solutions | SageStone Inc",
    description:
      "Explore flexible virtual assistant, customer support, e-commerce and business operations solutions designed for growing teams.",
    h1: "Flexible Business Support Solutions for Growing Teams",
    indexable: true,
    type: "website",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
    ],
  },
  "/virtual-assistant-services": {
    path: "/virtual-assistant-services",
    title: "Virtual Assistant Services for Daily Operations | SageStone Inc",
    description:
      "Get dependable virtual assistant support for scheduling, inbox management, coordination, and recurring administrative operations.",
    h1: "Virtual Assistant Services for Daily Operational Support",
    indexable: true,
    type: "service",
    serviceName: "Virtual Assistant Services",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
      { name: "Virtual Assistant Services", path: "/virtual-assistant-services" },
    ],
  },
  "/business-operations-support": {
    path: "/business-operations-support",
    title: "Business Operations Support Services | SageStone Inc",
    description:
      "Improve workflows, CRM organization, reporting, documentation and recurring business operations with dependable remote support.",
    h1: "Business Operations Support Services for Workflow Clarity",
    indexable: true,
    type: "service",
    serviceName: "Business Operations Support Services",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
      { name: "Business Operations Support", path: "/business-operations-support" },
    ],
  },
  "/ecommerce-virtual-assistant": {
    path: "/ecommerce-virtual-assistant",
    title: "Ecommerce Virtual Assistant Services | SageStone Inc",
    description:
      "Get reliable e-commerce support for orders, returns, product updates, customer messages, store administration and everyday back-office operations.",
    h1: "Ecommerce Virtual Assistant Services for Store Operations",
    indexable: true,
    type: "service",
    serviceName: "Ecommerce Virtual Assistant Services",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
      { name: "Ecommerce Virtual Assistant", path: "/ecommerce-virtual-assistant" },
    ],
  },
  "/gohighlevel-virtual-assistant": {
    path: "/gohighlevel-virtual-assistant",
    title: "GoHighLevel Virtual Assistant Services | SageStone Inc",
    description:
      "Get dependable GoHighLevel virtual assistant support for CRM updates, pipelines, workflows, follow-ups, reporting and platform administration.",
    h1: "GoHighLevel Virtual Assistant Services for CRM and Workflow Support",
    indexable: true,
    type: "service",
    serviceName: "GoHighLevel Virtual Assistant Services",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
      { name: "GoHighLevel Virtual Assistant", path: "/gohighlevel-virtual-assistant" },
    ],
  },
  "/web-maintenance-support": {
    path: "/web-maintenance-support",
    title: "Website Maintenance Support Services | SageStone Inc",
    description:
      "Keep your website current with dependable support for content edits, landing pages, forms, links, publishing coordination and quality assurance.",
    h1: "Website Maintenance Support Services for Ongoing Updates",
    indexable: true,
    type: "service",
    serviceName: "Website Maintenance Support Services",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
      { name: "Website Maintenance Support", path: "/web-maintenance-support" },
    ],
  },
  "/customer-support-outsourcing": {
    path: "/customer-support-outsourcing",
    title: "Customer Support Outsourcing Services | SageStone Inc",
    description:
      "Outsource email, chat and help-desk support to a dependable remote team trained around your workflows, brand voice and escalation process.",
    h1: "Reliable Customer Support Outsourcing for Growing Businesses",
    indexable: true,
    type: "service",
    serviceName: "Customer Support Outsourcing Services",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Solutions", path: "/solutions" },
      { name: "Customer Support Outsourcing", path: "/customer-support-outsourcing" },
    ],
  },
  "/about": {
    path: "/about",
    title: "About SageStone Inc | Remote Business Support Partner",
    description:
      "Learn how SageStone delivers dependable virtual assistant and operations support through structured onboarding and process-first execution.",
    h1: "A steady operational partner for ambitious teams.",
    indexable: true,
    type: "website",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about" },
    ],
  },
  "/experience": {
    path: "/experience",
    title: "SageStone Experience | How We Deliver Support",
    description:
      "See how the SageStone experience combines discovery, onboarding, and ongoing support to keep operations dependable as you grow.",
    h1: "What the SageStone experience looks like",
    indexable: true,
    type: "website",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Experience", path: "/experience" },
    ],
  },
  "/blog": {
    path: "/blog",
    title: "Virtual Assistant and Operations Insights | SageStone Blog",
    description:
      "Read practical insights on virtual assistant support, customer operations, and scalable workflow management for growing teams.",
    h1: "Virtual assistant and operations insights",
    indexable: true,
    type: "website",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
    ],
  },
  "/blog/how-to-hire-a-virtual-assistant": {
    path: "/blog/how-to-hire-a-virtual-assistant",
    title: "How to Hire a Virtual Assistant for Sustainable Growth",
    description:
      "A practical guide to hiring virtual assistant support with clear responsibilities, onboarding structure, and process documentation.",
    h1: "How to hire a virtual assistant with operational clarity",
    indexable: true,
    type: "blog",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "How to Hire a Virtual Assistant", path: "/blog/how-to-hire-a-virtual-assistant" },
    ],
  },
  "/blog/what-does-an-ecommerce-virtual-assistant-do": {
    path: "/blog/what-does-an-ecommerce-virtual-assistant-do",
    title: "What Does an Ecommerce Virtual Assistant Do?",
    description:
      "Learn what ecommerce virtual assistants can support across orders, product updates, customer communication, and recurring store operations.",
    h1: "What an ecommerce virtual assistant can support day to day",
    indexable: true,
    type: "blog",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: "What Does an Ecommerce Virtual Assistant Do", path: "/blog/what-does-an-ecommerce-virtual-assistant-do" },
    ],
  },
  "/industries": {
    path: "/industries",
    title: "Industries We Support | SageStone Inc",
    description:
      "Explore the industries SageStone supports with structured virtual assistant and operations services tailored to business workflows.",
    h1: "Support shaped to your industry's realities.",
    indexable: true,
    type: "website",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Industries", path: "/industries" },
    ],
  },
  "/why-philippines": {
    path: "/why-philippines",
    title: "Why the Philippines for Outsourced Support | SageStone",
    description:
      "Understand why teams choose the Philippines for remote operational support and how SageStone ensures reliable delivery.",
    h1: "A talent market built for dependable remote support.",
    indexable: true,
    type: "website",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Why Philippines", path: "/why-philippines" },
    ],
  },
  "/case-studies": {
    path: "/case-studies",
    title: "Virtual Assistant and Operations Case Studies | SageStone",
    description:
      "Review how SageStone supports growing teams with structured virtual assistant and operations workflows.",
    h1: "Proof, presented plainly.",
    indexable: true,
    type: "website",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Case Studies", path: "/case-studies" },
    ],
  },
  "/faq": {
    path: "/faq",
    title: "Virtual Assistant Services FAQ | SageStone Inc",
    description:
      "Find answers to common questions about SageStone virtual assistant, customer support, and operations support services.",
    h1: "Clear answers, calmly given.",
    indexable: true,
    type: "website",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "FAQ", path: "/faq" },
    ],
  },
  "/contact": {
    path: "/contact",
    title: "Book a Consultation | SageStone Inc",
    description:
      "Book a consultation with SageStone to discuss virtual assistant, customer support, and operations support priorities.",
    h1: "Let's talk about the support you need.",
    indexable: true,
    type: "website",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ],
  },
};

export const indexableRoutes = Object.values(seoRoutes).filter((route) => route.indexable);

export function getRouteSeo(pathname: string): SeoRouteConfig | undefined {
  return seoRoutes[pathname];
}

export function getPrimaryKeyword(pathname: string): string | undefined {
  return seoKeywords[pathname];
}
