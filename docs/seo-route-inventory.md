# SEO Route Inventory

## Repository audit summary

- Framework: React 18 + Vite 6 SPA
- Routing: `react-router` client-side routing in `src/app/App.tsx`
- Rendering mode: client-rendered SPA (no SSR/SSG pipeline in repository)
- Metadata implementation: `src/app/seo/SeoHead.tsx` (document head manager)
- Canonical implementation: `src/app/seo/canonical.ts`
- Sitemap source: static `public/sitemap.xml`
- robots.txt source: static `public/robots.txt`
- Structured data: reusable schema helpers in `src/app/seo/schema.ts`
- Navigation: `src/app/components/layout/Header.tsx`
- Footer links: `src/app/components/layout/Footer.tsx`
- Blog architecture: `/blog` index + `/blog/:slug` article template using `src/config/blog.ts`
- Image optimization strategy: currently image URLs are external Unsplash URLs and standard `<img>` usage (no framework image optimizer in this SPA)
- Font loading: CSS variable/font-face strategy in `src/styles/fonts.css`
- Analytics/3rd-party scripts: none found in repository
- Redirect rules: app redirects in `src/app/App.tsx`, deploy redirects in `public/_redirects` and `vercel.json`
- Utility/non-index pages: `/contact`, `/faq`, `/industries`, `/why-philippines`

## Route inventory

