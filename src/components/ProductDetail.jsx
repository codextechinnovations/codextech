import { useMemo, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Star, DoorOpen, CreditCard, FileText, Wrench, BarChart,
  Calendar, Users, Package, ShoppingCart, Shield, Bell, TrendingUp,
  MapPin, Gift, Settings, Globe, ExternalLink
} from "lucide-react";
import { PRODUCTS, PRODUCT_EXTRA } from "../data/products";
import { hexToRgb } from "../utils/hexToRgb";
import { useReveal } from "../hooks/useReveal";

const iconMap = {
  booking: DoorOpen, room: DoorOpen, allocation: DoorOpen, reservation: DoorOpen,
  rent: CreditCard, payment: CreditCard, fee: CreditCard, billing: CreditCard, invoice: CreditCard,
  kyc: FileText, document: FileText, agreement: FileText,
  maintenance: Wrench,
  analytics: BarChart, dashboard: BarChart, report: BarChart, revenue: TrendingUp,
  attendance: Calendar, schedule: Calendar,
  parent: Users, communication: Users, portal: Globe,
  inventory: Package, stock: Package,
  order: ShoppingCart, pos: ShoppingCart, purchase: ShoppingCart,
  compliance: Shield, regulatory: Shield, insurance: Shield, security: Shield,
  reminder: Bell, alert: Bell,
  loyalty: Gift, promo: Gift,
  tracking: MapPin,
  queue: Settings, workflow: Settings,
};

function FeatureIcon({ text, accent }) {
  const t = text.toLowerCase();
  const key = Object.keys(iconMap).find((k) => t.includes(k));
  const Icon = key ? iconMap[key] : Star;
  const color = accent;
  return (
    <div
      style={{
        width: 38, height: 38, borderRadius: 10,
        background: `rgba(${hexToRgb(color)},0.12)`,
        display: "grid", placeItems: "center", flexShrink: 0,
      }}
    >
      <Icon size={17} color={color} />
    </div>
  );
}

