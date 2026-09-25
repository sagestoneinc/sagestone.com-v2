/* ---------- Industry landing pages (/industries/:slug) ----------
 * Each page targets commercial search intent for one industry.
 * Keep seoTitle under 60 chars and metaDescription under 155.
 * `services` and `solutions` are slugs used for internal linking.
 */

export type IndustryPage = {
  slug: string;
  name: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  intro: string;
  pains: string[];
  tasks: { title: string; body: string }[];
  services: string[];
  solutions: string[];
  faqs: { question: string; answer: string }[];
};

export const industryPages: IndustryPage[] = [
  {
    slug: "ecommerce",
    name: "E-commerce",
    h1: "E-commerce Virtual Assistants and Customer Support",
    seoTitle: "E-commerce Virtual Assistants & Support | SageStone",
    metaDescription:
      "Dedicated e-commerce virtual assistants for customer support, order management, and store operations, with SageStone oversight as you scale.",
    intro:
      "Order volume, customer questions, and catalog upkeep grow faster than most e-commerce teams can hire. SageStone places dedicated support inside your store operations so customers get fast, on-brand answers and your team stays focused on growth.",
    pains: [
      "Customer inboxes that back up during launches, sales, and peak season.",
      "Order issues, returns, and exceptions that pull founders into daily firefighting.",
      "Product listings, inventory notes, and store admin that never quite get finished.",
    ],
    tasks: [
      { title: "Customer support", body: "Email, chat, and help desk replies written in your brand voice, with clear escalation for anything sensitive." },
      { title: "Order management", body: "Order status checks, address fixes, cancellations, and return or exchange processing." },
      { title: "Listing and catalog upkeep", body: "Product copy updates, variant and pricing checks, and tidy collections." },
      { title: "Supplier and fulfillment follow-up", body: "Chasing tracking numbers, delayed shipments, and supplier questions so nothing stalls." },
      { title: "Reviews and feedback", body: "Monitoring reviews, flagging product issues, and routing feedback to the right person." },
    ],
    services: ["customer-support-outsourcing", "remote-operations-support", "back-office-support"],
    solutions: ["shopify-customer-support", "sop-documentation", "administrative-support"],
    faqs: [
      { question: "Can your team work inside our e-commerce platform and help desk?", answer: "Yes. Support is embedded in the tools you already use, such as your store admin and help desk, with access set up during onboarding." },
      { question: "How do you handle refunds and sensitive requests?", answer: "We agree escalation rules up front. Anything outside those rules, such as refunds above a set amount, is routed to your team for approval." },
      { question: "Can support scale up for peak season?", answer: "Yes. We plan coverage with you ahead of launches and seasonal peaks so response times stay steady." },
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    h1: "Real Estate Virtual Assistants and Transaction Support",
    seoTitle: "Real Estate Virtual Assistant Services | SageStone",
    metaDescription:
      "Real estate virtual assistants for transaction coordination, CRM upkeep, listing admin, and client follow-up, so agents and property teams stay responsive.",
    intro:
      "Deals move on details: deadlines, documents, and fast follow-up. SageStone gives agents, brokerages, and property teams dedicated support that keeps transactions organized and clients informed.",
    pains: [
      "Transaction deadlines and paperwork that slip during busy months.",
      "CRMs full of stale leads, duplicate contacts, and missed follow-ups.",
      "Agents spending prime selling hours on listing admin and scheduling.",
    ],
    tasks: [
      { title: "Transaction coordination", body: "Tracking milestones, gathering documents, and keeping every party updated from contract to close." },
      { title: "CRM management", body: "Lead entry, tagging, pipeline updates, and follow-up reminders so no lead goes cold." },
      { title: "Listing administration", body: "Listing copy, photo organization, and portal updates prepared for your review." },
      { title: "Scheduling", body: "Showings, inspections, and client calls booked around your calendar." },
      { title: "Property management admin", body: "Tenant inquiries, maintenance request logging, and owner reporting support." },
    ],
    services: ["virtual-assistant-services", "back-office-support", "workflow-support"],
    solutions: ["crm-administration", "inbox-calendar-management", "administrative-support"],
    faqs: [
      { question: "Can a virtual assistant help with transaction coordination?", answer: "Yes. Your assistant can track milestones, collect documents, and send updates, following the checklist and approvals your team sets." },
      { question: "Do you support property management teams?", answer: "Yes. We support tenant communication, maintenance logging, and owner reporting alongside your property management software." },
      { question: "How is client information kept secure?", answer: "Access is limited to the tools your assistant needs, set up during onboarding, and SageStone oversees how information is handled." },
    ],
  },
  {
    slug: "agencies",
    name: "Agencies",
    h1: "Operations Support and Virtual Assistants for Agencies",
    seoTitle: "Agency Virtual Assistant & Operations Support | SageStone",
    metaDescription:
      "Agency virtual assistants and operations support for project coordination, client communication, and admin, so your senior team stays billable.",
    intro:
      "Agencies grow on senior talent, and senior talent gets buried in admin. SageStone gives creative, marketing, and digital agencies dedicated support for coordination and client follow-through, so your best people stay on billable work.",
    pains: [
      "Senior hours lost to scheduling, status updates, and admin.",
      "Inconsistent client follow-up as the roster grows.",
      "Project tools that drift out of date and hide real deadlines.",
    ],
    tasks: [
      { title: "Project coordination", body: "Keeping boards current, chasing approvals, and flagging deadlines before they slip." },
      { title: "Client communication", body: "Meeting scheduling, recap notes, and timely status updates in your agency's voice." },
      { title: "Account support", body: "Onboarding checklists, asset collection, and report preparation for account leads." },
      { title: "Resourcing and admin", body: "Timesheet reminders, invoice prep support, and vendor coordination." },
      { title: "Process documentation", body: "Turning how your team works into SOPs that make delivery repeatable." },
    ],
    services: ["virtual-assistant-services", "workflow-support", "executive-assistant-services"],
    solutions: ["sop-documentation", "inbox-calendar-management", "administrative-support"],
    faqs: [
      { question: "Can your team work inside our project management tools?", answer: "Yes. Support is embedded in the tools your agency already uses, with access and conventions agreed during onboarding." },
      { question: "Will clients interact with our assistant?", answer: "If you want them to. Many agencies have assistants handle scheduling and status updates, while strategy stays with the account team." },
      { question: "Can you support several account leads at once?", answer: "Yes. We set priorities and a shared request process so one assistant or a small pod can support multiple leads." },
    ],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    h1: "Virtual Assistants for Professional Services Firms",
    seoTitle: "Professional Services Virtual Assistants | SageStone",
    metaDescription:
      "Virtual assistants for consulting, accounting, legal, and advisory firms: scheduling, client intake, documentation, and admin handled with discretion.",
    intro:
      "In consulting, accounting, legal, and advisory firms, every hour of admin is an hour not spent with clients. SageStone provides discreet, structured support that keeps the practice organized and client-facing work moving.",
    pains: [
      "Partners and consultants absorbing administrative work.",
      "Client intake and document collection that drags on.",
      "Inboxes and calendars that decide the day instead of priorities.",
    ],
    tasks: [
      { title: "Client intake", body: "Collecting forms and documents, setting up client records, and confirming next steps." },
      { title: "Scheduling and inbox", body: "Calendar management, meeting prep, and inbox triage for partners and consultants." },
      { title: "Documentation", body: "Formatting reports, maintaining templates, and keeping files organized." },
      { title: "Billing support", body: "Time-entry reminders, invoice preparation support, and payment follow-up." },
      { title: "Research", body: "Structured research and summaries prepared for your review." },
    ],
    services: ["executive-assistant-services", "virtual-assistant-services", "back-office-support"],
    solutions: ["inbox-calendar-management", "administrative-support", "sop-documentation"],
    faqs: [
      { question: "How do you handle confidential client information?", answer: "Access is limited to what each role needs, agreed during onboarding, and SageStone oversees handling. We can work under your confidentiality agreements." },
      { question: "Can an assistant support several professionals?", answer: "Yes. We set a clear request process and priorities so one assistant can support a small team." },
      { question: "Do you replace our in-house staff?", answer: "No. SageStone support is designed to extend your team and take recurring work off their plates." },
    ],
  },
  {
    slug: "saas",
    name: "SaaS",
    h1: "Customer Support and Operations Support for SaaS Companies",
    seoTitle: "SaaS Customer Support & Operations Outsourcing | SageStone",
    metaDescription:
      "SaaS customer support, onboarding, and operations support: ticket handling, customer onboarding, CRM hygiene, and documentation for growing software teams.",
    intro:
      "Growing SaaS teams need responsive support and tidy operations long before they can justify every hire. SageStone provides dedicated support for tickets, onboarding, and the operational work that keeps customers successful.",
    pains: [
      "Support queues that grow with every new customer cohort.",
      "Onboarding steps that depend on whoever remembers them.",
      "CRM and billing data that slowly drift out of sync.",
    ],
    tasks: [
      { title: "Tier-one support", body: "Answering common questions, triaging bugs, and escalating with clear reproduction notes." },
      { title: "Customer onboarding", body: "Welcome sequences, setup check-ins, and tracking onboarding milestones." },
      { title: "Knowledge base upkeep", body: "Writing and updating help articles from recurring questions." },
      { title: "CRM hygiene", body: "Keeping accounts, contacts, and lifecycle stages accurate." },
      { title: "Founder and leadership support", body: "Inbox, calendar, and meeting prep for busy leaders." },
    ],
    services: ["customer-support-outsourcing", "remote-operations-support", "executive-assistant-services"],
    solutions: ["customer-onboarding-support", "crm-administration", "sop-documentation"],
    faqs: [
      { question: "Can your team handle technical support?", answer: "We handle tier-one support and triage. Technical issues are escalated to your team with clear reproduction notes." },
      { question: "Do you work inside our help desk and CRM?", answer: "Yes. Support is embedded in your existing tools, with access and conventions set during onboarding." },
      { question: "Can support cover multiple time zones?", answer: "Yes. We plan coverage around your customers' hours as part of the engagement." },
    ],
  },
  {
    slug: "service-businesses",
    name: "Service Businesses",
    h1: "Virtual Assistants and Back-Office Support for Service Businesses",
    seoTitle: "Service Business Virtual Assistants | SageStone",
    metaDescription:
      "Virtual assistants for service businesses: scheduling, dispatch support, customer follow-up, and back-office admin that keeps jobs and payments moving.",
    intro:
      "For home services, clinics, studios, and other service businesses, the phone, the schedule, and the paperwork never stop. SageStone provides dedicated support that keeps bookings full, customers informed, and admin under control.",
    pains: [
      "Missed calls and slow replies that turn into lost bookings.",
      "Scheduling and dispatch juggling that eats the owner's day.",
      "Invoices, follow-ups, and records that pile up after hours.",
    ],
    tasks: [
      { title: "Scheduling and dispatch support", body: "Booking appointments, confirming visits, and keeping the schedule accurate." },
      { title: "Customer follow-up", body: "Quote follow-ups, reminders, and post-service check-ins." },
      { title: "Inquiry handling", body: "Responding to inquiries by email, chat, and messages with consistent answers." },
      { title: "Back-office admin", body: "Invoice preparation, payment reminders, and record keeping." },
      { title: "Reviews and reputation", body: "Requesting reviews and flagging feedback that needs a personal reply." },
    ],
    services: ["customer-support-outsourcing", "back-office-support", "workflow-support"],
    solutions: ["administrative-support", "inbox-calendar-management", "crm-administration"],
    faqs: [
      { question: "Can a virtual assistant manage our booking calendar?", answer: "Yes. Your assistant can book, confirm, and reschedule appointments inside your scheduling tool, following your rules." },
      { question: "Do you help with invoicing?", answer: "We support invoice preparation, payment reminders, and record keeping. Approvals and financial decisions stay with you." },
      { question: "How quickly can support start?", answer: "Most engagements begin onboarding within 24 to 72 hours of the discovery call, depending on scope." },
    ],
  },
];

export const industryBySlug = (slug: string) => industryPages.find((i) => i.slug === slug);
