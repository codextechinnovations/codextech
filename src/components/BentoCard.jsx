export function BentoCard({ children, style, className = "" }) {
  return (
    <div
      className={`bento-card ${className}`}
      style={{
        background: "var(--color-surface-elevated)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-lg)",
        backdropFilter: "blur(12px)",
        padding: "var(--space-lg)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
