import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronRight, Layers } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { hexToRgb } from "../utils/hexToRgb";

const categories = ["All", "Property Tech", "Education Tech", "Hospitality Tech", "FinTech", "Retail Tech", "Food Tech", "Fashion Tech", "Health Tech"];

export function OurProducts() {
  const [active, setActive] = useState("All");
  const [animKey, setAnimKey] = useState(0);
  const [hovered, setHovered] = useState(null);

  const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  const handleCat = (cat) => {
    if (cat === active) return;
    setActive(cat);
    setAnimKey((k) => k + 1);
  };

  return (
    <section id="products" style={{ background: "#0b1929", padding: "110px 5%", position: "relative", overflow: "hidden" }}>
      {/* background glow */}
      <div style={{ position: "absolute", top: "40%", right: "-10%", width: 700, height: 700, background: "radial-gradient(circle, rgba(14,127,114,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(29,207,186,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <div className="rv" style={{ marginBottom: 52 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1dcfba", boxShadow: "0 0 10px #1dcfba" }} />
            Our Products & Solutions
          </span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24 }}>
            <div>
              <h2 className="sy" style={{ fontSize: "clamp(34px,4.5vw,56px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 16 }}>
                Innovative SaaS Products<br />We've Built & Shipped
              </h2>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: 560, lineHeight: 1.8 }}>
                8 industry-specific platforms live in production. Each one solving real problems for real businesses across India. Not concepts — shipped products.
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 24px", background: "linear-gradient(145deg, rgba(14,127,114,0.12), rgba(29,207,186,0.06))", border: "1px solid rgba(14,127,114,0.2)", borderRadius: 16, boxShadow: "0 8px 32px rgba(14,127,114,0.1)" }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: "linear-gradient(135deg, #0e7f72, #1dcfba)", display: "grid", placeItems: "center" }}>
                <Layers size={22} color="#fff" />
              </div>
              <div>
                <div className="sy" style={{ fontSize: 24, fontWeight: 800, color: "#1dcfba", lineHeight: 1 }}>8</div>
                <div style={{ fontSize: 12, color: "#6b8199", marginTop: 2 }}>Products Live in Production</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div className="rv" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40, padding: "10px", background: "rgba(14,127,114,0.06)", border: "1px solid rgba(14,127,114,0.12)", borderRadius: 16, width: "fit-content" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className="product-cat-btn"
              onClick={() => handleCat(cat)}
              style={{
                padding: "8px 18px",
                borderRadius: 10,
                border: "1px solid transparent",
                background: active === cat ? "linear-gradient(135deg, rgba(14,127,114,0.35), rgba(29,207,186,0.2))" : "transparent",
                color: active === cat ? "#fff" : "rgba(255,255,255,0.55)",
                fontSize: 13,
                fontWeight: active === cat ? 600 : 400,
                fontFamily: "inherit",
                outline: "none",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: active === cat ? "0 4px 16px rgba(14,127,114,0.25)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div key={animKey} style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="rv ig4">
          {filtered.map((p, i) => {
            const isHovered = hovered === p.id;
            return (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                className="product-card pen"
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  animationDelay: `${i * 0.06}s`,
                  display: "block",
                  background: isHovered ? `rgba(${hexToRgb(p.color)},0.1)` : "linear-gradient(145deg, rgba(26,46,69,0.7) 0%, rgba(11,25,41,0.9) 100%)",
                  border: `1px solid ${isHovered ? p.accent + "66" : "rgba(14,127,114,0.15)"}`,
                  borderRadius: 22,
                  overflow: "hidden",
                  position: "relative",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {/* Top gradient bar */}
                <div style={{ height: 5, background: `linear-gradient(90deg,${p.color},${p.accent})`, opacity: isHovered ? 1 : 0.85, transition: "opacity 0.3s ease" }} />

                {/* Ambient glow */}
                <div style={{ position: "absolute", top: -60, right: -60, width: 180, height: 180, borderRadius: "50%", background: `radial-gradient(circle, rgba(${hexToRgb(p.accent)},0.12) 0%, transparent 65%)`, pointerEvents: "none", opacity: isHovered ? 1 : 0.6, transition: "opacity 0.3s ease" }} />

                <div style={{ padding: "26px 24px 28px", position: "relative", zIndex: 1 }}>
                  {/* Header row */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: p.accent, background: `rgba(${hexToRgb(p.accent)},0.1)`, border: `1px solid rgba(${hexToRgb(p.accent)},0.25)`, padding: "4px 10px", borderRadius: 100 }}>
                      {p.category}
                    </span>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 11, padding: "4px 10px", background: "rgba(29,207,186,0.1)", color: "#1dcfba", borderRadius: 6, fontWeight: 600, border: "1px solid rgba(29,207,186,0.15)" }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1dcfba" }} /> Live
                    </span>
                  </div>

                  {/* Icon */}
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 18 }}>
                    <div style={{ width: 54, height: 54, borderRadius: 16, background: `linear-gradient(135deg, ${p.color}33, ${p.accent}22)`, border: `1px solid ${p.accent}40`, display: "grid", placeItems: "center", fontSize: 28, transition: "all 0.35s ease", transform: isHovered ? "scale(1.08)" : "scale(1)" }}>
                      {p.emoji}
                    </div>
                    <div>
                      <h3 className="sy" style={{ fontSize: 18, fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 4 }}>{p.name}</h3>
                      <p style={{ fontSize: 12, color: p.accent, fontWeight: 600 }}>{p.tagline}</p>
                    </div>
                  </div>

                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 20, fontWeight: 300 }}>{p.desc}</p>

                  {/* Features */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 9, marginBottom: 20 }}>
                    {p.features.slice(0, 3).map((f, fi) => (
                      <div key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 9, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                        <span style={{ width: 18, height: 18, borderRadius: "50%", background: `rgba(${hexToRgb(p.accent)},0.12)`, border: `1px solid rgba(${hexToRgb(p.accent)},0.3)`, display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}>
                          <Check size={10} color={p.accent} strokeWidth={3} />
                        </span>
                        {f}
                      </div>
                    ))}
                    {p.features.length > 3 && (
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)", paddingLeft: 27 }}>+{p.features.length - 3} more features</div>
                    )}
                  </div>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 22 }}>
                    {p.tags.slice(0, 3).map((t, ti) => (
                      <span key={ti} style={{ fontSize: 10, padding: "4px 10px", borderRadius: 6, background: `rgba(${hexToRgb(p.accent)},0.08)`, color: p.accent, border: `1px solid rgba(${hexToRgb(p.accent)},0.2)`, fontWeight: 500 }}>{t}</span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 18, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.45)" }}>{p.badge}</span>
                    <span className="product-cta" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 13, color: p.accent, fontWeight: 600 }}>
                      Learn more <ChevronRight size={14} className="product-cta-arrow" style={{ transition: "transform 0.25s ease" }} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="rv" style={{ marginTop: 56, padding: "38px 44px", background: "linear-gradient(135deg,rgba(14,127,114,0.14),rgba(29,207,186,0.06))", border: "1px solid rgba(29,207,186,0.22)", borderRadius: 22, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24, boxShadow: "0 12px 40px rgba(14,127,114,0.12)" }}>
          <div>
            <div className="sy" style={{ fontSize: 23, fontWeight: 800, marginBottom: 8 }}>Want a SaaS product built for your industry?</div>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>We have deep domain knowledge across 8 verticals. Your next product could be on this list.</p>
          </div>
          <a href="#contact" className="bp" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#0e7f72,#12a896)", color: "#fff", padding: "15px 30px", borderRadius: 10, fontSize: 14, fontWeight: 600, boxShadow: "0 4px 20px rgba(14,127,114,0.35)", whiteSpace: "nowrap" }}>
            Discuss Your SaaS Idea <ChevronRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
