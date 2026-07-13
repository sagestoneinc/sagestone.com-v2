/* ============================================================================
   Blog content. Each post targets one primary keyword and links to a money
   page. Body is a lightweight block model rendered by BlogPost.tsx.
   ========================================================================== */
import { images } from "./site";

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "cta"; text: string; to: string; label: string };

export type BlogPost = {
  slug: string;
  title: string; // on-page H1
  metaTitle: string; // <title>
  description: string; // meta description
  excerpt: string; // listing summary
  datePublished: string; // ISO
  readMinutes: number;
  category: string;
  image: string;
  body: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-a-virtual-assistant-cost",
    title: "How Much Does a Virtual Assistant Cost in 2026?",
    metaTitle: "How Much Does a Virtual Assistant Cost? (2026) | SageStone",
    description:
      "A clear breakdown of virtual assistant costs in 2026 — hourly vs. dedicated pricing, what drives the rate, and how to get real ROI from a VA.",
    excerpt:
      "Hourly rates, dedicated retainers, and the hidden costs no one mentions — a straight answer on what a virtual assistant actually costs.",
    datePublished: "2026-07-13",
    readMinutes: 6,
    category: "Hiring",
    image: images.laptopPlant,
    body: [
      {
        type: "p",
        text: "The cost of a virtual assistant varies more than most pricing pages admit. Depending on where your assistant is based, how specialized the work is, and whether you hire hourly or on a dedicated basis, effective rates range from a few dollars an hour to well over $50. This guide breaks down what you actually pay for — and how to make sure you get value, not just a low rate.",
      },
      { type: "h2", text: "The three common pricing models" },
      {
        type: "ul",
        items: [
          "Hourly / pay-as-you-go: flexible, but rates climb and continuity suffers when you share a rotating pool.",
          "Dedicated monthly: a fixed retainer for a named person who learns your business — the best fit for ongoing operational work.",
          "Task-based / marketplace: cheap per task, but you carry the management overhead and quality risk.",
        ],
      },
      { type: "h2", text: "What drives the rate" },
      {
        type: "p",
        text: "Location, skill level, and management model are the biggest levers. A Philippines-based virtual assistant typically offers strong English fluency and Western-business familiarity at a meaningful cost advantage versus U.S.-based hires — which is why so many founders start there.",
      },
      { type: "h2", text: "The real cost is management, not the rate" },
      {
        type: "p",
        text: "The cheapest VA is expensive if you spend hours correcting work or re-hiring every quarter. A dedicated, vetted assistant with oversight costs a little more per hour and far less in total, because continuity and accountability are built in.",
      },
      {
        type: "cta",
        text: "Want a dedicated VA without the management overhead?",
        to: "/services/virtual-assistant",
        label: "Explore Virtual Assistant Services",
      },
    ],
  },
  {
    slug: "in-house-vs-outsourced-customer-support",
    title: "In-House vs. Outsourced Customer Support: A Cost & Quality Breakdown",
    metaTitle: "In-House vs. Outsourced Customer Support | SageStone",
    description:
      "Compare in-house and outsourced customer support on cost, quality, speed, and scalability — and learn when outsourcing actually wins.",
    excerpt:
      "The honest trade-offs between building an internal support team and outsourcing — on cost, quality, and how fast you can scale.",
    datePublished: "2026-07-13",
    readMinutes: 7,
    category: "Customer Support",
    image: images.officeArt,
    body: [
      {
        type: "p",
        text: "As support volume grows, most teams hit the same fork in the road: hire and manage support in-house, or outsource it. Both can work. The right answer depends on your margins, your volume patterns, and how much management capacity you have.",
      },
      { type: "h2", text: "Where in-house wins" },
      {
        type: "p",
        text: "Deep product complexity, tight security requirements, and highly technical tier-3 issues often justify an internal team you fully control. But that control comes with recruiting, training, coverage, and management costs that scale linearly with headcount.",
      },
      { type: "h2", text: "Where outsourcing wins" },
      {
        type: "ul",
        items: [
          "Seasonal or spiky volume you can't staff efficiently in-house.",
          "Tier-1 email and chat that follow documented playbooks.",
          "Extended-hours or weekend coverage without hiring a night shift.",
          "Fast scaling when you need capacity in weeks, not quarters.",
        ],
      },
      { type: "h2", text: "The quality myth" },
      {
        type: "p",
        text: "Outsourced support gets a bad reputation from rotating, unmanaged pools. A dedicated support pod that learns your tone and works inside your help desk keeps quality — and CSAT — steady, often while cutting response times.",
      },
      {
        type: "cta",
        text: "Scale support without losing your standards.",
        to: "/services/customer-support",
        label: "Explore Customer Support Outsourcing",
      },
    ],
  },
  {
    slug: "why-companies-outsource-to-the-philippines",
    title: "Why Companies Outsource to the Philippines",
    metaTitle: "Why Companies Outsource to the Philippines | SageStone",
    description:
      "English fluency, time-zone overlap, cost efficiency, and cultural fit — the real reasons companies build remote teams in the Philippines.",
    excerpt:
      "It's not just about cost. Here's why the Philippines remains the top destination for reliable remote support talent.",
    datePublished: "2026-07-13",
    readMinutes: 5,
    category: "Offshore Staffing",
    image: images.officeGlass,
    body: [
      {
        type: "p",
        text: "The Philippines has been a global hub for remote support and outsourcing for decades — and it isn't only about labor costs. The combination of language, culture, and workforce depth is what keeps companies coming back.",
      },
      { type: "h2", text: "English fluency and communication style" },
      {
        type: "p",
        text: "The Philippines has one of the largest English-proficient workforces in the world, with a communication style that aligns closely with Western business norms. That means less friction on email, chat, and calls — and a shorter ramp to on-brand work.",
      },
      { type: "h2", text: "Time-zone flexibility" },
      {
        type: "p",
        text: "Filipino professionals routinely work U.S. business hours, making real-time collaboration and same-day coverage practical rather than aspirational.",
      },
      { type: "h2", text: "Depth of talent — and reliability" },
      {
        type: "ul",
        items: [
          "A large, educated talent market across support, operations, and administration.",
          "A workforce known for diligence, consistency, and long tenure.",
          "Fast adaptability to new tools, teams, and workflows.",
        ],
      },
      {
        type: "cta",
        text: "See how we turn that talent into dependable support.",
        to: "/why-philippines",
        label: "Why the Philippines",
      },
    ],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
