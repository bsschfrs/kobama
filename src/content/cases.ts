// Projectpagina's (/projecten/<slug>/). Een casepagina is pas publiceerbaar als een founder
// heeft bevestigd wat KOBAMA bij dat project deed. Zolang een slug hieronder staat, krijgt de
// pagina `noindex`, blijft hij buiten de sitemap en linkt de homepage nog direct naar de klantsite.
// Haal een slug uit de lijst zodra de projectinformatie bevestigd is (zie FOUNDER-INPUT.md).
export const unpublishedCases: string[] = ["de-garengarage", "wbms-vastgoed", "bb-collect"];
