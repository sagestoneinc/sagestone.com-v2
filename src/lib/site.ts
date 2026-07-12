export const siteConfig = {
  name: "SageStone Inc",
  domain: "https://www.sagestoneinc.com",
  description:
    "SageStone Inc provides virtual assistant services, customer support outsourcing, e-commerce support, website maintenance, and business operations support for founders and growing teams.",
  email: "hello@sagestoneinc.com",
  phoneDisplay: "+1 214-945-2234",
  phoneHref: "tel:+12149452234",
  calendlyUrl: "https://calendly.com/d/cym9-q4q-pnm",
  analyticsId: "G-6J7F2V82TP",
  logo: "/assets/sagestone-primary-logo-transparent.png",
  darkLogo: "/assets/sagestone-primary-logo-dark.png",
  icon: "/assets/sagestone-icon-512.png",
  ogImage: "/assets/sagestone-icon-512.png",
} as const;

export type RouteStatus = "Preserve" | "Rewrite" | "Consolidate" | "Redirect";
export type PageKind =
  | "home"
  | "landing"
  | "service"
  | "industry"
  | "blog"
  | "case-study"
  | "legal"
  | "contact";

export type Cta = {
  label: string;
  href: string;
  event: string;
};

export type PageSection = {
  heading: string;
  body: string;
  items?: string[];
};

export type Faq = {
  question: string;
  answer: string;
};

export type SitePage = {
  path: string;
  routeStatus: RouteStatus;
  kind: PageKind;
  title: string;
  description: string;
  h1: string;
  eyebrow?: string;
  intro: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  primaryCta: Cta;
  secondaryCta?: Cta;
  sections: PageSection[];
  faqs?: Faq[];
  published?: string;
  modified?: string;
};

const bookCall: Cta = {
  label: "Book a Discovery Call",
  href: siteConfig.calendlyUrl,
  event: "booking_intent_click",
};

const exploreServices: Cta = {
  label: "Explore Services",
  href: "/services",
  event: "internal_link_click",
};

const discussNeeds: Cta = {
  label: "Discuss Your Support Needs",
  href: "/contact",
  event: "contact_intent_click",
};

const assessment: Cta = {
  label: "Get a Free Workflow Assessment",
  href: "/free-workflow-assessment",
  event: "assessment_intent_click",
};

const commonFaqs: Faq[] = [
  {
    question: "What does a SageStone virtual assistant handle?",
    answer:
      "SageStone supports inboxes, calendars, customer follow-up, CRM updates, research, reporting, SOP documentation, e-commerce tasks, and recurring administrative workflows.",
  },
  {
    question: "Can SageStone work inside our existing tools?",
    answer:
      "Yes. The support model is built around the tools your team already uses, then adds clearer ownership, documentation, and communication rhythms.",
  },
  {
    question: "Is support ongoing or project based?",
    answer:
      "Both models can fit. Ongoing support works well for recurring operations, while focused projects help with cleanup, documentation, or launch support.",
  },
  {
    question: "How is SageStone different from a low-cost VA marketplace?",
    answer:
      "SageStone positions support around judgment, continuity, documentation, and proactive ownership instead of one-off task completion.",
  },
  {
    question: "Do you support e-commerce and Shopify operations?",
    answer:
      "Yes. SageStone can help with product updates, order support, customer replies, returns coordination, store QA, and recurring Shopify administration.",
  },
  {
    question: "How do we get started?",
    answer:
      "Start with a discovery call or workflow assessment. SageStone reviews your current bottlenecks and recommends a practical first support scope.",
  },
];

