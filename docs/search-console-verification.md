# Search Console Verification Guide

This repository cannot verify authenticated Google Search Console data locally. Use this checklist after the `redesign/nextjs-rebuild` branch is deployed to production at `https://www.sagestoneinc.com`.

## Submit And Inspect

1. Open Google Search Console for `https://www.sagestoneinc.com/`.
2. Submit `https://www.sagestoneinc.com/sitemap.xml`.
3. Confirm the submitted sitemap is fetched successfully.
4. Compare submitted URLs against indexed URLs.
5. Open Page indexing and review:
   - Crawled - currently not indexed
   - Discovered - currently not indexed
   - Duplicate without user-selected canonical
   - Alternate page with proper canonical
   - Soft 404
   - Redirect errors
   - Server errors
   - Blocked by robots.txt
   - Excluded by noindex
6. Confirm HTTPS status for all inspected URLs.
7. Review Core Web Vitals mobile and desktop reports.
8. Use URL Inspection on the primary pages below.
9. Request indexing for updated canonical pages after deployment.

## Primary URL Inspection Checklist

- `https://www.sagestoneinc.com/`
- `https://www.sagestoneinc.com/services/`
- `https://www.sagestoneinc.com/solutions/`
- `https://www.sagestoneinc.com/virtual-assistant-services/`
- `https://www.sagestoneinc.com/customer-support-outsourcing/`
- `https://www.sagestoneinc.com/ecommerce-virtual-assistant/`
- `https://www.sagestoneinc.com/gohighlevel-virtual-assistant/`
- `https://www.sagestoneinc.com/business-operations-support/`
- `https://www.sagestoneinc.com/web-maintenance-support/`
- `https://www.sagestoneinc.com/about/`
- `https://www.sagestoneinc.com/experience/`
- `https://www.sagestoneinc.com/blog/`
- `https://www.sagestoneinc.com/blog/how-to-hire-a-virtual-assistant/`
- `https://www.sagestoneinc.com/blog/what-does-an-ecommerce-virtual-assistant-do/`
- `https://www.sagestoneinc.com/blog/customer-support-outsourcing-checklist/`
- `https://www.sagestoneinc.com/case-studies/`
- `https://www.sagestoneinc.com/contact/`
- `https://www.sagestoneinc.com/free-workflow-assessment/`
- `https://www.sagestoneinc.com/privacy/`
- `https://www.sagestoneinc.com/terms/`

For the full sitemap inspection set, use every route listed in `docs/seo-route-inventory.md`.

## Expected Signals

- User-declared canonical should match the inspected URL.
- Google-selected canonical should match the user-declared canonical for primary pages.
- Page should be indexable unless Google has not crawled it yet.
- Rendered HTML should include the H1, main page copy, canonical link, metadata, internal links, and JSON-LD.
- Sitemap entry should use the HTTPS `www` canonical with a trailing slash.

## Manual Data Required

- Search Console property access.
- Production deployment confirmation.
- Field Core Web Vitals data from CrUX or Search Console.
- Manual confirmation of any business claims not already present in repository content.
