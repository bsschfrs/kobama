// Maakt public/images/og-kobama.png (1200x630) uit de echte hero, in de eindstaat zonder
// beweging. Opnieuw draaien als de hero verandert:
//   node scripts/og-image.mjs http://localhost:4321/ public/images/og-kobama.png
import { chromium } from "playwright";
const [url, out] = process.argv.slice(2);
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1200, height: 630 }, reducedMotion: "reduce" });
await p.goto(url, { waitUntil: "networkidle" });
await p.addStyleTag({ content: `
  astro-dev-toolbar, .hero-nav, .topbar, .hero .lead, .hero .btn, [data-hero-fade] { display:none !important; }
  .hero { min-height: 630px !important; height: 630px !important; }
`});
await p.evaluate(() => document.fonts.ready);
await p.screenshot({ path: out, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await b.close();
