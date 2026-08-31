import {
  Headset,
  Workflow,
  Briefcase,
  ClipboardList,
  UserCog,
  Settings2,
  type LucideIcon,
} from "lucide-react";

/* ---------- Imagery (local founder portrait + Unsplash: calm, natural light) ---------- */
export const images = {
  heroFounder: "/founder-hero.jpg",
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

/* ---------- Services ---------- */
export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  summary: string;
  outcome: string;
};

export const services: Service[] = [
  {
    slug: "virtual-assistant",
    icon: Briefcase,
    title: "Virtual Assistant Services",
    summary:
      "Dependable day-to-day support that keeps your calendar, inbox, and priorities in order.",
    outcome: "Reclaim focus for the work only you can do.",
  },
  {
    slug: "customer-support",
    icon: Headset,
    title: "Customer Support Outsourcing",
    summary:
      "Consistent, on-brand responses across every channel your customers rely on.",
    outcome: "Faster resolution, steadier satisfaction.",
  },
  {
    slug: "workflow-support",
    icon: Workflow,
    title: "Workflow Support",
    summary:
      "Structured operational help that removes bottlenecks and keeps processes moving.",
    outcome: "Cleaner handoffs, fewer dropped tasks.",
  },
  {
    slug: "back-office",
    icon: ClipboardList,
    title: "Back Office Support",
    summary:
      "Reliable data, documentation, and administrative work handled with precision.",
    outcome: "Accurate records without the overhead.",
  },
  {
    slug: "executive-assistance",
    icon: UserCog,
    title: "Executive Assistance",
    summary:
      "Discreet, senior-level support for leaders who need leverage, not oversight.",
    outcome: "A trusted right hand for the details.",
  },
  {
    slug: "remote-operations",
    icon: Settings2,
    title: "Remote Operations Support",
    summary:
      "Embedded operators who help your systems run smoothly as you scale.",
    outcome: "Operational excellence, built in.",
  },
];

