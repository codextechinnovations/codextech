import { TECH_STACK } from "../data/company";
import { SectionHeader } from "./ui/SectionHeader";

export function TechStack() {
  return (
    <section id="tech" style={{ background: "var(--color-surface-elevated)", padding: "var(--section-padding-y) var(--section-padding-x)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div style={{ marginBottom: 56, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
          <SectionHeader
            eyebrow="Our Stack"
            title={<>Modern, Battle-Tested<br />Technology Stack</>}
            style={{ marginBottom: 0 }}
          />
          <p style={{ fontSize: 15, color: "var(--color-text-muted)", fontWeight: 300, maxWidth: 380, lineHeight: 1.75 }}>
            We choose the right tool for every challenge. No dogma — just engineering judgment that serves your users and your business.
          </p>
        </div>
        <div className="rv" style={{ display: "flex", flexDirection: "column", gap: "var(--space-lg)" }}>
          {Object.entries(TECH_STACK).map(([category, techs], ci) => (
            <div key={ci}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-subtle)", marginBottom: 12 }}>{category}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {techs.map((t, ti) => (
                  <div key={ti} className="tpill" style={{ padding: "9px 18px", borderRadius: "var(--radius-md)", border: "1px solid var(--color-border)", background: "var(--color-glass-bg)", fontSize: 13, fontWeight: 500, color: "var(--color-text-secondary)", display: "flex", alignItems: "center", gap: 7 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-accent-700)", flexShrink: 0 }} />{t}
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
