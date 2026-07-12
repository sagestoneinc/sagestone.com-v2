import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeader, Eyebrow, Button } from "../components/ui-brand/primitives";
import { ServiceIndex, ProcessList, PageHero, CTABand, NoiseOverlay } from "../components/ui-brand/components";
import { services, processSteps } from "../content/site";

const serif = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Flexible Business Support Solutions for Growing Teams"
        description="SageStone provides coordinated outsourced support across virtual assistance, customer support, ecommerce operations, GoHighLevel workflows, and business operations."
      >
        <Button to="/contact" size="lg">
          Book a Discovery Call <ArrowRight className="h-4 w-4" />
        </Button>
      </PageHero>

      <Section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Eyebrow className="mb-6">Service Solutions Hub</Eyebrow>
              <h2 className="text-[2rem] leading-[1.08] tracking-[-0.02em] text-charcoal dark:text-chalk md:text-[2.6rem]">
                Coordinated support across core operational areas.
              </h2>
              <p className="mt-6 max-w-md text-[1.1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                Use this hub to compare support options and move into the service page that best matches your operational priorities.
              </p>
            </div>
            <ServiceIndex services={services} />
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-pine py-28 text-chalk md:py-40">
        <NoiseOverlay />
        <Container className="relative z-10">
          <div className="max-w-2xl">
            <Eyebrow className="mb-6 text-chalk/60">How Engagement Works</Eyebrow>
            <h2 className="text-[2.15rem] leading-[1.08] tracking-[-0.02em] text-chalk md:text-[3rem]">
              A practical model for outsourced support.
            </h2>
            <p className="mt-6 text-[1.1rem] leading-relaxed text-chalk/60">
              Start with one service or combine multiple services based on the workflows you want to stabilize first.
            </p>
          </div>
          <div className="mt-14 md:mt-20">
            <ProcessList steps={processSteps} />
          </div>
        </Container>
      </Section>

      <Section className="py-28 md:py-40">
        <Container>
          <SectionHeader
            eyebrow="Selection Guide"
            title="How to choose the right service"
            description="Use this quick guide to decide where to begin and where to expand support next."
          />
          <div className="mt-16 grid gap-x-14 gap-y-12 md:grid-cols-3">
            {[
              { n: "01", title: "Start with recurring bottlenecks", body: "Choose the service closest to repetitive tasks that slow your team each week." },
              { n: "02", title: "Align ownership and process", body: "Define who owns each workflow, what gets escalated, and how quality is reviewed." },
              { n: "03", title: "Expand with adjacent services", body: "Layer support across customer workflows, operations, and web updates as needs evolve." },
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
