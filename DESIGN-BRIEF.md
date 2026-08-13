# Design brief — bedrijfswebsite

Contextbestand voor Claude Code. Bevat de design-uitgangspunten, gemeten
referentiewaarden en het visuele motief van de **gekozen richting (v4,
"Hollands licht")**. Lees dit volledig voordat je code schrijft.

Dit document beschrijft wat er **gebouwd is**, niet een plan vooraf. Bij
twijfel tussen deze tekst en `src/pages/v4/index.astro`: de code wint, meld
het verschil, update dan dit bestand.

---

## 0. Herkomst — vijf richtingen, één winnaar

Er zijn vijf volledig uitgewerkte richtingen gebouwd en vergeleken op
`/v1`–`/v5` (zelfde structuur en copy, alleen esthetiek verschilde):
Schemergevel (donker, amber), Kadastraal (technische lijntekening),
Dither (brutalistisch zwart-wit), **Hollands licht** (wit, rustig — **gekozen**),
Reflectie (cinematisch water). De vier niet-gekozen versies blijven als
referentiemateriaal in de repo staan, maar zijn geen actieve alternatieven
meer — bouw niet verder aan v1/v2/v3/v5.

---

## 1. Opdracht

Bouw een **bedrijfs- en dienstensite**. Geen SaaS-productlanding, geen webshop.

Doel van de pagina: vertrouwen wekken bij zakelijke opdrachtgevers met een lange
beslistermijn, en leiden naar één contactmoment (gesprek aanvragen).

### Anti-doel

De site mag **niet** herkenbaar zijn als AI-gegenereerd. Concreet verboden:

- Zwarte achtergrond + Inter + pill-knoppen + grote afgeronde donkere kaarten
  zonder eigen motief. Dat is de default-look van elke AI-landingspagina —
  en precies waarom v1 t/m v3/v5 niet gekozen zijn.
- Crème achtergrond (`#F4F1EA`) met high-contrast serif en terracotta accent
  (rond `#D97757`).
- Genummerde markers (01 / 02 / 03) tenzij de inhoud werkelijk een volgorde is
  (Werkwijze is dat wél).
- Generieke stockfoto's van handen schuddende mensen of abstracte netwerken.
- Icoongrids met feature-rijtjes, gelijkmatig verdeelde kaartjes.

Als een keuze net zo goed op een willekeurige andere site zou kunnen staan,
is het de verkeerde keuze.

---

## 2. Referenties

### fora.so — typografie en compositieprincipe

Gemeten in de gerenderde pagina, niet geschat:

- Negatieve letterspacing op elk typeniveau (~−0.02 tot −0.04em).
- Eén consequent beeldmotief dat de hele site draagt.
- Sectie-eyebrows en sticky card-stacking zijn bekeken maar **niet
  overgenomen** in v4 — te druk voor de "Hollands licht"-rust.

### fora.so — de gelaagde cinematische hero (wél overgenomen, letterlijk bestudeerd)

De hero-mechaniek in sectie 4 is direct nagebouwd van fora.so's eigen hero:
drie lagen (achtergrond-sfeer, centrale mockup, voorgrond) die met
verschillende snelheid bewegen tijdens het scrollen, waarbij de voorgrond
oplost in de achtergrondkleur van de volgende sectie. Zie sectie 4 voor de
KOBAMA-vertaling (grachtenfoto in plaats van heuvels/aurora).

### Wat NIET overgenomen is (van fora.so, ongeacht richting)

- Pricingtabel met tiers. Een dienstensite prijst niet per maand.
- "Get started free" / self-service CTA's.
- Gamification, leaderboards, membercounts.

---

## 3. Design tokens (v4 — "Hollands licht")

### Kleur

| Token | Waarde | Gebruik |
|---|---|---|
| `--bg` | `#FFFFFF` | Paginacanvas |
| `--fg` | `#111111` | Koppen, primaire tekst |
| `--muted` | `#767267` | Secundaire tekst, bijschriften |
| `--hairline` | `#D8D5CC` | Randen, scheidingslijnen, placeholder-chips |
| `--accent` | `#B0602F` | Enige accentkleur — warm terracotta-bruin |
| `--navy` | `#111A2B` | Canal-water, intro-sectie-achtergrond |
| `--sky` | `#9399BB` | Hero-lucht (periwinkel) |
| `--sky-pale` | `#B6B2CD` | Middenverloop hero-lucht |

