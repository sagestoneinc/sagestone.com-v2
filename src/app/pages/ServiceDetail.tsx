import { Navigate, Link, useParams } from "react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Container, Section, SectionHeader, Eyebrow, Button } from "../components/ui-brand/primitives";
import { FAQAccordion, CTABand, NoiseOverlay } from "../components/ui-brand/components";
import { services, serviceDetails, legacyServiceSlugRedirects } from "../content/site";

const serif = { fontFamily: "var(--font-display)", fontWeight: 600 } as const;

function ServiceContent({ serviceSlug }: { serviceSlug: string }) {
  const service = services.find((s) => s.slug === serviceSlug);
  const detail = serviceDetails[serviceSlug];

  if (!service || !detail) {
    return <Navigate to="/solutions" replace />;
  }

  return (
    <>
      <Section className="pt-40 pb-16 md:pt-48 md:pb-20">
        <Container>
          <Link to="/solutions" className="mb-10 inline-flex items-center gap-2 text-[0.9rem] text-slate-olive transition-colors hover:text-sage dark:text-muted-foreground">
            <ArrowLeft className="h-4 w-4" /> All solutions
          </Link>
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            <div>
              <Eyebrow className="mb-7">{service.title}</Eyebrow>
              <h1 className="text-[2.6rem] leading-[1.0] tracking-[-0.03em] text-charcoal dark:text-chalk md:text-[3.6rem]">
                {detail.heroTitle}
              </h1>
              <p className="mt-8 max-w-xl text-[1.2rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                {detail.intro}
              </p>
              <div className="mt-10 flex flex-wrap gap-5">
                <Button to="/contact" size="lg">
                  Book a Discovery Call <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/solutions" size="lg" variant="secondary">
                  Compare Solutions
                </Button>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.75rem] border border-border">
              <ImageWithFallback
                src={detail.image}
                alt={service.title}
                className="aspect-[5/4] w-full object-cover"
                width={1080}
                height={864}
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-cloud py-28 dark:bg-card md:py-40">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Eyebrow className="mb-6">What's Included</Eyebrow>
              <h2 className="text-[2rem] leading-[1.08] tracking-[-0.02em] text-charcoal dark:text-chalk md:text-[2.6rem]">
                Capabilities you can rely on.
              </h2>
            </div>
            <div>
              {detail.capabilities.map((c, i) => (
                <div
                  key={c.title}
                  className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-border py-8 last:border-b md:gap-10 md:py-9"
                >
                  <span className="text-[1.05rem] text-gold tabular-nums" style={serif}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[1.4rem] text-charcoal dark:text-chalk md:text-[1.6rem]">{c.title}</h3>
                    <p className="mt-3 max-w-lg text-[1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">{c.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="py-28 md:py-40">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Eyebrow className="mb-6">Who this service is for</Eyebrow>
              <h2 className="text-[2rem] leading-[1.08] tracking-[-0.02em] text-charcoal dark:text-chalk md:text-[2.6rem]">Built for teams like yours</h2>
            </div>
            <div>
              {detail.useCases.map((u, i) => (
                <div key={u} className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-border py-7 last:border-b md:gap-10">
                  <span className="text-[1.05rem] text-gold tabular-nums" style={serif}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.25rem] leading-snug text-charcoal dark:text-chalk md:text-[1.45rem]">{u}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section className="relative overflow-hidden bg-pine py-24 text-chalk md:py-32">
        <NoiseOverlay />
        <Container className="relative z-10">
          <Eyebrow className="mb-12 text-chalk/60">Service outcomes</Eyebrow>
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-3">
            {detail.outcomes.map((o) => (
              <div key={o.label} className="border-t border-chalk/15 pt-6">
                <span className="text-[2.2rem] leading-none text-chalk md:text-[2.8rem]" style={serif}>
                  {o.value}
                </span>
                <p className="mt-3 text-[0.85rem] uppercase tracking-[0.14em] text-chalk/60">{o.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-cloud py-28 dark:bg-card md:py-40">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20">
            <SectionHeader eyebrow="FAQ" title={`About ${service.title.toLowerCase()}`} />
            <FAQAccordion items={detail.faqs} />
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button to="/solutions" variant="secondary">outsourced business support solutions</Button>
            <Button to="/business-operations-support" variant="secondary">business operations support</Button>
            <Button to="/customer-support-outsourcing" variant="secondary">customer support outsourcing</Button>
            <Button to="/virtual-assistant-services" variant="secondary">virtual assistant services</Button>
          </div>
        </Container>
      </Section>

      <CTABand />
    </>
  );
}

export function ServiceDetail({ slug }: { slug?: string }) {
  const params = useParams();
  const pageSlug = slug ?? params.slug;
  if (!pageSlug) {
    return <Navigate to="/solutions" replace />;
  }
  return <ServiceContent serviceSlug={pageSlug} />;
}

export function LegacyServiceRedirect() {
  const { slug } = useParams();
  if (!slug) {
    return <Navigate to="/solutions" replace />;
  }

  const legacyTarget = legacyServiceSlugRedirects[slug];
  if (legacyTarget) {
    return <Navigate to={legacyTarget} replace />;
  }

  return <Navigate to="/solutions" replace />;
}
