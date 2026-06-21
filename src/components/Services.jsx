import { Check, Smartphone, Globe, Cloud } from "lucide-react";
import { SERVICES_GRID } from "../data/services.jsx";
import { SectionHeader } from "./ui/SectionHeader";
import { Button } from "./ui/Button";

const featured = [
  {
    icon: <Smartphone size={32} strokeWidth={1.5} />,
    badge: "Core Service",
    title: "Mobile Apps That Become Daily Habits",
    desc: "62% of users open their favourite apps multiple times a day. We engineer for that habit loop — from pixel-perfect UI to crash-free performance at scale.",
    features: ["iOS & Android native apps", "React Native & Flutter", "UI/UX to App Store submission", "Push, offline-first & analytics", "ASO & post-launch monitoring"],
    accent: "#1dcfba",
  },
  {
    icon: <Globe size={32} strokeWidth={1.5} />,
    badge: "Core Service",
    title: "Websites That Earn Their Place in Your Funnel",
    desc: "Your website is your best salesperson — it works 24/7 and can reach millions simultaneously. We build it to convert, rank, and scale.",
    features: ["SEO-optimised from day one", "Core Web Vitals 95+", "SaaS, portals & e-commerce", "Headless CMS & API-first", "Conversion optimisation built-in"],
    accent: "#42a5f5",
  },
  {
    icon: <Cloud size={32} strokeWidth={1.5} />,
    badge: "Core Service",
    title: "SaaS That Scales From Startup to Enterprise",
    desc: "We've built SaaS products across 8+ verticals. Multi-tenant architecture, subscription billing, onboarding flows, and analytics — done right.",
    features: ["Multi-tenant SaaS architecture", "Subscription & usage billing", "Role-based access & workspaces", "API-first with integrations", "In-app onboarding & adoption"],
    accent: "#a78bfa",
  },
];

export function Services() {
  return (
    <section id="services" style={{ background: "var(--color-bg)", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto", padding: "var(--section-padding-y) var(--section-padding-x)" }}>
        <SectionHeader
          eyebrow="What We Build"
          title={<>End-to-End Engineering.<br />Zero Compromises.</>}
          description="We don't do 'good enough.' Every product we ship is engineered for performance, scalability, and the users who will live inside it daily."
        />

        {/* Featured bento cards */}
        <div className="f2 rv" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-lg)", marginBottom: "var(--space-lg)" }}>
          {featured.map((card, i) => (
            <article
              key={i}
              className="service-card"
              style={{
                position: "relative",
                borderRadius: "var(--radius-xl)",
                padding: "2px",
                  background: `linear-gradient(145deg, ${card.accent}33, var(--color-border), ${card.accent}1a)`,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  background: "var(--color-surface-elevated)",
                  borderRadius: 22,
                  padding: "var(--space-xl)",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-lg)" }}>
                  <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: card.accent,                     background: "var(--color-glass-bg)", border: `1px solid ${card.accent}33`, padding: "5px 12px", borderRadius: "var(--radius-full)" }}>
                    ⭐ {card.badge}
                  </span>
                </div>

                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: "var(--radius-md)",
                    background: "var(--color-glass-bg)",
                    border: `1px solid ${card.accent}33`,
                    display: "grid",
                    placeItems: "center",
                    color: card.accent,
                    marginBottom: "var(--space-lg)",
                  }}
                >
                  {card.icon}
                </div>

                <h3 className="sy" style={{ fontSize: "clamp(20px, 2vw, 26px)", fontWeight: 800, lineHeight: 1.18, letterSpacing: "-0.02em", marginBottom: "var(--space-md)" }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: 15, color: "var(--color-text-muted)", lineHeight: 1.75, fontWeight: 300, marginBottom: "var(--space-lg)", flex: 1 }}>
                  {card.desc}
                </p>

                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: "var(--space-xl)" }}>
                  {card.features.map((f, fi) => (
                    <li key={fi} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "var(--color-text-secondary)" }}>
                      <span style={{ width: 18, height: 18, borderRadius: "50%", background: `${card.accent}1a`, border: `1px solid ${card.accent}40`, display: "grid", placeItems: "center", flexShrink: 0, marginTop: 1 }}>
                        <Check size={11} color={card.accent} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Button href="#contact" variant="ghost" size="sm" style={{ width: "fit-content", color: card.accent }}>
                  Discuss your project →
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Secondary services */}
        <div className="rv sg" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "var(--space-lg)" }}>
          {SERVICES_GRID.map((s, i) => (
            <article
              key={i}
              className="secondary-service-card"
              style={{
                position: "relative",
                background: "var(--color-surface-elevated)",
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                padding: "var(--space-xl)",
                overflow: "hidden",
              }}
            >
              <div className="scard-line" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--color-accent-700), var(--color-accent))", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s ease" }} />
              <div style={{ display: "flex", alignItems: "flex-start", gap: 20 }}>
                <div className="secondary-icon" style={{ width: 54, height: 54, borderRadius: "var(--radius-md)", background: "linear-gradient(135deg, var(--color-border-strong), var(--color-border))", border: "1px solid var(--color-border)", display: "grid", placeItems: "center", color: "var(--color-accent)", flexShrink: 0 }}>
                  {s.icon}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="sy" style={{ fontSize: 18, fontWeight: 700, marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.7, marginBottom: 18 }}>{s.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {s.tags.map((t, j) => (
                      <span key={j} className="service-tag" style={{ fontSize: 11, padding: "5px 12px", borderRadius: "var(--radius-full)", background: "var(--color-glass-bg)", color: "var(--color-accent)", border: "1px solid var(--color-border)", fontWeight: 500 }}>
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
