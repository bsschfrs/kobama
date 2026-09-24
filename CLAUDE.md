# KOBAMA.nl: instructies voor Claude Code

Lees eerst `DESIGN-BRIEF.md` (bindend) en `src/content/copy.ts` (vastgestelde copy).
Deze site is **pilot 1** van het playbook *Websites with Claude* (Phase 0, stap 0.6).
Alles wat je hier leert over de werkwijze, schrijf je op in `PILOT-LOG.md`.

## Harde regels
- Nooit em-dashes (—) in copy. Gebruik punt, komma of dubbele punt. `npm run qa` controleert dit.
- Niets verzinnen: geen klanten, resultaten, testimonials, bedragen, jaartallen of certificaten.
  Onbekend blijft een zichtbare placeholder (`[… volgt]` of `data-placeholder`) tot een founder
  het bevestigt. Bedrijfsgegevens staan alleen in `src/content/site.ts`, tekst alleen in `copy.ts`.
- Geen AI-gegenereerde beelden van het werk, het team of een pand. Hoogstens abstracte textuur.
- Alleen beeld waarvan de rechten vastliggen; noteer bron en licentie in het brief of de README.
- Eén CTA overal: "Plan een gesprek" naar mailto:kobama.info@gmail.com.
- Geen nieuwe kleuren, fonts, schaduwen of verlopen buiten de tokens in het brief.
- Nieuwe beweging alleen als het brief erom vraagt. Alles werkt ook met prefers-reduced-motion.
- Een pagina is pas af als `npm run qa` slaagt. Geen uitzonderingen voor deadlines.

## House standard (playbook A.3)
- Statische Astro-site, fonts self-hosted, geen verzoeken naar derden.
- Nederlands op B1-niveau, je-vorm, geschreven voor de lezer.
- Lokale SEO: unieke titel en description per pagina, precies één H1, canonical,
  LocalBusiness structured data (`src/layouts/Base.astro`), sitemap en robots.txt.
  Naam, adres en telefoon exact gelijk aan het Google-bedrijfsprofiel.
- WCAG 2.1 AA: contrast, toetsenbord, zichtbare focus, alt-teksten, reduced-motion.
- Snel op mobiel: vaste afmetingen op beeld, geen layout shift.
- Privacyverklaring en wettelijke bedrijfsgegevens in de footer. Geen trackingcookies.
- Responsive vanaf 360px, geen horizontale scroll.

## Werkwijze (build-loop)
1. Na elke betekenisvolle wijziging: `npm run build` en `npm run qa`
   (tijdens itereren mag `npm run qa -- --no-lighthouse`).
2. Bekijk de screenshots in `qa/` op 1440 en 390 en vergelijk met het brief.
3. Herstel wat afwijkt, herhaal tot `npm run qa` slaagt en er niets meer afwijkt.
4. Bij een grotere wijziging: laat een verse sessie of subagent die alleen het brief, dit
   bestand en de screenshots ziet een tweede oordeel geven.
5. Werk `DESIGN-BRIEF.md` bij als de code bewust afwijkt.

Vóór livegang: `npm run qa -- --launch --external`. Die faalt zolang er placeholders staan.

## AI-tells om te vermijden (tenzij het brief er bewust om vraagt)
- Crème achtergrond met contrastrijke serif en terracotta accent.
- Bijna-zwarte achtergrond met één zuurgroen of vermiljoen accent.
- Krantenopmaak met haarlijnen en dichte kolommen.
- Identieke afgeronde kaarten met dezelfde zachte schaduw en decoratieve verlopen.
- Gespatieerde hoofdletterlabels boven elke kop, middelpunt-metaregels, pijltjes achter
  elke link, monospace voor kleine labels.
- Eén woord in een kop cursief of in een andere kleur.
- Nummers 01 / 02 / 03 op inhoud die geen volgorde is.
- Fade-en-schuif-omhoog op elke sectie, hover-effecten op elke kaart.

## Development
Start de devserver op de achtergrond: `astro dev --background`
(beheer met `astro dev stop`, `astro dev status`, `astro dev logs`).
Controleer layout altijd ook in `npm run build` + `npm run preview`: dev en build gebruiken
verschillende CSS-pipelines. Lightning CSS laat `container-type` en handgeschreven
`backdrop-filter` stil vallen; kijk in de build, niet alleen in dev.
