# Search Console Verification Guide

This repository cannot directly verify Search Console coverage without authenticated Google Search Console access.
Use this checklist after production deployment.

## 1) Property + sitemap verification

1. Open Search Console property for `https://www.sagestoneinc.com/`.
2. Go to **Sitemaps**.
3. Submit `https://www.sagestoneinc.com/sitemap.xml`.
4. Confirm sitemap status is **Success**.
5. Compare submitted URL count to indexed URL count.

## 2) Index coverage checks

Review **Indexing > Pages** and capture status counts for:

- Crawled — currently not indexed
- Discovered — currently not indexed
- Duplicate without user-selected canonical
- Alternate page with proper canonical
- Soft 404
- Redirect errors
- Server errors (5xx)
- Blocked by robots.txt
- Excluded by noindex
- HTTPS issues

## 3) Manual URL inspection checklist

Inspect each URL below in **URL Inspection** and confirm:

- Google-selected canonical equals declared canonical
- Crawl allowed
- Indexing allowed
- Last crawl is recent after deployment
- Structured data is detected where expected

### URLs to inspect

- https://www.sagestoneinc.com/
- https://www.sagestoneinc.com/solutions
- https://www.sagestoneinc.com/virtual-assistant-services
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
- https://www.sagestoneinc.com/industries
- https://www.sagestoneinc.com/why-philippines
- https://www.sagestoneinc.com/case-studies
- https://www.sagestoneinc.com/faq
- https://www.sagestoneinc.com/contact

## 4) Core Web Vitals (mobile)

1. Open **Experience > Core Web Vitals**.
2. Review **Mobile** report for LCP, INP, and CLS statuses.
3. Confirm critical URLs are not in poor-status groups.

## 5) Post-deploy request indexing workflow

For the homepage, `/solutions`, all service pages, and all blog URLs:

1. Open URL Inspection.
2. Click **Request Indexing** if page was recently updated.
3. Track re-crawl status within 3-14 days.

## 6) Redirect/canonical QA in Search Console

Verify legacy URLs are excluded and resolving correctly:

- `https://www.sagestoneinc.com/services`
- `https://www.sagestoneinc.com/services/virtual-assistant`
- `https://www.sagestoneinc.com/services/customer-support`

Expected: redirected to canonical service/solutions URLs.
