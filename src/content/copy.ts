// Vastgestelde copy voor KOBAMA.nl: de enige bron voor alle tekst op de site.
// Stem: je-vorm, koppen zijn korte zinnen met een punt.
// Niets verzinnen: geen klanten, resultaten, testimonials of bedragen (zie DESIGN-BRIEF.md).

export const copy = {
  meta: {
    ogImage: "/images/og-kobama.png",
    ogImageAlt: "KOBAMA: Wij bouwen de site die je bedrijf nog niet heeft.",
    title: "Website laten maken voor zzp & mkb | KOBAMA",
    description:
      "Betaalbare websites voor zzp en mkb door KOBAMA uit Amsterdam. Vanaf €800 excl. btw, zonder verplicht onderhoudscontract en met persoonlijk contact.",
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
    organizationDescription: "KOBAMA is een klein webteam uit Amsterdam dat betaalbare websites bouwt voor zzp'ers en mkb-bedrijven in heel Nederland, vanaf €800 excl. btw en zonder verplicht onderhoudscontract. Je betaalt nooit voor werk dat niet gebeurt.",
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
    intro: "Wat een website kost, hoe je hem betaalbaar houdt en wat een domeinnaam en hosting zijn: drie artikelen om je keuze op te baseren.",
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
    heading: "Wij bouwen websites die je bedrijf verder brengen.",
    sub: "Voor zzp'ers en mkb in heel Nederland.",
    // Bij de drie blokken: blauw, antraciet, oranje
    points: ["Persoonlijk", "Op maat", "Zonder onnodige kosten"],
    cta: "Plan een gesprek",
  },

  contact: "mailto:kobama.info@gmail.com",

  // Aanvraagformulier (pop-up achter elke "Plan een gesprek"-knop)
  lead: {
    title: "Plan een gesprek",
    intro: "Beantwoord een paar korte vragen. Dan nemen we contact met je op.",
    name: { label: "Wat is je naam?", placeholder: "Je naam" },
    site: {
      legend: "Heb je al een website?",
      yes: "Ik heb al een site",
      no: "Nog geen site",
      nameLabel: "Wat is de naam van je website?",
      namePlaceholder: "www.kobama.nl",
    },
    method: {
      legend: "Hoe mogen we contact met je opnemen?",
      call: "Bellen",
      whatsapp: "WhatsApp",
      mail: "Mailen",
      phoneLabel: "Wat is je telefoonnummer?",
      phonePlaceholder: "0612345678",
      emailLabel: "Wat is je e-mailadres?",
      emailPlaceholder: "info@kobama.nl",
    },
    submit: "Versturen",
    sending: "Bezig met versturen",
    close: "Sluiten",
    privacy: "Met versturen ga je ermee akkoord dat we je gegevens gebruiken om contact met je op te nemen. Lees ons [privacybeleid](/privacy/).",
    doneTitle: "Bedankt",
    done: "We hebben je aanvraag ontvangen en nemen contact met je op.",
    error: "Versturen lukt nu niet. Stuur ons gerust zelf een mail:",
    required: "Vul dit veld in.",
    invalidPhone: "Vul een geldig telefoonnummer in.",
    invalidEmail: "Vul een geldig e-mailadres in.",
  },

  // Homepage: soorten websites, met links naar de landingspagina's.
  diensten: {
    heading: "Een website die past bij jouw onderneming.",
    intro:
      "Niet iedere ondernemer heeft dezelfde website nodig. Daarom kijken we eerst naar je bedrijf, je klanten en wat je website moet bereiken. Van een overzichtelijke one-pager tot een [complete bedrijfswebsite](/professionele-website-laten-maken/) of de vernieuwing van je bestaande site.",
    items: [
      {
        title: "Een professionele website voor jouw onderneming.",
        body: "Als zelfstandige laat je duidelijk zien wat je doet en waarom klanten voor jou kiezen. Wij bouwen een professionele website die jouw dienstverlening helder presenteert.",
        href: "/website-laten-maken-zzp/",
        link: "Website laten maken als zzp'er",
      },
      {
        title: "Alles wat je bedrijf nodig heeft, op één pagina.",
        body: "Een one-page website is een goede keuze als je je bedrijf, aanbod en contactgegevens overzichtelijk wilt presenteren. Zonder onnodige pagina's of ingewikkelde navigatie.",
        href: "/one-page-website-laten-maken/",
        link: "One-page website laten maken",
      },
      {
        title: "Een nieuwe uitstraling voor je bestaande website.",
        body: "Is je website verouderd of sluit deze niet meer aan bij je bedrijf? We bekijken wat behouden kan blijven en hoe een vernieuwd ontwerp je bedrijf beter kan presenteren.",
        href: "/website-vernieuwen/",
        link: "Website vernieuwen",
      },
    ],
  },

  // Veelgestelde vragen op de homepage. Alleen bevestigde feiten (FOUNDER-INPUT.md).
  // Links schrijf je als [tekst](pad). Geen FAQPage-markup: de vragen staan zichtbaar op de pagina.
  faq: {
    heading: "Veelgestelde vragen.",
    items: [
      {
        q: "Wat kost een website bij KOBAMA?",
        a: "Een website kan bij KOBAMA vanaf €800 excl. btw. Wat je betaalt hangt af van het type website, bijvoorbeeld een one-pager of een site met meerdere pagina's, en van wat je er verder bij wilt laten doen. Alle prijzen op een rij zie je bij [onze prijzen](/prijzen/). Een uitgebreide uitleg lees je in [wat een website laten maken kost](/blog/wat-kost-een-website-laten-maken/). Alles wat je vooraf wilt weten, lees je in [website laten maken: de gids voor ondernemers](/blog/website-laten-maken/).",
      },
      {
        q: "Hoe lang duurt het om een website te laten maken?",
        a: "Een website van KOBAMA staat in twee weken live, als je alles op tijd aanlevert en bereikbaar bent voor overleg. Hoe snel het gaat, hangt dus ook van jou af. We bespreken het in het eerste gesprek, zodat je vooraf weet waar je aan toe bent.",
      },
      {
        q: "Kunnen jullie mijn bestaande website vernieuwen?",
        a: "Ja. Heb je al een website, neem dan contact op. We bekijken samen wat goed werkt, wat beter kan en wat een vernieuwing voor je bedrijf kan betekenen. Meer lees je op [website vernieuwen](/website-vernieuwen/).",
      },
      {
        q: "Wat gebeurt er na de oplevering?",
        a: "Je mag de hosting zelf regelen en wij helpen je daarbij. Aanpassingen betaal je per aanpassing, of met een vast bedrag per maand met een maximum aantal aanpassingen. Meer daarover lees je in [website onderhoud: wat heb je nodig](/blog/website-onderhoud/). Het verschil tussen je domeinnaam en je hosting lees je in [domeinnaam en hosting](/blog/domeinnaam-en-hosting/).",
      },
      {
        q: "Waar zit KOBAMA?",
        a: "KOBAMA zit in Amsterdam en bouwt websites voor ondernemers in heel Nederland. Wat we voor bedrijven in Amsterdam doen, lees je op [website laten maken in Amsterdam](/website-laten-maken-amsterdam/).",
      },
      {
        q: "Is KOBAMA ook geschikt voor een kleine onderneming?",
        a: "Ja. KOBAMA bouwt websites voor zelfstandige ondernemers en mkb-bedrijven, en heeft de meeste ervaring met eenvoudige, betaalbare sites voor kleine en middelgrote bedrijven. Lees meer over [een website laten maken als zzp'er](/website-laten-maken-zzp/). Waar je op let bij een betaalbare website, lees je in [goedkope website laten maken](/blog/goedkope-website-laten-maken/).",
      },
    ],
  },

  // Commerciële landingspagina's. Alleen bevestigde feiten over KOBAMA (FOUNDER-INPUT.md);
  // algemene uitleg over websites is zonder cijfers of beloftes. Links als [tekst](pad).
  landing: {
    cta: "Plan een gesprek",
    zzp: {
      path: "/website-laten-maken-zzp/",
      title: "Website laten maken als zzp'er | KOBAMA",
      description: "Een professionele website laten maken als zzp'er? KOBAMA bouwt websites op maat voor zelfstandigen. Persoonlijk contact en duidelijke afspraken.",
      crumb: "Website laten maken als zzp'er",
      h1: "Een professionele website laten maken als zzp'er.",
      lead: "Als zelfstandige ben je zelf het gezicht van je bedrijf. Je website laat zien wat je doet, voor wie je werkt en hoe iemand contact met je opneemt. KOBAMA ontwerpt en bouwt die website voor zzp'ers in heel Nederland.",
      service: {
        name: "Website laten maken als zzp'er",
        type: "Webdesign en websiteontwikkeling voor zelfstandigen",
        description: "KOBAMA ontwerpt en bouwt websites op maat voor zelfstandige ondernemers, met persoonlijk contact en duidelijke afspraken.",
        audience: "Zelfstandige ondernemers (zzp'ers)",
      },
      sections: [
        {
          h2: "Waarom een website als zelfstandige?",
          p: [
            "Een website is niet verplicht, maar klanten zoeken je vaak eerst op voordat ze contact opnemen. Op je eigen website bepaal jij wat ze lezen: wat je doet, voor wie je werkt en hoe ze je bereiken.",
            "Daarmee is het ook de plek waar je andere vermeldingen aan kunt koppelen, zoals een [Google-bedrijfsprofiel](/blog/google-bedrijfsprofiel-aanmaken/).",
          ],
        },
        {
          h2: "Eén pagina of meerdere pagina's?",
          p: [
            "Heb je een overzichtelijk aanbod, dan kan een one-pager genoeg zijn: alles staat op één pagina waar je doorheen scrolt. Wanneer dat past, lees je bij [one-page website laten maken](/one-page-website-laten-maken/).",
            "Bied je meerdere diensten aan, wil je die los van elkaar presenteren of heb je veel om te laten zien? Dan is een site met meerdere pagina's verstandiger. Elke dienst heeft dan een eigen plek.",
          ],
        },
        {
          h2: "Wat KOBAMA voor je verzorgt",
          list: [
            "We schrijven de teksten voor je website. Jij krijgt één ronde om ze aan te passen.",
            "We ontwerpen en bouwen de site in één doorlopend traject, zonder tussenlagen.",
            "Je logo lever je zelf aan.",
            "Bij livegang staan vindbaarheid en laadsnelheid al goed.",
          ],
        },
        {
          h2: "Zo verloopt het traject",
          p: ["Het traject heeft drie stappen. Je site staat in twee weken live, als je alles op tijd aanlevert en bereikbaar bent voor overleg."],
          steps: [
            { t: "Kennismaken.", b: "We beginnen met een gesprek over je bedrijf, je klanten en wat je site moet bereiken." },
            { t: "Ontwerpen en bouwen.", b: "We maken je site in één doorlopend traject. Je ziet het werk voordat het af is." },
            { t: "Live.", b: "Je site gaat online en werkt vanaf dag één." },
          ],
          after: "Het hele verhaal staat bij onze [werkwijze](/#werkwijze).",
        },
        {
          h2: "Wat kost het?",
          p: [
            "Een website kan bij KOBAMA vanaf €800 excl. btw. De prijs hangt af van het type site, een one-pager of meerdere pagina's, en van wat je er verder bij wilt. Doorlopend werk, zoals hulp bij vindbaarheid, heeft geen eenmalige prijs.",
            "Alle prijzen op een rij zie je bij [onze prijzen](/prijzen/). Een uitgebreide uitleg staat in [wat een website laten maken kost](/blog/wat-kost-een-website-laten-maken/). Hoe je een betaalbare website laat maken die ook na de oplevering betaalbaar blijft, lees je in [goedkope website laten maken](/blog/goedkope-website-laten-maken/).",
          ],
        },
        {
          h2: "Hosting en onderhoud na oplevering",
          p: [
            "Je mag de hosting zelf regelen. Wij helpen je daarbij. Het onderhoud zelf doen is lastiger, maar daar praten we over. Wat hosting en een domeinnaam precies zijn, lees je in [domeinnaam en hosting](/blog/domeinnaam-en-hosting/).",
            "Aanpassingen betaal je per aanpassing, of met een vast bedrag per maand met een maximum aantal aanpassingen. Je betaalt niet voor werk dat niet gebeurt. Wat onderhoud inhoudt, lees je in [website onderhoud: wat heb je nodig](/blog/website-onderhoud/).",
          ],
        },
        {
          h2: "Waarom persoonlijk contact telt",
          p: [
            "KOBAMA is een klein team dat elk project zelf van begin tot eind doet. Je praat met de mensen die ook ontwerpen en bouwen, niet met een accountmanager. Zo hoef je niets twee keer uit te leggen.",
          ],
        },
      ],
      related: [
        { text: "Heb je al een website? Lees over website vernieuwen.", href: "/website-vernieuwen/" },
        { text: "Meerdere diensten? Lees over een professionele website laten maken.", href: "/professionele-website-laten-maken/" },
        { text: "Bekijk sites die we al bouwden.", href: "/#werk" },
      ],
      closing: "Vertel ons wat je voor je website zoekt.",
    },

    vernieuwen: {
      path: "/website-vernieuwen/",
      title: "Website vernieuwen of redesignen | KOBAMA",
      description: "Is je website verouderd? KOBAMA helpt ondernemers hun bestaande website te vernieuwen met modern webdesign, duidelijke structuur en persoonlijk contact.",
      crumb: "Website vernieuwen",
      h1: "Je website vernieuwen? Geef je bedrijf een betere uitstraling.",
      lead: "Je hebt al een website, maar hij laat je bedrijf niet zien zoals het nu is. KOBAMA helpt ondernemers in heel Nederland hun bestaande website te vernieuwen.",
      service: {
        name: "Website vernieuwen",
        type: "Websitevernieuwing en redesign",
        description: "KOBAMA helpt ondernemers hun bestaande website te vernieuwen, met een nieuw ontwerp, een duidelijke structuur en persoonlijk contact.",
        audience: "Ondernemers met een bestaande website",
      },
      sections: [
        {
          h2: "Wanneer is vernieuwen verstandig?",
          p: ["Een vernieuwing is het overwegen waard als een of meer van deze dingen kloppen:"],
          list: [
            "De site ziet er verouderd uit, ook naast die van concurrenten.",
            "De site werkt niet prettig op een telefoon.",
            "Bezoekers vinden niet snel wat ze zoeken.",
            "Je bedrijf is veranderd, maar de site vertelt nog het oude verhaal.",
            "Je durft de site niet aan te passen, omdat je niet weet wat er dan stukgaat.",
          ],
        },
        {
          h2: "Redesign of een nieuwe website?",
          p: [
            "Bij een redesign krijgt je site een nieuw ontwerp en een nieuwe indeling, en blijft een deel van wat er staat behouden. Bij een volledig nieuwe website begin je opnieuw: met een nieuwe opzet, nieuwe teksten en nieuwe pagina's.",
            "Welke van de twee past, hangt af van wat er nu staat en wat je ermee wilt. Dat bekijken we samen.",
          ],
        },
        {
          h2: "Waar een goede site aan voldoet",
          p: [
            "Een site moet op een telefoon net zo goed werken als op een computer. Bezoekers moeten in een paar seconden zien wat je doet en hoe ze contact opnemen.",
            "Dat vraagt om een duidelijke navigatie en teksten die kloppen met je bedrijf van nu. Bij KOBAMA schrijven wij de teksten voor je en krijg je één ronde om ze aan te passen.",
          ],
        },
        {
          h2: "Hoe we je bestaande site bekijken",
          p: [
            "We beginnen met een gesprek over je bedrijf en je klanten. Daarin bekijken we je huidige website samen met je: wat werkt, wat niet en wat behouden kan blijven. Wil je bestaande teksten, beelden of pagina's houden, dan overleggen we wat er kan.",
          ],
        },
        {
          h2: "Waar je bij vernieuwen op moet letten",
          p: [
            "Een nieuwe site vervangt de oude. Verandert een webadres zonder doorverwijzing, dan komen bezoekers en zoekmachines bij een foutpagina terecht. Dit zijn technische aandachtspunten:",
          ],
          list: [
            "Welke webadressen (URL's) belangrijk zijn en blijven bestaan.",
            "Doorverwijzingen (redirects) van oude naar nieuwe adressen.",
            "Paginatitels en beschrijvingen die nu in Google staan.",
            "Pagina's die nu al gevonden worden.",
            "Interne links tussen pagina's.",
            "Bruikbaarheid op mobiel.",
            "Laadsnelheid.",
          ],
          after: "Welke van deze punten in jouw traject nodig zijn, hangt af van je huidige site. Dat bespreken we vooraf, zodat je weet wat er wel en niet bij hoort.",
        },
        {
          h2: "Wat het kost en hoe het verder gaat",
          p: [
            "De prijs hangt af van wat je site nodig heeft. Waar de kosten van een website van afhangen, lees je in [wat een website laten maken kost](/blog/wat-kost-een-website-laten-maken/). Over wat er na de oplevering komt kijken, lees je in [website onderhoud](/blog/website-onderhoud/). Alles over het laten maken van een website staat in [website laten maken: de gids voor ondernemers](/blog/website-laten-maken/).",
          ],
        },
      ],
      related: [
        { text: "Begin je liever opnieuw? Lees hoe KOBAMA als zzp'er werkt.", href: "/website-laten-maken-zzp/" },
        { text: "Past een eenvoudige site bij je? Lees over one-pagers.", href: "/one-page-website-laten-maken/" },
        { text: "Bekijk sites die we al bouwden.", href: "/#werk" },
      ],
      closing: "Benieuwd wat we met je bestaande website kunnen doen?",
    },

    onepage: {
      path: "/one-page-website-laten-maken/",
      title: "One-page website laten maken | KOBAMA",
      description: "Een professionele one-page website laten maken? KOBAMA bouwt overzichtelijke websites op maat voor ondernemers, met persoonlijk ontwerp en duidelijke afspraken.",
      crumb: "One-page website laten maken",
      h1: "Een one-page website die precies laat zien wat je bedrijf doet.",
      lead: "Een one-page website zet alles op één pagina. Voor het juiste bedrijf is dat precies genoeg. Voor een ander bedrijf is het te weinig. Hier lees je het verschil.",
      service: {
        name: "One-page website laten maken",
        type: "Webdesign en websiteontwikkeling van one-page websites",
        description: "KOBAMA ontwerpt en bouwt overzichtelijke one-page websites op maat voor ondernemers.",
        audience: "Ondernemers met een overzichtelijk aanbod",
      },
      sections: [
        {
          h2: "Wat is een one-page website?",
          p: ["Een one-page website is een site met één pagina. Alle onderdelen staan onder elkaar, bijvoorbeeld wat je doet, je werk en je contactgegevens. Bezoekers scrollen erdoorheen, of springen met het menu naar een onderdeel."],
        },
        {
          h2: "Voor wie is het geschikt?",
          p: ["Een one-pager past bij ondernemers met een overzichtelijk aanbod: één dienst, een paar diensten die goed bij elkaar passen, of een bedrijf dat vooral gevonden en gebeld wil worden. Veel zzp'ers komen hier prima mee uit."],
        },
        {
          h2: "Wat zet je erop?",
          list: [
            "Wat je doet en voor wie.",
            "Je diensten, kort en concreet.",
            "Voorbeelden van je werk, als je die kunt laten zien.",
            "Een stukje over jou of je team.",
            "Duidelijke contactgegevens.",
          ],
        },
        {
          h2: "Hoe neemt een bezoeker contact op?",
          p: ["Op een one-pager staat de contactmogelijkheid op een vaste, zichtbare plek, bijvoorbeeld een knop die naar je e-mailadres leidt. Zo hoeft niemand te zoeken."],
        },
        {
          h2: "Voordelen",
          list: [
            "Alles staat bij elkaar. Bezoekers hoeven niet te zoeken.",
            "Er zijn minder pagina's om te ontwerpen en te onderhouden.",
            "De navigatie blijft eenvoudig, ook op een telefoon.",
          ],
        },
        {
          h2: "Beperkingen, ook voor vindbaarheid",
          p: [
            "Een one-pager is niet automatisch de beste keuze. Je kunt niet voor elk onderwerp een eigen pagina maken. Voor Google betekent dat dat één pagina alles moet vertellen: één titel, één beschrijving, één adres.",
            "Wil je op meerdere onderwerpen gevonden worden, bijvoorbeeld op elke dienst apart, dan geeft een site met meerdere pagina's je meer mogelijkheden. Veel inhoud op één pagina wordt ook sneller onoverzichtelijk.",
          ],
        },
        {
          h2: "Wanneer is een site met meerdere pagina's beter?",
          p: ["Kies meerdere pagina's als je veel verschillende diensten hebt, als je veel wilt vertellen over elke dienst of als je een blog wilt bijhouden. Twijfel je? Dan bepalen we in een gesprek wat het beste past. Als zzp'er? Lees dan ook over [een website laten maken als zzp'er](/website-laten-maken-zzp/)."],
        },
        {
          h2: "Wat bepaalt de kosten?",
          p: [
            "Een one-pager is meestal sneller gemaakt dan een site met meerdere pagina's, omdat er minder te ontwerpen en te bouwen is. Een website kan bij KOBAMA vanaf €800 excl. btw. Wat je uiteindelijk betaalt, hangt ook af van wat je er verder bij wilt laten doen.",
            "Alle prijzen op een rij zie je bij [onze prijzen](/prijzen/). Een uitgebreide uitleg staat in [wat een website laten maken kost](/blog/wat-kost-een-website-laten-maken/). Hoe je een betaalbare website laat maken die ook na de oplevering betaalbaar blijft, lees je in [goedkope website laten maken](/blog/goedkope-website-laten-maken/).",
          ],
        },
      ],
      related: [
        { text: "Heb je al een website? Lees over website vernieuwen.", href: "/website-vernieuwen/" },
        { text: "Bekijk sites die we al bouwden.", href: "/#werk" },
      ],
      closing: "Laten we kijken of één pagina genoeg is voor jouw bedrijf.",
    },

    amsterdam: {
      path: "/website-laten-maken-amsterdam/",
      title: "Website laten maken in Amsterdam vanaf €800 | KOBAMA",
      description: "Een website laten maken in Amsterdam? KOBAMA is een klein webteam uit Amsterdam voor zzp'ers en mkb. Vanaf €800 excl. btw, met teksten en persoonlijk contact.",
      crumb: "Website laten maken in Amsterdam",
      h1: "Een website laten maken in Amsterdam.",
      lead: "KOBAMA is een klein webteam uit Amsterdam. We ontwerpen en bouwen websites voor zzp'ers en mkb-bedrijven, in Amsterdam en de rest van Nederland. Een website kan bij KOBAMA vanaf €800 excl. btw.",
      service: {
        name: "Website laten maken in Amsterdam",
        type: "Webdesign en websiteontwikkeling",
        description: "KOBAMA ontwerpt en bouwt websites voor zzp'ers en mkb-bedrijven in Amsterdam, met persoonlijk contact en duidelijke afspraken.",
        audience: "Zzp'ers en mkb-bedrijven in Amsterdam",
        city: "Amsterdam",
      },
      sections: [
        {
          h2: "Wie bouwt je website?",
          p: [
            "Bij KOBAMA werk je met Koen, Bas en Mats. Je praat met de mensen die je site ook ontwerpen en bouwen, niet met een accountmanager. Zo hoef je niets twee keer uit te leggen.",
            "KOBAMA is klein en doet elk project zelf, van het eerste gesprek tot de livegang. Wie we zijn, zie je bij [ons team](/#team).",
          ],
        },
        {
          h2: "Websites die we in Amsterdam bouwden",
          p: [
            "De Garengarage is een wol- en garenwinkel in Amsterdam West met een webshop. KOBAMA bouwde de website. Wat er op die site staat, lees je bij [het project De Garengarage](/projecten/de-garengarage/).",
            "We bouwen ook voor bedrijven buiten Amsterdam. Alle sites die we bouwden, zie je bij [ons werk](/#werk).",
          ],
        },
        {
          h2: "Wat KOBAMA voor je verzorgt",
          list: [
            "We ontwerpen en bouwen je website in één doorlopend traject.",
            "We schrijven de teksten. Jij krijgt één ronde om ze aan te passen.",
            "Je logo lever je zelf aan.",
            "Bij livegang staan vindbaarheid en laadsnelheid al goed.",
          ],
        },
        {
          h2: "Hoe word je gevonden in Amsterdam?",
          p: [
            "Om in Amsterdam gevonden te worden, heb je naast je website een Google-bedrijfsprofiel nodig. Dat profiel bepaalt of je in Google Maps en in de lokale resultaten verschijnt. Hoe je het aanmaakt, lees je in [Google-bedrijfsprofiel aanmaken](/blog/google-bedrijfsprofiel-aanmaken/).",
            "Zet op je website dezelfde bedrijfsnaam, hetzelfde adres en hetzelfde telefoonnummer als in je profiel. Noem ook de plaatsen en wijken waar je werkt. Meer tips lees je in [lokale SEO](/blog/lokale-seo/).",
          ],
        },
        {
          h2: "Wat kost een website laten maken in Amsterdam?",
          p: [
            "Een website kan bij KOBAMA vanaf €800 excl. btw. De prijs hangt af van het type site, een one-pager of meerdere pagina's, en van wat je er verder bij wilt laten doen. Doorlopend werk, zoals hulp bij vindbaarheid, heeft geen eenmalige prijs.",
            "Alle prijzen op een rij zie je bij [onze prijzen](/prijzen/). Waar de kosten van een website van afhangen, lees je in [wat een website laten maken kost](/blog/wat-kost-een-website-laten-maken/).",
          ],
        },
        {
          h2: "Wat gebeurt er na de oplevering?",
          p: [
            "Je mag de hosting zelf regelen, en wij helpen je daarbij. Aanpassingen betaal je per aanpassing, of met een vast bedrag per maand met een maximum aantal aanpassingen. Je betaalt niet voor werk dat niet gebeurt.",
            "Wat onderhoud inhoudt, lees je in [website onderhoud: wat heb je nodig](/blog/website-onderhoud/).",
          ],
        },
        {
          h2: "Welke website past bij je bedrijf?",
          p: [
            "Heb je een overzichtelijk aanbod, dan kan één pagina genoeg zijn. Lees daarover bij [one-page website laten maken](/one-page-website-laten-maken/).",
            "Bied je meerdere diensten aan, dan past een site met meerdere pagina's beter. Lees daarover bij [professionele website laten maken](/professionele-website-laten-maken/).",
          ],
        },
      ],
      related: [
        { text: "Ben je zzp'er? Lees over een website laten maken als zelfstandige.", href: "/website-laten-maken-zzp/" },
        { text: "Heb je al een website? Lees over website vernieuwen.", href: "/website-vernieuwen/" },
        { text: "Bekijk sites die we al bouwden.", href: "/#werk" },
      ],
      closing: "Een website laten maken in Amsterdam? Vertel ons wat je zoekt.",
    },

    professioneel: {
      path: "/professionele-website-laten-maken/",
      title: "Professionele website laten maken vanaf €800 | KOBAMA",
      description: "Een professionele, zakelijke website laten maken? KOBAMA ontwerpt en bouwt websites op maat voor zzp en mkb, inclusief de teksten. Vanaf €800 excl. btw.",
      crumb: "Professionele website laten maken",
      h1: "Een professionele website laten maken voor je bedrijf.",
      lead: "Een professionele website laat in een paar seconden zien wat je doet, voor wie en hoe iemand contact opneemt. Hij werkt op elke telefoon en is goed te vinden in Google. KOBAMA ontwerpt en bouwt zulke websites voor zzp'ers en mkb-bedrijven, vanaf €800 excl. btw.",
      service: {
        name: "Professionele website laten maken",
        type: "Webdesign en websiteontwikkeling voor bedrijven",
        description: "KOBAMA ontwerpt en bouwt zakelijke websites op maat voor zzp'ers en mkb-bedrijven, inclusief de teksten.",
        audience: "Zzp'ers en mkb-bedrijven",
      },
      sections: [
        {
          h2: "Wat maakt een website professioneel?",
          p: ["Een professionele website helpt je klant snel verder. Dat zie je aan een paar dingen:"],
          list: [
            "Een bezoeker ziet direct wat je doet en voor wie.",
            "Contact opnemen is op elke pagina makkelijk.",
            "De site werkt net zo goed op een telefoon als op een computer.",
            "De teksten kloppen met je bedrijf van nu, in de woorden van je klant.",
            "De site laadt snel en draait op een beveiligde verbinding (https).",
            "Google kan de site lezen en goed tonen.",
          ],
          after: "Wat Google technisch nodig heeft, lees je in [wat is technische SEO](/blog/technische-seo/).",
        },
        {
          h2: "Een website op maat of een sjabloon?",
          p: [
            "Een sjabloon is een kant-en-klaar ontwerp dat je invult met je eigen tekst en beeld. Een website op maat is ontworpen voor jouw bedrijf en jouw klanten. Een sjabloon is vaak sneller klaar. Een site op maat past beter bij hoe je bedrijf werkt.",
            "KOBAMA staat open voor maatwerk. De meeste ervaring hebben we met eenvoudige, betaalbare websites voor kleine en middelgrote bedrijven.",
          ],
        },
        {
          h2: "Wat KOBAMA voor je verzorgt",
          list: [
            "Een gesprek over je bedrijf, je klanten en wat je site moet doen.",
            "Ontwerp en bouw in één doorlopend traject. Je ziet het werk voordat het af is.",
            "De teksten voor je website. Jij krijgt één ronde om ze aan te passen.",
            "Een site waarop vindbaarheid en laadsnelheid bij livegang al goed staan.",
          ],
          after: "Je logo lever je zelf aan. Hoe het traject loopt, lees je bij onze [werkwijze](/#werkwijze).",
        },
        {
          h2: "Wat kost een professionele website?",
          p: [
            "Een professionele website kan bij KOBAMA vanaf €800 excl. btw. De prijs hangt af van het type site, een one-pager of meerdere pagina's, en van wat je er verder bij wilt laten doen. Doorlopend werk, zoals hulp bij vindbaarheid, heeft geen eenmalige prijs.",
            "Kijk niet alleen naar de bouwprijs. We spraken een ondernemer die elk jaar meer dan €2.400 aan onderhoud betaalde voor een oude website waar ongeveer één keer per jaar iets aan veranderde. Bij KOBAMA betaal je per aanpassing, of een vast bedrag per maand met een maximum aantal aanpassingen.",
            "Alle prijzen op een rij zie je bij [onze prijzen](/prijzen/). Waar de kosten van een website van afhangen, lees je in [wat een website laten maken kost](/blog/wat-kost-een-website-laten-maken/).",
          ],
        },
        {
          h2: "Wie regelt hosting en onderhoud?",
          p: [
            "Je mag de hosting zelf regelen, en wij helpen je daarbij. Het onderhoud zelf doen is lastiger, maar daar praten we over. Je betaalt niet voor werk dat niet gebeurt.",
            "Wat een domeinnaam en hosting precies zijn, lees je in [domeinnaam en hosting](/blog/domeinnaam-en-hosting/).",
          ],
        },
        {
          h2: "Websites die we bouwden",
          p: [
            "We bouwden onder meer de websites van [De Garengarage](/projecten/de-garengarage/), [BB-Collect](/projecten/bb-collect/) en [WBMS Vastgoed](/projecten/wbms-vastgoed/). Een winkel met webshop, een online kaartenwinkel en een vastgoedbedrijf: elk met een eigen opzet.",
          ],
        },
      ],
      related: [
        { text: "Ben je zzp'er? Lees over een website laten maken als zelfstandige.", href: "/website-laten-maken-zzp/" },
        { text: "Is één pagina genoeg? Lees over one-pagers.", href: "/one-page-website-laten-maken/" },
        { text: "Zit je in Amsterdam? Lees over een website laten maken in Amsterdam.", href: "/website-laten-maken-amsterdam/" },
      ],
      closing: "Klaar voor een professionele website? Vertel ons over je bedrijf.",
    },

    prijzen: {
      path: "/prijzen/",
      title: "Prijzen: website vanaf €800 excl. btw | KOBAMA",
      description: "Wat een website bij KOBAMA kost: bouwen vanaf €800 excl. btw, geen verplicht onderhoudscontract en je betaalt nooit voor werk dat niet gebeurt.",
      crumb: "Prijzen",
      h1: "Wat kost een website bij KOBAMA?",
      lead: "Een website laten maken kost bij KOBAMA vanaf €800 excl. btw. Je zit niet vast aan een onderhoudscontract: na de oplevering betaal je per aanpassing, of kies je zelf voor een vast bedrag per maand. Voor werk dat niet gebeurt, betaal je nooit.",
      service: {
        name: "Website laten maken",
        type: "Webdesign en websiteontwikkeling",
        description: "KOBAMA bouwt betaalbare websites voor zzp'ers en mkb-bedrijven, vanaf €800 excl. btw, zonder verplicht onderhoudscontract.",
        audience: "Zzp'ers en mkb-bedrijven",
        minPrice: 800,
      },
      sections: [
        {
          h2: "Wat je betaalt, op een rij",
          list: [
            "**Een website laten bouwen:** eenmalig, vanaf €800 excl. btw.",
            "**Aanpassingen na de oplevering:** per aanpassing, of een vast bedrag per maand met een maximum aantal aanpassingen. Jij kiest.",
            "**Hosting:** regel je zelf, en wij helpen je daarbij.",
            "**Hulp bij vindbaarheid in Google:** doorlopend werk, daarom zonder eenmalige prijs. Dat spreken we apart af.",
          ],
        },
        {
          h2: "Waar hangt de prijs van je website van af?",
          p: [
            "De prijs van een website bij KOBAMA hangt af van het type site en van wat je er verder bij wilt laten doen. Een one-pager is minder werk dan een site met meerdere pagina's. Welke van de twee bij je past, lees je bij [one-page website laten maken](/one-page-website-laten-maken/).",
            "In het eerste gesprek bespreken we wat je site nodig heeft. Daarna weet je wat het kost, voordat we beginnen.",
          ],
        },
        {
          h2: "Waarom geen verplicht onderhoudscontract?",
          p: [
            "KOBAMA werkt zonder verplicht onderhoudscontract, omdat een website die weinig verandert ook weinig onderhoud nodig heeft. Je betaalt bij ons alleen voor werk dat echt gebeurt.",
            "We spraken een ondernemer die elk jaar meer dan €2.400 aan onderhoud betaalde voor een oude website waar ongeveer één keer per jaar iets aan veranderde. Zo'n bedrag zouden we voor onze eigen site nooit accepteren, dus rekenen we het een klant ook niet.",
            "Wat onderhoud inhoudt, lees je in [website onderhoud: wat heb je nodig](/blog/website-onderhoud/).",
          ],
        },
        {
          h2: "Wat doet KOBAMA voor je?",
          list: [
            "We ontwerpen en bouwen je website in één doorlopend traject.",
            "We schrijven de teksten. Jij krijgt één ronde om ze aan te passen.",
            "Bij livegang staan vindbaarheid en laadsnelheid al goed.",
          ],
          after: "Je logo lever je zelf aan.",
        },
        {
          h2: "Hoe snel staat je website live?",
          p: [
            "Een website van KOBAMA staat in twee weken live, als je alles op tijd aanlevert en bereikbaar bent voor overleg. Hoe snel het gaat, hangt dus ook van jou af. Hoe het traject loopt, lees je bij onze [werkwijze](/#werkwijze).",
          ],
        },
        {
          h2: "Hoe verhoudt dit zich tot andere webbouwers?",
          p: [
            "Vergelijk bij elke webbouwer niet alleen de bouwprijs, maar ook wat je na de oplevering per jaar betaalt.",
            "Waar de kosten van een website in het algemeen van afhangen, lees je in [wat een website laten maken kost](/blog/wat-kost-een-website-laten-maken/).",
          ],
        },
      ],
      related: [
        { text: "Ben je zzp'er? Lees over een website laten maken als zelfstandige.", href: "/website-laten-maken-zzp/" },
        { text: "Meerdere diensten? Lees over een professionele website laten maken.", href: "/professionele-website-laten-maken/" },
        { text: "Bekijk sites die we al bouwden.", href: "/#werk" },
      ],
      closing: "Wil je weten wat jouw website kost?",
    },
  },

  // Projectpagina's. Alleen wat zichtbaar en verifieerbaar is op de live klantsite of in de
  // KOBAMA-code staat. Onbekende projectinformatie ontbreekt bewust (zie src/content/cases.ts).
  cases: {
    live: "Bekijk de website",
    about: "Over het project",
    site: "De website",
    siteIntro: "Dit staat op dit moment op de website:",
    cta: "Heb je een vergelijkbare website nodig?",
    backToWork: "Meer projecten",
    items: {
      "de-garengarage": {
        title: "De Garengarage | Websiteproject van KOBAMA",
        description: "Bekijk het websiteproject van De Garengarage in het portfolio van KOBAMA. Ontdek de website en bekijk het gerealiseerde ontwerp.",
        h1: "De Garengarage.",
        lead: "De Garengarage is een wol- en garenwinkel in Amsterdam West met een webshop. KOBAMA bouwde de website.",
        about: ["Op haar eigen website noemt De Garengarage zich een one-stop-shop voor haken: een plek om je eigen talent te ontdekken en om garen en handgemaakte kunstwerken te kopen."],
        site: ["Garen, patronen, haakboeken en benodigdheden", "Knuffels en tassen", "Een blog", "Een pagina over de winkel in Amsterdam West"],
        alt: "Schermafbeelding van de website van De Garengarage",
      },
      "wbms-vastgoed": {
        title: "WBMS Vastgoed | Websiteproject van KOBAMA",
        description: "Bekijk het websiteproject van WBMS Vastgoed in het portfolio van KOBAMA. Ontdek de gerealiseerde website en de visuele presentatie.",
        h1: "WBMS Vastgoed.",
        lead: "WBMS Vastgoed bezit en beheert bedrijfsruimte in Nederland. KOBAMA bouwde de website.",
        about: ["Volgens de eigen website is WBMS Vastgoed privaat familiebezit, zelf beheerd, met persoonlijk contact met de eigenaar."],
        site: [],
        alt: "Schermafbeelding van de website van WBMS Vastgoed",
      },
      "bb-collect": {
        title: "BB-Collect | Websiteproject van KOBAMA",
        description: "Bekijk het websiteproject van BB-Collect in het portfolio van KOBAMA. Ontdek het gerealiseerde ontwerp en bezoek de live website.",
        h1: "BB-Collect.",
        lead: "BB-Collect verkoopt Pokémon singles en graded slabs online. KOBAMA bouwde de website.",
        about: ["Op haar eigen website zegt BB-Collect de kaarten met de hand uit te kiezen en elke kaart persoonlijk te keuren."],
        site: ["Een shop met een eigen pagina per kaart", "Een pagina om kaarten aan BB-Collect te verkopen", "Een blog", "Een pagina met het verhaal achter BB-Collect"],
        alt: "Schermafbeelding van de website van BB-Collect",
      },
    },
  },

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
    caseCta: "Bekijk het project",
    items: [
      { name: "De Garengarage", caseSlug: "de-garengarage", url: "https://www.degarengarage.nl/", image: "/images/werk/garengarage.webp", accent: "#dcccbf" },
      { name: "BB-Collect", caseSlug: "bb-collect", url: "https://bb-collect.com/", image: "/images/werk/bb-collect.webp", accent: "#6cc3b3" },
      { name: "WBMS Vastgoed", caseSlug: "wbms-vastgoed", url: "https://www.wbms-vastgoed.nl/", image: "/images/werk/wbms-vastgoed.webp", accent: "#1671e4" },
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
    published: "Gepubliceerd op",
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
    prices: "Prijzen",
    more: "Bedrijfsgegevens en privacybeleid tonen",
  },
} as const;
