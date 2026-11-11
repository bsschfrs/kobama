---
name: kobama-artikelen
description: Schrijf blogartikelen voor kobama.nl volgens de vaste SEO- en AEO-methode. Gebruik deze skill altijd als iemand vraagt om een blogartikel, een artikel uit CONTENT-ROADMAP.md, een kennis- of SEO-tekst voor KOBAMA, of een herschrijving van een bestaand artikel in src/content/blog/, ook als het maar om één artikel gaat. Trigger ook bij "schrijf het kostenartikel", "werk het volgende onderwerp uit" of "volgende artikel van de roadmap". Bevat het verplichte onderzoek met Ahrefs, het interview met de founders (niets verzinnen), de vaste opbouw voor zoekmachines en AI-antwoorden, de schrijfregels en de checklist vóór publicatie.
---

# KOBAMA-artikelen: SEO en AEO

Methode vastgesteld op 10 november 2026, op basis van de bronnen onderaan.
Lees ook `CLAUDE.md`, `DESIGN-BRIEF.md` en `CONTENT-ROADMAP.md`. Die regels gaan vóór.

## Uitgangspunt

Google zegt in zijn eigen gids (mei 2026): optimaliseren voor AI-antwoorden (AEO/GEO)
**is gewoon SEO**. AI Overviews en AI Mode gebruiken dezelfde index en dezelfde
kwaliteitssystemen. Bing en Copilot geven vergelijkbaar advies. Daarom:

- Er is geen apart trucje. Een artikel dat het beste antwoord geeft, goed in elkaar zit
  en van echte mensen met echte ervaring komt, wint in Google én in AI-antwoorden.
- Wat het verschil maakt is **eigen inhoud**: ervaring, keuzes en cijfers van KOBAMA
  die nergens anders staan. Een samenvatting van wat al online staat voegt niets toe.
- AI-systemen knippen losse stukjes uit een pagina. Elk stuk moet dus op zichzelf
  kloppen en begrijpelijk zijn (zie "Losse stukjes die kloppen").

## Harde regels (uit CLAUDE.md, gelden altijd)

- **Niets verzinnen.** Geen bedragen, klantnamen, resultaten, percentages, citaten of
  ervaringen die niet door een founder zijn bevestigd of uit een controleerbare bron
  komen. Onbekend blijft een zichtbare placeholder `[… volgt]`.
- Nederlands op B1-niveau, je-vorm, geschreven voor de lezer (een mkb-ondernemer).
- **Nooit em-dashes.** Gebruik punt, komma of dubbele punt.
- Geen AI-gegenereerde beelden van werk, team of pand.
- De enige CTA is "Plan een gesprek". Die staat al onder elk artikel in de template.

## Werkwijze per artikel

### 1. Onderwerp kiezen
Neem het volgende artikel uit `CONTENT-ROADMAP.md` (volgorde en status staan daar).
Zet de status op `concept` zodra je begint.

### 2. Zoekonderzoek (Ahrefs-connector, land `nl`)
- `keywords-explorer-overview` voor het hoofdzoekwoord en de varianten uit de roadmap:
  volume, KD, intentie, parent topic, en of er een `ai_overview` in `serp_features` staat.
- `keywords-explorer-matching-terms` met `terms: questions` voor de echte vragen die
  mensen stellen. Die worden je H2's en je FAQ.
- `serp-overview` voor de huidige top 10: wat behandelen zij, wat missen ze, welke
  vragen beantwoordt niemand goed? Daar zit je kans.
- Leg vast: hoofdzoekwoord, 3 tot 8 vragen, en wat wij kunnen toevoegen dat de top 10
  niet heeft.

### 3. Interview met de founders (verplicht)
Stel vóór het schrijven gerichte vragen aan Bas, Koen of Mats. Schrijf niet verder
zonder antwoorden. Vraag naar:
- Hun eigen aanpak en keuzes bij dit onderwerp, en waarom.
- Concrete voorbeelden uit eigen werk (alleen met toestemming te noemen).
- Cijfers die ze kunnen bevestigen (doorlooptijden, prijsindicaties, aantallen).
- Een uitspraak die je letterlijk mag citeren, met naam.
- Wat ondernemers volgens hen het vaakst verkeerd doen of verkeerd denken.
Wie is de auteur van dit artikel? Dat moet een echte founder zijn.