/* ---------- Per-service detail content ---------- */
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
  "virtual-assistant": {
    heroTitle: "Virtual assistants who keep your priorities in order",
    intro:
      "A SageStone virtual assistant is a dependable, embedded partner — handling the day-to-day so you can stay focused on the work that moves your business forward.",
    image: images.laptopPlant,
    capabilities: [
      { title: "Calendar & inbox", body: "Scheduling, triage, and follow-up handled with care and discretion." },
      { title: "Coordination", body: "Meeting prep, travel, and cross-team logistics kept moving." },
      { title: "Research & docs", body: "Structured research, reporting, and documentation you can rely on." },
      { title: "Personal operations", body: "The recurring tasks that quietly consume your week." },
    ],
    useCases: [
      "Founders reclaiming time for high-leverage work",
      "Small teams without dedicated administrative support",
      "Leaders who need a trusted right hand",
    ],
    outcomes: [
      { value: "12h+", label: "Weekly hours reclaimed" },
      { value: "48h", label: "Typical onboarding" },
      { value: "1:1", label: "Dedicated matching" },
    ],
    faqs: faqPlaceholders("virtual assistant"),
  },
  "customer-support": {
    heroTitle: "Customer support that stays consistent and on-brand",
    intro:
      "SageStone customer support brings steady, thoughtful responses to every channel your customers rely on — protecting satisfaction as your volume grows.",
    image: images.officeArt,
    capabilities: [
      { title: "Email & chat", body: "Timely, documented responses that reflect your tone." },
      { title: "Help desk", body: "Ticket triage, tagging, and resolution within your systems." },
      { title: "Escalation flow", body: "Clear paths so complex issues reach the right person." },
      { title: "Knowledge base", body: "Maintained documentation that keeps answers consistent." },
    ],
    useCases: [
      "E-commerce brands managing seasonal spikes",
      "SaaS teams protecting response times",
      "Growing companies scaling support without losing quality",
    ],
    outcomes: [
      { value: "50%", label: "Faster response times" },
      { value: "24/7", label: "Coverage options" },
      { value: "98%", label: "Satisfaction held steady" },
    ],
    faqs: faqPlaceholders("customer support"),
  },
  "workflow-support": {
    heroTitle: "Workflow support that removes the bottlenecks",
    intro:
      "We map how work actually moves through your business, then place structured support where handoffs break down — so processes stay smooth and predictable.",
    image: images.deskChair,
    capabilities: [
      { title: "Process mapping", body: "Clear visibility into where work slows or stalls." },
      { title: "Task ownership", body: "Defined responsibility so nothing falls through the cracks." },
      { title: "Data & CRM hygiene", body: "Accurate records that keep teams aligned." },
      { title: "Reporting cadence", body: "Reliable status and reporting on a steady rhythm." },
    ],
    useCases: [
      "Teams outgrowing manual coordination",
      "Operations leaders reducing handoff friction",
      "Businesses standardizing repeatable processes",
    ],
    outcomes: [
      { value: "22%", label: "Faster cycle times" },
      { value: "0", label: "Dropped handoffs" },
      { value: "100%", label: "Documented process" },
    ],
    faqs: faqPlaceholders("workflow support"),
  },
  "back-office": {
    heroTitle: "Back office support handled with precision",
    intro:
      "Reliable administrative, data, and documentation work — quietly kept accurate so your team can operate without the overhead.",
    image: images.deskShelves,
    capabilities: [
      { title: "Data entry", body: "Accurate, consistent records across your systems." },
      { title: "Documentation", body: "Organized, up-to-date documentation and filing." },
      { title: "Invoicing support", body: "Structured billing and reconciliation assistance." },
      { title: "Reporting", body: "Clean, dependable reports on schedule." },
    ],
    useCases: [
      "Firms reducing administrative overhead",
      "Teams needing accurate, ongoing records",
      "Businesses standardizing back-office work",
    ],
    outcomes: [
      { value: "99.5%", label: "Data accuracy" },
      { value: "48h", label: "Onboarding start" },
      { value: "1:1", label: "Dedicated support" },
    ],
    faqs: faqPlaceholders("back office support"),
  },
  "executive-assistance": {
    heroTitle: "Executive assistance for leaders who need leverage",
    intro:
      "Discreet, senior-level support that anticipates needs and handles detail — giving leaders room to focus on what matters most.",
    image: images.woodenDesk,
    capabilities: [
      { title: "Executive scheduling", body: "Complex calendars managed with judgment." },
      { title: "Communications", body: "Drafting, triage, and follow-up on your behalf." },
      { title: "Project support", body: "Keeping initiatives organized and on track." },
      { title: "Confidential work", body: "Sensitive tasks handled with discretion." },
    ],
    useCases: [
      "CEOs and COOs needing a trusted right hand",
      "Leaders managing multiple priorities",
      "Executives protecting focus and time",
    ],
    outcomes: [
      { value: "15h+", label: "Weekly hours saved" },
      { value: "Senior", label: "Talent tier" },
      { value: "100%", label: "Confidential" },
    ],
    faqs: faqPlaceholders("executive assistance"),
  },
  "remote-operations": {
    heroTitle: "Remote operations support that scales with you",
    intro:
      "Embedded operators who help your systems run smoothly — bringing structure and steadiness to operations as your business grows.",
    image: images.officeGlass,
    capabilities: [
      { title: "Systems support", body: "Keeping your tools and workflows running cleanly." },
      { title: "Coordination", body: "Cross-functional coordination that reduces friction." },
      { title: "Process building", body: "Documenting and refining how work gets done." },
      { title: "Scaling support", body: "Adjusting capacity as your needs evolve." },
    ],
    useCases: [
      "Scaling businesses building operational maturity",
      "Founder-led teams formalizing process",
      "Operations leaders extending capacity",
    ],
    outcomes: [
      { value: "6", label: "Support disciplines" },
      { value: "Flexible", label: "Capacity model" },
      { value: "Embedded", label: "Engagement style" },
    ],
    faqs: faqPlaceholders("remote operations support"),
  },
};

function faqPlaceholders(name: string) {
  return [
    {
      question: `How quickly can ${name} be set up?`,
      answer:
        "Most engagements begin onboarding within 24 to 72 hours of our discovery conversation, depending on scope and fit.",
    },
    {
      question: "Do we get a dedicated person or a rotating pool?",
      answer:
        "You're matched with dedicated talent whose skills and working style fit your team, with SageStone oversight to maintain consistency.",
    },
    {
      question: "Can we scale support up or down?",
      answer:
        "Yes. Our model is built for growth, so you can adjust hours or expand across disciplines as your priorities shift.",
    },
  ];
}

/* ---------- Industries ---------- */
export const industries = [
  {
    name: "Agencies",
    description: "Account, project, and delivery support that protects billable focus.",
  },
  {
    name: "E-commerce Brands",
    description: "Order, listing, and customer care handled with consistency.",
  },
  {
    name: "Real Estate Teams",
    description: "Transaction coordination, CRM hygiene, and client follow-through.",
  },
  {
    name: "Founder-led Businesses",
    description: "A dependable operational layer as the business grows.",
  },
  {
    name: "Service Companies",
    description: "Scheduling, dispatch, and back-office support that scales.",
  },
  {
    name: "Professional Firms",
    description: "Structured administrative and client-facing assistance.",
  },
];

