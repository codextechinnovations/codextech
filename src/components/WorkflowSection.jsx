import { useState, useRef, useEffect, useCallback } from "react";
import { Check } from "lucide-react";
import { WORKFLOW } from "../data/workflow.jsx";

export function WorkflowSection() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const DURATION = 4000;
  const hasStarted = useRef(false);

  const startProgress = useCallback(() => {
    clearInterval(timerRef.current);
    clearInterval(progressRef.current);
    setProgress(0);
    let p = 0;
    progressRef.current = setInterval(() => {
      p += 100 / (DURATION / 50);
      if (p >= 100) {
        p = 100;
        clearInterval(progressRef.current);
      }
      setProgress(p);
    }, 50);
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % WORKFLOW.length);
    }, DURATION);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          startProgress();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => {
      clearTimeout(timerRef.current);
      clearInterval(progressRef.current);
      io.disconnect();
    };
  }, [startProgress]);

  const w = WORKFLOW[active];

  return (
    <section id="workflow" ref={sectionRef} style={{ background: "#1a2e45", padding: "110px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="rv" style={{ marginBottom: 60 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Our Process</span>
          <h2 className="sy" style={{ fontSize: "clamp(32px,4vw,54px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 16 }}>
            How We Turn Your<br />Vision Into Reality
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: 560, lineHeight: 1.75 }}>
            A battle-tested, six-phase process refined across 150+ projects. Transparent, milestone-driven, and engineered for results — not just activity.
          </p>
        </div>

        {/* STEPPER — horizontal desktop */}
        <div className="wfh rv" style={{ display: "flex", alignItems: "flex-start", gap: 0, marginBottom: 40, position: "relative" }}>
          {WORKFLOW.map((step, i) => {
            const isActive = active === i;
            const isPast = i < active;
            return (
              <div
                key={i}
                className="wstep"
                onClick={() => {
                  setActive(i);
                  setProgress(0);
                }}
                style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative" }}
              >
                {/* connector line */}
                {i < WORKFLOW.length - 1 && (
                  <div style={{ position: "absolute", left: "50%", top: 22, right: "-50%", height: 2, background: isPast || (isActive && progress > 10) ? "linear-gradient(90deg,#0e7f72,#1dcfba)" : "rgba(14,127,114,0.2)", transition: "background 0.5s ease", zIndex: 0 }}>
                    {isActive && <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg,#0e7f72,#1dcfba)", transition: "width 0.05s linear" }} />}
                  </div>
                )}
                {/* circle */}
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: isActive ? "linear-gradient(135deg,#0e7f72,#1dcfba)" : isPast ? "rgba(14,127,114,0.5)" : "rgba(14,127,114,0.15)",
                    border: isActive ? "none" : "1px solid rgba(14,127,114,0.3)",
                    display: "grid",
                    placeItems: "center",
                    zIndex: 1,
                    position: "relative",
                    transition: "all 0.35s ease",
                    animation: isActive ? "glow 2s ease infinite" : "none",
                    color: isActive ? "#fff" : isPast ? "#1dcfba" : "#6b8199",
                  }}
                >
                  {isPast ? <Check size={18} /> : <span className="sy" style={{ fontWeight: 700, fontSize: 13 }}>{step.num}</span>}
                </div>
                <div style={{ fontSize: 12, fontWeight: isActive ? 600 : 400, color: isActive ? "#1dcfba" : "rgba(255,255,255,0.45)", textAlign: "center", lineHeight: 1.4, transition: "color 0.3s" }}>{step.label}</div>
              </div>
            );
          })}
        </div>

        {/* ACTIVE STEP CONTENT */}
        <div className="rv" style={{ background: "#0b1929", border: "1px solid rgba(14,127,114,0.2)", borderRadius: 20, padding: "44px 40px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "rgba(14,127,114,0.1)" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg,#0e7f72,#1dcfba)", transition: "width 0.05s linear", transformOrigin: "left" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="g2">
            <div key={active} style={{ animation: "fadeUp 0.5s ease both" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, background: "linear-gradient(135deg,#0e7f72,#1dcfba)", borderRadius: 12, display: "grid", placeItems: "center", color: "#fff" }}>{w.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: "#1dcfba", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Phase {w.num}</div>
                  <div className="sy" style={{ fontSize: 15, fontWeight: 700 }}>{w.label}</div>
                </div>
                <div style={{ marginLeft: "auto", fontSize: 11, color: "rgba(255,255,255,0.35)", background: "rgba(14,127,114,0.1)", padding: "4px 10px", borderRadius: 6 }}>{w.time}</div>
              </div>
              <h3 className="sy" style={{ fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>{w.title}</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.58)", lineHeight: 1.8, fontWeight: 300 }}>{w.desc}</p>
            </div>
            <div key={`d-${active}`} style={{ animation: "fadeUp 0.5s ease 0.1s both" }}>
              <div style={{ fontSize: 12, color: "#1dcfba", letterSpacing: "0.09em", textTransform: "uppercase", fontWeight: 700, marginBottom: 18 }}>Deliverables You'll Receive</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {w.deliverables.map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", background: "rgba(14,127,114,0.07)", border: "1px solid rgba(14,127,114,0.15)", borderRadius: 10 }}>
                    <div style={{ width: 28, height: 28, background: "rgba(14,127,114,0.2)", borderRadius: 7, display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <Check size={14} color="#1dcfba" />
                    </div>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: vertical workflow */}
        <div className="wfv" style={{ display: "none", flexDirection: "column", gap: 0, marginTop: 32 }}>
          {WORKFLOW.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 16, paddingBottom: 28, position: "relative" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: i <= active ? "linear-gradient(135deg,#0e7f72,#1dcfba)" : "rgba(14,127,114,0.15)", border: "1px solid rgba(14,127,114,0.3)", display: "grid", placeItems: "center", color: "#fff", flexShrink: 0 }}>
                  <span className="sy" style={{ fontWeight: 700, fontSize: 13 }}>{step.num}</span>
                </div>
                {i < WORKFLOW.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 30, marginTop: 6, background: i < active ? "#0e7f72" : "rgba(14,127,114,0.2)" }} />}
              </div>
              <div style={{ paddingTop: 8, paddingBottom: 8 }}>
                <div className="sy" style={{ fontWeight: 700, fontSize: 16, marginBottom: 6, color: i === active ? "#1dcfba" : "#fff" }}>{step.label}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.65, fontWeight: 300 }}>{step.desc.slice(0, 120)}…</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
