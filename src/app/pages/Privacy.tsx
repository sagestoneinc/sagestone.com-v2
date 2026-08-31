import type { ReactNode } from "react";
import { Link } from "react-router";
import { Container, Section } from "../components/ui-brand/primitives";
import { PageHero, CTABand } from "../components/ui-brand/components";

const LAST_UPDATED = "August 31, 2026";

const sections = [
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use-information", title: "How We Use Information" },
  { id: "sms-and-text-messaging", title: "SMS and Text Messaging" },
  { id: "how-we-share-information", title: "How We Share Information" },
  { id: "cookies-and-analytics", title: "Cookies and Analytics" },
  { id: "data-security", title: "Data Security" },
  { id: "data-retention", title: "Data Retention" },
  { id: "your-rights-and-choices", title: "Your Rights and Choices" },
  { id: "international-transfers", title: "International Transfers" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "changes-to-this-policy", title: "Changes to This Policy" },
  { id: "contact-us", title: "Contact Us" },
];

export function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="How SageStone Inc. collects, uses, and protects the information you share with us — including the mobile numbers we use for text messaging."
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
                SageStone Inc. ("SageStone," "we," "us," or "our") provides structured
                remote support services to growth-focused businesses. This Privacy
                Policy explains what information we collect through our website,
                our forms, and our conversations with you, how we use it, and the
                choices you have. It applies to sagestoneinc.com and to the business
                communications we send, including email and text messages.
              </P>

              <Clause index={1} id="information-we-collect" title="Information We Collect">
                <P>We collect only what we need to respond to you and deliver our services:</P>
                <Bullets
                  items={[
                    <>
                      <Term>Information you give us.</Term> Your name, work email
                      address, company name, mobile or business phone number, the
                      service you're interested in, and anything you write in a
                      message to us — through our contact form, by email, by text,
                      or during a call.
                    </>,
                    <>
                      <Term>Engagement information.</Term> Details you share while we
                      scope or deliver work: role requirements, workflows, schedules,
                      points of contact, and the operational context we need to
                      support your team.
                    </>,
                    <>
                      <Term>Technical information.</Term> Standard information your
                      browser sends when you visit our site — IP address, browser and
                      device type, referring page, and the pages you view — along with
                      aggregate usage measurements.
                    </>,
                    <>
                      <Term>Communications records.</Term> Records of messages between
                      us, including the date and time of text messages, your consent
                      status, and any opt-out requests.
                    </>,
                  ]}
                />
                <P>
                  We do not ask for and do not want sensitive personal information —
                  government identifiers, financial account credentials, or health
                  information — through our website forms.
                </P>
              </Clause>

              <Clause index={2} id="how-we-use-information" title="How We Use Information">
                <P>We use the information described above to:</P>
                <Bullets
                  items={[
                    "Respond to your inquiry and schedule a discovery call.",
                    "Provide, staff, and support the services you engage us for.",
                    "Send service and account communications — scheduling, updates, invoices, and operational notices.",
                    "Send business messages you have consented to receive, including text messages.",
                    "Maintain records of consent, opt-outs, and message delivery as required by carrier and regulatory rules.",
                    "Improve our website, our service offerings, and the quality of our support.",
                    "Protect against fraud, abuse, and security incidents, and meet our legal obligations.",
                  ]}
                />
                <P>
                  We do not use your information to build advertising profiles, and we
                  do not sell it.
                </P>
              </Clause>

              <Clause index={3} id="sms-and-text-messaging" title="SMS and Text Messaging">
                <P>
                  SageStone uses text messaging (SMS and MMS) to communicate with
                  business prospects and clients about inquiries, scheduling, and
                  active engagements. This section explains how that program works.
                </P>

                <Callout>
                  <strong className="font-semibold text-charcoal dark:text-chalk">
                    We do not sell, rent, share, or otherwise transfer mobile phone
                    numbers or SMS consent data to any third party or affiliate for
                    their own marketing or promotional purposes.
                  </strong>{" "}
                  Mobile numbers collected for text messaging are used solely by
                  SageStone to communicate with you.
                </Callout>

                <SubHeading>How we obtain your consent</SubHeading>
                <P>
                  We send text messages only to people who have agreed to receive
                  them. Consent may be given in any of the following ways:
                </P>
                <Bullets
                  items={[
                    <>
                      <Term>Web form.</Term> By checking the optional SMS consent box
                      on our <Anchor to="/contact">contact form</Anchor>, which is
                      unchecked by default.
                    </>,
                    <>
                      <Term>Reply to a message.</Term> By replying to confirm consent
                      after we ask for it.
                    </>,
                    <>
                      <Term>Inbound text.</Term> By texting us first at the number we
                      publish, which we treat as consent to reply to you about your
                      inquiry.
                    </>,
                    <>
                      <Term>Verbal consent.</Term> By telling a SageStone
                      representative during a business conversation that we may text
                      you. We record the date and substance of that consent.
                    </>,
                  ]}
                />
                <P>
                  <strong className="font-semibold text-charcoal dark:text-chalk">
                    Consent to receive text messages is not a condition of any
                    purchase.
                  </strong>{" "}
                  You can contact us, request a proposal, and work with SageStone
                  without ever agreeing to receive a text message. Declining SMS will
                  not affect the service you receive.
                </P>

                <SubHeading>Message frequency, rates, and support</SubHeading>
                <Bullets
                  items={[
                    <>
                      <Term>Message frequency varies.</Term> We text in response to
                      your inquiry and as your engagement requires, so the number of
                      messages depends on the conversation. We do not send bulk
                      promotional blasts on a fixed schedule.
                    </>,
                    <>
                      <Term>Message and data rates may apply.</Term> Your mobile
                      carrier's standard messaging and data charges apply to messages
                      you send and receive. Check your plan if you're unsure.
                    </>,
                    <>
                      <Term>Reply STOP to opt out.</Term> Text STOP to any message
                      from us at any time and we will stop sending you text messages.
                      You'll receive one confirmation that you've been unsubscribed.
                    </>,
                    <>
                      <Term>Reply START to resubscribe.</Term> If you opt out and
                      later want to resume, text START to the same number.
                    </>,
                    <>
                      <Term>Reply HELP for help.</Term> Text HELP for support
                      information, or email us at{" "}
                      <MailLink /> or call{" "}
                      <PhoneLink />.
                    </>,
                  ]}
                />
                <P>
                  Opting out of text messages does not opt you out of email or phone
                  contact about an active engagement, and it does not cancel any
                  agreement between us.
                </P>

                <SubHeading>Delivery and carrier liability</SubHeading>
                <P>
                  Message delivery depends on your mobile carrier's network and on
                  factors outside our control.{" "}
                  <strong className="font-semibold text-charcoal dark:text-chalk">
                    Carriers are not liable for delayed or undelivered messages.
                  </strong>{" "}
                  Please don't rely on text messaging for time-critical or emergency
                  communication.
                </P>
                <P>
                  Text messaging is supported on most major U.S. carriers. Service
                  availability may vary, and we may change or discontinue our
                  messaging program at any time.
                </P>
              </Clause>

              <Clause index={4} id="how-we-share-information" title="How We Share Information">
                <P>
                  We do not sell your personal information. We share it only in these
                  limited circumstances:
                </P>
                <Bullets
                  items={[
                    <>
                      <Term>Service providers.</Term> Vendors who operate our business
                      on our behalf — website hosting, email and messaging delivery,
                      scheduling, analytics, and accounting. They may use your
                      information only to perform services for us, under contract, and
                      never for their own marketing.
                    </>,
                    <>
                      <Term>Team members assigned to your account.</Term> The
                      SageStone personnel who deliver your engagement, limited to what
                      their role requires.
                    </>,
                    <>
                      <Term>Legal and safety.</Term> When required by law, subpoena,
                      or regulation, or to protect the rights, property, or safety of
                      SageStone, our clients, or others.
                    </>,
                    <>
                      <Term>Business transfers.</Term> In connection with a merger,
                      acquisition, or sale of assets, subject to this Policy
                      continuing to apply to the information transferred.
                    </>,
                  ]}
                />
                <Callout>
                  Mobile phone numbers and SMS consent data are treated separately and
                  more strictly than other information.{" "}
                  <strong className="font-semibold text-charcoal dark:text-chalk">
                    They are never sold, rented, shared, or transferred to any third
                    party or affiliate for that party's own marketing or promotional
                    purposes.
                  </strong>{" "}
                  See{" "}
                  <a
                    href="#sms-and-text-messaging"
                    className="text-sage-ink underline decoration-sage/40 underline-offset-4 transition-colors hover:text-sage dark:text-sage dark:hover:text-sage-deep"
                  >
                    SMS and Text Messaging
                  </a>{" "}
                  above for the full terms of our messaging program.
                </Callout>
              </Clause>

              <Clause index={5} id="cookies-and-analytics" title="Cookies and Analytics">
                <P>
                  Our website uses a small number of cookies and privacy-conscious
                  analytics to understand which pages are useful and to keep the site
                  working correctly. These measurements are aggregate — we use them to
                  see how the site performs, not to track individuals across the web.
                </P>
                <P>
                  You can block or delete cookies in your browser settings. The site
                  will continue to work, though some preferences may not persist
                  between visits. We do not respond to browser "Do Not Track" signals,
                  as no common standard for them has been adopted.
                </P>
              </Clause>

              <Clause index={6} id="data-security" title="Data Security">
                <P>
                  We use administrative, technical, and physical safeguards
                  appropriate to the information we hold: encrypted connections
                  (HTTPS) across our site, access limited to personnel who need it,
                  multi-factor authentication on business systems, and confidentiality
                  obligations for everyone on our team. No method of transmission or
                  storage is completely secure, so we cannot guarantee absolute
                  security, but we take these obligations seriously and review them
                  regularly.
                </P>
              </Clause>

              <Clause index={7} id="data-retention" title="Data Retention">
                <P>
                  We keep information only as long as we need it for the purpose it
                  was collected, and then for as long as required to meet legal, tax,
                  and record-keeping obligations. Inquiry details from prospects who
                  don't become clients are kept for a limited period and then deleted.
                  Engagement records are retained for the life of the engagement and a
                  reasonable period afterward.
                </P>
                <P>
                  Records of SMS consent and opt-out requests are retained for as long
                  as our messaging program operates, and afterward as needed to
                  demonstrate compliance — including honoring an opt-out so we do not
                  message you again.
                </P>
              </Clause>

              <Clause index={8} id="your-rights-and-choices" title="Your Rights and Choices">
                <P>
                  Depending on where you live, you may have the right to request
                  access to the personal information we hold about you, to correct it,
                  to request its deletion, to obtain a portable copy, or to object to
                  or restrict certain processing. You also have the right not to be
                  discriminated against for exercising these rights.
                </P>
                <P>Regardless of location, you can always:</P>
                <Bullets
                  items={[
                    "Reply STOP to any text message to stop receiving them.",
                    "Use the unsubscribe link in any marketing email.",
                    "Email us to ask what we hold, to correct it, or to ask us to delete it.",
                  ]}
                />
                <P>
                  To make a request, email <MailLink />. We'll verify your identity
                  before acting and respond within the timeframe the applicable law
                  requires.
                </P>
              </Clause>

              <Clause index={9} id="international-transfers" title="International Transfers">
                <P>
                  SageStone is based in the United States and works with team members
                  and service providers in other countries, including the Philippines.
                  Information you share with us may be transferred to, stored in, and
                  processed in countries whose data protection laws differ from those
                  where you live.
                </P>
                <P>
                  Where we transfer information internationally, we do so under
                  contractual protections requiring recipients to safeguard it
                  consistently with this Policy and to use it only for the purposes we
                  specify.
                </P>
              </Clause>

              <Clause index={10} id="childrens-privacy" title="Children's Privacy">
                <P>
                  Our website and services are intended for businesses and the adults
                  who run them. We do not knowingly collect personal information from
                  anyone under 18, and we do not send text messages to numbers we know
                  to belong to minors. If you believe a child has provided us with
                  personal information, email <MailLink /> and we will delete it.
                </P>
              </Clause>

              <Clause index={11} id="changes-to-this-policy" title="Changes to This Policy">
                <P>
                  We may update this Privacy Policy as our services, our tools, or the
                  law change. When we do, we'll revise the "Last updated" date at the
                  top of this page. If a change materially affects how we use your
                  information — including how we use mobile numbers for text
                  messaging — we'll give you notice by email or text before it takes
                  effect. Continuing to use our website or services after an update
                  means you accept the revised Policy.
                </P>
              </Clause>

              <Clause index={12} id="contact-us" title="Contact Us">
                <P>
                  Questions about this Policy, about the information we hold, or about
                  our text messaging program are welcome:
                </P>
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
                  Our <Anchor to="/terms">Terms of Service</Anchor> govern your use of
                  this website and our services.
                </P>
              </Clause>
            </div>
          </div>
        </Container>
      </Section>

      <CTABand title="Questions before we start? Let's talk." />
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
