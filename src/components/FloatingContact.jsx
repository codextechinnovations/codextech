import { useState, useRef, useEffect } from "react";
import { MessageCircle, Phone, Mail, X, ChevronUp } from "lucide-react";

const actions = [
  { label: "Call Us", href: "tel:+919741821179", icon: <Phone size={18} />, color: "#4ade80" },
  { label: "Email", href: "mailto:codextechinnovations@gmail.com", icon: <Mail size={18} />, color: "#38bdf8" },
  { label: "WhatsApp", href: "https://wa.me/919741821179", icon: <MessageCircle size={18} />, color: "#22c55e" },
];

export function FloatingContact() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.5) {
        setVisible(true);
      } else {
        setVisible(false);
        setOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    timeoutRef.current = setTimeout(() => setOpen(false), 8000);
    return () => clearTimeout(timeoutRef.current);
  }, [open]);

  const toggle = () => setOpen((o) => !o);

  return (
    <div
      style={{
        position: "fixed", bottom: 24, right: 24, zIndex: 200,
        display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "all 0.35s ease",
      }}
    >
      {/* Action buttons */}
      {open && (
        <div
          style={{
            display: "flex", flexDirection: "column", gap: 8,
            animation: "fadeUp 0.25s ease both",
          }}
        >
          {actions.map((a, i) => (
            <a
              key={i}
              href={a.href}
              target={a.href.startsWith("http") ? "_blank" : undefined}
              rel={a.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                background: "var(--color-surface-elevated)",
                border: "1px solid var(--color-border)",
                borderRadius: 14,
                padding: "10px 18px",
                textDecoration: "none",
                color: "var(--color-text)",
                fontSize: 14,
                fontWeight: 500,
                boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                transition: "all 0.2s ease",
                whiteSpace: "nowrap",
                animation: "fadeUp 0.25s ease both",
                animationDelay: `${i * 0.06}s`,
              }}
            >
              <div style={{ width: 34, height: 34, borderRadius: 10, background: `${a.color}20`, display: "grid", placeItems: "center", color: a.color, flexShrink: 0 }}>
                {a.icon}
              </div>
              <span>{a.label}</span>
            </a>
          ))}
        </div>
      )}

      {/* FAB toggle button */}
      <button
        onClick={toggle}
        aria-label={open ? "Close contact options" : "Contact us"}
        style={{
          width: 52, height: 52, borderRadius: "50%",
          background: "linear-gradient(135deg, var(--color-accent-700), var(--color-accent))",
          color: "#fff", border: "none", cursor: "pointer",
          display: "grid", placeItems: "center",
          boxShadow: "0 8px 24px rgba(14,127,114,0.4)",
          transition: "all 0.25s ease",
        }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </div>
  );
}
