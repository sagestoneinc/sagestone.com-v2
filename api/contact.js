/**
 * POST /api/contact: the website's contact form endpoint (Vercel Function).
 *
 * Checks the submission with the same rules as the form, then sends two
 * emails through ZeptoMail:
 *   1. a notification to the team (reply-to: the person who submitted), and
 *   2. a fixed-text confirmation to the person who submitted.
 *
 * The ZeptoMail token stays on the server; it is never sent to the browser.
 * Configuration (Vercel → Settings → Environment Variables):
 *   ZEPTOMAIL_TOKEN     required. Send Mail token from the ZeptoMail Mail Agent.
 *   ZEPTOMAIL_API_URL   optional. Defaults to the US data centre; set it for
 *                       EU/IN/AU accounts, e.g. https://api.zeptomail.eu/v1.1/email
 *   CONTACT_FROM        optional. Defaults to noreply@sagestoneinc.com. Must be
 *                       on a domain verified in ZeptoMail.
 *   CONTACT_TO          optional. Defaults to hello@sagestoneinc.com.
 *
 * See docs/contact-form-setup.md.
 */

import { validateContact, COMPANY_MAX } from "../src/app/lib/contact-rules.js";

const DEFAULT_API_URL = "https://api.zeptomail.com/v1.1/email";
const DEFAULT_FROM = "noreply@sagestoneinc.com";
const DEFAULT_TO = "hello@sagestoneinc.com";
const MAX_BODY_BYTES = 20_000;

// Browsers always send Origin on a cross-site POST. Refusing other origins
// stops other sites from using this endpoint as a mail relay.
const ALLOWED_ORIGIN = /^https:\/\/(www\.)?sagestoneinc\.com$|^https:\/\/sagestone-website-[a-z0-9-]+\.vercel\.app$|^http:\/\/localhost(:\d+)?$/;

export async function POST(request) {
  const origin = request.headers.get("origin");
  if (origin && !ALLOWED_ORIGIN.test(origin)) {
    return json(403, { error: "forbidden" });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json(413, { error: "too_large" });

  let data;
  try {
    data = JSON.parse(raw);
  } catch {
    return json(400, { error: "invalid_json" });
  }
  if (!data || typeof data !== "object") return json(400, { error: "invalid_json" });

  // Honeypot: real people leave this hidden field empty. Report success so
  // bots don't retry, but send nothing.
  if (typeof data.website === "string" && data.website.trim()) {
    return json(200, { ok: true });
  }

  const fields = validateContact(data);
  if (Object.keys(fields).length) return json(400, { error: "invalid", fields });

  const token = process.env.ZEPTOMAIL_TOKEN?.trim();
  if (!token) {
    console.error("contact: ZEPTOMAIL_TOKEN is not set");
    return json(503, { error: "not_configured" });
  }

  const submission = {
    name: clean(data.name, 100),
    email: clean(data.email, 254),
    phone: clean(data.phone, 25),
    company: clean(data.company, COMPANY_MAX),
    service: clean(data.service, 80),
    message: clean(data.message, 2000),
    smsConsent: data.smsConsent === true,
    smsConsentAt: data.smsConsent === true ? clean(data.smsConsentAt, 40) : "",
    page: clean(data.page, 200),
    userAgent: clean(request.headers.get("user-agent"), 300),
    receivedAt: new Date().toISOString(),
  };

  const mail = mailer(token);

  // The team notification is the one that matters: if it fails, the visitor
  // is told so they can email instead.
  try {
    await mail(notification(submission));
  } catch (err) {
    console.error("contact: notification failed", err);
    return json(502, { error: "send_failed" });
  }

  // The confirmation is a courtesy. The team already has the enquiry, so a
  // bounce here shouldn't turn the submission into a failure.
  try {
    await mail(confirmation(submission));
  } catch (err) {
    console.error("contact: confirmation failed", err);
  }

  return json(200, { ok: true });
}

function mailer(token) {
  const url = process.env.ZEPTOMAIL_API_URL?.trim() || DEFAULT_API_URL;
  // The ZeptoMail console shows the token with its "Zoho-enczapikey" prefix;
  // accept it with or without.
  const auth = /^Zoho-enczapikey\s/i.test(token) ? token : `Zoho-enczapikey ${token}`;

  return async (message) => {
    const res = await fetch(url, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: auth },
      body: JSON.stringify(message),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) {
      throw new Error(`ZeptoMail ${res.status}: ${(await res.text()).slice(0, 500)}`);
    }
  };
}

