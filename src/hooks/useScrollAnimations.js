import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useHeroParallax() {
  const meshRef = useRef(null);

  useEffect(() => {
    if (!meshRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(meshRef.current, {
        yPercent: 20,
        scale: 1.05,
        ease: "none",
        scrollTrigger: {
          trigger: meshRef.current.closest("section"),
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, meshRef);

    return () => ctx.revert();
  }, []);

  return meshRef;
}

export function useStatsCounter(selector = ".sncounter") {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      document.querySelectorAll(selector).forEach((el) => {
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || "";
        if (isNaN(target)) return;

        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: target,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
            onUpdate: () => {
              el.textContent = Math.round(parseFloat(el.textContent)) + suffix;
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [selector]);
}
