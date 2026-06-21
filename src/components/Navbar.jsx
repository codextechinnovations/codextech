import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Logo } from "./Logo";

const links = [
  ["Services", "#services"],
  ["Our Products", "#products"],
  ["How We Work", "#workflow"],
  ["Why Us", "#why"],
  ["Tech Stack", "#tech"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);
  const toggleRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") return;
    const observers = [];
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(`#${entry.target.id}`);
      });
    };
    links.forEach(([, href]) => {
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const io = new IntersectionObserver(handleIntersect, { threshold: 0.4 });
        io.observe(el);
        observers.push(io);
      }
    });
    return () => observers.forEach((io) => io.disconnect());
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const firstLink = menuRef.current?.querySelector("a, button");
    firstLink?.focus();
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const isHashActive = (href) => activeSection === href;

  return (
    <>
      {/* Skip to content */}
      <a
        href="#main-content"
        style={{
          position: "absolute", top: -100, left: 8, zIndex: 999,
          background: "var(--color-accent)", color: "#fff",
          padding: "12px 20px", borderRadius: 8, fontSize: 14, fontWeight: 600,
          transition: "top 0.2s ease",
        }}
        onFocus={(e) => e.currentTarget.style.top = "8px"}
        onBlur={(e) => e.currentTarget.style.top = "-100px"}
      >
        Skip to main content
      </a>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: 70,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 5%",
          background: scrolled ? "var(--color-surface-elevated)" : "var(--color-surface)",
          backdropFilter: "blur(18px)",
          borderBottom: `1px solid var(--color-border)`,
          transition: "all 0.3s ease",
        }}
      >
        <Link to="/" aria-label="CODEX Tech Innovations home" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Logo size={42} />
          <span className="sy" style={{ fontWeight: 700, fontSize: 17, letterSpacing: 1, textTransform: "uppercase", whiteSpace: "nowrap" }}>
            CODEX <span style={{ color: "var(--color-accent)" }}>|</span>{" "}
            <span style={{ fontWeight: 300, color: "var(--color-text-subtle)", fontSize: 10, letterSpacing: 2 }}>Tech Innovations & Consultants LLP</span>
          </span>
        </Link>
        <ul className="nm" style={{ display: "flex", alignItems: "center", gap: 28, listStyle: "none" }}>
          {links.map(([label, href]) => (
            <li key={label}>
              <a
                href={href}
                className="nl"
                aria-current={isHashActive(href) ? "page" : undefined}
                style={{
                  fontSize: 14,
                  color: isHashActive(href) ? "var(--color-accent)" : "var(--color-text-secondary)",
                  position: "relative",
                  transition: "color 0.2s",
                  padding: "10px 0",
                }}
              >
                {label}
                {isHashActive(href) && (
                  <span style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,var(--color-accent-700),var(--color-accent))", borderRadius: 2 }} />
                )}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" style={{ background: "linear-gradient(135deg,var(--color-accent-700),var(--color-accent-600))", color: "#fff", padding: "10px 22px", borderRadius: 7, fontSize: 14, fontWeight: 500, minHeight: 44, display: "inline-flex", alignItems: "center" }}>
              Free Consultation
            </a>
          </li>
          <li>
            <ThemeToggle />
          </li>
        </ul>
        <button
          ref={toggleRef}
          className="hb"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 10, minWidth: 44, minHeight: 44, alignItems: "center", justifyContent: "center" }}
        >
          {open ? <X size={22} color="var(--color-text)" /> : <Menu size={22} color="var(--color-text)" />}
        </button>
      </nav>

      {/* Overlay backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          style={{ position: "fixed", inset: 0, zIndex: 98, background: "rgba(0,0,0,0.5)" }}
        />
      )}

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        style={{
          position: "fixed", top: 70, left: 0, right: 0, zIndex: 99,
          background: "var(--color-surface-elevated)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--color-border)",
          padding: "12px 5% 20px",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          transform: open ? "translateY(0)" : "translateY(-110%)",
          opacity: open ? 1 : 0,
          transition: "transform 0.35s ease, opacity 0.25s ease",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            aria-current={isHashActive(href) ? "page" : undefined}
            style={{
              color: isHashActive(href) ? "var(--color-accent)" : "var(--color-text-secondary)",
              padding: "14px 0",
              borderBottom: "1px solid var(--color-divider)",
              fontSize: 16,
              minHeight: 48,
              display: "flex",
              alignItems: "center",
            }}
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          style={{
            marginTop: 14,
            background: "linear-gradient(135deg,var(--color-accent-700),var(--color-accent-600))",
            color: "#fff", padding: "14px 0", borderRadius: 8, textAlign: "center",
            fontWeight: 500, fontSize: 16, minHeight: 48,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}
        >
          Free Consultation
        </a>
        <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 48 }}>
          <span style={{ fontSize: 16, color: "var(--color-text-secondary)" }}>Theme</span>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
}
