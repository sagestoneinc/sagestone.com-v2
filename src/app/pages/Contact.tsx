import { useState } from "react";
import { Check, Mail, Phone } from "lucide-react";
import { Container, Section, Eyebrow, Button } from "../components/ui-brand/primitives";
import { services } from "../content/site";
import { SeoHead } from "../seo/SeoHead";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const update = (key: string, value: string) => setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Note: hook this up to your backend or scheduling provider.
    setSubmitted(true);
  };

  const inputBase =
    "w-full rounded-xl border border-border bg-input-background px-4 py-3 text-[0.98rem] text-charcoal placeholder:text-slate-olive/60 transition-colors focus:border-sage focus:outline-none focus:ring-2 focus:ring-sage/20 dark:text-chalk dark:placeholder:text-muted-foreground";

  return (
    <>
      <SeoHead
        title="Book a Discovery Call | SageStone Inc"
        description="Contact SageStone to discuss virtual assistant, operations support and customer support outsourcing needs for your business."
        path="/contact"
        indexable={false}
      />
      <Section className="pt-40 pb-28 md:pt-48">
        <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Left: intro + details */}
          <div>
            <Eyebrow className="mb-7">Book a Call</Eyebrow>
            <h1 className="text-[2.9rem] leading-[1.0] tracking-[-0.03em] text-charcoal dark:text-chalk md:text-[4rem]">
              Let's talk about the support you need.
            </h1>
            <p className="mt-6 max-w-md text-[1.1rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
              Share a little about your business and we'll follow up to schedule a
              focused discovery call. No pressure, no scripts — just a clear
              conversation about how SageStone can help.
            </p>

            <div className="mt-10 flex flex-col divide-y divide-border border-t border-border">
              {[
                { label: "Response time", text: "Within one business day." },
                { label: "Discovery call", text: "A focused 30-minute conversation." },
                { label: "Confidentiality", text: "Your details are kept private." },
              ].map((item) => (
                <div key={item.label} className="grid grid-cols-[10rem_1fr] items-baseline gap-4 py-5">
                  <span className="text-[0.72rem] uppercase tracking-[0.18em] text-slate-olive dark:text-muted-foreground">
                    {item.label}
                  </span>
                  <span className="text-[1rem] text-charcoal dark:text-chalk">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3 border-t border-border pt-8 text-[0.98rem] text-slate-olive dark:text-muted-foreground">
              <a href="mailto:hello@sagestone.co" className="flex items-center gap-3 transition-colors hover:text-sage">
                <Mail className="h-4 w-4 text-sage" /> hello@sagestone.co
              </a>
              <a href="tel:+15550184420" className="flex items-center gap-3 transition-colors hover:text-sage">
                <Phone className="h-4 w-4 text-sage" /> +1 (555) 018-4420
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[0_18px_40px_-28px_rgba(34,38,34,0.4)] md:p-10">
            {submitted ? (
              <div className="flex h-full min-h-[400px] flex-col items-center justify-center text-center">
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-sage/15 text-sage">
                  <Check className="h-8 w-8" />
                </span>
                <h2 className="mt-6 text-[1.8rem] text-charcoal dark:text-chalk">Thank you.</h2>
                <p className="mt-3 max-w-sm text-[1.02rem] leading-relaxed text-slate-olive dark:text-muted-foreground">
                  We've received your details and will be in touch within one business
                  day to arrange your discovery call.
                </p>
                <Button className="mt-8" variant="secondary" onClick={() => setSubmitted(false)}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full name">
                    <input required value={form.name} onChange={(e) => update("name", e.target.value)} className={inputBase} placeholder="Jane Doe" />
                  </Field>
                  <Field label="Work email">
                    <input required type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputBase} placeholder="jane@company.com" />
                  </Field>
                </div>
                <Field label="Company">
                  <input value={form.company} onChange={(e) => update("company", e.target.value)} className={inputBase} placeholder="Company name" />
                </Field>
                <Field label="What do you need support with?">
                  <select value={form.service} onChange={(e) => update("service", e.target.value)} className={inputBase}>
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.title}>{s.title}</option>
                    ))}
                    <option value="Not sure yet">Not sure yet</option>
                  </select>
                </Field>
                <Field label="Tell us a little more">
                  <textarea rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} className={`${inputBase} resize-none`} placeholder="A sentence or two about your business and what you're hoping to solve." />
                </Field>
                <Button type="submit" size="lg" className="mt-2 w-full">
                  Book a Discovery Call
                </Button>
                <p className="text-center text-[0.82rem] text-slate-olive dark:text-muted-foreground">
                  By submitting, you agree to be contacted about your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
        </Container>
      </Section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[0.9rem] font-medium text-charcoal dark:text-chalk">{label}</span>
      {children}
    </label>
  );
}
