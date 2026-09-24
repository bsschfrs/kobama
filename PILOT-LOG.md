# Pilot 1: KOBAMA.nl (eigen site)

Playbook *Websites with Claude*, Phase 0 stap 0.6: de volledige pipeline eerst op de eigen
site draaien, frictie opschrijven en de house kit verbeteren vóór de eerste klant.

## Meten (playbook §10.3)

Vul per stap in. Schat niet achteraf: noteer het meteen.

| Pipelinestap | Uren (wie) | AI-kosten / gebruik | Build-loop-rondes tot QA groen | Opmerkingen |
|---|---|---|---|---|
| 1. Intake | | | | |
| 2. Beeldaudit en route | | | | |
| 3. Pagina-opzet en copy | | | | |
| 4. Brief | | | | |
| 5. Homepage-richtingen | | | | v1 "Hollands licht" en v2 "Bouwstenen" |
| 6. Homepage bouwen | | | | |
| 7. Overige pagina's | | | | privacy + 404 |
| 8. Klantronde | | | | |
| 9. Livegang | | | | |

Wat moest met de hand worden hersteld, en welke regel in CLAUDE.md had dat voorkomen?

- 2026-09-24: een regelafbreking in JSX slikte de spatie vóór een link ("deAutoriteit").
  Alleen zichtbaar in de screenshot, niet in een automatische check. Regel: bij tekst met
  inline links altijd de screenshot lezen, niet alleen de QA-uitslag.
- 2026-09-24: de playbook-uitlijning werd eerst op de oude codebase
  (`~/Documents/Private/KOBAMA`, v1) gedaan in plaats van op kv2. Regel voor de house kit:
  noteer per klant in één bestand welke map de actuele is.

## Blokkeert livegang

`npm run qa -- --launch` faalt tot deze punten zijn opgelost:

- [ ] Bio van Koen is nog de grapversie ("Olie sjeik …"). Vervangen en `isPlaceholder`
      in `copy.ts` op `false` zetten.
- [ ] KvK-nummer, btw-nummer en adres in `src/content/site.ts`.
- [ ] Bewaartermijn en hostingpartij in de privacyverklaring; privacyverklaring één keer
      laten checken door een adviseur (playbook §9).
- [ ] Domein bevestigen (`kobama.nl` is aangenomen) in `site.ts` en `astro.config.mjs`.
- [ ] Bas en Mats bevestigen hun eigen bio (feiten over opleiding en ervaring).
- [ ] Na livegang: sitemap indienen in Google Search Console, en `npm run qa -- --launch --external`.

## Bewuste afwijkingen van het playbook

Het playbook is de standaard; deze keuzes wijken af. Beslis per punt of het zo blijft,
en werk dan het brief of het playbook bij.

1. **Twee bewegingsmomenten in plaats van één signature-element.** Het brief kiest bewust
   voor logo-opbouw in de hero én in Werkwijze, plus het naamkaartje in het voorbeeld.
   Het playbook zegt: één signature-element, één georkestreerd bewegingsmoment.
2. **Verzonnen voorbeeldbedrijf zonder label.** De transformatie toont loodgieter
   "Voorbeeld" met monteur "Tim" en "24/7". Het playbook wil verzonnen inhoud duidelijk
   gemarkeerd zien. Overweeg een klein zichtbaar label ("verzonnen voorbeeld").
3. **Mailto in plaats van een contactformulier.** Het playbook vraagt een werkend
   formulier; de formulierdienst is nog open beslissing 4. Mailto is nu de CTA-regel.
4. **Eén pagina in plaats van 5-12.** Bewust gekozen voor de eigen site (2026-09-24).
   Privacy en 404 zijn wel losse pagina's.
5. **Geen git-repository.** Het playbook gaat uit van Git + een privé GitHub-repo per site.

## Tools

- Playwright MCP en Anthropic's `frontend-design`-plugin zijn geïnstalleerd (user scope,
  2026-09-24). Test uit playbook stap 0.2: laat Claude een site openen met Playwright en
  een screenshot maken op 390px.
- QA-gate: `npm run qa` (zie de kop van `scripts/qa.mjs` voor de opties).
