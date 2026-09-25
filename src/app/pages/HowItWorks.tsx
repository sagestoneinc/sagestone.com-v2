import { Container, Section, SectionHeader, Eyebrow, Card } from "../components/ui-brand/primitives";
import { PageHero, CTABand, ProcessList, NoiseOverlay, FAQAccordion, RelatedLinks } from "../components/ui-brand/components";
import { processSteps, faqs } from "../content/site";
import { solutionPages } from "../content/solutions";

const engagement = [
  {
    title: "Dedicated, not shared",
    body: "Your support is matched to your workflows and works as part of your team, inside your tools and rhythms.",
  },
  {
    title: "Overseen by SageStone",
    body: "We stay involved after onboarding: monitoring consistency, providing structure, and adjusting as your needs change.",
  },
  {
    title: "Documented from day one",
    body: "Onboarding captures how your work is done, so quality doesn't depend on memory and handoffs stay clean.",
  },
  {
    title: "Scales with you",
    body: "Start with the work that's slowing you down most, then add coverage or roles as the business grows.",
  },
];

export function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="From first conversation to dependable support."
        description="SageStone engagements follow four deliberate steps. Most begin onboarding within 24 to 72 hours of the discovery call, depending on scope."
        breadcrumbs={[{ name: "How It Works" }]}
      />

      <Section className="relative overflow-hidden bg-pine py-24 text-chalk md:py-32">
        <NoiseOverlay />
        <Container className="relative z-10">
          <Eyebrow className="mb-6 text-chalk/60">The Process</Eyebrow>
          <h2 className="max-w-2xl text-[2.15rem] leading-[1.08] tracking-[-0.02em] text-chalk md:text-[3rem]">
            Four steps, no guesswork.
          </h2>
          <div className="mt-14 md:mt-20">
            <ProcessList steps={processSteps} />
          </div>
        </Container>
      </Section>

      <Section className="py-24 md:py-32">
        <Container>
          <SectionHeader eyebrow="The Engagement Model" title="What working with SageStone looks like" />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {engagement.map((e) => (
              <Card key={e.title}>
                <h3 className="text-[1.35rem] leading-tight text-charcoal dark:text-chalk">{e.title}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">{e.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border py-24 md:py-32">
        <Container>
          <RelatedLinks
            eyebrow="Solutions"
            title="See what we can take off your plate"
            items={solutionPages.map((s) => ({ to: `/solutions/${s.slug}`, title: s.name, body: s.summary }))}
          />
        </Container>
      </Section>

      <Section className="bg-cloud py-24 dark:bg-card md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <SectionHeader eyebrow="FAQ" title="Getting started" />
            <FAQAccordion items={faqs.filter((f) => f.category !== "Trust & Security").slice(0, 5)} />
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
