// QA-gate voor KOBAMA.nl: de definition of done uit het playbook (A.5), zie CLAUDE.md.
// Gebruik: npm run build && npm run qa
//
//   --launch          ook falen op placeholders ("[… volgt]", TODO, [data-placeholder])
//   --no-lighthouse   Lighthouse overslaan (sneller tijdens het itereren)
//   --external        externe links echt opvragen (anders alleen gemeld)
//
// Homepage: screenshots van de belangrijke scrollmomenten op 1440x900 en 390x844, plus een
// reduced-motion-run. Elke pagina uit de sitemap: console-errors, verzoeken naar derden,
// horizontale scroll, axe (WCAG 2.1 AA), één H1, unieke titel en beschrijving, canonical,
// structured data, links, em-dashes en Lighthouse (mobiel). Verder: robots.txt, sitemap en
// een echte 404. Exit-code 1 als er iets faalt; waarschuwingen laten de gate niet falen.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import { AxeBuilder } from "@axe-core/playwright";

const args = new Set(process.argv.slice(2));
const LAUNCH = args.has("--launch");
const DIST = path.resolve("dist");
const OUT = path.resolve("qa");
fs.mkdirSync(OUT, { recursive: true });

const types = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".webp": "image/webp",
  ".svg": "image/svg+xml", ".ico": "image/x-icon", ".woff2": "font/woff2", ".woff": "font/woff",
  ".png": "image/png", ".xml": "application/xml", ".txt": "text/plain", ".json": "application/json" };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (p.endsWith("/")) p += "index.html";
  const f = path.join(DIST, p);
  if (!f.startsWith(DIST) || !fs.existsSync(f)) {
    res.writeHead(404, { "content-type": "text/html" });
    return fs.createReadStream(path.join(DIST, "404.html")).on("error", () => res.end("404")).pipe(res);
  }
  res.writeHead(200, { "content-type": types[path.extname(f)] || "application/octet-stream" });
  fs.createReadStream(f).pipe(res);
}).listen(4399);
const URL_ = "http://localhost:4399/";

const viewports = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "mobile", width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 },
];
const problems = [];
const warnings = [];
const fail = (vp, msg) => problems.push(`[${vp}] ${msg}`);
const warn = (where, msg) => warnings.push(`[${where}] ${msg}`);
const launchOnly = (where, msg) => (LAUNCH ? fail : warn)(where, msg);

// Scrollmomenten: [naam, functie die de scrollpositie berekent]
const moments = [
  ["01-hero", () => 0],
  ["02-hero-weg", () => innerHeight * 0.45],
  ["03-transformatie-start", () => document.querySelector("[data-transform]").offsetTop + 10],
  ["04-statement", () => document.querySelector(".statement").offsetTop + 40],
  ["05-proof", () => document.querySelector(".proof").getBoundingClientRect().top + scrollY - innerHeight * 0.35],
  ["06-transformatie-eind", () => { const t = document.querySelector("[data-transform]"); return t.offsetTop + (t.offsetHeight - innerHeight) * 0.97; }],
  ["07-werkwijze-1", () => document.querySelector('[data-step="1"]').getBoundingClientRect().top + scrollY - innerHeight * 0.35],
  ["08-werkwijze-3", () => document.querySelector('[data-step="3"]').getBoundingClientRect().top + scrollY - innerHeight * 0.35],
  ["09-team", () => document.querySelector("#team").offsetTop + 60],
  ["10-contact", () => document.querySelector("#contact").offsetTop],
  ["11-footer", () => document.body.scrollHeight],
];

