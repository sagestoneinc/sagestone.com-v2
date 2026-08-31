import type { ReactNode } from "react";
import { Link } from "react-router";
import { Container, Section } from "../components/ui-brand/primitives";
import { PageHero, CTABand } from "../components/ui-brand/components";

const LAST_UPDATED = "August 31, 2026";

const sections = [
  { id: "acceptance-of-terms", title: "Acceptance of Terms" },
  { id: "services", title: "Services" },
  { id: "use-of-the-website", title: "Use of the Website" },
  { id: "client-obligations", title: "Client Obligations" },
  { id: "payment-terms", title: "Payment Terms" },
  { id: "confidentiality", title: "Confidentiality" },
  { id: "third-party-platforms", title: "Third-Party Platforms" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "text-messaging-terms", title: "SMS Terms & Conditions" },
  { id: "disclaimers", title: "Disclaimers" },
  { id: "limitation-of-liability", title: "Limitation of Liability" },
  { id: "termination", title: "Termination" },
  { id: "modifications", title: "Modifications" },
  { id: "contact", title: "Contact" },
];

export function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description="The terms that govern your use of the SageStone website and the support services we provide."
      >
        <p className="text-[0.72rem] uppercase tracking-[0.24em] text-slate-olive dark:text-muted-foreground">
          Last updated: {LAST_UPDATED}
        </p>
      </PageHero>

      <Section className="pt-4 pb-24 md:pb-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[15rem_1fr] lg:gap-20">
            <nav
              aria-label="On this page"
              className="lg:sticky lg:top-32 lg:self-start"
            >
              <h2 className="text-[0.72rem] uppercase tracking-[0.2em] text-slate-olive dark:text-muted-foreground">
                On this page
              </h2>
              <ol className="mt-5 flex flex-col gap-2.5">
                {sections.map((s, i) => (
                  <li key={s.id} className="flex gap-3 text-[0.92rem] leading-snug">
                    <span className="text-slate-olive/60 tabular-nums dark:text-muted-foreground/60">
                      {i + 1}.
                    </span>
                    <a
                      href={`#${s.id}`}
                      className="text-slate-olive transition-colors hover:text-sage dark:text-muted-foreground dark:hover:text-sage"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="max-w-3xl">
              <P>
                These Terms of Service ("Terms") are an agreement between you and
                SageStone Inc. ("SageStone," "we," "us," or "our"). They cover your
                use of sagestoneinc.com and, unless a signed service agreement says
                otherwise, the remote support services we provide. Please read them
                alongside our <Anchor to="/privacy">Privacy Policy</Anchor>.
              </P>

              <Clause index={1} id="acceptance-of-terms" title="Acceptance of Terms">
                <P>
                  By visiting our website, submitting a form, or engaging SageStone
                  for services, you accept these Terms. If you are agreeing on behalf
                  of a company or other organization, you confirm you have the
                  authority to bind it, and "you" refers to that organization.
                </P>
                <P>
                  If you do not agree to these Terms, please do not use the website or
                  our services. Where you and SageStone have signed a separate service
                  agreement, statement of work, or master services agreement, that
                  document controls in the event of a conflict with these Terms.
                </P>
              </Clause>

              <Clause index={2} id="services" title="Services">
                <P>
                  SageStone provides structured remote support to growth-focused
                  businesses — including virtual assistance, customer support, back
                  office and workflow support, executive assistance, and remote
                  operations. The specific scope, deliverables, hours, schedule, and
                  fees for your engagement are set out in your proposal or service
                  agreement.
                </P>
                <P>
                  We provide support services only. We are not a law firm, accounting
                  firm, medical provider, or licensed financial adviser, and nothing
                  we deliver is legal, tax, accounting, medical, or investment advice.
                  SageStone personnel work as our team members, not as your employees.
                </P>
                <P>
                  We may adjust the composition of the team assigned to your account
                  to maintain continuity and quality, and will keep you informed of
                  changes that affect your day-to-day work.
                </P>
              </Clause>

              <Clause index={3} id="use-of-the-website" title="Use of the Website">
                <P>
                  You may use this website for lawful purposes and to learn about or
                  engage our services. You agree not to:
                </P>
                <Bullets
                  items={[
                    "Submit false, misleading, or someone else's information through our forms.",
                    "Provide a mobile number you are not authorized to give consent for.",
                    "Attempt to gain unauthorized access to the site, its systems, or related infrastructure.",
                    "Scrape, harvest, or bulk-collect content or contact information from the site.",
                    "Interfere with the site's operation, security, or availability, or introduce malicious code.",
                    "Use the site or our brand to send unsolicited messages or to misrepresent your relationship with SageStone.",
                  ]}
                />
                <P>
                  We may suspend or restrict access to the website for anyone who
                  violates these Terms.
                </P>
              </Clause>

              <Clause index={4} id="client-obligations" title="Client Obligations">
                <P>To let us do our best work, you agree to:</P>
                <Bullets
                  items={[
                    "Provide accurate, current contact and billing information and keep it up to date.",
                    "Give our team timely access to the systems, tools, documentation, and points of contact the engagement requires.",
                    "Provide clear instructions, and reasonable notice of changes to scope, priorities, or schedule.",
                    "Hold the necessary licenses and permissions for any third-party software or data you ask us to work with.",
                    "Comply with the laws that apply to your business and to the work you direct us to perform, including privacy, employment, and marketing rules.",
                    "Refrain from soliciting or directly hiring SageStone personnel outside the terms of your service agreement.",
                  ]}
                />
                <P>
                  Delays or errors caused by incomplete access, unclear instruction, or
                  late responses are not a failure of our service, and hours reserved
                  for your engagement remain payable.
                </P>
              </Clause>

              <Clause index={5} id="payment-terms" title="Payment Terms">
                <P>
                  Fees, billing cycle, and included hours are set out in your proposal
                  or service agreement. Unless stated otherwise there:
                </P>
                <Bullets
                  items={[
                    "Recurring engagements are invoiced in advance of each service period.",
                    "Invoices are due within the period stated on the invoice, typically 15 days from the invoice date.",
                    "Fees are quoted in U.S. dollars and are exclusive of any applicable taxes, which are your responsibility.",
                    "Late balances may accrue interest at the lower of 1.5% per month or the maximum the law allows, and we may pause service on materially overdue accounts after notice.",
                    "Fees for a service period already begun are non-refundable, and unused hours do not roll over unless your agreement says they do.",
                  ]}
                />
                <P>
                  We will give reasonable advance notice — normally at least 30 days —
                  before changing rates for an ongoing engagement.
                </P>
              </Clause>

              <Clause index={6} id="confidentiality" title="Confidentiality">
                <P>
                  Each of us may receive non-public information from the other.
                  Confidential information will be used only to perform or receive the
                  services, disclosed only to people who need it and are bound by
                  comparable obligations, and protected with at least the care we use
                  for our own confidential information.
                </P>
                <P>
                  These obligations do not apply to information that is or becomes
                  public through no fault of the receiving party, was already known
                  without a duty of confidence, is independently developed, or must be
                  disclosed by law — in which case we will give notice where we are
                  permitted to.
                </P>
                <P>
                  Every SageStone team member is bound by confidentiality obligations
                  as a condition of working with us, and these obligations continue
                  after your engagement ends.
                </P>
              </Clause>

              <Clause index={7} id="third-party-platforms" title="Third-Party Platforms">
                <P>
                  Our work often runs through platforms you own or subscribe to — email
                  and calendar systems, CRMs, help desks, project management and
                  billing tools. You are responsible for those subscriptions, their
                  terms, and the access you grant us. Their availability, performance,
                  and data practices are outside our control, and we are not
                  responsible for their acts, outages, or changes.
                </P>
                <P>
                  This website may link to third-party sites. We provide those links
                  for convenience and do not endorse or take responsibility for their
                  content or privacy practices.
                </P>
              </Clause>

              <Clause index={8} id="intellectual-property" title="Intellectual Property">
                <P>
                  The SageStone name, logo, website design, copy, and materials are
                  owned by SageStone Inc. and protected by intellectual property law.
                  You may not copy, reproduce, or reuse them without our written
                  permission.
                </P>
                <P>
                  Work product created specifically for you in the course of an
                  engagement — documents, records, and deliverables built from your
                  materials — belongs to you once the related fees are paid. Your own
                  data, content, and trademarks remain yours; you grant us only the
                  license needed to perform the services.
                </P>
                <P>
                  Our underlying methods, templates, checklists, tooling, and know-how
                  remain ours, including improvements we make while working with you.
                </P>
              </Clause>

              <Clause index={9} id="text-messaging-terms" title="SMS Terms & Conditions">
                <P>
                  Sage Stone (SageStone Inc.) may communicate with prospects and clients by text message
                  (SMS and MMS) about inquiries, scheduling, and active engagements.
                  By giving consent, you agree to the following terms, which mirror
                  the SMS section of our{" "}
                  <Anchor to="/privacy">Privacy Policy</Anchor>.
                </P>

                <Callout>
                  <strong className="font-semibold text-charcoal dark:text-chalk">
                    No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. We do not sell, rent, share, or otherwise transfer mobile phone numbers or SMS consent data to any third party or affiliate for their own marketing or promotional purposes.
                  </strong>{" "}
                  Your number is used only by SageStone to communicate with you.
                </Callout>

                <SubHeading>Consent</SubHeading>
                <P>
                  We text only those who have agreed to receive messages — by checking
                  the optional consent box on our{" "}
                  <Anchor to="/contact">contact form</Anchor> (unchecked by default),
                  by replying to confirm, by texting us first, or by telling a
                  SageStone representative during a business conversation that we may
                  text you.{" "}
                  <strong className="font-semibold text-charcoal dark:text-chalk">
                    Consent to receive text messages is not a condition of any
                    purchase.
                  </strong>{" "}
                  You may work with us without ever agreeing to receive a text.
                </P>

                <SubHeading>Frequency, rates, and commands</SubHeading>
                <Bullets
                  items={[
                    <>
                      <Term>Message frequency varies</Term> — messages are sent in
                      response to your inquiry and as your engagement requires.
                    </>,
                    <>
                      <Term>Message and data rates may apply</Term> under your mobile
                      carrier's plan.
                    </>,
                    <>
                      <Term>Reply STOP</Term> to any message to opt out. You will
                      receive one confirmation and no further messages.
                    </>,
                    <>
                      <Term>Reply START</Term> to resubscribe after opting out.
                    </>,
                    <>
                      <Term>Reply HELP</Term> for help, or contact us at <MailLink />{" "}
                      or <PhoneLink />.
                    </>,
                  ]}
                />

                <SubHeading>Delivery and carrier liability</SubHeading>
                <P>
                  Delivery depends on your carrier's network and other factors outside
                  our control.{" "}
                  <strong className="font-semibold text-charcoal dark:text-chalk">
                    Carriers are not liable for delayed or undelivered messages.
                  </strong>{" "}
                  Do not rely on text messaging for urgent or emergency communication.
                  You agree to notify us if you give up or change a mobile number you
                  have given us consent for.
                </P>
              </Clause>

              <Clause index={10} id="disclaimers" title="Disclaimers">
                <P>
                  The website is provided "as is" and "as available," without
                  warranties of any kind, express or implied, including implied
                  warranties of merchantability, fitness for a particular purpose, and
                  non-infringement. We do not warrant that the site will be
                  uninterrupted, timely, secure, or error-free.
                </P>
                <P>
                  Our services are performed with reasonable skill and care, but we do
                  not guarantee particular business outcomes, revenue, savings, or
                  results. Content on this website, including case studies, is for
                  general information; results described are specific to those
                  engagements and are not a promise of what your business will
                  achieve.
                </P>
              </Clause>

              <Clause index={11} id="limitation-of-liability" title="Limitation of Liability">
                <P>
                  To the fullest extent permitted by law, SageStone and its officers,
                  employees, contractors, and agents will not be liable for indirect,
                  incidental, special, consequential, exemplary, or punitive damages,
                  or for lost profits, lost revenue, lost business, or lost or
                  corrupted data, whether in contract, tort, or any other theory, even
                  if we have been advised such damages are possible.
                </P>
                <P>
                  Our total aggregate liability arising out of or relating to these
                  Terms or our services will not exceed the fees you paid to SageStone
                  in the three months immediately preceding the event giving rise to
                  the claim.
                </P>
                <P>
                  Some jurisdictions do not allow certain limitations, so parts of this
                  section may not apply to you. Nothing here limits liability that
                  cannot lawfully be limited.
                </P>
              </Clause>

              <Clause index={12} id="termination" title="Termination">
                <P>
                  Either party may end an ongoing engagement with the notice period
                  stated in the service agreement — normally 30 days in writing. We may
                  suspend or terminate services immediately for non-payment after
                  notice, for a material breach that isn't cured within a reasonable
                  period, or where continuing would be unlawful or unsafe for our team.
                </P>
                <P>
                  On termination, you remain responsible for fees earned through the
                  effective date, and we will cooperate in an orderly handover of your
                  materials and access. Sections that by their nature should survive —
                  confidentiality, intellectual property, disclaimers, limitation of
                  liability, and payment obligations — continue after termination.
                </P>
              </Clause>

              <Clause index={13} id="modifications" title="Modifications">
                <P>
                  We may update these Terms as our services or legal obligations
                  change. The "Last updated" date at the top of this page always shows
                  the current version. For material changes affecting an active
                  engagement, we will give notice by email. Continuing to use the
                  website or our services after an update means you accept the revised
                  Terms.
                </P>
                <P>
                  We may also modify, suspend, or discontinue any part of the website
                  at any time without liability.
                </P>
              </Clause>

              <Clause index={14} id="contact" title="Contact">
                <P>Questions about these Terms are welcome:</P>
                <ul className="mt-5 flex flex-col gap-3 border-t border-border pt-6 text-[1.02rem] text-charcoal dark:text-chalk">
                  <li>SageStone Inc.</li>
                  <li>
                    Email: <MailLink />
                  </li>
                  <li>
                    Phone and text: <PhoneLink />
                  </li>
                  <li className="text-slate-olive dark:text-muted-foreground">
                    Remote-first · Global
                  </li>
                </ul>
                <P>
                  How we handle your information is described in our{" "}
                  <Anchor to="/privacy">Privacy Policy</Anchor>.
                </P>
              </Clause>
            </div>
          </div>
        </Container>
      </Section>

      <CTABand title="Ready to talk through the details?" />
    </>
  );
}

/* ---------- Local building blocks ---------- */

function Clause({
  index,
  id,
  title,
  children,
}: {
  index: number;
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mt-14 scroll-mt-32 border-t border-border pt-10 first:border-t-0">
      <h2 className="text-[1.55rem] leading-tight tracking-[-0.01em] text-charcoal dark:text-chalk md:text-[1.75rem]">
        <span className="mr-3 text-slate-olive/60 tabular-nums dark:text-muted-foreground/60">
          {index}.
        </span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-8 text-[0.78rem] uppercase tracking-[0.18em] text-gold-ink">
      {children}
    </h3>
  );
}

function P({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 text-[1.02rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
      {children}
    </p>
  );
}

function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-5 flex flex-col gap-3.5">
      {items.map((item, i) => (
        <li
          key={i}
          className="flex gap-3.5 text-[1.02rem] leading-relaxed text-slate-olive dark:text-muted-foreground"
        >
          <span className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-sage" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Term({ children }: { children: ReactNode }) {
  return <span className="font-medium text-charcoal dark:text-chalk">{children}</span>;
}

function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-6 rounded-2xl border border-sage/30 bg-sage/5 p-6 text-[1.02rem] leading-relaxed text-slate-olive dark:bg-sage/10 dark:text-muted-foreground">
      {children}
    </div>
  );
}

const linkClass =
  "text-sage-ink underline decoration-sage/40 underline-offset-4 transition-colors hover:text-sage dark:text-sage dark:hover:text-sage-deep";

function Anchor({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} className={linkClass}>
      {children}
    </Link>
  );
}

function MailLink() {
  return (
    <a href="mailto:hello@sagestoneinc.com" className={linkClass}>
      hello@sagestoneinc.com
    </a>
  );
}

function PhoneLink() {
  return (
    <a href="tel:+12149452234" className={linkClass}>
      +1 (214) 945-2234
    </a>
  );
}
