import { Container, Section, Eyebrow, Button } from "../components/ui-brand/primitives";
import { Seo } from "../components/seo/Seo";
import { pageMeta } from "../content/seo";

export function NotFound() {
  return (
    <Section className="pt-40 pb-28 md:pt-48">
      <Seo {...pageMeta.notFound} path="/404" noindex />
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Eyebrow className="mb-7">404</Eyebrow>
          <h1 className="text-[2.9rem] leading-[1.0] tracking-[-0.03em] text-charcoal dark:text-chalk md:text-[3.5rem]">
            This page couldn't be found.
          </h1>
          <p className="mx-auto mt-6 max-w-md text-[1.1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
            The page you're looking for may have moved or no longer exists. Let's get
            you back on track.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button to="/">Back to home</Button>
            <Button to="/services" variant="secondary">
              View services
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