### 4. Feiten en bronnen
- Elk feit dat niet van de founders komt, krijgt een betrouwbare bron die je zelf hebt
  geopend en gelezen: bij voorkeur de primaire bron (Google, KVK, Rijksoverheid,
  Autoriteit Persoonsgegevens, SIDN, ACM). Link er in de tekst naar.
- Cijfers en citaten maken een tekst aantoonbaar vaker zichtbaar in AI-antwoorden
  (GEO-onderzoek, KDD 2024). Gebruik ze waar ze echt kloppen, nooit verzonnen.
- Twijfel je over een feit, laat het weg of maak er een placeholder van.

### 5. Opbouw schrijven (zie "Vaste opbouw")

### 6. Controleren met de checklist en `npm run qa`

### 7. Publiceren
Haal `placeholder: true` weg, zet de datum, zet de status in de roadmap op `live`,
draai `npm run build` en `npm run qa`, en vraag of het gecommit en gepusht mag worden.

**Inplannen in plaats van direct live:** zet `date` op het gewenste moment mét tijd en
tijdzone, bijvoorbeeld `date: 2026-11-17T09:00:00+01:00` (winter +01:00, zomer +02:00).
Commit en push gewoon. Tot dat moment slaat de build het artikel over (niet in het
overzicht, niet in de sitemap). De workflow `.github/workflows/publish-scheduled.yml`
controleert elke 15 minuten en start dan een nieuwe build: reken op 15 tot 20 minuten
na het geplande tijdstip. In de devserver zie je het artikel wel, met het label
"Gepland, niet live". Zet de roadmap-status op `gepland` met datum en tijd.
Een datum zonder tijd (`2026-11-17`) gaat live om 01:00 Nederlandse tijd.
Controleer lokaal met `node scripts/check-scheduled.mjs --dry-run`.

## Vaste opbouw

**Titel (frontmatter `title`, wordt de H1)**
- Bevat het hoofdzoekwoord in gewone taal, zoals iemand het zou vragen.
  Voorbeeld: "Wat kost een website laten maken?"
- Maximaal ongeveer 60 tekens. Zegt precies wat de lezer krijgt, zonder overdrijving.

**Beschrijving (frontmatter `description`, wordt de meta description)**
- 120 tot 155 tekens. Zegt wat de lezer eraan heeft. Geen opsomming van zoekwoorden.

**Opening: het antwoord eerst**
- De eerste alinea (2 tot 3 zinnen) beantwoordt de vraag uit de titel direct en
  volledig. Iemand die alleen deze alinea leest, weet het antwoord.
- Daarna één zin over wat de rest van het artikel uitlegt.
- Geen aanloop ("In dit artikel…", "Steeds meer ondernemers…").

**Secties (H2)**
- Elke H2 is een echte vraag of een duidelijke bewering uit het zoekonderzoek.
  Goed: "Waarom is maatwerk duurder dan een sjabloon?" Fout: "Meer weten".
- Elke sectie begint met een antwoord van 1 tot 2 zinnen dat op zichzelf staat.
  Daarna uitleg, voorbeeld, nuance.
- H3 alleen als een sectie echt deelonderwerpen heeft.
- Geen nummers 01, 02 voor koppen die geen volgorde zijn.

**Lijsten en tabellen**
- Stappen in volgorde: genummerde lijst. Losse kenmerken: opsomming.
- Vergelijkingen (bijvoorbeeld maatwerk, WordPress, sjabloon): een tabel.
- Niet alles in bullets: lopende uitleg blijft gewone tekst.

**Eigen ervaring van KOBAMA**
- Minstens één sectie met hoe wij het doen of wat wij zien, uit het interview.
  Bijvoorbeeld "Hoe wij dit aanpakken". Dit is het stuk dat niemand anders heeft.
- Een letterlijk citaat van een founder, met naam, als dat er is.

