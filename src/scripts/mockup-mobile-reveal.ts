// Touch fallback for the hero mockup's CTA reveal: there's no hover on
// touch, so mockup-tilt.ts's fly-to-centre-and-grow never fires there. This
// triggers the same visual state instead — SiteMockup.astro's CSS matches
// `.is-active` alongside `:hover`/`:focus-within` — the first time the
// visitor scrolls a small amount, so it reads as "the page invites you to
// this button" rather than something you have to go find.
//
// Runs opposite to mockup-tilt.ts: only when there's no fine pointer (touch).
// No prefers-reduced-motion gate needed — reset.css already collapses the
// transition duration globally, so this just snaps to the revealed state
// instead of animating into it.

export function initMockupMobileReveal(): void {
  if (window.matchMedia("(pointer: fine)").matches) return;

  const card = document.querySelector<HTMLElement>("[data-tilt]");
  const button = card?.querySelector<HTMLElement>(".m-button");
  if (!card || !button) return;

  const revealThreshold = 40; // px of scroll — deliberately small, this should feel almost immediate

  function reveal(): void {
    if (window.scrollY < revealThreshold) return;

    const cardRect = card!.getBoundingClientRect();
    const btnRect = button!.getBoundingClientRect();
    const dx = cardRect.left + cardRect.width / 2 - (btnRect.left + btnRect.width / 2);
    const dy = cardRect.top + cardRect.height / 2 - (btnRect.top + btnRect.height / 2);
    button!.style.setProperty("--cta-x", `${dx.toFixed(1)}px`);
    button!.style.setProperty("--cta-y", `${dy.toFixed(1)}px`);
    // Same override mockup-tilt.ts does: hero-cinematic.ts's ScrollTrigger
    // tween sets this element's inline opacity from 0.5 at the top of the
    // page — force it visible now that it's the deliberate focus.
    button!.style.opacity = "1";

    card!.classList.add("is-active");
    window.removeEventListener("scroll", reveal);
  }

  window.addEventListener("scroll", reveal, { passive: true });
}
