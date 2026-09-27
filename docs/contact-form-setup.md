# Contact form setup

The contact form posts to the site's own serverless function,
[`api/contact.js`](../api/contact.js), which runs on Vercel and sends email
through **ZeptoMail**:

1. It checks the submission again, using the same rules as the form
   ([`src/app/lib/contact-rules.js`](../src/app/lib/contact-rules.js)).
2. It emails a notification to `hello@sagestoneinc.com`. Reply-to is the person
   who submitted, so you can answer straight from the notification.
3. It emails the person a confirmation that their inquiry was received.
   Reply-to is `hello@sagestoneinc.com`.

Both emails come from `noreply@sagestoneinc.com`. The ZeptoMail token stays on
the server and is never sent to the browser.

## One-time setup

### 1. ZeptoMail

1. In ZeptoMail, make sure `sagestoneinc.com` is a **verified domain**
   (SPF and DKIM records added). Otherwise, ZeptoMail refuses to send from
   `noreply@sagestoneinc.com`.
2. Open **Mail Agents** → your agent (or create one, for example "Website") →
   **SMTP/API** → **API**, and copy the **Send Mail token**. It is shown as
   `Zoho-enczapikey …`; paste it with or without that prefix.

### 2. Vercel

Add the environment variables in **Project → Settings → Environment Variables**
(Production and Preview):

| Variable | Required | Value |
| --- | --- | --- |
| `ZEPTOMAIL_TOKEN` | yes | The Send Mail token from step 1 |
| `ZEPTOMAIL_API_URL` | no | Only for non-US ZeptoMail accounts, for example `https://api.zeptomail.eu/v1.1/email` (EU) or `https://api.zeptomail.in/v1.1/email` (India). Defaults to the US endpoint. |
| `CONTACT_FROM` | no | Defaults to `noreply@sagestoneinc.com` |
| `CONTACT_TO` | no | Defaults to `hello@sagestoneinc.com` |

Then **redeploy**. Environment variables are only picked up by new deployments.

The old `VITE_CONTACT_ENDPOINT` variable is no longer used and can be deleted.

### 3. Test

Submit the form on the live site. You should receive the notification at
hello@, and the address you entered should receive the confirmation. If the
form shows an error instead, check **Vercel → Project → Logs**, filtered to
`/api/contact`. The function logs the ZeptoMail error message there.

## Email branding

Both emails use a branded layout (logo header, white card, contact footer)
defined in `layout()` in `api/contact.js`. It uses tables and inline styles
only, so it renders the same in Gmail, Outlook and Apple Mail. The logo is
served from the site at `/email/logo.png`.

The brand images are generated from the site's monogram and Fraunces font.
Re-run this after a logo change:

```
node scripts/email/generate-email-assets.mjs
```

It writes:

| File | Used for |
| --- | --- |
| `public/email/logo.png` | Email header logo |
| `public/email/avatar.png` | Profile photo for noreply@ / Gravatar |
| `public/brand/bimi.svg` | BIMI logo (sender avatar in the inbox) |

### Showing the logo as the sender avatar (BIMI)

The round avatar next to the sender name isn't part of the email itself. The
recipient's mail provider draws it, and it reads it from DNS through **BIMI**.
To set it up:

1. **Enforce DMARC.** BIMI only works with an enforced DMARC policy. First make
   sure every service that sends as `@sagestoneinc.com` (ZeptoMail, your
   mailbox provider, any newsletter tool) passes SPF and DKIM. Then set the
   `_dmarc.sagestoneinc.com` TXT record to at least:

   ```
   v=DMARC1; p=quarantine; pct=100; rua=mailto:hello@sagestoneinc.com
   ```

   If DMARC isn't set up yet, start with `p=none` for a week or two and read the
   reports before switching to `quarantine`. An enforced policy with a
   misconfigured sender sends real mail to spam.
2. **Publish the logo record.** Add a TXT record:

   ```
   Host:  default._bimi
   Value: v=BIMI1; l=https://www.sagestoneinc.com/brand/bimi.svg;
   ```

3. **Check it** with a BIMI inspector, such as the one on bimigroup.org.

Without a certificate, this shows the logo in Yahoo, AOL, Fastmail and other
providers that support BIMI. **Gmail and Apple Mail also need a mark
certificate:**

- A **VMC** requires a registered trademark.
- A **CMC** requires no trademark, but the logo must have been in public use
  for at least a year.

Both are bought from DigiCert, Sectigo or GlobalSign. Once issued, add
`a=https://…/certificate.pem;` to the BIMI record.

**Quick fix for your own inbox:** add `noreply@sagestoneinc.com` as a contact
in the hello@ mailbox, with `public/email/avatar.png` as its photo. Gravatar
(gravatar.com, signed up with noreply@) covers some other mail apps.

## Validation

Required: name, email, the service they need help with ("Not sure yet" is an
option), and a message of at least 20 characters. Phone is optional, but it
must look like a real number (7–15 digits) when given, and it is required when
the visitor ticks the SMS consent box.

The form shows errors next to each field. The server repeats the checks, so
requests that bypass the form are rejected without sending email. Both use
`validateContact` in `src/app/lib/contact-rules.js`, so there is one place to
change the rules.

## How the function responds

| Situation | Status | What the visitor sees |
| --- | --- | --- |
| Sent | 200 | Thank-you message |
| Validation failed | 400 | The server's error next to each field |
| `ZEPTOMAIL_TOKEN` not set | 503 | "This form isn't connected yet…", with the hello@ address |
| ZeptoMail rejected the notification | 502 | "Something went wrong…", with the hello@ address |
| Honeypot field filled (a bot) | 200 | Nothing is sent |

If only the confirmation fails (for example, the visitor mistyped their address
and it bounced), the submission still counts as sent, because the team already
has it.

Requests from other websites are refused. Only `sagestoneinc.com`, this
project's Vercel previews, and `localhost` are allowed.

## SMS consent records

Carriers can ask for proof that a texted number opted in. The notification
email records the number, whether consent was given, when, and from which
page. Keep those emails, for example with a hello@ label or folder for website
enquiries.

## Local development

`pnpm dev` (Vite) serves the site but not `/api`, so submissions fail locally
with the "Something went wrong" message. To test the whole flow locally, run
`vercel dev` with the variables above in `.env.local`.

## Known limitations

- **No rate limiting.** Spam is filtered with a honeypot field and the origin
  check. If spam gets through, add a CAPTCHA (for example Cloudflare Turnstile)
  or Vercel Firewall rate limiting on `/api/contact`.
- **Not retried.** A retry after an ambiguous result would send duplicate
  emails, so a failure is shown to the visitor instead, with hello@ as the
  fallback.
