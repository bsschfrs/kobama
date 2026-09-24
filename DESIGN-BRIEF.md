# Design brief: KOBAMA.nl v2 "Bouwstenen"

Bindend voor elke wijziging aan deze site. Bij twijfel tussen deze tekst en de code:
meld het verschil en werk dit bestand bij in dezelfde commit.

## Opdracht

Eén pagina, Nederlands, je-vorm. Doel: vertrouwen wekken bij mkb-eigenaren met een lange
beslistermijn en leiden naar één actie: "Plan een gesprek" (mailto:kobama.info@gmail.com).
Copy staat vast in `src/content/copy.ts`. Niets verzinnen: geen klanten, cijfers,
testimonials of bedragen. Ontbrekende inhoud is een zichtbare placeholder.
Naast de homepage zijn er twee losse pagina's in dezelfde stijl: `/privacy/`
(privacyverklaring) en een 404. Bedrijfsgegevens (KvK, btw, adres) staan in
`src/content/site.ts` en verschijnen in de footer.

## Tokens

| Token | Waarde | Gebruik |
|---|---|---|
| `--bg` | `#F1F2F0` | Canvas, koel lichtgrijs (geen crème) |
| `--paper` | `#FFFFFF` | Werkwijze-sectie |
| `--ink` | `#1A1A1A` | Tekst |
| `--muted` | `#5B5E5C` | Secundaire tekst |
| `--line` | `#CFD2CE` | Lijnen, placeholders |
| `--charcoal` | `#262626` | Donkere secties, uit het logo |
| `--blue` | `#0A74A6` | Logoblauw: focus, links, blok 1 |
| `--orange` | `#DB521C` | Logo-oranje: blok 3, accentlijnen |
| `--orange-deep` | `#B03F12` | Knoppen en slotsectie (wit erop haalt AA) |

Kleuren blauw en oranje zijn gemeten uit `logo-mark.webp`, niet ontworpen.

Typografie: Schibsted Grotesk (self-hosted via Fontsource), één familie.
Koppen 800, letterspacing -0.04em; body 400, 17-18px, regelhoogte 1.6.
Geen tweede familie, geen cursief nadrukwoord.

## Compositieregel

Vlakke, harde kleurvlakken en blokken. Niets zweeft, niets heeft een schaduw of verloop.
Eén content-kolom van max. 1248px, marges 96px (24px mobiel).

## Signature-elementen (twee bewegingsmomenten)

1. **Opening: het logo zet zichzelf in elkaar.** Direct bij het laden, zonder te scrollen:
   het blauwe blok valt van boven, het antraciete en oranje blok schuiven langs hun
   isometrische as naar binnen en klikken vast. De kop verschijnt woord voor woord uit een
   masker, daarna subregel en knop. Totaal circa 1,6 seconde. Daarna reageren de blokken
   licht op de muis (desktop), en bij het wegscrollen schuiven ze uit elkaar.
2. **Werkwijze: het logo bouwt zich opnieuw op.** Per stap valt één blok op zijn plek
   (Ontdekken = blauw, Ontwerpen & bouwen = antraciet, Live = oranje). Bij "Live." is het
   beeldmerk compleet. Ontbrekende blokken zijn gestippelde contouren. Zo sluit het aan op
   de hero: daar vallen de blokken uit elkaar, hier komen ze terug.

## Transformatie: een realistische vergelijking

"Zo ziet een upgrade eruit." toont een realistische verouderde mkb-site (stijl ~2014:
boxed layout, Arial, verloopknoppen, slider zonder foto, drie kolommen met iconen) en de
nieuwe versie van hetzelfde bedrijf. Een blauwe scheidslijn schuift tijdens het scrollen
van links naar rechts; de nieuwe site groeit van links over de oude heen.

Het voorbeeld is een loodgieter. Het bedrijf is verzonnen en heet bewust "Voorbeeld",
zodat het zonder apart label eerlijk blijft. De nieuwe versie is licht, strak en
direct duidelijk (kop over lekkage, telefoonnummer als knop). Eén signature-element:
een echte werkfoto (loodgieter onder een wastafel, blauw licht, rood shirt) met één
naamkaartje dat met een dun lijntje naar de monteur wijst: "Tim" en de zin "Tim en zijn
collega's staan 24/7 voor je klaar." Dat maakt het bedrijf persoonlijk zonder stockgevoel.
De kleuren van de foto (blauw, rood) sluiten aan op de dienstenbalk. De naam is verzonnen,
net als het bedrijf. Geen verlopen of glaseffecten.
Foto: Timur Shakerzianov via Unsplash (Unsplash License); het gezicht is niet herkenbaar. Vervang dit door een echte
klantcase zodra die er is.

## Overige beweging

- Achtergrond verloopt tijdens het scrollen tussen secties (licht naar antraciet en terug)
  in plaats van harde knips.
- Statement-zinnen worden per zin helder tijdens het scrollen (volledig zichtbaar voordat
  ze het midden van het scherm bereiken). Hun contrast wordt getoetst in de eindstaat.
- Na de hero schuift een compacte vaste balk in (logo + CTA).
- Niet doen: fade-in-van-onder op elke sectie, hover-animaties op alles, parallax op tekst.

Techniek: GSAP ScrollTrigger met `scrub` voor zachtheid. Geen scroll-hijacking
(geen Lenis): native scroll blijft sneller, toegankelijker en voorspelbaar op mobiel.
Ankerlinks scrollen soepel via CSS, alleen zonder reduced-motion.

`prefers-reduced-motion: reduce`: geen pins, geen tweens. Hero staat direct in de
eindstaat; alle secties hebben hun eigen achtergrond; blokken staan compleet; de
vergelijking staat stil op de helft.

## Kwaliteitsvloer (definition of done)

- Screenshots op 1440x900 en 390x844 beoordeeld tegen dit brief.
- Geen console-errors, geen horizontale scroll op 390px.
- Contrast AA op alle tekst, zichtbare focus (`outline: 3px solid var(--blue)`).
- Echte `<a>`/`<button>`, alt-teksten op portretten, decoratieve SVG `aria-hidden`.
- Eén H1 per pagina, unieke titel en description, canonical, LocalBusiness structured data,
  sitemap en robots.txt. Geen verzoeken naar derden.
- Lighthouse mobiel minimaal 90 op performance, toegankelijkheid, best practices en SEO
  (startdrempel uit het playbook; bijstellen na de pilots).
- `npm run qa` slaagt. Vóór livegang ook `npm run qa -- --launch --external`.

## Afwijkingen van het playbook

Dit brief wijkt op een paar punten bewust af van het playbook *Websites with Claude*
(twee bewegingsmomenten, verzonnen voorbeeld zonder label, mailto in plaats van formulier,
één pagina). De lijst en de open beslissingen staan in `PILOT-LOG.md`.