const browser = await chromium.launch();
for (const vp of viewports) {
  const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, isMobile: vp.isMobile, hasTouch: vp.hasTouch, deviceScaleFactor: vp.deviceScaleFactor || 1 });
  const page = await ctx.newPage();
  page.on("console", (m) => { if (m.type() === "error") fail(vp.name, `console: ${m.text()}`); });
  page.on("pageerror", (e) => fail(vp.name, `pageerror: ${e.message}`));
  page.on("requestfailed", (r) => fail(vp.name, `request failed: ${r.url()}`));
  await page.goto(URL_, { waitUntil: "domcontentloaded" });
  for (const t of [250, 700, 1300]) {
    await page.waitForTimeout(t === 250 ? 250 : t === 700 ? 450 : 600);
    await page.screenshot({ path: path.join(OUT, `${vp.name}-00-intro-${t}ms.png`) });
  }
  await page.waitForLoadState("networkidle");
  await page.evaluate(() => document.fonts.ready);

  for (const [name, fn] of moments) {
    const y = await page.evaluate(`(${fn.toString()})()`);
    // In stappen scrollen zodat ScrollTrigger elke overgang ziet
    await page.evaluate(async (target) => {
      const start = scrollY, steps = 12;
      for (let i = 1; i <= steps; i++) { scrollTo(0, start + ((target - start) * i) / steps); await new Promise((r) => setTimeout(r, 25)); }
    }, y);
    await page.waitForTimeout(1300);
    await page.screenshot({ path: path.join(OUT, `${vp.name}-${name}.png`) });
  }

  // Toegankelijkheid op een verse pagina (tussenstanden van scroll-animaties tellen niet)
  const fresh = await ctx.newPage();
  await fresh.goto(URL_, { waitUntil: "networkidle" });
  await fresh.waitForTimeout(800);
  // [data-reveal] staat bewust gedimd tot hij in beeld scrollt (zie DESIGN-BRIEF.md);
  // het contrast van de eindstaat wordt getoetst in de reduced-motion-run hieronder.
  const axe = await new AxeBuilder({ page: fresh }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).exclude("[data-reveal]").analyze();
  for (const v of axe.violations) fail(vp.name, `axe ${v.id} (${v.impact}): ${v.nodes.length}x, ${v.nodes.slice(0, 3).map((n) => n.target.join(" ")).join(" | ")}`);

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
  if (overflow > 1) fail(vp.name, `horizontale scroll: ${overflow}px te breed`);

  const brokenAnchors = await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')]
    .map((a) => a.getAttribute("href")).filter((h) => h.length > 1 && !document.querySelector(h)));
  if (brokenAnchors.length) fail(vp.name, `ankers zonder doel: ${brokenAnchors.join(", ")}`);

  const brokenImgs = await page.evaluate(() => [...document.images].filter((i) => i.complete && i.naturalWidth === 0).map((i) => i.src));
  if (brokenImgs.length) fail(vp.name, `kapotte afbeeldingen: ${brokenImgs.join(", ")}`);

  await ctx.close();

  // Rustige versie (prefers-reduced-motion): hele pagina in één beeld
  const rctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, reducedMotion: "reduce", deviceScaleFactor: 1 });
  const rpage = await rctx.newPage();
  await rpage.goto(URL_, { waitUntil: "networkidle" });
  // Lazy-load afbeeldingen eerst laten laden, anders ontbreken ze in de full-page shot
  await rpage.evaluate(async () => {
    document.querySelectorAll('img[loading="lazy"]').forEach((i) => (i.loading = "eager"));
    await Promise.all([...document.images].map((i) => (i.complete ? null : new Promise((r) => { i.onload = i.onerror = r; }))));
  });
  await rpage.screenshot({ path: path.join(OUT, `${vp.name}-reduced-motion-full.png`), fullPage: true });
  const raxe = await new AxeBuilder({ page: rpage }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
  for (const v of raxe.violations) fail(`${vp.name}/reduced`, `axe ${v.id} (${v.impact}): ${v.nodes.length}x, ${v.nodes.slice(0, 3).map((n) => n.target.join(" ")).join(" | ")}`);
  await rctx.close();
}

// ---------------------------------------------------------------- alle pagina's (sitemap)

const sitemap = path.join(DIST, "sitemap-0.xml");
if (!fs.existsSync(sitemap)) fail("site", "sitemap ontbreekt (dist/sitemap-0.xml)");
const routes = fs.existsSync(sitemap)
  ? [...fs.readFileSync(sitemap, "utf8").matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname)
  : ["/"];
const robots = await fetch(URL_ + "robots.txt");
if (!robots.ok || !(await robots.text()).includes("Sitemap:")) fail("site", "robots.txt ontbreekt of verwijst niet naar de sitemap");

const notFound = await fetch(URL_ + "deze-pagina-bestaat-niet/");
if (notFound.status !== 404 || !(await notFound.text()).includes("<h1")) fail("site", `404-pagina: status ${notFound.status} of geen eigen pagina`);

const seo = [];
const links = new Map(); // href -> pagina waar hij voor het eerst staat
for (const route of routes) {
  for (const vp of viewports) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height }, isMobile: vp.isMobile, hasTouch: vp.hasTouch });
    const page = await ctx.newPage();
    const where = `${route} ${vp.name}`;
    page.on("console", (m) => { if (m.type() === "error") fail(where, `console: ${m.text()}`); });
    page.on("pageerror", (e) => fail(where, `pageerror: ${e.message}`));
    // House standard: geen verzoeken naar derden (fonts en beeld staan op de eigen server).
    page.on("request", (r) => { const u = new URL(r.url()); if (u.protocol.startsWith("http") && u.hostname !== "localhost") fail(where, `verzoek naar derde partij: ${u.hostname}`); });
    const res = await page.goto(URL_ + route.slice(1), { waitUntil: "networkidle" });
    if (!res?.ok()) fail(where, `HTTP ${res?.status()}`);

    if (route !== "/") {
      const slug = route.replace(/^\/|\/$/g, "").replaceAll("/", "_");
      await page.screenshot({ path: path.join(OUT, `${vp.name}-page-${slug}.png`), fullPage: true });
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
      if (overflow > 1) fail(where, `horizontale scroll: ${overflow}px te breed`);
      const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
      for (const v of axe.violations) fail(where, `axe ${v.id} (${v.impact}): ${v.nodes.length}x`);
    }

    if (vp.name === "desktop") {
      const info = await page.evaluate(() => ({
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content ?? "",
        canonical: document.querySelector('link[rel="canonical"]')?.href ?? "",
        lang: document.documentElement.lang,
        h1: document.querySelectorAll("h1").length,
        ld: document.querySelectorAll('script[type="application/ld+json"]').length,
        noAlt: [...document.images].filter((i) => !i.hasAttribute("alt")).map((i) => i.getAttribute("src")),
        hrefs: [...document.querySelectorAll("a[href]")].map((a) => a.getAttribute("href")),
        placeholders: [...document.querySelectorAll("[data-placeholder]")].map((e) => e.dataset.placeholder),
      }));
      seo.push({ route, ...info });
      if (info.h1 !== 1) fail(route, `${info.h1} H1's (precies één verwacht)`);
      if (!info.title || !info.description) fail(route, "titel of meta description ontbreekt");
      if (!info.canonical) fail(route, "canonical ontbreekt");
      if (info.lang !== "nl") fail(route, `lang="${info.lang}" (nl verwacht)`);
      if (!info.ld) fail(route, "LocalBusiness structured data ontbreekt");
      if (info.noAlt.length) fail(route, `afbeelding zonder alt: ${info.noAlt.join(", ")}`);
      for (const p of info.placeholders) launchOnly(route, `placeholder-inhoud (data-placeholder="${p}")`);
      for (const h of info.hrefs) if (!h.startsWith("#") && !links.has(h)) links.set(h, route);
    }
    await ctx.close();
  }
}

