import {
  Headset,
  Workflow,
  Briefcase,
  Globe,
  MonitorCog,
  ClipboardList,
  type LucideIcon,
} from "lucide-react";

export const images = {
  heroWorkspace:
    "https://images.unsplash.com/photo-1774853094610-89be6f1a7690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  officeGlass:
    "https://images.unsplash.com/photo-1765371514743-45bd8e6c0a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  woodenDesk:
    "https://images.unsplash.com/photo-1772475385509-93fd87a2d4ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  deskShelves:
    "https://images.unsplash.com/photo-1772475385458-21163e41f4ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  officeArt:
    "https://images.unsplash.com/photo-1765371513276-a74f1ecbcf7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  laptopPlant:
    "https://images.unsplash.com/photo-1497215641119-bbe6d71ebaae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  deskChair:
    "https://images.unsplash.com/photo-1511362328651-90cc517fbe31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  portraitWoman:
    "https://images.unsplash.com/photo-1781705117331-10010c599e78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  portraitWoman2:
    "https://images.unsplash.com/photo-1758600435036-0c958b8b9704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
  portraitMan:
    "https://images.unsplash.com/photo-1761393255459-862745aa7c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
};

export type Service = {
  slug: string;
  path: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  outcome: string;
};

export const services: Service[] = [
  {
    slug: "virtual-assistant-services",
    path: "/virtual-assistant-services",
    icon: Briefcase,
    title: "Virtual Assistant Services",
    summary:
      "Dependable day-to-day support for scheduling, inbox management, coordination, and recurring administrative priorities.",
    outcome: "Protect leadership focus without losing operational consistency.",
  },
  {
    slug: "customer-support-outsourcing",
    path: "/customer-support-outsourcing",
    icon: Headset,
    title: "Customer Support Outsourcing",
    summary:
      "Reliable email, chat, and help-desk support tailored to your workflows, escalation paths, and brand voice.",
    outcome: "Keep customer communication consistent as demand grows.",
  },
  {
    slug: "business-operations-support",
    path: "/business-operations-support",
    icon: Workflow,
    title: "Business Operations Support",
    summary:
      "Structured support for recurring workflows, documentation, CRM hygiene, and task coordination across teams.",
    outcome: "Reduce bottlenecks and improve day-to-day execution.",
  },
  {
    slug: "ecommerce-virtual-assistant",
    path: "/ecommerce-virtual-assistant",
    icon: Globe,
    title: "Ecommerce Virtual Assistant Services",
    summary:
      "Support for order workflows, listings, catalog updates, customer messages, and store operations.",
    outcome: "Maintain smooth store operations without overloading internal teams.",
  },
  {
    slug: "gohighlevel-virtual-assistant",
    path: "/gohighlevel-virtual-assistant",
    icon: ClipboardList,
    title: "GoHighLevel Virtual Assistant Services",
    summary:
      "Practical support for CRM updates, pipelines, follow-ups, reporting, and documented GoHighLevel workflows.",
    outcome: "Keep CRM data and workflows accurate and actionable.",
  },
  {
    slug: "web-maintenance-support",
    path: "/web-maintenance-support",
    icon: MonitorCog,
    title: "Website Maintenance Support",
    summary:
      "Dependable help with content edits, publishing coordination, form checks, and routine site quality assurance.",
    outcome: "Keep your website current, accurate, and ready for updates.",
  },
];

