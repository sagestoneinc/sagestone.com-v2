/* ---------- Solution / use-case pages (/solutions/:slug) ----------
 * Task-level pages for specific jobs SageStone takes off a team's plate.
 * Keep seoTitle under 60 chars and metaDescription under 155.
 */

export type SolutionPage = {
  slug: string;
  name: string;
  /** One line for cards and link lists. */
  summary: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  includes: { title: string; body: string }[];
  signs: string[];
  services: string[];
  industries: string[];
  faqs: { question: string; answer: string }[];
};

export const solutionPages: SolutionPage[] = [
  {
    slug: "shopify-customer-support",
    name: "Shopify Customer Support",
    summary: "Order questions, returns, and customer care for Shopify stores.",
    h1: "Shopify Customer Support Outsourcing",
    seoTitle: "Shopify Customer Support Outsourcing | SageStone",
    metaDescription:
      "Outsourced Shopify customer support: order status, returns, exchanges, and customer care handled in your brand voice, inside your store and help desk.",
    intro:
      "Shopify makes it easy to sell. Answering every customer quickly is harder. SageStone support works inside your Shopify admin and help desk to resolve order questions, returns, and exchanges in your brand voice.",
    includes: [
      { title: "Order status and tracking", body: "\"Where is my order?\" answered with real tracking details and proactive updates on delays." },
      { title: "Returns and exchanges", body: "Processing returns and exchanges according to your policy, with approvals for exceptions." },
      { title: "Order edits", body: "Address corrections, cancellations, and item swaps before fulfillment." },
      { title: "Pre-sale questions", body: "Sizing, product, and shipping questions answered to help customers buy with confidence." },
      { title: "Macros and saved replies", body: "Building and maintaining saved replies so answers stay fast and consistent." },
    ],
    signs: [
      "Support replies take more than a day during busy weeks.",
      "The founder still answers most customer emails.",
      "Returns and exchanges are handled differently depending on who picks them up.",
    ],
    services: ["customer-support-outsourcing", "remote-operations-support"],
    industries: ["ecommerce"],
    faqs: [
      { question: "Which help desks do you work with?", answer: "We work inside the help desk you already use alongside your Shopify admin. Access is set up during onboarding." },
      { question: "Can your team issue refunds?", answer: "Only within the limits you set. Anything outside your policy or above an agreed amount is escalated to you." },
      { question: "Will replies sound like our brand?", answer: "Yes. We document your tone and common answers during onboarding and review replies early on to get it right." },
    ],
  },
  {
    slug: "crm-administration",
    name: "CRM Administration",
    summary: "Clean data, current pipelines, and follow-ups that actually happen.",
    h1: "CRM Administration and Data Hygiene",
    seoTitle: "CRM Administration & Data Cleanup Support | SageStone",
    metaDescription:
      "Outsourced CRM administration: data entry, deduplication, pipeline updates, and follow-up tasks so your CRM stays accurate and your team trusts it.",
    intro:
      "A CRM is only as useful as the data inside it. SageStone keeps records accurate, pipelines current, and follow-ups on schedule, so your team can trust what it sees.",
    includes: [
      { title: "Data entry and enrichment", body: "Adding new leads and contacts with consistent fields and sources." },
      { title: "Deduplication and cleanup", body: "Merging duplicates, fixing formatting, and archiving stale records." },
      { title: "Pipeline upkeep", body: "Updating deal stages and next steps based on the latest activity." },
      { title: "Follow-up tasks", body: "Creating and tracking reminders so leads and clients are never left waiting." },
      { title: "Simple reporting", body: "Regular snapshots of pipeline and activity prepared for your review." },
    ],
    signs: [
      "No one trusts the numbers in the CRM.",
      "Duplicate contacts and missing fields are everywhere.",
      "Follow-ups depend on memory instead of the system.",
    ],
    services: ["back-office-support", "virtual-assistant-services", "remote-operations-support"],
    industries: ["real-estate", "saas", "agencies"],
    faqs: [
      { question: "Which CRMs do you support?", answer: "We work inside the CRM you already use. Field conventions and permissions are agreed during onboarding." },
      { question: "Can you clean up an existing messy CRM?", answer: "Yes. We usually start with a cleanup project, then move to ongoing maintenance so it stays clean." },
      { question: "Do you change our CRM setup?", answer: "Only with your approval. We recommend improvements and document any changes we make." },
    ],
  },
  {
    slug: "inbox-calendar-management",
    name: "Inbox & Calendar Management",
    summary: "An organized inbox and a calendar that protects your priorities.",
    h1: "Inbox and Calendar Management Services",
    seoTitle: "Inbox & Calendar Management Services | SageStone",
    metaDescription:
      "Inbox and calendar management by a dedicated assistant: email triage, drafted replies, scheduling, and meeting prep so your day follows your priorities.",
    intro:
      "When your inbox and calendar run the day, strategic work waits. A dedicated SageStone assistant triages email, drafts replies, and manages scheduling, so your time goes to what matters most.",
    includes: [
      { title: "Email triage", body: "Sorting, labeling, and archiving, with urgent items surfaced first." },
      { title: "Drafted replies", body: "Routine responses drafted for your approval or sent within agreed guidelines." },
      { title: "Scheduling", body: "Booking, rescheduling, and protecting focus time across time zones." },
      { title: "Meeting prep", body: "Agendas, briefing notes, and follow-up reminders for important meetings." },
      { title: "Travel coordination", body: "Itineraries, bookings, and changes handled with your preferences in mind." },
    ],
    signs: [
      "Hundreds of unread emails and the worry of missing something important.",
      "Back-and-forth scheduling eats time every week.",
      "Meetings start without agendas or context.",
    ],
    services: ["executive-assistant-services", "virtual-assistant-services"],
    industries: ["professional-services", "agencies", "real-estate"],
    faqs: [
      { question: "Will my assistant send emails on my behalf?", answer: "Only within the rules you set. Many clients start with drafts for approval, then allow routine replies once trust is built." },
      { question: "How do you keep my information private?", answer: "Access is limited to your inbox and calendar, agreed during onboarding, and SageStone oversees how information is handled." },
      { question: "Can you manage calendars for several people?", answer: "Yes. We coordinate across team calendars using agreed priorities and rules." },
    ],
  },
  {
    slug: "customer-onboarding-support",
    name: "Customer Onboarding Support",
    summary: "Consistent onboarding that gets new customers to value faster.",
    h1: "Customer Onboarding Support",
    seoTitle: "Customer Onboarding Support Outsourcing | SageStone",
    metaDescription:
      "Outsourced customer onboarding support: welcome sequences, setup check-ins, milestone tracking, and documentation that help new customers succeed.",
    intro:
      "The first weeks decide whether a new customer stays. SageStone runs your onboarding steps consistently, tracks progress, and flags customers who get stuck, so every new account gets the same good start.",
    includes: [
      { title: "Welcome and kickoff", body: "Sending welcome sequences, scheduling kickoffs, and collecting setup information." },
      { title: "Setup check-ins", body: "Following up on setup steps and answering common questions." },
      { title: "Milestone tracking", body: "Tracking each account's progress and flagging stalled onboarding to your team." },
      { title: "Onboarding materials", body: "Maintaining checklists, guides, and help articles based on real questions." },
      { title: "Handoff notes", body: "Clear notes when accounts move from onboarding to account management." },
    ],
    signs: [
      "Onboarding depends on who happens to own the account.",
      "New customers go quiet after signing up.",
      "The same setup questions come up again and again.",
    ],
    services: ["customer-support-outsourcing", "remote-operations-support"],
    industries: ["saas", "agencies", "professional-services"],
    faqs: [
      { question: "Does onboarding support work for non-software businesses?", answer: "Yes. Agencies and professional firms use it for client intake and kickoff, not just software setup." },
      { question: "Who owns the customer relationship?", answer: "You do. We run the agreed steps and escalate anything that needs your team's judgment." },
      { question: "Can you help design the onboarding process?", answer: "Yes. If your steps aren't documented yet, we start by mapping and writing them down." },
    ],
  },
  {
    slug: "sop-documentation",
    name: "SOP Documentation",
    summary: "How your business works, written down so anyone can follow it.",
    h1: "SOP Documentation and Process Mapping",
    seoTitle: "SOP Documentation & Process Mapping Services | SageStone",
    metaDescription:
      "SOP documentation services: we map recurring processes, write clear step-by-step SOPs, and keep them current so work is repeatable and easy to delegate.",
    intro:
      "You can't delegate what only lives in someone's head. SageStone maps your recurring processes and turns them into clear, step-by-step SOPs, then keeps them current as the business changes.",
    includes: [
      { title: "Process mapping", body: "Walking through how work actually happens today, including handoffs and exceptions." },
      { title: "Step-by-step SOPs", body: "Clear written procedures with screenshots, owners, and quality checks." },
      { title: "Checklists and templates", body: "Short checklists for recurring tasks and templates for common outputs." },
      { title: "SOP library", body: "An organized, searchable home for your documentation in the tool you prefer." },
      { title: "Ongoing updates", body: "Revising SOPs when tools or processes change, so documentation doesn't go stale." },
    ],
    signs: [
      "Only one person knows how certain tasks are done.",
      "New hires learn by shadowing because nothing is written down.",
      "The same mistakes happen whenever work changes hands.",
    ],
    services: ["workflow-support", "remote-operations-support", "back-office-support"],
    industries: ["agencies", "ecommerce", "service-businesses"],
    faqs: [
      { question: "Where do the SOPs live?", answer: "In the tool you already use for documentation. If you don't have one, we recommend a simple option and set it up." },
      { question: "How much of our time does documentation take?", answer: "We keep it light: short walkthrough calls or screen recordings, and we write the SOP from there for your review." },
      { question: "Is SOP work a one-time project?", answer: "It can be. Many clients keep ongoing support so SOPs stay accurate as the business evolves." },
    ],
  },
  {
    slug: "administrative-support",
    name: "Administrative Support",
    summary: "Reliable help with the recurring admin that fills your week.",
    h1: "Remote Administrative Support",
    seoTitle: "Remote Administrative Support Services | SageStone",
    metaDescription:
      "Remote administrative support for growing businesses: data entry, document prep, scheduling, research, and recurring admin handled accurately.",
    intro:
      "Recurring admin rarely gets harder. It just keeps coming. SageStone provides dependable remote administrative support that handles the steady flow of tasks, so your team can focus on work that needs them.",
    includes: [
      { title: "Data entry and records", body: "Accurate entry and upkeep across spreadsheets, CRMs, and internal tools." },
      { title: "Document preparation", body: "Formatting, proofreading, and organizing documents and files." },
      { title: "Scheduling and coordination", body: "Booking meetings, coordinating vendors, and tracking deadlines." },
      { title: "Research", body: "Structured research and summaries prepared for decisions." },
      { title: "Recurring admin", body: "Weekly and monthly tasks run on schedule from a shared checklist." },
    ],
    signs: [
      "Admin work spills into evenings and weekends.",
      "Small tasks wait days because no one owns them.",
      "Skilled people spend hours on data entry.",
    ],
    services: ["virtual-assistant-services", "back-office-support", "workflow-support"],
    industries: ["service-businesses", "professional-services", "real-estate"],
    faqs: [
      { question: "What kind of admin can you take on?", answer: "Most recurring, rules-based admin: data entry, document prep, scheduling, research, and coordination." },
      { question: "Is this full-time or part-time support?", answer: "We match the engagement to your workload during the discovery call." },
      { question: "How do we hand over tasks?", answer: "Through a shared request process and short documentation, which we help you set up during onboarding." },
    ],
  },
];

export const solutionBySlug = (slug: string) => solutionPages.find((s) => s.slug === slug);
