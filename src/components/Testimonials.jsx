import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/company";
import { SectionHeader } from "./ui/SectionHeader";
import { Badge } from "./ui/Badge";

export function Testimonials() {
  return (
    <section id="testimonials" style={{ background: "var(--color-surface-elevated)", padding: "var(--section-padding-y) var(--section-padding-x)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <SectionHeader
          align="center"
          eyebrow="Client Stories"
          title={<>Don't Take Our Word.<br />Read Theirs.</>}
          description="Real results from real clients across industries."
        />
        <div className="sg rv" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "var(--space-lg)" }}>
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} className="tcard" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-xl)", padding: "var(--space-xl)", position: "relative", transitionDelay: `${i * 0.08}s`, margin: 0 }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--color-accent-700), var(--color-accent), transparent)", borderRadius: "var(--radius-xl) var(--radius-xl) 0 0" }} />
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} fill="var(--color-accent)" color="var(--color-accent)" />)}
              </div>
              <blockquote style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: 24, fontStyle: "italic", margin: 0, padding: 0 }}>"{t.text}"</blockquote>
              <figcaption style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 24 }}>
                <div>
                  <div className="sy" style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "var(--color-text-muted)", marginTop: 2 }}>{t.role}</div>
                </div>
                <Badge>{t.metric}</Badge>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
