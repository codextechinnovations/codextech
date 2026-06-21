import { TEAM } from "../data/company";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";

export function TeamCredentials() {
  return (
    <section id="team" style={{ background: "var(--color-surface-elevated)", padding: "var(--section-padding-y) var(--section-padding-x)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionHeader
          align="center"
          eyebrow="Our Team"
          title={<>Built by Senior Engineers,<br />Led by Experienced Leaders</>}
          description="Every project at CODEX is designed, developed, and delivered by senior engineers with 8+ years of production experience. No juniors. No outsourcing. No bait-and-switch."
        />

        <div className="rv g2" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "var(--space-lg)" }}>
          {TEAM.map((member, i) => (
            <div key={i} className="tcard" style={{ display: "flex", gap: 20, background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-lg)", padding: "var(--space-lg)", transitionDelay: `${i * 0.08}s` }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg, var(--color-accent-700), var(--color-accent))", display: "grid", placeItems: "center", flexShrink: 0, fontSize: 22, fontWeight: 700, color: "#fff" }}>
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4, flexWrap: "wrap" }}>
                  <h3 className="sy" style={{ fontSize: 17, fontWeight: 700 }}>{member.name}</h3>
                  <Badge color="accent" style={{ textTransform: "none", letterSpacing: "normal" }}>{member.exp} experience</Badge>
                </div>
                <p style={{ fontSize: 13, color: "var(--color-accent)", fontWeight: 500, marginBottom: 6 }}>{member.role}</p>
                <p style={{ fontSize: 13, color: "var(--color-text-muted)", marginBottom: 8, fontWeight: 300, lineHeight: 1.6 }}>
                  <strong style={{ color: "var(--color-text-secondary)", fontWeight: 600 }}>Expertise:</strong> {member.expertise}
                </p>
                <p style={{ fontSize: 13, color: "var(--color-text-subtle)", lineHeight: 1.6, fontWeight: 300 }}>{member.creds}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