`--navy` en `--sky` zijn **gemeten uit de daadwerkelijke herofoto**
(`public/images/canal.jpg`, zie sectie 4), niet ontworpen. Dat is waarom ze
niet de "gewone" AI-blauwtinten zijn.

### Typografie

Inter (400/500) voor alles, **één uitzondering**: Source Serif 4 italic (400)
voor precies één nadrukwoord per pagina (nu: "zelf" in de intro-sectie). Geen
bold koppen, met **één uitzondering**: de hero-h1 is op mobiel (≤640px)
30px/700 in plaats van 500, zodat de kop zich duidelijker onderscheidt van de
kleinere (14px) subregel op dat formaat. Op desktop blijft h1 ongewijzigd.

| Rol | Grootte | Regelhoogte | Letterspacing |
|---|---|---|---|
| h1 | `clamp(32px, 3.9vw, 54px)` | 1.06 | −0.03em |
| h2 | `clamp(24px, 3.2vw, 40px)` | 1.15 | −0.03em |
| Statement | `clamp(20px, 2.5vw, 31px)` | 1.45 | −0.025em |
| Body | 15 / 24px | — | −0.2px |

Schaalt vloeiend via `clamp()`/`vw`, geen harde mobile-breakpoint-sprong voor
koppen.

### Grid en ritme

- Contentkolom: `max-width: 1240px`, buitenmarge 40px (24px op mobiel)
- Tekstblokken: `max-width: 520px` (hero) / `560px` (body-secties)
- Sectiepadding: `clamp(80px, 15vh, 150px)` — schaalt met viewport, geen vaste
  mobile/desktop knip

### Vorm

- **Knoppen hebben een lichte afronding, geen pill.** `border: 1px solid`,
  `border-radius: 6px`, hoogte 48px, `padding: 0 30px`, 13px label. Hover:
  vult met `--fg`, tekst wit. Op de foto (nav, hero) krijgt de knop een
  donkere variant (`#0D1424`) voor contrast — zie `.nav:not(.is-solid)` en
  `.hero-copy .btn-primary` in de code.
- Placeholder-elementen (cases, portret, logo-chips): `border: 1px dashed
  var(--hairline)` — bewust duidelijk "nog niet echt", nooit stilletjes
  ingevuld met verzonnen content.
- Geen box-shadows behalve onder de zwevende site-mockup (sectie 4), waar een
  echte drop-shadow het zwevende effect verkoopt.

---

## 4. Het motief: de gelaagde canal-hero

Dit is het signature-element, direct geïnspireerd op fora.so's eigen hero,
vertaald naar Amsterdam.

### Waarom nu wél fotografie (in tegenstelling tot eerdere aanname)

Eerdere versies van dit brief verboden fotografie als achtergrondlaag
(contrast, laadtijd, "grachtenpand bij zonsondergang is toerisme"). Voor v4 is
daarvan bewust afgeweken, op expliciet verzoek: de fora.so-hero *is* een foto,
gelaagd en bewerkt, geen silhouet. De aanpak die het wél werkt laat maken:

- De foto is **gesneden in twee lagen** (`public/images/hero-sky.webp`,
  `hero-facades.webp`), niet één grote achtergrondafbeelding — dat maakt
  differentiële parallax en de navy-oplossing mogelijk.
- De voorgrondlaag heeft een **alpha-fade aan de bovenkant** (Python/PIL,
  ease-in kromme) zodat hij naadloos over de apart bewegende luchtlaag valt.
- Beeldrechten: `new3.jpg` (bron voor `canal.jpg`) is door de opdrachtgever
  aangeleverd als vrij te gebruiken. **Herverifieer de licentie voor
  livegang** — dit is nog niet dubbel gecheckt.

Silhouet-SVG's (het oude v1-motief) zijn dus **niet** het motief van v4. Als
een toekomstige sectie een lichte grafische texture nodig heeft, gebruik dan
geen fotografie als flat background — dat principe staat nog overeind, alleen
de hero zelf is de bewuste uitzondering.

### De laag-mechaniek

