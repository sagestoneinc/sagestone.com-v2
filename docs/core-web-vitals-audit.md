# Core Web Vitals Audit (Mobile-Focused)

## Scope

Audited key templates and pages in the repository:

- Homepage (`/`)
- Solutions hub (`/solutions`)
- Service detail pages (especially `/gohighlevel-virtual-assistant`)
- Blog index and article pages

## Baseline findings (repository/local)

- Site is a Vite SPA, so metadata and content are client-rendered.
- Hero and gallery images previously lacked explicit loading strategy and dimensions on key LCP candidates.
- Fonts were loaded through CSS `@import`, which can delay rendering.
- No centralized metadata/canonical system existed.
- Legacy service URLs were still part of navigation patterns.

## Main bottlenecks identified

1. Client-render-only route transitions can delay metadata visibility to some crawlers.
2. Potential LCP delays from large hero images without explicit fetch priority.
3. Font loading via CSS import pattern.
4. No built-in Lighthouse automation in repository scripts.

## Changes implemented

- Added explicit `loading="eager"`, `fetchPriority="high"`, and dimensions on key hero/LCP images.
- Set default image behavior to lazy + async decoding in `ImageWithFallback`.
- Moved font loading to preconnect + stylesheet links in `index.html`.
- Reduced SEO crawl ambiguity by adding centralized canonical + route metadata handling.
- Added sitemap + robots + route-level schema for better indexation readiness.

## Remaining concerns

- Because this is a client-rendered SPA, server-rendered metadata is not available in the current framework setup.
- Field CWV (CrUX/Search Console) cannot be validated locally.
- Third-party runtime impact in production still requires real-device field telemetry.

## Commands used

- `corepack pnpm install --ignore-scripts`
- `corepack pnpm run seo:generate`
- `corepack pnpm run seo:check`
- `corepack pnpm run build`

## Pages tested

- Route-level rendering verified for all canonical URLs in `docs/seo-route-inventory.md`.
- SEO validation script checks canonical/sitemap/indexability/internal-link assumptions.

## Local laboratory testing limitations

- No authenticated production analytics or CrUX data available in repository.
- Lighthouse mobile scores were not executed in CI in this repository by default.
- Local build bundle sizes do not guarantee production network/device performance outcomes.

## Required production verification

After deployment, validate via Search Console + CrUX:

- LCP, INP, CLS on mobile for homepage and top service URLs
- Crawl/indexation behavior for new canonical routes
- Redirect correctness for `/services` legacy paths
