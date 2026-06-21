import { Star } from "lucide-react";
import { TESTIMONIALS } from "../data/company";

export function Testimonials() {
  return (
    <section style={{ background: "#1a2e45", padding: "110px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="rv" style={{ marginBottom: 52, textAlign: "center" }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Client Stories</span>
          <h2 className="sy" style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 14 }}>
            Don't Take Our Word.<br />Read Theirs.
          </h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>Real results from real clients across industries.</p>
        </div>
        <div className="sg rv" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="tcard" style={{ background: "#0b1929", border: "1px solid rgba(14,127,114,0.2)", borderRadius: 18, padding: "32px 28px", position: "relative", transitionDelay: `${i * 0.08}s` }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#0e7f72,#1dcfba,transparent)", borderRadius: "18px 18px 0 0" }} />
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} fill="#1dcfba" color="#1dcfba" />)}
              </div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.68)", lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div className="sy" style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#6b8199", marginTop: 2 }}>{t.role}</div>
                </div>
                <div style={{ padding: "6px 12px", background: "rgba(29,207,186,0.1)", border: "1px solid rgba(29,207,186,0.25)", borderRadius: 8, fontSize: 12, color: "#1dcfba", fontWeight: 600 }}>{t.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
