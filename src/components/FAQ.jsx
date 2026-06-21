import { ChevronDown } from "lucide-react";
import { FAQS } from "../data/company";
import { SectionHeader } from "./ui/SectionHeader";

export function FAQ() {
  return (
    <section style={{ background: "var(--color-bg)", padding: "var(--section-padding-y) var(--section-padding-x)" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <SectionHeader
          align="center"
          eyebrow="Common Questions"
          title={<>Everything You Want<br />to Know Upfront</>}
          description="We believe in radical transparency. No surprises."
        />
        <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {FAQS.map((faq, i) => (
            <details
              key={i}
              className="faq-item"
              style={{
                border: "1px solid var(--color-border)",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                transition: "border-color 0.25s",
              }}
            >
              <summary
                style={{
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  cursor: "pointer",
                  listStyle: "none",
                  background: "transparent",
                  transition: "background 0.25s",
                }}
              >
                <h3 className="sy" style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.3 }}>{faq.q}</h3>
                <span className="faq-chevron" style={{ color: "var(--color-accent)", flexShrink: 0, transition: "transform 0.25s" }}>
                  <ChevronDown size={18} />
                </span>
              </summary>
              <div style={{ padding: "0 24px 22px" }}>
                <p style={{ fontSize: 14, color: "var(--color-text-secondary)", lineHeight: 1.8, fontWeight: 300 }}>{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
