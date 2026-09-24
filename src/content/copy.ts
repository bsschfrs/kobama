// Vastgestelde copy voor KOBAMA.nl: de enige bron voor alle tekst op de site.
// Stem: je-vorm, koppen zijn korte zinnen met een punt.
// Niets verzinnen: geen klanten, resultaten, testimonials of bedragen (zie DESIGN-BRIEF.md).

export const copy = {
  meta: {
    title: "KOBAMA, websites voor het mkb",
    description:
      "KOBAMA ontwerpt en bouwt websites voor kleine en middelgrote bedrijven. Strategie, design en development in één traject.",
  },

  nav: {
    brand: "KOBAMA",
    cta: "Plan een gesprek",
    links: [
      { label: "Transformatie", href: "#transformatie" },
      { label: "Werkwijze", href: "#werkwijze" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    heading: "Wij bouwen de site die je bedrijf nog niet heeft.",
    sub: "Eén zzp'er of dertig medewerkers, welke branche dan ook: je krijgt hetzelfde traject.",
    cta: "Plan een gesprek",
  },

  contact: "mailto:kobama.info@gmail.com",

  statement: {
    lines: [
      "KOBAMA is een klein team dat elk project zelf van begin tot eind doet.",
      "Geen sjablonen, geen tussenlagen: één site, gebouwd door de mensen die hem ook opleveren.",
    ],
  },

  proof: [
    { title: "Eén aanspreekpunt", body: "Je praat met de mensen die het werk doen, niet met een accountmanager." },
    { title: "Vaste doorlooptijd", body: "Je weet vooraf wanneer je site live gaat, en dat verschuift niet stilletjes." },
    { title: "Klaar bij oplevering", body: "Hosting, onderhoud, vindbaarheid en snelheid staan goed op dag één." },
  ],

  transformatie: {
    heading: "Zo ziet een upgrade eruit.",
    // Verzonnen voorbeeldbedrijf ("Voorbeeld") tot de eerste echte klantcase er is (zie DESIGN-BRIEF.md).
    before: { label: "Voor" },
    after: { label: "Na" },
    caption: "Zelfde bedrijf. Zelfde verhaal. Een site die het eindelijk waarmaakt.",
  },

  werkwijze: {
    heading: "Werkwijze.",
    steps: [
      {
        number: "01",
        title: "Ontdekken.",
        body: "We beginnen met een gesprek over je bedrijf, je klanten en wat je site vandaag niet voor je doet. Geen vragenlijst. Een gesprek.",
      },
      {
        number: "02",
        title: "Ontwerpen & bouwen.",
        body: "We ontwerpen en bouwen je site in één doorlopend traject, niet in losse fases met wachttijd ertussen. Je ziet het werk voordat het af is.",
      },
      {
        number: "03",
        title: "Live.",
        body: "Bij livegang staan hosting, onderhoud, vindbaarheid en laadsnelheid al goed. Je site werkt vanaf dag één en blijft werken.",
      },
    ],
  },

  people: {
    heading: "Wie het maakt.",
    members: [
      {
        name: "Koen Verhoeff",
        bio: "Olie sjeik en financiële kracht van het drietal. Bachelor Informatiekunde, nu bezig met de master Business Information & Technology Management. Zorgt voor de technische kant van de website.",
        photo: "/images/team-koen.webp",
        // Grapversie (zie README "Nog open"): vervangen vóór livegang. `qa --launch` houdt hem tegen.
        isPlaceholder: true,
      },
      {
        name: "Bas Schaefers",
        bio: "Bachelor Bedrijfskunde en master Entrepreneurship. Ervaring in marketing.",
        photo: "/images/team-bas.webp",
        isPlaceholder: false,
      },
      {
        name: "Mats Jongmans",
        bio: "Bachelor Bedrijfskunde, met ruime ervaring in sales.",
        photo: "/images/team-mats.webp",
        isPlaceholder: false,
      },
    ],
  },

  closing: {
    heading: "Klaar voor een site die klopt?",
    cta: "Plan een gesprek",
    priceLine: "Een eerste gesprek is vrijblijvend en kost niets. We kijken samen of het klikt.",
  },

  footer: {
    brand: "KOBAMA",
    city: "Amsterdam",
    cta: "Plan een gesprek",
    privacy: "Privacyverklaring",
  },
} as const;
