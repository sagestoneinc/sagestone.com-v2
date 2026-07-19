import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import { ArrowRight, ArrowUpRight, Plus, Minus, Quote } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button, Card, Container, Section, Eyebrow } from "./primitives";
import type { Service } from "../../content/site";

const serifStyle = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

/* ---------- Noise / paper-grain overlay (restrained; Pine sections only) ---------- */
const GRAIN_URL =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function NoiseOverlay({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 opacity-[0.045] mix-blend-soft-light ${className}`}
      style={{ backgroundImage: GRAIN_URL, backgroundSize: "140px 140px" }}
    />
  );
}

/* ---------- Service Index (editorial numbered list) ---------- */
export function ServiceIndex({ services }: { services: Service[] }) {
  return (
    <div>
      {services.map((service, i) => {
        const num = String(i + 1).padStart(2, "0");
        return (
          <Link
            key={service.slug}
            to={`/services/${service.slug}`}
            className="group block border-t border-border py-7 transition-colors last:border-b hover:bg-sage/[0.04] md:grid md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-10 md:py-10"
          >
            {/* desktop-only leading number (decorative) */}
            <span
              aria-hidden="true"
              className="hidden text-[1.1rem] text-gold-ink tabular-nums md:block"
              style={serifStyle}
            >
              {num}
            </span>
            <div>
              <h3 className="text-[1.5rem] leading-tight text-charcoal transition-colors group-hover:text-sage dark:text-chalk md:text-[1.85rem]">
                <span aria-hidden="true" className="mr-3 text-[0.95rem] text-gold-ink tabular-nums md:hidden" style={serifStyle}>
                  {num}
                </span>
                {service.title}
              </h3>
              <p className="mt-3 max-w-lg text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                {service.summary}
              </p>
              {/* mobile CTA */}
              <span className="mt-4 inline-flex items-center gap-1.5 text-[0.9rem] font-medium text-sage-ink md:hidden">
                Explore service
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
            {/* desktop arrow affordance */}
            <span className="mt-2 hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border text-charcoal transition-all group-hover:border-sage group-hover:bg-sage group-hover:text-cloud dark:text-chalk dark:group-hover:text-pine md:inline-flex">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </Link>
        );
      })}
    </div>
  );
}

/* ---------- Process List (editorial, responsive) ---------- */
export function ProcessList({
  steps,
}: {
  steps: { number: string; title: string; description: string }[];
}) {
  return (
    <div className="flex flex-col">
      {steps.map((step) => (
        <div
          key={step.number}
          className="border-t border-chalk/12 py-8 md:grid md:grid-cols-[auto_0.9fr_1.1fr] md:items-baseline md:gap-12 md:py-11"
        >
          {/* desktop-only large number (decorative; on Pine gold passes AA) */}
          <span aria-hidden="true" className="hidden text-gold md:block md:text-[3.25rem] md:leading-none" style={serifStyle}>
            {step.number}
          </span>
          <h3 className="text-[1.45rem] leading-tight text-chalk md:text-[1.85rem]" style={serifStyle}>
            <span aria-hidden="true" className="mr-4 text-[1.15rem] text-gold tabular-nums md:hidden" style={serifStyle}>
              {step.number}
            </span>
            {step.title}
          </h3>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-chalk/60 md:mt-0">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ---------- Testimonial Card ---------- */
export function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role: string;
}) {
  return (
    <Card className="flex h-full flex-col">
      <Quote className="h-7 w-7 text-gold" strokeWidth={1.5} />
      <p className="mt-5 flex-1 text-[1.05rem] leading-relaxed text-charcoal dark:text-chalk">
        “{quote}”
      </p>
      <div className="mt-6 border-t border-border pt-5">
        <p className="font-medium text-charcoal dark:text-chalk">{name}</p>
        <p className="text-[0.9rem] text-slate-olive dark:text-muted-foreground">{role}</p>
      </div>
    </Card>
  );
}

/* ---------- FAQ Accordion ---------- */
export function FAQAccordion({
  items,
}: {
  items: { question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              type="button"
              id={`faq-q-${i}`}
              aria-controls={`faq-panel-${i}`}
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-[1.08rem] font-medium text-charcoal dark:text-chalk">
                {item.question}
              </span>
              <span className="shrink-0 text-sage" aria-hidden="true">
                {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
              </span>
            </button>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-q-${i}`}
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-7 pb-6 text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- CTA Band ---------- */
export function CTABand({
  title = "Ready for support that feels built in?",
  description = "Book a discovery call and see how SageStone brings calm, dependable structure to your operations.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <Section className="pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-pine px-6 py-14 text-center sm:px-8 sm:py-16 md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, var(--sage) 0, transparent 40%), radial-gradient(circle at 80% 80%, var(--gold) 0, transparent 40%)",
            }}
            aria-hidden="true"
          />
          <NoiseOverlay />
          <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6">
            <Eyebrow className="text-chalk/70">Book a Discovery Call</Eyebrow>
            <h2 className="text-[1.95rem] leading-[1.12] text-chalk sm:text-[2.1rem] md:text-[2.8rem]">{title}</h2>
            <p className="text-[1.05rem] leading-relaxed text-chalk/70 sm:text-[1.1rem]">{description}</p>
            <div className="mt-2 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button to="/contact" size="lg" className="w-full sm:w-auto">
                Book a Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/services" size="lg" variant="ghost" className="text-chalk hover:text-sage">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

/* ---------- Page Hero ---------- */
export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Section className="pt-40 pb-16 md:pt-48 md:pb-20">
      <Container>
        <div className="max-w-3xl">
          <Eyebrow className="mb-7">{eyebrow}</Eyebrow>
          <h1 className="text-[2.9rem] leading-[1.0] tracking-[-0.03em] text-charcoal dark:text-chalk md:text-[4.25rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-8 max-w-2xl text-[1.2rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
              {description}
            </p>
          )}
          {children && <div className="mt-10">{children}</div>}
        </div>
      </Container>
    </Section>
  );
}

/* ---------- Case Study Card ---------- */
export function CaseStudyCard({
  study,
}: {
  study: {
    slug: string;
    client: string;
    industry: string;
    headline: string;
    outcome: string;
    image: string;
  };
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[0_1px_2px_rgba(34,38,34,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-24px_rgba(34,38,34,0.35)]">
      <div className="aspect-[16/10] overflow-hidden">
        <ImageWithFallback
          src={study.image}
          alt={study.client}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-7">
        <span className="text-[0.78rem] uppercase tracking-[0.18em] text-gold-ink">
          {study.industry}
        </span>
        <h3 className="mt-3 text-[1.35rem] text-charcoal dark:text-chalk">{study.headline}</h3>
        <div className="mt-5 border-t border-border pt-5">
          <span className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-olive dark:text-muted-foreground">Outcome</span>
          <p className="mt-1.5 text-[1rem] leading-snug text-charcoal dark:text-chalk">{study.outcome}</p>
        </div>
      </div>
    </article>
  );
}
