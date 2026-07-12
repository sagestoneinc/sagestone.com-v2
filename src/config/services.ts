export type ServicePageContent = {
  path: string;
  name: string;
  serviceType: string;
  heroTitle: string;
  heroIntro: string;
  audience: string;
  sections: { title: string; body: string }[];
  faq: { question: string; answer: string }[];
  relatedLinks: { label: string; to: string }[];
};

export const SERVICE_PAGES: ServicePageContent[] = [
  {
    path: "/business-operations-support",
    name: "Business Operations Support Services",
    serviceType: "Business operations support services",
    heroTitle: "Business Operations Support Services for Reliable Daily Execution",
    heroIntro:
      "Keep recurring operations organized with dependable support for CRM hygiene, workflow coordination, reporting prep and process documentation aligned with your existing standards.",
    audience: "Operations leaders and growing service teams",
    sections: [
      {
        title: "Workflow and process coordination",
        body: "Maintain clear ownership across recurring tasks, approvals and handoffs so teams can move faster with fewer missed steps.",
      },
      {
        title: "CRM and documentation support",
        body: "Keep contact records, activity history, SOPs and shared process documentation current and usable for day-to-day decisions.",
      },
      {
        title: "Reporting and operating cadence",
        body: "Prepare recurring status snapshots and operational summaries so leadership can review progress without rebuilding reports each week.",
      },
      {
        title: "Quality checks and escalation clarity",
        body: "Apply practical quality checks, routing rules and escalation notes to reduce rework and improve accountability.",
      }
    ],
    faq: [
      {
        question: "How quickly can operations support start?",
        answer: "Most teams begin onboarding in a few business days after scope alignment and workflow documentation handoff."
      },
      {
        question: "Do you replace our current systems?",
        answer: "No. SageStone works in your current tools and process stack unless you request changes."
      }
    ],
    relatedLinks: [
      { label: "customer support outsourcing", to: "/customer-support-outsourcing" },
      { label: "GoHighLevel virtual assistant services", to: "/gohighlevel-virtual-assistant" },
      { label: "outsourced business support solutions", to: "/solutions" }
    ]
  },
  {
    path: "/ecommerce-virtual-assistant",
    name: "Ecommerce Virtual Assistant Services",
    serviceType: "Ecommerce virtual assistant services",
    heroTitle: "Ecommerce Virtual Assistant Services for Daily Store Operations",
    heroIntro:
      "Stabilize your store workload with dependable ecommerce support for order workflows, catalog updates, customer message coordination, return handling and recurring back-office tasks.",
    audience: "Ecommerce teams and online retail operators",
    sections: [
      {
        title: "Order and return workflow support",
        body: "Coordinate order tracking, return communication and fulfillment follow-through to keep customer expectations aligned with operations."
      },
      {
        title: "Catalog and listing maintenance",
        body: "Support routine product updates, inventory detail checks and merchandising data updates to reduce listing errors."
      },
      {
        title: "Customer inquiry triage",
        body: "Handle first-line order and account inquiries using your approved voice and escalation process."
      },
      {
        title: "Store operations reporting",
        body: "Prepare recurring summaries for unresolved issues, common inquiry themes and operational blockers."
      }
    ],
    faq: [
      {
        question: "Can this service support seasonal peaks?",
        answer: "Yes. The support scope can be adjusted around known campaigns and high-volume periods."
      },
      {
        question: "Will your team follow our brand voice?",
        answer: "Yes. Onboarding includes voice guidance, response templates and escalation rules."
      }
    ],
    relatedLinks: [
      { label: "customer support outsourcing", to: "/customer-support-outsourcing" },
      { label: "website maintenance support services", to: "/web-maintenance-support" },
      { label: "outsourced business support solutions", to: "/solutions" }
    ]
  },
  {
    path: "/gohighlevel-virtual-assistant",
    name: "GoHighLevel Virtual Assistant Services",
    serviceType: "GoHighLevel virtual assistant services",
    heroTitle: "GoHighLevel Virtual Assistant Services for CRM and Workflow Support",
    heroIntro:
      "Keep your GoHighLevel workspace organized and your customer workflows moving with dependable virtual assistant support. SageStone can assist with CRM updates, pipeline administration, contact organization, follow-up coordination, reporting, workflow checks and day-to-day platform maintenance based on your documented processes.",
    audience: "Revenue, marketing, and operations teams using GoHighLevel",
    sections: [
      {
        title: "GoHighLevel tasks SageStone can support",
        body: "Coordinate recurring CRM updates, opportunity stage hygiene, contact upkeep and campaign support tasks based on your documented standards."
      },
      {
        title: "CRM and pipeline administration",
        body: "Maintain pipeline consistency, update deal records and flag stalled opportunities so handoffs and follow-up priorities stay clear."
      },
      {
        title: "Contact and data organization",
        body: "Assist with list hygiene, tagging consistency and duplicate cleanup to improve reporting reliability and outreach accuracy."
      },
      {
        title: "Workflow and follow-up coordination",
        body: "Support workflow checks, follow-up queue monitoring and escalation routing for exceptions that need team review."
      },
      {
        title: "Reporting and dashboard support",
        body: "Prepare recurring updates on lead status, pipeline movement and operational follow-up activities."
      },
      {
        title: "Lead handoff and appointment support",
        body: "Coordinate handoff notes, meeting updates and scheduling-related follow-up so opportunities move forward cleanly."
      },
      {
        title: "Quality assurance and documentation",
        body: "Maintain checklist-based QA and process notes so recurring tasks remain consistent as your team grows."
      },
      {
        title: "Who this service is for",
        body: "Designed for teams using GoHighLevel that need dependable operational support without claiming advanced automation engineering or custom development."
      },
      {
        title: "How onboarding works",
        body: "Onboarding focuses on access controls, process documentation, escalation rules and practical task prioritization."
      }
    ],
    faq: [
      {
        question: "Do you provide custom development inside GoHighLevel?",
        answer: "No. This service focuses on dependable operational support based on your existing documented workflows."
      },
      {
        question: "Can support include reporting and follow-up queues?",
        answer: "Yes. Reporting prep and follow-up coordination are core parts of this service model."
      }
    ],
    relatedLinks: [
      { label: "business operations support", to: "/business-operations-support" },
      { label: "customer support outsourcing", to: "/customer-support-outsourcing" },
      { label: "virtual assistant services in our solutions hub", to: "/solutions" }
    ]
  },
  {
    path: "/web-maintenance-support",
    name: "Website Maintenance Support Services",
    serviceType: "Website maintenance support services",
    heroTitle: "Website Maintenance Support Services for Consistent Site Quality",
    heroIntro:
      "Keep your website current and dependable with recurring support for content updates, landing-page publishing coordination, form checks, link QA and routine maintenance workflows.",
    audience: "Marketing and operations teams managing active websites",
    sections: [
      {
        title: "Content updates and publishing support",
        body: "Coordinate routine content edits, text updates and scheduling to keep priority pages accurate."
      },
      {
        title: "Landing-page and form QA",
        body: "Validate links, forms and critical interactions so publishing updates do not create avoidable conversion issues."
      },
      {
        title: "Routine website checks",
        body: "Use practical checklists to spot obvious issues in navigation, content consistency and key conversion paths."
      },
      {
        title: "Documentation and request tracking",
        body: "Maintain update logs and request backlogs so teams can prioritize website work with clarity."
      }
    ],
    faq: [
      {
        question: "Is this custom development support?",
        answer: "No. This service focuses on dependable maintenance, publishing coordination and QA workflows."
      },
      {
        question: "Can this run alongside internal teams or agencies?",
        answer: "Yes. The support model is designed to work with existing marketing and web operations teams."
      }
    ],
    relatedLinks: [
      { label: "ecommerce virtual assistant services", to: "/ecommerce-virtual-assistant" },
      { label: "business operations support", to: "/business-operations-support" },
      { label: "outsourced business support solutions", to: "/solutions" }
    ]
  },
  {
    path: "/customer-support-outsourcing",
    name: "Customer Support Outsourcing Services",
    serviceType: "Customer support outsourcing services",
    heroTitle: "Reliable Customer Support Outsourcing for Growing Businesses",
    heroIntro:
      "Deliver responsive, consistent customer experiences without building a large in-house support team. SageStone provides dependable customer support outsourcing for email, chat, help-desk queues and recurring service workflows, with support tailored to your brand voice, escalation process and operating standards.",
    audience: "Growing businesses with recurring customer support demand",
    sections: [
      { title: "Who this service is for", body: "Designed for teams with steady support demand that need dependable delivery while preserving in-house focus." },
      { title: "Support channels offered", body: "Email, chat and help-desk queue support aligned with your approved workflows and operating windows." },
      { title: "Typical responsibilities", body: "Ticket triage, first-response handling, update follow-through, escalation routing and support documentation upkeep." },
      { title: "Email support", body: "Handle inbound support queues using approved response standards and consistent tone guidelines." },
      { title: "Chat support", body: "Support routine live-chat or asynchronous chat interactions and route exceptions through escalation paths." },
      { title: "Help-desk and ticket management", body: "Maintain queue hygiene, status updates and tagging consistency to keep resolution workflows visible." },
      { title: "Order, account or service inquiries", body: "Coordinate common inquiry workflows and hand off account-sensitive cases to your team when required." },
      { title: "Escalation procedures", body: "Use documented escalation triggers and handoff notes so complex issues reach the right owner quickly." },
      { title: "Brand voice and knowledge-base training", body: "Onboarding includes approved messaging references, response examples and knowledge-base orientation." },
      { title: "Quality assurance", body: "Apply practical QA review loops and feedback checkpoints to improve consistency over time." },
      { title: "Reporting and service metrics", body: "Provide recurring support summaries with actionable patterns and unresolved issue visibility." },
      { title: "Onboarding process", body: "Begin with workflow mapping, access setup, documentation review and phased ramp-up based on your priorities." },
      { title: "Data privacy and confidentiality", body: "Workflows are handled within your access controls and confidentiality expectations." }
    ],
    faq: [
      { question: "Do you guarantee 24/7 coverage?", answer: "No. Coverage scope is defined during planning and aligned to your documented operating needs." },
      { question: "Can support follow our existing escalation process?", answer: "Yes. Escalation routes are configured around your approved process and ownership model." }
    ],
    relatedLinks: [
      { label: "business operations support", to: "/business-operations-support" },
      { label: "ecommerce virtual assistant services", to: "/ecommerce-virtual-assistant" },
      { label: "outsourced business support solutions", to: "/solutions" }
    ]
  }
];

export const SERVICE_PAGE_MAP = new Map(SERVICE_PAGES.map((service) => [service.path, service]));
