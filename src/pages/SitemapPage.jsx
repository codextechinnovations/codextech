import { useMemo } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { DetailNavbar } from "../components/DetailNavbar";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { PRODUCTS } from "../data/products";
import { INDUSTRY_PAGE_DATA } from "../data/industries";
import { useReveal } from "../hooks/useReveal";

export default function SitemapPage() {
  useReveal();
  const grouped = useMemo(() => {
    const g = {};
    PRODUCTS.forEach((p) => {
      if (!g[p.category]) g[p.category] = [];
      g[p.category].push(p);
    });
    return g;
  }, []);

  return (
    <div style={{ background: "var(--color-bg)", minHeight: "100vh" }}>
      <SEO
        title="Sitemap"
        description="Browse all pages of CODEX Tech Innovations — services, products, industries, and resources."
        canonical="/sitemap"
      />
      <DetailNavbar backTo="/" backLabel="Back to Home" />
      <section style={{ padding: "120px 5% 80px", position: "relative", overflow: "hidden" }}>
        <div className="hgrid" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, marginBottom: 36, color: "var(--color-text-subtle)" }}>
            <Link to="/" className="fl" style={{ color: "var(--color-text-subtle)" }}>
              Home
            </Link>
            <span style={{ color: "var(--color-divider)" }}>/</span>
            <span style={{ color: "var(--color-accent)", fontWeight: 600 }}>Sitemap</span>
          </nav>

          <h1 className="sy" style={{ fontSize: "clamp(36px,5vw,56px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 12 }}>Sitemap</h1>
          <p style={{ fontSize: 17, color: "var(--color-text-muted)", fontWeight: 300, maxWidth: 560, marginBottom: 52 }}>Browse all pages and sections available on CODEX Tech Innovations & Consultants LLP.</p>

          {/* Main Sections */}
          <div className="rv" style={{ marginBottom: 48 }}>
            <h2 className="sy" style={{ fontSize: 20, fontWeight: 800, marginBottom: 18, color: "var(--color-accent)" }}>Main Pages</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "Home", href: "/", desc: "Hero, stats, and overview" },
                { label: "Services", href: "/?section=services", desc: "Mobile, Web & SaaS development services" },
                { label: "Products", href: "/?section=products", desc: "All 8 SaaS products we've built" },
                { label: "How We Work", href: "/?section=workflow", desc: "Our 6-phase development process" },
                { label: "Why Us", href: "/?section=why", desc: "Key differentiators and client proof" },
                { label: "Tech Stack", href: "/?section=tech", desc: "Technologies we use" },
                { label: "Industries", href: "/?section=industries", desc: "8 industries we serve" },
                { label: "Contact", href: "/?section=contact", desc: "Get in touch for a free estimate" },
              ].map((page, i) => (
                <Link key={i} to={page.href} className="diff-card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", borderRadius: 10, textDecoration: "none" }}>
                  <div>
                    <span className="sy" style={{ fontSize: 15, fontWeight: 700 }}>{page.label}</span>
                    <p style={{ fontSize: 13, color: "var(--color-text-subtle)", marginTop: 2 }}>{page.desc}</p>
                  </div>
                  <ChevronRight size={16} color="var(--color-accent)" />
                </Link>
              ))}
            </div>
          </div>

          {/* Industries */}
          <div className="rv" style={{ marginBottom: 48 }}>
            <h2 className="sy" style={{ fontSize: 20, fontWeight: 800, marginBottom: 18, color: "var(--color-accent)" }}>Industries We Serve</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}>
              {Object.values(INDUSTRY_PAGE_DATA).map((ind) => (
                <Link key={ind.id} to={`/industry/${ind.id}`} className="diff-card" style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", borderRadius: 10, textDecoration: "none" }}>
                  <span aria-hidden="true" style={{ fontSize: 28, lineHeight: 1 }}>{ind.icon}</span>
                  <div style={{ flex: 1 }}>
                    <span className="sy" style={{ fontSize: 14, fontWeight: 700 }}>{ind.name}</span>
                    <p style={{ fontSize: 12, color: "var(--color-text-subtle)", marginTop: 2 }}>{ind.heroTitle}</p>
                  </div>
                  <ChevronRight size={14} color="var(--color-accent)" />
                </Link>
              ))}
            </div>
          </div>

          {/* Products by Category */}
          <div className="rv">
            <h2 className="sy" style={{ fontSize: 20, fontWeight: 800, marginBottom: 18, color: "var(--color-accent)" }}>Our Products</h2>
            {Object.entries(grouped).map(([category, prods]) => (
              <div key={category} style={{ marginBottom: 28 }}>
                <h3 className="sy" style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: "var(--color-text-secondary)" }}>{category}</h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10 }}>
                  {prods.map((prod) => (
                    <Link key={prod.id} to={`/product/${prod.id}`} className="diff-card" style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 18px", background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", borderRadius: 10, textDecoration: "none" }}>
                      <span aria-hidden="true" style={{ fontSize: 28, lineHeight: 1 }}>{prod.emoji}</span>
                      <div style={{ flex: 1 }}>
                        <span className="sy" style={{ fontSize: 14, fontWeight: 700 }}>{prod.name}</span>
                        <p style={{ fontSize: 12, color: "var(--color-text-subtle)", marginTop: 2 }}>{prod.tagline}</p>
                      </div>
                      <ChevronRight size={14} color="var(--color-accent)" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Resources */}
          <div className="rv" style={{ marginTop: 48 }}>
            <h2 className="sy" style={{ fontSize: 20, fontWeight: 800, marginBottom: 18, color: "var(--color-accent)" }}>Resources</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { label: "XML Sitemap", href: "/sitemap.xml" },
                { label: "AI Information (llms.txt)", href: "/llms.txt" },
                { label: "Full AI Documentation (llms-full.txt)", href: "/llms-full.txt" },
                { label: "robots.txt", href: "/robots.txt" },
              ].map((res, i) => (
                <a key={i} href={res.href} className="diff-card" style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 20px", background: "var(--color-surface-elevated)", border: "1px solid var(--color-border)", borderRadius: 10, textDecoration: "none" }}>
                  <span aria-hidden="true" style={{ fontSize: 14, color: "var(--color-accent)" }}>📄</span>
                  <span className="sy" style={{ fontSize: 14, fontWeight: 700 }}>{res.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
