import { Link } from "react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Container, Section, SectionHeader, Eyebrow, Button, Card } from "../components/ui-brand/primitives";
import { TestimonialCard } from "../components/ui-brand/components";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { KUHA_URL } from "../content/seo";

const serif = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

/* ---------- Content ----------
 * Everything marked TODO(kuha) needs real material before this goes live.
 * Images live in public/case-studies/kuha/.
 */

type Shot = { src?: string; alt: string; caption?: string; portrait?: boolean };

// TODO(kuha): Kuha logo, e.g. "/case-studies/kuha/kuha-logo.svg".
const kuhaLogo: Shot = { src: undefined, alt: "Kuha logo" };

const hero: Shot = {
  src: "/case-studies/kuha/kuha-live-slideshow.webp",
  alt: "Kuha live slideshow on a venue screen at a wedding reception, showing guest wishes beside a Scan to join QR code",
};

// What guests see on their phones after scanning the QR code.
const productShots: Shot[] = [
  {
    src: "/case-studies/kuha/kuha-guest-album.webp",
    alt: "Kuha guest album on a phone with Add Photos and live Gallery options for a wedding",
    caption: "Guest album: upload photos and browse every moment.",
    portrait: true,
  },
  {
    src: "/case-studies/kuha/kuha-rsvp-form.webp",
    alt: "Kuha RSVP form on a phone asking for name, Philippine mobile number, email, and attendance",
    caption: "Built-in RSVP for hosts.",
    portrait: true,
  },
];

// TODO(kuha): screenshots of our own deliverables. Each renders once `src` is set.
const workShots: Shot[] = [
  {
    src: undefined,
    alt: "Grid of Kuha Instagram carousel and reel templates from the 12-week social content calendar",
    caption: "Branded carousel and reel templates from the 12-week calendar.",
  },
  {
    src: undefined,
    alt: "Kuha landing page showing peso pricing tiers for Filipino weddings, debuts, and birthdays",
    caption: "Landing page copy and peso pricing tiers.",
  },
  {
    src: undefined,
    alt: "Kuha blog article drafted and published through the custom MCP server content workflow",
    caption: "Blog post drafted and published through the MCP workflow.",
  },
];

const scope = ["Go-to-market", "Content operations", "AI workflows", "SEO & growth", "Sales enablement"];

const workstreams = [
  {
    title: "Go-to-market strategy",
    body: "We tested market viability before building anything else, then shaped the offer around how Filipinos actually celebrate.",
    points: [
      "Market viability and competitor review against global photo-sharing brands",
      "Positioning for Filipino events: weddings, debuts, christenings, reunions",
      "Peso pricing tiers built for a price-sensitive market",
    ],
  },
  {
    title: "Content operations",
    body: "We built a content engine a founder-led team could run without a marketing hire.",
    points: [
      "12-week social calendar with roughly 80 planned posts",
      "Branded asset library for consistent visuals across channels",
      "Reusable reel and carousel templates",
    ],
  },
  {
    title: "AI-assisted workflows",
    body: "We connected the content pipeline to AI so publishing takes minutes, not an afternoon.",
    points: [
      "Custom MCP (Model Context Protocol) server for the Kuha blog",
      "Blog posts drafted, reviewed, and published through AI assistants",
      "Writing guidelines encoded so drafts stay on-brand",
    ],
  },
  {
    title: "SEO & growth",
    body: "We laid the search foundation so Kuha can be found when people plan their events.",
    points: [
      "Technical SEO audit with a prioritized fix list",
      "Keyword strategy for Filipino event and photo-sharing searches",
      "Backlink plan targeting event suppliers and local publications",
    ],
  },
  {
    title: "Sales enablement",
    body: "We gave the team the materials to sell directly to couples, hosts, and event suppliers.",
    points: [
      "Supplier one-pager for coordinators, venues, and photographers",
      "DM outreach sequences for social selling",
      "Landing page copy focused on conversion",
    ],
  },
];

// Source: Kuha store dashboard, all-time (24 Aug 2025 – 24 Sep 2026):
// 34 paid orders, 0 refunds. Keep every claim here traceable to real data.
const RESULTS_PERIOD = "August 2025 to September 2026";
const results = [
  { value: "34", label: "Celebrations powered by Kuha" },
  { value: "100%", label: "Refund-free: not a single refund requested" },
  { value: "0", label: "Apps or accounts guests need to share photos" },
];

