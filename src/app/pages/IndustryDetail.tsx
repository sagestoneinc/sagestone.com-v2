import { useParams } from "react-router";
import { ArrowRight } from "lucide-react";
import { Container, Section, SectionHeader, Eyebrow, Button, Card } from "../components/ui-brand/primitives";
import { FAQAccordion, CTABand, Breadcrumbs, RelatedLinks } from "../components/ui-brand/components";
import { industryBySlug } from "../content/industries";
import { serviceLinks, solutionLinks, postLinksForServices } from "../content/links";
import { NotFound } from "./NotFound";

const serif = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

export function IndustryDetail() {
  const { slug = "" } = useParams();
  const industry = industryBySlug(slug);
  if (!industry) return <NotFound />;

  return (
    <>
      <Section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <Container>
          <Breadcrumbs items={[{ name: "Industries", to: "/industries" }, { name: industry.name }]} />
          <div className="max-w-3xl">
            <Eyebrow className="mb-7">{industry.name}</Eyebrow>
            <h1 className="text-[2.5rem] leading-[1.02] tracking-[-0.03em] text-charcoal dark:text-chalk md:text-[3.6rem]">
              {industry.h1}
            </h1>
            <p className="mt-8 max-w-2xl text-[1.2rem] leading-relaxed text-slate-olive dark:text-muted-foreground">{industry.intro}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button to="/contact" size="lg" className="w-full sm:w-auto">
                Book a Discovery Call <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/how-it-works" size="lg" variant="secondary" className="w-full sm:w-auto">
                How It Works
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-cloud py-24 dark:bg-card md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeader eyebrow="The Challenge" title={`Where ${industry.name.toLowerCase()} teams get stretched`} />
            <div>
              {industry.pains.map((pain, i) => (
                <div key={pain} className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-border py-7 last:border-b md:gap-10">
                  <span aria-hidden="true" className="text-[1.05rem] text-gold-ink tabular-nums" style={serif}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[1.2rem] leading-snug text-charcoal dark:text-chalk md:text-[1.35rem]">{pain}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24 md:py-32">
        <Container>
          <SectionHeader eyebrow="What We Take On" title={`Support built for ${industry.name.toLowerCase()}`} />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industry.tasks.map((task) => (
              <Card key={task.title}>
                <h3 className="text-[1.3rem] leading-tight text-charcoal dark:text-chalk">{task.title}</h3>
                <p className="mt-3 text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">{task.body}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border py-24 md:py-32">
        <Container className="flex flex-col gap-20">
          <RelatedLinks eyebrow="Services" title="Services that fit this work" items={serviceLinks(industry.services)} />
          <RelatedLinks eyebrow="Solutions" title="Common requests" items={solutionLinks(industry.solutions)} />
          <RelatedLinks eyebrow="From the Blog" title="Related reading" items={postLinksForServices(industry.services)} />
        </Container>
      </Section>

      <Section className="bg-cloud py-24 dark:bg-card md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <SectionHeader eyebrow="FAQ" title={`${industry.name} support questions`} />
            <FAQAccordion items={industry.faqs} />
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
