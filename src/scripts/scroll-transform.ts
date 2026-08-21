// Drives the "Transformatie" section's before/after wipe from scroll position,
// not a click. Sets --progress (0–1) as a CSS custom property on each
// [data-scroll-transform] container; the CSS decides what --progress does.
// Skips entirely under prefers-reduced-motion — the static end state (set as
// the CSS default) stands in without animation.

export function initScrollTransform(): void {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const containers = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-transform]"));
  if (containers.length === 0) return;

  if (reduceMotion) {
    for (const el of containers) el.style.setProperty("--progress", "1");
    return;
  }

  let ticking = false;

  function update() {
    ticking = false;
    for (const el of containers) {
      // The scrub distance is the container's own height minus its sticky
      // child's height, not the viewport height — a sticky element only
      // stays pinned for exactly that long regardless of how tall the
      // viewport is. Measuring the child directly (rather than assuming
      // it's 100dvh) keeps progress reaching 1 exactly when the pin
      // naturally ends, however tall the sticky child actually renders —
      // see the min(100dvh, 800px) cap on .transform-sticky.
      const sticky = el.querySelector<HTMLElement>(":scope > *");
      const stickyHeight = sticky ? sticky.getBoundingClientRect().height : window.innerHeight;
      const rect = el.getBoundingClientRect();
      const total = rect.height - stickyHeight;
      const scrolled = -rect.top;
      const progress = total > 0 ? Math.min(1, Math.max(0, scrolled / total)) : 0;
      el.style.setProperty("--progress", progress.toFixed(4));
    }
  }

  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  }

  update();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
}
