import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/#products", label: "Our Products" },
  { to: "/#services", label: "Services" },
  { to: "/#case-studies", label: "Case Studies" },
  { to: "/#contact", label: "Contact" },
];

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found" description="Sorry, the page you are looking for does not exist." noindex />
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 5%", background: "var(--color-bg)" }}>
        <div aria-hidden="true" style={{ fontSize: 64, marginBottom: 20, lineHeight: 1 }}>🔍</div>
        <h2 className="sy" style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Page Not Found</h2>
        <p style={{ color: "var(--color-text-muted)", marginBottom: 28 }}>The page you're looking for doesn't exist or may have moved.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center", marginBottom: 36 }}>
          {LINKS.map((l) => (
            <Link key={l.to} to={l.to} style={{ background: "var(--color-surface-elevated)", color: "var(--color-text)", padding: "10px 22px", borderRadius: 9, fontSize: 14, fontWeight: 500, border: "1px solid var(--color-border)", textDecoration: "none" }}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link to="/" style={{ background: "linear-gradient(135deg,var(--color-accent-700),var(--color-accent-600))", color: "#fff", padding: "12px 28px", borderRadius: 9, fontSize: 14, fontWeight: 500 }}>
          Back to Home
        </Link>
      </section>
    </>
  );
}
