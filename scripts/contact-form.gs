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

var HEADERS = [
  'Received at',
  'Name',
  'Email',
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

    if (!data.name || !data.email) {
      return jsonResponse_({ ok: false, error: 'name and email are required' });
    }

    var row = [
      new Date(),
      trim_(data.name),
      trim_(data.email),
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
  }

  return sheet;
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

  var options = { name: 'SageStone Website' };
  // Let the team reply straight to the person who submitted the form.
  if (data.email && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) {
    options.replyTo = data.email;
  }

  MailApp.sendEmail(
    NOTIFY_EMAIL,
    'New enquiry: ' + (data.name || 'Website contact form'),
    lines.join('\n'),
    options
  );
}

function trim_(value) {
  return value == null ? '' : String(value).trim();
}

function jsonResponse_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}
