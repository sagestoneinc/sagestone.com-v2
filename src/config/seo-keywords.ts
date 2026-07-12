export const seoKeywords = {
  "/": "virtual assistant services",
  "/services": "virtual assistant and operations support services",
  "/solutions": "outsourced business support solutions",
  "/about": "SageStone Inc",
  "/experience": "SageStone experience",
  "/faq": "virtual assistant services FAQ",
  "/contact": "contact SageStone virtual assistant services",
  "/case-studies": "virtual assistant operations case studies",
  "/operations-audit": "operations audit for growing teams",
  "/blog": "virtual assistant and operations insights",
  "/virtual-assistant-services": "managed virtual assistant services",
  "/customer-support-outsourcing": "customer support outsourcing services",
  "/ecommerce-customer-support-outsourcing": "ecommerce customer support outsourcing",
  "/ecommerce-virtual-assistant": "ecommerce virtual assistant services",
  "/gohighlevel-virtual-assistant": "GoHighLevel virtual assistant services",
  "/real-estate-virtual-assistant": "real estate virtual assistant services",
  "/social-media-virtual-assistant": "social media virtual assistant support",
  "/business-operations-support": "business operations support services",
  "/web-maintenance-support": "website maintenance support services",
  "/virtual-assistant-vs-in-house-admin": "virtual assistant vs in-house admin",
  "/outsourced-support-for-small-businesses": "outsourced support for small businesses",
  "/industries-we-serve": "industries served by virtual assistant services",
  "/solutions/virtual-operations-admin": "virtual operations admin support",
  "/solutions/real-estate-virtual-assistant": "real estate virtual assistant solution",
  "/solutions/bookkeeping-support": "bookkeeping support coordination",
  "/solutions/social-media-marketing-support": "social media marketing support",
  "/solutions/lead-generation-support": "lead generation support",
  "/solutions/graphic-design-support": "graphic design support coordination",
  "/solutions/data-entry-web-research": "data entry web research support",
  "/blog/virtual-assistant-tasks-for-small-business": "virtual assistant tasks for small business",
  "/blog/how-to-outsource-customer-support-without-losing-quality": "how to outsource customer support",
  "/blog/ecommerce-virtual-assistant-20-tasks-you-can-delegate": "ecommerce virtual assistant tasks",
  "/blog/virtual-assistant-tasks-to-delegate": "virtual assistant tasks to delegate",
  "/blog/customer-support-outsourcing-checklist": "customer support outsourcing checklist",
  "/blog/ecommerce-customer-support-best-practices": "ecommerce customer support best practices",
  "/blog/how-to-create-sops-for-virtual-assistants": "how to create SOPs for virtual assistants",
  "/blog/how-to-hire-a-virtual-assistant": "how to hire a virtual assistant",
  "/blog/when-to-outsource-customer-support": "when to outsource customer support",
  "/blog/what-does-an-ecommerce-virtual-assistant-do": "what does an ecommerce virtual assistant do",
  "/blog/business-operations-support-guide": "business operations support guide",
  "/blog/improve-saas-customer-onboarding": "improve SaaS customer onboarding",
  "/blog/shopify-customer-support-workflow-checklist": "Shopify customer support workflow checklist",
  "/case-studies/ecommerce-support-response-times": "ecommerce support workflow case study",
  "/case-studies/real-estate-operations-support": "real estate operations support case study",
  "/case-studies/saas-onboarding-workflow-case-study": "SaaS onboarding workflow case study",
  "/case-studies/shopify-support-operations-case-study": "Shopify support operations case study",
  "/free-workflow-assessment": "free workflow assessment",
  "/terms": "SageStone terms of service",
  "/privacy": "SageStone privacy policy",
} as const;

export type SeoRoute = keyof typeof seoKeywords;

export function primaryKeywordFor(path: string) {
  const keyword = seoKeywords[path as SeoRoute];

  if (!keyword) {
    throw new Error(`Missing primary keyword for indexable route: ${path}`);
  }

  return keyword;
}
