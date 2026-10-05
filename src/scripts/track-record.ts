// Track record (zie TrackRecord.astro en DESIGN-BRIEF.md).
// Zwevend: desktop met muis en zonder prefers-reduced-motion. De preview volgt de cursor en zet
// zichzelf per site opnieuw in elkaar in drie stroken; daarna loopt de kleur erin.
// Inline: touch of reduced-motion. De regel in het midden van het scherm (touch) of onder de
// muis (desktop) is actief en zijn thumbnail gaat in kleur.
import { gsap } from "gsap";

const root = document.querySelector<HTMLElement>("[data-tr]");

if (root) {
  const links = [...root.querySelectorAll<HTMLAnchorElement>("[data-tr-item]")];
  const preview = root.querySelector<HTMLElement>("[data-tr-preview]")!;
  const strips = [...preview.querySelectorAll<HTMLElement>(".tr-strip")];
  const full = preview.querySelector<HTMLImageElement>(".tr-full")!;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const floating = finePointer && document.documentElement.classList.contains("motion");
  let active: HTMLAnchorElement | null = null;

  const setActive = (link: HTMLAnchorElement | null) => {
    if (link === active) return false;
    active?.parentElement!.classList.remove("is-active");
    link?.parentElement!.classList.add("is-active");
    active = link;
    return true;
  };

  if (floating) {
    // Afbeeldingen alvast laden, zodat de opbouw niet op het netwerk wacht
    links.forEach((l) => { new Image().src = l.dataset.image!; });

    const moveX = gsap.quickTo(preview, "x", { duration: 0.55, ease: "power3.out" });
    const moveY = gsap.quickTo(preview, "y", { duration: 0.55, ease: "power3.out" });
    let shown = false;

    const place = (cx: number, cy: number, instant = false) => {
      const w = preview.offsetWidth, h = preview.offsetHeight;
      // Rechts van de cursor, of links ervan als er rechts geen ruimte is
      const x = cx + 32 + w > window.innerWidth - 16 ? cx - 32 - w : cx + 32;
      const y = Math.min(Math.max(cy - h / 2, 16), window.innerHeight - h - 16);
      if (instant) gsap.set(preview, { x, y });
      moveX(x); moveY(y);
    };

    const build = (link: HTMLAnchorElement) => {
      strips.forEach((s) => (s.querySelector("img")!.src = link.dataset.image!));
      full.src = link.dataset.image!;
      gsap.killTweensOf([preview, full, ...strips]);
      gsap.timeline({ defaults: { ease: "power4.out" } })
        .set(preview, { "--gs": 1 })
        .set(full, { opacity: 0 })
        .to(preview, { opacity: 1, duration: 0.2, ease: "none" }, 0)
        // Zelfde volgorde als het logo: boven valt, links en rechts schuiven langs hun as
        .fromTo(strips[0], { y: -46, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 }, 0)
        .fromTo(strips[1], { x: -60, y: 20, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.55 }, 0.09)
        .fromTo(strips[2], { x: 60, y: 20, opacity: 0 }, { x: 0, y: 0, opacity: 1, duration: 0.55 }, 0.17)
        // Zodra de stroken vastzitten: één hele afbeelding erover, zodat er geen naden zichtbaar zijn
        .set(full, { opacity: 1 }, 0.68)
        .to(preview, { "--gs": 0, duration: 0.45, ease: "power2.out" }, 0.62);
    };

    const hide = () => {
      setActive(null);
      shown = false;
      gsap.to(preview, { opacity: 0, duration: 0.25, ease: "power2.out", overwrite: "auto" });
    };

    links.forEach((link) => {
      link.addEventListener("pointerenter", (e) => {
        place(e.clientX, e.clientY, !shown);
        shown = true;
        if (setActive(link)) build(link);
      });
      link.addEventListener("focus", () => {
        const r = link.getBoundingClientRect();
        place(r.left + r.width * 0.55, r.top + r.height / 2, !shown);
        shown = true;
        if (setActive(link)) build(link);
      });
      link.addEventListener("blur", hide);
    });
    root.addEventListener("pointermove", (e) => { if (shown) place(e.clientX, e.clientY); });
    root.querySelector(".tr-list")!.addEventListener("pointerleave", hide);
    window.addEventListener("scroll", () => { if (shown && !root.matches(":hover")) hide(); }, { passive: true });
  } else if (finePointer) {
    links.forEach((link) => {
      link.addEventListener("pointerenter", () => setActive(link));
      link.addEventListener("focus", () => setActive(link));
    });
    root.querySelector(".tr-list")!.addEventListener("pointerleave", () => setActive(null));
  } else {
    // Touch: de regel die door het midden van het scherm gaat, is actief
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target as HTMLAnchorElement); }),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    links.forEach((l) => io.observe(l));
  }
}