**Veelgestelde vragen (H2 "Veelgestelde vragen")**
- 3 tot 6 echte vragen uit Ahrefs die nog niet als H2 zijn behandeld.
- Elke vraag als H3, met een antwoord van 2 tot 4 zinnen dat op zichzelf klopt.
- Altijd gewoon zichtbaar. Nooit in een uitklapmenu of tab: AI-systemen lezen dat
  mogelijk niet.

**Interne links**
- Link naar de pijler en naar 2 tot 4 verwante clusterartikelen. Ook naar geplande
  artikelen: `src/components/BlogLinks.astro` laat zo'n verwijzing weg tot het doelartikel
  live is, en de geplande build zet hem er vanzelf in. Er staat dus nooit een dode link online.
- Schrijf een verwijzing als eigen zin die eindigt met de link, bijvoorbeeld
  "Wat onderhoud inhoudt, lees je in [website onderhoud](/blog/website-onderhoud/)."
  Dan valt de hele zin netjes weg zolang het artikel nog niet live is.
- Werk bij elk nieuw artikel ook de bestaande artikelen bij: zet in 1 tot 3 verwante
  artikelen een zin die naar het nieuwe artikel linkt. Links gaan beide kanten op.
- Linktekst zegt waar de link naartoe gaat. Nooit "klik hier".

**Afsluiting**
- Eén korte alinea die het antwoord samenvat. De CTA staat al in de template.

## Losse stukjes die kloppen

AI-antwoorden knippen zinnen en alinea's los. Schrijf zo dat elk stuk alleen kan staan:
- Noem het onderwerp in de zin. Niet "Dit kost meestal meer", wel "Een maatwerk website
  kost meestal meer dan een sjabloonsite".
- Geen verwijzingen als "zoals hierboven", "zie hieronder", "dit" zonder onderwerp.
- Eén bewering per zin. Geen zinnen met drie claims tegelijk.
- Concreet in plaats van vaag: niet "snel", wel "binnen zes weken live" (als dat klopt).
- Geen loze woorden zonder bewijs ("innovatief", "next level", "uniek").

## Schrijfstijl

- B1: korte zinnen, gewone woorden, één gedachte per alinea. Leg vakwoorden uit bij
  het eerste gebruik (bijvoorbeeld "hosting: de plek waar je website staat").
- Je-vorm, actief, direct. Schrijf zoals Bas, Koen of Mats het aan tafel zouden zeggen.
- Gebruik synoniemen en verwante woorden waar het natuurlijk is ("kosten", "prijs",
  "wat je betaalt"). Stop geen zoekwoorden in zinnen waar ze niet passen.
- Geen streeflengte. Google heeft geen voorkeur voor een aantal woorden. Het artikel is
  af als de vraag volledig beantwoord is, inclusief de vervolgvragen van de lezer.
- Leg de laatste hand met de `humanizer`-skill en de lijst "AI-tells" in CLAUDE.md:
  geen opgeklopte taal, geen drietallen uit gewoonte, geen "Het is niet X, het is Y",
  geen afsluiters als "Kortom, …" bij elke sectie.

## Niet doen (volgens Google onnodig, of zonder bewijs)

- Geen llms.txt, aparte AI-bestanden of speciale opmaak "voor AI": Google gebruikt ze niet.
- Niet één onderwerp over veel bijna-gelijke pagina's verspreiden (bijvoorbeeld per
  stad of per variant) om meer te ranken: dat valt onder scaled content abuse.
- Geen datum aanpassen zonder echte inhoudelijke wijziging. Nep-versheid helpt niet.
- Geen gekochte of nep-vermeldingen op andere sites.
- Geen belangrijke informatie alleen in een afbeelding of een PDF.
- Geen FAQPage-schema toevoegen voor rich results: Google toont die sinds 2026 niet meer.

## Techniek (artikelbestand)

Bestand: `src/content/blog/<slug>.md`. De slug is het hoofdzoekwoord in kleine letters
met streepjes, kort: `wat-kost-een-website`, niet `blog-artikel-1`.

```md
---
title: "Wat kost een website laten maken?"
description: "Wat een website voor je bedrijf kost, waar het verschil in zit en waar je op let. Met de prijzen die wij zelf hanteren."
date: 2026-11-17
author: bas
placeholder: false
---
```

