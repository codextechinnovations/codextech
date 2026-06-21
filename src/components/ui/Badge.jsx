export function Badge({ children, color = "accent", style }) {
  const colorMap = {
    accent: { color: "var(--color-accent)", background: "rgba(29, 207, 186, 0.1)", border: "1px solid rgba(29, 207, 186, 0.2)" },
    muted: { color: "var(--color-text-muted)", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)" },
    success: { color: "var(--color-success)", background: "rgba(74, 222, 128, 0.1)", border: "1px solid rgba(74, 222, 128, 0.2)" },
    warning: { color: "var(--color-warning)", background: "rgba(251, 191, 36, 0.1)", border: "1px solid rgba(251, 191, 36, 0.2)" },
    error: { color: "var(--color-error)", background: "rgba(248, 113, 113, 0.1)", border: "1px solid rgba(248, 113, 113, 0.2)" },
  };

  const theme = colorMap[color] || colorMap.accent;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        padding: "4px 10px",
        borderRadius: "var(--radius-full)",
        ...theme,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
