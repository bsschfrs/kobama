// Single source of truth for copy across all five exploration versions (v1–v5).
// Structure and content are identical across versions; only aesthetic treatment
// differs. Keeps the five directions genuinely comparable.
//
// Voice: je-vorm, sentence case, declarative headings with a period.
// No fabricated clients, testimonials, team members, or prices — see PRODUCT.md
// "Evidence on Hand". Placeholder fields are marked isPlaceholder.

export const copy = {
  meta: {
    title: "KOBAMA — websites voor het mkb",
    description:
      "KOBAMA ontwerpt en bouwt websites voor kleine en middelgrote bedrijven. Strategie, design en development in één traject.",
  },

  nav: {
    brand: "KOBAMA",
    cta: "Plan een gesprek",
    links: [
      { label: "Transformatie", href: "#transformatie" },
      { label: "Werkwijze", href: "#werkwijze" },
      { label: "Werk", href: "#werk" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
  },

  hero: {
    heading: "Wij bouwen de site die je bedrijf nog niet heeft.",
    sub: "Eén zzp'er of dertig medewerkers, welke branche dan ook: je krijgt hetzelfde traject.",
    cta: "Plan een gesprek",
  },

  statement: {
    lines: [
      "KOBAMA is een klein team dat elk project zelf van begin tot eind doet.",
      "Geen sjablonen, geen tussenlagen — één site, gebouwd door de mensen die hem ook opleveren.",
    ],
  },

  transformatie: {
    heading: "Zo ziet een upgrade eruit.",
    before: { label: "Voor", isPlaceholder: true, placeholderNote: "Screenshot bestaande site volgt" },
    after: { label: "Na", isPlaceholder: true, placeholderNote: "Screenshot nieuwe site volgt" },
    caption: "Zelfde bedrijf. Zelfde verhaal. Een site die het eindelijk waarmaakt.",
  },

  werkwijze: {
    heading: "Werkwijze.",
    steps: [
      {
        number: "01",
        title: "Ontdekken.",
        body: "We beginnen met een gesprek over je bedrijf, je klanten en wat je site vandaag niet voor je doet. Geen vragenlijst — een gesprek.",
      },
      {
        number: "02",
        title: "Ontwerpen & bouwen.",
        body: "We ontwerpen en bouwen je site in één doorlopend traject, niet in losse fases met wachttijd ertussen. Je ziet het werk voordat het af is.",
      },
      {
        number: "03",
        title: "Live.",
        body: "Bij livegang staan hosting, onderhoud, vindbaarheid en laadsnelheid al goed. Je site werkt vanaf dag één — en blijft werken.",
      },
    ],
  },

  work: {
    heading: "Recent werk.",
    cases: [
      {
        isPlaceholder: true,
        name: "[Klantnaam volgt]",
        problem: "[Wat het probleem was — volgt zodra het eerste project is opgeleverd.]",
        outcome: "[Wat er gebeurde — volgt.]",
      },
      {
        isPlaceholder: true,
        name: "[Klantnaam volgt]",
        problem: "[Wat het probleem was — volgt zodra het eerste project is opgeleverd.]",
        outcome: "[Wat er gebeurde — volgt.]",
      },
    ],
  },

  people: {
    heading: "Wie het maakt.",
    bio: "Achter KOBAMA zit een klein team dat vakmanschap boven volume zet. [Portret en namen volgen.]",
    priceLine: "Een eerste gesprek is vrijblijvend en kost niets — we kijken samen of het klikt.",
    isPlaceholder: true,
  },

  closing: {
    heading: "Klaar voor een site die klopt?",
    cta: "Plan een gesprek",
  },

  footer: {
    brand: "KOBAMA",
    city: "Amsterdam",
    cta: "Plan een gesprek",
  },
} as const;
