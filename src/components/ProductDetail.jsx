import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { PRODUCTS, PRODUCT_EXTRA } from "../data/products";
import { hexToRgb } from "../utils/hexToRgb";
import { useReveal } from "../hooks/useReveal";

export function ProductDetail({ productId }) {
  useReveal();
  const p = useMemo(() => PRODUCTS.find((prod) => prod.id === productId) || null, [productId]);
  const e = useMemo(() => (p ? PRODUCT_EXTRA[p.id] : null), [p]);
  const related = useMemo(() => (p ? PRODUCTS.filter((x) => x.id !== p.id && x.category === p.category).slice(0, 3) : []), [p]);

  if (!p) return null;

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "120px 5% 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(${hexToRgb(p.color)},0.25) 0%,transparent 70%)` }} />
        <div className="hgrid" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 32, flexWrap: "wrap" }}>
            <div style={{ fontSize: 80, lineHeight: 1, flexShrink: 0 }}>{p.emoji}</div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: p.accent, background: `rgba(${hexToRgb(p.accent)},0.1)`, border: `1px solid rgba(${hexToRgb(p.accent)},0.25)`, padding: "4px 12px", borderRadius: 100 }}>{p.category}</span>
                <span style={{ fontSize: 11, padding: "4px 10px", background: "rgba(29,207,186,0.1)", color: "#1dcfba", borderRadius: 6, fontWeight: 600 }}>● {p.status}</span>
                <span style={{ fontSize: 11, padding: "4px 10px", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)", borderRadius: 6 }}>{p.badge}</span>
              </div>
              <h1 className="sy" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 12 }}>{p.name}</h1>
              <p style={{ fontSize: 20, color: p.accent, fontWeight: 500, marginBottom: 20 }}>{p.tagline}</p>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.58)", lineHeight: 1.8, fontWeight: 300, maxWidth: 680 }}>{e ? e.longDesc : p.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Strip */}
      <div style={{ background: "#1a2e45", borderTop: "1px solid rgba(14,127,114,0.18)", borderBottom: "1px solid rgba(14,127,114,0.18)", padding: "20px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 32, flexWrap: "wrap" }}>
          <div>
            <span style={{ fontSize: 12, color: "#6b8199" }}>Tech Stack</span>
            <div style={{ display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap" }}>
              {p.tags.map((t, i) => (
                <span key={i} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 5, background: "rgba(14,127,114,0.1)", color: "#1dcfba", border: "1px solid rgba(29,207,186,0.15)" }}>{t}</span>
              ))}
            </div>
          </div>
          <div>
            <span style={{ fontSize: 12, color: "#6b8199" }}>Category</span>
            <p style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>{p.category}</p>
          </div>
          <div>
            <span style={{ fontSize: 12, color: "#6b8199" }}>Status</span>
            <p style={{ fontSize: 14, fontWeight: 600, marginTop: 4, color: "#1dcfba" }}>● {p.status}</p>
          </div>
        </div>
      </div>

      {/* Live Sites */}
      {e && e.liveSites && (
        <section style={{ padding: "80px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 36 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Live Websites</span>
              <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Visit the Platform Live</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", fontWeight: 300, marginTop: 8 }}>Explore the product in action on these live websites.</p>
            </div>
            <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
              {e.liveSites.map((site, i) => (
                <a key={i} href={site.url} target="_blank" rel="noopener noreferrer" className="scard" style={{ display: "flex", alignItems: "flex-start", gap: 16, background: "#1a2e45", border: "1px solid rgba(14,127,114,0.2)", borderRadius: 16, padding: "28px 24px", textDecoration: "none" }}>
                  <div style={{ width: 48, height: 48, background: "rgba(29,207,186,0.12)", borderRadius: 12, display: "grid", placeItems: "center", flexShrink: 0, fontSize: 22 }}>🌐</div>
                  <div style={{ flex: 1 }}>
                    <div className="sy" style={{ fontSize: 17, fontWeight: 700, color: "#1dcfba", marginBottom: 4 }}>{site.label}</div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, marginBottom: 10 }}>{site.desc}</p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 13, color: "#1dcfba", fontWeight: 500 }}>
                      Visit site <ArrowRight size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Benefits */}
      {e && e.benefits && (
        <section style={{ padding: "80px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 44 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Why Choose This Product</span>
              <h2 className="sy" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Key Benefits</h2>
            </div>
            <div className="rv g2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
              {e.benefits.map((b, i) => (
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
      )}

      {/* All Features */}
      <section style={{ background: "#1a2e45", padding: "80px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="rv" style={{ marginBottom: 44 }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Everything Included</span>
            <h2 className="sy" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 12 }}>Complete Feature Set</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>Every tool and capability you need to run your operations efficiently.</p>
          </div>
          <div className="rv g2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }}>
            {p.features.map((f, i) => (
              <div key={i} className="icard" style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", background: "#0b1929", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 12 }}>
                <div style={{ width: 32, height: 32, background: `rgba(${hexToRgb(p.accent)},0.12)`, borderRadius: 8, display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <Check size={16} color={p.accent} />
                </div>
                <span style={{ fontSize: 15, color: "rgba(255,255,255,0.78)" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      {e && e.modules && (
        <section style={{ padding: "80px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 44 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Core Modules</span>
              <h2 className="sy" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>What's Under the Hood</h2>
            </div>
            <div className="rv ig4" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
              {e.modules.map((m, i) => (
                <div key={i} className="tcard" style={{ background: "#1a2e45", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 14, padding: "28px 22px", textAlign: "center" }}>
                  <div style={{ width: 48, height: 48, background: `rgba(${hexToRgb(p.color)},0.15)`, borderRadius: 12, display: "grid", placeItems: "center", margin: "0 auto 16px", fontSize: 22 }}>{p.emoji}</div>
                  <div className="sy" style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>{m}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Integrations */}
      {e && e.integrations && (
        <section style={{ background: "#1a2e45", padding: "80px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 36 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Integrations</span>
              <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Seamlessly Connects With</h2>
            </div>
            <div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {e.integrations.map((int, i) => (
                <span key={i} className="tpill" style={{ padding: "10px 20px", borderRadius: 8, border: "1px solid rgba(14,127,114,0.2)", background: "rgba(14,127,114,0.04)", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.75)", display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#0e7f72", flexShrink: 0 }} />{int}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Audience */}
      {e && e.audience && (
        <section style={{ padding: "80px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 28 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Who It's For</span>
              <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Built For</h2>
            </div>
            <div className="rv" style={{ padding: "24px 28px", background: "rgba(14,127,114,0.07)", border: "1px solid rgba(29,207,186,0.18)", borderRadius: 14, borderLeft: "3px solid #1dcfba" }}>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", lineHeight: 1.8, fontWeight: 300 }}>{e.audience}</p>
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {related.length > 0 && (
        <section style={{ background: "#1a2e45", padding: "80px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 36 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Related</span>
              <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>More in {p.category}</h2>
            </div>
            <div className="rv ig" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
              {related.map((r) => (
                <Link key={r.id} to={`/product/${r.id}`} className="pcard" style={{ display: "block", background: "#0b1929", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 16, padding: "24px 20px" }}>
                  <div style={{ fontSize: 36, marginBottom: 10, lineHeight: 1 }}>{r.emoji}</div>
                  <div className="sy" style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{r.name}</div>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{r.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#0e7f72 0%,#0a5c55 50%,#1a2e45 100%)", padding: "80px 5%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(29,207,186,0.15) 0%,transparent 70%)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 className="sy" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 14 }}>Interested in {p.name}?</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", fontWeight: 300, maxWidth: 520, margin: "0 auto 28px" }}>Let's discuss how we can tailor this solution for your specific business needs. Free consultation within 24 hours.</p>
          <Link to="/?section=contact" className="bw" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#0e7f72", padding: "15px 32px", borderRadius: 9, fontSize: 15, fontWeight: 700, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
