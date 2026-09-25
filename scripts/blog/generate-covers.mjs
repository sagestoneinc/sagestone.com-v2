// Generates branded 1200×630 cover images for blog posts.
//
//   node scripts/blog/generate-covers.mjs            # only posts without a cover
//   node scripts/blog/generate-covers.mjs --all      # regenerate every cover
//
// Covers are written to public/blog/covers/<slug>.jpg and picked up
// automatically by the blog plugin (post hero, blog index thumbnail, and
// og:image, so LinkedIn and other link previews show a branded card).
//
// Needs Playwright with Chromium, which is not a project dependency. Install it
// once globally (`npm i -g playwright`), or set PLAYWRIGHT_PATH to its folder.
// Fonts (Fraunces, Inter; SIL Open Font License) are bundled in ./fonts.

import { readFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const blogDir = path.join(root, "src/content/blog");
const outDir = path.join(root, "public/blog/covers");
const all = process.argv.includes("--all");

const pwDir = process.env.PLAYWRIGHT_PATH ?? path.join(execSync("npm root -g").toString().trim(), "playwright");
const { chromium } = await import(pathToFileURL(path.join(pwDir, "index.mjs")).href);

const font = (f) => readFileSync(path.join(here, "fonts", f)).toString("base64");
const monogram = readFileSync(path.join(root, "public/sagestone-monogram.svg")).toString("base64");

// Short label shown on the cover's illustration panel, per post.
const LABELS = {
  "what-does-a-virtual-assistant-handle": "What to delegate",
  "virtual-assistant-vs-executive-assistant": "VA vs. EA",
  "how-to-onboard-a-remote-virtual-assistant": "30-day plan",
  "when-should-a-founder-hire-a-virtual-assistant": "7 signs",
  "in-house-vs-outsourced-customer-support": "Decision guide",
  "customer-service-qa-checklist": "QA checklist",
  "how-to-document-repetitive-processes": "6-step SOP method",
  "operations-tasks-founders-should-delegate": "12 tasks",
  "real-estate-virtual-assistant-guide": "Real estate guide",
};

const frontmatter = (src) => {
  const m = /^---\n([\s\S]*?)\n---/.exec(src.replace(/\r\n/g, "\n"));
  const data = {};
  for (const line of (m?.[1] ?? "").split("\n")) {
    const kv = /^([A-Za-z][\w-]*):\s*(.*)$/.exec(line.trim());
    if (kv) data[kv[1]] = kv[2].trim().replace(/^["']|["']$/g, "");
  }
  return data;
};

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/* Category illustrations: simple UI-card compositions in brand colors. */
const row = (w, tone = "rgba(238,233,224,.18)") => `<div class="ln" style="width:${w}%;background:${tone}"></div>`;
const check = `<span class="ck">✓</span>`;
const ILLUSTRATION = {
  "Virtual Assistants": () => `
    <div class="card a1"><div class="cap">Today</div>
      <div class="ev g">9:00 · Inbox triage</div><div class="ev">11:30 · Client call prep</div><div class="ev s">2:00 · Focus time</div></div>
    <div class="card a2"><div class="cap">Handled</div>
      <div class="it">${check}${row(70)}</div><div class="it">${check}${row(55)}</div><div class="it">${check}${row(80)}</div></div>`,
  "Customer Support": () => `
    <div class="bub l">Where is my order?</div>
    <div class="bub r">It shipped today. Here's your tracking link.</div>
    <div class="bub l sm">Thank you!</div>
    <div class="card a3"><div class="cap">Quality check</div>
      <div class="it">${check}${row(60)}</div><div class="it">${check}${row(75)}</div></div>`,
  Operations: () => `
    <div class="flow"><div class="node">Trigger</div><div class="arr"></div><div class="node g">Steps</div><div class="arr"></div><div class="node">Done</div></div>
    <div class="card a2"><div class="cap">SOP</div>
      <div class="it">${check}${row(70)}</div><div class="it">${check}${row(50)}</div><div class="it">${check}${row(65)}</div><div class="it">${check}${row(40)}</div></div>`,
  "Industry Guides": () => `
    <svg class="house" viewBox="0 0 120 110" fill="none" stroke="#B49A6C" stroke-width="5" stroke-linejoin="round"><path d="M10 52 60 12l50 40"/><path d="M22 44v56h76V44"/><path d="M50 100V70h20v30"/></svg>
    <div class="card a2"><div class="cap">Contract to close</div>
      <div class="it">${check}${row(65)}</div><div class="it">${check}${row(80)}</div><div class="it">${check}${row(55)}</div></div>`,
};

const html = ({ title, category, label }) => {
  const size = title.length > 56 ? 50 : title.length > 40 ? 58 : 66;
  const art = (ILLUSTRATION[category] ?? ILLUSTRATION.Operations)();
  return `<!doctype html><html><head><style>
@font-face{font-family:Fraunces;font-weight:600;src:url(data:font/ttf;base64,${font("Fraunces-SemiBold.ttf")})}
@font-face{font-family:Inter;font-weight:500;src:url(data:font/ttf;base64,${font("Inter-Medium.ttf")})}
*{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#F5F1E8;font-family:Inter;position:relative;overflow:hidden}
.glow{position:absolute;inset:0;background:radial-gradient(circle at 12% 88%,rgba(180,154,108,.18),transparent 42%),radial-gradient(circle at 55% 0%,rgba(126,138,119,.14),transparent 45%)}
.left{position:absolute;left:80px;top:72px;bottom:64px;width:590px;display:flex;flex-direction:column}
.brand{display:flex;align-items:center;gap:14px;font-family:Fraunces;font-size:30px;color:#222622}.brand em{font-style:normal;color:#7E8A77}
.mark{width:22px;height:36px;background:#7E8A77;-webkit-mask:url(data:image/svg+xml;base64,${monogram}) center/contain no-repeat}
.eyebrow{margin-top:auto;display:flex;align-items:center;gap:14px;font-size:17px;letter-spacing:.2em;text-transform:uppercase;color:#7E6636}
.eyebrow i{width:36px;height:2px;background:#B49A6C;display:block}
h1{font-family:Fraunces;font-weight:600;font-size:${size}px;line-height:1.06;letter-spacing:-.02em;color:#222622;margin:22px 0 0}
.url{margin-top:auto;font-size:19px;color:#5E655C;letter-spacing:.02em}
.panel{position:absolute;right:64px;top:64px;bottom:64px;width:420px;border-radius:32px;background:#171B18;overflow:hidden;padding:36px 32px}
.panel:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 85% 10%,rgba(126,138,119,.35),transparent 50%),radial-gradient(circle at 10% 100%,rgba(180,154,108,.22),transparent 45%)}
.label{position:absolute;left:32px;bottom:32px;z-index:2;background:#B49A6C;color:#171B18;font-size:18px;padding:10px 18px;border-radius:999px;letter-spacing:.02em}
.card{position:relative;z-index:1;background:rgba(238,233,224,.07);border:1px solid rgba(238,233,224,.14);border-radius:20px;padding:18px 20px;margin-bottom:16px}
.cap{font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:rgba(238,233,224,.55);margin-bottom:12px}
.ev{font-size:17px;color:#EEE9E0;padding:9px 12px;border-radius:10px;background:rgba(238,233,224,.08);margin-top:8px}.ev.g{background:rgba(126,138,119,.55)}.ev.s{background:rgba(180,154,108,.35)}
.it{display:flex;align-items:center;gap:12px;margin-top:10px}.ln{height:10px;border-radius:6px}
.ck{width:24px;height:24px;border-radius:50%;background:#7E8A77;color:#171B18;font-size:14px;display:grid;place-items:center;flex:none}
.a2{margin-left:40px}.a3{margin-top:22px}
.bub{position:relative;z-index:1;max-width:78%;font-size:17px;line-height:1.35;padding:12px 16px;border-radius:18px;margin-bottom:12px;color:#EEE9E0}
.bub.l{background:rgba(238,233,224,.1);border-bottom-left-radius:6px}.bub.r{background:#7E8A77;color:#171B18;margin-left:auto;border-bottom-right-radius:6px}.bub.sm{max-width:40%}
.flow{position:relative;z-index:1;display:flex;align-items:center;gap:8px;margin:6px 0 26px}.node{flex:1;text-align:center;font-size:15px;color:#EEE9E0;padding:14px 6px;border-radius:14px;border:1px solid rgba(238,233,224,.2)}.node.g{background:#7E8A77;color:#171B18;border-color:#7E8A77}.arr{width:14px;height:2px;background:#B49A6C}
.house{position:relative;z-index:1;width:120px;display:block;margin:4px 0 22px 8px}
</style></head><body><div class="glow"></div>
<div class="left"><div class="brand"><div class="mark"></div><span>Sage<em>Stone</em></span></div>
<div class="eyebrow"><i></i>${esc(category)}</div><h1>${esc(title)}</h1><div class="url">sagestoneinc.com/blog</div></div>
<div class="panel">${art}${label ? `<div class="label">${esc(label)}</div>` : ""}</div>
</body></html>`;
};

mkdirSync(outDir, { recursive: true });
const posts = readdirSync(blogDir).filter((f) => f.endsWith(".md") && !f.startsWith("_"));
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
let made = 0;
for (const file of posts) {
  const slug = file.replace(/\.md$/, "");
  const out = path.join(outDir, `${slug}.jpg`);
  if (!all && existsSync(out)) continue;
  const data = frontmatter(readFileSync(path.join(blogDir, file), "utf8"));
  await page.setContent(html({ title: data.title, category: data.category || "Operations", label: LABELS[slug] }));
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: out, type: "jpeg", quality: 86 });
  console.log(`[covers] ${path.relative(root, out)}`);
  made++;
}
await browser.close();
console.log(`[covers] ${made} cover(s) generated.`);
