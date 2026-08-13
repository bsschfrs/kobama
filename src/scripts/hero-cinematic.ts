// Scroll-driven cinematic hero: differential parallax between three layers,
// scrubbed against a tall wrapper whose inner stage is CSS-sticky (rather than
// GSAP's own pin, which injects a spacer and fights Astro's layout).
//
// Layer speeds, slowest → fastest:
//   sky      -6%   atmosphere barely drifts
//   copy    -26%   headline leaves first
//   mockup  -78%   rises and clears the frame
//   facades -14%   foreground lags, so the mockup visibly passes behind it
//
// The facades layer's own bottom gradient resolves to --navy, which is also the
// background of the section that follows — so the two never read as a seam.
//
// The mockup's own CTA (`[data-layer='cta']`, the site's real "Plan een
// gesprek" button) starts subdued and sharpens to full strength over the same
// scroll range, independent of the mockup's own transform: it's meant to read
// as a button the visitor notices more, not less, once they start scrolling.

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function initCinematicHero(): void {
  const scroller = document.querySelector<HTMLElement>("[data-hero-scroll]");
  const stage = document.querySelector<HTMLElement>("[data-hero-stage]");
  if (!scroller || !stage) return;

  const sky = stage.querySelector<HTMLElement>("[data-layer='sky']");
  const copy = stage.querySelector<HTMLElement>("[data-layer='copy']");
  const mockup = stage.querySelector<HTMLElement>("[data-layer='mockup']");
  const facades = stage.querySelector<HTMLElement>("[data-layer='facades']");
  const cta = stage.querySelector<HTMLElement>("[data-layer='cta']");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    // Static composition is the design's resting state — nothing to reveal.
    scroller.style.height = "auto";
    stage.style.position = "relative";
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: scroller,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.6,
    },
    defaults: { ease: "none" },
  });

  if (sky) tl.to(sky, { yPercent: -6, scale: 1.04 }, 0);
  if (copy) tl.to(copy, { yPercent: -26, opacity: 0, ease: "power1.in" }, 0);
  if (mockup) tl.to(mockup, { yPercent: -78, scale: 0.965 }, 0);
  if (facades) tl.to(facades, { yPercent: -14 }, 0);
  if (cta) tl.fromTo(cta, { opacity: 0.5, scale: 0.92 }, { opacity: 1, scale: 1, ease: "power1.out" }, 0);

  const hint = stage.querySelector<HTMLElement>("[data-hero-hint]");
  if (hint) tl.to(hint, { opacity: 0, duration: 0.18, ease: "power1.in" }, 0);

  // Nav flips from transparent-over-photo to the solid light bar the rest of
  // the page uses, at the point the navy section takes over the viewport.
  const nav = document.querySelector<HTMLElement>("[data-nav]");
  if (nav) {
    ScrollTrigger.create({
      trigger: scroller,
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => nav.classList.toggle("is-solid", self.progress > 0.55),
    });
  }
}
