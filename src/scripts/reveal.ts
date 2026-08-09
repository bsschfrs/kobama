// Generic "reveal on scroll into view" utility for [data-reveal] elements —
// adds .is-revealed once >=50% visible. Used for the statement section's
// muted-to-heading color transition (and anywhere else a single authored
// reveal moment is wanted). reset.css already collapses transitions under
// prefers-reduced-motion, so this stays simple and unconditional.

export function initReveal(): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (els.length === 0) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.5 }
  );

  for (const el of els) io.observe(el);
}
