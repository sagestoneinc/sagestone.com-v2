import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeader, Eyebrow, Button } from "../components/ui-brand/primitives";
import { ServiceIndex, ProcessList, PageHero, CTABand, NoiseOverlay } from "../components/ui-brand/components";
import { services, processSteps } from "../content/site";

const serif = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="A complete support layer for your operations."
        description="SageStone brings six core disciplines together into one dependable model — matched to your workflows and overseen for consistency."
      >
        <Button to="/contact" size="lg">
          Book a Discovery Call <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      {/* Editorial service index */}
      <Section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Eyebrow className="mb-6">The Disciplines</Eyebrow>
              <h2 className="text-[2rem] leading-[1.08] tracking-[-0.02em] text-charcoal dark:text-chalk md:text-[2.6rem]">
                Six ways we support growth.
              </h2>
              <p className="mt-6 max-w-md text-[1.1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                Each discipline is offered on its own or combined into a broader
                engagement — always matched to how your team actually works.
              </p>
            </div>
            <ServiceIndex services={services} />
          </div>
        </Container>
      </Section>

      {/* How engagement works */}
      <Section className="relative overflow-hidden bg-pine py-28 text-chalk md:py-40">
        <NoiseOverlay />
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Eyebrow className="mb-6 text-chalk/60">How Engagement Works</Eyebrow>
            <h2 className="text-[2.15rem] leading-[1.08] tracking-[-0.02em] text-chalk md:text-[3rem]">
              Clear from the first conversation.
            </h2>
            <p className="mt-6 text-[1.1rem] leading-relaxed text-chalk/60">
              Our model is designed to be low-friction and easy to expand — so support
              fits your business rather than the other way around.
            </p>
          </div>
          <div className="mt-14 md:mt-20">
            <ProcessList steps={processSteps} />
          </div>
        </Container>
      </Section>

      {/* Who / why / how */}
      <Section className="py-28 md:py-40">
        <Container>
          <SectionHeader
            eyebrow="The Model"
            title="Built to fit your business"
            description="A few principles keep every SageStone engagement dependable, specific, and easy to grow into."
          />
          <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-3">
            {[
              { n: "01", title: "Who it's for", body: "Growth-focused founders, operators, and teams who need dependable support integrated into real workflows." },
              { n: "02", title: "Why our model works", body: "Vetted talent, clear structure, and steady oversight keep quality consistent as you scale." },
              { n: "03", title: "How we start", body: "A short discovery call, thoughtful matching, and a structured onboarding — usually within days." },
            ].map((b) => (
              <div key={b.n} className="border-t border-border pt-7">
                <span className="text-[1.05rem] text-gold" style={serif}>{b.n}</span>
                <h3 className="mt-4 text-[1.45rem] text-charcoal dark:text-chalk">{b.title}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
