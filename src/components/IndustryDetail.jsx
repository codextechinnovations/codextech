import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { INDUSTRY_PAGE_DATA } from "../data/industries";
import { PRODUCTS } from "../data/products";
import { hexToRgb } from "../utils/hexToRgb";

export function IndustryDetail({ industryId }) {
  const ind = useMemo(() => INDUSTRY_PAGE_DATA[industryId] || null, [industryId]);
  const indProducts = useMemo(() => (ind ? PRODUCTS.filter((p) => ind.productIds.includes(p.id)) : []), [ind]);
  const relatedInds = useMemo(() => (ind ? Object.values(INDUSTRY_PAGE_DATA).filter((x) => x.id !== ind.id).slice(0, 4) : []), [ind]);

  if (!ind) return null;

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "120px 5% 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(${hexToRgb(ind.color)},0.25) 0%,transparent 70%)` }} />
        <div className="hgrid" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 32, flexWrap: "wrap" }}>
            <div style={{ fontSize: 80, lineHeight: 1, flexShrink: 0 }}>{ind.icon}</div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: ind.accent, background: `rgba(${hexToRgb(ind.accent)},0.1)`, border: `1px solid rgba(${hexToRgb(ind.accent)},0.25)`, padding: "4px 12px", borderRadius: 100, marginBottom: 14, display: "inline-block" }}>Industry</span>
              <h1 className="sy" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 12 }}>{ind.heroTitle}</h1>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.58)", lineHeight: 1.8, fontWeight: 300, maxWidth: 680 }}>{ind.heroDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div style={{ background: "#1a2e45", borderTop: "1px solid rgba(14,127,114,0.18)", borderBottom: "1px solid rgba(14,127,114,0.18)", padding: "24px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 32, justifyContent: "space-around", flexWrap: "wrap" }}>
          {ind.stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div className="sy" style={{ fontSize: 28, fontWeight: 800, color: ind.accent }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#6b8199", marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <section style={{ padding: "80px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="rv" style={{ marginBottom: 44 }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Why CODEX for {ind.name}</span>
            <h2 className="sy" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Key Benefits</h2>
          </div>
          <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
            {ind.benefits.map((b, i) => (
              <div key={i} className="scard" style={{ background: "#1a2e45", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 16, padding: "28px 24px", display: "flex", gap: 16 }}>
                <div style={{ fontSize: 36, flexShrink: 0, lineHeight: 1 }}>{b.icon}</div>
                <div>
                  <h3 className="sy" style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{b.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section style={{ background: "#1a2e45", padding: "80px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="rv" style={{ marginBottom: 36 }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Relevant Products</span>
            <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>{ind.name} Solutions We've Built</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", fontWeight: 300, marginTop: 8 }}>Live, production-tested products purpose-built for this industry.</p>
          </div>
          <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            {indProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="pcard" style={{ display: "block", background: "#0b1929", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 16, padding: "24px 20px", textDecoration: "none" }}>
                <div style={{ fontSize: 36, marginBottom: 10, lineHeight: 1 }}>{p.emoji}</div>
                <div className="sy" style={{ fontSize: 15, fontWeight: 700, marginBottom: 4, color: "#fff" }}>{p.name}</div>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{p.tagline}</p>
                <div style={{ display: "flex", gap: 4, marginTop: 10, flexWrap: "wrap" }}>
                  {p.tags.slice(0, 3).map((t, j) => (
                    <span key={j} style={{ fontSize: 10, padding: "2px 8px", borderRadius: 4, background: "rgba(14,127,114,0.1)", color: "#1dcfba", border: "1px solid rgba(29,207,186,0.15)" }}>{t}</span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section style={{ padding: "80px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="rv" style={{ marginBottom: 28 }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Who We Serve</span>
            <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Built For</h2>
          </div>
          <div className="rv" style={{ padding: "24px 28px", background: "rgba(14,127,114,0.07)", border: "1px solid rgba(29,207,186,0.18)", borderRadius: 14, borderLeft: "3px solid #1dcfba" }}>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", lineHeight: 1.8, fontWeight: 300 }}>{ind.audience}</p>
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section style={{ background: "#1a2e45", padding: "80px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="rv" style={{ marginBottom: 36 }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Explore More</span>
            <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Other Industries We Serve</h2>
          </div>
          <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {relatedInds.map((x) => (
              <Link key={x.id} to={`/industry/${x.id}`} className="pcard" style={{ display: "block", background: "#0b1929", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 16, padding: "24px 16px", textAlign: "center", textDecoration: "none" }}>
                <div style={{ fontSize: 36, marginBottom: 8, lineHeight: 1 }}>{x.icon}</div>
                <div className="sy" style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}>{x.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#0e7f72 0%,#0a5c55 50%,#1a2e45 100%)", padding: "80px 5%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(29,207,186,0.15) 0%,transparent 70%)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 className="sy" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 14 }}>Build for {ind.name}?</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", fontWeight: 300, maxWidth: 520, margin: "0 auto 28px" }}>Let's discuss your project. Free consultation within 24 hours. Fixed-price contracts with 6-month warranty.</p>
          <Link to="/?section=contact" className="bw" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#0e7f72", padding: "15px 32px", borderRadius: 9, fontSize: 15, fontWeight: 700, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
