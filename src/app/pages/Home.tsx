import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import {
  Button,
  Container,
  Section,
  SectionHeader,
  Eyebrow,
} from "../components/ui-brand/primitives";
import {
  TestimonialCard,
  FAQAccordion,
  CTABand,
  ServiceIndex,
  ProcessList,
  NoiseOverlay,
} from "../components/ui-brand/components";
import {
  services,
  stats,
  testimonials,
  processSteps,
  industries,
  faqs,
  images,
} from "../content/site";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const serif = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

export function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <Section className="pt-40 pb-24 md:pt-48 md:pb-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <motion.div {...fadeUp}>
              <Eyebrow>Remote Operations &amp; Support Partner</Eyebrow>
              <h1 className="mt-8 text-[2.65rem] leading-[1.0] tracking-[-0.03em] text-charcoal dark:text-chalk sm:text-[3.25rem] sm:leading-[0.98] md:text-[4.75rem]">
                Structured support
                <br className="hidden sm:block" /> for businesses{" "}
                <br className="hidden sm:block" />
                <span className="text-sage">built to grow.</span>
              </h1>
              <p className="mt-7 max-w-lg text-[1.1rem] leading-relaxed text-slate-olive dark:text-muted-foreground sm:mt-9 sm:text-[1.2rem]">
                SageStone embeds dependable remote talent into your workflows — so
                your operations run with the clarity, precision, and calm your growth
                deserves.
              </p>
              <div className="mt-9 flex flex-col items-stretch gap-4 sm:mt-11 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                <Button to="/contact" size="lg" className="w-full sm:w-auto">
                  Book a Discovery Call
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-2 text-[1rem] font-medium text-charcoal transition-colors hover:text-sage dark:text-chalk sm:justify-start"
                >
                  Explore our services
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>

              {/* quiet, rule-divided proof (no boxed KPI card) */}
              <div className="mt-10 flex items-center gap-5 border-t border-border pt-8 sm:mt-12">
                <span className="text-[2.75rem] leading-none text-charcoal dark:text-chalk" style={serif}>
                  98<span className="text-sage">%</span>
                </span>
                <span className="max-w-[15rem] text-[0.92rem] leading-snug text-slate-olive dark:text-muted-foreground">
                  Client retention — support relationships that last.
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="overflow-hidden rounded-[1.75rem] border border-border">
                <ImageWithFallback
                  src={images.heroFounder}
                  alt="SageStone's founder at work in a warm, naturally lit office"
                  loading="eager"
                  className="aspect-[4/3] w-full object-cover object-top sm:aspect-[4/5]"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* ---------- Positioning statement ---------- */}
      <Section className="border-y border-border py-24 md:py-32">
        <Container>
          <motion.div {...fadeUp} className="grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
            <Eyebrow className="md:pt-3">The SageStone Idea</Eyebrow>
            <p className="text-[1.5rem] leading-[1.3] tracking-[-0.01em] text-charcoal dark:text-chalk sm:text-[1.75rem] md:text-[2.35rem]" style={{ fontFamily: "var(--font-display)", fontWeight: 500 }}>
              Remote support that feels built into your business — not bolted on. We
              bring structure where there was scramble, and steadiness where growth
              creates strain.
            </p>
          </motion.div>
        </Container>
      </Section>

      {/* ---------- Stats ---------- */}
      <Section className="py-20 md:py-24">
        <Container>
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="flex flex-col gap-3 border-l border-border pl-6"
              >
                <span className="text-[2.75rem] leading-none text-charcoal dark:text-chalk" style={serif}>
                  {s.value}
                </span>
                <span className="text-[0.82rem] uppercase tracking-[0.16em] text-slate-olive dark:text-muted-foreground">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- Services (editorial index) ---------- */}
      <Section className="bg-cloud py-28 dark:bg-card md:py-40">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <motion.div {...fadeUp} className="lg:sticky lg:top-32 lg:self-start">
              <Eyebrow className="mb-6">What We Do</Eyebrow>
              <h2 className="text-[2.15rem] leading-[1.08] tracking-[-0.02em] text-charcoal dark:text-chalk md:text-[3rem]">
                Six disciplines, delivered with precision.
              </h2>
              <p className="mt-6 max-w-md text-[1.1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                Each engagement is specific, structured, and built to integrate cleanly
                into how your team already works.
              </p>
              <Button to="/services" variant="secondary" className="mt-9">
                View all services
              </Button>
            </motion.div>

            <motion.div {...fadeUp}>
              <ServiceIndex services={services} />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* ---------- Why SageStone ---------- */}
      <Section className="py-28 md:py-40">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="overflow-hidden rounded-2xl border border-border">
                  <ImageWithFallback src={images.woodenDesk} alt="Calm workspace" className="aspect-[3/4] w-full object-cover" />
                </div>
                <div className="mt-12 overflow-hidden rounded-2xl border border-border">
                  <ImageWithFallback src={images.deskShelves} alt="Modern desk" className="aspect-[3/4] w-full object-cover" />
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp} className="order-1 lg:order-2">
              <Eyebrow className="mb-6">Why SageStone</Eyebrow>
              <h2 className="text-[2.15rem] leading-[1.08] tracking-[-0.02em] text-charcoal dark:text-chalk md:text-[3rem]">
                Dependable by design, not by chance.
              </h2>
              <p className="mt-6 text-[1.1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                We built SageStone for leaders who value structure over scramble. Every
                engagement is grounded in clear process, thoughtful matching, and steady
                oversight — so support stays consistent as you scale.
              </p>
              <div className="mt-10 flex flex-col divide-y divide-border">
                {[
                  {
                    title: "Embedded, not outsourced",
                    body: "Talent that learns your tools, tone, and rhythms until it feels like part of the team.",
                  },
                  {
                    title: "Structure you can rely on",
                    body: "Documented processes and clear ownership keep quality precise and predictable.",
                  },
                  {
                    title: "Calm, capable oversight",
                    body: "SageStone stays close to every engagement, so standards hold as you grow.",
                  },
                ].map((item, i) => (
                  <div key={item.title} className="grid grid-cols-[auto_1fr] gap-5 py-6 first:pt-0">
                    <span aria-hidden="true" className="text-[1.05rem] text-gold-ink tabular-nums" style={serif}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-[1.15rem] text-charcoal dark:text-chalk" style={serif}>
                        {item.title}
                      </p>
                      <p className="mt-1.5 text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* ---------- Process (editorial steps) ---------- */}
      <Section className="relative overflow-hidden bg-pine py-28 text-chalk md:py-40">
        <NoiseOverlay />
        <Container className="relative z-10">
          <motion.div {...fadeUp} className="max-w-2xl">
            <Eyebrow className="mb-6 text-chalk/60">How It Works</Eyebrow>
            <h2 className="text-[2.15rem] leading-[1.08] tracking-[-0.02em] text-chalk md:text-[3rem]">
              A calm, low-friction path to support.
            </h2>
            <p className="mt-6 text-[1.1rem] leading-relaxed text-chalk/60">
              Four deliberate steps take you from first conversation to dependable
              support embedded in your operations.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mt-14 md:mt-20">
            <ProcessList steps={processSteps} />
          </motion.div>
        </Container>
      </Section>

      {/* ---------- Industries ---------- */}
      <Section className="py-28 md:py-40">
        <Container>
          <motion.div {...fadeUp}>
            <SectionHeader
              title="Trusted across growth-focused teams"
              description="From agencies to real estate, SageStone adapts to the operational realities of the businesses we support."
            />
          </motion.div>
          <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <motion.div
                key={industry.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: (i % 3) * 0.06 }}
                className="border-t border-border pt-6"
              >
                <h3 className="text-[1.35rem] text-charcoal dark:text-chalk">{industry.name}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                  {industry.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-14">
            <Link to="/industries" className="group inline-flex items-center gap-2 font-medium text-sage-ink">
              See all industries
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </Section>

      {/* ---------- Testimonials ---------- */}
      <Section className="bg-cloud py-28 dark:bg-card md:py-40">
        <Container>
          <motion.div {...fadeUp}>
            <SectionHeader title="Understated results, spoken plainly" />
          </motion.div>
          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
              >
                <TestimonialCard {...t} />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ---------- FAQ preview ---------- */}
      <Section className="py-28 md:py-40">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <motion.div {...fadeUp} className="lg:sticky lg:top-32">
              <SectionHeader
                eyebrow="FAQ"
                title="Questions, answered clearly"
                description="A few of the things growth-focused teams ask before they begin."
              />
              <Button to="/faq" variant="secondary" className="mt-9">
                View all FAQs
              </Button>
            </motion.div>
            <motion.div {...fadeUp}>
              <FAQAccordion items={faqs.slice(0, 4)} />
            </motion.div>
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
