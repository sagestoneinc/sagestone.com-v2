/**
 * Contact form submission.
 *
 * Posts to a Google Apps Script Web App, which appends the submission to the
 * SageStone submissions spreadsheet and emails hello@sagestoneinc.com.
 * See docs/contact-form-setup.md.
 */

export type ContactForm = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  /** Optional. Never required to submit — consent cannot be a condition of contact. */
  smsConsent: boolean;
  /** Honeypot: hidden from real users, so anything here means a bot. */
  website: string;
};

export type ContactPayload = ContactForm & {
  smsConsentSource: string | null;
  smsConsentAt: string | null;
  page: string;
  userAgent: string;
};

const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;

export type ContactErrors = Partial<Record<"name" | "email" | "phone" | "service" | "message", string>>;

/** Fields in the order they appear on the page, so focus goes to the first error. */
export const FIELD_ORDER = ["name", "email", "phone", "service", "message"] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const MESSAGE_MIN = 20;
export const MESSAGE_MAX = 2000;

/**
 * Required: name, email, service, and a short message. Phone is optional, but
 * it has to look like a real number when given, and it's required when the
 * visitor opts in to texts (consent without a number can't be honoured).
 * scripts/contact-form.gs repeats these checks server-side.
 */
export function validateContact(form: ContactForm): ContactErrors {
  const errors: ContactErrors = {};
  const name = form.name.trim();
  const email = form.email.trim();
  const phoneDigits = form.phone.replace(/\D/g, "");
  const message = form.message.trim();

  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Please enter your full name.";

  if (!email) errors.email = "Please enter your email address.";
  else if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address, like jane@company.com.";

  if (form.phone.trim() && (phoneDigits.length < 7 || phoneDigits.length > 15 || /[^\d\s()+.-]/.test(form.phone))) {
    errors.phone = "Please enter a valid phone number, including the area code.";
  } else if (form.smsConsent && !phoneDigits) {
    errors.phone = "Please enter a mobile number to receive text messages, or untick the SMS box.";
  }

  if (!form.service) errors.service = "Please choose what you need help with. Pick “Not sure yet” if you’re undecided.";

  if (!message) errors.message = "Please tell us a little about what you need.";
  else if (message.length < MESSAGE_MIN) errors.message = `Please add a bit more detail (at least ${MESSAGE_MIN} characters).`;
  else if (message.length > MESSAGE_MAX) errors.message = `Please keep your message under ${MESSAGE_MAX} characters.`;

  return errors;
}

export function buildPayload(form: ContactForm): ContactPayload {
  return {
    ...form,
    // Carrier review requires a record of how and when SMS consent was captured.
    smsConsentSource: form.smsConsent ? "web form" : null,
    smsConsentAt: form.smsConsent ? new Date().toISOString() : null,
    page: typeof window === "undefined" ? "" : window.location.pathname,
    userAgent: typeof navigator === "undefined" ? "" : navigator.userAgent,
  };
}

export class ContactConfigError extends Error {}

/**
 * Apps Script Web Apps don't answer CORS preflight, so this sends a "simple"
 * request: text/plain body, no custom headers, mode "no-cors". The trade-off is
 * that the response is opaque — a delivered submission and a server-side error
 * look identical here. Only genuine network failures reject. The script emails
 * on every submission, so a silent server-side failure shows up as a missing
 * email rather than passing unnoticed.
 *
 * Deliberately NOT retried on failure: a retry after an ambiguous result would
 * duplicate rows and notification emails.
 */
export async function submitContact(form: ContactForm): Promise<void> {
  if (!ENDPOINT) {
    throw new ContactConfigError(
      "VITE_CONTACT_ENDPOINT is not set — the contact form has no endpoint to post to."
    );
  }

  await fetch(ENDPOINT, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(buildPayload(form)),
  });
}