| URL | Purpose | Indexable | HTTP status* | Canonical URL | Primary keyword | Title | Meta description | H1 | In sitemap | Internal inbound links (examples) | Structured data | Recommended action |
|---|---|---:|---|---|---|---|---|---|---:|---|---|---|
| `/` | Homepage | Yes | 200 | `https://www.sagestoneinc.com/` | virtual assistant services | Virtual Assistant & Operations Support Services \\| SageStone | Scale with dependable virtual assistants, customer support, e-commerce assistance and business operations support from SageStone Inc. | Structured support for businesses built to grow. | Yes | Header logo, footer logo, site-wide links | Organization, WebSite | Keep as primary VA/services entry point |
| `/solutions` | Solutions hub | Yes | 200 | `https://www.sagestoneinc.com/solutions` | outsourced business support solutions | Outsourced Business Support Solutions \\| SageStone Inc | Explore flexible virtual assistant, customer support, e-commerce and business operations solutions designed for growing teams. | Flexible Business Support Solutions for Growing Teams | Yes | Header nav, homepage CTA, footer company links | Organization, WebSite, BreadcrumbList, ItemList | Keep as service hub |
| `/business-operations-support` | Service page | Yes | 200 | `https://www.sagestoneinc.com/business-operations-support` | business operations support services | Business Operations Support Services \\| SageStone Inc | Improve workflows, CRM organization, reporting, documentation and recurring business operations with dependable remote support. | Business Operations Support Services for Reliable Daily Execution | Yes | Header service menu, homepage service links, solutions cards | Organization, WebSite, BreadcrumbList, Service | Keep canonical |
| `/ecommerce-virtual-assistant` | Service page | Yes | 200 | `https://www.sagestoneinc.com/ecommerce-virtual-assistant` | ecommerce virtual assistant services | Ecommerce Virtual Assistant Services \\| SageStone Inc | Get reliable e-commerce support for orders, returns, product updates, customer messages, store administration and everyday back-office operations. | Ecommerce Virtual Assistant Services for Daily Store Operations | Yes | Header service menu, homepage service links, solutions cards | Organization, WebSite, BreadcrumbList, Service | Keep canonical |
| `/gohighlevel-virtual-assistant` | Service page | Yes | 200 | `https://www.sagestoneinc.com/gohighlevel-virtual-assistant` | gohighlevel virtual assistant services | GoHighLevel Virtual Assistant Services \\| SageStone Inc | Get dependable GoHighLevel virtual assistant support for CRM updates, pipelines, workflows, follow-ups, reporting and platform administration. | GoHighLevel Virtual Assistant Services for CRM and Workflow Support | Yes | Header service menu, homepage service links, solutions cards | Organization, WebSite, BreadcrumbList, Service | Keep canonical |
| `/web-maintenance-support` | Service page | Yes | 200 | `https://www.sagestoneinc.com/web-maintenance-support` | website maintenance support services | Website Maintenance Support Services \\| SageStone Inc | Keep your website current with dependable support for content edits, landing pages, forms, links, publishing coordination and quality assurance. | Website Maintenance Support Services for Consistent Site Quality | Yes | Header service menu, homepage service links, solutions cards | Organization, WebSite, BreadcrumbList, Service | Keep canonical |
| `/customer-support-outsourcing` | Service page | Yes | 200 | `https://www.sagestoneinc.com/customer-support-outsourcing` | customer support outsourcing services | Customer Support Outsourcing Services \\| SageStone Inc | Outsource email, chat and help-desk support to a dependable remote team trained around your workflows, brand voice and escalation process. | Reliable Customer Support Outsourcing for Growing Businesses | Yes | Header service menu, homepage service links, solutions cards | Organization, WebSite, BreadcrumbList, Service | Keep canonical |
| `/about` | Company info | Yes | 200 | `https://www.sagestoneinc.com/about` | SageStone Inc | About SageStone Inc \\| Structured Remote Support Partner | Learn how SageStone delivers structured remote support for growth-focused teams through dependable talent, clear process and steady oversight. | A steady operational partner for ambitious teams. | Yes | Header nav, footer company links | Organization, WebSite, BreadcrumbList | Keep canonical |
| `/experience` | Outcomes and proof | Yes | 200 | `https://www.sagestoneinc.com/experience` | SageStone experience | SageStone Experience \\| Client Outcomes and Engagement Model | See what the SageStone experience looks like through client outcomes, delivery standards and practical examples from growth-focused teams. | Proof, presented plainly. | Yes | Header nav, footer company links, solutions CTA | Organization, WebSite, BreadcrumbList | Keep canonical |
| `/blog` | Blog index | Yes | 200 | `https://www.sagestoneinc.com/blog` | virtual assistant and operations insights | Virtual Assistant and Operations Insights \\| SageStone Blog | Read practical insights on virtual assistants, operations support, customer support workflows and process improvement for growing teams. | Virtual assistant and operations insights | Yes | Header nav, footer company links | Organization, WebSite, BreadcrumbList | Keep canonical |
| `/blog/how-to-hire-a-virtual-assistant` | Blog article | Yes | 200 | `https://www.sagestoneinc.com/blog/how-to-hire-a-virtual-assistant` | how to hire a virtual assistant | How to Hire a Virtual Assistant: Practical Hiring Guide | A practical guide to hiring a virtual assistant, including role scoping, process setup, onboarding expectations and quality controls. | How to hire a virtual assistant with a reliable process | Yes | Blog index | Organization, WebSite, BreadcrumbList, BlogPosting | Keep canonical |
| `/blog/what-does-an-ecommerce-virtual-assistant-do` | Blog article | Yes | 200 | `https://www.sagestoneinc.com/blog/what-does-an-ecommerce-virtual-assistant-do` | what does an ecommerce virtual assistant do | What Does an Ecommerce Virtual Assistant Do? | Learn what an ecommerce virtual assistant does across orders, catalog updates, customer support coordination and daily store operations. | What does an ecommerce virtual assistant do day to day? | Yes | Blog index | Organization, WebSite, BreadcrumbList, BlogPosting | Keep canonical |
| `/blog/customer-support-outsourcing-best-practices` | Blog article | Yes | 200 | `https://www.sagestoneinc.com/blog/customer-support-outsourcing-best-practices` | customer support outsourcing best practices | Customer Support Outsourcing Best Practices for Growth Teams | Use these customer support outsourcing best practices to maintain quality, improve escalations and keep reporting useful as volume grows. | Customer support outsourcing best practices for consistent quality | Yes | Blog index | Organization, WebSite, BreadcrumbList, BlogPosting | Keep canonical |
| `/contact` | Contact form utility | No | 200 | `https://www.sagestoneinc.com/contact` | n/a | Book a Discovery Call \\| SageStone Inc | Contact SageStone to discuss virtual assistant, operations support and customer support outsourcing needs for your business. | Let's talk about the support you need. | No | Header button, CTA bands, footer | Organization, WebSite | Keep noindex |
| `/faq` | Utility FAQ page | No | 200 | `https://www.sagestoneinc.com/faq` | n/a | Frequently Asked Questions \\| SageStone Inc | Find clear answers about SageStone onboarding, support model, quality oversight, confidentiality and engagement workflow. | Clear answers, calmly given. | No | Legacy links | Organization, WebSite | Keep noindex |
| `/industries` | Utility page | No | 200 | `https://www.sagestoneinc.com/industries` | n/a | Industries We Support \\| SageStone Inc | Explore how SageStone supports agencies, ecommerce brands, real estate teams and service businesses with structured remote support. | Support shaped to your industry's realities. | No | Header legacy link | Organization, WebSite | Keep noindex |
| `/why-philippines` | Utility page | No | 200 | `https://www.sagestoneinc.com/why-philippines` | n/a | Why the Philippines for Remote Support \\| SageStone Inc | Understand why growth-focused teams choose Filipino remote talent and how SageStone maintains consistency through structured oversight. | A talent market built for dependable remote support. | No | Header legacy link | Organization, WebSite | Keep noindex |

\* HTTP status values are expected application statuses from routing/build output; production host checks require deployed environment verification.

## Redirect inventory

- `/services` → `/solutions` (permanent)
- `/case-studies` → `/experience` (permanent)
- `/services/*` legacy slugs → canonical service pages (permanent)
- Host normalization intended in `public/_redirects` for:
  - `http://sagestoneinc.com`
  - `http://www.sagestoneinc.com`
  - `https://sagestoneinc.com`