export function ProductDetail({ productId }) {
  useReveal();
  const p = useMemo(() => PRODUCTS.find((prod) => prod.id === productId) || null, [productId]);
  const e = useMemo(() => (p ? PRODUCT_EXTRA[p.id] : null), [p]);
  const related = useMemo(() => (p ? PRODUCTS.filter((x) => x.id !== p.id && x.category === p.category).slice(0, 3) : []), [p]);

  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!p) return null;

  const rgb = hexToRgb(p.color);
  const accentRgb = hexToRgb(p.accent);

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "140px 5% 80px", position: "relative", overflow: "hidden", background: "var(--color-bg)" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 70% 60% at 30% 50%, rgba(${rgb},0.2) 0%,transparent 60%), radial-gradient(ellipse 60% 50% at 80% 30%, rgba(${accentRgb},0.08) 0%,transparent 60%)` }} />
        <div className="hgrid" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "start" }}>
            <div>
              <div className="rv" style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 16, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: p.accent, background: `rgba(${accentRgb},0.1)`, border: `1px solid rgba(${accentRgb},0.25)`, padding: "5px 14px", borderRadius: 100 }}>{p.category}</span>
                <span style={{ fontSize: 11, padding: "5px 12px", background: "rgba(14,127,114,0.1)", color: "var(--color-accent)", borderRadius: 6, fontWeight: 600, display: "inline-flex", alignItems: "center", gap: 4 }}><span style={{ width: 6, height: 6, background: "var(--color-accent)", borderRadius: "50%" }} />{p.status}</span>
                <span style={{ fontSize: 11, padding: "5px 12px", background: "var(--color-glass-bg)", color: "var(--color-text-subtle)", borderRadius: 6, border: "1px solid var(--color-border)" }}>{p.badge}</span>
              </div>
              <h1 className="sy rv" style={{ fontSize: "clamp(40px,5.5vw,68px)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.03em", marginBottom: 16 }}>
                <span aria-hidden="true">{p.emoji}</span> {p.name}
              </h1>
              <p className="rv" style={{ fontSize: 21, color: p.accent, fontWeight: 500, marginBottom: 20 }}>{p.tagline}</p>
              <p className="rv" style={{ fontSize: 17, color: "var(--color-text-secondary)", lineHeight: 1.85, fontWeight: 300, maxWidth: 680 }}>{e ? e.longDesc : p.desc}</p>
              <div className="rv" style={{ display: "flex", gap: 12, marginTop: 32 }}>
                <a href="#contact" className="btn btn-primary btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,var(--color-accent-700),var(--color-accent-600))", color: "#fff", padding: "14px 28px", borderRadius: "var(--radius-md)", fontSize: 15, fontWeight: 600, textDecoration: "none" }}>
                  Book a Demo <ArrowRight size={16} />
                </a>
                <a href="#features" className="btn btn-secondary btn-lg" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: "var(--color-text)", padding: "14px 28px", borderRadius: "var(--radius-md)", fontSize: 15, fontWeight: 600, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>
                  Explore Features
                </a>
              </div>
            </div>
            <div className="rv hv" style={{ fontSize: 120, lineHeight: 1, opacity: 0.9, textAlign: "center", alignSelf: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
              <div aria-hidden="true" style={{ fontSize: 100 }}>{p.emoji}</div>
              <div style={{ width: 120, height: 3, background: `linear-gradient(90deg,${p.color},${p.accent})`, borderRadius: 2 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Strip */}
      <div className="rv" style={{ background: "var(--color-surface-elevated)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)", padding: "28px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 12, color: "var(--color-text-muted)", marginBottom: 8, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>Tech Stack</div>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
              {p.tags.map((t, i) => (
                <span key={i} style={{ fontSize: 12, padding: "5px 14px", borderRadius: 100, background: `linear-gradient(135deg,rgba(${accentRgb},0.12),rgba(${accentRgb},0.06))`, color: p.accent, border: `1px solid rgba(${accentRgb},0.2)`, fontWeight: 500, letterSpacing: "0.02em" }}>{t}</span>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 12, color: "var(--color-text-muted)", marginBottom: 2 }}>Category</div>
              <div style={{ fontSize: 14, fontWeight: 700 }}>{p.category}</div>
            </div>
            <div style={{ width: 1, background: "var(--color-divider)" }} />
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 12, color: "var(--color-text-muted)", marginBottom: 2 }}>Status</div>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-accent)" }}>● {p.status}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <section id="features" style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="rv" style={{ marginBottom: 48 }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>Everything Included</span>
            <h2 className="sy" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 12 }}>Core Capabilities</h2>
            <p style={{ fontSize: 16, color: "var(--color-text-muted)", fontWeight: 300, maxWidth: 520 }}>Every tool and feature you need, built into one unified platform.</p>
          </div>
          <div className="rv g2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }}>
            {p.features.map((f, i) => (
              <div key={i} className="icard" style={{ display: "flex", alignItems: "center", gap: 16, padding: "20px 22px", background: `linear-gradient(135deg,var(--color-surface-elevated),var(--color-bg))`, border: "1px solid var(--color-border)", borderRadius: 14, transition: "all 0.3s ease" }}>
                <FeatureIcon text={f} accent={p.accent} />
                <span style={{ fontSize: 15, color: "var(--color-text-secondary)", fontWeight: 500, lineHeight: 1.4 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Sites */}
      {e && e.liveSites && (
        <section style={{ background: "var(--color-surface-elevated)", padding: "100px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 36 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>Live Websites</span>
              <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>See It In Action</h2>
              <p style={{ fontSize: 15, color: "var(--color-text-muted)", fontWeight: 300, marginTop: 8 }}>These live sites are powered by {p.name} — explore them directly.</p>
            </div>
            <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
              {e.liveSites.map((site, i) => (
                <a key={i} href={site.url} target="_blank" rel="noopener noreferrer" className="scard" style={{ display: "flex", alignItems: "flex-start", gap: 18, background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "30px 26px", textDecoration: "none", transition: "all 0.3s ease" }}>
                  <div style={{ width: 50, height: 50, background: `linear-gradient(135deg,rgba(${accentRgb},0.15),rgba(${accentRgb},0.05))`, borderRadius: 13, display: "grid", placeItems: "center", flexShrink: 0, color: p.accent }}>
                    <Globe size={24} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="sy" style={{ fontSize: 18, fontWeight: 700, color: "var(--color-accent)", marginBottom: 6 }}>{site.label}</div>
                    <p style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.6, marginBottom: 10 }}>{site.desc}</p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--color-accent)", fontWeight: 600 }}>
                      Visit site <ExternalLink size={13} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Benefits */}
      {e && e.benefits && (
        <section style={{ padding: "100px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 48 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>Why Choose This</span>
              <h2 className="sy" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Key Benefits</h2>
            </div>
            <div className="rv g2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
              {e.benefits.map((b, i) => (
                <div key={i} className="scard" style={{ background: `linear-gradient(135deg,var(--color-surface-elevated),var(--color-bg))`, border: "1px solid var(--color-border)", borderRadius: 18, padding: "32px 28px", display: "flex", gap: 18 }}>
                  <div aria-hidden="true" style={{ fontSize: 40, flexShrink: 0, lineHeight: 1 }}>{b.icon}</div>
                  <div>
                    <h3 className="sy" style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{b.title}</h3>
                    <p style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.75 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Modules */}
      {e && e.modules && (
        <section style={{ background: "var(--color-surface-elevated)", padding: "100px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 48 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>Core Modules</span>
              <h2 className="sy" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>What's Under the Hood</h2>
              <p style={{ fontSize: 15, color: "var(--color-text-muted)", fontWeight: 300, marginTop: 8 }}>Built as modular, independently deployable subsystems.</p>
            </div>
            <div className="rv ig4" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
              {e.modules.map((m, i) => (
                <div key={i} className="tcard" style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "30px 24px", textAlign: "center", transition: "all 0.3s ease" }}>
                  <div aria-hidden="true" style={{ width: 52, height: 52, background: `linear-gradient(135deg,rgba(${accentRgb},0.18),rgba(${accentRgb},0.06))`, borderRadius: 14, display: "grid", placeItems: "center", margin: "0 auto 18px", fontSize: 24 }}>{p.emoji}</div>
                  <div className="sy" style={{ fontSize: 16, fontWeight: 700, lineHeight: 1.3, color: "var(--color-text)" }}>{m}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Integrations */}
      {e && e.integrations && (
        <section style={{ padding: "100px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 36 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>Integrations</span>
              <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Seamlessly Connects With</h2>
              <p style={{ fontSize: 15, color: "var(--color-text-muted)", fontWeight: 300, marginTop: 8 }}>Drop-in integrations with the tools you already use.</p>
            </div>
            <div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {e.integrations.map((int, i) => (
                <span key={i} className="tpill" style={{ padding: "12px 22px", borderRadius: 100, border: `1px solid rgba(${accentRgb},0.2)`, background: `rgba(${accentRgb},0.06)`, fontSize: 14, fontWeight: 500, color: p.accent, display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: p.accent, flexShrink: 0 }} />{int}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Audience */}
      {e && e.audience && (
        <section style={{ background: "var(--color-surface-elevated)", padding: "100px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 28 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>Who It's For</span>
              <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Built For</h2>
            </div>
            <div className="rv" style={{ padding: "28px 32px", background: `linear-gradient(135deg,rgba(${accentRgb},0.08),rgba(${accentRgb},0.02))`, border: `1px solid rgba(${accentRgb},0.15)`, borderRadius: 16, borderLeft: `3px solid ${p.accent}` }}>
              <p style={{ fontSize: 16, color: "var(--color-text-secondary)", lineHeight: 1.85, fontWeight: 300 }}>{e.audience}</p>
            </div>
          </div>
        </section>
      )}

      {/* Use Cases - inline from benefits or generic */}
      <section style={{ padding: "100px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="rv" style={{ marginBottom: 36 }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>Use Cases</span>
            <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Common Applications</h2>
            <p style={{ fontSize: 15, color: "var(--color-text-muted)", fontWeight: 300, marginTop: 8 }}>Real-world scenarios where {p.name} delivers maximum impact.</p>
          </div>
          <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
            <div className="scard" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "30px 24px", textAlign: "center" }}>
              <div style={{ width: 48, height: 48, background: `linear-gradient(135deg,rgba(${accentRgb},0.15),rgba(${accentRgb},0.05))`, borderRadius: 12, display: "grid", placeItems: "center", margin: "0 auto 16px", color: p.accent }}><TrendingUp size={22} /></div>
              <h3 className="sy" style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Operations Scale-Up</h3>
              <p style={{ fontSize: 13, color: "var(--color-text-muted)", lineHeight: 1.7 }}>Replace manual processes with automated workflows to handle 3× the volume without adding headcount.</p>
            </div>
            <div className="scard" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "30px 24px", textAlign: "center" }}>
              <div style={{ width: 48, height: 48, background: `linear-gradient(135deg,rgba(${accentRgb},0.15),rgba(${accentRgb},0.05))`, borderRadius: 12, display: "grid", placeItems: "center", margin: "0 auto 16px", color: p.accent }}><Users size={22} /></div>
              <h3 className="sy" style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Multi-Branch Rollout</h3>
              <p style={{ fontSize: 13, color: "var(--color-text-muted)", lineHeight: 1.7 }}>Deploy across multiple locations with centralized control and location-specific configurations.</p>
            </div>
            <div className="scard" style={{ background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", borderRadius: 16, padding: "30px 24px", textAlign: "center" }}>
              <div style={{ width: 48, height: 48, background: `linear-gradient(135deg,rgba(${accentRgb},0.15),rgba(${accentRgb},0.05))`, borderRadius: 12, display: "grid", placeItems: "center", margin: "0 auto 16px", color: p.accent }}><BarChart size={22} /></div>
              <h3 className="sy" style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Data-Driven Decisions</h3>
              <p style={{ fontSize: 13, color: "var(--color-text-muted)", lineHeight: 1.7 }}>Actionable dashboards and reports help leadership make informed strategic decisions in real time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section style={{ background: "var(--color-surface-elevated)", padding: "100px 5%", overflow: "hidden" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 36 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 14 }}>Related</span>
              <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>More in {p.category}</h2>
            </div>
            <div className="rv" style={{ display: "flex", gap: 18, overflowX: "auto", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch", paddingBottom: 8 }}>
              {related.map((r) => (
                <Link key={r.id} to={`/product/${r.id}`} className="pcard" style={{ flex: "0 0 280px", scrollSnapAlign: "start", display: "block", background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: 18, padding: "28px 24px", textDecoration: "none", transition: "all 0.3s ease" }}>
                  <div aria-hidden="true" style={{ fontSize: 44, marginBottom: 14, lineHeight: 1 }}>{r.emoji}</div>
                  <div className="sy" style={{ fontSize: 17, fontWeight: 700, color: "var(--color-text)", marginBottom: 6 }}>{r.name}</div>
                  <p style={{ fontSize: 12, color: "var(--color-text-subtle)", lineHeight: 1.6, marginBottom: 12 }}>{r.tagline}</p>
                  <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                    {r.tags.slice(0, 3).map((t, j) => (
                      <span key={j} style={{ fontSize: 10, padding: "3px 8px", borderRadius: 4, background: "var(--color-glass-bg)", color: "var(--color-accent)", border: "1px solid var(--color-border)" }}>{t}</span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: `linear-gradient(135deg,var(--color-accent-700) 0%,var(--color-accent-900) 50%,${p.color} 100%)`, padding: "100px 5%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -80, width: 400, height: 400, borderRadius: "50%", background: `radial-gradient(circle,rgba(${accentRgb},0.2) 0%,transparent 70%)` }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle,rgba(${accentRgb},0.1) 0%,transparent 70%)` }} />
        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 className="sy" style={{ fontSize: "clamp(30px,4vw,48px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 16, color: "#fff" }}>Ready to Ship?</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", fontWeight: 300, maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.7 }}>{p.name} is production-ready and customizable to your exact requirements. Free consultation within 24 hours. Fixed pricing. 6-month warranty.</p>
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
          <span aria-hidden="true" style={{ fontSize: 28, flexShrink: 0 }}>{p.emoji}</span>
          <div style={{ minWidth: 0 }}>
            <div className="sy" style={{ fontSize: 14, fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</div>
            <div className="sticky-tagline" style={{ fontSize: 11, color: "var(--color-text-muted)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.tagline}</div>
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
          Book a Demo <ArrowRight size={14} />
        </a>
      </div>
    </>
  );
}
