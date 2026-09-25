// Renders the blog's explanatory diagrams to public/blog/diagrams/<name>.webp.
//
//   node scripts/blog/generate-diagrams.mjs
//
// Each diagram is a small HTML template in brand colors and fonts, rendered at
// 2x for sharp text. Posts reference them as Markdown figures:
//   ![Alt text](/blog/diagrams/<name>.webp "Caption")
// Same Playwright requirement as generate-covers.mjs.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, "../..");
const outDir = path.join(root, "public/blog/diagrams");
const pwDir = process.env.PLAYWRIGHT_PATH ?? path.join(execSync("npm root -g").toString().trim(), "playwright");
const { chromium } = await import(pathToFileURL(path.join(pwDir, "index.mjs")).href);
const font = (f) => readFileSync(path.join(here, "fonts", f)).toString("base64");

const BASE = `
@font-face{font-family:Fraunces;font-weight:600;src:url(data:font/ttf;base64,${font("Fraunces-SemiBold.ttf")})}
@font-face{font-family:Inter;font-weight:500;src:url(data:font/ttf;base64,${font("Inter-Medium.ttf")})}
*{box-sizing:border-box}html,body{margin:0}
body{width:800px;background:#FAF8F4;font-family:Inter;color:#222622;padding:40px}
.k{font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#7E6636}
.t{font-family:Fraunces;font-weight:600;letter-spacing:-.01em}
.muted{color:#5E655C}
.card{background:#fff;border:1px solid #DED6C8;border-radius:18px;padding:18px}
.pine{background:#171B18;color:#EEE9E0;border-color:#171B18}
.sage{background:#7E8A77;color:#fff;border-color:#7E8A77}
ul{margin:10px 0 0;padding:0;list-style:none}li{font-size:13px;line-height:1.45;padding-left:16px;position:relative;margin-top:6px}
li:before{content:"";position:absolute;left:0;top:7px;width:6px;height:6px;border-radius:50%;background:#B49A6C}
.arrow{color:#B49A6C;font-size:20px;display:grid;place-items:center}
`;

