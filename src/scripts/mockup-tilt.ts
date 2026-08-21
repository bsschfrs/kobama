// Two cursor-driven interactions on the hero site-mockup:
//
// 1. A subtle 3D tilt — hovering the card turns it gently in perspective
//    toward the cursor.
// 2. The CTA flying to the card's centre and growing into the dominant
//    button. The move distance depends on live layout (headline length,
//    breakpoint, --mockup-fs scale), so it's measured fresh on every hover
//    entry rather than hardcoded — see centerButtonOnCard().
//
// The dim-siblings/grow/arrow-slide styling itself is plain CSS on
// [data-tilt] (see SiteMockup.astro); this script only supplies the two
// numbers CSS can't compute on its own (the tilt angle, the move delta), so
// a script failure still leaves a (non-moving, non-tilting) button emphasis
// working.
//
// Desktop-with-a-mouse only, off under prefers-reduced-motion — same gating
// as the rest of the hero's cursor-driven motion (cursor.ts, magnetic-logo.ts).

export function initMockupTilt(): void {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const card = document.querySelector<HTMLElement>("[data-tilt]");
  if (!card) return;

  const maxTilt = 5; // degrees — a hint of depth, not a gimmick

  function handleMove(e: MouseEvent): void {
    const rect = card!.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const tiltY = (px - 0.5) * maxTilt * 2;
    const tiltX = (0.5 - py) * maxTilt * 2;
    card!.style.setProperty("--tilt-x", `${tiltX.toFixed(2)}deg`);
    card!.style.setProperty("--tilt-y", `${tiltY.toFixed(2)}deg`);
  }

  function resetTilt(): void {
    card!.style.setProperty("--tilt-x", "0deg");
    card!.style.setProperty("--tilt-y", "0deg");
  }

  card.addEventListener("mousemove", handleMove);
  card.addEventListener("mouseleave", resetTilt);

  const button = card.querySelector<HTMLElement>(".m-button");
  if (button) {
    function centerButtonOnCard(): void {
      const cardRect = card!.getBoundingClientRect();
      const btnRect = button!.getBoundingClientRect();
      const dx = cardRect.left + cardRect.width / 2 - (btnRect.left + btnRect.width / 2);
      const dy = cardRect.top + cardRect.height / 2 - (btnRect.top + btnRect.height / 2);
      button!.style.setProperty("--cta-x", `${dx.toFixed(1)}px`);
      button!.style.setProperty("--cta-y", `${dy.toFixed(1)}px`);
      // hero-cinematic.ts's ScrollTrigger tween sets this same element's
      // inline opacity from 0.5 (top of page) to 1 as the hero scrolls —
      // an inline style, so it otherwise wins over any CSS hover rule.
      // Force it fully visible while the button is the deliberate focus;
      // clearing it on release lets the scroll tween's own value show
      // through again.
      button!.style.opacity = "1";
    }

    function releaseButtonOpacity(): void {
      button!.style.removeProperty("opacity");
    }

    card.addEventListener("mouseenter", centerButtonOnCard);
    card.addEventListener("mouseleave", releaseButtonOpacity);
    button.addEventListener("focus", centerButtonOnCard);
    button.addEventListener("blur", releaseButtonOpacity);
  }
}
