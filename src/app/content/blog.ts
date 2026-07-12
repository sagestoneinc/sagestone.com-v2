export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  modifiedAt: string;
  authorName: string;
  heroImage: string;
  primaryKeyword: string;
  sections: { heading: string; body: string }[];
  relatedServiceLinks: { label: string; href: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-hire-a-virtual-assistant",
    title: "How to Hire a Virtual Assistant for Sustainable Growth",
    description:
      "A practical framework for choosing virtual assistant support based on workflows, responsibilities, and onboarding readiness.",
    excerpt:
      "Learn how to define responsibilities, document workflows, and onboard virtual assistant support without creating operational confusion.",
    publishedAt: "2025-11-01",
    modifiedAt: "2026-06-15",
    authorName: "SageStone Inc",
    heroImage:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    primaryKeyword: "how to hire a virtual assistant",
    sections: [
      {
        heading: "Start with recurring responsibilities",
        body:
          "List recurring tasks that consume team time each week. Prioritize work that follows repeatable processes rather than one-off strategic decisions.",
      },
      {
        heading: "Define outcomes before assigning tasks",
        body:
          "Clarify what success looks like for each responsibility. A clear outcome, expected turnaround, and escalation path will improve consistency from day one.",
      },
      {
        heading: "Document your workflow and tools",
        body:
          "Prepare lightweight SOPs, tool access, and handoff expectations before onboarding. This shortens ramp time and reduces rework.",
      },
      {
        heading: "Use a structured onboarding cadence",
        body:
          "Plan first-week check-ins, weekly reviews, and quality checkpoints. Consistency in onboarding improves long-term support quality.",
      },
    ],
    relatedServiceLinks: [
      { label: "virtual assistant services", href: "/virtual-assistant-services" },
      { label: "business operations support", href: "/business-operations-support" },
      { label: "outsourced business support solutions", href: "/solutions" },
    ],
  },
  {
    slug: "what-does-an-ecommerce-virtual-assistant-do",
    title: "What Does an Ecommerce Virtual Assistant Do?",
    description:
      "Understand the day-to-day responsibilities ecommerce virtual assistants can support across orders, listings, and customer communication.",
    excerpt:
      "From order workflows to product updates, this guide outlines where ecommerce virtual assistant support can improve operational consistency.",
    publishedAt: "2025-12-10",
    modifiedAt: "2026-06-20",
    authorName: "SageStone Inc",
    heroImage:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    primaryKeyword: "what does an ecommerce virtual assistant do",
    sections: [
      {
        heading: "Order and returns workflow support",
        body:
          "Ecommerce assistants help maintain order workflows, returns coordination, and status follow-up based on documented team processes.",
      },
      {
        heading: "Catalog and product listing updates",
        body:
          "They support routine product updates, category organization, and merchandising changes so store data stays current.",
      },
      {
        heading: "Customer inquiry coordination",
        body:
          "Assistants can support inbox and help-desk workflows, triage recurring questions, and route escalations clearly.",
      },
      {
        heading: "Back-office ecommerce operations",
        body:
          "Recurring support tasks can include reporting preparation, data checks, and process documentation updates.",
      },
    ],
    relatedServiceLinks: [
      { label: "ecommerce virtual assistant services", href: "/ecommerce-virtual-assistant" },
      { label: "customer support outsourcing", href: "/customer-support-outsourcing" },
      { label: "business operations support", href: "/business-operations-support" },
    ],
  },
];

export const blogPostBySlug = Object.fromEntries(
  blogPosts.map((post) => [post.slug, post]),
) as Record<string, BlogPost>;
