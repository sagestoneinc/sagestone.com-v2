# SageStone Inc — Full SEO Audit

**Site:** https://www.sagestoneinc.com/
**Audited:** 2026-07-12
**Business type:** B2B Services — Offshore staffing / outsourcing (BPO), Philippines-based remote talent
**Stack:** React (Vite) SPA, `react-router` BrowserRouter, hosted on Vercel
**Overall SEO Health Score: 23 / 100** 🔴 (Critical — the site is currently non-indexable)

---

## Executive Summary

SageStone has a clean, well-designed marketing site with clear positioning (dedicated Filipino remote talent / VA + support services for U.S. founders and SMBs). **But from a search-engine standpoint it is effectively invisible and cannot rank for anything.** Three structural problems dominate everything else:

1. **Site-wide `noindex, nofollow`** — Google is explicitly told not to index a single page.
2. **Client-side-rendered SPA with no prerendering/SSR** — crawlers receive an empty `<div id="root">`; all content is painted by JavaScript.
3. **No per-page metadata** — every route (`/`, `/about`, `/services`, etc.) serves the *same* title (`SageStone Inc`) and the *same* meta description, which is a leftover template about "task management and collaboration" that has nothing to do with the business.

On top of that: no `robots.txt`, no `sitemap.xml`, no structured data, placeholder contact details, and fabricated-looking testimonials/case studies. The good news: the content foundation and design are solid, so once the technical blockers are removed and per-page SEO is added, this site can rank quickly for the target service + "Philippines VA / outsourcing" keyword space.

### Top 5 Critical Issues
1. `<meta name="robots" content="noindex, nofollow">` is hard-coded in `index.html` → **removes the entire site from Google.**
2. SPA renders content only in the browser → crawlers/AI bots see a near-empty page.
3. Identical, wrong `<title>` and meta description on every page (template leftover).
4. No `robots.txt` and no XML sitemap (both return 404).
5. Zero structured data (no Organization, Service, FAQPage, or Breadcrumb schema).

### Top 5 Quick Wins
1. Delete the `noindex` tag (1-line change, unblocks everything).
2. Fix the homepage title + meta description to match the real business.
3. Add `robots.txt` + a static `sitemap.xml` with the 9 known routes.
4. Add per-page `<title>`/`<meta>` via `react-helmet-async` (or move to SSG).
5. Add Organization + FAQPage JSON-LD.

---

## 1. Technical SEO — Score 10/100 🔴

| Check | Status | Detail |
|---|---|---|
| Indexability | 🔴 Fail | `noindex, nofollow` in `index.html` applies to all routes. Deployed JS confirms no page-level override — nothing is indexable. |
| Rendering | 🔴 Fail | Pure CSR (Vite + BrowserRouter). Initial HTML = `<div id="root"></div>` (~798 bytes). Googlebot can render JS but with delay/budget risk; most AI crawlers and social scrapers cannot. |
| robots.txt | 🔴 Missing | `https://www.sagestoneinc.com/robots.txt` → 404 (NOT_FOUND). |
| XML sitemap | 🔴 Missing | `/sitemap.xml` → 404. No sitemap submitted. |
| Canonical tags | 🔴 Missing | No `<link rel="canonical">` anywhere. |
| Routing / soft-404 | 🟠 Weak | Catch-all `<Route path="*" element={<Home />}>` renders Home for any bad URL with a 200 status → soft-404 risk (duplicate content, wrong page indexed). |
| HTTPS / HSTS | ✅ Pass | HTTP/2, valid TLS, `strict-transport-security` present. |
| Hosting/CDN | ✅ Pass | Vercel edge, `x-vercel-cache: HIT`. Fast infrastructure. |
| WWW/apex consistency | ⚠️ Verify | Confirm apex → www (or vice-versa) 301 and pick one canonical host. |

**Root cause:** The whole SEO failure chain starts here. Even perfect content can't rank while `noindex` is present and content is JS-only.

## 2. Content Quality & E-E-A-T — Score 40/100 🟠

