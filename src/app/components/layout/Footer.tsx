import { Link } from "react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Monogram } from "../brand/Logo";
import { Container } from "../ui-brand/primitives";

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Solutions", to: "/solutions" },
  { label: "Experience", to: "/experience" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const serviceLinks = [
  { title: "Business Operations Support", path: "/business-operations-support" },
  { title: "Ecommerce Virtual Assistant Services", path: "/ecommerce-virtual-assistant" },
  { title: "GoHighLevel Virtual Assistant Services", path: "/gohighlevel-virtual-assistant" },
  { title: "Website Maintenance Support", path: "/web-maintenance-support" },
  { title: "Customer Support Outsourcing", path: "/customer-support-outsourcing" },
];

export function Footer() {
  return (
    <footer className="bg-pine text-chalk">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Monogram className="h-9 w-auto text-sage" />
              <span
                className="text-[1.5rem] leading-none"
                style={{ fontFamily: "var(--font-display)", fontWeight: 600 }}
              >
                Sage<span className="text-sage">Stone</span>
              </span>
            </div>
            <p className="mt-5 text-[0.98rem] leading-relaxed text-chalk/60">
              Structured remote support for growth-focused businesses. Dependable
              talent, operational excellence — built for scale.
            </p>
            <p className="mt-6 text-[0.75rem] uppercase tracking-[0.24em] text-gold">
              Supporting Ambition · Delivering Excellence
            </p>
          </div>

          <FooterCol title="Services">
            {serviceLinks.map((s) => (
              <FooterLink key={s.path} to={s.path}>
                {s.title}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            {companyLinks.map((l) => (
              <FooterLink key={l.to} to={l.to}>
                {l.label}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <li className="flex items-start gap-3 text-[0.95rem] text-chalk/60">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
              hello@sagestone.co
            </li>
            <li className="flex items-start gap-3 text-[0.95rem] text-chalk/60">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
              +1 (555) 018-4420
            </li>
            <li className="flex items-start gap-3 text-[0.95rem] text-chalk/60">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
              Remote-first · Global
            </li>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-chalk/10 pt-8 text-[0.85rem] text-chalk/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SageStone. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-chalk">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-chalk">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="text-[0.78rem] uppercase tracking-[0.2em] text-chalk/40" style={{ fontFamily: "var(--font-body)", fontWeight: 500 }}>
        {title}
      </h4>
      <ul className="mt-5 flex flex-col gap-3">{children}</ul>
    </div>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <li>
      <Link to={to} className="text-[0.95rem] text-chalk/60 transition-colors hover:text-sage">
        {children}
      </Link>
    </li>
  );
}
