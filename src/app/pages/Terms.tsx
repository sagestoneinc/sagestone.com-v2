import { Container, Section } from "../components/ui-brand/primitives";
import { PageHero } from "../components/ui-brand/components";
import { Seo } from "../components/seo/Seo";
import { pageMeta, SITE } from "../content/seo";

export function Terms() {
  return (
    <>
      <Seo {...pageMeta.terms} path="/terms" />
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms that govern your use of the SageStone website and services."
      />
      <Section className="pt-6 pb-28 md:pb-40">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-6 text-[1.05rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
            <p>
              These Terms of Service ("Terms") govern your access to and use of the
              {" "}{SITE.legalName} website at {SITE.url}. By using this site, you agree to
              these Terms.
            </p>
            <Heading>Use of the site</Heading>
            <p>
              You agree to use the site lawfully and not to misuse, disrupt, or attempt to
              gain unauthorized access to it or its systems.
            </p>
            <Heading>Intellectual property</Heading>
            <p>
              All content on this site — including text, graphics, logos, and branding — is
              owned by {SITE.legalName} and may not be reproduced without permission.
            </p>
            <Heading>No warranty</Heading>
            <p>
              The site and its content are provided "as is" without warranties of any kind.
              We do not guarantee that the site will be uninterrupted or error-free.
            </p>
            <Heading>Limitation of liability</Heading>
            <p>
              To the extent permitted by law, {SITE.legalName} is not liable for any
              indirect or consequential damages arising from your use of the site.
            </p>
            <Heading>Contact</Heading>
            <p>
              Questions about these Terms can be sent to{" "}
              <a href={`mailto:${SITE.email}`} className="text-sage hover:underline">
                {SITE.email}
              </a>
              .
            </p>
            <p className="text-[0.9rem] italic">
              This page is provided as a general template and should be reviewed by legal
              counsel before you rely on it.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 text-[1.5rem] leading-tight text-charcoal dark:text-chalk">
      {children}
    </h2>
  );
}
