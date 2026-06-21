import { DIFFERENTIATORS } from "../data/services.jsx";

export function WhyCodeX() {
  return (
    <section id="why" style={{ background: "#0b1929", padding: "110px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="g2">
          <div className="rl">
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Why CODEX Tech Innovations & Consultants LLP</span>
            <h2 className="sy" style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 20 }}>
              A Partner Who Thinks<br />Beyond the Deadline
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.52)", fontWeight: 300, lineHeight: 1.8, marginBottom: 36 }}>
              Most dev agencies are factories. We're a studio. Every engineer on your project has skin in the game — we measure success by your revenue growth, not our hours billed.
            </p>
            <div style={{ padding: "20px 24px", background: "rgba(14,127,114,0.1)", border: "1px solid rgba(29,207,186,0.2)", borderRadius: 14, borderLeft: "3px solid #1dcfba" }}>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, fontStyle: "italic" }}>
                "We've worked with 3 agencies before CODEX Tech Innovations & Consultants LLP. The difference is they actually care about whether the product succeeds in the market — not just whether it passed QA."
              </p>
              <div style={{ marginTop: 12, fontSize: 13, color: "#1dcfba", fontWeight: 500 }}>— Vikram Singh, CEO at Growfast</div>
            </div>
          </div>

          <div className="rr" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {DIFFERENTIATORS.map((d, i) => (
              <div key={i} className="diff-card" style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "20px 22px", background: "rgba(14,127,114,0.05)", border: "1px solid rgba(14,127,114,0.15)", borderRadius: 14, transitionDelay: `${i * 0.05}s` }}>
                <div style={{ width: 40, height: 40, background: "rgba(14,127,114,0.15)", border: "1px solid rgba(14,127,114,0.25)", borderRadius: 10, display: "grid", placeItems: "center", color: "#1dcfba", flexShrink: 0 }}>{d.icon}</div>
                <div>
                  <div className="sy" style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{d.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
