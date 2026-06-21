import { TEAM } from "../data/company";

export function TeamCredentials() {
  return (
    <section id="team" style={{ background: "#1a2e45", padding: "110px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="rv" style={{ marginBottom: 52, textAlign: "center" }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Our Team</span>
          <h2 className="sy" style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 14 }}>
            Built by Senior Engineers,<br />Led by Experienced Leaders
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: 560, margin: "0 auto" }}>
            Every project at CODEX is designed, developed, and delivered by senior engineers with 8+ years of production experience. No juniors. No outsourcing. No bait-and-switch.
          </p>
        </div>

        <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24 }}>
          {TEAM.map((member, i) => (
            <div key={i} className="tcard" style={{ display: "flex", gap: 20, background: "#0b1929", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 16, padding: "28px 24px", transitionDelay: `${i * 0.08}s` }}>
              <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,#0e7f72,#1dcfba)", display: "grid", placeItems: "center", flexShrink: 0, fontSize: 22, fontWeight: 700, color: "#fff" }}>
                {member.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4, flexWrap: "wrap" }}>
                  <h3 className="sy" style={{ fontSize: 17, fontWeight: 700 }}>{member.name}</h3>
                  <span style={{ fontSize: 12, padding: "2px 10px", background: "rgba(29,207,186,0.1)", color: "#1dcfba", borderRadius: 100, fontWeight: 600 }}>{member.exp} experience</span>
                </div>
                <p style={{ fontSize: 13, color: "#1dcfba", fontWeight: 500, marginBottom: 6 }}>{member.role}</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginBottom: 8, fontWeight: 300, lineHeight: 1.6 }}>
                  <strong style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>Expertise:</strong> {member.expertise}
                </p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.6, fontWeight: 300 }}>{member.creds}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
