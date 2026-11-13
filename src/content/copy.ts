// Vastgestelde copy voor KOBAMA.nl: de enige bron voor alle tekst op de site.
// Stem: je-vorm, koppen zijn korte zinnen met een punt.
// Niets verzinnen: geen klanten, resultaten, testimonials of bedragen (zie DESIGN-BRIEF.md).

export const copy = {
  meta: {
    ogImage: "/images/og-kobama.png",
    ogImageAlt: "KOBAMA: Wij bouwen de site die je bedrijf nog niet heeft.",
    title: "Website laten maken voor zzp & mkb | KOBAMA",
    description:
      "Laat een professionele website maken door KOBAMA. Persoonlijk webdesign voor zzp en mkb in heel Nederland, met maatwerk en duidelijke afspraken.",
  },

  // Meta van de losse pagina's (titel en description staan hier, niet in de pagina's).
  pages: {
    bedrijfsgegevens: {
      title: "Bedrijfsgegevens en contact | KOBAMA",
      description: "Bekijk de bedrijfs- en contactinformatie van KOBAMA. Neem contact op voor vragen over onze websites en dienstverlening.",
      crumb: "Bedrijfsgegevens",
    },
    privacy: {
      title: "Privacybeleid | KOBAMA",
      description: "Lees hoe KOBAMA omgaat met persoonsgegevens, contactaanvragen, gegevensbescherming en jouw privacyrechten.",
      crumb: "Privacybeleid",
    },
  },

  // Beschrijving van KOBAMA in de structured data (landelijk, geen plaatsnamen).
  schema: {
    organizationDescription: "KOBAMA ontwerpt en bouwt professionele websites voor zzp'ers en mkb-bedrijven in heel Nederland.",
    service: {
      name: "Webdesign en websiteontwikkeling voor zzp en mkb",
      type: "Webdesign en websiteontwikkeling",
      description: "KOBAMA ontwerpt en bouwt professionele websites op maat voor zelfstandigen en mkb-bedrijven, met persoonlijk contact en duidelijke afspraken.",
      audience: "Zelfstandige ondernemers en mkb-bedrijven",
    },
  },

  // Compacte sectie op de homepage met links naar de blogartikelen.
  info: {
    heading: "Handige informatie voor ondernemers.",
    intro: "Wat een website kost, wat onderhoud inhoudt en hoe je online vindbaar wordt: drie artikelen om je keuze op te baseren.",
    all: "Alle artikelen",
  },

  nav: {
    brand: "KOBAMA",
    cta: "Plan een gesprek",
    links: [
      { label: "Transformatie", href: "#transformatie" },
      { label: "Werk", href: "#werk" },
      { label: "Werkwijze", href: "#werkwijze" },
      { label: "Team", href: "#team" },
      { label: "Blog", href: "/blog/" },
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
    sliderLabel: "Schuif tussen de oude en de nieuwe site",
    caption: "Zelfde bedrijf. Zelfde verhaal. Een site die het eindelijk waarmaakt.",
  },

  // Track record: echte klanten, met toestemming genoemd (bevestigd door Bas, 5 oktober 2026).
  // `accent` is de huiskleur van de klant, gemeten uit de screenshot van hun site.
  werk: {
    heading: "Deze sites bouwden we al.",
    newTab: "opent in een nieuw tabblad",
    thumbAlt: "Website van",
    items: [
      { name: "De Garengarage", url: "https://www.degarengarage.nl/", image: "/images/werk/garengarage.webp", accent: "#dcccbf" },
      { name: "BB-Collect", url: "https://bb-collect.com/", image: "/images/werk/bb-collect.webp", accent: "#6cc3b3" },
      { name: "WBMS Vastgoed", url: "https://www.wbms-vastgoed.nl/", image: "/images/werk/wbms-vastgoed.webp", accent: "#1671e4" },
      { name: "BLS Service", url: "https://basschaefers.com/", image: "/images/werk/bls-service.webp", accent: "#3c5bff" },
      { name: "GweBas", url: "https://gwebas.nl/", image: "/images/werk/gwebas.webp", accent: "#368c63" },
    ],
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
    linkedinLabel: "LinkedIn",
    members: [
      {
        id: "koen",
        name: "Koen Verhoeff",
        bio: "Wordt blij van een leeg scherm dat stukje bij beetje een werkende site wordt. Koen is de techneut van het stel: hij zorgt dat alles snel laadt en blijft werken.",
        photo: "/images/team-koen.webp",
        linkedin: "https://www.linkedin.com/in/koen-verhoeff/",
        isPlaceholder: false,
      },
      {
        id: "bas",
        name: "Bas Schaefers",
        bio: "Bouwt het liefst aan iets wat mensen echt gebruiken. Bas verbindt het gesprek met de techniek: hij vertaalt wat jij voor ogen hebt naar wat er gebouwd wordt.",
        photo: "/images/team-bas.webp",
        linkedin: "https://www.linkedin.com/in/bas-schaefers",
        isPlaceholder: false,
      },
      {
        id: "mats",
        name: "Mats Jongmans",
        bio: "Praat het liefst met ondernemers over wat ze aan het bouwen zijn. Mats hoort snel wat jouw klant wil weten en zorgt ervoor dat je site dat ook precies zegt.",
        photo: "/images/team-mats.webp",
        linkedin: "https://www.linkedin.com/in/mats-jongmans/",
        isPlaceholder: false,
      },
    ],
  },

  closing: {
    heading: "Klaar voor een site die klopt?",
    cta: "Plan een gesprek",
    priceLine: "Een eerste gesprek is vrijblijvend en kost niets. We kijken samen of het klikt.",
  },

  blog: {
    meta: {
      title: "Webdesign tips voor ondernemers | KOBAMA",
      description: "Praktische tips over websites laten maken, onderhoud, kosten en online vindbaarheid. Voor zzp'ers en mkb-bedrijven, uitgelegd door KOBAMA.",
    },
    heading: "Blog.",
    intro: "Wat we leren bij het bouwen van websites voor kleine en middelgrote bedrijven.",
    empty: "Er staan nog geen artikelen online.",
    back: "Alle artikelen",
    datePending: "[Datum volgt]",
    authorPending: "[Auteur volgt]",
    writtenBy: "Geschreven door",
    on: "op",
    updated: "Bijgewerkt op",
    // Alleen zichtbaar in de devserver: geplande artikelen staan niet in de build.
    scheduled: "Gepland, niet live. Gaat live op",
    closing: "Wil je weten wat dit voor jouw site betekent?",
  },

  footer: {
    brand: "KOBAMA",
    city: "Amsterdam",
    cta: "Plan een gesprek",
    privacy: "Privacybeleid",
    details: "Bedrijfsgegevens",
    blog: "Blog",
    more: "Bedrijfsgegevens en privacybeleid tonen",
  },
} as const;
