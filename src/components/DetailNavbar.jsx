import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function DetailNavbar({ backTo, backLabel }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
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
        background: scrolled ? "rgba(11,25,41,0.97)" : "rgba(11,25,41,0.8)",
        backdropFilter: "blur(18px)",
        borderBottom: `1px solid rgba(14,127,114,${scrolled ? 0.25 : 0.15})`,
        transition: "all 0.3s ease",
      }}
    >
      <Link to="/" aria-label="CODEX Tech Innovations logo" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <svg width="36" height="36" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }} role="img">
          <title>CODEX Tech Innovations logo</title>
          <defs>
            <linearGradient id="hexGradD" x1="0" y1="0" x2="110" y2="110" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0d1f2d" />
              <stop offset="100%" stopColor="#061018" />
            </linearGradient>
            <linearGradient id="xGradD" x1="25" y1="25" x2="85" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#00ffb9" />
              <stop offset="100%" stopColor="#00b4ff" />
            </linearGradient>
            <filter id="glowD">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <polygon points="55,10 95,32 95,74 55,96 15,74 15,32" fill="url(#hexGradD)" stroke="rgba(0,255,185,0.6)" strokeWidth="1.5" />
          <g filter="url(#glowD)">
            <line x1="33" y1="35" x2="77" y2="75" stroke="url(#xGradD)" strokeWidth="8" strokeLinecap="round" />
            <line x1="77" y1="35" x2="33" y2="75" stroke="url(#xGradD)" strokeWidth="8" strokeLinecap="round" />
            <circle cx="55" cy="55" r="4.5" fill="#0a1820" stroke="url(#xGradD)" strokeWidth="1.5" />
            <circle cx="55" cy="55" r="2" fill="url(#xGradD)" />
          </g>
        </svg>
        <span className="sy" style={{ fontWeight: 700, fontSize: 15, letterSpacing: 0.5, textTransform: "uppercase" }}>CODEX</span>
      </Link>
      <Link to={backTo} className="bs" style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", padding: "8px 16px", borderRadius: 7, fontSize: 13 }}>
        ← {backLabel}
      </Link>
    </nav>
  );
}