- **Positioning & copy:** Strong. Clear service segmentation (6 services), outcome-driven language, calm premium tone. Good raw material.
- **Thin / missing pages:** No blog or "insights" section → no top-of-funnel content to capture informational queries. The original site plan called for a blog; it was never built.
- **Fabricated / placeholder proof (E-E-A-T risk):**
  - Testimonials use invented names/companies ("Elena Marsh, Northline Studio"; "David Okafor, Meridian Commerce").
  - Case studies (`northline-studio`, `meridian-commerce`, `cedar-co`) read as fictional.
  - Stats ("98% retention", "150+ teams supported") are unverifiable.
  - Service FAQs are generated placeholders (`faqPlaceholders()`).
  These undermine trust with both users and Google's E-E-A-T evaluation, and risk looking deceptive. Replace with real (even if few) clients, or reframe as illustrative.
- **No author/company authority signals:** No real team, no "About" credibility (founding, leadership, PH office), no trust badges, no real address.

## 3. On-Page SEO — Score 20/100 🔴

- **Titles:** Every page = `SageStone Inc`. No keywords, no differentiation, no template (e.g. `Service | SageStone`).
- **Meta descriptions:** Every page = the same generic "task management and collaboration" string — **mismatched to the business entirely.**
- **Headings:** H1/H2 structure exists per page (good), but H1 copy isn't keyword-aligned (e.g. hero H1 is brand/emotion-led, not "Virtual Assistant Services from the Philippines").
- **URLs:** Clean, readable slugs (`/services/virtual-assistant`, `/why-philippines`) — ✅ good foundation.
- **Internal linking:** Header/Footer nav exists, but no contextual body links between services ↔ industries ↔ why-philippines ↔ case studies. No blog to hub-link from.
- **Open Graph / Twitter cards:** None → link shares on LinkedIn/X/Slack show no preview.

## 4. Schema / Structured Data — Score 0/100 🔴

No JSON-LD at all. Missing, in priority order:
- `Organization` (+ `logo`, `sameAs`, `contactPoint`)
- `WebSite` (+ `SearchAction` if search added)
- `Service` for each of the 6 service pages
- `FAQPage` on `/faq` and each service detail (FAQ rich results = high CTR)
- `BreadcrumbList`
- `Review`/`AggregateRating` — only once real reviews exist.

## 5. Performance (Core Web Vitals) — Score ~55/100 🟠

*Lab estimate — field data unavailable (site is noindexed / low traffic).*
- Vite production bundle + Vercel CDN = fast TTFB. ✅
- **CSR penalty:** Content paints after JS downloads/executes → slower LCP and delayed interactivity vs. SSR/SSG.
- **Hotlinked Unsplash images:** All imagery loads from `images.unsplash.com` at 1080px — external origin, no `width/height` (CLS risk), no `loading="lazy"` control, no next-gen format/self-hosting. Hero image is likely the LCP element and is remote.
- Heavy dependency surface (MUI **and** Radix **and** Emotion **and** Tailwind + `motion`, `embla`, `canvas-confetti`) → JS weight worth auditing/tree-shaking.

## 6. Images — Score 30/100 🟠

- Sourced via Unsplash hotlinks (licensing + reliability + performance risk). Self-host optimized WebP/AVIF instead.
- Alt text: `ImageWithFallback` wrapper is used, but confirm every image passes meaningful, keyword-aware `alt` (not empty/decorative for content images).
- No explicit dimensions → layout shift.

## 7. AI Search Readiness (GEO) — Score 10/100 🔴

- `noindex` + CSR means ChatGPT, Perplexity, Google AI Overviews, and Claude's web tools get little/no crawlable content.
- No `llms.txt`, no structured data, no citable Q&A passages surfaced in raw HTML.
- FAQ content (well-suited to AI citation) is JS-only and placeholder.

## 8. Local / Entity Signals — Score 25/100 🟠

- **Placeholder NAP (fix before launch):**
  - Email: `hello@sagestone.co` — **wrong domain** (site is `sagestoneinc.com`; also `.co` ≠ `.com`).
  - Phone: `+1 (555) 018-4420` — a **555 placeholder** number.
  - Address: "Remote-first · Global" — no verifiable location.
- Privacy Policy / Terms links point to `#` (dead) → trust + legal gap.
- No Google Business Profile linkage / `sameAs` social profiles.

---

## What's Working (keep it)
- Clean, premium design with light/dark mode.
- Clear service taxonomy and readable URL slugs.
- Fast Vercel hosting + HTTPS/HSTS.
- Genuinely good positioning and copy to build page-level SEO on top of.

## The Core Problem in One Sentence
The site is a beautifully-built brochure that has hung a "do not index" sign on the door, drawn the curtains (CSR), and put the wrong nameplate on every room (duplicate wrong meta) — fixing those three things is 80% of the SEO win.
