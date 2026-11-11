// Illustraties bij blogartikelen: de isometrische bouwstenen uit het logo, als code getekend.
// Geen AI-beeld (CLAUDE.md). Zelfde projectie en kleuren als src/components/IsoBlocks.astro.
//
// Per artikel staat hieronder een compositie van blokken. Het script schrijft:
//   public/images/blog/<slug>.svg  (in het artikel)
//   public/images/blog/<slug>.png  (1200x630, deelbeeld en BlogPosting-image)
//
// Draaien na een nieuwe of gewijzigde compositie:
//   node scripts/blog-visuals.mjs
// Zet daarna in het artikel: image: "/images/blog/<slug>.svg" en imageAlt: "…".

import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";

const W = 1200, H = 630, PAD = 48;
const BG = "#F1F2F0"; // --bg
// Kleuren per vlak: boven, links, rechts (uit IsoBlocks.astro, gemeten uit het logo).
const COLORS = {
  blue: ["#2E96C8", "#0A74A6", "#075B83"],
  orange: ["#F2804D", "#DB521C", "#AE3F13"],
  charcoal: ["#4B4B4B", "#2F2F2F", "#1C1C1C"],
};
const GHOST = "#9da19e"; // zelfde stippellijn als de werkwijze-sectie

/**
 * Composities. Een blok: [x, y, z, dx, dy, dz, kleur]. kleur "ghost" = gestippelde contour.
 * x loopt naar rechtsonder, y naar linksonder, z omhoog.
 */
const VISUALS = {
  // Eenmalig tegenover terugkerend: één blauw blok (de bouw, één keer betaald). Daarnaast
  // oranje blokken die per jaar hoger worden: terugkerende kosten tellen op. De laatste is
  // een gestippelde contour: waar het naartoe kan groeien als je blijft betalen voor niets.
  "wat-kost-een-website-laten-maken": [
    // De rij loopt over -y: op het scherm van linksvoor naar rechtsachter, dus oplopend.
    [0, 2.2, 0, 1.6, 1.6, 1.6, "blue"],
    [0.3, 0.6, 0, 1, 1, 0.6, "orange"],
    [0.3, -0.9, 0, 1, 1, 1.2, "orange"],
    [0.3, -2.4, 0, 1, 1, 1.8, "orange"],
    [0.3, -3.9, 0, 1, 1, 2.8, "ghost"],
  ],
  // Gevonden worden in de buurt: een raster van lage gestippelde blokjes (andere bedrijven),
  // met in het midden één blauw blok dat eruit springt (een volledig ingevuld profiel).
  "google-bedrijfsprofiel-aanmaken": [
    ...[0, 1.5, 3].flatMap((x) => [0, 1.5, 3].filter((y) => !(x === 1.5 && y === 1.5))
      .map((y) => [x, y, 0, 1, 1, 0.5, "ghost"])),
    [1.5, 1.5, 0, 1, 1, 2.2, "blue"],
  ],
};

const C30 = Math.cos(Math.PI / 6), S30 = 0.5;
const proj = (x, y, z) => [(x - y) * C30, (x + y) * S30 - z];

function render(blocks) {
  // Schaal en verschuiving zo kiezen dat alles met marge in 1200x630 past.
  const all = blocks.flatMap(([x, y, z, dx, dy, dz]) =>
    [0, dx].flatMap((a) => [0, dy].flatMap((b) => [0, dz].map((c) => proj(x + a, y + b, z + c)))));
  const minX = Math.min(...all.map((p) => p[0])), maxX = Math.max(...all.map((p) => p[0]));
  const minY = Math.min(...all.map((p) => p[1])), maxY = Math.max(...all.map((p) => p[1]));
  const U = Math.min((W - 2 * PAD) / (maxX - minX), (H - 2 * PAD) / (maxY - minY));
  const ox = (W - (maxX - minX) * U) / 2 - minX * U, oy = (H - (maxY - minY) * U) / 2 - minY * U;
  const P = (x, y, z) => { const [a, b] = proj(x, y, z); return [ox + a * U, oy + b * U]; };
  const pts = (a) => a.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");

  // Contouren eerst (dan lopen er nooit stippellijnen over een massief blok), daarna de
  // massieve blokken in schildersvolgorde: verst weg eerst.
  const depth = (b) => b[0] + b[1] + b[2];
  const order = [...blocks].sort((a, b) => (a[6] === "ghost" ? 0 : 1) - (b[6] === "ghost" ? 0 : 1) || depth(a) - depth(b));
  const out = [];
  for (const [x, y, z, dx, dy, dz, color] of order) {
    const z1 = z + dz;
    if (color === "ghost") {
      const E = [
        [P(x, y, z1), P(x + dx, y, z1)], [P(x + dx, y, z1), P(x + dx, y + dy, z1)], [P(x + dx, y + dy, z1), P(x, y + dy, z1)], [P(x, y + dy, z1), P(x, y, z1)],
        [P(x, y + dy, z), P(x, y + dy, z1)], [P(x + dx, y + dy, z), P(x + dx, y + dy, z1)], [P(x + dx, y, z), P(x + dx, y, z1)],
        [P(x, y + dy, z), P(x + dx, y + dy, z)], [P(x + dx, y + dy, z), P(x + dx, y, z)],
      ];
      out.push(`<g fill="none" stroke="${GHOST}" stroke-width="2.5" stroke-dasharray="8 8" stroke-linecap="round">${E.map(([a, c]) => `<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${c[0].toFixed(1)}" y2="${c[1].toFixed(1)}"/>`).join("")}</g>`);
      continue;
    }
    const c = COLORS[color];
    out.push(
      `<polygon fill="${c[0]}" points="${pts([P(x, y, z1), P(x + dx, y, z1), P(x + dx, y + dy, z1), P(x, y + dy, z1)])}"/>`,
      `<polygon fill="${c[1]}" points="${pts([P(x, y + dy, z), P(x + dx, y + dy, z), P(x + dx, y + dy, z1), P(x, y + dy, z1)])}"/>`,
      `<polygon fill="${c[2]}" points="${pts([P(x + dx, y, z), P(x + dx, y + dy, z), P(x + dx, y + dy, z1), P(x + dx, y, z1)])}"/>`,
    );
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="${BG}"/>${out.join("")}</svg>\n`;
}

const DIR = path.resolve("public/images/blog");
fs.mkdirSync(DIR, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: W, height: H } });
for (const [slug, blocks] of Object.entries(VISUALS)) {
  const svg = render(blocks);
  fs.writeFileSync(path.join(DIR, `${slug}.svg`), svg);
  await page.setContent(`<html><body style="margin:0">${svg}</body></html>`);
  await page.screenshot({ path: path.join(DIR, `${slug}.png`), clip: { x: 0, y: 0, width: W, height: H } });
  console.log(`geschreven: public/images/blog/${slug}.svg en .png`);
}
await browser.close();
