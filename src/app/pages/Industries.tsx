import { Container, Section } from "../components/ui-brand/primitives";
import { PageHero, CTABand } from "../components/ui-brand/components";
import { SeoHead } from "../seo/SeoHead";

const serif = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

const industryDetails = [
  {
    name: "Agencies",
    pain: "Senior time lost to admin and inconsistent client follow-up.",
    roles: ["Account coordination", "Project support", "Client communication"],
  },
  {
    name: "E-commerce Brands",
    pain: "Order and customer volume that spikes faster than the team can scale.",
    roles: ["Customer support", "Order management", "Listing maintenance"],
  },
  {
    name: "Real Estate Teams",
    pain: "Transaction detail and CRM hygiene that slip during busy periods.",
    roles: ["Transaction coordination", "CRM management", "Client follow-up"],
  },
  {
    name: "Founder-led Businesses",
    pain: "Founders stretched thin across operations they've outgrown.",
    roles: ["Executive assistance", "Operations support", "Back office"],
  },
  {
    name: "Service Companies",
    pain: "Scheduling and dispatch bottlenecks that slow delivery.",
    roles: ["Scheduling", "Dispatch support", "Workflow coordination"],
  },
  {
    name: "Professional Firms",
    pain: "Administrative load pulling focus from billable, client-facing work.",
    roles: ["Administrative support", "Documentation", "Client coordination"],
  },
];

export function Industries() {
  return (
    <>
      <SeoHead
        title="Industries We Support | SageStone Inc"
        description="Explore how SageStone supports agencies, ecommerce brands, real estate teams and service businesses with structured remote support."
        path="/industries"
        indexable={false}
      />
      <PageHero
        eyebrow="Industries Served"
        title="Support shaped to your industry's realities."
        description="SageStone adapts to the specific pressures each business type faces — placing the right support roles where they matter most."
      />

      <Section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-x-14 gap-y-14 md:grid-cols-2">
            {industryDetails.map((ind, i) => (
              <div key={ind.name} className="flex h-full flex-col border-t border-border pt-8">
                <div className="flex items-baseline gap-5">
                  <span className="text-[1.05rem] text-gold tabular-nums" style={serif}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[1.7rem] text-charcoal dark:text-chalk md:text-[2rem]">{ind.name}</h3>
                </div>
                <p className="mt-6 text-[0.72rem] uppercase tracking-[0.18em] text-slate-olive dark:text-muted-foreground">
                  Common challenge
                </p>
                <p className="mt-2 max-w-md text-[1.05rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                  {ind.pain}
                </p>
                <p className="mt-7 text-[0.72rem] uppercase tracking-[0.18em] text-slate-olive dark:text-muted-foreground">
                  Example support roles
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {ind.roles.map((r) => (
                    <li key={r} className="rounded-full border border-sage/30 px-3.5 py-1.5 text-[0.85rem] text-sage">
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand title="Not sure where support fits? Let's map it together." />
    </>
  );
}