// Feedback from Kuha hosts and guests.
const testimonials = [
  {
    quote:
      "Kuha made collecting our wedding photos so easy. Our guests just scanned the QR code and uploaded their photos—no app, no account, no complicated instructions. We ended up with so many candid moments we would have otherwise missed.",
    name: "Wedding Host",
    role: "Kuha customer",
  },
  {
    quote:
      "The live slideshow was such a fun addition to our event. Seeing everyone's photos appear throughout the celebration made the experience more interactive, and our guests really enjoyed it.",
    name: "Wedding Host",
    role: "Kuha customer",
  },
  {
    quote:
      "Ang dali gamitin ng Kuha! We just shared the QR code and our guests started uploading right away. Hindi na namin kailangan mangulit after the event para makahingi ng pictures. Everything was already there.",
    name: "Event Host",
    role: "Kuha customer",
  },
];

/* ---------- Image slot (lazy by default) ---------- */
function Shot({ shot, className = "", eager = false }: { shot: Shot; className?: string; eager?: boolean }) {
  if (!shot.src) return null;
  return (
    <figure className={className}>
      <div
        className={`overflow-hidden border border-border bg-cloud dark:bg-card ${
          shot.portrait ? "aspect-[9/16] rounded-[1.75rem] shadow-[0_18px_40px_-24px_rgba(34,38,34,0.45)]" : "aspect-[16/10] rounded-2xl"
        }`}
      >
        <ImageWithFallback
          src={shot.src}
          alt={shot.alt}
          loading={eager ? "eager" : "lazy"}
          className="h-full w-full object-cover"
        />
      </div>
      {shot.caption && (
        <figcaption className="mt-3 text-[0.9rem] leading-snug text-slate-olive dark:text-muted-foreground">{shot.caption}</figcaption>
      )}
    </figure>
  );
}

