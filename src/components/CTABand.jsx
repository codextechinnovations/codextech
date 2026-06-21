import { useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, User, Building2, Briefcase, Loader2, CheckCircle } from "lucide-react";

const FIELDS = [
  { key: "name", label: "Full Name", placeholder: "John Doe", type: "text", icon: <User size={16} />, required: true },
  { key: "email", label: "Work Email", placeholder: "john@company.com", type: "email", icon: <Mail size={16} />, required: true },
  { key: "mobile", label: "Phone Number", placeholder: "+91 98765 43210", type: "tel", icon: <Phone size={16} />, required: true },
  { key: "projectName", label: "Company / Project Name", placeholder: "Acme Inc.", type: "text", icon: <Building2 size={16} />, required: false },
];

const SERVICE_OPTIONS = [
  { value: "", label: "What are you building?" },
  { value: "Mobile App", label: "Mobile App (iOS/Android)" },
  { value: "Web App", label: "Web Application / Platform" },
  { value: "Both", label: "Both Mobile + Web" },
  { value: "Cloud", label: "Cloud / DevOps" },
  { value: "AI", label: "AI / ML Integration" },
];

export function CTABand() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    projectName: "",
    service: "",
  });
  const [touched, setTouched] = useState({});
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status) setStatus(null);
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const validate = () => {
    const errors = {};
    FIELDS.forEach((f) => {
      if (f.required && !form[f.key].trim()) errors[f.key] = `${f.label} is required`;
    });
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "Please enter a valid email";
    }
    return errors;
  };

  const errors = validate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, mobile: true, projectName: true, service: true });

    if (Object.keys(errors).length > 0) return;

    try {
      setLoading(true);
      setStatus(null);

      const res = await fetch("https://api.manageyourpg.com/api/pg-en/codex", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", mobile: "", projectName: "", service: "" });
        setTouched({});
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const contactItems = [
    { icon: <Mail size={16} />, label: "Email", value: "codextechinnovations@gmail.com", href: "mailto:codextechinnovations@gmail.com" },
    { icon: <Phone size={16} />, label: "Phone", value: "+91 9741821179", href: "tel:+919741821179" },
    { icon: <MapPin size={16} />, label: "Location", value: "Bengaluru, India", href: null },
  ];

  return (
    <section id="contact" style={{ background: "linear-gradient(135deg,var(--color-accent-700) 0%,var(--color-accent-900) 50%,var(--color-surface-elevated) 100%)", color: "#fff", padding: "var(--section-padding-y) var(--section-padding-x)", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -120, right: -120, width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle,rgba(29,207,186,0.16) 0%,transparent 70%)" }} />
      <div style={{ position: "absolute", bottom: -100, left: "15%", width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.05) 0%,transparent 70%)" }} />
      <div style={{ position: "absolute", top: "30%", left: "-5%", width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,0,0,0.15) 0%,transparent 70%)" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="cff rv" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 48, flexWrap: "wrap" }}>
          {/* Left content */}
          <div style={{ flex: 1, minWidth: 320 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", padding: "6px 14px", borderRadius: 100, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", marginBottom: 20, backdropFilter: "blur(8px)" }}>
              <div style={{ width: 7, height: 7, background: "#fff", borderRadius: "50%", animation: "blink 1.8s infinite" }} />
              Currently Accepting New Projects
            </div>
            <h2 className="sy" style={{ fontSize: "clamp(30px,4.2vw,54px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 18 }}>
              Building for Clients<br />Worldwide?
            </h2>
            <p style={{ fontSize: 17, color: "#fff", fontWeight: 300, maxWidth: 500, lineHeight: 1.8, marginBottom: 32 }}>
              We work with clients across India, US, UK, UAE, Singapore, Australia, and Europe. Tell us about your project — we'll respond with scope, timeline, and fixed cost within 24 hours. Zero obligation.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {contactItems.map((item, i) => {
                const Wrapper = item.href ? "a" : "div";
                return (
                  <Wrapper
                    key={i}
                    href={item.href || undefined}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      padding: "14px 18px",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      borderRadius: 12,
                      backdropFilter: "blur(8px)",
                      width: "fit-content",
                      color: "inherit",
                      textDecoration: "none",
                    }}
                  >
                    <div style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(255,255,255,0.12)", display: "grid", placeItems: "center", color: "#fff" }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>{item.label}</div>
                      <div style={{ fontSize: 14, color: "#fff", fontWeight: 500 }}>{item.value}</div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* Form card */}
          <div style={{ flexShrink: 0, width: "100%", maxWidth: 420 }}>
            <form
              onSubmit={handleSubmit}
              noValidate
              style={{ background: "rgba(11,25,41,0.55)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 24, padding: "36px 32px", backdropFilter: "blur(16px)", boxShadow: "0 24px 60px rgba(0,0,0,0.25)" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: "linear-gradient(135deg,var(--color-accent-700),var(--color-accent))", display: "grid", placeItems: "center" }}>
                  <Briefcase size={20} color="#fff" />
                </div>
                <div>
                  <h3 className="sy" style={{ fontSize: 20, fontWeight: 700 }}>Get Your Free Estimate</h3>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>Fill this form — we'll reply within 24 hours</p>
                </div>
              </div>

              {status === "success" ? (
                <div style={{ textAlign: "center", padding: "40px 20px" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(29,207,186,0.15)", border: "1px solid rgba(29,207,186,0.3)", display: "grid", placeItems: "center", margin: "0 auto 20px" }}>
                    <CheckCircle size={32} color="var(--color-accent)" />
                  </div>
                  <h4 className="sy" style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Enquiry Sent!</h4>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", marginBottom: 24 }}>We'll get back to you with scope, timeline, and cost shortly.</p>
                  <button
                    type="button"
                    onClick={() => setStatus(null)}
                    style={{ padding: "10px 20px", background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 8, color: "#fff", fontSize: 13, fontWeight: 500, cursor: "pointer" }}
                  >
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <>
                  {FIELDS.map((f) => {
                    const inputId = `cta-${f.key}`;
                    const showError = touched[f.key] && errors[f.key];
                    return (
                      <div key={f.key} style={{ marginBottom: 14 }}>
                        <label htmlFor={inputId} style={{ display: "block", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.85)", marginBottom: 6 }}>
                          {f.label}
                          {f.required && <span style={{ color: "var(--color-error)", marginLeft: 3 }}>*</span>}
                        </label>
                        <div style={{ position: "relative" }}>
                          <div style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.45)", pointerEvents: "none" }}>{f.icon}</div>
                          <input
                            id={inputId}
                            name={f.key}
                            type={f.type}
                            placeholder={f.placeholder}
                            value={form[f.key]}
                            onChange={(e) => handleChange(f.key, e.target.value)}
                            onBlur={() => handleBlur(f.key)}
                            required={f.required}
                            aria-invalid={showError ? "true" : "false"}
                            aria-describedby={showError ? `${inputId}-error` : undefined}
                            style={{
                              width: "100%",
                              padding: "12px 14px 12px 40px",
                              background: "rgba(255,255,255,0.06)",
                              border: `1px solid ${showError ? "rgba(248,113,113,0.5)" : "rgba(255,255,255,0.12)"}`,
                              borderRadius: 10,
                              color: "#fff",
                              fontSize: 14,
                              outline: "none",
                              transition: "all 0.2s ease",
                            }}
                          />
                        </div>
                        {showError && <div id={`${inputId}-error`} style={{ fontSize: 11, color: "var(--color-error)", marginTop: 5 }}>{errors[f.key]}</div>}
                      </div>
                    );
                  })}

                  <div style={{ marginBottom: 18 }}>
                    <label htmlFor="cta-service" style={{ display: "block", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.85)", marginBottom: 6 }}>
                      Service Interested In
                    </label>
                    <div style={{ position: "relative" }}>
                      <select
                        id="cta-service"
                        name="service"
                        value={form.service}
                        onChange={(e) => handleChange("service", e.target.value)}
                        style={{
                          width: "100%",
                          padding: "12px 14px",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          borderRadius: 10,
                          color: form.service ? "#fff" : "rgba(255,255,255,0.45)",
                          fontSize: 14,
                          outline: "none",
                          cursor: "pointer",
                          appearance: "none",
                        }}
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                      <div style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "rgba(255,255,255,0.45)", pointerEvents: "none" }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                      </div>
                    </div>
                  </div>

                  {status === "error" && (
                    <div style={{ padding: "10px 14px", background: "rgba(248,113,113,0.1)", border: "1px solid rgba(248,113,113,0.25)", borderRadius: 8, marginBottom: 16 }}>
                      <p style={{ fontSize: 13, color: "var(--color-error)" }}>Something went wrong. Please try again or email us directly.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="estimate-submit"
                    style={{
                      width: "100%",
                      padding: "15px",
                      background: "linear-gradient(135deg,#fff,#e6fffa)",
                      color: "var(--color-accent-700)",
                      border: "none",
                      borderRadius: 10,
                      fontSize: 15,
                      fontWeight: 700,
                      cursor: loading ? "not-allowed" : "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                      boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
                      fontFamily: "inherit",
                      opacity: loading ? 0.75 : 1,
                      transition: "all 0.25s ease",
                    }}
                  >
                    {loading ? (
                      <><Loader2 size={18} style={{ animation: "spin 1s linear infinite" }} /> Sending...</>
                    ) : (
                      <>Send My Free Estimate <ArrowRight size={18} className="estimate-submit-arrow" style={{ transition: "transform 0.25s ease" }} /></>
                    )}
                  </button>

                  <p style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", textAlign: "center", marginTop: 14 }}>We respond within 24 hours · No spam · No obligation</p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