const serviceSections = (service: string, focus: string): PageSection[] => [
  {
    heading: `${service} with practical ownership`,
    body: `${focus} is strongest when responsibilities, communication standards, and handoffs are clear. SageStone helps define the work, document the workflow, and keep recurring tasks moving without adding management strain.`,
    items: [
      "Recurring task ownership",
      "Clear communication rhythms",
      "Tool and inbox coverage",
      "Documentation for repeatable work",
    ],
  },
  {
    heading: "What support can include",
    body: "Every engagement starts with the work that is creating friction today, then expands only where support is useful and sustainable.",
    items: [
      "Inbox triage and customer follow-up",
      "Calendar, CRM, and records upkeep",
      "Order, product, and admin updates",
      "SOP drafts and workflow cleanup",
    ],
  },
  {
    heading: "Built for calmer growth",
    body: "The goal is not simply to hand off tasks. The goal is to create steadier daily operations so founders and lean teams can lead with more focus.",
  },
];

const blogSection = (topic: string): PageSection[] => [
  {
    heading: `Why ${topic.toLowerCase()} matters`,
    body: "Growing teams often wait until operational work is already painful before documenting responsibilities. This guide explains the decision points, risks, and practical next steps.",
  },
  {
    heading: "What to review first",
    body: "Start with the tasks that repeat weekly, touch customers, delay leadership work, or require context that only one person currently holds.",
    items: [
      "Frequency and owner",
      "Customer impact",
      "Tool access required",
      "Definition of done",
    ],
  },
  {
    heading: "How SageStone can help",
    body: "SageStone turns recurring support needs into documented workflows with clear ownership, communication standards, and a practical path to delegation.",
  },
];

const caseStudySection = (context: string): PageSection[] => [
  {
    heading: "The operating challenge",
    body: `${context} The engagement focuses on reducing scattered ownership, clarifying response paths, and documenting repeatable work without inventing unsupported performance claims.`,
  },
  {
    heading: "The support model",
    body: "SageStone reviews the workflow, identifies recurring support needs, creates a simple operating rhythm, and keeps communication visible to the team.",
    items: [
      "Workflow review",
      "Support scope definition",
      "Documentation and handoff",
      "Recurring improvement checks",
    ],
  },
  {
    heading: "What changed",
    body: "The team gains clearer ownership, cleaner follow-up, and a more dependable support path for recurring operational details.",
  },
];

