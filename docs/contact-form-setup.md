# Contact form setup

The contact form posts to a **Google Apps Script Web App**, which:

1. appends each submission as a row in the submissions spreadsheet, and
2. emails a notification to `hello@sagestoneinc.com` (reply-to is set to the
   person who submitted, so you can reply straight from the notification).

No server, no third-party form service, no monthly cost.

**Spreadsheet:** [SageStone — Contact Form Submissions](https://docs.google.com/spreadsheets/d/1TleysrZC4UHRCp2XmxzpVx7ffIqm5m9rJwux8Ma5mrU/edit)

## One-time setup

### 1. Create the Web App

1. Open the spreadsheet linked above.
2. **Extensions → Apps Script**.
3. Delete the placeholder `myFunction` and paste the entire contents of
   [`scripts/contact-form.gs`](../scripts/contact-form.gs).
4. Save (the `SHEET_ID` is already filled in for the spreadsheet above).
5. **Deploy → New deployment**.
6. Click the gear next to "Select type" and choose **Web app**.
7. Set:
   - **Description:** `Contact form endpoint`
   - **Execute as:** `Me`
   - **Who has access:** `Anyone` ← required; the website posts anonymously
8. **Deploy**, then authorise when prompted. Google will warn that the script
   is unverified — choose **Advanced → Go to (project name)** and allow it.
   The permissions it asks for are spreadsheet access and permission to send
   email as you.
9. Copy the **Web app URL**. It ends in `/exec`.

To confirm it's live, open that URL in a browser. You should see
`{"ok":true,"service":"sagestone-contact-form"}`.

### 2. Point the site at it

Add the URL as an environment variable in Vercel
(**Project → Settings → Environment Variables**), for Production, Preview,
and Development:

```
VITE_CONTACT_ENDPOINT = https://script.google.com/macros/s/…/exec
```

Redeploy so the build picks it up — `VITE_`-prefixed variables are inlined at
build time, not read at runtime, so an existing deployment will not see it.

For local development, copy `.env.example` to `.env.local` and set the same
value.

## What gets recorded

| Column | Notes |
| --- | --- |
| Received at | Server timestamp |
| Name, Email, Company, Service, Message | Form fields |
| SMS consent | `YES` / `no` |
| Consent source | `web form` when consent was given |
| Consent given at | ISO timestamp, for A2P 10DLC records |
| Page, User agent | Which page the form was submitted from |

The consent columns exist because carriers can ask you to produce proof of
consent for a texted number. Keep the sheet — it is the record.

## Updating the script later

Editing the script is not enough on its own. After changing
`scripts/contact-form.gs`, paste the new version into Apps Script and then
**Deploy → Manage deployments → edit (pencil) → Version: New version → Deploy**.
That keeps the same `/exec` URL, so `VITE_CONTACT_ENDPOINT` does not change.

## Known limitations

- **The browser cannot read the response.** Apps Script Web Apps do not answer
  CORS preflight requests, so the site sends a "simple" request with
  `mode: "no-cors"`. The submission is delivered, but the response is opaque:
  a successful write and a server-side error look the same to the website, and
  the user sees the thank-you screen either way. Only genuine network failures
  surface an error. The notification email is the real signal that the pipeline
  is healthy — if submissions stop arriving by email, check the Apps Script
  execution log at **Apps Script → Executions**.
- **Submissions are not retried.** A retry after an ambiguous result would
  duplicate rows and emails, so a failed send is surfaced to the user instead,
  with the `hello@sagestoneinc.com` address as the fallback.
- **Spam** is filtered with a honeypot field. If spam gets through, add a
  CAPTCHA or move to a serverless function with server-side validation.