export function KuhaCaseStudy() {
  return (
    <article>
      {/* ---------- Hero ---------- */}
      <Section className="pt-40 pb-14 md:pt-48 md:pb-20">
        <Container>
          <Link
            to="/case-studies"
            className="mb-10 inline-flex items-center gap-2 text-[0.9rem] text-slate-olive transition-colors hover:text-sage dark:text-muted-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> All case studies
          </Link>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <Eyebrow className="mb-7">Case Study · Event Tech · Philippines</Eyebrow>
              <h1 className="text-[2.4rem] leading-[1.04] tracking-[-0.03em] text-charcoal dark:text-chalk sm:text-[2.9rem] md:text-[3.6rem]">
                Case Study: Launching Kuha, a QR Event Photo Platform
              </h1>
              <p className="mt-8 max-w-xl text-[1.15rem] leading-relaxed text-slate-olive dark:text-muted-foreground md:text-[1.2rem]">
                How Sage Stone built the operations, content, and growth systems behind{" "}
                <a
                  href={KUHA_URL}
                  className="text-sage-ink underline decoration-gold/60 underline-offset-4 transition-colors hover:text-sage"
                >
                  Kuha, a QR event photo sharing app in the Philippines
                </a>
                . Guests scan a QR code at the event and every photo lands in one shared gallery. We handled
                everything around the product: strategy, content, AI publishing, search, and sales.
              </p>
              <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href={KUHA_URL} size="lg" className="w-full sm:w-auto">
                  See Kuha live <ArrowUpRight className="h-4 w-4" />
                </Button>
                <Button to="/contact" size="lg" variant="secondary" className="w-full sm:w-auto">
                  Book a call
                </Button>
              </div>
            </div>
            <Shot shot={hero} eager />
          </div>

          {/* Engagement facts */}
          <dl className="mt-16 grid gap-8 border-t border-border pt-10 sm:grid-cols-3">
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-gold-ink">Client</dt>
              <dd className="mt-3 flex items-center gap-3 text-[1.05rem] text-charcoal dark:text-chalk">
                {kuhaLogo.src ? (
                  <img src={kuhaLogo.src} alt={kuhaLogo.alt} loading="lazy" decoding="async" className="h-7 w-auto" />
                ) : null}
                Kuha (Philippine event-tech startup)
              </dd>
            </div>
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-gold-ink">Market</dt>
              <dd className="mt-3 text-[1.05rem] text-charcoal dark:text-chalk">Philippines, consumer events</dd>
            </div>
            <div>
              <dt className="text-[0.72rem] uppercase tracking-[0.2em] text-gold-ink">Scope</dt>
              <dd className="mt-3 text-[1.05rem] text-charcoal dark:text-chalk">{scope.join(" · ")}</dd>
            </div>
          </dl>
        </Container>
      </Section>

      {/* ---------- Challenge ---------- */}
      <Section className="bg-cloud py-24 dark:bg-card md:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeader eyebrow="Context" title="The Challenge" />
            <div className="flex flex-col gap-6 text-[1.1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
              <p>
                Kuha needed to launch a new consumer app in a price-sensitive market, without a marketing team,
                while competing for attention with global photo-sharing brands that have far larger budgets.
              </p>
              <p>
                The product worked. What was missing was the layer around it: a clear position for Filipino
                events, pricing people would say yes to, a steady stream of content, a way to be found in search,
                and materials the founders could use to sell. All of it had to run on a small team's time.
              </p>
            </div>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-2 gap-4 sm:gap-10">
            {productShots.map((shot) => (
              <Shot key={shot.alt} shot={shot} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- What we did ---------- */}
      <Section className="py-24 md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Our Approach"
            title="What We Did"
            description="Five workstreams, each designed to keep running after handover."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {workstreams.map((w, i) => (
              <Card key={w.title} className="flex h-full flex-col">
                <span aria-hidden="true" className="text-[1.1rem] text-gold-ink tabular-nums" style={serif}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-[1.4rem] leading-tight text-charcoal dark:text-chalk">{w.title}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">{w.body}</p>
                <ul className="mt-5 flex flex-col gap-2.5 border-t border-border pt-5">
                  {w.points.map((p) => (
                    <li key={p} className="flex gap-3 text-[0.95rem] leading-snug text-charcoal dark:text-chalk">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {workShots.some((w) => w.src) && (
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {workShots.map((w) => (
                <Shot key={w.alt} shot={w} />
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* ---------- Results ---------- */}
      <Section className="bg-cloud py-24 dark:bg-card md:py-32">
        <Container>
          <SectionHeader
            eyebrow="Outcomes"
            title="Results"
            description={`Kuha's results from ${RESULTS_PERIOD}.`}
          />
          <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-3">
            {results.map((r) => (
              <div key={r.label} className="border-t border-border pt-6">
                <p className="break-words text-[2.2rem] leading-none text-charcoal dark:text-chalk md:text-[2.8rem]" style={serif}>
                  {r.value}
                </p>
                <p className="mt-3 text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">{r.label}</p>
              </div>
            ))}
          </div>
          <h3 className="mt-20 text-[1.5rem] leading-tight text-charcoal dark:text-chalk md:text-[1.85rem]">
            What Kuha hosts say
          </h3>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <TestimonialCard key={t.quote} {...t} />
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- CTA ---------- */}
      <Section className="py-24 md:py-32">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-pine px-6 py-14 text-center sm:px-8 sm:py-16 md:px-16 md:py-20">
            <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6">
              <Eyebrow className="text-chalk/70">Work With Us</Eyebrow>
              <h2 className="text-[1.95rem] leading-[1.12] text-chalk sm:text-[2.1rem] md:text-[2.8rem]">
                Need systems like this?
              </h2>
              <p className="text-[1.05rem] leading-relaxed text-chalk/70 sm:text-[1.1rem]">
                We build the operations, content, and growth systems that help new products launch and keep
                running. Tell us what you're building.
              </p>
              <div className="mt-2 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                <Button to="/contact" size="lg" className="w-full sm:w-auto">
                  Need systems like this? Book a call <ArrowRight className="h-4 w-4" />
                </Button>
                <a
                  href={KUHA_URL}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-chalk/25 px-7 py-3.5 text-[1rem] font-medium text-chalk transition-colors hover:border-sage hover:text-sage focus:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                >
                  See Kuha live <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </article>
  );
}