Vier lagen, in een 220vh-scrollwrapper met een CSS-sticky stage (niet GSAP's
eigen `pin`, die injecteert een spacer-element dat vecht met Astro's layout):

| Laag | Scrollsnelheid | Rol |
|---|---|---|
| Lucht (`hero-sky.webp`) | −6% + lichte scale | sfeer, drijft nauwelijks |
| Kop/subregel/CTA | −26%, fade out | vertrekt als eerste |
| Site-mockup (HTML/CSS) | −78% | stijgt op en verlaat het frame |
| Gevelrij/water (`hero-facades.webp`) | −14% | blijft achter, dus de mockup lijkt er *achterlangs* te bewegen |

Geïmplementeerd met GSAP `ScrollTrigger` (`scrub: 0.6`) in
`src/scripts/hero-cinematic.ts`. De voorgrondlaag heeft zelf een gradient die
oplost naar `--navy` — precies de achtergrondkleur van de sectie erna, dus
geen zichtbare naad. Een aparte navy-underlay (`.hero-stage::after`) voorkomt
dat de lucht zichtbaar wordt wanneer de voorgrond omhoog schuift.

De nav flipt van transparant-over-foto naar de vaste lichte balk zodra de
scrollprogressie door de hero >55% is (`.nav.is-solid`).

### De site-mockup

Puur HTML/CSS (`src/components/SiteMockup.astro`), geen screenshot — blijft
scherp op elke grootte en claimt geen bestaand klantproject. Vrijwel alle
tekst is "gegreekt" (grijze balkjes); precies één echte zin
("Een site die je bedrijf vooruit helpt.") is leesbaar.

**Schaalregel:** elke interne maat staat in `em` t.o.v. het component se eigen
`font-size`. De ouder zet `--mockup-fs` = gerenderde breedte ÷ 62 (het
ontwerp is 62em breed). **Gebruik hiervoor geen `container-type`/`cqw`** —
Astro's Lightning CSS-pass strip die property stil bij deze build-target (zie
sectie 8). De `em`-ladder is de bewuste, geteste vervanging.

---

## 5. Sectiestructuur (zoals gebouwd)

1. **Nav** — `position: fixed`, transparant-met-donkere-tekst over de foto,
   flipt naar effen lichte balk + hairline zodra de hero voor >55% gescrold is.
   Ankerlinks (Werkwijze/Werk/Team), CTA rechts.
2. **Hero** — de gelaagde canal-hero (sectie 4). Kop/subregel/CTA linksboven
   in het rustigste deel van de lucht.
3. **Intro (navy)** — 2 statement-zinnen (scroll-color-reveal: `rgba(255,255,255,.28)`
   → wit), één met het italic nadrukwoord. Daaronder een 3-koloms
   proof-strip (Eén aanspreekpunt / Vaste doorlooptijd / Klaar bij
   oplevering). Lost af naar wit onderaan.
4. **Logo-rij** — placeholder-chips, expliciet gelabeld "logo's volgen zodra
   de eerste projecten zijn opgeleverd".
5. **Transformatie** — scroll-gekoppelde before/na-wipe (`clip-path`,
   250vh-wrapper, zelfde `--progress`-mechaniek als de hero-sectie maar los
   geïmplementeerd in `scroll-transform.ts`).
6. **Werkwijze** — 3 genummerde stappen (Ontdekken / Ontwerpen & bouwen /
   Live). Stap 3 heeft vier detail-chips: Hosting, Onderhoud, Vindbaarheid,
   Laadsnelheid — geen aparte "ontzorging"-sectie.
