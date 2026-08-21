// Sticky-cursor logo: within a modest catch radius the nav mark nudges
// toward the cursor (like it's gently held, up to a small max reach), and
// once the cursor leaves that radius it lets go and settles back to rest
// with barely a hint of spring — subtle, not a bounce you'd notice.
//
// Runs its own requestAnimationFrame spring instead of a CSS transition,
// since a snap-back transition can't overshoot past its resting position.
//
// Desktop-with-a-mouse only (no proximity concept on touch) and off under
// prefers-reduced-motion, matching cursor.ts.

export function initMagneticLogo(): void {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const logo = document.querySelector<HTMLElement>("[data-magnetic]");
  if (!logo) return;

  const radius = 90; // catch area the mark starts reaching for the cursor within
  const stickMax = 10; // how far it can actually travel — kept small so the pull stays a subtle hint
  const stiffness = 0.1; // soft response — also low-pass-filters small hand jitter near the mark
  const friction = 0.82; // close to critical damping — a faint settle, not a visible bounce
  const settleThreshold = 0.03;

  let targetX = 0;
  let targetY = 0;
  let x = 0;
  let y = 0;
  let vx = 0;
  let vy = 0;
  let raf = 0;

  function tick() {
    const ax = (targetX - x) * stiffness;
    const ay = (targetY - y) * stiffness;
    vx = (vx + ax) * friction;
    vy = (vy + ay) * friction;
    x += vx;
    y += vy;
    logo.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px)`;

    const atRest =
      Math.abs(vx) < settleThreshold &&
      Math.abs(vy) < settleThreshold &&
      Math.abs(targetX - x) < settleThreshold &&
      Math.abs(targetY - y) < settleThreshold;

    if (atRest) {
      x = targetX;
      y = targetY;
      logo.style.transform = targetX === 0 && targetY === 0 ? "" : `translate(${x}px, ${y}px)`;
      raf = 0;
      return;
    }
    raf = requestAnimationFrame(tick);
  }

  function ensureLoop() {
    if (raf === 0) raf = requestAnimationFrame(tick);
  }

  function updateTarget(clientX: number, clientY: number) {
    const rect = logo.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = clientX - cx;
    const dy = clientY - cy;
    const distance = Math.hypot(dx, dy);

    if (distance > 0 && distance < radius) {
      // Full 1:1 pull near the mark (sticks to the cursor); capped at
      // stickMax so it can't be dragged further than that even right up
      // against the edge of the radius.
      const reach = Math.min(distance, stickMax) / distance;
      targetX = dx * reach;
      targetY = dy * reach;
    } else {
      targetX = 0;
      targetY = 0;
    }
    ensureLoop();
  }

  window.addEventListener("mousemove", (e) => updateTarget(e.clientX, e.clientY));
  window.addEventListener("mouseleave", () => {
    targetX = 0;
    targetY = 0;
    ensureLoop();
  });
}
