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
