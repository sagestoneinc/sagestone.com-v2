# Core Web Vitals Audit (Mobile)

## Scope

- Homepage: `/`
- Solutions hub: `/solutions`
- GoHighLevel service: `/gohighlevel-virtual-assistant`
- Blog index: `/blog`

## Baseline repository findings (pre-change)

- SPA default head included `noindex` robots meta.
- No canonical helper.
- No sitemap/robots implementation.
- Service links relied on legacy redirected URLs.
- Metadata and structured data were missing.
- Main images are loaded from external Unsplash URLs and not framework-optimized.

## Main bottlenecks observed from code inspection

- Client-rendered routing means metadata appears after hydration.
- Large remote images without explicit optimization pipeline (no Next/Image equivalent in this stack).
- Animation-heavy sections can add scripting and paint overhead on low-end mobile devices.
- No existing Lighthouse CI or performance budgets in repository.

## Changes implemented

- Added centralized metadata + canonical handling (`src/app/seo/SeoHead.tsx`, `src/app/seo/canonical.ts`).
- Added crawlability essentials: `public/robots.txt` and `public/sitemap.xml`.
- Reduced redirect reliance by linking directly to canonical service URLs.
- Added structured data system and per-page schemas.
- Added route-level noindex handling for low-value utility pages.

## Remaining concerns

- External Unsplash image payload still likely dominates LCP on image-heavy sections.
- Motion-heavy homepage sections may increase TBT/INP on slower devices.
- Because this is client-rendered, metadata is not server-rendered at first byte.

## Commands used

- `npm install`
- `npm run seo:check`
- `npm run build`

## Limitations

- Local repository environment does not provide CrUX field data.
- No authenticated Search Console access from this repository context.
- No deployed production preview with controlled mobile throttling was available in-task.

## Production verification required

- Validate mobile CWV in Search Console and CrUX.
- Run production Lighthouse mobile tests on live URLs after deploy.
- Confirm final LCP element stability and CLS in real-user conditions.

