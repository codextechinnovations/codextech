import { Check, ChevronRight, Smartphone, Globe, Cloud } from "lucide-react";
import { SERVICES_GRID } from "../data/services.jsx";

const featured = [
  {
    icon: <Smartphone size={34} strokeWidth={1.5} />,
    badge: "Core Service",
    title: <>Your App Won't Just Exist —<br />It'll Become a <span className="gt">Habit.</span></>,
    desc: "62% of users open their favourite apps multiple times a day. We engineer for that habit loop — from pixel-perfect UI to crash-free performance at scale.",
    features: ["iOS & Android native apps", "React Native & Flutter cross-platform", "UI/UX design to App Store submission", "Push notifications, offline-first & analytics", "ASO & post-launch performance monitoring"],
    cta: { label: "Start your app project", href: "#contact" },
    accent: "#1dcfba",
    gradient: "linear-gradient(145deg, rgba(13,42,61,0.95) 0%, rgba(11,30,47,0.95) 100%)",
    glow: "rgba(29,207,186,0.18)",
  },
  {
    icon: <Globe size={34} strokeWidth={1.5} />,
    badge: "Core Service",
    title: <>A Website That Earns Its Place in<br />Your <span className="gt">Sales Funnel.</span></>,
    desc: "Your website is your best salesperson — it works 24/7, never asks for a raise, and can reach millions simultaneously. We build it to convert, rank, and scale.",
    features: ["SEO-optimised architecture from day one", "Core Web Vitals 95+ Lighthouse score", "SaaS platforms, portals & e-commerce", "Headless CMS & API-first development", "Conversion Rate Optimisation built-in"],
    cta: { label: "Launch your website", href: "#contact" },
    accent: "#42a5f5",
    gradient: "linear-gradient(145deg, rgba(14,32,50,0.95) 0%, rgba(26,46,69,0.95) 100%)",
    glow: "rgba(66,165,245,0.18)",
  },
  {
    icon: <Cloud size={34} strokeWidth={1.5} />,
    badge: "Core Service",
    title: <>SaaS That Scales From Startup to<br /><span className="gt">Enterprise.</span></>,
    desc: "We've built SaaS products across 8+ verticals. Multi-tenant architecture, subscription billing, onboarding flows, and analytics — done right from day one.",
    features: ["Multi-tenant SaaS architecture", "Subscription & usage-based billing", "Role-based access & team workspaces", "API-first with partner integrations", "In-app onboarding & feature adoption"],
    cta: { label: "See our SaaS products", href: "#products" },
    accent: "#a78bfa",
    gradient: "linear-gradient(145deg, rgba(17,32,53,0.95) 0%, rgba(11,42,32,0.95) 100%)",
    glow: "rgba(167,139,250,0.18)",
  },
];

