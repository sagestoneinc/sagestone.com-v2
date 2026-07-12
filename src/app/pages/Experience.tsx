import { Container, Section, SectionHeader } from "../components/ui-brand/primitives";
import { CTABand, ProcessList } from "../components/ui-brand/components";
import { processSteps, testimonials } from "../content/site";

export function Experience() {
  return (
    <>
      <Section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <Container>
          <SectionHeader
            eyebrow="Experience"
            title="What the SageStone experience looks like"
            description="A structured engagement model that keeps onboarding clear, responsibilities aligned, and support consistent over time."
          />
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-pine py-24 text-chalk md:py-32">
        <Container>
          <ProcessList steps={processSteps} />
        </Container>
      </Section>

      <Section className="py-20 md:py-28">
        <Container>
          <SectionHeader
            eyebrow="Client Experience"
            title="How teams describe working with SageStone"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-[1.03rem] leading-relaxed text-charcoal dark:text-chalk">“{item.quote}”</p>
                <p className="mt-5 font-medium text-charcoal dark:text-chalk">{item.name}</p>
                <p className="text-[0.9rem] text-slate-olive dark:text-muted-foreground">{item.role}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand title="Let's design your support experience" />
    </>
  );
}
