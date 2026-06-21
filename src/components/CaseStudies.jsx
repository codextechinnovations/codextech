import { useState } from "react";
import { CASE_STUDIES } from "../data/company";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";

export function CaseStudies() {
  const [active, setActive] = useState(0);
  return (
    <section id="case-studies" style={{ background: "var(--color-bg)", padding: "var(--section-padding-y) var(--section-padding-x)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionHeader
          align="center"
          eyebrow="Case Studies"
          title="Real Projects, Real Results"
          description="Detailed breakdowns of challenges we solved, architectures we designed, and outcomes we delivered — written by the engineers who built them."
        />

        <div role="tablist" aria-label="Case studies" style={{ display: "flex", gap: "var(--space-md)", marginBottom: 28, flexWrap: "wrap", justifyContent: "center" }}>
          {CASE_STUDIES.map((cs, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={active === i}
              aria-controls={`case-study-panel-${i}`}
              id={`case-study-tab-${i}`}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              className="bw"
              style={{
                padding: "10px 24px",
                borderRadius: "var(--radius-md)",
                border: active === i ? "1px solid var(--color-accent)" : "1px solid var(--color-border)",
                background: active === i ? "var(--color-glass-bg)" : "transparent",
                color: active === i ? "var(--color-accent)" : "var(--color-text-muted)",
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

        <div className="rv" role="tabpanel" id={`case-study-panel-${active}`} aria-labelledby={`case-study-tab-${active}`} style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "var(--space-xl)" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 24, flexWrap: "wrap" }}>
            <Badge>By {CASE_STUDIES[active].author}</Badge>
          </div>

          <h3 className="sy" style={{ fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 20 }}>{CASE_STUDIES[active].title}</h3>

          <p style={{ fontSize: 15, color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: 28, fontWeight: 300 }}>{CASE_STUDIES[active].summary}</p>

          <div className="g2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--space-lg)", marginBottom: 28 }}>
            <div style={{ background: "var(--color-surface)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg)", borderLeft: "3px solid rgba(255,100,100,0.5)" }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--color-error)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>The Challenge</h4>
              <p style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.75, fontWeight: 300 }}>{CASE_STUDIES[active].challenge}</p>
            </div>
            <div style={{ background: "var(--color-surface)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg)", borderLeft: "3px solid var(--color-border-strong)" }}>
              <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--color-accent)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>The Solution</h4>
              <p style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.75, fontWeight: 300 }}>{CASE_STUDIES[active].solution}</p>
            </div>
          </div>

          <div style={{ background: "var(--color-surface)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg)", borderLeft: "3px solid rgba(251,191,36,0.5)", marginBottom: 28 }}>
            <h4 style={{ fontSize: 13, fontWeight: 700, color: "var(--color-warning)", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>Outcome</h4>
            <p style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.75, fontWeight: 300 }}>{CASE_STUDIES[active].outcome}</p>
          </div>

          <div style={{ display: "flex", gap: "var(--space-md)", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 12, color: "var(--color-text-muted)", marginRight: 4 }}>Tech:</span>
              {CASE_STUDIES[active].tech.map((t, i) => (
                <Badge key={i} color="accent" style={{ textTransform: "none", letterSpacing: "normal" }}>{t}</Badge>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              {CASE_STUDIES[active].results.map((r, i) => (
                <Badge key={i} color="warning" style={{ textTransform: "none", letterSpacing: "normal" }}>{r}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
