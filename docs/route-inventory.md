# SageStone Route Inventory

Source: live `sitemap.xml`, live route bundle, `robots.txt`, and `llms.txt` captured on July 12, 2026.

## Preserved And Rewritten Routes

All indexable sitemap routes are preserved as static Next.js pages and rewritten into the new design system:

- `/`
- `/services`
- `/about`
- `/experience`
- `/faq`
- `/contact`
- `/case-studies`
- `/operations-audit`
- `/blog`
- `/virtual-assistant-services`
- `/customer-support-outsourcing`
- `/ecommerce-customer-support-outsourcing`
- `/ecommerce-virtual-assistant`
- `/real-estate-virtual-assistant`
- `/social-media-virtual-assistant`
- `/business-operations-support`
- `/web-maintenance-support`
- `/virtual-assistant-vs-in-house-admin`
- `/outsourced-support-for-small-businesses`
- `/industries-we-serve`
- `/solutions`
- `/solutions/virtual-operations-admin`
- `/solutions/real-estate-virtual-assistant`
- `/solutions/bookkeeping-support`
- `/solutions/social-media-marketing-support`
- `/solutions/lead-generation-support`
- `/solutions/graphic-design-support`
- `/solutions/data-entry-web-research`
- `/blog/virtual-assistant-tasks-for-small-business`
- `/blog/how-to-outsource-customer-support-without-losing-quality`
- `/blog/ecommerce-virtual-assistant-20-tasks-you-can-delegate`
- `/blog/virtual-assistant-tasks-to-delegate`
- `/blog/customer-support-outsourcing-checklist`
- `/blog/ecommerce-customer-support-best-practices`
- `/blog/how-to-create-sops-for-virtual-assistants`
- `/blog/how-to-hire-a-virtual-assistant`
- `/blog/when-to-outsource-customer-support`
- `/blog/what-does-an-ecommerce-virtual-assistant-do`
- `/blog/business-operations-support-guide`
- `/blog/improve-saas-customer-onboarding`
- `/blog/shopify-customer-support-workflow-checklist`
- `/case-studies/ecommerce-support-response-times`
- `/case-studies/real-estate-operations-support`
- `/case-studies/saas-onboarding-workflow-case-study`
- `/case-studies/shopify-support-operations-case-study`
- `/free-workflow-assessment`
- `/terms`
- `/privacy`

## Permanent Redirects

These legacy live routes are preserved through permanent redirects:

- `/expertise` to `/services`
- `/work/:slug` to `/case-studies/:slug`
- `/faqs` to `/faq`
- `/customer-support` to `/customer-support-outsourcing`
- `/customer-support-virtual-assistant` to `/customer-support-outsourcing`
- `/ecommerce-operations-support` to `/ecommerce-virtual-assistant`
- `/real-estate-virtual-assistant-services` to `/real-estate-virtual-assistant`
- `/social-media-management-services` to `/social-media-virtual-assistant`
- `/social-media-support` to `/social-media-virtual-assistant`
- `/web-design-maintenance-services` to `/web-maintenance-support`
- `/web-maintenance-services` to `/web-maintenance-support`
- `/crm-admin-support` to `/business-operations-support`
- `/gohighlevel-virtual-assistant` to `/business-operations-support`
- `/web-design-maintenance` to `/web-maintenance-support`
- `/why-sagestone` to `/about`

## Removed Routes

No useful sitemap route was removed. API paths remain excluded from robots.

## SEO Notes

- Canonicals normalize to `https://www.sagestoneinc.com/`.
- Metadata and JSON-LD render on the server.
- `llms.txt` is preserved in `public/llms.txt`.
- Native sitemap and robots are generated from source data.
