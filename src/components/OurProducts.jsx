import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronRight, Layers } from "lucide-react";
import { PRODUCTS } from "../data/products";
import { hexToRgb } from "../utils/hexToRgb";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";
import { Badge } from "./ui/Badge";

const categories = ["All", "Property Tech", "Education Tech", "Hospitality Tech", "FinTech", "Retail Tech", "Food Tech", "Fashion Tech", "Health Tech"];

export function OurProducts() {
  const [active, setActive] = useState("All");
  const [animKey, setAnimKey] = useState(0);

  const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  const handleCat = (cat) => {
    if (cat === active) return;
    setActive(cat);
    setAnimKey((k) => k + 1);
  };

  return (
    <section id="products" style={{ background: "var(--color-bg)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "40%", right: "-10%", width: 700, height: 700, background: "radial-gradient(circle, rgba(14,127,114,0.08) 0%, transparent 65%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(29,207,186,0.05) 0%, transparent 65%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-padding-y) var(--section-padding-x)", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "var(--space-lg)", marginBottom: "var(--space-xl)" }}>
          <SectionHeader
            eyebrow="Our Products & Solutions"
            title={<>Innovative SaaS Products<br />We've Built & Shipped</>}
            description="8 industry-specific platforms live in production. Each one solving real problems for real businesses across India. Not concepts — shipped products."
            style={{ marginBottom: 0, flex: 1 }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "var(--space-md) var(--space-lg)", background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)" }}>
            <div style={{ width: 46, height: 46, borderRadius: "var(--radius-md)", background: "linear-gradient(135deg, var(--color-accent-700), var(--color-accent))", display: "grid", placeItems: "center" }}>
              <Layers size={22} color="#fff" />
            </div>
            <div>
              <div className="sy" style={{ fontSize: 24, fontWeight: 800, color: "var(--color-accent)", lineHeight: 1 }}>8</div>
              <div style={{ fontSize: 12, color: "var(--color-text-muted)", marginTop: 2 }}>Products Live in Production</div>
            </div>
          </div>
        </div>

        {/* Category filter */}
          <div className="rv" style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: "var(--space-xl)", padding: "var(--space-sm)", background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", width: "fit-content" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              className="product-cat-btn"
              onClick={() => handleCat(cat)}
              aria-pressed={active === cat}
              style={{
                padding: "8px 18px",
                borderRadius: "var(--radius-md)",
                border: "1px solid transparent",
                background: active === cat ? "linear-gradient(135deg, rgba(14,127,114,0.35), rgba(29,207,186,0.2))" : "transparent",
                color: active === cat ? "#fff" : "var(--color-text-muted)",
                fontSize: 13,
                fontWeight: active === cat ? 600 : 400,
                fontFamily: "inherit",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: active === cat ? "0 4px 16px rgba(14,127,114,0.25)" : "none",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid — horizontal cards, one per row */}
        <div key={animKey} className="rv product-grid-horizontal" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "var(--space-lg)", maxWidth: 900, margin: "0 auto" }}>
          {filtered.map((p, i) => (
            <Link
              key={p.id}
              to={`/product/${p.id}`}
              className="product-card pen"
              style={{
                animationDelay: `${i * 0.06}s`,
                display: "grid",
                gridTemplateColumns: "160px 1fr",
                gap: 0,
                background: "var(--color-surface-elevated)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-xl)",
                overflow: "hidden",
                position: "relative",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div style={{ height: "100%", background: `linear-gradient(180deg, ${p.color}18, ${p.accent}10)`, borderRight: `1px solid ${p.accent}30`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "var(--space-lg)", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 5, background: `linear-gradient(90deg,${p.color},${p.accent})` }} />
                <div className="product-icon" style={{ width: 72, height: 72, borderRadius: "var(--radius-lg)", background: `linear-gradient(135deg, ${p.color}44, ${p.accent}22)`, border: `1px solid ${p.accent}50`, display: "grid", placeItems: "center", fontSize: 38, transition: "all 0.35s ease", marginBottom: 12 }}>
                  {p.emoji}
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: p.accent, background: `rgba(${hexToRgb(p.accent)},0.1)`, border: `1px solid rgba(${hexToRgb(p.accent)},0.25)`, padding: "4px 10px", borderRadius: "var(--radius-full)" }}>
                  {p.category}
                </span>
              </div>

              <div style={{ padding: "var(--space-lg)", display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                  <div>
                    <h3 className="sy" style={{ fontSize: 20, fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: 4 }}>{p.name}</h3>
                    <p style={{ fontSize: 13, color: p.accent, fontWeight: 600 }}>{p.tagline}</p>
                  </div>
                  <Badge color="success" style={{ display: "flex", alignItems: "center", gap: 4, flexShrink: 0 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--color-success)" }} /> Live
                  </Badge>
                </div>

                <p style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.65, marginBottom: "var(--space-md)", fontWeight: 300 }}>{p.desc}</p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: "var(--space-md)", marginTop: "auto" }}>
                  {p.tags.slice(0, 4).map((t, ti) => (
                    <span key={ti} style={{ fontSize: 10, padding: "4px 10px", borderRadius: 6, background: `rgba(${hexToRgb(p.accent)},0.08)`, color: p.accent, border: `1px solid rgba(${hexToRgb(p.accent)},0.2)`, fontWeight: 500 }}>{t}</span>
                  ))}
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 14, borderTop: "1px solid var(--color-divider)" }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: "var(--color-text-subtle)" }}>{p.badge}</span>
                  <span className="product-cta" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 13, color: p.accent, fontWeight: 600 }}>
                    Learn more <ChevronRight size={14} className="product-cta-arrow" style={{ transition: "transform 0.25s ease" }} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
          <div className="rv" style={{ marginTop: 56, padding: "var(--space-xl)", background: "var(--color-surface-highlight)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-lg)", boxShadow: "var(--shadow-sm)" }}>
          <div>
            <div className="sy" style={{ fontSize: 23, fontWeight: 800, marginBottom: 8 }}>Want a SaaS product built for your industry?</div>
            <p style={{ fontSize: 15, color: "var(--color-text-muted)", fontWeight: 300 }}>We have deep domain knowledge across 8 verticals. Your next product could be on this list.</p>
          </div>
          <Button href="#contact">
            Discuss Your SaaS Idea <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