export type ServiceDetail = {
  heroTitle: string;
  intro: string;
  image: string;
  capabilities: { title: string; body: string }[];
  useCases: string[];
  outcomes: { value: string; label: string }[];
  faqs: { question: string; answer: string }[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  "virtual-assistant-services": {
    heroTitle: "Virtual Assistant Services for Daily Operational Support",
    intro:
      "SageStone provides dependable virtual assistant services for recurring administrative and coordination work, helping teams stay focused on higher-impact priorities.",
    image: images.laptopPlant,
    capabilities: [
      { title: "Calendar and inbox support", body: "Scheduling coordination, inbox organization, and follow-up support based on your priorities." },
      { title: "Documentation and reporting", body: "Process notes, recurring reports, and structured records that keep work visible." },
      { title: "Task and project coordination", body: "Checklist-driven support for recurring tasks, handoffs, and internal coordination." },
      { title: "Administrative assistance", body: "Operational support for recurring tasks that consume leadership bandwidth." },
    ],
    useCases: [
      "Founder-led teams that need day-to-day support without adding in-house overhead",
      "Growing businesses standardizing recurring administrative workflows",
      "Operators who need dependable coordination across tools and calendars",
    ],
    outcomes: [
      { value: "Consistent", label: "Recurring support delivery" },
      { value: "Flexible", label: "Support model" },
      { value: "Documented", label: "Workflow approach" },
    ],
    faqs: faqPlaceholders("virtual assistant services"),
  },
  "customer-support-outsourcing": {
    heroTitle: "Reliable Customer Support Outsourcing for Growing Businesses",
    intro:
      "Deliver responsive, consistent customer experiences without building a large in-house support team. SageStone provides dependable customer support outsourcing for email, chat, help-desk queues, and recurring service workflows.",
    image: images.officeArt,
    capabilities: [
      { title: "Email and chat support", body: "Customer communication support aligned with your brand voice and documented response standards." },
      { title: "Help-desk queue management", body: "Ticket triage, categorization, routing, and escalation support within your process." },
      { title: "Knowledge-base alignment", body: "Consistency checks between support responses, internal SOPs, and available documentation." },
      { title: "QA and reporting support", body: "Quality reviews, recurring summaries, and reporting support for operational visibility." },
    ],
    useCases: [
      "Teams expanding support coverage while preserving quality and consistency",
      "Ecommerce operations handling fluctuating inquiry volumes",
      "Service businesses that need clear escalation workflows",
    ],
    outcomes: [
      { value: "Documented", label: "Escalation paths" },
      { value: "Aligned", label: "Brand voice support" },
      { value: "Tracked", label: "Support workflow metrics" },
    ],
    faqs: faqPlaceholders("customer support outsourcing"),
  },
  "business-operations-support": {
    heroTitle: "Business Operations Support Services for Workflow Clarity",
    intro:
      "Improve workflows, CRM organization, reporting, and recurring operations with dependable remote support integrated into your documented processes.",
    image: images.deskChair,
    capabilities: [
      { title: "Process and workflow support", body: "Recurring workflow execution and handoff support across operational functions." },
      { title: "CRM and data hygiene", body: "Record updates, organization standards, and quality checks for cleaner reporting." },
      { title: "Documentation maintenance", body: "SOP updates and operating documentation support to improve consistency." },
      { title: "Operational reporting", body: "Routine reporting support for process tracking and status visibility." },
    ],
    useCases: [
      "Businesses scaling beyond informal workflows",
      "Operations teams standardizing recurring process execution",
      "Managers needing dependable support for process documentation",
    ],
    outcomes: [
      { value: "Clearer", label: "Workflow ownership" },
      { value: "Steadier", label: "Operational cadence" },
      { value: "Cleaner", label: "Process documentation" },
    ],
    faqs: faqPlaceholders("business operations support services"),
  },
  "ecommerce-virtual-assistant": {
    heroTitle: "Ecommerce Virtual Assistant Services for Store Operations",
    intro:
      "Get reliable ecommerce support for orders, returns, product updates, customer messages, and recurring store administration workflows.",
    image: images.deskShelves,
    capabilities: [
      { title: "Order and returns support", body: "Recurring order-status and return workflow support based on your standard process." },
      { title: "Catalog and product updates", body: "Product listing edits, inventory-related updates, and merchandising coordination support." },
      { title: "Customer inquiry support", body: "Operational support for ecommerce inboxes, chat workflows, and help-desk coordination." },
      { title: "Store admin workflows", body: "Routine support for recurring back-office ecommerce tasks and reporting support." },
    ],
    useCases: [
      "Ecommerce teams managing regular catalog and order workflows",
      "Brands preparing for seasonal demand increases",
      "Teams needing dependable support for recurring store operations",
    ],
    outcomes: [
      { value: "Current", label: "Catalog and listing updates" },
      { value: "Coordinated", label: "Order workflow support" },
      { value: "Reliable", label: "Recurring admin coverage" },
    ],
    faqs: faqPlaceholders("ecommerce virtual assistant services"),
  },
  "gohighlevel-virtual-assistant": {
    heroTitle: "GoHighLevel Virtual Assistant Services for CRM and Workflow Support",
    intro:
      "Keep your GoHighLevel workspace organized and your customer workflows moving with dependable virtual assistant support. SageStone can assist with CRM updates, pipeline administration, contact organization, follow-up coordination, reporting, workflow checks, and day-to-day platform maintenance based on your documented processes.",
    image: images.officeGlass,
    capabilities: [
      { title: "CRM and pipeline administration", body: "Contact updates, pipeline stage support, and recurring CRM cleanup workflows." },
      { title: "Contact and data organization", body: "Tagging, segmentation support, and record-accuracy checks for cleaner operations." },
      { title: "Workflow and follow-up coordination", body: "Routine workflow checks and follow-up task support aligned with your SOPs." },
      { title: "Reporting and dashboard support", body: "Recurring reporting support for lead activity and pipeline visibility." },
      { title: "Lead handoff and appointment support", body: "Lead assignment coordination and appointment workflow support." },
      { title: "Quality assurance and documentation", body: "Checklist-driven QA and SOP maintenance for consistent platform operations." },
    ],
    useCases: [
      "Teams managing active GoHighLevel pipelines and recurring follow-up workflows",
      "Operators needing support to keep CRM records accurate and current",
      "Businesses standardizing GoHighLevel process execution",
    ],
    outcomes: [
      { value: "Organized", label: "CRM records and pipelines" },
      { value: "Documented", label: "Workflow checks" },
      { value: "Dependable", label: "Platform administration support" },
    ],
    faqs: faqPlaceholders("GoHighLevel virtual assistant services"),
  },
  "web-maintenance-support": {
    heroTitle: "Website Maintenance Support Services for Ongoing Updates",
    intro:
      "Keep your website current with dependable support for content edits, page updates, form checks, link monitoring, publishing coordination, and quality assurance.",
    image: images.woodenDesk,
    capabilities: [
      { title: "Content and page updates", body: "Routine edits and publishing support for approved website content." },
      { title: "Form and lead-flow checks", body: "Operational checks for forms and key lead-capture paths." },
      { title: "Link and navigation QA", body: "Recurring broken-link and navigation checks for visitor usability." },
      { title: "Publishing coordination", body: "Structured support for update requests, review cycles, and launch coordination." },
    ],
    useCases: [
      "Teams without dedicated in-house web operations support",
      "Marketing teams coordinating recurring page updates",
      "Businesses maintaining multiple landing pages and forms",
    ],
    outcomes: [
      { value: "Current", label: "Website content" },
      { value: "Monitored", label: "Forms and links" },
      { value: "Coordinated", label: "Publishing workflows" },
    ],
    faqs: faqPlaceholders("website maintenance support services"),
  },
};

function faqPlaceholders(name: string) {
  return [
    {
      question: `How quickly can ${name} be set up?`,
      answer:
        "Most engagements begin onboarding within a few business days after discovery and scope alignment.",
    },
    {
      question: "How is support quality maintained?",
      answer:
        "Support follows documented workflows with SageStone oversight and regular quality checks.",
    },
    {
      question: "Can support evolve as needs change?",
      answer:
        "Yes. Engagements are designed to adapt as your priorities, tools, and processes evolve.",
    },
  ];
}

export const industries = [
  {
    name: "Agencies",
    description: "Account, project, and delivery support that protects billable focus.",
  },
  {
    name: "E-commerce Brands",
    description: "Order, listing, and customer support workflows handled with consistency.",
  },
  {
    name: "Real Estate Teams",
    description: "Transaction coordination, CRM hygiene, and client follow-through support.",
  },
  {
    name: "Founder-led Businesses",
    description: "A dependable operational layer as the business grows.",
  },
  {
    name: "Service Companies",
    description: "Scheduling, dispatch, and back-office support that scales with demand.",
  },
  {
    name: "Professional Firms",
    description: "Structured administrative and client-facing assistance.",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin with a focused conversation about priorities, workflows, and desired outcomes.",
  },
  {
    number: "02",
    title: "Scope and Matching",
    description:
      "We align responsibilities, tools, and support expectations before kickoff.",
  },
  {
    number: "03",
    title: "Onboarding",
    description:
      "We embed support into your operating rhythm using your documented processes.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "You receive consistent operational support with oversight and iterative refinement.",
  },
];

export const stats = [
  { value: "Flexible", label: "Engagement design" },
  { value: "Documented", label: "Workflow approach" },
  { value: "Dedicated", label: "Operational support" },
  { value: "Ongoing", label: "Quality oversight" },
];

export const testimonials = [
  {
    quote:
      "SageStone gave us an operational layer we could actually trust. It feels less like outsourcing and more like a part of our team.",
    name: "Elena Marsh",
    role: "Founder, Northline Studio",
  },
  {
    quote:
      "The consistency is what stands out. Our customer communication improved and stayed aligned with our process.",
    name: "David Okafor",
    role: "COO, Meridian Commerce",
  },
  {
    quote:
      "They understood our workflows quickly and removed bottlenecks that were slowing us down.",
    name: "Priya Nair",
    role: "Operations Lead, Cedar & Co.",
  },
];

export const caseStudies = [
  {
    slug: "northline-studio",
    client: "Northline Studio",
    industry: "Creative Agency",
    headline: "Protecting billable focus across a growing team",
    challenge:
      "A fast-growing agency was losing senior hours to administrative work and inconsistent client follow-up.",
    solution:
      "SageStone support was embedded into project and account workflows with clear ownership for scheduling and coordination.",
    outcome: "Higher operational consistency and more time for client delivery leadership.",
    image: images.woodenDesk,
  },
  {
    slug: "meridian-commerce",
    client: "Meridian Commerce",
    industry: "E-commerce",
    headline: "Steadier customer support during high-volume periods",
    challenge:
      "Inquiry volume increased quickly while the internal team remained lean.",
    solution:
      "A dedicated support pod handled recurring tier-one workflows with documented response standards.",
    outcome: "More consistent customer communication and clearer escalation handling.",
    image: images.deskShelves,
  },
  {
    slug: "cedar-co",
    client: "Cedar & Co.",
    industry: "Professional Services",
    headline: "Removing operational bottlenecks across teams",
    challenge:
      "Manual handoffs across teams were creating delays and rework.",
    solution:
      "SageStone mapped the workflow and supported coordination and documentation handoffs.",
    outcome: "Smoother recurring workflows and improved cross-team visibility.",
    image: images.officeArt,
  },
];

export const faqs = [
  {
    category: "Getting Started",
    question: "How quickly can we get support in place?",
    answer:
      "Most engagements begin onboarding within a few business days of discovery and scope alignment.",
  },
  {
    category: "Getting Started",
    question: "What does the matching process look like?",
    answer:
      "We align your workflows and priorities, then match support based on required skills and operating style.",
  },
  {
    category: "Working Together",
    question: "How is quality maintained over time?",
    answer:
      "Each engagement uses documented processes, oversight, and regular check-ins to maintain consistency.",
  },
  {
    category: "Working Together",
    question: "Can support scale with changing priorities?",
    answer:
      "Yes. Scope and workflows can be adjusted as business needs evolve.",
  },
  {
    category: "Working Together",
    question: "Which tools do you support?",
    answer:
      "SageStone works within your existing stack whenever practical, based on your documented process and access controls.",
  },
  {
    category: "Trust & Security",
    question: "How do you handle confidentiality?",
    answer:
      "Confidentiality is handled through role-based access, documented procedures, and process controls aligned with your requirements.",
  },
];

export const legacyServiceSlugRedirects: Record<string, string> = {
  "virtual-assistant": "/virtual-assistant-services",
  "customer-support": "/customer-support-outsourcing",
  "workflow-support": "/business-operations-support",
  "back-office": "/business-operations-support",
  "executive-assistance": "/virtual-assistant-services",
  "remote-operations": "/business-operations-support",
};
