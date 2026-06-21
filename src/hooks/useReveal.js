import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useReveal() {
  const triggersRef = useRef([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.querySelectorAll(".rv,.rl,.rr").forEach((el) => el.classList.add("v"));
      return;
    }

    const selectors = [
      { selector: ".rv", from: { opacity: 0, y: 28 } },
      { selector: ".rl", from: { opacity: 0, x: -38 } },
      { selector: ".rr", from: { opacity: 0, x: 38 } },
    ];

    selectors.forEach(({ selector, from }) => {
      const els = document.querySelectorAll(selector);
      els.forEach((el) => {
        gsap.set(el, { opacity: 0 });
        const tween = gsap.fromTo(
          el,
          from,
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              once: true,
            },
          }
        );
        triggersRef.current.push(tween.scrollTrigger);
      });
    });

    return () => {
      triggersRef.current.forEach((st) => st.kill());
      triggersRef.current = [];
    };
  }, []);
}