export const pages: SitePage[] = [
  {
    path: "/",
    routeStatus: "Rewrite",
    kind: "home",
    title: "Virtual Assistant & Business Operations Support | SageStone Inc",
    description:
      "SageStone provides virtual assistant, customer support, e-commerce, CRM, and business operations support for founders and growing teams.",
    h1: "Structured calm for growing teams.",
    eyebrow: "Operations support for founders and lean teams",
    intro:
      "SageStone helps teams turn recurring admin, customer, CRM, and e-commerce work into clear, reliable support systems.",
    primaryKeyword: "virtual assistant services and business operations support",
    secondaryKeywords: [
      "customer support outsourcing",
      "operations support for growing teams",
      "e-commerce operations support",
      "virtual assistant for founders",
      "back-office support services",
    ],
    primaryCta: bookCall,
    secondaryCta: exploreServices,
    sections: [
      {
        heading: "A premium operations partner, not a task marketplace",
        body:
          "SageStone supports the work that keeps founders reactive: inboxes, customer replies, CRM updates, order details, follow-up, and documentation.",
        items: ["Virtual assistant support", "Customer support operations", "E-commerce and Shopify support"],
      },
      {
        heading: "From scattered requests to owned workflows",
        body:
          "The new engagement model starts with what is currently loose, then creates scope, ownership, communication standards, and practical documentation.",
        items: ["Discover", "Design", "Integrate", "Improve"],
      },
      {
        heading: "Support that protects customer experience",
        body:
          "Recurring operational work shapes how customers feel. SageStone helps teams respond consistently, follow up cleanly, and keep daily details visible.",
      },
    ],
  },
  {
    path: "/services",
    routeStatus: "Rewrite",
    kind: "landing",
    title: "Virtual Assistant & Operations Support Services | SageStone Inc",
    description:
      "Explore SageStone services for virtual assistance, customer support outsourcing, e-commerce operations, CRM organization, and back-office workflows.",
    h1: "Operations support shaped around the work that slows your team down.",
    intro:
      "Choose the support path that fits your current bottleneck, from founder administration to customer support, e-commerce operations, and workflow documentation.",
    primaryKeyword: "virtual assistant and operations support services",
    secondaryKeywords: ["remote administrative support", "CRM management services", "customer support operations"],
    primaryCta: discussNeeds,
    secondaryCta: assessment,
    sections: [
      {
        heading: "Core service paths",
        body:
          "SageStone groups support by outcome so teams can start with the workflow that needs the most relief.",
        items: [
          "Virtual assistant services",
          "Customer support outsourcing",
          "E-commerce virtual assistant support",
          "Business operations support",
          "Website maintenance support",
        ],
      },
      {
        heading: "A cleaner way to delegate",
        body:
          "Each service page explains what can be owned, who it helps, and how the work connects to calmer daily execution.",
      },
    ],
  },
  {
    path: "/about",
    routeStatus: "Rewrite",
    kind: "landing",
    title: "About SageStone Inc | Virtual Assistant & Operations Support",
    description:
      "Learn how SageStone provides calm, reliable virtual assistant services and business operations support for founders, agencies, e-commerce brands, and growing teams.",
    h1: "Built for teams that need support with judgment.",
    intro:
      "SageStone exists to help growing teams add capacity without losing the clarity, care, and accountability that good operations require.",
    primaryKeyword: "premium operations support partner",
    secondaryKeywords: ["virtual assistant company", "business operations support", "founder support services"],
    primaryCta: bookCall,
    secondaryCta: exploreServices,
    sections: [
      {
        heading: "Calm operations. Confident scale.",
        body:
          "The work is practical and human: communicate clearly, keep details organized, document what repeats, and help teams protect founder focus.",
      },
      {
        heading: "How SageStone shows up",
        body:
          "The brand standard is discreet, proactive, organized support that can fit into existing tools and strengthen the way the team already works.",
        items: ["Proactive ownership", "Operational judgment", "Clear documentation", "Human customer care"],
      },
    ],
  },
  {
    path: "/experience",
    routeStatus: "Rewrite",
    kind: "landing",
    title: "Operations Support Experience | SageStone Inc",
    description:
      "Explore SageStone experience across virtual assistance, customer support outsourcing, CRM organization, e-commerce support, calendar management, and operational workflows.",
    h1: "Experience across the workflows that keep teams moving.",
    intro:
      "SageStone supports the recurring work that connects customer care, back-office administration, and founder priorities.",
    primaryKeyword: "operations support experience",
    secondaryKeywords: ["CRM organization", "calendar management", "customer follow-up"],
    primaryCta: bookCall,
    secondaryCta: discussNeeds,
    sections: serviceSections("Operations support", "Operational experience"),
  },
  {
    path: "/faq",
    routeStatus: "Rewrite",
    kind: "landing",
    title: "Virtual Assistant Services FAQ | SageStone Inc",
    description:
      "Answers to common questions about SageStone virtual assistant services, customer support outsourcing, e-commerce support, business operations support, and back-office workflows.",
    h1: "Questions teams ask before they delegate.",
    intro:
      "Use these answers to understand how SageStone scopes support, works inside existing tools, and helps teams create calmer operations.",
    primaryKeyword: "virtual assistant services FAQ",
    secondaryKeywords: ["outsourced support questions", "SageStone onboarding", "workflow assessment"],
    primaryCta: bookCall,
    secondaryCta: assessment,
    sections: [
      {
        heading: "A practical way to start",
        body:
          "The best first scope is usually the recurring work that is already visible, time-sensitive, and easy to define.",
      },
    ],
    faqs: commonFaqs,
  },
  {
    path: "/contact",
    routeStatus: "Rewrite",
    kind: "contact",
    title: "Contact SageStone Inc | Virtual Assistant & Operations Support",
    description:
      "Contact SageStone to discuss virtual assistant services, customer support outsourcing, inbox management, calendar support, CRM organization, e-commerce support, or business operations support.",
    h1: "Tell us where operations feel too heavy.",
    intro:
      "Share what your team needs help carrying. SageStone will review the workflow, identify a practical support path, and invite you to a discovery call.",
    primaryKeyword: "contact SageStone virtual assistant services",
    secondaryKeywords: ["book discovery call", "workflow assessment", "operations support inquiry"],
    primaryCta: bookCall,
    secondaryCta: assessment,
    sections: [
      {
        heading: "Contact details",
        body:
          "Prefer direct contact? Reach SageStone by email or phone, or book a discovery call through Calendly.",
        items: [siteConfig.email, siteConfig.phoneDisplay, "Remote / Worldwide"],
      },
    ],
  },
  {
    path: "/case-studies",
    routeStatus: "Rewrite",
    kind: "landing",
    title: "Virtual Assistant & Operations Case Studies | SageStone Inc",
    description:
      "Read SageStone case studies showing how organized virtual assistant support, customer support workflows, e-commerce operations, and business operations support can improve daily execution.",
    h1: "Support workflows, shown without inflated claims.",
    intro:
      "These examples describe support models and operating changes without inventing client names, revenue impact, or unsupported metrics.",
    primaryKeyword: "virtual assistant operations case studies",
    secondaryKeywords: ["customer support case study", "e-commerce support case study", "SaaS onboarding workflow"],
    primaryCta: discussNeeds,
    sections: [
      {
        heading: "What the examples show",
        body:
          "Each case study focuses on the operating problem, support model, and practical change in ownership or visibility.",
      },
    ],
  },
  {
    path: "/operations-audit",
    routeStatus: "Rewrite",
    kind: "landing",
    title: "Operations Audit for Growing Teams | SageStone Inc",
    description:
      "Review recurring admin, customer support, CRM, and back-office workflows with a SageStone operations audit for founders and growing teams.",
    h1: "Find the workflows that need ownership first.",
    intro:
      "The operations audit helps teams see where recurring work is scattered, undocumented, or dependent on founder attention.",
    primaryKeyword: "operations audit for growing teams",
    secondaryKeywords: ["workflow audit", "delegation readiness", "business operations review"],
    primaryCta: assessment,
    secondaryCta: bookCall,
    sections: serviceSections("Operations audit", "A focused audit"),
  },
  {
    path: "/blog",
    routeStatus: "Rewrite",
    kind: "blog",
    title: "SageStone Blog | Delegation, Customer Support & Operations",
    description:
      "Read practical SageStone resources on delegation, virtual assistant workflows, customer support outsourcing, e-commerce support, SOPs, CRM support, and business operations.",
    h1: "Practical notes for calmer operations.",
    intro:
      "Browse resources for founders and lean teams that want to delegate clearly, serve customers consistently, and document recurring work.",
    primaryKeyword: "virtual assistant and operations resources",
    secondaryKeywords: ["delegation guides", "customer support outsourcing", "SOP documentation"],
    primaryCta: exploreServices,
    secondaryCta: bookCall,
    sections: [
      {
        heading: "Resource themes",
        body:
          "The content library supports buyers who are deciding what to delegate, how to scope support, and when outsourced operations help.",
        items: ["Virtual assistance", "Customer support", "E-commerce operations", "SOPs and workflows"],
      },
    ],
  },
];

