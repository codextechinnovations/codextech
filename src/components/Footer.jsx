import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export function Footer() {
  const hrefFor = (link) => {
    const map = {
      Contact: "#contact",
      "Free Consultation": "#contact",
      Sitemap: "/sitemap",
      "Mobile App Development": "/#services",
      "Website Development": "/#services",
      "SaaS Product Development": "/#services",
      "Cloud & DevOps": "/#services",
      "AI & Automation": "/#services",
      "UI/UX Design": "/#services",
      "PG Management System": "/product/pg-management",
      "Hotel Management System": "/product/hotel-management",
      "Hostel Management System": "/product/hostel-management",
      "Store Management System": "/product/store-management",
      "Compliance & CA Manager": "/product/ca-compliance",
      "OMF Food Delivery App": "/product/omf-food-delivery",
      "Arthomed Hospital System": "/product/arthomed",
      "Wroggle Clothing Store": "/product/wroggle",
      "About Us": "/#why",
      "Our Work": "/#products",
      "Case Studies": "/#case-studies",
      "Tech Blog": "/#tech",
      "Project Estimator": "#contact",
      "Privacy Policy": "#",
      "Terms of Service": "#",
      "Healthcare & MedTech": "/industry/healthcare",
      "FinTech & Payments": "/industry/fintech",
      "Real Estate & PropTech": "/industry/real-estate",
      "Food Tech & Delivery": "/industry/foodtech",
      "EdTech & E-Learning": "/industry/edtech",
      "E-Commerce & Retail": "/industry/retail",
    };
    return map[link] || "#";
  };

  const isInternal = (href) => href.startsWith("/") && !href.startsWith("//");

  const cols = [
    {
      title: "Services",
      links: ["Mobile App Development", "Website Development", "SaaS Product Development", "Cloud & DevOps", "AI & Automation", "UI/UX Design"],
    },
    {
      title: "Our Products",
      links: ["PG Management System", "Hotel Management System", "Hostel Management System", "Store Management System", "OMF Food Delivery App", "Compliance & CA Manager", "Wroggle Clothing Store", "Arthomed Hospital System"],
    },
    {
      title: "Industries",
      links: ["Healthcare & MedTech", "FinTech & Payments", "Real Estate & PropTech", "Food Tech & Delivery", "EdTech & E-Learning", "E-Commerce & Retail"],
    },
    { title: "Company", links: ["About Us", "Our Work", "Careers", "Blog", "Press Kit", "Contact"] },
    { title: "Resources", links: ["Case Studies", "Tech Blog", "Free Consultation", "Project Estimator", "Privacy Policy", "Terms of Service"] },
  ];

  return (
    <footer style={{ background: "var(--color-bg)", padding: "72px 5% 36px", borderTop: "1px solid var(--color-border)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="fg" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 0.8fr", gap: 36, marginBottom: 60 }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18, flexWrap: "wrap" }}>
              <Logo size={38} />
              <span className="sy" style={{ fontWeight: 700, fontSize: 17, letterSpacing: 1, textTransform: "uppercase" }}>
                CODEX <span style={{ color: "var(--color-accent)" }}>|</span>{" "}
                <span style={{ fontWeight: 300, color: "var(--color-text-muted)", fontSize: 10, letterSpacing: 2 }}>Tech Innovations & Consultants LLP</span>
              </span>
            </div>
            <p style={{ fontSize: 14, color: "var(--color-text-muted)", lineHeight: 1.75, maxWidth: 280 }}>India's premium mobile app and web development studio. We build digital products that drive measurable business growth.</p>
            <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
              {["in", "𝕏", "gh", "yt"].map((s, i) => (
                <a key={i} href="#" className="sb" style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--color-border)", display: "grid", placeItems: "center", color: "var(--color-text-muted)", fontSize: 13 }}>
                  {s}
                </a>
              ))}
            </div>
          </div>
          {cols.map((col, ci) => (
            <div key={ci}>
              <div className="sy" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-subtle)", marginBottom: 18 }}>{col.title}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link, li) => {
                  const href = hrefFor(link);
                  const LinkTag = isInternal(href) ? Link : "a";
                  return (
                    <li key={li}>
                      <LinkTag to={isInternal(href) ? href : undefined} href={!isInternal(href) ? href : undefined} className="fl" style={{ fontSize: 14, color: "var(--color-text-muted)", transition: "color 0.2s" }}>
                        {link}
                      </LinkTag>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 28, borderTop: "1px solid var(--color-border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
            <Logo size={20} />
            <p style={{ fontSize: 13, color: "var(--color-text-subtle)" }}>© 2026 CODEX Tech Innovations & Consultants LLP · All rights reserved · Bengaluru, India</p>
          </div>
          <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "var(--color-text-subtle)" }}>D&B D-U-N-S® 772343099</span>
            {["Privacy Policy", "Terms", "Sitemap", "AI Info"].map((l, i) => {
              const href = l === "AI Info" ? "/llms.txt" : l === "Sitemap" ? "/sitemap" : "#";
              const LinkTag = href.startsWith("/") ? Link : "a";
              return (
                <LinkTag key={i} to={href.startsWith("/") ? href : undefined} href={!href.startsWith("/") ? href : undefined} className="fl" style={{ fontSize: 12, color: "var(--color-text-subtle)", transition: "color 0.2s" }}>
                  {l}
                </LinkTag>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
