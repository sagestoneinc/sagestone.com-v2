// Generates the brand images used by transactional email and sender avatars:
//   public/email/logo.png     wordmark lockup for the email header (2x, on ivory)
//   public/email/avatar.png   square monogram avatar (Gravatar, mailbox profile photo)
//   public/brand/bimi.svg     SVG Tiny PS logo for a BIMI DNS record
//
// Built from public/sagestone-monogram.svg and the bundled Fraunces font, so
// they stay identical to the site logo. Re-run after a logo change:
//   node scripts/email/generate-email-assets.mjs
// Needs Playwright with Chromium (npm i -g playwright), like the blog scripts.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "../..");
const { chromium } = await import(join(execSync("npm root -g").toString().trim(), "playwright/index.mjs"));

const SAGE = "#7E8A77";
const IVORY = "#F5F1E8";
const CHARCOAL = "#222622";

const monogramSvg = readFileSync(join(root, "public/sagestone-monogram.svg"), "utf8");
// The monogram's path data, with its own transform, minus the wrapper.
const paths = monogramSvg.match(/<g[^>]*>([\s\S]*)<\/g>/)[1];
const monogram = (color) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 1432"><g fill="${color}" stroke="none">${paths}</g></svg>`;
const font = readFileSync(join(root, "scripts/blog/fonts/Fraunces-SemiBold.ttf")).toString("base64");

mkdirSync(join(root, "public/email"), { recursive: true });
mkdirSync(join(root, "public/brand"), { recursive: true });

const browser = await chromium.launch();

// Screenshots the first element in the page, so the image is sized to its content.
async function shot(html, out) {
  const page = await browser.newPage({ viewport: { width: 800, height: 400 }, deviceScaleFactor: 2 });
  await page.setContent(html);
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(() => [...document.images].every((i) => i.complete));
  await page.locator("body > div").first().screenshot({ path: join(root, out) });
  await page.close();
  console.log("wrote", out);
}

// Email header lockup, 56 CSS px tall, rendered at 2x for sharp retina display.
await shot(
  `<style>
    @font-face { font-family: F; src: url(data:font/ttf;base64,${font}); }
    html, body { margin: 0; background: ${IVORY}; }
    .lockup { display: inline-flex; align-items: center; gap: 12px; height: 56px; padding: 0 4px; background: ${IVORY}; }
    .mono { height: 40px; width: ${(40 * 880) / 1432}px; }
    .word { font: 600 30px/1 F; letter-spacing: -0.01em; color: ${CHARCOAL}; }
    .word span { color: ${SAGE}; }
  </style>
  <div class="lockup"><img class="mono" src="data:image/svg+xml;base64,${Buffer.from(monogram(SAGE)).toString("base64")}"><div class="word">Sage<span>Stone</span></div></div>`,
  "public/email/logo.png"
);

// Avatar: ivory monogram on sage, padded so it survives a circular crop.
await shot(
  `<style>
    html, body { margin: 0; }
    .a { width: 256px; height: 256px; background: ${SAGE}; display: flex; align-items: center; justify-content: center; }
    .a img { height: 150px; }
  </style>
  <div class="a"><img src="data:image/svg+xml;base64,${Buffer.from(monogram(IVORY)).toString("base64")}"></div>`,
  "public/email/avatar.png"
);

await browser.close();

// BIMI requires SVG Tiny Portable/Secure: version 1.2, baseProfile tiny-ps,
// a <title>, a square viewBox, no x/y on the root, no scripts or external
// references. Mailbox providers crop it to a circle, so keep generous padding.
const S = 1432;
const scale = 0.62;
const w = 880 * scale;
const h = 1432 * scale;
const bimi = `<svg xmlns="http://www.w3.org/2000/svg" version="1.2" baseProfile="tiny-ps" viewBox="0 0 ${S} ${S}">
<title>SageStone</title>
<rect width="${S}" height="${S}" fill="${SAGE}"/>
<g transform="translate(${((S - w) / 2).toFixed(1)} ${((S - h) / 2).toFixed(1)}) scale(${scale})" fill="${IVORY}" stroke="none">${paths}</g>
</svg>
`;
writeFileSync(join(root, "public/brand/bimi.svg"), bimi);
console.log("wrote public/brand/bimi.svg");
