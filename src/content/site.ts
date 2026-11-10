// Bedrijfsgegevens: de enige plek waar de site iets over KOBAMA als bedrijf zegt.
// Playbook-regel: niets verzinnen. Wat nog niet bevestigd is blijft `null` en verschijnt
// als zichtbare "[… volgt]"-placeholder. `npm run qa -- --launch` faalt zolang er één staat.

export const site = {
  name: "KOBAMA",
  city: "Amsterdam",
  email: "kobama.info@gmail.com",

  // Hoofdversie is www: Vercel stuurt kobama.nl met een 308 door naar www.kobama.nl
  // (bevestigd 10 november 2026). Houd `site` in astro.config.mjs gelijk.
  url: "https://www.kobama.nl",

  // Wettelijk verplicht op een site die diensten aanbiedt (playbook §9).
  // De precieze lijst nog laten bevestigen door de adviseur.
  kvk: null as string | null,
  btw: null as string | null,
  address: null as string | null, // exact gelijk aan het Google-bedrijfsprofiel
  phone: null as string | null,

  // Bedrijfsprofielen voor `sameAs` in de structured data (LinkedIn-bedrijfspagina,
  // Instagram, Facebook, Google-bedrijfsprofiel). Alleen bevestigde URL's toevoegen.
  sameAs: [] as string[],
} as const;

/** Toon een feit, of een zichtbare placeholder zolang het niet bevestigd is. */
export function fact(value: string | null, label: string): string {
  return value ?? `[${label} volgt]`;
}
