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

  // Track active section for nav highlight
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

  // Close mobile menu on Escape and trap focus
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
          <span className="sy" style={{ fontWeight: 700, fontSize: 17, letterSpacing: 1, textTransform: "uppercase" }}>
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
                aria-current={isHashActive(href) ? "true" : undefined}
                style={{
                  fontSize: 14,
                  color: isHashActive(href) ? "var(--color-accent)" : "var(--color-text-secondary)",
                  position: "relative",
                  transition: "color 0.2s",
                  paddingBottom: 4,
                }}
              >
                {label}
                {isHashActive(href) && (
                  <span style={{ position: "absolute", bottom: -4, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,var(--color-accent-700),var(--color-accent))", borderRadius: 2 }} />
                )}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" style={{ background: "linear-gradient(135deg,var(--color-accent-700),var(--color-accent-600))", color: "#fff", padding: "10px 22px", borderRadius: 7, fontSize: 14, fontWeight: 500 }}>
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
          style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 }}
        >
          {open ? <X size={22} color="var(--color-text)" /> : <Menu size={22} color="var(--color-text)" />}
        </button>
      </nav>
      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          style={{ position: "fixed", top: 70, left: 0, right: 0, background: "var(--color-surface-elevated)", backdropFilter: "blur(20px)", borderBottom: "1px solid var(--color-border)", zIndex: 99, padding: "16px 5% 24px", display: "flex", flexDirection: "column", gap: 2 }}
        >
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              aria-current={isHashActive(href) ? "true" : undefined}
              style={{
                color: isHashActive(href) ? "var(--color-accent)" : "var(--color-text-secondary)",
                padding: "13px 0",
                borderBottom: "1px solid var(--color-divider)",
                fontSize: 16,
              }}
            >
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{ marginTop: 12, background: "linear-gradient(135deg,var(--color-accent-700),var(--color-accent-600))", color: "#fff", padding: "13px 0", borderRadius: 8, textAlign: "center", fontWeight: 500 }}>
            Free Consultation
          </a>
          <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>Theme</span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
}
