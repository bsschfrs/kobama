// Voor/na-vergelijking in de transformatie. Twee manieren om te vergelijken:
// scrollen (motion.ts roept fromScroll aan) en de scheidslijn zelf slepen, ook met het toetsenbord.
// Wat het laatst gebeurt wint; na slepen schuift de lijn bij de volgende scroll rustig terug.
import { gsap } from "gsap";

const compare = document.querySelector<HTMLElement>("[data-compare]")!;
const handle = compare.querySelector<HTMLElement>("[data-compare-handle]")!;
const afterLabel = compare.querySelector<HTMLElement>("[data-cmp-after]")!;
const beforeLabel = compare.querySelector<HTMLElement>("[data-cmp-before]")!;

const clamp = (v: number, min = 0, max = 100) => Math.min(max, Math.max(min, v));
const state = { v: 50 };
let dragging = false;
let manual = false;
let grab = 0; // afstand tussen muis en midden van het bolletje, zodat de lijn niet verspringt

function render() {
  const v = state.v;
  compare.style.setProperty("--cmp", `${v}%`);
  afterLabel.style.opacity = String(clamp((v - 3) / 10, 0, 1));
  beforeLabel.style.opacity = String(clamp((97 - v) / 10, 0, 1));
  handle.setAttribute("aria-valuenow", String(Math.round(v)));
}

function setManual(v: number) {
  gsap.killTweensOf(state);
  manual = true;
  state.v = clamp(v);
  render();
}

/** Positie vanuit de scroll (0-100). Na slepen eerst rustig terug naar de scrollpositie. */
export function fromScroll(v: number) {
  if (dragging) return;
  if (manual) {
    gsap.to(state, { v, duration: 0.5, ease: "power2.out", overwrite: true, onUpdate: render, onComplete: () => { manual = false; } });
    return;
  }
  if (gsap.isTweening(state)) return;
  state.v = v;
  render();
}

const fromPointer = (x: number) => {
  const r = compare.getBoundingClientRect();
  setManual(((x - grab - r.left) / r.width) * 100);
};

handle.addEventListener("pointerdown", (e) => {
  if (e.button !== 0) return;
  e.preventDefault();
  dragging = true;
  document.documentElement.classList.add("is-comparing");
  handle.classList.add("is-dragging");
  const b = handle.getBoundingClientRect();
  grab = e.clientX - (b.left + b.width / 2);
});
window.addEventListener("pointermove", (e) => { if (dragging) fromPointer(e.clientX); });
const stop = () => {
  if (!dragging) return;
  dragging = false;
  document.documentElement.classList.remove("is-comparing");
  handle.classList.remove("is-dragging");
};
window.addEventListener("pointerup", stop);
window.addEventListener("pointercancel", stop);
document.addEventListener("selectstart", (e) => { if (dragging) e.preventDefault(); });

handle.addEventListener("keydown", (e) => {
  const step = e.shiftKey ? 10 : 5;
  const keys: Record<string, number> = { ArrowLeft: state.v - step, ArrowRight: state.v + step, Home: 0, End: 100 };
  if (e.key in keys) { e.preventDefault(); setManual(keys[e.key]); }
});

render();
