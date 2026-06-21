export function SectionHeader({ eyebrow, title, description, align = "left", style }) {
  const isCenter = align === "center";
  return (
    <div
      className="rv"
      style={{
        marginBottom: 52,
        textAlign: isCenter ? "center" : "left",
        ...style,
      }}
    >
      {eyebrow && (
        <span
          style={{
            display: "inline-block",
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-accent)",
            marginBottom: 14,
          }}
        >
          {eyebrow}
        </span>
      )}
      {title && (
        <h2
          className="sy"
          style={{
            fontSize: "clamp(30px, 4vw, 50px)",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            marginBottom: description ? 14 : 0,
          }}
        >
          {title}
        </h2>
      )}
      {description && (
        <p
          style={{
            fontSize: 16,
            color: "var(--color-text-muted)",
            fontWeight: 300,
            maxWidth: isCenter ? 600 : 520,
            lineHeight: 1.75,
            margin: isCenter ? "0 auto" : 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
