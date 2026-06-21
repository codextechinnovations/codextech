import { TECH_STACK } from "../data/company";

export function TechStack() {
  return (
    <section id="tech" style={{ background: "#1a2e45", padding: "110px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="rv" style={{ marginBottom: 56, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
          <div>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Our Stack</span>
            <h2 className="sy" style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>
              Modern, Battle-Tested<br />Technology Stack
            </h2>
          </div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.48)", fontWeight: 300, maxWidth: 380, lineHeight: 1.75 }}>
            We choose the right tool for every challenge. No dogma — just engineering judgment that serves your users and your business.
          </p>
        </div>
        <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {Object.entries(TECH_STACK).map(([category, techs], ci) => (
            <div key={ci}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>{category}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {techs.map((t, ti) => (
                  <div key={ti} className="tpill" style={{ padding: "9px 18px", borderRadius: 8, border: "1px solid rgba(14,127,114,0.2)", background: "rgba(14,127,114,0.04)", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 7 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#0e7f72", flexShrink: 0 }} />{t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
