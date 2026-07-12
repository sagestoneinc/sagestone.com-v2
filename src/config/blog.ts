export type BlogPost = {
  slug: string;
  path: string;
  title: string;
  description: string;
  h1: string;
  datePublished: string;
  dateModified: string;
  image: string;
  sections: { heading: string; body: string }[];
  relatedServiceLinks: { label: string; to: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-hire-a-virtual-assistant",
    path: "/blog/how-to-hire-a-virtual-assistant",
    title: "How to Hire a Virtual Assistant: Practical Hiring Guide",
    description:
      "A practical guide to hiring a virtual assistant, including role scoping, process setup, onboarding expectations and quality controls.",
    h1: "How to hire a virtual assistant with a reliable process",
    datePublished: "2025-09-18",
    dateModified: "2026-07-12",
    image:
      "https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    sections: [
      {
        heading: "Define the role before you start hiring",
        body: "List recurring outcomes, decision boundaries and communication expectations so candidates are evaluated against real operating needs.",
      },
      {
        heading: "Build a repeatable onboarding path",
        body: "Prepare SOPs, escalation notes and tool access sequences before start date to avoid a slow first month.",
      },
      {
        heading: "Measure quality, not just activity",
        body: "Use practical quality checkpoints tied to accuracy, timeliness and communication standards instead of raw task counts.",
      }
    ],
    relatedServiceLinks: [
      { label: "outsourced business support solutions", to: "/solutions" },
      { label: "business operations support services", to: "/business-operations-support" },
    ],
  },
  {
    slug: "what-does-an-ecommerce-virtual-assistant-do",
    path: "/blog/what-does-an-ecommerce-virtual-assistant-do",
    title: "What Does an Ecommerce Virtual Assistant Do?",
    description:
      "Learn what an ecommerce virtual assistant does across orders, catalog updates, customer support coordination and daily store operations.",
    h1: "What does an ecommerce virtual assistant do day to day?",
    datePublished: "2025-11-06",
    dateModified: "2026-07-12",
    image:
      "https://images.unsplash.com/photo-1765371513276-a74f1ecbcf7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    sections: [
      {
        heading: "Order and return support",
        body: "A dependable assistant manages routine order follow-up and return workflow communication so customers stay informed.",
      },
      {
        heading: "Catalog and content coordination",
        body: "They support listing updates, product data checks and merchandising detail tasks that often bottleneck in-house teams.",
      },
      {
        heading: "Support queue collaboration",
        body: "Ecommerce assistants coordinate with customer support workflows to keep account and order inquiries moving.",
      }
    ],
    relatedServiceLinks: [
      { label: "ecommerce virtual assistant services", to: "/ecommerce-virtual-assistant" },
      { label: "customer support outsourcing", to: "/customer-support-outsourcing" },
    ],
  },
  {
    slug: "customer-support-outsourcing-best-practices",
    path: "/blog/customer-support-outsourcing-best-practices",
    title: "Customer Support Outsourcing Best Practices for Growth Teams",
    description:
      "Use these customer support outsourcing best practices to maintain quality, improve escalations and keep reporting useful as volume grows.",
    h1: "Customer support outsourcing best practices for consistent quality",
    datePublished: "2026-01-14",
    dateModified: "2026-07-12",
    image:
      "https://images.unsplash.com/photo-1772475385458-21163e41f4ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200",
    sections: [
      {
        heading: "Document escalation paths early",
        body: "Escalation clarity prevents delayed responses and protects customer trust when edge cases appear.",
      },
      {
        heading: "Train for voice and context",
        body: "A strong onboarding plan includes tone guardrails, issue patterns and practical scenario training.",
      },
      {
        heading: "Report on quality signals",
        body: "Track recurring issue categories, reopen trends and handoff speed to improve support quality over time.",
      }
    ],
    relatedServiceLinks: [
      { label: "customer support outsourcing services", to: "/customer-support-outsourcing" },
      { label: "business operations support services", to: "/business-operations-support" },
    ],
  },
];

export const BLOG_POST_MAP = new Map(BLOG_POSTS.map((post) => [post.slug, post]));
