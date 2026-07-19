---
name: SageStone
description: Calm, trustworthy, grounded brand system for dedicated Filipino support talent.
colors:
  sage: "#7E8A77"
  sage-deep: "#6D7867"
  gold: "#B49A6C"
  charcoal: "#222622"
  slate-olive: "#5E655C"
  ivory: "#F5F1E8"
  soft-stone: "#E8E1D6"
  cloud: "#FAF8F4"
  mist: "#DDE2DA"
  pebble: "#CFC7BB"
  pine: "#171B18"
  chalk: "#EEE9E0"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.15rem, 5vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontWeight: 600
    fontSize: "1.5rem"
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    fontSize: "1.1rem"
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 500
    fontSize: "0.72rem"
    lineHeight: 1.4
    letterSpacing: "0.24em"
rounded:
  md: "10px"
  pill: "9999px"
spacing:
  gutter: "24px"
  section: "80px"
  section-lg: "112px"
components:
  button-primary:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.cloud}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.sage-deep}"
    textColor: "{colors.cloud}"
    rounded: "{rounded.pill}"
  button-secondary:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.pill}"
    padding: "10px 20px"
  card:
    backgroundColor: "{colors.cloud}"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.md}"
    padding: "24px"
  input:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.charcoal}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
---

# Design System: SageStone

## 1. Overview

**Creative North Star: "The Quiet Bedrock"**

SageStone is the calm opposite of transactional outsourcing, and the interface has to feel that way before a single word is read. The system is built on stone and sage: warm ivory light, soft neutral surfaces, deep charcoal ink, and a single muted-gold accent used like a struck line in a ledger. It is grounded and unshakeable — the visual equivalent of a safe pair of hands. Fraunces carries the headlines with a quiet editorial warmth; Inter does the honest, legible work of the body. Nothing shouts. Reassurance is the job, and reassurance is delivered through restraint.

This system explicitly rejects the aesthetics of the category it competes against. It is not cheap, high-volume BPO — no crowded, price-war, call-center energy. It is not a generic SaaS template — no purple gradients, hero-metric clichés, or endless identical icon-heading-text card grids. It is not stiff corporate consulting — no jargon walls or rigid enterprise stock photography. And it is not a loud, gimmicky startup — no neon, no aggressive urgency, no emoji spam. Warmth here is carried by typography, natural-light imagery, and generous space, never by a warm-tinted near-white body posing as "editorial."

Depth is tonal, not dramatic. Surfaces are mostly flat, layered by subtle shifts in the stone-and-ivory neutral ramp, with shadow used only as a whisper of lift on interactive elements. The result should read, at a glance, as premium through subtraction.

**Key Characteristics:**
- Warm-neutral stone palette with one muted-gold accent, held to a whisper
- Fraunces (display) + Inter (body): editorial warmth over honest legibility
- Flat, tonally-layered surfaces; shadow only as a response to state
- Soft-rounded, restrained components; pill-shaped primary actions
- Calm density — generous whitespace, no visual crowding

## 2. Colors

A warm stone-and-sage neutral field, grounded by deep charcoal ink, lifted by a single muted-gold accent.

### Primary
- **Stone Sage** (`#7E8A77`): The brand's signature. Primary buttons, links, focus rings, and quiet moments of brand color. A grounded, greyed green — nature seen through calm, not a vivid "eco" green.
- **Sage Deep** (`#6D7867`): The pressed/hover state of Stone Sage. Used only as the darker response to interaction, never as a resting fill.

### Secondary
- **Muted Gold** (`#B49A6C`): The single accent. Hairline dividers under eyebrows, small marks of emphasis, and the occasional detail. Its rarity is its power — this is not a second brand color.

