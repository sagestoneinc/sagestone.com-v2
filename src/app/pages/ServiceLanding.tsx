import { Link, Navigate, useLocation } from "react-router";
import { ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow, Button } from "../components/ui-brand/primitives";
import { CTABand } from "../components/ui-brand/components";
import { BreadcrumbTrail } from "../components/layout/BreadcrumbTrail";
import { SERVICE_PAGE_MAP } from "../../config/services";
import { SEO_ROUTE_MAP } from "../../config/seo-routes";
import { SeoHead } from "../seo/SeoHead";
import { getBreadcrumbSchema, getServiceSchema } from "../seo/schema";

export function ServiceLanding() {
  const location = useLocation();
  const service = SERVICE_PAGE_MAP.get(location.pathname);

  if (!service) {
    return <Navigate to="/solutions" replace />;
  }

  const seo = SEO_ROUTE_MAP.get(service.path);

  if (!seo) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        path={service.path}
        indexable={seo.indexable}
        schemas={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: service.name, path: service.path },
          ]),
          getServiceSchema({
            name: service.name,
            description: service.heroIntro,
            path: service.path,
            serviceType: service.serviceType,
            audience: service.audience,
          }),
        ]}
      />

      <Section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <Container>
          <BreadcrumbTrail
            items={[
              { label: "Home", to: "/" },
              { label: "Solutions", to: "/solutions" },
              { label: service.name },
            ]}
          />

          <Eyebrow className="mb-7">Service</Eyebrow>
          <h1 className="max-w-4xl text-[2.55rem] leading-[1.0] tracking-[-0.03em] text-charcoal dark:text-chalk md:text-[3.8rem]">
            {service.heroTitle}
          </h1>
          <p className="mt-8 max-w-3xl text-[1.15rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
            {service.heroIntro}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/contact" size="lg">
              Book a Discovery Call <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/solutions" size="lg" variant="secondary">
              Compare Solutions
            </Button>
          </div>
        </Container>
      </Section>

      <Section className="bg-cloud py-24 dark:bg-card md:py-32">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {service.sections.map((section) => (
              <article key={section.title} className="rounded-2xl border border-border bg-card p-7">
                <h2 className="text-[1.45rem] text-charcoal dark:text-chalk">{section.title}</h2>
                <p className="mt-3 text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <Eyebrow className="mb-6">Frequently Asked Questions</Eyebrow>
              <h2 className="text-[2rem] leading-[1.08] tracking-[-0.02em] text-charcoal dark:text-chalk md:text-[2.6rem]">
                Common questions about {service.name.toLowerCase()}
              </h2>
            </div>
            <div className="space-y-5">
              {service.faq.map((item) => (
                <article key={item.question} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-[1.15rem] text-charcoal dark:text-chalk">{item.question}</h3>
                  <p className="mt-3 text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="pb-10 pt-0 md:pb-14">
        <Container>
          <div className="rounded-2xl border border-border bg-card p-7 md:p-10">
            <h2 className="text-[1.5rem] text-charcoal dark:text-chalk">Related services</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.relatedLinks.map((related) => (
                <Link
                  key={related.to}
                  to={related.to}
                  className="rounded-xl border border-border px-4 py-3 text-[0.98rem] text-charcoal transition-colors hover:border-sage hover:text-sage dark:text-chalk"
                >
                  {related.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <CTABand title="Need dependable support matched to your workflow?" />
    </>
  );
}
