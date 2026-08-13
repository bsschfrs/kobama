// Nudges the nav logo a few pixels toward the cursor whenever it's nearby,
// as if it's inviting the click. Settles back with a CSS transition once the
// cursor leaves the radius, so this only needs a plain mousemove listener,
// no per-frame loop.
//
// Desktop-with-a-mouse only (no proximity concept on touch) and off under
// prefers-reduced-motion, matching cursor.ts.

export function initMagneticLogo(): void {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const logo = document.querySelector<HTMLElement>("[data-magnetic]");
  if (!logo) return;

  const radius = 90;
  const maxPull = 12;

  window.addEventListener("mousemove", (e) => {
    const rect = logo.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const distance = Math.hypot(dx, dy);

    if (distance > 0 && distance < radius) {
      // Strength falls off with distance (1 at the centre, 0 at the edge of
      // the radius); direction is the unit vector toward the cursor. Scaling
      // by raw dx/dy here instead would make the pull grow with distance
      // instead of shrink, since dx grows even as the falloff factor drops.
      const strength = (1 - distance / radius) * maxPull;
      const tx = (dx / distance) * strength;
      const ty = (dy / distance) * strength;
      logo.style.transform = `translate(${tx}px, ${ty}px)`;
    } else {
      logo.style.transform = "";
    }
  });
}