export function Services() {
  return (
    <section id="services" style={{ background: "#0b1929", padding: "110px 5%", position: "relative", overflow: "hidden" }}>
      {/* subtle background glow */}
      <div style={{ position: "absolute", top: "-10%", left: "50%", transform: "translateX(-50%)", width: 900, height: 600, background: "radial-gradient(ellipse at center, rgba(14,127,114,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="rv" style={{ marginBottom: 60 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#1dcfba", boxShadow: "0 0 10px #1dcfba" }} />
            What We Build
          </span>
          <h2 className="sy" style={{ fontSize: "clamp(34px,4.5vw,56px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 18 }}>
            End-to-End Engineering.<br />Zero Compromises.
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: 600, lineHeight: 1.8 }}>
            We don't do "good enough." Every product we ship is engineered for performance, scalability, and the users who will live inside it daily.
          </p>
        </div>

        {/* FEATURED CARDS */}
        <div className="f2 rv" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24, marginBottom: 28 }}>
          {featured.map((card, i) => (
            <article
              key={i}
              className="service-card"
              style={{
                position: "relative",
                borderRadius: 24,
                padding: "2px",
                background: "linear-gradient(145deg, rgba(29,207,186,0.35), rgba(14,127,114,0.15), rgba(29,207,186,0.1))",
                overflow: "hidden",
              }}
            >
              {/* inner card */}
              <div
                style={{
                  height: "100%",
                  background: card.gradient,
                  borderRadius: 22,
                  padding: "40px 34px",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* ambient glow */}
                <div className="card-glow" style={{ position: "absolute", top: -100, right: -100, width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle,${card.glow} 0%,transparent 65%)`, pointerEvents: "none", opacity: 0.6, transition: "opacity 0.4s ease" }} />

                {/* top badge */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 28 }}>
                  <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: card.accent, background: "rgba(255,255,255,0.04)", border: `1px solid ${card.accent}33`, padding: "5px 12px", borderRadius: 100 }}>
                    ⭐ {card.badge}
                  </span>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: card.accent, boxShadow: `0 0 12px ${card.accent}` }} />
                </div>

                {/* icon */}
                <div
                  className="service-icon"
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${card.accent}33`,
                    display: "grid",
                    placeItems: "center",
                    color: card.accent,
                    marginBottom: 26,
                    transition: "transform 0.35s ease, box-shadow 0.35s ease",
                    boxShadow: `0 8px 32px ${card.accent}1a`,
                  }}
                >
                  {card.icon}
                </div>

                {/* text */}
                <h3 className="sy" style={{ fontSize: "clamp(22px,2.2vw,28px)", fontWeight: 800, lineHeight: 1.18, letterSpacing: "-0.02em", marginBottom: 16 }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, fontWeight: 300, marginBottom: 28, flex: 1 }}>
                  {card.desc}
                </p>

                {/* feature list */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                  {card.features.map((f, fi) => (
                    <li key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.75)" }}>
                      <span style={{ width: 18, height: 18, borderRadius: "50%", background: `${card.accent}1a`, border: `1px solid ${card.accent}40`, display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}>
                        <Check size={11} color={card.accent} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href={card.cta.href} className="service-cta" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#fff", fontSize: 14, fontWeight: 600, background: `linear-gradient(135deg, ${card.accent}22, transparent)`, border: `1px solid ${card.accent}40`, padding: "12px 18px", borderRadius: 10, transition: "all 0.25s ease", width: "fit-content" }}>
                  {card.cta.label}
                  <ChevronRight size={16} className="service-cta-arrow" style={{ transition: "transform 0.25s ease" }} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* SECONDARY SERVICES */}
        <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
          {SERVICES_GRID.map((s, i) => (
            <article
              key={i}
              className="secondary-service-card"
              style={{
                position: "relative",
                background: "linear-gradient(145deg, rgba(26,46,69,0.6) 0%, rgba(11,25,41,0.8) 100%)",
                border: "1px solid rgba(14,127,114,0.18)",
                borderRadius: 20,
                padding: "34px 30px",
                overflow: "hidden",
                transition: "all 0.35s ease",
              }}
            >
              <div className="scard-line" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#0e7f72,#1dcfba)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s ease" }} />

              <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                <div className="secondary-icon" style={{ width: 54, height: 54, borderRadius: 14, background: "linear-gradient(135deg, rgba(14,127,114,0.25), rgba(29,207,186,0.1))", border: "1px solid rgba(29,207,186,0.25)", display: "grid", placeItems: "center", color: "#1dcfba", flexShrink: 0, transition: "all 0.35s ease" }}>
                  {s.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="sy" style={{ fontSize: 19, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, marginBottom: 18 }}>{s.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {s.tags.map((t, j) => (
                      <span key={j} className="service-tag" style={{ fontSize: 11, padding: "5px 12px", borderRadius: 100, background: "rgba(14,127,114,0.1)", color: "#1dcfba", border: "1px solid rgba(29,207,186,0.18)", fontWeight: 500, transition: "all 0.2s ease" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