function from(name) {
  return { address: process.env.CONTACT_FROM?.trim() || DEFAULT_FROM, name };
}

function notification(s) {
  const to = process.env.CONTACT_TO?.trim() || DEFAULT_TO;
  const consent = s.smsConsent ? `YES, via web form${s.smsConsentAt ? ` at ${s.smsConsentAt}` : ""}` : "no";
  const rows = [
    ["Name", s.name],
    ["Email", s.email],
    ["Phone", s.phone],
    ["Company", s.company],
    ["Service", s.service],
    ["SMS consent", consent],
    ["Page", s.page],
    ["Received", s.receivedAt],
    ["User agent", s.userAgent],
  ];

  const text = [
    "New contact form submission from sagestoneinc.com",
    "",
    ...rows.slice(0, 5).map(([k, v]) => `${`${k}:`.padEnd(10)} ${v || "—"}`),
    "",
    "Message:",
    s.message,
    "",
    "---",
    ...rows.slice(5).map(([k, v]) => `${`${k}:`.padEnd(12)} ${v || "—"}`),
  ].join("\n");

  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.55;color:#222622;max-width:620px">` +
    `<p style="margin:0 0 12px">New contact form submission from sagestoneinc.com</p>` +
    `<table cellpadding="6" style="border-collapse:collapse">` +
    rows
      .slice(0, 5)
      .map(([k, v]) => `<tr><td style="color:#5d6659;vertical-align:top">${k}</td><td>${escapeHtml(v) || "—"}</td></tr>`)
      .join("") +
    `</table>` +
    `<p style="margin:16px 0 4px;color:#5d6659">Message</p>` +
    `<p style="margin:0;white-space:pre-wrap">${escapeHtml(s.message)}</p>` +
    `<hr style="border:none;border-top:1px solid #ddd;margin:20px 0">` +
    `<table cellpadding="4" style="border-collapse:collapse;font-size:12px;color:#5d6659">` +
    rows
      .slice(5)
      .map(([k, v]) => `<tr><td style="vertical-align:top">${k}</td><td>${escapeHtml(v) || "—"}</td></tr>`)
      .join("") +
    `</table></div>`;

  return {
    from: from("SageStone Website"),
    to: [{ email_address: { address: to, name: "SageStone" } }],
    reply_to: [{ address: s.email, name: s.name }],
    subject: `New enquiry: ${s.name}`,
    textbody: text,
    htmlbody: html,
  };
}

/**
 * Deliberately fixed text: it never repeats what the person typed, so the form
 * can't be used to send arbitrary content to someone else's inbox.
 */
function confirmation(s) {
  let firstName = s.name.split(/\s+/)[0].slice(0, 40);
  // Names only: anything that looks like a link or address becomes "there".
  if (!/^[\p{L}'’-]+$/u.test(firstName)) firstName = "there";
  const to = process.env.CONTACT_TO?.trim() || DEFAULT_TO;

  const text = [
    `Hi ${firstName},`,
    "",
    "Thank you for reaching out to SageStone. We have received your inquiry, and",
    "one of our team members will reach out as soon as we can, usually within",
    "one business day.",
    "",
    "If you need to add anything in the meantime, just reply to this email.",
    "",
    "Warm regards,",
    "The SageStone Team",
    "https://www.sagestoneinc.com",
  ].join("\n");

  const html =
    `<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#222622;max-width:560px">` +
    `<p>Hi ${escapeHtml(firstName)},</p>` +
    `<p>Thank you for reaching out to SageStone. We have received your inquiry, and one of our team members will reach out as soon as we can, usually within one business day.</p>` +
    `<p>If you need to add anything in the meantime, just reply to this email.</p>` +
    `<p>Warm regards,<br>The SageStone Team<br>` +
    `<a href="https://www.sagestoneinc.com" style="color:#4f5a4a">sagestoneinc.com</a></p>` +
    `</div>`;

  return {
    from: from("SageStone"),
    to: [{ email_address: { address: s.email, name: s.name } }],
    reply_to: [{ address: to, name: "SageStone" }],
    subject: "We received your inquiry - SageStone",
    textbody: text,
    htmlbody: html,
  };
}

function clean(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function json(status, body) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}
