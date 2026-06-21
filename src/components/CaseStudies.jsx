import { useState } from "react";
import { CASE_STUDIES } from "../data/company";

export function CaseStudies() {
  const [active, setActive] = useState(0);
  return (
    <section id="case-studies" style={{ background: "#0b1929", padding: "110px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="rv" style={{ marginBottom: 52, textAlign: "center" }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Case Studies</span>
          <h2 className="sy" style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 14 }}>
            Real Projects, Real Results
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: 600, margin: "0 auto" }}>
            Detailed breakdowns of challenges we solved, architectures we designed, and outcomes we delivered — written by the engineers who built them.
          </p>
        </div>

        <div style={{ display: "flex", gap: 20, marginBottom: 28, flexWrap: "wrap", justifyContent: "center" }}>
          {CASE_STUDIES.map((cs, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="bw"
              style={{
                padding: "10px 24px",
                borderRadius: 8,
                border: active === i ? "1px solid #1dcfba" : "1px solid rgba(14,127,114,0.25)",
                background: active === i ? "rgba(29,207,186,0.1)" : "transparent",
                color: active === i ? "#1dcfba" : "rgba(255,255,255,0.6)",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {cs.id === "pg-management" ? "🏠" : "🍔"} {cs.title.split(" —")[0]}
            </button>
          ))}
        </div>

        <div className="rv" style={{ background: "#1a2e45", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 20, padding: "40px 36px" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#1dcfba", background: "rgba(29,207,186,0.1)", padding: "4px 12px", borderRadius: 100 }}>
              By {CASE_STUDIES[active].author}
            </span>
          </div>

          <h3 className="sy" style={{ fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 20 }}>{CASE_STUDIES[active].title}</h3>

          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.68)", lineHeight: 1.8, marginBottom: 28, fontWeight: 300 }}>{CASE_STUDIES[active].summary}</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 28 }}>
            <div style={{ background: "rgba(11,25,41,0.6)", borderRadius: 14, padding: "24px 22px", borderLeft: "3px solid rgba(255,100,100,0.5)" }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#f87171", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>The Challenge</h4>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, fontWeight: 300 }}>{CASE_STUDIES[active].challenge}</p>
            </div>
            <div style={{ background: "rgba(11,25,41,0.6)", borderRadius: 14, padding: "24px 22px", borderLeft: "3px solid rgba(29,207,186,0.5)" }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "#1dcfba", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>The Solution</h4>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, fontWeight: 300 }}>{CASE_STUDIES[active].solution}</p>
            </div>
          </div>

          <div style={{ background: "rgba(11,25,41,0.6)", borderRadius: 14, padding: "24px 22px", borderLeft: "3px solid rgba(251,191,36,0.5)", marginBottom: 28 }}>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "#fbbf24", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>Outcome</h4>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, fontWeight: 300 }}>{CASE_STUDIES[active].outcome}</p>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, color: "#6b8199", marginRight: 4 }}>Tech:</span>
              {CASE_STUDIES[active].tech.map((t, i) => (
                <span key={i} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 5, background: "rgba(14,127,114,0.1)", color: "#1dcfba", border: "1px solid rgba(29,207,186,0.15)" }}>{t}</span>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {CASE_STUDIES[active].results.map((r, i) => (
                <span key={i} style={{ fontSize: 12, padding: "5px 12px", borderRadius: 5, background: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.2)", fontWeight: 600 }}>{r}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
