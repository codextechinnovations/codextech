export function Container({ children, style, className = "" }) {
  return (
    <div
      className={className}
      style={{
        maxWidth: "var(--container-max)",
        margin: "0 auto",
        padding: `var(--section-padding-y) var(--section-padding-x)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
