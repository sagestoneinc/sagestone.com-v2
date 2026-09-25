import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { Container, Section } from "../components/ui-brand/primitives";
import { PageHero, CTABand } from "../components/ui-brand/components";
import { industryPages } from "../content/industries";

const serif = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

export function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries Served"
        title="Support shaped to your industry's realities."
        description="SageStone adapts to the specific pressures each business type faces — placing the right support roles where they matter most."
        breadcrumbs={[{ name: "Industries" }]}
      />

      <Section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-x-14 gap-y-14 md:grid-cols-2">
            {industryPages.map((ind, i) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className="group flex h-full flex-col border-t border-border pt-8"
              >
                <div className="flex items-baseline gap-5">
                  <span aria-hidden="true" className="text-[1.05rem] text-gold-ink tabular-nums" style={serif}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-[1.7rem] text-charcoal transition-colors group-hover:text-sage dark:text-chalk md:text-[2rem]">
                    {ind.name}
                  </h2>
                </div>
                <p className="mt-6 text-[0.72rem] uppercase tracking-[0.18em] text-slate-olive dark:text-muted-foreground">
                  Common challenge
                </p>
                <p className="mt-2 max-w-md text-[1.05rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                  {ind.pains[0]}
                </p>
                <p className="mt-7 text-[0.72rem] uppercase tracking-[0.18em] text-slate-olive dark:text-muted-foreground">
                  Example support roles
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {ind.tasks.slice(0, 3).map((t) => (
                    <li key={t.title} className="rounded-full border border-sage/30 px-3.5 py-1.5 text-[0.85rem] text-sage-ink">
                      {t.title}
                    </li>
                  ))}
                </ul>
                <span className="mt-7 inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-sage-ink">
                  {ind.name} support
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-20 max-w-2xl text-[1.05rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
            Running a founder-led business that doesn't fit a single category? Start with{" "}
            <Link to="/services/executive-assistant-services" className="text-sage-ink underline decoration-gold/60 underline-offset-4 hover:text-sage">
              executive assistant services
            </Link>{" "}
            or{" "}
            <Link to="/services/remote-operations-support" className="text-sage-ink underline decoration-gold/60 underline-offset-4 hover:text-sage">
              remote operations support
            </Link>
            .
          </p>
        </Container>
      </Section>

      <CTABand title="Not sure where support fits? Let's map it together." />
    </>
  );
}
