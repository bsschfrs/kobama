// Hides the LogoIntro overlay after its animation finishes — mirrors the
// React version's `useState`/`setTimeout(2000)` unmount, adapted to a plain
// class toggle since there's no component tree to unmount here. Duration
// matches the same reduced-motion shortening LogoIntro.astro's CSS applies,
// so the (now near-instant) overlay doesn't sit inert for an extra second
// and a half after its own animation already finished.

export function initLogoIntro(): void {
  const intro = document.querySelector<HTMLElement>("[data-logo-intro]");
  if (!intro) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.setTimeout(() => intro.classList.add("is-done"), reduceMotion ? 500 : 2000);
}
