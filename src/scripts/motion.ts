// Alle beweging van KOBAMA.nl. Zie DESIGN-BRIEF.md: twee momenten (hero-opbouw, werkwijze),
// de voor/na-vergelijking (transformatie) en kleurverloop tussen secties.
// Draait alleen als <html> de class "motion" heeft (geen prefers-reduced-motion).
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const root = document.documentElement;

if (root.classList.contains("motion")) {
  gsap.registerPlugin(ScrollTrigger);
  const mobile = window.matchMedia("(max-width: 800px)");
  const q = <T extends Element = HTMLElement>(s: string, el: ParentNode = document) => el.querySelector<T>(s)!;

  // ---------- 1. Hero: het logo zet zichzelf in elkaar ----------
  const hero = q("[data-hero]");
  const heroIso = q<SVGElement>(".hero-iso");
  const blk = (n: number) => heroIso.querySelector(`[data-block="${n}"]`)!;
  const par = (n: number) => heroIso.querySelector(`[data-par="${n}"]`)!;
  const exp = (n: number) => heroIso.querySelector(`[data-exp="${n}"]`)!;
  const words = hero.querySelectorAll("h1 .w > span");
  const fades = hero.querySelectorAll("[data-hero-fade]");

  // Beginposities: blauw boven, antraciet en oranje verder langs hun eigen isometrische as
  gsap.set(blk(1), { y: -320, opacity: 0 });
  gsap.set(blk(2), { x: -190, y: 110, opacity: 0 });
  gsap.set(blk(3), { x: 190, y: 110, opacity: 0 });
  gsap.set(words, { yPercent: 110 });
  gsap.set(fades, { opacity: 0, y: 18 });

  const intro = gsap.timeline({ delay: 0.15, defaults: { ease: "power4.out" } });
  intro
    .to(blk(1), { y: 0, duration: 1.0 }, 0)
    .to(blk(1), { opacity: 1, duration: 0.2, ease: "none" }, 0)
    .to(blk(2), { x: 0, y: 0, duration: 0.9 }, 0.28)
    .to(blk(2), { opacity: 1, duration: 0.2, ease: "none" }, 0.28)
    .to(blk(3), { x: 0, y: 0, duration: 0.9 }, 0.44)
    .to(blk(3), { opacity: 1, duration: 0.2, ease: "none" }, 0.44)
    .to(words, { yPercent: 0, duration: 0.9, stagger: 0.05 }, 0.1)
    .to(fades, { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" }, 0.75);

  // Na de opbouw: blokken reageren licht op de muis (alleen bij een echte muis)
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const depth = [0, 14, 8, 18];
    const movers = [1, 2, 3].map((n) => ({
      x: gsap.quickTo(par(n), "x", { duration: 0.8, ease: "power3.out" }),
      y: gsap.quickTo(par(n), "y", { duration: 0.8, ease: "power3.out" }),
      d: depth[n],
    }));
    intro.eventCallback("onComplete", () => {
      hero.addEventListener("pointermove", (e) => {
        const r = hero.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - 0.5;
        const ny = (e.clientY - r.top) / r.height - 0.5;
        movers.forEach((m) => { m.x(nx * m.d * 2); m.y(ny * m.d * 2); });
      });
      hero.addEventListener("pointerleave", () => movers.forEach((m) => { m.x(0); m.y(0); }));
    });
  }

  // Bij wegscrollen schuiven de blokken uit elkaar (in de werkwijze komen ze terug)
  gsap.timeline({ scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: 0.6 } })
    .to(exp(1), { y: -90, ease: "none" }, 0)
    .to(exp(2), { x: -80, y: 46, ease: "none" }, 0)
    .to(exp(3), { x: 80, y: 46, ease: "none" }, 0);

  // Vaste balk zodra de hero voorbij is
  const topbar = q("[data-topbar]");
  ScrollTrigger.create({
    trigger: hero,
    start: "bottom 20%",
    onEnter: () => topbar.classList.add("is-visible"),
    onLeaveBack: () => topbar.classList.remove("is-visible"),
  });

  // ---------- kleurverloop tussen secties ----------
  const themes: Record<string, Record<string, string>> = {
    dark: { "--surface": "#262626", "--text": "#ffffff", "--text-2": "#c9cbc9", "--rule": "#4a4a4a" },
    light: { "--surface": "#f1f2f0", "--text": "#1a1a1a", "--text-2": "#5b5e5c", "--rule": "#cfd2ce" },
    paper: { "--surface": "#ffffff", "--text": "#1a1a1a", "--text-2": "#5b5e5c", "--rule": "#cfd2ce" },
    orange: { "--surface": "#b03f12", "--text": "#ffffff", "--text-2": "#ffe6da", "--rule": "#d9764f" },
  };
  const setTheme = (name: string) => gsap.to(root, { ...themes[name], duration: 0.7, ease: "power2.inOut", overwrite: true });
  gsap.set(root, themes.light);
  document.querySelectorAll<HTMLElement>(".flow[data-theme]").forEach((sec, i, all) => {
    ScrollTrigger.create({
      trigger: sec,
      start: "top 55%",
      end: "bottom 55%",
      onEnter: () => setTheme(sec.dataset.theme!),
      onEnterBack: () => setTheme(sec.dataset.theme!),
      onLeaveBack: () => { if (i === 0) setTheme("light"); },
    });
  });

  // ---------- statement: per zin helder ----------
  document.querySelectorAll("[data-reveal]").forEach((el) => {
    gsap.fromTo(el, { opacity: 0.22 }, {
      opacity: 1, ease: "none",
      scrollTrigger: { trigger: el, start: "top 88%", end: "top 60%", scrub: 0.5 },
    });
  });

  // ---------- 3. transformatie: oud naar nieuw ----------
  const tr = q("[data-transform]");
  const compare = q("[data-compare]");
  gsap.timeline({ scrollTrigger: { trigger: tr, start: "top top", end: "bottom bottom", scrub: 0.6 } })
    .fromTo(compare, { "--cmp": "0%" }, { "--cmp": "100%", ease: "none", duration: 0.85 }, 0.05)
    .fromTo(q("[data-compare-line]"), { opacity: 1 }, { opacity: 0, duration: 0.08 }, 0.82)
    .fromTo(q("[data-cmp-after]"), { opacity: 0 }, { opacity: 1, duration: 0.1 }, 0.08)
    .to(q("[data-cmp-before]"), { opacity: 0, duration: 0.1 }, 0.8);

  // ---------- 4. werkwijze: het logo bouwt zich op ----------
  const werkIso = q<SVGElement>(".werk-iso");
  const blocks = [1, 2, 3].map((n) => werkIso.querySelector(`[data-block="${n}"]`)!);
  const ghosts = [1, 2, 3].map((n) => werkIso.querySelector(`[data-ghost="${n}"]`)!);
  gsap.set(blocks, { opacity: 0, y: -70 });
  gsap.set(ghosts, { opacity: 1 });
  document.querySelectorAll<HTMLElement>("[data-step]").forEach((step) => {
    const n = Number(step.dataset.step) - 1;
    gsap.timeline({
      scrollTrigger: { trigger: step, start: "top 75%", end: "top 40%", scrub: 0.5 },
    })
      .to(blocks[n], { y: 0, ease: "power2.out", duration: 1 }, 0)
      .to(blocks[n], { opacity: 1, duration: 0.2 }, 0)
      .to(ghosts[n], { opacity: 0, duration: 0.6 }, 0.4);
  });

  // Herbereken bij draaien van telefoon of wisselen van breakpoint
  mobile.addEventListener("change", () => ScrollTrigger.refresh());
}
