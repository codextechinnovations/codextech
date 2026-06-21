import { useEffect, useMemo } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { DetailNavbar } from "../components/DetailNavbar";
import { IndustryDetail } from "../components/IndustryDetail";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { INDUSTRY_PAGE_DATA } from "../data/industries";

export default function IndustryPage() {
  const { industryId } = useParams();
  const [searchParams] = useSearchParams();
  const legacyIndustry = searchParams.get("industry");
  const resolvedId = industryId || legacyIndustry;
  const ind = useMemo(() => INDUSTRY_PAGE_DATA[resolvedId] || null, [resolvedId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [resolvedId]);

  // BreadcrumbList JSON-LD
  useEffect(() => {
    if (!ind) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "ind-breadcrumb-jsonld";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://codextechinnovations.com/" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://codextechinnovations.com/?section=industries" },
        { "@type": "ListItem", position: 3, name: ind.name, item: `https://codextechinnovations.com/industry/${ind.id}` },
      ],
    });
    document.head.appendChild(script);
    return () => {
      const s = document.getElementById("ind-breadcrumb-jsonld");
      if (s) s.remove();
    };
  }, [ind]);

  if (!ind) {
    return (
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 5%" }}>
        <div aria-hidden="true" style={{ fontSize: 64, marginBottom: 20 }}>🔍</div>
        <h2 className="sy" style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Industry Not Found</h2>
        <p style={{ color: "var(--color-text-muted)", marginBottom: 28 }}>The industry page you're looking for doesn't exist.</p>
        <Link to="/" style={{ background: "linear-gradient(135deg,var(--color-accent-700),var(--color-accent-600))", color: "#fff", padding: "12px 28px", borderRadius: 9, fontSize: 14, fontWeight: 500 }}>
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      <SEO
        title={`${ind.name} Software Development Services in India`}
        description={ind.desc}
        canonical={`/industry/${ind.id}`}
      />
      <DetailNavbar backTo="/" backLabel="All Industries" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ position: "fixed", top: 70, left: 0, right: 0, zIndex: 99, padding: "10px 5%", background: "var(--color-surface-elevated)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--color-border)", fontSize: 12 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Link to="/" className="fl" style={{ color: "var(--color-text-subtle)", display: "flex", alignItems: "center", gap: 4 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </Link>
          <span style={{ color: "var(--color-divider)" }}>/</span>
          <Link to="/?section=industries" className="fl" style={{ color: "var(--color-text-subtle)" }}>
            Industries
          </Link>
          <span style={{ color: "var(--color-divider)" }}>/</span>
          <span style={{ color: ind.accent, fontWeight: 600 }}>{ind.name}</span>
        </div>
      </nav>

      <IndustryDetail industryId={ind.id} />
      <Footer />
    </div>
  );
}