const servicePages: SitePage[] = [
  ["/virtual-assistant-services", "Virtual Assistant Services for Growing Businesses | SageStone Inc", "Virtual Assistant Services for Growing Businesses", "virtual assistant services", "Virtual assistant support"],
  ["/customer-support-outsourcing", "Customer Support Outsourcing for Growing Teams | SageStone Inc", "Customer support outsourcing with calmer handoffs.", "customer support outsourcing", "Customer support outsourcing"],
  ["/ecommerce-customer-support-outsourcing", "E-commerce Customer Support Outsourcing | SageStone Inc", "E-commerce customer support that protects the buying experience.", "e-commerce customer support outsourcing", "E-commerce support"],
  ["/ecommerce-virtual-assistant", "E-commerce Virtual Assistant Services | SageStone Inc", "E-commerce virtual assistant support for stores that need steadier operations.", "e-commerce virtual assistant", "E-commerce virtual assistant"],
  ["/real-estate-virtual-assistant", "Real Estate Virtual Assistant Services | SageStone Inc", "Real estate virtual assistant support for follow-up, records, and coordination.", "real estate virtual assistant", "Real estate support"],
  ["/social-media-virtual-assistant", "Social Media Virtual Assistant Support | SageStone Inc", "Social media support for content coordination, scheduling, and reporting preparation.", "social media virtual assistant", "Social media support"],
  ["/business-operations-support", "Business Operations Support Services | SageStone Inc", "Business operations support for workflows, CRM hygiene, SOPs, and admin coordination.", "business operations support", "Business operations support"],
  ["/web-maintenance-support", "Website Maintenance Support Services | SageStone Inc", "Website maintenance support for content updates, QA, links, forms, and routine page upkeep.", "website maintenance support", "Website maintenance support"],
].map(([path, title, h1, keyword, service]) => ({
  path,
  routeStatus: "Rewrite" as RouteStatus,
  kind: "service" as PageKind,
  title,
  description: `${service} from SageStone helps founders and growing teams organize recurring work, customer details, communication, documentation, and daily follow-through.`,
  h1,
  intro: `${service} gives your team a calmer way to delegate recurring work without losing context or customer care.`,
  primaryKeyword: keyword,
  secondaryKeywords: ["remote administrative support", "back-office support", "workflow documentation"],
  primaryCta: discussNeeds,
  secondaryCta: bookCall,
  sections: serviceSections(service, service),
}));

