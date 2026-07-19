---
target: Home (src/app/pages/Home.tsx)
total_score: 33
p0_count: 0
p1_count: 2
timestamp: 2026-07-19T09-03-20Z
slug: src-app-pages-home-tsx
---
# Critique — Home (src/app/pages/Home.tsx)

Method: ⚠️ DEGRADED: single-context (no sub-agent spawn; harness policy — subagents only on explicit user request)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Good hover/focus/accordion states; little async on a marketing page |
| 2 | Match System / Real World | 4 | Plain, warm, jargon-free language throughout |
| 3 | User Control and Freedom | 3 | Clear nav + dark-mode toggle; no traps |
| 4 | Consistency and Standards | 3 | Two button systems (brand pill vs shadcn rounded-md) |
| 5 | Error Prevention | 3 | n/a — no forms on this page |
| 6 | Recognition Rather Than Recall | 4 | Everything visible and labeled |
| 7 | Flexibility and Efficiency | 3 | Sticky sub-columns, theme toggle |
| 8 | Aesthetic and Minimalist Design | 4 | Genuinely restrained, editorial, uncluttered |
| 9 | Error Recovery | 3 | n/a on this page |
| 10 | Help and Documentation | 3 | FAQ preview is clear and on-point |
| **Total** | | **33/40** | **Good** |

## Anti-Patterns Verdict
Does not look AI-generated. Distinctive, restrained, on-brand editorial system. Detector: 0 real anti-patterns (48 hits were all `design-system-font-size` advisories — false positives against a deliberately terse DESIGN.md ramp). The one AI-era tell: an eyebrow kicker appears on ~9 of ~9 sections, and numbered markers appear in 3 — uniform scaffolding cadence.

## What's Working
- Hero: Fraunces display + sage accent on "built to grow", pill CTA + text link, quiet rule-divided 98% proof instead of a boxed KPI card. Confident and on-brand.
- Restraint: warm ivory ground, tonal depth, one-accent discipline. Reads premium through subtraction.
- Copy: plain, reassuring, specific ("embedded, not outsourced"). Matches the brand voice exactly.

## Priority Issues
- **[P1] Uniform reveal motion + no reduced-motion.** Every section uses the identical `fadeUp` (y:24, opacity, 0.7s). The uniform reflex flattens rhythm, and there is zero `prefers-reduced-motion` handling anywhere in src — PRODUCT.md commits to it. Fix: vary entrances to fit each section; add a reduced-motion crossfade/instant path. Command: /impeccable animate
- **[P1] Light-mode contrast failures (systemic).** Gold-as-text = 2.39:1, small sage links = 3.22:1 on ivory — both below WCAG AA. Recurs site-wide (gold 17×, sage 31×). Command: /impeccable colorize
- **[P2] Eyebrow on nearly every section.** ~9 uppercase-tracked kickers in a row become AI grammar (your own DESIGN.md "Deliberate Eyebrow Rule"). Fix: keep 3–4 deliberate ones, vary the rest. Command: /impeccable layout
- **[P2] Reveal gating risk.** `whileInView` + `initial opacity:0` means non-scrolling/headless renderers may never fire the reveal, leaving sections blank. Make the visible state the default and let motion enhance it. Command: /impeccable animate
- **[P2] Heading number concatenation.** "01Virtual Assistant Services", "01Discovery" read as one token to screen readers; the decorative ordinal should be aria-hidden. Command: /impeccable clarify

## Persona Red Flags
**Sam (accessibility-dependent):** gold ordinal numbers fail contrast; reveal animations have no reduced-motion alternative; heading numbers concatenate with titles in the a11y tree.
**Casey (distracted mobile):** hero image (aspect 4/5) is very tall on mobile and pushes the stats/proof far down; CTAs are correctly full-width and thumb-reachable.
**Jordan (first-timer):** strong — obvious primary action, plain labels, clear FAQ. No red flags.

## Minor Observations
- Footer "Privacy Policy" / "Terms of Service" link to `#` (dead).
- Two button implementations coexist (brand pill primitive vs shadcn `rounded-md`); marketing pages should standardize on the pill.
- A few hardcoded hex values (CTA radial gradient, button hover `bg-[#6d7867]`) bypass tokens.

## Questions to Consider
- What if only the hero and CTA carried an eyebrow, and interior sections led with the headline alone?
- Does every section need to animate in, or would motion mean more if it were rare?
- Is the gold meant to carry meaning (sequence) or is it purely decorative? That decides whether the contrast fix is "darken the gold" or "don't use gold as text".
