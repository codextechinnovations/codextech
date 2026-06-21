import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function StatItem({ target, suffix, label, delay }) {
  const numRef = useRef(null);

  useGSAP(() => {
    if (!numRef.current) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      numRef.current.textContent = target + suffix;
      return;
    }

    gsap.fromTo(
      numRef.current,
      { textContent: 0 },
      {
        textContent: target,
        duration: 2,
        delay,
        ease: "power2.out",
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: numRef.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          numRef.current.textContent = Math.round(parseFloat(numRef.current.textContent)) + suffix;
        },
      }
    );
  }, [target, suffix, delay]);

  return (
    <div style={{ textAlign: "center", padding: "0 var(--space-lg)", position: "relative" }}>
      <div
        ref={numRef}
        className="sy snum"
        style={{
          fontSize: "clamp(32px, 4vw, 48px)",
          fontWeight: 800,
          color: "var(--color-accent)",
          lineHeight: 1,
        }}
      >
        {target}{suffix}
      </div>
      <div style={{ fontSize: 13, color: "var(--color-text-muted)", marginTop: 8, fontWeight: 500 }}>{label}</div>
    </div>
  );
}

export function StatsBar() {
  const stats = [
    { target: 150, suffix: "+", label: "Projects Shipped" },
    { target: 98, suffix: "%", label: "Client Retention" },
    { target: 40, suffix: "+", label: "Senior Engineers" },
    { target: 8, suffix: "+", label: "Years of Excellence" },
  ];

  return (
    <div
      style={{
        background: "var(--color-surface-elevated)",
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
        padding: "var(--space-2xl) var(--section-padding-x)",
      }}
    >
      <div className="stats-grid" style={{ maxWidth: "var(--container-max)", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
        {stats.map((s, i) => (
          <StatItem key={i} target={s.target} suffix={s.suffix} label={s.label} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}
