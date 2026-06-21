import { Link } from "react-router-dom";
import { INDUSTRIES, INDUSTRY_PAGE_DATA } from "../data/industries";

export function Industries() {
  return (
    <section id="industries" style={{ background: "#0b1929", padding: "110px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="rv" style={{ marginBottom: 52 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Industry Focus</span>
          <h2 className="sy" style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 14 }}>
            Solutions Across<br />Every Vertical
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: 520, lineHeight: 1.75 }}>
            Deep domain expertise means we speak your industry's language — regulatory requirements, user expectations, and all.
          </p>
        </div>
        <div className="ig rv" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
          {INDUSTRIES.map((ind, i) => {
            const hasPage = !!INDUSTRY_PAGE_DATA[ind.id];
            const content = (
              <>
                <div style={{ fontSize: 34, marginBottom: 14 }}>{ind.icon}</div>
                <div className="sy" style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{ind.title}</div>
                <div style={{ fontSize: 12, color: "#6b8199", lineHeight: 1.65 }}>{ind.desc}</div>
              </>
            );
            return hasPage ? (
              <Link key={i} to={`/industry/${ind.id}`} className="icard" style={{ display: "block", background: "#1a2e45", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 16, padding: "28px 22px", textAlign: "center", transitionDelay: `${i * 0.05}s`, textDecoration: "none" }}>
                {content}
              </Link>
            ) : (
              <div key={i} className="icard" style={{ background: "#1a2e45", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 16, padding: "28px 22px", textAlign: "center", transitionDelay: `${i * 0.05}s` }}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
