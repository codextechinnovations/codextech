import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { INDUSTRY_PAGE_DATA } from "../data/industries";
import { PRODUCTS } from "../data/products";
import { hexToRgb } from "../utils/hexToRgb";
import { useReveal } from "../hooks/useReveal";

export function IndustryDetail({ industryId }) {
  useReveal();
  const ind = useMemo(() => INDUSTRY_PAGE_DATA[industryId] || null, [industryId]);
  const indProducts = useMemo(() => (ind ? PRODUCTS.filter((p) => ind.productIds.includes(p.id)) : []), [ind]);
  const relatedInds = useMemo(() => (ind ? Object.values(INDUSTRY_PAGE_DATA).filter((x) => x.id !== ind.id).slice(0, 4) : []), [ind]);

  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!ind) return null;

  const rgb = hexToRgb(ind.color);
  const accentRgb = hexToRgb(ind.accent);

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "140px 5% 80px", position: "relative", overflow: "hidden", background: "var(--color-bg)" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 70% 60% at 30% 50%, rgba(${rgb},0.2) 0%,transparent 60%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(${accentRgb},0.08) 0%,transparent 60%)` }} />
        <div className="hgrid" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start" }}>
            <div>
              <div className="rv" style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16 }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: ind.accent, background: `rgba(${accentRgb},0.1)`, border: `1px solid rgba(${accentRgb},0.25)`, padding: "5px 14px", borderRadius: 100 }}>Industry</span>
              </div>
              <h1 className="sy rv" style={{ fontSize: "clamp(40px,5.5vw,68px)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.03em", marginBottom: 16 }}>
                {ind.icon} {ind.heroTitle}
              </h1>
              <p className="rv" style={{ fontSize: 18, color: "var(--color-text-secondary)", lineHeight: 1.85, fontWeight: 300, maxWidth: 680 }}>{ind.heroDesc}</p>
              <div className="rv" style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <a href="#solutions" className="btn btn-primary btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,var(--color-accent-700),var(--color-accent-600))", color: "#fff", padding: "14px 28px", borderRadius: "var(--radius-md)", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
                  Explore Solutions <ArrowRight size={16} />
                </a>
                <a href="/?section=contact" className="btn btn-secondary btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--color-text)", padding: "14px 28px", borderRadius: "var(--radius-md)", fontSize: 15, fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
                  Talk to Our Team
                </a>
              </div>
            </div>
            <div className="rv hv" style={{ fontSize: 100, lineHeight: 1, alignSelf: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <div style={{ fontSize: 90 }}>{ind.icon}</div>
              <div style={{ width: 120, height: 3, background: `linear-gradient(90deg,${ind.color},${ind.accent})`, borderRadius: 2 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="rv" style={{ background: "var(--color-surface-elevated)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "32px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: `repeat(${ind.stats.length},1fr)`, gap: 16 }}>
          {ind.stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "8px 16px" }}>
              <div className="sncounter sy" style={{ fontSize: 32, fontWeight: 800, color: ind.accent, letterSpacing: "-0.03em" }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "var(--color-text-muted)", marginTop: 4, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Solutions */}
      <section id="solutions" style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="rv" style={{ marginBottom: 48 }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>Our Solutions</span>
            <h2 className="sy" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 12 }}>Tailored for {ind.name}</h2>
            <p style={{ fontSize: 16, color: "var(--color-text-muted)", fontWeight: 300, maxWidth: 560, lineHeight: 1.7 }}>Purpose-built technology solutions designed to address the unique challenges of this industry.</p>
          </div>
          <div className="rv g2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
            {ind.benefits.map((b, i) => (
              <div key={i} className="scard" style={{ background: `linear-gradient(135deg,var(--color-surface-elevated),var(--color-bg))`, border: "1px solid var(--color-border)", borderRadius: 18, padding: "32px 28px", display: "flex", gap: 18 }}>
                <div style={{ fontSize: 40, flexShrink: 0, lineHeight: 1 }}>{b.icon}</div>
                <div>
                  <h3 className="sy" style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.75 }}>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      {indProducts.length > 0 && (
        <section style={{ background: "var(--color-surface-elevated)", padding: "100px 5%", overflow: "hidden" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 36 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>Relevant Products</span>
              <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>{ind.name} Solutions We've Built</h2>
              <p style={{ fontSize: 15, color: "var(--color-text-muted)", fontWeight: 300, marginTop: 8 }}>Live, production-tested products deployed for this industry.</p>
            </div>
            <div className="rv" style={{ display: "flex", gap: 18, overflowX: "auto", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", paddingBottom: 8 }}>
              {indProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="pcard" style={{ flex: "0 0 300px", scrollSnapAlign: "start", display: "block", background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: 18, padding: "28px 24px", textDecoration: "none", transition: "all 0.3s ease" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 14 }}>
                    <div style={{ fontSize: 44, lineHeight: 1, flexShrink: 0 }}>{p.emoji}</div>
                    <div>
                      <div className="sy" style={{ fontSize: 17, fontWeight: 700, color: "var(--color-text)", marginBottom: 2 }}>{p.name}</div>
                      <div style={{ fontSize: 12, color: "var(--color-text-subtle)", lineHeight: 1.5 }}>{p.tagline}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: 12 }}>{p.desc.slice(0, 120)}…</p>
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 14 }}>
                    {p.tags.slice(0, 4).map((t, j) => (
                      <span key={j} style={{ fontSize: 10, padding: "3px 10px", borderRadius: 100, background: `rgba(${accentRgb},0.1)`, color: ind.accent, border: `1px solid rgba(${accentRgb},0.2)` }}>{t}</span>
                    ))}
                  </div>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: ind.accent, fontWeight: 600 }}>
                    View Product <ArrowRight size={13} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Case Study Snippet */}
      <section style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="rv" style={{ marginBottom: 36 }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>Case Study</span>
            <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Success Story</h2>
            <p style={{ fontSize: 15, color: "var(--color-text-muted)", fontWeight: 300, marginTop: 8 }}>How we helped a {ind.name} client achieve measurable results.</p>
          </div>
          <div className="rv" style={{ background: `linear-gradient(135deg,rgba(${accentRgb},0.08),rgba(${accentRgb},0.02))`, border: `1px solid rgba(${accentRgb},0.15)`, borderRadius: 20, padding: "40px 36px", display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center" }}>
            <div>
              <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill={ind.accent} color={ind.accent} />)}
              </div>
              <p style={{ fontSize: 18, color: "var(--color-text-secondary)", lineHeight: 1.8, fontWeight: 400, fontStyle: "italic", marginBottom: 16 }}>
                "{ind.name} client saw a <strong style={{ color: ind.accent }}>40% increase in operational efficiency</strong> within the first 90 days of deployment. Manual processes were reduced by 70%, and team satisfaction scores rose by 35%."
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: `rgba(${accentRgb},0.15)`, display: "grid", placeItems: "center", fontSize: 22 }}>{ind.icon}</div>
                <div>
                  <div className="sy" style={{ fontSize: 14, fontWeight: 700 }}>CODEX Tech Innovations</div>
                  <div style={{ fontSize: 12, color: "var(--color-text-muted)" }}>Client Success Team</div>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ textAlign: "center", padding: "16px 20px", background: "rgba(255,255,255,0.06)", borderRadius: 12, minWidth: 90 }}>
                <div className="sy" style={{ fontSize: 28, fontWeight: 800, color: ind.accent }}>40%</div>
                <div style={{ fontSize: 11, color: "var(--color-text-muted)", marginTop: 2 }}>Efficiency Gain</div>
              </div>
              <div style={{ textAlign: "center", padding: "16px 20px", background: "rgba(255,255,255,0.06)", borderRadius: 12, minWidth: 90 }}>
                <div className="sy" style={{ fontSize: 28, fontWeight: 800, color: ind.accent }}>70%</div>
                <div style={{ fontSize: 11, color: "var(--color-text-muted)", marginTop: 2 }}>Manual Work Reduced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section style={{ background: "var(--color-surface-elevated)", padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="rv" style={{ marginBottom: 28 }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>Who We Serve</span>
            <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Built For</h2>
          </div>
          <div className="rv" style={{ padding: "28px 32px", background: `linear-gradient(135deg,rgba(${accentRgb},0.08),rgba(${accentRgb},0.02))`, border: `1px solid rgba(${accentRgb},0.15)`, borderRadius: 16, borderLeft: `3px solid ${ind.accent}` }}>
            <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.85, fontWeight: 300 }}>{ind.audience}</p>
          </div>
        </div>
      </section>

      {/* Related Industries */}
      <section style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="rv" style={{ marginBottom: 36 }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>Explore More</span>
            <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Other Industries We Serve</h2>
          </div>
          <div className="rv ig4" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
            {relatedInds.map((x) => (
              <Link key={x.id} to={`/industry/${x.id}`} className="pcard" style={{ display: "block", background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", borderRadius: 18, padding: "28px 20px", textAlign: "center", textDecoration: "none", transition: "all 0.3s ease" }}>
                <div style={{ fontSize: 44, marginBottom: 10, lineHeight: 1 }}>{x.icon}</div>
                <div className="sy" style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 6 }}>{x.name}</div>
                <p style={{ fontSize: 11, color: "var(--color-text-subtle)", lineHeight: 1.5 }}>{x.heroTitle.slice(0, 60)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg,var(--color-accent-700) 0%,var(--color-accent-900) 50%,${ind.color} 100%)`, padding: "100px 5%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -80, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle,rgba(${accentRgb},0.2) 0%,transparent 70%)` }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle,rgba(${accentRgb},0.1) 0%,transparent 70%)` }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 className="sy" style={{ fontSize: "clamp(30px,4vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16, color: "#fff" }}>Ready to Transform Your Operations?</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", fontWeight: 300, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>Let's discuss your {ind.name} project. Free consultation within 24 hours. Fixed-price contracts with a 6-month warranty.</p>
          <a href="/?section=contact" className="bw" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "var(--color-accent-700)", padding: "16px 36px", borderRadius: "var(--radius-md)", fontSize: 16, fontWeight: 700, textDecoration: "none", boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}>
            Get Started <ArrowRight size={17} />
          </a>
        </div>
      </section>

      {/* Sticky CTA */}
      <div
        style={{
          position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100,
          background: "var(--color-surface-elevated)", borderTop: "1px solid var(--color-border)",
          padding: "10px 5%", transform: showSticky ? "translateY(0)" : "translateY(100%)",
          transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: 12, backdropFilter: "blur(16px)",
        }}
      >
        <div className="sticky-info" style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <span style={{ fontSize: 28, flexShrink: 0 }}>{ind.icon}</span>
          <div style={{ minWidth: 0 }}>
            <div className="sy" style={{ fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{ind.name}</div>
            <div className="sticky-tagline" style={{ fontSize: 11, color: "var(--color-text-muted)" }}>Let's build something great</div>
          </div>
        </div>
        <a
          href="/?section=contact"
          className="sticky-cta-btn"
          style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: "linear-gradient(135deg,var(--color-accent-700),var(--color-accent-600))",
            color: "#fff", padding: "10px 18px", borderRadius: "var(--radius-md)",
            fontSize: 13, fontWeight: 600, textDecoration: "none", flexShrink: 0,
            minHeight: 40,
          }}
        >
          Get Started <ArrowRight size={14} />
        </a>
      </div>
    </>
  );
}
