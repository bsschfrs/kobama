// Bedrijfsgegevens: de enige plek waar de site iets over KOBAMA als bedrijf zegt.
// Playbook-regel: niets verzinnen. Wat nog niet bevestigd is blijft `null` en verschijnt
// als zichtbare "[… volgt]"-placeholder. `npm run qa -- --launch` faalt zolang er één staat.

export const site = {
  name: "KOBAMA",
  city: "Amsterdam",
  email: "kobama.info@gmail.com",

  // TODO(check): domein afgeleid uit de titel "KOBAMA.nl" in het brief. Bevestig dat het
  // geregistreerd is en houd `site` in astro.config.mjs gelijk.
  url: "https://kobama.nl",

  // Wettelijk verplicht op een site die diensten aanbiedt (playbook §9).
  // De precieze lijst nog laten bevestigen door de adviseur.
  kvk: null as string | null,
  btw: null as string | null,
  address: null as string | null, // exact gelijk aan het Google-bedrijfsprofiel
  phone: null as string | null,
} as const;

/** Toon een feit, of een zichtbare placeholder zolang het niet bevestigd is. */
export function fact(value: string | null, label: string): string {
  return value ?? `[${label} volgt]`;
}
