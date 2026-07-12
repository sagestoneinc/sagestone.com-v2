import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Container, Section, Eyebrow, Button } from "../components/ui-brand/primitives";
import { CTABand } from "../components/ui-brand/components";
import { SeoHead } from "../seo/SeoHead";
import { getBreadcrumbSchema } from "../seo/schema";

const solutionCards = [
  {
    title: "Virtual Assistant Services",
    path: "/business-operations-support",
    audience: "Founders and operators who need recurring execution support.",
    description: "Structured day-to-day support for recurring operational priorities.",
  },
  {
    title: "Customer Support Outsourcing",
    path: "/customer-support-outsourcing",
    audience: "Teams managing rising ticket and customer inquiry volume.",
    description: "Email, chat and help-desk workflow support aligned to your escalation model.",
  },
  {
    title: "Business Operations Support",
    path: "/business-operations-support",
    audience: "Operations teams reducing handoff gaps and process drift.",
    description: "Workflow coordination, CRM hygiene, reporting and process documentation.",
  },
  {
    title: "E-commerce Virtual Assistant Services",
    path: "/ecommerce-virtual-assistant",
    audience: "Ecommerce teams balancing fulfillment, catalog and support demands.",
    description: "Reliable support for order workflows, catalog updates and recurring store tasks.",
  },
  {
    title: "GoHighLevel Virtual Assistant Services",
    path: "/gohighlevel-virtual-assistant",
    audience: "Teams running CRM and follow-up workflows in GoHighLevel.",
    description: "Dependable CRM, pipeline, reporting and workflow support.",
  },
  {
    title: "Website Maintenance Support",
    path: "/web-maintenance-support",
    audience: "Marketing teams maintaining active websites and landing pages.",
    description: "Publishing coordination, content updates, form checks and QA workflows.",
  },
];

export function Solutions() {
  return (
    <>
      <SeoHead
        title="Outsourced Business Support Solutions | SageStone Inc"
        description="Explore flexible virtual assistant, customer support, e-commerce and business operations solutions designed for growing teams."
        path="/solutions"
        schemas={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: solutionCards.map((card, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: card.title,
              url: `https://www.sagestoneinc.com${card.path}`,
            })),
          },
        ]}
      />

      <Section className="pt-40 pb-20 md:pt-48 md:pb-28">
        <Container>
          <Eyebrow className="mb-7">Solutions</Eyebrow>
          <h1 className="max-w-4xl text-[2.65rem] leading-[1.0] tracking-[-0.03em] text-charcoal dark:text-chalk md:text-[4rem]">
            Flexible Business Support Solutions for Growing Teams
          </h1>
          <p className="mt-8 max-w-3xl text-[1.15rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
            SageStone provides coordinated outsourced support across daily operations, customer communication,
            ecommerce workflows, CRM upkeep and website maintenance. Use this hub to compare service fit and choose
            the right starting point for your team.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/contact" size="lg">
              Book a Discovery Call <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/experience" size="lg" variant="secondary">
              See the SageStone experience
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-cloud py-24 dark:bg-card md:py-32">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionCards.map((card) => (
              <article key={card.path} className="rounded-2xl border border-border bg-card p-6">
                <h2 className="text-[1.35rem] text-charcoal dark:text-chalk">{card.title}</h2>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                  {card.description}
                </p>
                <p className="mt-3 text-[0.92rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                  <span className="font-medium text-charcoal dark:text-chalk">Best for:</span> {card.audience}
                </p>
                <Link to={card.path} className="mt-5 inline-flex items-center gap-2 text-[0.95rem] font-medium text-sage">
                  Explore {card.title.toLowerCase()}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-24 md:py-32">
        <Container>
          <div className="rounded-2xl border border-border bg-card p-7 md:p-10">
            <Eyebrow className="mb-5">Selection Guide</Eyebrow>
            <h2 className="text-[1.8rem] text-charcoal dark:text-chalk">How to choose your starting service</h2>
            <ul className="mt-5 space-y-3 text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
              <li>Start with <Link to="/customer-support-outsourcing" className="text-sage">customer support outsourcing</Link> if inquiry volume and queue consistency are your top risk.</li>
              <li>Choose <Link to="/business-operations-support" className="text-sage">business operations support</Link> when workflow ownership, reporting and process consistency are your priority.</li>
              <li>Use <Link to="/ecommerce-virtual-assistant" className="text-sage">ecommerce virtual assistant services</Link> if order, listing and customer workflow tasks are competing for team attention.</li>
              <li>Use <Link to="/gohighlevel-virtual-assistant" className="text-sage">GoHighLevel virtual assistant services</Link> when CRM and follow-up workflows need reliable day-to-day support.</li>
            </ul>
          </div>
        </Container>
      </Section>

      <CTABand title="Need help selecting the right support mix?" description="Book a consultation and we will map the best starting scope based on your current workflows." />
    </>
  );
}
