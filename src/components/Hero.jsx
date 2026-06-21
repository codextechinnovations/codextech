import { ArrowRight, Star, Globe, Zap, Shield, Clock, Code2, Server, Database } from "lucide-react";

export function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "100px 5% 80px", position: "relative", overflow: "hidden" }}>
      {/* BG */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 90% 70% at 65% 45%, rgba(14,127,114,0.2) 0%,transparent 65%), radial-gradient(ellipse 50% 50% at 90% 80%, rgba(29,207,186,0.09) 0%,transparent 60%), linear-gradient(180deg,#0b1929 0%,#0d2035 100%)" }} />
      <div className="hgrid" style={{ position: "absolute", inset: 0 }} />

      {/* Orb blobs */}
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(14,127,114,0.12) 0%,transparent 70%)", top: "10%", right: "5%", animation: "float 10s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(29,207,186,0.08) 0%,transparent 70%)", bottom: "10%", right: "25%", animation: "float2 14s ease-in-out infinite" }} />

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 680 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(14,127,114,0.15)", border: "1px solid rgba(29,207,186,0.3)", padding: "6px 16px", borderRadius: 100, fontSize: 12, fontWeight: 600, color: "#1dcfba", letterSpacing: "0.09em", textTransform: "uppercase", marginBottom: 28, animation: "fadeUp 0.8s ease both" }}>
          <span style={{ width: 7, height: 7, background: "#1dcfba", borderRadius: "50%", animation: "blink 1.8s infinite" }} />
          Bengaluru-Based · Delivering Globally
        </div>

        <h1 className="sy" style={{ fontSize: "clamp(44px,6.5vw,82px)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.03em", marginBottom: 24, animation: "fadeUp 0.8s ease 0.1s both" }}>
          India's Premium<br />Software Studio for<br /><span className="gt">Global Products.</span>
        </h1>

        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.62)", lineHeight: 1.75, maxWidth: 540, marginBottom: 16, fontWeight: 300, animation: "fadeUp 0.8s ease 0.2s both" }}>
          150+ apps and platforms shipped from Bengaluru to the US, UK, UAE, Singapore, Australia, Canada, and Europe. Senior engineers, fixed-price contracts, and a 6-month warranty.
        </p>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.38)", marginBottom: 38, animation: "fadeUp 0.8s ease 0.25s both" }}>
          Mobile App Development · Web Development · SaaS · AI · Cloud
        </p>

        <div className="ha" style={{ display: "flex", gap: 14, flexWrap: "wrap", animation: "fadeUp 0.8s ease 0.3s both" }}>
          <a href="#contact" className="bp" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#0e7f72,#12a896)", color: "#fff", padding: "15px 30px", borderRadius: 9, fontSize: 15, fontWeight: 500, boxShadow: "0 4px 28px rgba(14,127,114,0.38)" }}>
            Get a Free Estimate <ArrowRight size={16} />
          </a>
          <a href="#workflow" className="bs" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.78)", padding: "15px 30px", borderRadius: 9, fontSize: 15 }}>
            See How We Work
          </a>
        </div>

        {/* Social proof row */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 40, flexWrap: "wrap", animation: "fadeUp 0.8s ease 0.4s both" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#1dcfba" color="#1dcfba" />)}
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", marginLeft: 4 }}>4.9/5 · 80+ Reviews</span>
          </div>
          <div style={{ width: 1, height: 18, background: "rgba(255,255,255,0.12)" }} />
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>Trusted by startups & Fortune 500 teams</span>
        </div>
      </div>

      {/* HERO VISUAL — desktop */}
      <div className="hv" style={{ position: "absolute", right: "4%", top: "50%", transform: "translateY(-50%)", width: 440, height: 480 }}>
        {/* Phone card */}
        <div style={{ position: "absolute", left: 0, top: 30, width: 200, background: "linear-gradient(135deg,rgba(14,127,114,0.2),rgba(29,207,186,0.06))", border: "1px solid rgba(29,207,186,0.25)", borderRadius: 20, padding: 20, backdropFilter: "blur(10px)", animation: "float 7s ease-in-out infinite" }}>
          <div style={{ background: "rgba(14,127,114,0.2)", borderRadius: 10, padding: 10, marginBottom: 12, textAlign: "center", fontSize: 28 }}>📱</div>
          <div className="sy" style={{ fontSize: 11, color: "#1dcfba", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>Mobile App</div>
          <div className="sy" style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>iOS & Android</div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>React Native · Flutter · Swift</div>
          <div style={{ marginTop: 14, display: "flex", gap: 5 }}>
            {["#1dcfba", "#0e7f72", "rgba(255,255,255,0.2)"].map((c, i) => <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: c }} />)}
          </div>
        </div>

        {/* Browser card */}
        <div style={{ position: "absolute", right: 0, top: 60, width: 220, background: "rgba(11,25,41,0.9)", border: "1px solid rgba(14,127,114,0.3)", borderRadius: 20, padding: 20, backdropFilter: "blur(10px)", animation: "float2 9s ease-in-out infinite" }}>
          <div style={{ display: "flex", gap: 5, marginBottom: 14 }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c, i) => <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
          </div>
          <div style={{ background: "rgba(14,127,114,0.1)", borderRadius: 8, padding: "8px 12px", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}>
            <Globe size={12} color="#1dcfba" />
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>yourapp.com</span>
          </div>
          <div className="sy" style={{ fontSize: 11, color: "#1dcfba", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 5 }}>Web Platform</div>
          <div className="sy" style={{ fontWeight: 700, fontSize: 15 }}>Full-Stack Web</div>
          <div style={{ marginTop: 8, fontSize: 12, color: "rgba(255,255,255,0.45)" }}>React · Next.js · Node</div>
        </div>

        {/* Metric badges */}
        <div style={{ position: "absolute", bottom: 60, left: 20, background: "rgba(14,127,114,0.15)", border: "1px solid rgba(29,207,186,0.3)", borderRadius: 12, padding: "12px 18px", backdropFilter: "blur(8px)", animation: "float3 11s ease-in-out infinite" }}>
          <div className="sy" style={{ fontSize: 26, fontWeight: 800, color: "#1dcfba" }}>150+</div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Projects Delivered</div>
        </div>
        <div style={{ position: "absolute", bottom: 20, right: 30, background: "rgba(11,25,41,0.95)", border: "1px solid rgba(14,127,114,0.25)", borderRadius: 12, padding: "10px 16px", backdropFilter: "blur(8px)", animation: "float 13s ease-in-out infinite reverse" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ width: 8, height: 8, background: "#1dcfba", borderRadius: "50%", animation: "blink 1.5s infinite" }} />
            <span style={{ fontSize: 12, fontWeight: 500 }}>Sprint #4 — Live Demo</span>
          </div>
        </div>

        {/* Orbiting icons */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 160, height: 160, borderRadius: "50%", border: "1px dashed rgba(14,127,114,0.2)" }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", width: 36, height: 36, background: "linear-gradient(135deg,#0e7f72,#1dcfba)", borderRadius: 9, display: "grid", placeItems: "center", animation: "orbit 8s linear infinite", transformOrigin: "0 0", marginTop: -18, marginLeft: -18 }}>
            <Zap size={16} color="#fff" />
          </div>
          <div style={{ position: "absolute", top: "50%", left: "50%", width: 28, height: 28, background: "rgba(14,127,114,0.3)", border: "1px solid rgba(29,207,186,0.4)", borderRadius: 7, display: "grid", placeItems: "center", animation: "orbitRev 6s linear infinite", transformOrigin: "0 0", marginTop: -14, marginLeft: -14 }}>
            <Shield size={13} color="#1dcfba" />
          </div>
        </div>

        {/* Floating mini cards */}
        <div style={{ position: "absolute", top: 10, right: 160, background: "rgba(11,25,41,0.95)", border: "1px solid rgba(14,127,114,0.25)", borderRadius: 12, padding: "10px 14px", backdropFilter: "blur(8px)", animation: "float2 8s ease-in-out infinite reverse", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 24, height: 24, background: "rgba(14,127,114,0.2)", borderRadius: 6, display: "grid", placeItems: "center" }}>
            <Clock size={12} color="#1dcfba" />
          </div>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>12–16 weeks</span>
        </div>

        <div style={{ position: "absolute", bottom: 110, right: -10, background: "rgba(11,25,41,0.95)", border: "1px solid rgba(14,127,114,0.25)", borderRadius: 12, padding: "10px 14px", backdropFilter: "blur(8px)", animation: "float 9s ease-in-out infinite", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 24, height: 24, background: "rgba(14,127,114,0.2)", borderRadius: 6, display: "grid", placeItems: "center" }}>
            <Code2 size={12} color="#1dcfba" />
          </div>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>React · Node · AWS</span>
        </div>

        <div style={{ position: "absolute", top: 130, right: -20, background: "rgba(11,25,41,0.95)", border: "1px solid rgba(14,127,114,0.25)", borderRadius: 12, padding: "10px 14px", backdropFilter: "blur(8px)", animation: "float3 10s ease-in-out infinite reverse", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 24, height: 24, background: "rgba(14,127,114,0.2)", borderRadius: 6, display: "grid", placeItems: "center" }}>
            <Database size={12} color="#1dcfba" />
          </div>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>PostgreSQL · Redis</span>
        </div>

        <div style={{ position: "absolute", bottom: 150, left: 40, background: "rgba(11,25,41,0.95)", border: "1px solid rgba(14,127,114,0.25)", borderRadius: 12, padding: "10px 14px", backdropFilter: "blur(8px)", animation: "float2 11s ease-in-out infinite", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 24, height: 24, background: "rgba(14,127,114,0.2)", borderRadius: 6, display: "grid", placeItems: "center" }}>
            <Server size={12} color="#1dcfba" />
          </div>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)" }}>Cloud Native</span>
        </div>
      </div>
    </section>
  );
}
