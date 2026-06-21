export function Card({ children, style, className = "", hover = true }) {
  return (
    <div
      className={`${hover ? "ui-card" : ""} ${className}`}
      style={{
        background: "var(--color-surface-elevated)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