/* ---------- Process ---------- */
export const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a focused conversation about your goals, workflows, and the support that would move things forward.",
  },
  {
    number: "02",
    title: "Matching",
    description:
      "We match you with vetted talent whose skills and temperament fit the way your team actually works.",
  },
  {
    number: "03",
    title: "Onboarding",
    description:
      "We embed your support into your tools and rhythms with clear documentation and expectations.",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description:
      "You get dependable, structured help — with oversight from SageStone so quality stays consistent.",
  },
];

/* ---------- Stats ---------- */
export const stats = [
  { value: "98%", label: "Client retention" },
  { value: "24h", label: "Average onboarding start" },
  { value: "150+", label: "Growth-focused teams supported" },
  { value: "6", label: "Core support disciplines" },
];

/* ---------- Testimonials ---------- */
export const testimonials = [
  {
    quote:
      "SageStone gave us an operational layer we could actually trust. It feels less like outsourcing and more like a part of our team.",
    name: "Elena Marsh",
    role: "Founder, Northline Studio",
  },
  {
    quote:
      "The consistency is what stands out. Our customer response times improved and our tone stayed exactly on-brand.",
    name: "David Okafor",
    role: "COO, Meridian Commerce",
  },
  {
    quote:
      "They understood our workflows quickly and quietly removed the bottlenecks that had been slowing us down for months.",
    name: "Priya Nair",
    role: "Operations Lead, Cedar & Co.",
  },
];

/* ---------- Case studies ---------- */
export const caseStudies = [
  {
    slug: "northline-studio",
    client: "Northline Studio",
    industry: "Creative Agency",
    headline: "Protecting billable focus across a growing team",
    challenge:
      "A fast-growing agency was losing senior hours to administrative work and inconsistent client follow-up.",
    solution:
      "We embedded two SageStone assistants into their project and account workflows with clear ownership of scheduling and coordination.",
    outcome: "31% more billable capacity reclaimed within the first quarter.",
    image: images.woodenDesk,
  },
  {
    slug: "meridian-commerce",
    client: "Meridian Commerce",
    industry: "E-commerce",
    headline: "Steadier customer support through peak season",
    challenge:
      "Seasonal spikes were overwhelming a lean internal team and stretching response times.",
    solution:
      "A dedicated support pod handled tier-one inquiries across email and chat with documented, on-brand responses.",
    outcome: "Response time cut in half while satisfaction held steady.",
    image: images.deskShelves,
  },
  {
    slug: "cedar-co",
    client: "Cedar & Co.",
    industry: "Professional Services",
    headline: "Removing operational bottlenecks",
    challenge:
      "Manual handoffs between teams were causing delays and missed deadlines.",
    solution:
      "We mapped the workflow and placed an operations specialist to own coordination and documentation.",
    outcome: "Project cycle time reduced by 22%.",
    image: images.officeArt,
  },
];

/* ---------- FAQ ---------- */
export const faqs = [
  {
    category: "Getting Started",
    question: "How quickly can we get support in place?",
    answer:
      "Most engagements begin onboarding within 24 to 72 hours of our discovery conversation, depending on the scope and the fit we're matching for.",
  },
  {
    category: "Getting Started",
    question: "What does the matching process look like?",
    answer:
      "We match you with vetted talent based on your workflows, tools, and working style — not just a skills checklist. You review and approve the fit before we begin.",
  },
  {
    category: "Working Together",
    question: "How is quality maintained over time?",
    answer:
      "Every engagement includes oversight from SageStone. We monitor consistency, provide structure, and adjust as your needs evolve so the support stays dependable.",
  },
  {
    category: "Working Together",
    question: "Can support scale up or down as we grow?",
    answer:
      "Yes. Our model is built for growth-focused businesses, so you can expand support across disciplines or adjust hours as your priorities shift.",
  },
  {
    category: "Working Together",
    question: "Which tools and systems do you work within?",
    answer:
      "We embed into the tools you already use — from project management and CRMs to help desks and communication platforms — rather than asking you to change your stack.",
  },
  {
    category: "Trust & Security",
    question: "How do you handle confidentiality and data?",
    answer:
      "Confidentiality is standard. We work within your access controls and follow clear documentation and security practices to protect sensitive information.",
  },
];
