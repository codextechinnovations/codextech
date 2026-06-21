import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 5%", background: "#0b1929" }}>
      <div style={{ fontSize: 64, marginBottom: 20 }}>🔍</div>
      <h2 className="sy" style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Page Not Found</h2>
      <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 28 }}>The page you're looking for doesn't exist.</p>
      <Link to="/" style={{ background: "linear-gradient(135deg,#0e7f72,#12a896)", color: "#fff", padding: "12px 28px", borderRadius: 9, fontSize: 14, fontWeight: 500 }}>
        Back to Home
      </Link>
    </section>
  );
}
