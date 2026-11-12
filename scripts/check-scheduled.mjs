// Geplande blogartikelen live zetten.
//
// De site is statisch: een artikel met een datum in de toekomst wordt bij het bouwen
// overgeslagen (src/scripts/blog.ts). Dit script kijkt of er een artikel is waarvan de
// publicatietijd voorbij is, maar dat nog niet live staat. Alleen dan start het een nieuwe
// build via een Vercel Deploy Hook. Het vergelijkt met de live site, dus een gemiste run
// wordt bij de volgende vanzelf ingehaald.
//
// Draait via .github/workflows/publish-scheduled.yml (ingesteld op elke 15 minuten, maar GitHub
// voert dat soms maar eens per paar uur uit). De vaste basis is de Vercel Cron in api/publish.js.
// Lokaal proberen zonder iets te starten:
//   node scripts/check-scheduled.mjs --dry-run
// Deploy hook testen (start altijd een build, ook zonder gepland artikel):
//   node scripts/check-scheduled.mjs --force
//
// Omgeving:
//   VERCEL_DEPLOY_HOOK  de geheime deploy-hook-URL (GitHub secret). Nooit in de repo zetten.
//   SITE_URL            standaard https://www.kobama.nl

import fs from "node:fs";
import path from "node:path";

const DIR = path.resolve("src/content/blog");
const SITE = (process.env.SITE_URL ?? "https://www.kobama.nl").replace(/\/$/, "");
const DRY = process.argv.includes("--dry-run");
const FORCE = process.argv.includes("--force") || process.env.FORCE_DEPLOY === "true";
// Alleen artikelen waarvan de tijd in de afgelopen twee dagen viel. Oudere artikelen zijn
// bij een gewone push al gebouwd; zo blijft een kapotte build niet eindeloos herstarten.
const WINDOW_MS = 2 * 24 * 60 * 60 * 1000;

/** Leest de frontmatter-velden die we nodig hebben (date, placeholder). */
function frontmatter(file) {
  const text = fs.readFileSync(file, "utf8");
  const block = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? "";
  const field = (name) => block.match(new RegExp(`^${name}:\\s*["']?(.*?)["']?\\s*$`, "m"))?.[1];
  return { date: field("date"), placeholder: field("placeholder") === "true" };
}

/** Start een nieuwe build via de Vercel Deploy Hook. */
async function deploy(reason) {
  const hook = process.env.VERCEL_DEPLOY_HOOK;
  if (!hook) { console.error("VERCEL_DEPLOY_HOOK ontbreekt: kan geen nieuwe build starten."); process.exit(1); }
  const res = await fetch(hook, { method: "POST" });
  if (!res.ok) { console.error(`Deploy hook gaf HTTP ${res.status}. Klopt de URL in het secret?`); process.exit(1); }
  console.log(`Nieuwe build gestart: ${reason}.`);
  process.exit(0);
}

if (FORCE) await deploy("handmatige test van de deploy hook");

const now = Date.now();
const due = [];
for (const name of fs.readdirSync(DIR).filter((f) => f.endsWith(".md"))) {
  const { date, placeholder } = frontmatter(path.join(DIR, name));
  if (placeholder || !date) continue;
  const at = new Date(date).getTime();
  if (Number.isNaN(at)) { console.warn(`${name}: datum "${date}" niet te lezen, overgeslagen`); continue; }
  if (at <= now && now - at <= WINDOW_MS) due.push({ slug: name.replace(/\.md$/, "").toLowerCase(), at });
}

if (!due.length) { console.log("Geen artikelen waarvan de publicatietijd net voorbij is."); process.exit(0); }

const missing = [];
for (const { slug, at } of due) {
  const url = `${SITE}/blog/${slug}/`;
  const res = await fetch(url, { method: "HEAD", redirect: "follow" }).catch(() => null);
  const live = res?.ok ?? false;
  console.log(`${live ? "live    " : "NIET LIVE"} ${url} (gepland ${new Date(at).toISOString()})`);
  if (!live) missing.push(url);
}

if (!missing.length) { console.log("Alles staat al live."); process.exit(0); }

if (DRY) { console.log(`--dry-run: zou nu een nieuwe build starten voor ${missing.length} artikel(en).`); process.exit(0); }

await deploy(`${missing.length} gepland(e) artikel(en)`);
