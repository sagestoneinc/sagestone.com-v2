import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Container, Section, SectionHeader, Eyebrow } from "../components/ui-brand/primitives";
import { FAQAccordion, PageHero, CTABand } from "../components/ui-brand/components";
import { images } from "../content/site";

const serif = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

const advantages = [
  { title: "Strong professional communication", body: "High English fluency and a communication style that fits Western business culture." },
  { title: "Adaptability", body: "Professionals who integrate quickly into new tools, teams, and workflows." },
  { title: "Reliability", body: "A workforce known for dependability, diligence, and consistency." },
  { title: "Depth of talent", body: "A deep, educated talent market across support, operations, and administration." },
];

const philippinesFaqs = [
  {
    question: "How does SageStone ensure the right fit?",
    answer:
      "We vet for skills, communication, and working style — then match deliberately and provide oversight so the fit holds over time.",
  },
  {
    question: "How is time zone difference handled?",
    answer:
      "We arrange overlap hours that suit your workflow, with options for extended or around-the-clock coverage where needed.",
  },
  {
    question: "What about quality and consistency?",
    answer:
      "Every engagement includes SageStone oversight, documented process, and clear expectations so standards stay consistent.",
  },
];

export function WhyPhilippines() {
  return (
    <>
      <PageHero
        eyebrow="Why the Philippines"
        title="A talent market built for dependable remote support."
        description="The Philippines offers a rare combination of professionalism, communication, and adaptability — and SageStone's model turns that into reliable, well-fitted support."
      />

      <Section className="pt-4 pb-8">
        <Container>
          <div className="overflow-hidden rounded-[1.75rem] border border-border">
            <ImageWithFallback src={images.officeArt} alt="Calm modern office" className="aspect-[21/9] w-full object-cover" />
          </div>
        </Container>
      </Section>

      <Section className="py-28 md:py-40">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Eyebrow className="mb-6">The Advantage</Eyebrow>
              <h2 className="text-[2rem] leading-[1.08] tracking-[-0.02em] text-charcoal dark:text-chalk md:text-[2.6rem]">
                Why growth-focused teams hire here.
              </h2>
              <p className="mt-6 max-w-md text-[1.1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                These strengths are why so many businesses build lasting remote support
                relationships with Filipino professionals.
              </p>
            </div>
            <div>
              {advantages.map((a, i) => (
                <div
                  key={a.title}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-border py-8 last:border-b md:gap-10 md:py-9"
                >
                  <span className="text-[1.05rem] text-gold tabular-nums" style={serif}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[1.4rem] text-charcoal dark:text-chalk md:text-[1.6rem]">{a.title}</h3>
                    <p className="mt-3 max-w-lg text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">{a.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-cloud py-28 dark:bg-card md:py-40">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
            <div>
              <Eyebrow className="mb-6">The SageStone Difference</Eyebrow>
              <h2 className="text-[2.15rem] leading-[1.08] tracking-[-0.02em] text-charcoal dark:text-chalk md:text-[3rem]">
                Great talent is only half the story.
              </h2>
              <p className="mt-6 text-[1.1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                Access to skilled professionals matters — but fit, structure, and
                oversight are what make support truly dependable. SageStone pairs
                careful matching with documented process and ongoing support, so the
                relationship works from day one and keeps working as you grow.
              </p>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-border">
              <ImageWithFallback src={images.deskShelves} alt="Modern workspace" className="aspect-[4/3] w-full object-cover" />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-28 md:py-40">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <SectionHeader eyebrow="FAQ" title="Common questions" />
            <FAQAccordion items={philippinesFaqs} />
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