7. **Werk** — 2 case-placeholders (dashed border), geen verzonnen klanten.
8. **Team** — portret-placeholder + bio + prijsregel ("vrijblijvend eerste
   gesprek", geen bedrag).
9. **Slot-CTA** — één regel, één knop.
10. **Footer** — merk, stad, contact-link. Minimaal.

Geen FAQ-sectie (bewust losgelaten uit een eerdere 10-secties-opzet — de
uiteindelijke 7-secties-briefing van de opdrachtgever vroeg er niet om).

---

## 6. Copy

- Taal: **Nederlands, je-vorm** (bevestigde beslissing — niet u-vorm).
- Koppen zijn korte declaratieve zinnen **met een punt**. "Wij bouwen de site
  die je bedrijf nog niet heeft." Niet Title Case, geen hoofdletters.
- CTA is overal identiek: **"Plan een gesprek"**.
- Geen "naadloos", "ontzorgen", "oplossingen op maat", "dé specialist".
- Prijsregel: "een vrijblijvend eerste gesprek" — **geen bedrag genoemd**
  (bevestigde beslissing).
- Placeholders zijn expliciet leesbaar als placeholder (`[Klantnaam volgt]`,
  "Portret volgt", "logo's volgen zodra...") — nooit stilletjes verzonnen
  content.
- Alle copy staat centraal in `src/content/copy.ts` — één bron voor structuur
  die (voorheen) door meerdere richtingen werd gedeeld.

---

## 7. Motion

- **Hero-parallax**: zie sectie 4. GSAP ScrollTrigger, `scrub: 0.6`, vier
  lagen met eigen snelheid.
- **Transformatie-wipe**: scroll-gekoppeld, geen klik-slider. `--progress`
  CSS-variabele gezet door een `requestAnimationFrame`-scroll-handler
  (`scroll-transform.ts`), gebruikt in `clip-path: inset(...)`.
- **Statement/intro-reveal**: `IntersectionObserver` (`reveal.ts`) zet
  `.is-revealed` zodra 50% zichtbaar; CSS doet de kleurtransitie
  (`transition: color .5s cubic-bezier(.44,0,.56,1)`).
- **Nav-flip**: losse `ScrollTrigger` op dezelfde hero-scroller, toggelt
  `.is-solid` op 55% progressie.
- **Alles binnen `prefers-reduced-motion`**: bij reduce-motion wordt de hero
  een gewone statische compositie (`height:auto`, geen pin, geen
  ScrollTrigger); de overige scripts zetten meteen de eindstaat in plaats van
  te animeren.

---

## 8. Kwaliteitsvloer

- Responsive tot 360px breed; mockup en hero-copy zijn los geschaald per
  breakpoint zodat de CTA nooit onder de mockup verdwijnt.
- Zichtbare keyboard-focus op elk interactief element (`outline: 2px solid
  var(--accent)`).
- Contrast expliciet gemeten, niet aangenomen: hero-subline is `#232838` op
  `#9399BB` (5.2:1) nadat een eerdere `#2C3348` op 4.49:1 net onder AA bleek.
  **Meet contrast op elke tekst boven de foto apart** — de gemeten sky-kleur
  is geen standaardtint.
- Motief-afbeeldingen: `alt=""`, decoratief.
- **Lightning CSS-valkuil**: `container-type` en handgeschreven
  `backdrop-filter` worden **stil verwijderd** bij deze build-target — geen
  foutmelding, de rest van de regel blijft staan. Verifieer met
  `grep -c container-type dist/_astro/*.css` (hoort 0 te zijn als je het
  bewust vermijdt) na elke wijziging die op container-queries of
  backdrop-filter leunt. `astro dev` en `astro build` draaien verschillende
  CSS-pipelines — controleer altijd de **build**, niet alleen dev, voor
  layout die hierop leunt.
- Lighthouse performance ≥ 90 op mobiel blijft het doel; de twee WebP-lagen
  zijn geoptimaliseerd (7KB lucht, 132KB voorgrond) juist om dit te halen
  ondanks echte fotografie.

---

## 9. Beslissingen

- **Richting: v4 "Hollands licht"**, gekozen na vergelijking van vijf
  uitgewerkte versies. Wit/rustig won het van de donkere/amber-richting die
  in eerdere versies van dit brief was vastgelegd.
- **Fotografie: ja, in de hero — herzien besluit.** Eerdere aanname
  ("geen fotografie") is losgelaten voor de gelaagde cinematische hero op
  expliciet verzoek. Rechten van de brondfoto (`new3.jpg`) zijn door de
  opdrachtgever aangedragen als vrij te gebruiken; **nog te herverifiëren
  vóór livegang**.
- **Overgangskleur hero → intro: diep marineblauw uit het water** (`#111A2B`,
  gemeten uit de foto), niet fora.so's letterlijke near-black — gekozen om
  consistent te blijven met de lichte, frisse richting.
- **Bedrijfsnaam: KOBAMA.** Zie `PRODUCT.md` voor volledige product- en
  doelgroepcontext.
- **Aanspreekvorm: je-vorm. Aantal cases: 2. Prijsregel: vrijblijvend eerste
  gesprek, geen bedrag.** Alle drie bevestigd, niet opnieuw ter discussie
  tenzij de opdrachtgever het expliciet heroverweegt.
- **Referenties / cases / teamportretten:** nog geen echte content. Bouw met
  duidelijk gemarkeerde placeholders, verzin geen klanten of resultaten.
- **v1/v2/v3/v5 blijven staan** als vergelijkingsmateriaal, niet als actieve
  alternatieven. Niet per ongeluk verder uitbouwen.
- **Higgsfield-koppeling** aan Claude Code staat op de planning, maar later.
  Ontwerp er nu niet omheen.
