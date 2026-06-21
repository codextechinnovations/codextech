import { DIFFERENTIATORS } from "../data/services.jsx";
import { SectionHeader } from "./ui/SectionHeader";

export function WhyCodeX() {
  return (
    <section id="why" style={{ background: "var(--color-bg)", padding: "var(--section-padding-y) var(--section-padding-x)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="g2">
          <div className="rl">
            <SectionHeader
              eyebrow="Why CODEX Tech Innovations & Consultants LLP"
              title={<>A Partner Who Thinks<br />Beyond the Deadline</>}
              description="Most dev agencies are factories. We're a studio. Every engineer on your project has skin in the game — we measure success by your revenue growth, not our hours billed."
              style={{ marginBottom: 36 }}
            />
            <div style={{ padding: "var(--space-lg)", background: "rgba(14,127,114,0.1)", border: "1px solid var(--color-border-strong)", borderRadius: "var(--radius-lg)", borderLeft: "3px solid var(--color-accent)" }}>
              <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.75, fontStyle: "italic" }}>
                "We've worked with 3 agencies before CODEX. The difference is they actually care about whether the product succeeds in the market — not just whether it passed QA."
              </p>
              <div style={{ marginTop: 12, fontSize: 13, color: "var(--color-accent)", fontWeight: 500 }}>— Vikram Singh, CEO at Growfast</div>
            </div>
          </div>

          <div className="rr" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {DIFFERENTIATORS.map((d, i) => (
              <div key={i} className="diff-card" style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "20px 22px", background: "rgba(14,127,114,0.05)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", transitionDelay: `${i * 0.05}s` }}>
                <div style={{ width: 40, height: 40, background: "rgba(14,127,114,0.15)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-md)", display: "grid", placeItems: "center", color: "var(--color-accent)", flexShrink: 0 }}>{d.icon}</div>
                <div>
                  <div className="sy" style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{d.title}</div>
                  <div style={{ fontSize: 13, color: "var(--color-text-muted)", lineHeight: 1.65 }}>{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
