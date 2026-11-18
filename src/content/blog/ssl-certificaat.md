---
title: "Wat is een SSL-certificaat en heb je het nodig?"
description: "Wat een SSL-certificaat is, waarom je website het nodig heeft, wat het kost en wat je doet als je browser 'Niet beveiligd' laat zien."
date: 2026-11-24T09:00:00+01:00
image: "/images/blog/ssl-certificaat.svg"
imageAlt: "Illustratie met bouwblokken: een blauw blok helemaal omringd door een gestippelde contour als beschermlaag, met een klein oranje blok als slot ervoor."
---

Een SSL-certificaat zorgt ervoor dat de verbinding tussen je website en je bezoeker versleuteld is. Je ziet het aan https aan het begin van het webadres. Zonder certificaat toont de browser "Niet beveiligd" naast je adres. Elke website heeft het nodig, en bij veel hostingpartijen is een certificaat gratis.

Je leest hier wat een SSL-certificaat doet, waarom je het nodig hebt, wat het kost en hoe je controleert of je site er een heeft.

## Wat doet een SSL-certificaat?

Een SSL-certificaat versleutelt alles wat er tussen je website en de browser van je bezoeker heen en weer gaat. Vult iemand een contactformulier in, dan kan niemand onderweg meelezen of de gegevens veranderen.

Het certificaat bewijst ook dat de website echt bij je domeinnaam hoort. De browser controleert dat elke keer dat iemand je site opent.

SSL is de oude naam. Tegenwoordig heet de techniek TLS, maar in het dagelijks gebruik zeggen bijna alle hostingpartijen nog SSL-certificaat. Het betekent hetzelfde.

## Waarom heeft je website een SSL-certificaat nodig?

Je website heeft een SSL-certificaat nodig omdat browsers bezoekers anders waarschuwen. Google Chrome toont volgens zijn [eigen Help-pagina](https://support.google.com/chrome/answer/95617?hl=nl) "Niet beveiligd" bij een site zonder beveiligde verbinding, en raadt bezoekers aan om voorzichtig te zijn.

Dat kost je klanten. Een bezoeker die "Niet beveiligd" ziet naast je naam, vult minder snel een formulier in en twijfelt of je bedrijf wel betrouwbaar is.

Ook Google zelf noemt https als onderdeel van een goede [paginabeleving](https://developers.google.com/search/docs/appearance/page-experience). Een beveiligde verbinding hoort bij de technische basis van elke website. Wat daar nog meer bij hoort, lees je in [wat is technische SEO?](/blog/technische-seo/).

## Wat kost een SSL-certificaat?

Een SSL-certificaat kan gratis zijn. [Let's Encrypt](https://letsencrypt.org/about/), een organisatie zonder winstoogmerk, geeft gratis certificaten uit aan iedereen met een domeinnaam. Veel hostingpartijen regelen zo'n certificaat automatisch.

Er bestaan ook betaalde certificaten. Die controleren bijvoorbeeld uitgebreider wie de eigenaar van de website is. Voor een gewone bedrijfswebsite zonder webshop is een gratis certificaat meestal genoeg. Vraag je hostingpartij wat er bij je pakket zit.

| Soort certificaat | Wat het controleert | Voor wie |
|---|---|---|
| Domeingevalideerd (vaak gratis) | Of je de domeinnaam beheert | De meeste bedrijfswebsites |
| Organisatiegevalideerd of uitgebreid | Ook de gegevens van het bedrijf achter de site | Organisaties die dat extra bewijs willen tonen |

## Hoe zie je of je website een SSL-certificaat heeft?

Je ziet of je website een SSL-certificaat heeft aan het adres in je browser. Begint het met https en staat er geen waarschuwing, dan is de verbinding beveiligd. Zie je "Niet beveiligd", dan ontbreekt het certificaat of klopt er iets niet.

Controleer ook of je site altijd naar https gaat. Typ je adres eens met http:// ervoor. Komt je site dan automatisch op https uit, dan is het goed ingesteld.

## Wat doe je als je browser "Niet beveiligd" toont?

Toont je browser "Niet beveiligd" bij je eigen website, neem dan contact op met je hostingpartij of je webbouwer. Veelvoorkomende oorzaken zijn:

- **Er is nog geen certificaat geïnstalleerd.** Je hostingpartij kan dat meestal snel regelen.
- **Het certificaat is verlopen.** Certificaten zijn beperkt geldig en moeten op tijd worden vernieuwd. Bij de meeste hostingpartijen gaat dat automatisch.
- **De site stuurt bezoekers niet door naar https.** Dan werkt https wel, maar komen bezoekers via een oude link op de onbeveiligde versie.
- **Een onderdeel van de pagina laadt nog via http.** Bijvoorbeeld een oude afbeelding. Dan is de pagina maar half beveiligd.

Wie je hosting regelt en wat je daarbij krijgt, lees je in [domeinnaam en hosting: wat is het verschil?](/blog/domeinnaam-en-hosting/).

## Hoe wij dit aanpakken

Op kobama.nl draait alles via https, en wie het adres met http intypt, komt automatisch op de beveiligde versie uit. Bij KOBAMA mag je je hosting zelf regelen. Wij helpen je daarbij. Vraag bij elk hostingpakket of er een SSL-certificaat bij zit en of het automatisch wordt vernieuwd.

Alles over het laten maken van een website, van kosten tot onderhoud, lees je in [website laten maken: de gids voor ondernemers](/blog/website-laten-maken/).

## Veelgestelde vragen

### Is een SSL-certificaat verplicht?

Een SSL-certificaat is niet in elke situatie wettelijk verplicht, maar in de praktijk heb je het altijd nodig. Zonder certificaat waarschuwt de browser je bezoekers met "Niet beveiligd". Verwerk je persoonsgegevens, bijvoorbeeld via een formulier, dan is een beveiligde verbinding ook een logische manier om die gegevens te beschermen.

### Wat is het verschil tussen http en https?

Het verschil tussen http en https is de versleuteling. Bij https is de verbinding tussen website en bezoeker beveiligd met een certificaat. Bij http gaat alles onversleuteld over het internet.

### Hoe lang is een SSL-certificaat geldig?

Een SSL-certificaat is een beperkte tijd geldig en moet daarna worden vernieuwd. Bij de meeste hostingpartijen gebeurt dat automatisch. Controleer bij je hostingpartij of automatisch vernieuwen aanstaat, zodat je site niet plotseling een waarschuwing krijgt.

### Heb ik een duur SSL-certificaat nodig voor mijn website?

Een duur SSL-certificaat is voor de meeste bedrijfswebsites niet nodig. Een gratis certificaat versleutelt de verbinding even goed. Een betaald certificaat controleert vooral uitgebreider wie er achter de site zit.

## Kort samengevat

Een SSL-certificaat versleutelt de verbinding tussen je website en je bezoeker, te herkennen aan https. Zonder certificaat toont de browser "Niet beveiligd". Een certificaat kan gratis zijn via Let's Encrypt en veel hostingpartijen regelen het automatisch. Controleer of je site altijd naar https doorstuurt en of het certificaat automatisch wordt vernieuwd.