- `author`: `koen`, `bas` of `mats` (de `id` in `copy.people`). Verplicht zodra
  `placeholder` niet meer `true` is, net als `date`. De build faalt anders.
- `updated`: alleen invullen bij een echte inhoudelijke wijziging. Wordt "Bijgewerkt op"
  in de byline en `dateModified` in de structured data.
- De template maakt automatisch de byline ("Geschreven door … op …", gelinkt naar
  LinkedIn), `og:type` article en `BlogPosting`-structured data met auteur, datums,
  uitgever en beeld. Daar hoef je in het artikel niets voor te doen.

- **Illustratie (standaard bij elk artikel):** bedenk een compositie van de logoblokken die
  het onderwerp uitbeeldt, zonder tekst in het beeld. Voeg hem toe aan `VISUALS` in
  `scripts/blog-visuals.mjs` (sleutel = slug), draai `node scripts/blog-visuals.mjs`, bekijk
  de PNG en verbeter tot hij in één oogopslag leesbaar is. Zet dan in de frontmatter:
  `image: "/images/blog/<slug>.svg"` en `imageAlt: "…"` (beschrijf wat je ziet en wat het
  betekent). De template toont hem onder de byline en gebruikt de PNG als deelbeeld.
- Andere afbeeldingen alleen met vastgelegde rechten, met vaste afmetingen en een alt-tekst
  die beschrijft wat er te zien is. Geen AI-beeld van werk, team of pand.
- Na publicatie: in Google Search Console en Bing Webmaster Tools de URL laten
  indexeren. Volg zichtbaarheid in het Search Console-rapport voor generatieve AI.

## Checklist vóór publicatie

- [ ] Titel bevat het hoofdzoekwoord, is een natuurlijke vraag of zin, ≤ ~60 tekens.
- [ ] Beschrijving 120-155 tekens, uniek, zegt wat de lezer krijgt.
- [ ] Eerste alinea beantwoordt de titelvraag volledig.
- [ ] Elke H2 is een concrete vraag of bewering; elke sectie begint met een los antwoord.
- [ ] Minstens één sectie met eigen ervaring van KOBAMA uit het interview.
- [ ] Elk cijfer en elke claim komt van een founder of een gelinkte, gelezen bron.
- [ ] Geen verzonnen klanten, bedragen, resultaten of citaten. Geen placeholders meer.
- [ ] Veelgestelde vragen zichtbaar, met antwoorden die op zichzelf kloppen.
- [ ] Lijsten en tabellen waar de inhoud een lijst of vergelijking is.
- [ ] Geen "dit", "hierboven", "hieronder" zonder onderwerp.
- [ ] B1, je-vorm, geen em-dashes, geen AI-tells (humanizer gedraaid).
- [ ] Interne links naar pijler en verwante artikelen, als eigen zin met beschrijvende linktekst.
- [ ] Bestaande verwante artikelen linken terug naar het nieuwe artikel.
- [ ] Auteur is een echte founder; datum klopt.
- [ ] Illustratie gemaakt, bekeken en gekoppeld met `image` en een beschrijvende `imageAlt`.
- [ ] `npm run build` en `npm run qa` slagen.
- [ ] Status in `CONTENT-ROADMAP.md` bijgewerkt.

## Bronnen

- Google, "Optimizing your website for generative AI features on Google Search" (mei 2026):
  https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google, "Top ways to ensure your content performs well in Google's AI experiences on
  Search" (mei 2025): https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search
- Google, "Creating helpful, reliable, people-first content":
  https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Google, Article structured data:
  https://developers.google.com/search/docs/appearance/structured-data/article
- Microsoft Advertising, "Optimizing your content for inclusion in AI search answers"
  (oktober 2025): https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers
- Aggarwal e.a., "GEO: Generative Engine Optimization" (KDD 2024): https://arxiv.org/abs/2311.09735
- Ahrefs, "AI Overview citations top 10" (update maart 2026): https://ahrefs.com/blog/ai-overview-citations-top-10/

Bijwerken als Google of Bing hun richtlijnen aanpassen. Noteer de datum bovenaan.
