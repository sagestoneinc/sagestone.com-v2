# SageStone Next.js Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production Next.js App Router source site for SageStone Inc in the existing empty repository while preserving route equity, verified integrations, and server-rendered SEO.

**Architecture:** The app is content-driven from `src/lib/site.ts`, rendered by a static catch-all route plus focused client islands for mobile navigation, analytics events, and contact form state. Metadata, sitemap, robots, JSON-LD, and redirects are server-owned so important page content appears in the initial HTML.

**Tech Stack:** Next.js App Router, TypeScript, Tailwind CSS v4, React Server Components, `next/font`, native metadata, native `sitemap.ts`, native `robots.ts`, Node test runner with `tsx`.

## Global Constraints

- Work in `/Users/jeselcura/IONOS HiDrive/users/jesscura28/JeselCura-Macbook/Github/sagestoneinc.com`.
- Use the existing repository and `origin=https://github.com/sagestoneinc/sagestoneinc.com.git`.
- Preserve `G-6J7F2V82TP`, `https://calendly.com/d/cym9-q4q-pnm`, `hello@sagestoneinc.com`, and `+1 214-945-2234`.
- Do not use Vite, client-only metadata, obsolete meta keywords, fake dashboard visuals, unsupported metrics, or fabricated testimonials.
- Use the creative concept `Structured calm for growing teams`.
- Starting design settings: `DESIGN_VARIANCE: 8/10`, `MOTION_INTENSITY: 5/10`, `VISUAL_DENSITY: 4/10`.

---

### Task 1: Source Scaffold And Tests

**Files:**
- Modify: `package.json`
- Modify: `.gitignore`
- Create: `tests/site.test.ts`
- Create: `docs/superpowers/plans/2026-07-12-sagestone-nextjs-rebuild.md`

**Interfaces:**
- Produces: `getAllRoutePaths()`, `getPageByPath(path)`, `canonicalUrl(path)`, `sitemapEntries`, and `getRedirects()` expectations for the content layer.

- [x] **Step 1: Write failing route and SEO tests**
- [ ] **Step 2: Run test to verify it fails because `src/lib/site` is missing**
- [ ] **Step 3: Implement the content layer and page renderer**
- [ ] **Step 4: Run tests to verify content and route inventory pass**

### Task 2: Design System And Rendering

**Files:**
- Create: `src/lib/site.ts`
- Create: `src/lib/seo.ts`
- Create: `src/components/*.tsx`
- Replace: `src/app/layout.tsx`
- Replace: `src/app/[[...slug]]/page.tsx`
- Replace: `src/app/globals.css`

**Interfaces:**
- Consumes: route data from `src/lib/site.ts`.
- Produces: server-rendered pages, JSON-LD, metadata, header, footer, CTAs, and contact form.

- [ ] **Step 1: Implement data model with preserved routes and redirects**
- [ ] **Step 2: Implement server-rendered layout and page sections**
- [ ] **Step 3: Add minimal client islands for analytics, navigation, and forms**
- [ ] **Step 4: Validate with tests, lint, typecheck, and build**

### Task 3: SEO And Production Hardening

**Files:**
- Create: `src/app/sitemap.ts`
- Create: `src/app/robots.ts`
- Create: `src/app/not-found.tsx`
- Create: `src/app/api/contact/route.ts`
- Create: `public/llms.txt`
- Modify: `next.config.ts`

**Interfaces:**
- Consumes: route and redirect data from `src/lib/site.ts`.
- Produces: native sitemap, robots directives, API validation, permanent redirects, custom 404, and AI-readable site summary.

- [ ] **Step 1: Implement native sitemap and robots**
- [ ] **Step 2: Implement redirect rules**
- [ ] **Step 3: Implement accessible contact API response**
- [ ] **Step 4: Run final validation and push branch**