### Neutral
- **Deep Charcoal** (`#222622`): Primary text on light surfaces. The grounded, near-black ink.
- **Slate Olive** (`#5E655C`): Secondary text, captions, supporting copy. Watch contrast at small sizes.
- **Warm Ivory** (`#F5F1E8`): The default light background — the page's calm.
- **Soft Stone** (`#E8E1D6`): Supporting surfaces, secondary fills, muted backgrounds.
- **Cloud** (`#FAF8F4`): The lightest neutral — cards and raised surfaces.
- **Mist** (`#DDE2DA`) / **Pebble** (`#CFC7BB`): Neutral supports, borders, dividers, switch tracks.
- **Midnight Pine** (`#171B18`): The dark-mode background — deep, near-black green-charcoal.
- **Soft Chalk** (`#EEE9E0`): Primary text in dark mode.

### Named Rules
**The One Gold Rule.** Muted Gold appears on ≤10% of any screen — a hairline, a mark, a single detail. It is never a fill, never a gradient, never a second voice. Its scarcity is the entire point.

**The Grounded Green Rule.** Stone Sage is greyed and calm by design. Never brighten or saturate it toward a "fresh/eco" green; that reads as wellness startup, not bedrock.

## 3. Typography

**Display Font:** Fraunces (with Georgia, serif fallback)
**Body Font:** Inter (with ui-sans-serif, system-ui fallback)

**Character:** A serif-plus-sans pairing on a true contrast axis. Fraunces brings soft, optical, editorial warmth to headlines — confident but never ornamental. Inter keeps the body honest, quiet, and effortlessly legible. The contrast between them is the whole personality: crafted where it counts, plainspoken everywhere else.

### Hierarchy
- **Display** (Fraunces 600, `clamp(2.15rem → 3rem)`, line-height 1.08, tracking -0.02em): Section and page headlines. Balanced line lengths (`text-wrap: balance`).
- **Headline** (Fraunces 600, ~1.5rem, line-height 1.2, tracking -0.01em): Card titles, sub-section heads.
- **Title** (Fraunces 600, ~1.25rem): Smaller headings and lead-ins.
- **Body** (Inter 400, ~1.1rem, line-height 1.65): Primary reading copy. Cap measure at 65–75ch. In Slate Olive for secondary passages, Charcoal for primary.
- **Label / Eyebrow** (Inter 500, 0.72rem, tracking 0.24em, uppercase): The brand's kicker — paired with a short gold hairline. A deliberate system element, not scaffolding.

### Named Rules
**The Deliberate Eyebrow Rule.** The uppercase tracked eyebrow with its gold hairline is a chosen brand signature — but it earns its place per section, not by reflex on every one. Vary the cadence; an eyebrow on every heading becomes AI grammar.

**The Serif-Where-It-Counts Rule.** Fraunces is for headings and rare display moments only. Body copy is always Inter. Never set long-form paragraphs in the serif.

## 4. Elevation

Flat by default, layered by tone. Depth comes from the stone-and-ivory neutral ramp — Cloud lifting off Ivory lifting off Soft Stone — not from heavy shadows. Shadow is a whisper, and it is a response to state, never a resting decoration. Primary buttons carry a `shadow-sm` at rest that grows to `shadow-md` on hover; cards stay flat unless interaction warrants a lift.

### Shadow Vocabulary
- **Rest lift** (`box-shadow: 0 1px 2px rgba(34,38,34,0.06)`): The resting `shadow-sm` on primary buttons and select raised elements.
- **Hover lift** (`box-shadow: 0 4px 12px rgba(34,38,34,0.10)`): The `shadow-md` response on hover for interactive surfaces.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. If a shadow is doing decorative work rather than signaling state, delete it and separate the surfaces with tone instead.

## 5. Components

Refined and restrained: soft-rounded, low-shadow, understated. Quality through subtraction.

