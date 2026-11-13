/** Maakt van copy-tekst met [tekst](pad) veilige HTML: alles wordt geëscaped, alleen die links worden <a>. */
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function inline(text: string): string {
  return esc(text).replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, (_m, label, href) => `<a href="${href}">${label}</a>`);
}
