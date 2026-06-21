const companies = [
  "Growfast", "TechVista", "MediCare Plus", "EduPrime",
  "FinLeap", "BuildRight", "GreenLeaf", "ShopEase",
];

export function TrustBar() {
  return (
    <div className="rv" style={{ padding: "40px 5%", background: "var(--color-surface-elevated)", borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <div style={{ fontSize: 11, color: "var(--color-text-subtle)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600, textAlign: "center", marginBottom: 20 }}>
          Trusted by 150+ Businesses Worldwide
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", alignItems: "center" }}>
          {companies.map((name, i) => (
            <span
              key={i}
              style={{
                fontSize: 15, fontWeight: 700, color: "var(--color-text-muted)",
                letterSpacing: "0.06em", opacity: 0.5,
                transition: "opacity 0.3s ease",
                whiteSpace: "nowrap",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
