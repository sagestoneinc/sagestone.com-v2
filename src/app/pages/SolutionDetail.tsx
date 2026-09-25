import { useParams } from "react-router";
import { ArrowRight, Check } from "lucide-react";
import { Container, Section, SectionHeader, Eyebrow, Button } from "../components/ui-brand/primitives";
import { FAQAccordion, CTABand, Breadcrumbs, RelatedLinks } from "../components/ui-brand/components";
import { solutionBySlug } from "../content/solutions";
import { serviceLinks, industryLinks, postLinksForServices } from "../content/links";
import { NotFound } from "./NotFound";

const serif = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

export function SolutionDetail() {
  const { slug = "" } = useParams();
  const solution = solutionBySlug(slug);
  if (!solution) return <NotFound />;

  return (
    <>
      <Section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <Container>
          <Breadcrumbs items={[{ name: "Solutions", to: "/solutions" }, { name: solution.name }]} />
          <div className="max-w-3xl">
            <Eyebrow className="mb-7">Solutions</Eyebrow>
            <h1 className="text-[2.5rem] leading-[1.02] tracking-[-0.03em] text-charcoal dark:text-chalk md:text-[3.6rem]">
              {solution.h1}
            </h1>
            <p className="mt-8 max-w-2xl text-[1.2rem] leading-relaxed text-slate-olive dark:text-muted-foreground">{solution.intro}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button to="/contact" size="lg" className="w-full sm:w-auto">
                Book a Discovery Call <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/solutions" size="lg" variant="secondary" className="w-full sm:w-auto">
                All Solutions
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-cloud py-24 dark:bg-card md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <SectionHeader eyebrow="What's Included" title="What we handle" />
            </div>
            <div>
              {solution.includes.map((item, i) => (
                <div key={item.title} className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-border py-7 last:border-b md:gap-10">
                  <span aria-hidden="true" className="text-[1.05rem] text-gold-ink tabular-nums" style={serif}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[1.35rem] text-charcoal dark:text-chalk">{item.title}</h3>
                    <p className="mt-2 max-w-lg text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeader eyebrow="Is This You?" title="Signs it's time to hand this off" />
            <ul className="flex flex-col gap-5">
              {solution.signs.map((sign) => (
                <li key={sign} className="flex gap-4 text-[1.15rem] leading-snug text-charcoal dark:text-chalk">
                  <Check className="mt-1 h-5 w-5 shrink-0 text-sage" aria-hidden="true" />
                  {sign}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section className="border-t border-border py-24 md:py-32">
        <Container className="flex flex-col gap-20">
          <RelatedLinks eyebrow="Services" title="Where this fits" items={serviceLinks(solution.services)} columns={solution.services.length > 2 ? 3 : 2} />
          <RelatedLinks eyebrow="Industries" title="Teams we do this for" items={industryLinks(solution.industries)} />
          <RelatedLinks eyebrow="From the Blog" title="Related reading" items={postLinksForServices(solution.services)} />
        </Container>
      </Section>

      <Section className="bg-cloud py-24 dark:bg-card md:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <SectionHeader eyebrow="FAQ" title={`About ${solution.name.toLowerCase()}`} />
            <FAQAccordion items={solution.faqs} />
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
