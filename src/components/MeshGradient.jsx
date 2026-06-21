export function MeshGradient({ style }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        ...style,
      }}
    >
        <div
            className="mesh-gradient-blob"
            style={{
              position: "absolute",
              inset: "-20%",
              background: `
            radial-gradient(circle at 20% 30%, rgba(29, 207, 186, 0.18) 0%, transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(14, 127, 114, 0.22) 0%, transparent 45%),
            radial-gradient(circle at 60% 80%, rgba(29, 207, 186, 0.14) 0%, transparent 40%),
            radial-gradient(circle at 30% 70%, rgba(14, 127, 114, 0.16) 0%, transparent 45%)
          `,
          filter: "blur(60px)",
          animation: "meshMove 20s ease-in-out infinite alternate",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 70% at 70% 40%, rgba(29, 207, 186, 0.06) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
