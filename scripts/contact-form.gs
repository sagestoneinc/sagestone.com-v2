/**
 * SageStone — contact form endpoint (Google Apps Script Web App).
 *
 * Receives submissions from the website contact form, appends each one as a
 * row in the submissions spreadsheet, and emails a notification.
 *
 * Deploy: Extensions/Apps Script -> paste this file -> Deploy -> New deployment
 * -> type "Web app" -> Execute as "Me" -> Who has access "Anyone" -> Deploy.
 * Copy the /exec URL into the site's VITE_CONTACT_ENDPOINT env var.
 *
 * See docs/contact-form-setup.md for the full walkthrough.
 */

var SHEET_ID = '1TleysrZC4UHRCp2XmxzpVx7ffIqm5m9rJwux8Ma5mrU';
var SHEET_NAME = 'Submissions';
var NOTIFY_EMAIL = 'hello@sagestoneinc.com';
// Sender for notifications. Gmail only sends from an address that is set up as
// a "Send mail as" alias on the account that owns this script; until it is,
// notifications fall back to the owner's own address.
var FROM_EMAIL = 'noreply@sagestoneinc.com';
var FROM_NAME = 'SageStone Website';

var HEADERS = [
  'Received at',
  'Name',
  'Email',
  'Phone',
  'Company',
  'Service',
  'Message',
  'SMS consent',
  'Consent source',
  'Consent given at',
  'Page',
  'User agent',
];

function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      return jsonResponse_({ ok: false, error: 'empty request' });
    }

    var data = JSON.parse(e.postData.contents);

    // Honeypot: real people leave this hidden field empty. Accept silently so
    // bots get a success response and do not retry.
    if (data.website) {
      return jsonResponse_({ ok: true });
    }

    var invalid = validate_(data);
    if (invalid) {
      return jsonResponse_({ ok: false, error: invalid });
    }

    var row = [
      new Date(),
      trim_(data.name),
      trim_(data.email),
      trim_(data.phone),
      trim_(data.company),
      trim_(data.service),
      trim_(data.message),
      data.smsConsent ? 'YES' : 'no',
      trim_(data.smsConsentSource),
      data.smsConsentAt ? new Date(data.smsConsentAt) : '',
      trim_(data.page),
      trim_(data.userAgent),
    ];

    getSheet_().appendRow(row);
    sendNotification_(data);
    sendAutoReply_(data);

    return jsonResponse_({ ok: true });
  } catch (err) {
    console.error(err);
    return jsonResponse_({ ok: false, error: String(err) });
  }
}

/** Health check — visiting the /exec URL in a browser should show this. */
function doGet() {
  return jsonResponse_({ ok: true, service: 'sagestone-contact-form' });
}

function getSheet_() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  // Write the header row once, then freeze it.
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  } else if (sheet.getRange(1, 4).getValue() !== 'Phone') {
    // Sheets created before the Phone column existed: insert it after Email
    // so existing rows stay aligned with their headers.
    sheet.insertColumnAfter(3);
    sheet.getRange(1, 4).setValue('Phone').setFontWeight('bold');
  }

  return sheet;
}

/**
 * Server-side copy of the website's checks (src/app/lib/contact.ts), so
 * requests that skip the form can't write junk rows or trigger emails.
 * Returns an error message, or null when the submission is valid.
 */
function validate_(data) {
  var name = trim_(data.name);
  var email = trim_(data.email);
  var phoneDigits = trim_(data.phone).replace(/\D/g, '');
  var message = trim_(data.message);

  if (name.length < 2 || name.length > 100) return 'invalid name';
  if (!isEmail_(email)) return 'invalid email';
  if (phoneDigits && (phoneDigits.length < 7 || phoneDigits.length > 15)) return 'invalid phone';
  if (data.smsConsent && !phoneDigits) return 'phone required for SMS consent';
  if (!trim_(data.service)) return 'service required';
  if (message.length < 20 || message.length > 2000) return 'invalid message';
  return null;
}

function isEmail_(value) {
  return value.length <= 254 && /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(value);
}

/** Sender options: the noreply alias when it's set up, otherwise the owner. */
function senderOptions_(name) {
  var options = { name: name };
  if (GmailApp.getAliases().indexOf(FROM_EMAIL) !== -1) {
    options.from = FROM_EMAIL;
  }
  return options;
}

function sendNotification_(data) {
  var consent = data.smsConsent
    ? 'YES — given via ' + (data.smsConsentSource || 'web form') +
      (data.smsConsentAt ? ' at ' + data.smsConsentAt : '')
    : 'no';

  var lines = [
    'New contact form submission from sagestoneinc.com',
    '',
    'Name:      ' + (data.name || '—'),
    'Email:     ' + (data.email || '—'),
    'Phone:     ' + (data.phone || '—'),
    'Company:   ' + (data.company || '—'),
    'Service:   ' + (data.service || '—'),
    '',
    'Message:',
    data.message || '—',
    '',
    '---',
    'SMS consent: ' + consent,
    'Page:        ' + (data.page || '—'),
    'User agent:  ' + (data.userAgent || '—'),
  ];

  var options = senderOptions_(FROM_NAME);
  // Let the team reply straight to the person who submitted the form.
  options.replyTo = trim_(data.email);

  GmailApp.sendEmail(
    NOTIFY_EMAIL,
    'New enquiry: ' + (data.name || 'Website contact form'),
    lines.join('\n'),
    options
  );
}

/**
 * Confirmation to the person who submitted. Deliberately fixed text: it
 * doesn't repeat their message, so the form can't be used to send arbitrary
 * content to someone else's inbox. Replies go to the team inbox.
 */
function sendAutoReply_(data) {
  var firstName = trim_(data.name).split(/\s+/)[0].slice(0, 40);
  // Names only: anything that looks like a link or address becomes "there".
  if (!/^[\p{L}'’-]+$/u.test(firstName)) firstName = 'there';
  var subject = 'We received your inquiry - SageStone';
  var body = [
    'Hi ' + firstName + ',',
    '',
    'Thank you for reaching out to SageStone. We have received your inquiry, and',
    'one of our team members will reach out as soon as we can, usually within',
    'one business day.',
    '',
    'If you need to add anything in the meantime, just reply to this email.',
    '',
    'Warm regards,',
    'The SageStone Team',
    'https://www.sagestoneinc.com',
  ].join('\n');

  var html =
    '<div style="font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#222622;max-width:560px">' +
    '<p>Hi ' + escapeHtml_(firstName) + ',</p>' +
    '<p>Thank you for reaching out to SageStone. We have received your inquiry, and one of our team members will reach out as soon as we can, usually within one business day.</p>' +
    '<p>If you need to add anything in the meantime, just reply to this email.</p>' +
    '<p>Warm regards,<br>The SageStone Team<br>' +
    '<a href="https://www.sagestoneinc.com" style="color:#4f5a4a">sagestoneinc.com</a></p>' +
    '</div>';

  var options = senderOptions_('SageStone');
  options.replyTo = NOTIFY_EMAIL;
  options.htmlBody = html;

  try {
    GmailApp.sendEmail(trim_(data.email), subject, body, options);
  } catch (err) {
    // The submission is already saved and the team notified; a bounced or
    // over-quota confirmation shouldn't turn that into a failure.
    console.error('auto-reply failed: ' + err);
  }
}

function escapeHtml_(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function trim_(value) {
  return value == null ? '' : String(value).trim();
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
