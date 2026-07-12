# Search Console Verification Guide

This repository implementation prepares technical SEO for indexation, but Search Console status cannot be verified locally without authenticated Google Search Console access.

## Post-deployment verification workflow

1. Open Google Search Console for `https://www.sagestoneinc.com` property.
2. Submit sitemap: `https://www.sagestoneinc.com/sitemap.xml`.
3. Confirm sitemap status is **Success**.
4. Compare submitted vs indexed URL count.
5. Review **Page indexing** report for:
   - Crawled — currently not indexed
   - Discovered — currently not indexed
   - Duplicate without user-selected canonical
   - Alternate page with proper canonical
   - Soft 404
   - Redirect errors
   - Server errors
   - Blocked by robots.txt
   - Excluded by noindex
6. Review **HTTPS** report for certificate/indexation issues.
7. Review **Core Web Vitals (mobile)** report for field data.
8. Run URL Inspection on each primary route and request indexing where needed.

## Exact URL inspection checklist

Inspect each URL manually in Search Console URL Inspection:

- https://www.sagestoneinc.com/
- https://www.sagestoneinc.com/solutions
- https://www.sagestoneinc.com/business-operations-support
- https://www.sagestoneinc.com/ecommerce-virtual-assistant
- https://www.sagestoneinc.com/gohighlevel-virtual-assistant
- https://www.sagestoneinc.com/web-maintenance-support
- https://www.sagestoneinc.com/customer-support-outsourcing
- https://www.sagestoneinc.com/about
- https://www.sagestoneinc.com/experience
- https://www.sagestoneinc.com/blog
- https://www.sagestoneinc.com/blog/how-to-hire-a-virtual-assistant
- https://www.sagestoneinc.com/blog/what-does-an-ecommerce-virtual-assistant-do
- https://www.sagestoneinc.com/blog/customer-support-outsourcing-best-practices

## What to verify per URL

- URL is indexable (for indexable routes) and not blocked by robots.
- User-declared canonical equals Google-selected canonical.
- Canonical uses `https://www.sagestoneinc.com`.
- Live test returns rendered metadata and structured data.
- If status is excluded unexpectedly, fix cause then request indexing again.

## Request indexing workflow

1. Open URL Inspection for the target URL.
2. Click **Test Live URL**.
3. If test passes, click **Request Indexing**.
4. Track coverage changes over the next crawls.
5. Re-check sitemap and indexing report after deployment window.

