import { ArrowRight, Star, Globe, Zap, Shield, Smartphone, Code2, Cloud } from "lucide-react";
import { MeshGradient } from "./MeshGradient";
import { BentoCard } from "./BentoCard";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        padding: "120px 5% 80px",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, var(--color-bg) 0%, var(--color-surface-elevated) 100%)",
      }}
    >
      <MeshGradient />
      <div className="hgrid" style={{ position: "absolute", inset: 0 }} />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "var(--space-3xl)",
          alignItems: "center",
        }}
        className="g2"
      >
        {/* Left content */}
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(14, 127, 114, 0.15)",
              border: "1px solid rgba(29, 207, 186, 0.3)",
              padding: "6px 16px",
              borderRadius: "var(--radius-full)",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--color-accent)",
              letterSpacing: "0.09em",
              textTransform: "uppercase",
              marginBottom: 28,
              animation: "fadeUp 0.8s ease both",
            }}
          >
            <span style={{ width: 7, height: 7, background: "var(--color-accent)", borderRadius: "50%", animation: "blink 1.8s infinite" }} />
            Bengaluru-Based · Delivering Globally
          </div>

          <h1
            className="sy"
            style={{
              fontSize: "clamp(44px, 6vw, 78px)",
              fontWeight: 800,
              lineHeight: 1.04,
              letterSpacing: "-0.03em",
              marginBottom: 24,
              animation: "fadeUp 0.8s ease 0.1s both",
            }}
          >
            India's Premium<br />Software Studio for<br /><span className="gt">Global Products.</span>
          </h1>

          <p
            style={{
              fontSize: 18,
              color: "var(--color-text-secondary)",
              lineHeight: 1.75,
              maxWidth: 540,
              marginBottom: 16,
              fontWeight: 300,
              animation: "fadeUp 0.8s ease 0.2s both",
            }}
          >
            150+ apps and platforms shipped from Bengaluru to the US, UK, UAE, Singapore, Australia, Canada, and Europe. Senior engineers, fixed-price contracts, and a 6-month warranty.
          </p>
          <p
            style={{
              fontSize: 14,
              color: "var(--color-text-subtle)",
              marginBottom: 38,
              animation: "fadeUp 0.8s ease 0.25s both",
            }}
          >
            Mobile App Development · Web Development · SaaS · AI · Cloud
          </p>

          <div className="ha" style={{ display: "flex", gap: 14, flexWrap: "wrap", animation: "fadeUp 0.8s ease 0.3s both" }}>
            <Button href="#contact" size="lg">
              Get a Free Estimate <ArrowRight size={16} />
            </Button>
            <Button href="#workflow" variant="secondary" size="lg">
              See How We Work
            </Button>
          </div>

          {/* Social proof */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              marginTop: 40,
              flexWrap: "wrap",
              animation: "fadeUp 0.8s ease 0.4s both",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--color-accent)" color="var(--color-accent)" />)}
              <span style={{ fontSize: 13, color: "var(--color-text-muted)", marginLeft: 4 }}>4.9/5 · 80+ Reviews</span>
            </div>
            <div style={{ width: 1, height: 18, background: "var(--color-border)" }} />
            <span style={{ fontSize: 13, color: "var(--color-text-muted)" }}>Trusted by startups & Fortune 500 teams</span>
          </div>
        </div>

        {/* Right bento visual */}
        <div className="hv" style={{ position: "relative", height: 520, animation: "fadeUp 0.8s ease 0.3s both" }}>
          <BentoCard
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 220,
              padding: "var(--space-lg)",
              animation: "float 7s ease-in-out infinite",
            }}
          >
            <div style={{ width: 44, height: 44, background: "linear-gradient(135deg, var(--color-accent-700), var(--color-accent))", borderRadius: "var(--radius-md)", display: "grid", placeItems: "center", marginBottom: 14 }}>
              <Smartphone size={22} color="#fff" />
            </div>
            <div style={{ fontSize: 11, color: "var(--color-accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Mobile App</div>
            <div className="sy" style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>iOS & Android</div>
            <div style={{ fontSize: 12, color: "var(--color-text-muted)" }}>React Native · Flutter · Swift</div>
          </BentoCard>

          <BentoCard
            style={{
              position: "absolute",
              top: 40,
              right: 0,
              width: 240,
              padding: "var(--space-lg)",
              animation: "float2 9s ease-in-out infinite",
            }}
          >
            <div style={{ display: "flex", gap: 5, marginBottom: 14 }}>
              {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
              <Globe size={12} color="var(--color-accent)" />
              <span style={{ fontSize: 11, color: "var(--color-text-muted)" }}>yourapp.com</span>
            </div>
            <div style={{ fontSize: 11, color: "var(--color-accent)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Web Platform</div>
            <div className="sy" style={{ fontWeight: 700, fontSize: 15 }}>Full-Stack Web</div>
            <div style={{ marginTop: 8, fontSize: 12, color: "var(--color-text-muted)" }}>React · Next.js · Node</div>
          </BentoCard>

          <BentoCard
            style={{
              position: "absolute",
              bottom: 80,
              left: 30,
              width: 200,
              padding: "var(--space-md)",
              animation: "float3 11s ease-in-out infinite",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 36, height: 36, background: "rgba(14, 127, 114, 0.2)", borderRadius: "var(--radius-sm)", display: "grid", placeItems: "center" }}>
                <Code2 size={16} color="var(--color-accent)" />
              </div>
              <div>
                <div className="sy" style={{ fontSize: 13, fontWeight: 700 }}>React · Node</div>
                <div style={{ fontSize: 11, color: "var(--color-text-muted)" }}>Modern stack</div>
              </div>
            </div>
            <div style={{ height: 4, background: "rgba(14, 127, 114, 0.15)", borderRadius: 2 }}>
              <div style={{ width: "78%", height: "100%", background: "linear-gradient(90deg, var(--color-accent-700), var(--color-accent))", borderRadius: 2 }} />
            </div>
          </BentoCard>

          <BentoCard
            style={{
              position: "absolute",
              bottom: 40,
              right: 40,
              width: 180,
              padding: "var(--space-md)",
              animation: "float 13s ease-in-out infinite reverse",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <div style={{ width: 36, height: 36, background: "rgba(14, 127, 114, 0.2)", borderRadius: "var(--radius-sm)", display: "grid", placeItems: "center" }}>
                <Cloud size={16} color="var(--color-accent)" />
              </div>
              <div>
                <div className="sy" style={{ fontSize: 13, fontWeight: 700 }}>Cloud Native</div>
                <div style={{ fontSize: 11, color: "var(--color-text-muted)" }}>AWS · GCP · Azure</div>
              </div>
            </div>
          </BentoCard>

          <BentoCard
            style={{
              position: "absolute",
              top: 180,
              left: 200,
              width: 160,
              padding: "var(--space-md)",
              textAlign: "center",
              animation: "float2 10s ease-in-out infinite reverse",
            }}
          >
            <div className="sy" style={{ fontSize: 34, fontWeight: 800, color: "var(--color-accent)", lineHeight: 1 }}>150+</div>
            <div style={{ fontSize: 11, color: "var(--color-text-muted)", marginTop: 4 }}>Projects Delivered</div>
          </BentoCard>

          {/* Orbiting icons */}
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 160, height: 160, borderRadius: "50%", border: "1px dashed rgba(14, 127, 114, 0.2)" }}>
            <div style={{ position: "absolute", top: "50%", left: "50%", width: 36, height: 36, background: "linear-gradient(135deg, var(--color-accent-700), var(--color-accent))", borderRadius: "var(--radius-sm)", display: "grid", placeItems: "center", animation: "orbit 8s linear infinite", transformOrigin: "0 0", marginTop: -18, marginLeft: -18 }}>
              <Zap size={16} color="#fff" />
            </div>
            <div style={{ position: "absolute", top: "50%", left: "50%", width: 28, height: 28, background: "rgba(14, 127, 114, 0.3)", border: "1px solid rgba(29, 207, 186, 0.4)", borderRadius: 7, display: "grid", placeItems: "center", animation: "orbitRev 6s linear infinite", transformOrigin: "0 0", marginTop: -14, marginLeft: -14 }}>
              <Shield size={13} color="var(--color-accent)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