for (const key of ["title", "description"]) {
  const seen = new Map();
  for (const x of seo) seen.set(x[key], [...(seen.get(x[key]) ?? []), x.route]);
  for (const [v, pages] of seen) if (pages.length > 1) fail(pages.join(", "), `dubbele ${key}: "${v}"`);
}

for (const [href, from] of links) {
  if (href.startsWith("mailto:")) {
    if (!/^mailto:[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(href)) fail(from, `ongeldige mailto: ${href}`);
    continue;
  }
  const u = new URL(href, URL_ + from.slice(1));
  if (u.origin === new URL(URL_).origin) {
    const r = await fetch(u);
    if (!r.ok) fail(from, `kapotte link: ${u.pathname} (${r.status})`);
  } else if (args.has("--external")) {
    let status = 0;
    try { status = (await fetch(u, { method: "HEAD", redirect: "follow" })).status; if (status >= 400) status = (await fetch(u)).status; } catch {}
    if (!status || status >= 400) fail(from, `externe link werkt niet: ${href} (${status || "fout"})`);
  } else warn(from, `externe link niet gecontroleerd: ${href} (gebruik --external)`);
}

await browser.close();

// ---------------------------------------------------------------- tekst in de build

for (const route of routes) {
  const file = path.join(DIST, route, "index.html");
  if (!fs.existsSync(file)) continue;
  const text = fs.readFileSync(file, "utf8").replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "").replace(/<[^>]+>/g, " ");
  // Harde regel uit CLAUDE.md: nooit em-dashes in copy.
  if (text.includes("—")) fail(route, "em-dash (—) in de tekst");
  const ph = [...new Set(text.match(/\[[^\]<>]*volgt[^\]<>]*\]|\bTODO\b/gi) ?? [])];
  if (ph.length) launchOnly(route, `placeholders: ${ph.join(" ")}`);
}

// ---------------------------------------------------------------- Lighthouse (mobiel)

// Startdrempels; het playbook zegt de exacte waarden na de pilots vast te stellen.
const LH_MIN = { performance: 0.9, accessibility: 0.9, "best-practices": 0.9, seo: 0.9 };
const lhScores = [];
if (!args.has("--no-lighthouse")) {
  const { default: lighthouse } = await import("lighthouse");
  const chromeLauncher = await import("chrome-launcher");
  const chrome = await chromeLauncher.launch({ chromePath: chromium.executablePath(), chromeFlags: ["--headless=new"] });
  for (const route of routes) {
    const r = await lighthouse(URL_ + route.slice(1), { port: chrome.port, logLevel: "error", onlyCategories: Object.keys(LH_MIN) });
    const scores = Object.fromEntries(Object.entries(r.lhr.categories).map(([k, v]) => [k, Math.round(v.score * 100)]));
    lhScores.push(`${route}: ${Object.entries(scores).map(([k, v]) => `${k} ${v}`).join(", ")}`);
    for (const [k, min] of Object.entries(LH_MIN)) if (scores[k] < min * 100) fail(route, `Lighthouse ${k} ${scores[k]} (min ${min * 100})`);
  }
  await chrome.kill();
}

server.close();

const unique = [...new Set(problems)];
const uniqueWarn = [...new Set(warnings)];
if (lhScores.length) console.log("Lighthouse (mobiel):\n  " + lhScores.join("\n  "));
if (uniqueWarn.length) console.log(`Waarschuwingen (${uniqueWarn.length}${LAUNCH ? "" : ", blokkeren pas met --launch"}):\n- ` + uniqueWarn.join("\n- "));
if (unique.length) {
  console.log(`QA: ${unique.length} probleem/problemen\n- ` + unique.join("\n- "));
  process.exit(1);
}
console.log(`QA geslaagd${LAUNCH ? " (launch-modus)" : ""}. Screenshots in ${path.relative(process.cwd(), OUT)}/`);
