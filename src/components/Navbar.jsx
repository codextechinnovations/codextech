import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

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
          background: scrolled ? "rgba(11,25,41,0.97)" : "rgba(11,25,41,0.8)",
          backdropFilter: "blur(18px)",
          borderBottom: `1px solid rgba(14,127,114,${scrolled ? 0.25 : 0.15})`,
          transition: "all 0.3s ease",
        }}
      >
        <a href="/" aria-label="CODEX Tech Innovations logo" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="42" height="42" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }} role="img">
            <title>CODEX Tech Innovations logo</title>
            <defs>
              <linearGradient id="hexGradN" x1="0" y1="0" x2="110" y2="110" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#0d1f2d" />
                <stop offset="100%" stopColor="#061018" />
              </linearGradient>
              <linearGradient id="xGradN" x1="25" y1="25" x2="85" y2="85" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#00ffb9" />
                <stop offset="100%" stopColor="#00b4ff" />
              </linearGradient>
              <filter id="glowN">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>
            <g className="orbit" style={{ animation: "spin 8s linear infinite", transformOrigin: "55px 55px" }}>
              <circle cx="55" cy="55" r="51" stroke="rgba(0,255,185,0.15)" strokeWidth="1" strokeDasharray="6 10" fill="none" />
              <circle cx="55" cy="4" r="3" fill="#00ffb9" opacity="0.7" />
              <circle cx="55" cy="106" r="2" fill="#00b4ff" opacity="0.5" />
            </g>
            <polygon className="hex-bg" points="55,10 95,32 95,74 55,96 15,74 15,32" fill="url(#hexGradN)" stroke="rgba(0,255,185,0.6)" strokeWidth="1.5" style={{ animation: "hexPulse 3s ease-in-out infinite" }} />
            <polygon points="55,22 83,37 83,67 55,82 27,67 27,37" fill="none" stroke="rgba(0,255,185,0.12)" strokeWidth="1" />
            <g stroke="rgba(0,255,185,0.2)" strokeWidth="1" fill="none">
              <line x1="55" y1="10" x2="55" y2="22" />
              <line x1="95" y1="32" x2="83" y2="37" />
              <line x1="95" y1="74" x2="83" y2="67" />
              <line x1="55" y1="96" x2="55" y2="82" />
              <line x1="15" y1="74" x2="27" y2="67" />
              <line x1="15" y1="32" x2="27" y2="37" />
            </g>
            <g fill="rgba(0,255,185,0.5)">
              <circle cx="55" cy="21" r="2" />
              <circle cx="83" cy="37" r="2" />
              <circle cx="83" cy="67" r="2" />
              <circle cx="55" cy="81" r="2" />
              <circle cx="27" cy="67" r="2" />
              <circle cx="27" cy="37" r="2" />
            </g>
            <rect className="scanline" x="15" y="52" width="80" height="2" fill="url(#xGradN)" opacity="0.25" style={{ animation: "scan 2.4s ease-in-out infinite" }} />
            <g filter="url(#glowN)">
              <line x1="33" y1="35" x2="77" y2="75" stroke="url(#xGradN)" strokeWidth="8" strokeLinecap="round" />
              <line x1="77" y1="35" x2="33" y2="75" stroke="url(#xGradN)" strokeWidth="8" strokeLinecap="round" />
              <circle cx="55" cy="55" r="4.5" fill="#0a1820" stroke="url(#xGradN)" strokeWidth="1.5" />
              <circle cx="55" cy="55" r="2" fill="url(#xGradN)" />
            </g>
          </svg>
          <span className="sy" style={{ fontWeight: 700, fontSize: 17, letterSpacing: 1, textTransform: "uppercase" }}>
            CODEX <span style={{ color: "#1dcfba" }}>|</span>{" "}
            <span style={{ fontWeight: 300, color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: 2 }}>Tech Innovations & Consultants LLP</span>
          </span>
        </a>
        <ul className="nm" style={{ display: "flex", alignItems: "center", gap: 32, listStyle: "none" }}>
          {links.map(([label, href]) => (
            <li key={label}>
              <a href={href} className="nl" style={{ fontSize: 14, color: "rgba(255,255,255,0.72)", transition: "color 0.2s" }}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav-cta" style={{ background: "linear-gradient(135deg,#0e7f72,#12a896)", color: "#fff", padding: "10px 22px", borderRadius: 7, fontSize: 14, fontWeight: 500 }}>
              Free Consultation
            </a>
          </li>
        </ul>
        <button className="hb" onClick={() => setOpen(!open)} style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 }}>
          {open ? <X size={22} color="#fff" /> : <Menu size={22} color="#fff" />}
        </button>
      </nav>
      {open && (
        <div style={{ position: "fixed", top: 70, left: 0, right: 0, background: "rgba(11,25,41,0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(14,127,114,0.2)", zIndex: 99, padding: "16px 5% 24px", display: "flex", flexDirection: "column", gap: 2 }}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} style={{ color: "rgba(255,255,255,0.8)", padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: 16 }}>
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{ marginTop: 12, background: "linear-gradient(135deg,#0e7f72,#12a896)", color: "#fff", padding: "13px 0", borderRadius: 8, textAlign: "center", fontWeight: 500 }}>
            Free Consultation
          </a>
        </div>
      )}
    </>
  );
}
