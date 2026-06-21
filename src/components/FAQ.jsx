import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQS } from "../data/company";

export function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section style={{ background: "#0b1929", padding: "110px 5%" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div className="rv" style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Common Questions</span>
          <h2 className="sy" style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 14 }}>
            Everything You Want<br />to Know Upfront
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>We believe in radical transparency. No surprises.</p>
        </div>
        <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="faq-item"
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              style={{ border: `1px solid ${openIdx === i ? "rgba(29,207,186,0.3)" : "rgba(14,127,114,0.18)"}`, borderRadius: 14, overflow: "hidden", cursor: "pointer", transition: "border-color 0.25s" }}
            >
              <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, background: openIdx === i ? "rgba(14,127,114,0.07)" : "transparent" }}>
                <h3 className="sy" style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.3 }}>{faq.q}</h3>
                <div style={{ color: "#1dcfba", flexShrink: 0 }}>{openIdx === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</div>
              </div>
              {openIdx === i && (
                <div style={{ padding: "0 24px 22px", animation: "fadeUp 0.25s ease both" }}>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontWeight: 300 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
