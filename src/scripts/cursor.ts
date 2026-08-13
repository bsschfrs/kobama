// Custom cursor: a dot plus a ring that trails behind it with a little lag
// (lerp toward the pointer each frame). On hover over anything clickable, the
// ring grows and reveals the same arrow used in .btn-arrow — reusing an
// existing motif instead of inventing a new shape. On press, both shrink
// slightly, like a button being pushed in.
//
// Both shapes use mix-blend-mode: difference so they stay visible against
// any section background (white, navy) without per-section colour logic.
//
// Desktop-with-a-mouse only: bails on touch devices (no hover concept there)
// and under prefers-reduced-motion (the whole effect is built on a following
// motion that reduced-motion users have asked not to see).

export function initCustomCursor(): void {
  if (!window.matchMedia("(pointer: fine)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const dot = document.querySelector<HTMLElement>("[data-cursor-dot]");
  const ring = document.querySelector<HTMLElement>("[data-cursor-ring]");
  if (!dot || !ring) return;

  document.documentElement.classList.add("has-custom-cursor");
  dot.style.opacity = "1";
  ring.style.opacity = "1";

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;
  let isHover = false;
  let isActive = false;

  // Hover always wins for the dot: it stays hidden while the ring is doing
  // the hover treatment, so a click-while-hovering doesn't flash the dot
  // back in for a frame. The ring's own squeeze is that click's feedback.
  const dotScale = () => (isHover ? 0 : isActive ? 0.5 : 1);
  const ringScale = () => (isActive ? (isHover ? 1.25 : 0.82) : isHover ? 1.5 : 1);

  const placeDot = () => {
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%) scale(${dotScale()})`;
  };

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    placeDot();
  });

  function raf() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(${ringScale()})`;
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  const interactiveSelector = "a, button, [role='button']";
  document.addEventListener(
    "mouseover",
    (e) => {
      if ((e.target as HTMLElement).closest(interactiveSelector)) {
        isHover = true;
        ring.classList.add("is-hover");
        placeDot();
      }
    },
    true,
  );
  document.addEventListener(
    "mouseout",
    (e) => {
      if ((e.target as HTMLElement).closest(interactiveSelector)) {
        isHover = false;
        ring.classList.remove("is-hover");
        placeDot();
      }
    },
    true,
  );
  document.addEventListener("mousedown", () => {
    isActive = true;
    placeDot();
  });
  document.addEventListener("mouseup", () => {
    isActive = false;
    placeDot();
  });
}
