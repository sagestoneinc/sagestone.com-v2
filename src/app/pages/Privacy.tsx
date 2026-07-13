import { Container, Section } from "../components/ui-brand/primitives";
import { PageHero } from "../components/ui-brand/components";
import { Seo } from "../components/seo/Seo";
import { pageMeta, SITE } from "../content/seo";

export function Privacy() {
  return (
    <>
      <Seo {...pageMeta.privacy} path="/privacy" />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How SageStone collects, uses, and protects your information."
      />
      <Section className="pt-6 pb-28 md:pb-40">
        <Container>
          <div className="mx-auto flex max-w-3xl flex-col gap-6 text-[1.05rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
            <p>
              This Privacy Policy explains how {SITE.legalName} ("SageStone", "we", "us")
              handles information collected through {SITE.url}.
            </p>
            <Heading>Information we collect</Heading>
            <p>
              We collect the information you choose to provide — such as your name, email,
              company, and message — when you submit our contact form or otherwise reach
              out. We also collect standard, non-identifying usage data (such as pages
              visited) to improve the site.
            </p>
            <Heading>How we use information</Heading>
            <p>
              We use your information to respond to inquiries, schedule discovery calls,
              provide our services, and improve our website. We do not sell your personal
              information.
            </p>
            <Heading>Data retention & security</Heading>
            <p>
              We retain contact information only as long as needed to serve your inquiry or
              relationship, and we apply reasonable safeguards to protect it.
            </p>
            <Heading>Your choices</Heading>
            <p>
              You may request access to, correction of, or deletion of your personal
              information by emailing{" "}
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
