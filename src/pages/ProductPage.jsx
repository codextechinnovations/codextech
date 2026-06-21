import { useEffect, useMemo } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { DetailNavbar } from "../components/DetailNavbar";
import { ProductDetail } from "../components/ProductDetail";
import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { PRODUCTS, PRODUCT_EXTRA } from "../data/products";

export default function ProductPage() {
  const { productId } = useParams();
  const [searchParams] = useSearchParams();
  const legacyProduct = searchParams.get("product");
  const resolvedId = productId || legacyProduct;
  const product = useMemo(() => PRODUCTS.find((p) => p.id === resolvedId) || null, [resolvedId]);
  const extra = useMemo(() => (product ? PRODUCT_EXTRA[product.id] : null), [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [resolvedId]);

  // BreadcrumbList JSON-LD
  useEffect(() => {
    if (!product) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "breadcrumb-jsonld";
    script.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://codextechinnovations.com/" },
        { "@type": "ListItem", position: 2, name: "Products", item: "https://codextechinnovations.com/?section=products" },
        { "@type": "ListItem", position: 3, name: product.name, item: `https://codextechinnovations.com/product/${product.id}` },
      ],
    });
    document.head.appendChild(script);
    return () => {
      const s = document.getElementById("breadcrumb-jsonld");
      if (s) s.remove();
    };
  }, [product]);

  if (!product) {
    return (
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 5%" }}>
        <div style={{ fontSize: 64, marginBottom: 20 }}>🔍</div>
        <h2 className="sy" style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Product Not Found</h2>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 28 }}>The product you're looking for doesn't exist.</p>
        <Link to="/" style={{ background: "linear-gradient(135deg,#0e7f72,#12a896)", color: "#fff", padding: "12px 28px", borderRadius: 9, fontSize: 14, fontWeight: 500 }}>
          Back to Home
        </Link>
      </section>
    );
  }

  return (
    <div style={{ background: "#0b1929", minHeight: "100vh" }}>
      <SEO
        title={`${product.name} — ${product.tagline}`}
        description={extra?.longDesc || product.desc}
        canonical={`/product/${product.id}`}
      />
      <DetailNavbar backTo="/" backLabel="All Products" />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" style={{ position: "fixed", top: 70, left: 0, right: 0, zIndex: 99, padding: "10px 5%", background: "rgba(11,25,41,0.85)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(14,127,114,0.12)", fontSize: 12 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", gap: 8 }}>
          <Link to="/" className="fl" style={{ color: "rgba(255,255,255,0.45)", display: "flex", alignItems: "center", gap: 4 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
            Home
          </Link>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
          <Link to="/?section=products" className="fl" style={{ color: "rgba(255,255,255,0.45)" }}>
            Products
          </Link>
          <span style={{ color: "rgba(255,255,255,0.2)" }}>/</span>
          <span style={{ color: product.accent, fontWeight: 600 }}>{product.name}</span>
        </div>
      </nav>

      <ProductDetail productId={product.id} />
      <Footer />
    </div>
  );
}
