// The nav logo doubles as the site's only nav trigger: click it and a
// compact panel unfolds under it (clip-path reveal + fade, see the
// .nav-menu rules in index.astro) with the section links fading in one
// after another. Same panel on mobile, just wider — no separate hamburger
// bar, no full-width takeover on desktop.

export function initNavMenu(): void {
  const toggle = document.querySelector<HTMLButtonElement>("[data-nav-toggle]");
  const menu = document.querySelector<HTMLElement>("[data-nav-menu]");
  const backdrop = document.querySelector<HTMLElement>("[data-nav-backdrop]");
  if (!toggle || !menu || !backdrop) return;

  const links = Array.from(menu.querySelectorAll<HTMLAnchorElement>("[data-nav-link]"));

  let isOpen = false;

  function setOpen(next: boolean): void {
    if (next === isOpen) return;
    isOpen = next;
    menu.classList.toggle("is-open", isOpen);
    toggle.classList.toggle("is-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", `KOBAMA menu ${isOpen ? "sluiten" : "openen"}`);
    menu.setAttribute("aria-hidden", String(!isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  }

  toggle.addEventListener("click", () => setOpen(!isOpen));
  backdrop.addEventListener("click", () => setOpen(false));
  for (const link of links) {
    link.addEventListener("click", () => setOpen(false));
  }
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isOpen) {
      setOpen(false);
      toggle.focus();
    }
  });
}