const comparisonPages: SitePage[] = [
  {
    path: "/virtual-assistant-vs-in-house-admin",
    routeStatus: "Rewrite",
    kind: "landing",
    title: "Virtual Assistant vs In-House Admin | SageStone Inc",
    description:
      "Compare virtual assistant services with an in-house administrative hire and learn when outsourced support can help a growing business add capacity responsibly.",
    h1: "Virtual assistant or in-house admin?",
    intro:
      "The right choice depends on workload, continuity, management capacity, and whether the work is ready to be documented.",
    primaryKeyword: "virtual assistant vs in-house admin",
    secondaryKeywords: ["administrative hire", "outsourced admin support", "delegation support"],
    primaryCta: discussNeeds,
    sections: blogSection("virtual assistant vs in-house admin"),
  },
  {
    path: "/outsourced-support-for-small-businesses",
    routeStatus: "Rewrite",
    kind: "landing",
    title: "Outsourced Support for Small Businesses | SageStone Inc",
    description:
      "Learn how outsourced support can help small businesses delegate customer communication, admin work, CRM updates, e-commerce tasks, and recurring operations.",
    h1: "Outsourced support for small businesses.",
    intro:
      "Small teams can add support carefully by starting with recurring work that is visible, teachable, and connected to customer experience.",
    primaryKeyword: "outsourced support for small businesses",
    secondaryKeywords: ["small business virtual assistant", "customer support outsourcing", "back-office support"],
    primaryCta: assessment,
    secondaryCta: discussNeeds,
    sections: blogSection("outsourced support for small businesses"),
  },
  {
    path: "/industries-we-serve",
    routeStatus: "Rewrite",
    kind: "industry",
    title: "Industries SageStone Supports | E-commerce, SaaS & Services",
    description:
      "See how SageStone supports founders, SaaS teams, e-commerce brands, real estate teams, agencies, and growing service businesses with operations support.",
    h1: "Support for teams with moving parts.",
    intro:
      "SageStone helps organizations where customer communication, administration, and recurring operations need clearer ownership.",
    primaryKeyword: "industries served by virtual assistant services",
    secondaryKeywords: ["SaaS operations support", "e-commerce support", "real estate virtual assistant"],
    primaryCta: discussNeeds,
    sections: [
      {
        heading: "Who SageStone supports",
        body:
          "The strongest fit is a team with repeated workflows, active customers, and enough complexity that founder attention is being pulled into daily details.",
        items: ["Founders and lean teams", "SaaS and subscription businesses", "Shopify and e-commerce brands", "Real estate teams", "Service businesses"],
      },
    ],
  },
];

