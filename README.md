# KOBAMA.nl v2 "Bouwstenen"

One-page site voor KOBAMA, gebouwd met Astro en GSAP. Lees eerst `DESIGN-BRIEF.md` (bindend)
en `CLAUDE.md` (werkafspraken voor Claude Code).

## Starten

```bash
npm install
npm run dev        # lokaal op http://localhost:4321
```

## Bouwen en controleren (definition of done)

```bash
npx playwright install chromium   # eenmalig
npm run build
npm run qa        # screenshots in qa/, faalt bij console-errors, overflow, a11y, SEO, Lighthouse, kapotte links
npm run qa -- --launch --external   # vóór livegang: faalt ook op placeholders
```

## Structuur

- `src/content/copy.ts`: alle tekst (vastgestelde copy)
- `src/content/site.ts`: bedrijfsgegevens (KvK, btw, adres, e-mail, domein)
- `src/pages/index.astro`: de pagina
- `src/pages/privacy.astro`, `src/pages/404.astro`, `src/pages/robots.txt.ts`: vaste pagina's
- `src/layouts/Base.astro`: head, SEO en structured data
- `src/components/SiteFooter.astro`, `PageHeader.astro`: footer en kopbalk losse pagina's
- `src/components/IsoBlocks.astro`: de drie logoblokken in isometrie
- `src/components/OldSite.astro`: de verzonnen 2011-site voor de openingsovergang
- `src/scripts/motion.ts`: alle beweging (alleen zonder prefers-reduced-motion)
- `src/styles/global.css`: tokens en layout
- `scripts/qa.mjs`: de QA-gate

## Nog open

Zie `PILOT-LOG.md` voor alles wat livegang blokkeert en de afwijkingen van het playbook.

- Bio en portret van Koen (nu nog de grapversie).
- Echte voor/na-screenshots zodra de eerste klant live is.
- Licentie van de oude grachtenfoto's is niet meer nodig: v2 gebruikt ze niet.

## Beeld

- `public/images/loodgieter-sifon.webp`: uitsnede van een foto van Timur Shakerzianov via Unsplash (Unsplash License: gratis, ook commercieel, geen naamsvermelding verplicht).
