import { Link } from "react-router-dom";
import { INDUSTRIES, INDUSTRY_PAGE_DATA } from "../data/industries";
import { SectionHeader } from "./ui/SectionHeader";

export function Industries() {
  return (
    <section id="industries" style={{ background: "var(--color-bg)", padding: "var(--section-padding-y) var(--section-padding-x)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Industry Focus"
          title={<>Solutions Across<br />Every Vertical</>}
          description="Deep domain expertise means we speak your industry's language — regulatory requirements, user expectations, and all."
        />
        <div className="ig4 rv" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "var(--space-md)" }}>
          {INDUSTRIES.map((ind, i) => {
            const hasPage = !!INDUSTRY_PAGE_DATA[ind.id];
            const content = (
              <>
                <div aria-hidden="true" style={{ fontSize: 34, marginBottom: 14 }}>{ind.icon}</div>
                <div className="sy" style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{ind.title}</div>
                <div style={{ fontSize: 12, color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: hasPage ? 0 : 12 }}>{ind.desc}</div>
                {!hasPage && (
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-subtle)", background: "var(--color-glass-bg)", border: "1px solid var(--color-glass-border)", padding: "3px 10px", borderRadius: "var(--radius-full)" }}>
                    Coming Soon
                  </span>
                )}
              </>
            );
            return hasPage ? (
              <Link key={i} to={`/industry/${ind.id}`} className="icard" style={{ display: "block", background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "28px 22px", textAlign: "center", transitionDelay: `${i * 0.05}s`, textDecoration: "none" }}>
                {content}
              </Link>
            ) : (
              <div key={i} className="icard" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "28px 22px", textAlign: "center", transitionDelay: `${i * 0.05}s`, opacity: 0.7, cursor: "default" }}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
