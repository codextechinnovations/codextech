import { useRef, useState, useEffect } from "react";
import { useCounter } from "../hooks/useCounter";

function StatItem({ target, suffix, label, delay }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStarted(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);

  const value = useCounter(target, 2200, started);

  return (
    <div ref={ref} style={{ textAlign: "center", padding: "0 24px" }}>
      <div
        className="sy snum"
        style={{
          fontSize: 48,
          fontWeight: 800,
          color: "#1dcfba",
          lineHeight: 1,
          animation: started ? "countUp 0.6s ease both" : "none",
          animationDelay: `${delay}s`,
        }}
      >
        {value}
        {suffix}
      </div>
      <div style={{ fontSize: 13, color: "#6b8199", marginTop: 6 }}>{label}</div>
    </div>
  );
}

export function StatsBar() {
  const stats = [
    { target: 150, suffix: "+", label: "Projects Shipped" },
    { target: 98, suffix: "%", label: "Client Retention Rate" },
    { target: 40, suffix: "+", label: "Senior Engineers" },
    { target: 8, suffix: "+", label: "Years of Excellence" },
  ];

  return (
    <div style={{ background: "#1a2e45", borderTop: "1px solid rgba(14,127,114,0.18)", borderBottom: "1px solid rgba(14,127,114,0.18)", padding: "48px 5%" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
        {stats.map((s, i) => (
          <StatItem key={i} target={s.target} suffix={s.suffix} label={s.label} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}