### Buttons
- **Shape:** Fully rounded pill (`border-radius: 9999px`). This is the brand's button silhouette.
- **Primary:** Stone Sage fill, Cloud text (`bg-sage text-cloud`), `shadow-sm` at rest. Sizes: md `padding: 10px 20px` (0.95rem), lg `padding: 14px 28px` (1rem).
- **Hover / Focus:** Hover deepens to Sage Deep (`#6D7867`) and lifts to `shadow-md`, 200ms transition. Focus shows a 2px sage ring with a background-colored offset (`focus-visible:ring-2 ring-sage ring-offset-2`).
- **Secondary:** Ghost/outline — 1px charcoal-20% border on transparent; inverts to charcoal fill with cloud text on hover.
- **Ghost:** No fill; charcoal text shifting to sage on hover.

> Note: `src/app/components/ui/button.tsx` (shadcn) uses `rounded-md`, but the brand button in `ui-brand/primitives.tsx` is the canonical marketing surface — pill-shaped. Prefer the brand button on marketing pages.

### Cards / Containers
- **Corner Style:** Gently curved (`10px`, `--radius: 0.625rem`).
- **Background:** Cloud (`#FAF8F4`) on the Ivory page; Soft Stone for muted variants.
- **Shadow Strategy:** Flat at rest (see Elevation). Border-led separation preferred over shadow.
- **Border:** Hairline at `rgba(34,38,34,0.12)` when definition is needed.
- **Internal Padding:** 24px (`gutter`).

### Inputs / Fields
- **Style:** White input background on the warm page, 10px radius, hairline border.
- **Focus:** Sage focus ring (3px, `ring-ring/50`), no heavy glow.
- **Error:** Destructive `#a83a3a` border and ring; error text meets AA contrast.

### Navigation
- **Style:** Fraunces wordmark + Bedrock monogram (sage) at left; Inter links in charcoal. Links shift to sage on hover/active. Primary CTA ("Book a discovery call") rendered as the pill primary button.
- **Mobile:** Collapses to a sheet/drawer; full keyboard operability and visible focus required.

### Layout Primitives
- **Container:** `max-width: 1200px`, `padding: 0 24px` (40px on md+). The measure of every page.
- **Section:** Vertical rhythm of `80px` (mobile) → `112px` (md+). Vary spacing between sections for rhythm; do not use one uniform gap everywhere.

## 6. Do's and Don'ts

### Do:
- **Do** keep Warm Ivory (`#F5F1E8`) as the page ground and let Cloud/Soft Stone layer depth tonally.
- **Do** hold Muted Gold to ≤10% of any screen — hairlines and marks only (The One Gold Rule).
- **Do** set headlines in Fraunces and body in Inter; cap body measure at 65–75ch.
- **Do** use the pill primary button in Stone Sage → Sage Deep on hover for the "Book a discovery call" CTA.
- **Do** keep surfaces flat at rest; use shadow only as a state response (The Flat-By-Default Rule).
- **Do** meet WCAG 2.1 AA — verify Slate Olive and Muted Gold on Ivory hit ≥4.5:1 for body text; bump toward Charcoal if close.
- **Do** provide a `prefers-reduced-motion` alternative for every `motion`-driven animation.
- **Do** vary section spacing and eyebrow cadence for rhythm.

### Don't:
- **Don't** ship the cheap, high-volume BPO look — no crowded, price-war, call-center layouts.
- **Don't** ship generic SaaS clichés — no purple gradients, no hero-metric template (big number + gradient accent), no endless identical icon-heading-text card grids.
- **Don't** ship stiff corporate consulting — no jargon walls, no rigid enterprise stock photography.
- **Don't** ship loud, gimmicky startup energy — no neon, no aggressive urgency, no emoji spam.
- **Don't** brighten or saturate Stone Sage toward a fresh/eco green (The Grounded Green Rule).
- **Don't** put the tracked eyebrow on every single section by reflex — it's a chosen signature, not scaffolding.
- **Don't** use `border-left`/`border-right` > 1px as a colored accent stripe on cards or callouts.
- **Don't** use gradient text (`background-clip: text`) or decorative glassmorphism.
- **Don't** set long-form body copy in Fraunces.