const DIAGRAMS = {
  // How to onboard a remote virtual assistant
  "onboarding-30-day-timeline": `
    <div class="k">The first 30 days</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:18px;position:relative">
      <div style="position:absolute;left:24px;right:24px;top:15px;height:2px;background:#DED6C8"></div>
      ${[
        ["Before day 1", "Prepare", ["3–5 starting tasks", "Tool access", "Rough docs"]],
        ["Week 1", "Context", ["Big picture", "Shadow each task", "Daily check-in"]],
        ["Week 2", "Supervised", ["They do, you review", "Specific feedback", "Update the docs"]],
        ["Weeks 3–4", "Independent", ["Spot-checks only", "Fewer check-ins", "Add new tasks"]],
      ]
        .map(
          ([w, h, items], i) => `<div style="position:relative">
          <div style="width:32px;height:32px;border-radius:50%;background:${i === 3 ? "#7E8A77" : "#171B18"};color:#fff;display:grid;place-items:center;font-size:13px">${i + 1}</div>
          <div class="k" style="margin-top:14px">${w}</div>
          <div class="t" style="font-size:20px;margin-top:4px">${h}</div>
          <ul>${items.map((x) => `<li>${x}</li>`).join("")}</ul></div>`,
        )
        .join("")}
    </div>`,

  // 12 operations tasks founders should delegate
  "delegation-matrix": `
    <div style="display:grid;grid-template-columns:34px 1fr 1fr;grid-template-rows:1fr 1fr 34px;gap:10px;height:430px">
      <div style="grid-row:1/3;display:grid;place-items:center"><div class="k" style="writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap">Energy drained →</div></div>
      <div class="card"><div class="k">Delegate next</div><div class="t" style="font-size:20px;margin-top:6px">Low time, high drain</div><p class="muted" style="font-size:13px;margin:8px 0 0">Small tasks you dread. Hand them off once the first wave runs smoothly.</p></div>
      <div class="card pine"><div class="k" style="color:#B49A6C">Delegate first</div><div class="t" style="font-size:22px;margin-top:6px">High time, high drain</div><p style="font-size:13px;margin:8px 0 0;opacity:.75">The biggest wins. Document these and hand them over now.</p></div>
      <div class="card" style="background:#F5F1E8"><div class="k">Leave for later</div><div class="t" style="font-size:20px;margin-top:6px">Low time, low drain</div><p class="muted" style="font-size:13px;margin:8px 0 0">Not worth the handoff yet. Revisit as volume grows.</p></div>
      <div class="card"><div class="k">Delegate next</div><div class="t" style="font-size:20px;margin-top:6px">High time, low drain</div><p class="muted" style="font-size:13px;margin:8px 0 0">You don't mind them, but they eat hours. Strong second-wave candidates.</p></div>
      <div></div><div class="k" style="grid-column:2/4;text-align:center;align-self:center">Time spent each week →</div>
    </div>`,

  // How to document repetitive processes
  "sop-six-steps": `
    <div class="k">The 6-step SOP method</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px">
      ${[
        ["Pick", "A frequent, rules-based, painful process"],
        ["Record", "Screen-record yourself and narrate the why"],
        ["Write", "Purpose, trigger, owner, tools, steps, exceptions"],
        ["Test", "Someone else follows it exactly"],
        ["Store", "One place, linked from where the work happens"],
        ["Maintain", "Update the moment something changes"],
      ]
        .map(
          ([h, b], i) => `<div class="card ${i === 2 ? "pine" : ""}"><div style="display:flex;align-items:center;gap:10px">
          <div style="width:28px;height:28px;border-radius:50%;background:${i === 2 ? "#B49A6C" : "#7E8A77"};color:${i === 2 ? "#171B18" : "#fff"};display:grid;place-items:center;font-size:12px">${i + 1}</div>
          <div class="t" style="font-size:20px">${h}</div></div>
          <p style="font-size:13px;line-height:1.45;margin:10px 0 0;${i === 2 ? "opacity:.8" : "color:#5E655C"}">${b}</p></div>`,
        )
        .join("")}
    </div>`,

  // In-house vs outsourced customer support
  "support-hybrid-model": `
    <div class="k">The hybrid support model</div>
    <div style="display:grid;grid-template-columns:1fr 30px 1fr 30px 1fr;gap:6px;margin-top:18px;align-items:stretch">
      <div class="card sage"><div class="k" style="color:#fff;opacity:.8">Outsourced</div><div class="t" style="font-size:20px;margin-top:6px">Tier-one support</div>
        <p style="font-size:13px;line-height:1.45;margin:8px 0 0">High-volume, well-documented questions across email, chat, and help desk.</p></div>
      <div class="arrow">→</div>
      <div class="card"><div class="k">Agreed up front</div><div class="t" style="font-size:20px;margin-top:6px">Escalation rules</div>
        <p class="muted" style="font-size:13px;line-height:1.45;margin:8px 0 0">Refunds over a limit, bugs, and sensitive or VIP cases route to your team.</p></div>
      <div class="arrow">→</div>
      <div class="card pine"><div class="k" style="color:#B49A6C">In-house</div><div class="t" style="font-size:20px;margin-top:6px">Internal owner</div>
        <p style="font-size:13px;line-height:1.45;margin:8px 0 0;opacity:.8">Reviews trends, updates policies, and feeds recurring issues back to product.</p></div>
    </div>`,

  // Customer service QA checklist
  "qa-weekly-loop": `
    <div class="k">The weekly QA loop</div>
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:10px;margin-top:18px;position:relative">
      ${[
        ["Sample", "Pick tickets across agents and channels"],
        ["Score", "Check each against the 5 areas"],
        ["Coach", "Specific feedback with examples"],
        ["Fix", "Update replies, policies, and SOPs"],
        ["Track", "Watch which areas fail most"],
      ]
        .map(
          ([h, b], i) => `<div class="card ${i === 3 ? "pine" : ""}" style="padding:16px 14px">
          <div class="k" ${i === 3 ? 'style="color:#B49A6C"' : ""}>Step ${i + 1}</div><div class="t" style="font-size:19px;margin-top:4px">${h}</div>
          <p style="font-size:12.5px;line-height:1.45;margin:8px 0 0;${i === 3 ? "opacity:.8" : "color:#5E655C"}">${b}</p></div>`,
        )
        .join("")}
    </div>
    <div style="margin-top:14px;display:flex;align-items:center;gap:10px;font-size:13px;color:#5E655C"><span style="color:#B49A6C;font-size:18px">↺</span> Repeat every week. Fixes go into the documentation, not just the reply.</div>`,

  // Real estate virtual assistant guide
  "real-estate-pipeline": `
    <div class="k">Where a real estate VA helps, from lead to close</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:18px">
      ${[
        ["Lead", ["CRM entry and tagging", "Fast first reply", "Follow-up reminders"]],
        ["Listing & showings", ["Listing copy drafts", "Portal updates", "Showing schedule"]],
        ["Under contract", ["Deadline tracking", "Document collection", "Party updates"]],
        ["Closing", ["Final checklist", "Client updates", "Post-close follow-up"]],
      ]
        .map(
          ([h, items], i) => `<div class="card ${i === 2 ? "pine" : ""}" style="padding:16px">
          <div class="k" ${i === 2 ? 'style="color:#B49A6C"' : ""}>Stage ${i + 1}</div><div class="t" style="font-size:19px;margin-top:4px">${h}</div>
          <ul>${items.map((x) => `<li ${i === 2 ? 'style="opacity:.85"' : ""}>${x}</li>`).join("")}</ul></div>`,
        )
        .join("")}
    </div>`,

  // What does a virtual assistant actually handle?
  "delegate-vs-keep": `
    <div style="display:grid;grid-template-columns:1.25fr 1fr;gap:14px">
      <div class="card sage" style="padding:22px"><div class="k" style="color:#fff;opacity:.85">Delegate</div><div class="t" style="font-size:24px;margin-top:6px">Recurring, rules-based work</div>
        <ul>${["Inbox triage and routine replies", "Scheduling and meeting prep", "CRM updates and data entry", "Invoice follow-ups", "Research and summaries", "Weekly admin from a checklist"].map((x) => `<li style="color:#fff">${x}</li>`).join("")}</ul></div>
      <div class="card pine" style="padding:22px"><div class="k" style="color:#B49A6C">Keep</div><div class="t" style="font-size:24px;margin-top:6px">Judgment and direction</div>
        <ul>${["Strategy and pricing", "Key relationships", "Hiring decisions", "Calls with no pattern yet"].map((x) => `<li style="opacity:.85">${x}</li>`).join("")}</ul></div>
    </div>`,
};

mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 800, height: 100 }, deviceScaleFactor: 2 });
for (const [name, body] of Object.entries(DIAGRAMS)) {
  await page.setContent(`<!doctype html><html><head><style>${BASE}</style></head><body>${body}</body></html>`);
  await page.evaluate(() => document.fonts.ready);
  const png = await page.screenshot({ fullPage: true, type: "png" });
  // Re-encode as WebP via the browser's canvas encoder.
  const webp = await page.evaluate(async (b64) => {
    const img = new Image();
    img.src = `data:image/png;base64,${b64}`;
    await img.decode();
    const c = document.createElement("canvas");
    c.width = img.naturalWidth;
    c.height = img.naturalHeight;
    c.getContext("2d").drawImage(img, 0, 0);
    return c.toDataURL("image/webp", 0.9).split(",")[1];
  }, png.toString("base64"));
  const out = path.join(outDir, `${name}.webp`);
  writeFileSync(out, Buffer.from(webp, "base64"));
  console.log(`[diagrams] ${path.relative(root, out)}`);
}
await browser.close();
