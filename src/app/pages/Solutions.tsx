import { Container, Section } from "../components/ui-brand/primitives";
import { PageHero, CTABand, RelatedLinks } from "../components/ui-brand/components";
import { solutionPages } from "../content/solutions";
import { serviceLinks } from "../content/links";
import { services } from "../content/site";

export function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="See what we can take off your plate."
        description="Specific, recurring work that SageStone handles for growing teams. Pick the one that sounds most like your week, or book a call and we'll map it together."
        breadcrumbs={[{ name: "Solutions" }]}
      />

      <Section className="pt-0 pb-24 md:pb-32">
        <Container>
          <RelatedLinks
            title="Common requests"
            items={solutionPages.map((s) => ({ to: `/solutions/${s.slug}`, title: s.name, body: s.summary }))}
          />
        </Container>
      </Section>

      <Section className="border-t border-border py-24 md:py-32">
        <Container>
          <RelatedLinks
            eyebrow="Services"
            title="Prefer to browse by service?"
            items={serviceLinks(services.map((s) => s.slug))}
          />
        </Container>
      </Section>

      <CTABand />
    </>
  );
}