const solutionPages: SitePage[] = [
  ["/solutions", "Operations Support Solutions | SageStone Inc", "Support solutions for practical operating needs.", "operations support solutions"],
  ["/solutions/virtual-operations-admin", "Virtual Operations Admin Support | SageStone Inc", "Virtual operations admin support for recurring execution.", "virtual operations admin"],
  ["/solutions/real-estate-virtual-assistant", "Real Estate Virtual Assistant Solution | SageStone Inc", "A real estate support solution for CRM, follow-up, and scheduling.", "real estate virtual assistant solution"],
  ["/solutions/bookkeeping-support", "Bookkeeping Support Coordination | SageStone Inc", "Bookkeeping support coordination for records, follow-up, and administrative clarity.", "bookkeeping support coordination"],
  ["/solutions/social-media-marketing-support", "Social Media Marketing Support | SageStone Inc", "Social media marketing support for scheduling, coordination, and reporting prep.", "social media marketing support"],
  ["/solutions/lead-generation-support", "Lead Generation Support | SageStone Inc", "Lead generation support for research, list upkeep, follow-up, and CRM organization.", "lead generation support"],
  ["/solutions/graphic-design-support", "Graphic Design Support Coordination | SageStone Inc", "Graphic design support coordination for assets, requests, updates, and delivery tracking.", "graphic design support"],
  ["/solutions/data-entry-web-research", "Data Entry & Web Research Support | SageStone Inc", "Data entry and web research support for cleaner records, lists, and reports.", "data entry web research support"],
].map(([path, title, h1, keyword]) => ({
  path,
  routeStatus: "Rewrite" as RouteStatus,
  kind: "landing" as PageKind,
  title,
  description: `${h1} SageStone helps growing teams define responsibilities, document recurring work, and keep operational details moving with calmer ownership.`,
  h1,
  intro: "These solution pages preserve useful live URLs while consolidating the new experience around clear support outcomes.",
  primaryKeyword: keyword,
  secondaryKeywords: ["virtual assistant support", "business operations support", "remote administrative support"],
  primaryCta: discussNeeds,
  secondaryCta: bookCall,
  sections: serviceSections(h1.replace(".", ""), keyword),
}));

const blogPages: SitePage[] = [
  ["/blog/virtual-assistant-tasks-for-small-business", "Virtual Assistant Tasks for Small Business | SageStone Inc", "Virtual assistant tasks for small business"],
  ["/blog/how-to-outsource-customer-support-without-losing-quality", "How to Outsource Customer Support Without Losing Quality", "Outsource customer support without losing quality"],
  ["/blog/ecommerce-virtual-assistant-20-tasks-you-can-delegate", "E-commerce Virtual Assistant Tasks You Can Delegate", "E-commerce virtual assistant tasks you can delegate"],
  ["/blog/virtual-assistant-tasks-to-delegate", "Virtual Assistant Tasks to Delegate | SageStone Inc", "Virtual assistant tasks to delegate"],
  ["/blog/customer-support-outsourcing-checklist", "Customer Support Outsourcing Checklist | SageStone Inc", "Customer support outsourcing checklist"],
  ["/blog/ecommerce-customer-support-best-practices", "E-commerce Customer Support Best Practices | SageStone Inc", "E-commerce customer support best practices"],
  ["/blog/how-to-create-sops-for-virtual-assistants", "How to Create SOPs for Virtual Assistants", "Create SOPs for virtual assistants"],
  ["/blog/how-to-hire-a-virtual-assistant", "How to Hire a Virtual Assistant | SageStone Inc", "How to hire a virtual assistant"],
  ["/blog/when-to-outsource-customer-support", "When to Outsource Customer Support | SageStone Inc", "When to outsource customer support"],
  ["/blog/what-does-an-ecommerce-virtual-assistant-do", "What Does an E-commerce Virtual Assistant Do?", "What an e-commerce virtual assistant does"],
  ["/blog/business-operations-support-guide", "Business Operations Support Guide | SageStone Inc", "Business operations support guide"],
  ["/blog/improve-saas-customer-onboarding", "Improve SaaS Customer Onboarding | SageStone Inc", "Improve SaaS customer onboarding"],
  ["/blog/shopify-customer-support-workflow-checklist", "Shopify Customer Support Workflow Checklist | SageStone Inc", "Shopify customer support workflow checklist"],
].map(([path, title, h1]) => ({
  path,
  routeStatus: "Rewrite" as RouteStatus,
  kind: "blog" as PageKind,
  title,
  description: `${h1} with practical guidance from SageStone for founders and lean teams improving delegation, customer support, documentation, and recurring operations.`,
  h1,
  intro: "A practical guide for deciding what to delegate, how to document the workflow, and how to protect customer experience as support scales.",
  primaryKeyword: h1.toLowerCase(),
  secondaryKeywords: ["delegation", "operations support", "virtual assistant services"],
  primaryCta: discussNeeds,
  secondaryCta: exploreServices,
  sections: blogSection(h1),
  published: "2026-02-01",
  modified: "2026-07-05",
}));

