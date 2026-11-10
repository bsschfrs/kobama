/** Datum in het Nederlands, bijvoorbeeld "10 november 2026". */
export function formatDate(date: Date): string {
  return date.toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric", timeZone: "Europe/Amsterdam" });
}
