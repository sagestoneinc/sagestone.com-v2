# Core Web Vitals Audit

Date: July 12, 2026

Scope: local repository audit for the Next.js rebuild. Field Core Web Vitals cannot be claimed until production receives enough CrUX or Search Console field data.

## Baseline Findings

- The previous live site relied on a client-rendered React mount for important body content.
- The rebuild uses Next.js App Router static generation so page copy, links, metadata, and JSON-LD are present in initial HTML.
- Main UI is server-rendered. Client JavaScript is limited to mobile navigation, CTA analytics events, and contact form state.
- Brand images are served with `next/image` and fixed intrinsic dimensions.
- Fonts use `next/font` with Manrope and Instrument Serif.
- Google Analytics is loaded through Next.js script handling after interaction.
- Calendly is linked externally instead of embedded, avoiding a heavy booking widget in the initial page load.

## Changes Implemented

- Kept hero media to a branded logo image with explicit width and height.
- Avoided heavy carousels, fake dashboards, canvas effects, and large client-only components.
- Added crawlable hub directories for Services, Solutions, Blog, and Case Studies instead of JavaScript-only discovery.
- Preserved `prefers-reduced-motion` support in global CSS.
- Kept CTA tracking in a minimal client component.
- Deferred GA through `afterInteractive` loading.
- Reserved stable layout space for cards, images, panels, and forms.

## Pages Tested Locally

- `/`
- `/services`
- `/solutions`
- `/customer-support-outsourcing`
- `/gohighlevel-virtual-assistant`
- `/blog`
- `/contact`

## Local Lighthouse Mobile Lab Result

Command:

```bash
npx --yes lighthouse http://localhost:3000/ --form-factor=mobile --only-categories=performance --output=json --output-path=/tmp/sagestone-lighthouse-home.json --chrome-flags="--headless --no-sandbox"
```

Homepage local lab result:

- Performance score: `0.79`
- First Contentful Paint: `3.4 s`
- Largest Contentful Paint: `4.2 s`
- Speed Index: `3.5 s`
- Total Blocking Time: `20 ms`
- Cumulative Layout Shift: `0`

Interpretation: the local lab run shows very low blocking time and no layout shift, while mobile LCP remains the main synthetic bottleneck to revisit after production deployment and real CDN/image behavior are available.

## Commands Used

- `npm run lint`
- `npm run typecheck`
- `npm test`
- `npm run seo:check`
- `npm run build`

## Remaining Concerns

- Production Lighthouse and WebPageTest runs should be completed after deployment.
- Field LCP, INP, and CLS must be verified in Search Console or CrUX after enough traffic is collected.
- Any future embedded scheduling, chat, cookie, or CRM script should be tested before production release.
- Image format conversion to AVIF/WebP can be revisited after production asset behavior is measured.

## Do Not Claim Yet

- Passing field Core Web Vitals.
- Search Console mobile report success.
- CrUX origin-level pass rate.
- Production third-party script cost beyond the local implementation review.