const caseStudyPages: SitePage[] = [
  ["/case-studies/ecommerce-support-response-times", "E-commerce Support Workflow Case Study | SageStone Inc", "E-commerce support workflow case study", "An e-commerce team needed clearer ownership for customer replies, order questions, and recurring store support."],
  ["/case-studies/real-estate-operations-support", "Real Estate Operations Support Case Study | SageStone Inc", "Real estate operations support case study", "A real estate operation needed cleaner CRM updates, scheduling coordination, and follow-up visibility."],
  ["/case-studies/saas-onboarding-workflow-case-study", "SaaS Onboarding Workflow Case Study | SageStone Inc", "SaaS onboarding workflow case study", "A SaaS workflow needed better onboarding follow-up, customer handoffs, and repeatable documentation."],
  ["/case-studies/shopify-support-operations-case-study", "Shopify Support Operations Case Study | SageStone Inc", "Shopify support operations case study", "A Shopify support workflow needed steadier customer communication, product update coordination, and order support."],
].map(([path, title, h1, context]) => ({
  path,
  routeStatus: "Rewrite" as RouteStatus,
  kind: "case-study" as PageKind,
  title,
  description: `${h1} describing how SageStone structures recurring operations support without inventing client identities, revenue claims, or unsupported statistics.`,
  h1,
  intro: "A practical operating example focused on support scope, clearer ownership, and documented workflows.",
  primaryKeyword: h1.toLowerCase(),
  secondaryKeywords: ["operations support case study", "virtual assistant support", "workflow documentation"],
  primaryCta: discussNeeds,
  sections: caseStudySection(context),
  published: "2026-02-01",
  modified: "2026-07-05",
}));

const conversionAndLegalPages: SitePage[] = [
  {
    path: "/free-workflow-assessment",
    routeStatus: "Rewrite",
    kind: "contact",
    title: "Free Workflow Assessment | SageStone Inc",
    description:
      "Request a free SageStone workflow assessment to identify delegation opportunities across admin work, customer communication, CRM updates, and business operations.",
    h1: "Discover where work is losing structure.",
    intro:
      "Use the workflow assessment to describe the recurring tasks, tools, and customer touchpoints that need clearer ownership.",
    primaryKeyword: "free workflow assessment",
    secondaryKeywords: ["delegation assessment", "operations audit", "virtual assistant consultation"],
    primaryCta: assessment,
    secondaryCta: bookCall,
    sections: serviceSections("Free workflow assessment", "The assessment"),
  },
  {
    path: "/terms",
    routeStatus: "Preserve",
    kind: "legal",
    title: "Terms of Service | SageStone Inc",
    description:
      "Read SageStone Inc terms of service covering service use, client obligations, payments, confidentiality, intellectual property, and contact information.",
    h1: "Terms of Service",
    intro: "Last updated: February 1, 2026. These terms summarize service use, client obligations, payment, confidentiality, and contact details.",
    primaryKeyword: "SageStone terms of service",
    secondaryKeywords: ["client obligations", "payment terms", "confidentiality"],
    primaryCta: discussNeeds,
    sections: [
      {
        heading: "Client responsibilities",
        body:
          "Clients agree to provide accurate information, respond to communications, make payments according to the agreed schedule, and provide necessary tool access when required.",
      },
      {
        heading: "Confidentiality and service use",
        body:
          "SageStone handles business information with care. Service details, access, and intellectual property remain governed by the agreed engagement terms.",
      },
    ],
  },
  {
    path: "/privacy",
    routeStatus: "Preserve",
    kind: "legal",
    title: "Privacy Policy | SageStone Inc",
    description:
      "Read the SageStone Inc privacy policy covering contact information, business inquiry details, website usage data, communications, and data rights.",
    h1: "Privacy Policy",
    intro:
      "Last updated: February 1, 2026. SageStone collects information voluntarily provided through inquiries, communications, forms, and website usage.",
    primaryKeyword: "SageStone privacy policy",
    secondaryKeywords: ["data collection", "website usage data", "contact information"],
    primaryCta: discussNeeds,
    sections: [
      {
        heading: "Information collected",
        body:
          "SageStone may collect contact information, business information, service inquiry details, communication records, and website usage data.",
      },
      {
        heading: "How information is used",
        body:
          "Information is used to respond to inquiries, provide and improve services, communicate relevant updates, analyze website use, and comply with legal obligations.",
      },
      {
        heading: "Your rights",
        body:
          "Depending on your jurisdiction, you may request access, correction, deletion, opt-out, or data portability by contacting SageStone.",
      },
    ],
  },
];

export const sitemapEntries: SitePage[] = [
  ...pages,
  ...servicePages,
  ...comparisonPages,
  ...solutionPages,
  ...blogPages,
  ...caseStudyPages,
  ...conversionAndLegalPages,
];

export const redirects: Record<string, string> = {
  "/expertise": "/services",
  "/work/:slug": "/case-studies/:slug",
  "/faqs": "/faq",
  "/customer-support": "/customer-support-outsourcing",
  "/customer-support-virtual-assistant": "/customer-support-outsourcing",
  "/ecommerce-operations-support": "/ecommerce-virtual-assistant",
  "/real-estate-virtual-assistant-services": "/real-estate-virtual-assistant",
  "/social-media-management-services": "/social-media-virtual-assistant",
  "/social-media-support": "/social-media-virtual-assistant",
  "/web-design-maintenance-services": "/web-maintenance-support",
  "/web-maintenance-services": "/web-maintenance-support",
  "/crm-admin-support": "/business-operations-support",
  "/gohighlevel-virtual-assistant": "/business-operations-support",
  "/web-design-maintenance": "/web-maintenance-support",
  "/why-sagestone": "/about",
};

export function stripTrailingSlash(path: string) {
  if (path === "/") return "/";
  return path.replace(/\/+$/, "");
}

export function canonicalUrl(path: string) {
  const normalized = stripTrailingSlash(path);
  return normalized === "/" ? `${siteConfig.domain}/` : `${siteConfig.domain}${normalized}/`;
}

export function getAllRoutePaths() {
  return sitemapEntries.map((page) => page.path);
}

export function getPageByPath(path: string) {
  const normalized = stripTrailingSlash(path);
  return sitemapEntries.find((page) => page.path === normalized);
}

export function getRedirects() {
  return redirects;
}

export function pathToSlug(path: string) {
  return stripTrailingSlash(path)
    .split("/")
    .filter(Boolean);
}

export function slugToPath(slug?: string[]) {
  if (!slug || slug.length === 0) return "/";
  return `/${slug.join("/")}`;
}
