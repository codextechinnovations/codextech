import { useState, useEffect, useRef, useCallback } from "react";
import {
  Menu, X, ArrowRight, Check, Smartphone, Globe, Cloud, Brain,
  Palette, Star, Zap, Shield, Clock, Users, TrendingUp, Code2,
  Rocket, Search, Database, Award, Target, GitBranch, Cpu,
  Mail, Layers, Server, BarChart2, Lock, Repeat, Monitor,
  ChevronRight, Phone, MapPin, ChevronDown, ChevronUp
} from "lucide-react";



/* ─────────────────────────────────────────────────────────────
   CUSTOM HOOKS
───────────────────────────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".rv,.rl,.rr");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("v"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useCounter(target, duration = 2000, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();
    const step = (now) => {
      const p = Math.min((now - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setValue(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return value;
}

/* ─────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────── */
const WORKFLOW = [
  {
    num: "01", icon: <Search size={22} />, label: "Discovery & Audit",
    title: "We Find the Real Problem Before We Build the Solution",
    desc: "Most projects fail because teams skip this step. We spend dedicated time understanding your business model, user psychology, competitive landscape, and technical constraints. The result: a crystal-clear problem definition that guides every decision forward.",
    deliverables: ["Business requirements document", "User persona mapping", "Competitor analysis report", "Technical feasibility assessment"],
    time: "Week 1–2",
  },
  {
    num: "02", icon: <Target size={22} />, label: "Strategy & Blueprint",
    title: "Architecture That's Built to Scale From Day One",
    desc: "We design the technical architecture, choose the right stack, define APIs, and create a milestone-driven roadmap. You'll know exactly what gets built, when it ships, and what it costs — before we write a single line of code.",
    deliverables: ["Technical architecture document", "Stack recommendation report", "Sprint-by-sprint roadmap", "Fixed-price contract"],
    time: "Week 2–3",
  },
  {
    num: "03", icon: <Palette size={22} />, label: "UI/UX Design",
    title: "Designs Your Users Actually Want to Use",
    desc: "Beautiful is only half the goal. We build interactive prototypes grounded in UX research, validate them with real users, and iterate until conversion metrics prove the design works. Then — and only then — we hand it to developers.",
    deliverables: ["User journey maps", "Wireframes & hi-fi mockups", "Interactive Figma prototype", "Design system & component library"],
    time: "Week 3–6",
  },
  {
    num: "04", icon: <Code2 size={22} />, label: "Agile Development",
    title: "Two-Week Sprints. Zero Surprises. Full Visibility.",
    desc: "You're never left wondering what's happening. Daily async standups, weekly live demos, and a shared project board mean you see every commit, every screen, every decision — in real time. Our senior engineers own the code like it's their own product.",
    deliverables: ["Working software every 2 weeks", "CI/CD pipeline", "Automated test suite", "Weekly video demo calls"],
    time: "Week 6–16",
  },
  {
    num: "05", icon: <Shield size={22} />, label: "QA & Performance",
    title: "Shipped Means Tested. On Every Device. At Every Edge.",
    desc: "Our QA team runs cross-device testing, security audits, load testing at 10× expected traffic, and Core Web Vitals optimization before you see a launch date. We don't push to production until the numbers prove it's ready.",
    deliverables: ["Cross-device test reports", "Security vulnerability scan", "Performance audit (Lighthouse 95+)", "UAT sign-off"],
    time: "Week 14–16",
  },
  {
    num: "06", icon: <TrendingUp size={22} />, label: "Launch & Scale",
    title: "Launch Day Is the Beginning, Not the End",
    desc: "Zero-downtime deployment, real-time monitoring, and a 6-month free bug-fix warranty. Post-launch, we deliver monthly analytics reports with actionable growth recommendations — because your success directly fuels ours.",
    deliverables: ["Production deployment", "Monitoring & alerting setup", "6-month free warranty", "Monthly growth reports"],
    time: "Week 16+",
  },
];

const SERVICES_GRID = [
  {
    icon: <Cloud size={24} />, title: "Cloud & DevOps Engineering",
    desc: "Cut infrastructure costs by 40% and hit 99.9% uptime. We design resilient cloud architectures, automate CI/CD pipelines, and ensure your product scales without engineering heroics.",
    tags: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: <Brain size={24} />, title: "AI & Intelligent Automation",
    desc: "From LLM-powered chatbots to custom ML models, we embed intelligence into your product that creates real competitive moats — not demo-only features.",
    tags: ["OpenAI", "LangChain", "TensorFlow", "Python", "RAG", "Fine-tuning"],
  },
  {
    icon: <BarChart2 size={24} />, title: "Product Analytics & CRO",
    desc: "We instrument your product with the right analytics, run A/B tests, and deliver monthly conversion optimization reports. Data-driven decisions, not gut feelings.",
    tags: ["Mixpanel", "Amplitude", "A/B Testing", "Heatmaps", "Funnel Analysis"],
  },
];

const DIFFERENTIATORS = [
  { icon: <Award size={20} />, title: "Senior Engineers Only", desc: "Every developer on your project has 5+ years of production experience. No juniors, no bait-and-switch after the contract is signed." },
  { icon: <Lock size={20} />, title: "Fixed-Price Contracts", desc: "Agree on scope, timeline, and total cost upfront. Zero scope-creep surprises, hidden fees, or mid-project renegotiations." },
  { icon: <GitBranch size={20} />, title: "Full Source Code Ownership", desc: "You own 100% of the codebase from day one. No vendor lock-in, no proprietary frameworks, no hostage situations." },
  { icon: <Zap size={20} />, title: "12–16 Week Delivery", desc: "From signed contract to live product in 12–16 weeks — without cutting corners on architecture, security, or scalability." },
  { icon: <Users size={20} />, title: "Dedicated Project Manager", desc: "One senior PM as your single point of contact. Daily updates, weekly demos, and full transparency through a shared dashboard." },
  { icon: <Repeat size={20} />, title: "6-Month Free Warranty", desc: "We stand behind every product with 6 months of free bug fixes post-launch. Because great software is a commitment, not a transaction." },
];

const TECH_STACK = {
  "Mobile": ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Capacitor"],
  "Frontend": ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Redux"],
  "Backend": ["Node.js", "Python", "Go", "Java Spring", "GraphQL", "REST APIs"],
  "Database": ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase", "Prisma"],
  "Cloud": ["AWS", "Google Cloud", "Azure", "Firebase", "Vercel", "Cloudflare"],
  "DevOps & AI": ["Docker", "Kubernetes", "CI/CD", "Terraform", "OpenAI", "LangChain"],
};

const PRODUCTS = [
  {
    id: "pg-management",
    name: "PG Management System",
    tagline: "The all-in-one OS for paying guest businesses",
    desc: "End-to-end platform for PG owners to manage bookings, automate rent collection, handle tenant onboarding, and track occupancy — all from a single dashboard. Cuts admin time by 70%.",
    category: "Property Tech",
    emoji: "🏠",
    color: "#0e7f72",
    accent: "#1dcfba",
    features: ["Online booking & room allocation", "Automated rent reminders & payment gateway", "Tenant KYC & digital agreements", "Maintenance request tracking", "Occupancy & revenue analytics dashboard"],
    tags: ["React", "Node.js", "PostgreSQL", "Razorpay", "AWS"],
    status: "Live",
    badge: "🏆 Best Seller",
  },
  {
    id: "hostel-management",
    name: "Hostel Management System",
    tagline: "Complete hostel ops, from admission to alumni",
    desc: "A comprehensive administration platform built for educational institutions — covering room allocation, mess management, fee collection, student tracking, and parent communication portals.",
    category: "Education Tech",
    emoji: "🎓",
    color: "#1565c0",
    accent: "#42a5f5",
    features: ["Smart room allocation engine", "Mess plan & meal tracking", "Fee management & receipt generation", "Student attendance & conduct records", "Parent portal with real-time updates"],
    tags: ["React Native", "Next.js", "MongoDB", "Firebase", "Stripe"],
    status: "Live",
    badge: "📚 EdTech Pick",
  },
  {
    id: "hotel-management",
    name: "Hotel Management System",
    tagline: "Full-stack hospitality operations software",
    desc: "A hotel-grade PMS that handles everything from online reservations and front desk check-ins to housekeeping workflows, POS billing, and guest satisfaction tracking — built for properties of all sizes.",
    category: "Hospitality Tech",
    emoji: "🏨",
    color: "#6a1560",
    accent: "#ce93d8",
    features: ["Real-time reservation & channel management", "Front desk & housekeeping workflows", "Multi-channel online booking engine", "POS billing & room service management", "Guest feedback & loyalty programs"],
    tags: ["React", "Python", "PostgreSQL", "Stripe", "Redis"],
    status: "Live",
    badge: "⭐ Enterprise Grade",
  },
  {
    id: "ca-compliance",
    name: "Compliance & CA Manager",
    tagline: "GST, ITR and compliance — on autopilot",
    desc: "A FinTech workflow platform that streamlines compliance tracking, client management, and CA operations. Automates GST filing reminders, ITR status tracking, and document collection — saving firms 15+ hours per week.",
    category: "FinTech",
    emoji: "📊",
    color: "#b45309",
    accent: "#fbbf24",
    features: ["GST & ITR deadline automation", "Client document vault & e-sign", "Compliance calendar & alerts", "Multi-user CA team workspace", "Billing & invoice management"],
    tags: ["React", "Node.js", "MySQL", "AWS S3", "Razorpay"],
    status: "Live",
    badge: "💰 FinTech Ready",
  },
  {
    id: "store-management",
    name: "Store Management System",
    tagline: "Retail intelligence from POS to purchase orders",
    desc: "A robust retail platform with an integrated POS, real-time inventory tracking, supplier management, and sales analytics. Designed for both single outlets and multi-branch retail chains.",
    category: "Retail Tech",
    emoji: "🛒",
    color: "#155e2e",
    accent: "#4ade80",
    features: ["Touchscreen POS with barcode scanning", "Real-time stock & reorder alerts", "Multi-branch inventory management", "Supplier & purchase order system", "Sales reports & profitability analytics"],
    tags: ["React", "Electron", "Node.js", "SQLite", "Thermal Print"],
    status: "Live",
    badge: "🏪 Retail Ready",
  },
  {
    id: "omf-food-delivery",
    name: "OMF Food Delivery App",
    tagline: "The Swiggy experience, built for your brand",
    desc: "A white-label food delivery platform connecting customers with restaurants via a slick consumer app, a restaurant partner dashboard, and a delivery agent app — all in one ecosystem. Live GPS tracking included.",
    category: "Food Tech",
    emoji: "🍔",
    color: "#b91c1c",
    accent: "#f87171",
    features: ["Customer iOS & Android app", "Restaurant owner dashboard", "Delivery partner app with live GPS", "Real-time order tracking", "Ratings, promos & loyalty wallet"],
    tags: ["React Native", "Node.js", "Socket.io", "Google Maps", "Razorpay"],
    status: "Live",
    badge: "🚀 Food Tech",
  },
  {
    id: "wroggle",
    name: "Wroggle Clothing Store",
    tagline: "Fashion e-commerce with intelligence built in",
    desc: "A next-generation fashion retail platform with smart size recommendations, look-builder tools, and a full inventory management backend. Built for D2C fashion brands ready to scale online.",
    category: "Fashion Tech",
    emoji: "👗",
    color: "#7c1076",
    accent: "#e879f9",
    features: ["AI-powered size & style recommendations", "Visual look-builder & outfit curator", "Multi-variant inventory management", "Influencer affiliate program module", "Returns & exchange automation"],
    tags: ["Next.js", "React Native", "MongoDB", "Stripe", "Cloudinary"],
    status: "Live",
    badge: "✨ Fashion Tech",
  },
  {
    id: "arthomed",
    name: "Arthomed Hospital System",
    tagline: "Healthcare management for the modern hospital",
    desc: "A ABDM-aligned hospital management solution covering patient registration, OPD/IPD workflows, EMR, pharmacy, lab, and billing — designed to reduce patient wait times and eliminate paperwork.",
    category: "Health Tech",
    emoji: "🏥",
    color: "#0e4f6b",
    accent: "#38bdf8",
    features: ["Patient registration & EMR", "OPD/IPD queue management", "Pharmacy & lab module integration", "Insurance & billing automation", "Doctor scheduling & telemedicine"],
    tags: ["React", "Python", "PostgreSQL", "HL7 FHIR", "ABDM APIs"],
    status: "Live",
    badge: "❤️ Health Tech",
  },
];

const INDUSTRIES = [
  { icon: "🛒", title: "E-Commerce & Retail", desc: "High-conversion storefronts, marketplace platforms, and omnichannel commerce solutions" },
  { icon: "🏥", title: "Healthcare & MedTech", desc: "HIPAA-compliant patient portals, telehealth apps, and clinical workflow automation" },
  { icon: "💰", title: "Fintech & Payments", desc: "Secure payment gateways, digital wallets, lending platforms, and regulatory compliance" },
  { icon: "📚", title: "EdTech & E-Learning", desc: "LMS platforms, live video classrooms, gamified learning, and assessment engines" },
  { icon: "🏗️", title: "Real Estate & PropTech", desc: "Property listing platforms, virtual tours, CRM systems, and investment analytics" },
  { icon: "🚚", title: "Logistics & Supply Chain", desc: "Fleet tracking, last-mile delivery, warehouse management, and demand forecasting" },
  { icon: "🏢", title: "Enterprise SaaS", desc: "B2B platforms, internal tools, ERP integrations, and multi-tenant architectures" },
  { icon: "🎮", title: "Gaming & Entertainment", desc: "Mobile games, streaming platforms, loyalty apps, and real-time leaderboards" },
];

const TESTIMONIALS = [
  {
    name: "Arjun Mehta", role: "CTO, FinVault Technologies", stars: 5,
    text: "CODEX Tech Innovations & Consultants LLP took our fintech app from a napkin sketch to App Store-live in 14 weeks. The architecture they chose handled 10× our projected launch traffic without a single incident. Their senior engineers spotted scalability pitfalls we didn't even know to ask about.",
    metric: "10× traffic handled",
  },
  {
    name: "Sarah Chen", role: "Founder, MediConnect India", stars: 5,
    text: "We'd had two failed app development attempts before CODEX Tech Innovations & Consultants LLP. The difference was night and day — weekly demos, zero scope creep, and a final product our doctors actually want to use daily. Post-launch crash rate: 0.02%. That's exceptional.",
    metric: "0.02% crash rate",
  },
  {
    name: "Rohan Kapoor", role: "Head of Digital, RetailHub", stars: 5,
    text: "Our e-commerce platform went from 3.1s to 0.9s load time after CODEX Tech Innovations & Consultants LLP rebuilt it on Next.js with their custom CDN setup. Conversion rate climbed 38% in the first month. The ROI calculation was easy to make.",
    metric: "+38% conversion rate",
  },
];

const FAQS = [
  { q: "How much does a mobile app typically cost?", a: "Most apps we build range from ₹15L–₹60L depending on complexity, platform (iOS/Android/both), and integrations. We provide a detailed fixed-price quote after a free discovery call — no vague ballparks." },
  { q: "Do you sign NDAs before project discussions?", a: "Absolutely. We sign mutual NDAs before any technical discussion. Your idea stays confidential, and we proactively flag if there's any conflict with existing clients." },
  { q: "What happens to my source code and data?", a: "You own 100% of everything. Source code, design files, database schemas, and all third-party accounts are transferred to you on final payment. No licensing fees, no platform lock-in." },
  { q: "Can you work with our existing team?", a: "Yes — we regularly work as an extension of in-house teams. We can slot into your Jira/Linear, join your standups, and integrate with your existing CI/CD. Collaboration is our default mode." },
  { q: "What does your post-launch support look like?", a: "Every project includes 6 months of free bug fixes. After that, we offer flexible retainer plans starting at ₹40K/month for monitoring, updates, and new feature development." },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────────────────────── */

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = [["Services", "#services"], ["Our Products", "#products"], ["How We Work", "#workflow"], ["Why Us", "#why"], ["Tech Stack", "#tech"]];
  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 70, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5%", background: scrolled ? "rgba(11,25,41,0.97)" : "rgba(11,25,41,0.8)", backdropFilter: "blur(18px)", borderBottom: `1px solid rgba(14,127,114,${scrolled ? 0.25 : 0.15})`, transition: "all 0.3s ease" }}>
        <a href="#" aria-label="CODEX Tech Innovations logo" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <svg width="42" height="42" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }} role="img"><title>CODEX Tech Innovations logo</title>
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
          <span className="sy" style={{ fontWeight: 700, fontSize: 17, letterSpacing: 1, textTransform: "uppercase" }}>CODEX <span style={{ color: "#1dcfba" }}>|</span> <span style={{ fontWeight: 300, color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: 2 }}>Tech Innovations & Consultants LLP</span></span>
        </a>
        <ul className="nm" style={{ display: "flex", alignItems: "center", gap: 32, listStyle: "none" }}>
          {links.map(([label, href]) => (
            <li key={label}><a href={href} className="nl" style={{ fontSize: 14, color: "rgba(255,255,255,0.72)", transition: "color 0.2s" }}>{label}</a></li>
          ))}
          <li><a href="#contact" className="nav-cta" style={{ background: "linear-gradient(135deg,#0e7f72,#12a896)", color: "#fff", padding: "10px 22px", borderRadius: 7, fontSize: 14, fontWeight: 500 }}>Free Consultation</a></li>
        </ul>
        <button className="hb" onClick={() => setOpen(!open)} style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4 }}>
          {open ? <X size={22} color="#fff" /> : <Menu size={22} color="#fff" />}
        </button>
      </nav>
      {open && (
        <div style={{ position: "fixed", top: 70, left: 0, right: 0, background: "rgba(11,25,41,0.98)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(14,127,114,0.2)", zIndex: 99, padding: "16px 5% 24px", display: "flex", flexDirection: "column", gap: 2 }}>
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} style={{ color: "rgba(255,255,255,0.8)", padding: "13px 0", borderBottom: "1px solid rgba(255,255,255,0.06)", fontSize: 16 }}>{label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} style={{ marginTop: 12, background: "linear-gradient(135deg,#0e7f72,#12a896)", color: "#fff", padding: "13px 0", borderRadius: 8, textAlign: "center", fontWeight: 500 }}>Free Consultation</a>
        </div>
      )}
    </>
  );
}

function Hero() {
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
          India's Premium Software Development Studio
        </div>

        <h1 className="sy" style={{ fontSize: "clamp(44px,6.5vw,82px)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.03em", marginBottom: 24, animation: "fadeUp 0.8s ease 0.1s both" }}>
          We Build Digital<br />Products That<br /><span className="gt">Dominate Markets.</span>
        </h1>

        <p style={{ fontSize: 18, color: "rgba(255,255,255,0.62)", lineHeight: 1.75, maxWidth: 530, marginBottom: 16, fontWeight: 300, animation: "fadeUp 0.8s ease 0.2s both" }}>
          150+ apps and platforms shipped. Zero missed deadlines. Senior engineers who treat your product like it's their own — because your growth is the only KPI that matters.
        </p>
        <p style={{ fontSize: 14, color: "rgba(255,255,255,0.38)", marginBottom: 38, animation: "fadeUp 0.8s ease 0.25s both" }}>
          Mobile App Development · Web Development · AI & Cloud
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
      </div>
    </section>
  );
}

function StatItem({ target, suffix, label, delay }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); io.disconnect(); } }, { threshold: 0.3 });
    if (el) io.observe(el);
    return () => io.disconnect();
  }, []);
  const value = useCounter(target, 2200, started);
  return (
    <div ref={ref} style={{ textAlign: "center", padding: "0 24px" }}>
      <div className="sy snum" style={{ fontSize: 48, fontWeight: 800, color: "#1dcfba", lineHeight: 1, animation: started ? "countUp 0.6s ease both" : "none", animationDelay: `${delay}s` }}>{value}{suffix}</div>
      <div style={{ fontSize: 13, color: "#6b8199", marginTop: 6 }}>{label}</div>
    </div>
  );
}

function StatsBar() {
  const stats = [
    { target: 150, suffix: "+", label: "Projects Shipped" },
    { target: 98, suffix: "%", label: "Client Retention Rate" },
    { target: 40, suffix: "+", label: "Senior Engineers" },
    { target: 8, suffix: "+", label: "Years of Excellence" },
  ];
  return (
    <div style={{ background: "#1a2e45", borderTop: "1px solid rgba(14,127,114,0.18)", borderBottom: "1px solid rgba(14,127,114,0.18)", padding: "48px 5%" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0 }}>
        {stats.map((s, i) => (
          <StatItem key={i} target={s.target} suffix={s.suffix} label={s.label} delay={i * 0.1} />
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" style={{ background: "#0b1929", padding: "110px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="rv" style={{ marginBottom: 60 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>What We Build</span>
          <h2 className="sy" style={{ fontSize: "clamp(32px,4vw,54px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 16 }}>End-to-End Engineering.<br />Zero Compromises.</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.52)", fontWeight: 300, maxWidth: 580, lineHeight: 1.75 }}>We don't do "good enough." Every product we ship is engineered for performance, scalability, and the users who will live inside it daily.</p>
        </div>

        {/* FEATURED — Mobile, Web & SaaS */}
        <div className="f2 rv" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20, marginBottom: 20 }}>
          {/* Mobile */}
          <div className="fcard" style={{ background: "linear-gradient(135deg,#0d2a3d 0%,#0b1e2f 100%)", border: "1px solid rgba(29,207,186,0.22)", borderRadius: 22, padding: "44px 40px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,rgba(29,207,186,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div style={{ display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", background: "rgba(29,207,186,0.1)", border: "1px solid rgba(29,207,186,0.25)", padding: "4px 12px", borderRadius: 100, marginBottom: 20 }}>⭐ Core Service</div>
            <div style={{ fontSize: 36, marginBottom: 16 }}>📱</div>
            <h3 className="sy" style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 14 }}>Your App Won't<br />Just Exist — It'll<br />Become a <span className="gt">Habit.</span></h3>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.58)", lineHeight: 1.75, fontWeight: 300, marginBottom: 28 }}>62% of users open their favourite apps multiple times a day. We engineer for that habit loop — from pixel-perfect UI to crash-free performance at scale.</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {["iOS & Android native apps", "React Native & Flutter cross-platform", "UI/UX design to App Store submission", "Push notifications, offline-first & analytics", "ASO & post-launch performance monitoring"].map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.72)" }}>
                  <Check size={15} color="#1dcfba" style={{ flexShrink: 0 }} />{f}
                </li>
              ))}
            </ul>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#1dcfba", fontSize: 14, fontWeight: 500 }}>Start your app project <ChevronRight size={15} /></a>
          </div>

          {/* Web */}
          <div className="fcard" style={{ background: "linear-gradient(135deg,#0e2032 0%,#1a2e45 100%)", border: "1px solid rgba(14,127,114,0.25)", borderRadius: 22, padding: "44px 40px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,rgba(14,127,114,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div style={{ display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", background: "rgba(29,207,186,0.1)", border: "1px solid rgba(29,207,186,0.25)", padding: "4px 12px", borderRadius: 100, marginBottom: 20 }}>⭐ Core Service</div>
            <div style={{ fontSize: 36, marginBottom: 16 }}>🌐</div>
            <h3 className="sy" style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 14 }}>A Website That<br />Earns Its Place in<br />Your <span className="gt">Sales Funnel.</span></h3>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.58)", lineHeight: 1.75, fontWeight: 300, marginBottom: 28 }}>Your website is your best salesperson — it works 24/7, never asks for a raise, and can reach millions simultaneously. We build it to convert, rank, and scale.</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
              {["SEO-optimised architecture from day one", "Core Web Vitals 95+ Lighthouse score", "SaaS platforms, portals & e-commerce", "Headless CMS & API-first development", "Conversion Rate Optimisation built-in"].map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.72)" }}>
                  <Check size={15} color="#1dcfba" style={{ flexShrink: 0 }} />{f}
                </li>
              ))}
            </ul>
            <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#1dcfba", fontSize: 14, fontWeight: 500 }}>Launch your website <ChevronRight size={15} /></a>
          </div>

          {/* SaaS */}
          <div className="fcard saas-card" style={{ background: "linear-gradient(135deg,#0a1e30 0%,#112035 60%,#0b2a20 100%)", border: "1px solid rgba(29,207,186,0.3)", borderRadius: 22, padding: "44px 40px", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 260, height: 260, borderRadius: "50%", background: "radial-gradient(circle,rgba(29,207,186,0.12) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: -40, left: -40, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle,rgba(14,127,114,0.1) 0%,transparent 70%)", pointerEvents: "none" }} />
            <div style={{ display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", background: "rgba(29,207,186,0.12)", border: "1px solid rgba(29,207,186,0.3)", padding: "4px 12px", borderRadius: 100, marginBottom: 20 }}>⭐ Core Service</div>
            <div style={{ fontSize: 36, marginBottom: 16 }}>☁️</div>
            <h3 className="sy" style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 14 }}>SaaS That Scales<br />From Startup to<br /><span className="gt">Enterprise.</span></h3>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.56)", lineHeight: 1.75, fontWeight: 300, marginBottom: 24 }}>We've built SaaS products across 8+ verticals. Multi-tenant architecture, subscription billing, onboarding flows, and analytics — done right from day one.</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 9, marginBottom: 28 }}>
              {["Multi-tenant SaaS architecture", "Subscription & usage-based billing", "Role-based access & team workspaces", "API-first with partner integrations", "In-app onboarding & feature adoption"].map((f, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                  <Check size={14} color="#1dcfba" style={{ flexShrink: 0 }} />{f}
                </li>
              ))}
            </ul>
            <a href="#products" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "#1dcfba", fontSize: 14, fontWeight: 500 }}>See our SaaS products <ChevronRight size={15} /></a>
          </div>
        </div>

        {/* Secondary services */}
        <div className="sg rv" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "rgba(14,127,114,0.15)", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 20, overflow: "hidden" }}>
          {SERVICES_GRID.map((s, i) => (
            <div key={i} className="scard" style={{ background: "#0b1929", padding: "36px 30px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#0e7f72,#1dcfba)", transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.3s ease" }} className="scard-line" />
              <div style={{ width: 50, height: 50, background: "rgba(14,127,114,0.12)", border: "1px solid rgba(14,127,114,0.25)", borderRadius: 12, display: "grid", placeItems: "center", marginBottom: 22, color: "#1dcfba" }}>{s.icon}</div>
              <h3 className="sy" style={{ fontSize: 19, fontWeight: 700, marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: "#6b8199", lineHeight: 1.7, marginBottom: 18 }}>{s.desc}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {s.tags.map((t, j) => <span key={j} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 100, background: "rgba(14,127,114,0.1)", color: "#1dcfba", border: "1px solid rgba(29,207,186,0.2)", fontWeight: 500 }}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);
  const progressRef = useRef(null);
  const DURATION = 4000;
  const hasStarted = useRef(false);

  const startProgress = useCallback(() => {
    clearInterval(timerRef.current);
    clearInterval(progressRef.current);
    setProgress(0);
    let p = 0;
    progressRef.current = setInterval(() => {
      p += 100 / (DURATION / 50);
      if (p >= 100) { p = 100; clearInterval(progressRef.current); }
      setProgress(p);
    }, 50);
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % WORKFLOW.length);
    }, DURATION);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !hasStarted.current) {
        hasStarted.current = true;
        startProgress();
      }
    }, { threshold: 0.2 });
    if (sectionRef.current) io.observe(sectionRef.current);
    return () => {
      clearTimeout(timerRef.current);
      clearInterval(progressRef.current);
      io.disconnect();
    };
  }, [startProgress]);

  const w = WORKFLOW[active];

  return (
    <section id="workflow" ref={sectionRef} style={{ background: "#1a2e45", padding: "110px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="rv" style={{ marginBottom: 60 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Our Process</span>
          <h2 className="sy" style={{ fontSize: "clamp(32px,4vw,54px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 16 }}>How We Turn Your<br />Vision Into Reality</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: 560, lineHeight: 1.75 }}>A battle-tested, six-phase process refined across 150+ projects. Transparent, milestone-driven, and engineered for results — not just activity.</p>
        </div>

        {/* STEPPER — horizontal desktop */}
        <div className="wfh rv" style={{ display: "flex", alignItems: "flex-start", gap: 0, marginBottom: 40, position: "relative" }}>
          {WORKFLOW.map((step, i) => {
            const isActive = active === i;
            const isPast = i < active;
            return (
              <div key={i} className="wstep" onClick={() => { setActive(i); setProgress(0); }} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 12, position: "relative" }}>
                {/* connector line */}
                {i < WORKFLOW.length - 1 && (
                  <div style={{ position: "absolute", left: "50%", top: 22, right: "-50%", height: 2, background: isPast || (isActive && progress > 10) ? "linear-gradient(90deg,#0e7f72,#1dcfba)" : "rgba(14,127,114,0.2)", transition: "background 0.5s ease", zIndex: 0 }}>
                    {isActive && (
                      <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg,#0e7f72,#1dcfba)", transition: "width 0.05s linear" }} />
                    )}
                  </div>
                )}
                {/* circle */}
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: isActive ? "linear-gradient(135deg,#0e7f72,#1dcfba)" : isPast ? "rgba(14,127,114,0.5)" : "rgba(14,127,114,0.15)", border: isActive ? "none" : "1px solid rgba(14,127,114,0.3)", display: "grid", placeItems: "center", zIndex: 1, position: "relative", transition: "all 0.35s ease", animation: isActive ? "glow 2s ease infinite" : "none", color: isActive ? "#fff" : isPast ? "#1dcfba" : "#6b8199" }}>
                  {isPast ? <Check size={18} /> : <span className="sy" style={{ fontWeight: 700, fontSize: 13 }}>{step.num}</span>}
                </div>
                <div style={{ fontSize: 12, fontWeight: isActive ? 600 : 400, color: isActive ? "#1dcfba" : "rgba(255,255,255,0.45)", textAlign: "center", lineHeight: 1.4, transition: "color 0.3s" }}>{step.label}</div>
              </div>
            );
          })}
        </div>

        {/* ACTIVE STEP CONTENT */}
        <div className="rv" style={{ background: "#0b1929", border: "1px solid rgba(14,127,114,0.2)", borderRadius: 20, padding: "44px 40px", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "rgba(14,127,114,0.1)" }}>
            <div style={{ height: "100%", width: `${progress}%`, background: "linear-gradient(90deg,#0e7f72,#1dcfba)", transition: "width 0.05s linear", transformOrigin: "left" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="g2">
            <div key={active} style={{ animation: "fadeUp 0.5s ease both" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 48, height: 48, background: "linear-gradient(135deg,#0e7f72,#1dcfba)", borderRadius: 12, display: "grid", placeItems: "center", color: "#fff" }}>{w.icon}</div>
                <div>
                  <div style={{ fontSize: 11, color: "#1dcfba", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}>Phase {w.num}</div>
                  <div className="sy" style={{ fontSize: 15, fontWeight: 700 }}>{w.label}</div>
                </div>
                <div style={{ marginLeft: "auto", fontSize: 11, color: "rgba(255,255,255,0.35)", background: "rgba(14,127,114,0.1)", padding: "4px 10px", borderRadius: 6 }}>{w.time}</div>
              </div>
              <h3 className="sy" style={{ fontSize: "clamp(20px,2.5vw,28px)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16 }}>{w.title}</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.58)", lineHeight: 1.8, fontWeight: 300 }}>{w.desc}</p>
            </div>
            <div key={`d-${active}`} style={{ animation: "fadeUp 0.5s ease 0.1s both" }}>
              <div style={{ fontSize: 12, color: "#1dcfba", letterSpacing: "0.09em", textTransform: "uppercase", fontWeight: 700, marginBottom: 18 }}>Deliverables You'll Receive</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {w.deliverables.map((d, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "14px 18px", background: "rgba(14,127,114,0.07)", border: "1px solid rgba(14,127,114,0.15)", borderRadius: 10 }}>
                    <div style={{ width: 28, height: 28, background: "rgba(14,127,114,0.2)", borderRadius: 7, display: "grid", placeItems: "center", flexShrink: 0 }}>
                      <Check size={14} color="#1dcfba" />
                    </div>
                    <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)" }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MOBILE: vertical workflow */}
        <div className="wfv" style={{ display: "none", flexDirection: "column", gap: 0, marginTop: 32 }}>
          {WORKFLOW.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 16, paddingBottom: 28, position: "relative" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: i <= active ? "linear-gradient(135deg,#0e7f72,#1dcfba)" : "rgba(14,127,114,0.15)", border: "1px solid rgba(14,127,114,0.3)", display: "grid", placeItems: "center", color: "#fff", flexShrink: 0 }}>
                  <span className="sy" style={{ fontWeight: 700, fontSize: 13 }}>{step.num}</span>
                </div>
                {i < WORKFLOW.length - 1 && <div style={{ width: 2, flex: 1, minHeight: 30, marginTop: 6, background: i < active ? "#0e7f72" : "rgba(14,127,114,0.2)" }} />}
              </div>
              <div style={{ paddingTop: 8, paddingBottom: 8 }}>
                <div className="sy" style={{ fontWeight: 700, fontSize: 16, marginBottom: 6, color: i === active ? "#1dcfba" : "#fff" }}>{step.label}</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.65, fontWeight: 300 }}>{step.desc.slice(0, 120)}…</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyCodeX() {
  return (
    <section id="why" style={{ background: "#0b1929", padding: "110px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="g2">
          <div className="rl">
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Why CODEX Tech Innovations & Consultants LLP</span>
            <h2 className="sy" style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 20 }}>A Partner Who Thinks<br />Beyond the Deadline</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.52)", fontWeight: 300, lineHeight: 1.8, marginBottom: 36 }}>
              Most dev agencies are factories. We're a studio. Every engineer on your project has skin in the game — we measure success by your revenue growth, not our hours billed.
            </p>
            <div style={{ padding: "20px 24px", background: "rgba(14,127,114,0.1)", border: "1px solid rgba(29,207,186,0.2)", borderRadius: 14, borderLeft: "3px solid #1dcfba" }}>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.75, fontStyle: "italic" }}>
                "We've worked with 3 agencies before CODEX Tech Innovations & Consultants LLP. The difference is they actually care about whether the product succeeds in the market — not just whether it passed QA."
              </p>
              <div style={{ marginTop: 12, fontSize: 13, color: "#1dcfba", fontWeight: 500 }}>— Vikram Singh, CEO at Growfast</div>
            </div>
          </div>

          <div className="rr" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {DIFFERENTIATORS.map((d, i) => (
              <div key={i} className="diff-card" style={{ display: "flex", alignItems: "flex-start", gap: 16, padding: "20px 22px", background: "rgba(14,127,114,0.05)", border: "1px solid rgba(14,127,114,0.15)", borderRadius: 14, transitionDelay: `${i * 0.05}s` }}>
                <div style={{ width: 40, height: 40, background: "rgba(14,127,114,0.15)", border: "1px solid rgba(14,127,114,0.25)", borderRadius: 10, display: "grid", placeItems: "center", color: "#1dcfba", flexShrink: 0 }}>{d.icon}</div>
                <div>
                  <div className="sy" style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{d.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>{d.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section id="tech" style={{ background: "#1a2e45", padding: "110px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="rv" style={{ marginBottom: 56, display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
          <div>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Our Stack</span>
            <h2 className="sy" style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Modern, Battle-Tested<br />Technology Stack</h2>
          </div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.48)", fontWeight: 300, maxWidth: 380, lineHeight: 1.75 }}>We choose the right tool for every challenge. No dogma — just engineering judgment that serves your users and your business.</p>
        </div>
        <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {Object.entries(TECH_STACK).map(([category, techs], ci) => (
            <div key={ci}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 12 }}>{category}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {techs.map((t, ti) => (
                  <div key={ti} className="tpill" style={{ padding: "9px 18px", borderRadius: 8, border: "1px solid rgba(14,127,114,0.2)", background: "rgba(14,127,114,0.04)", fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 7 }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#0e7f72", flexShrink: 0 }} />{t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section id="industries" style={{ background: "#0b1929", padding: "110px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="rv" style={{ marginBottom: 52 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Industry Focus</span>
          <h2 className="sy" style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 14 }}>Solutions Across<br />Every Vertical</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: 520, lineHeight: 1.75 }}>Deep domain expertise means we speak your industry's language — regulatory requirements, user expectations, and all.</p>
        </div>
        <div className="ig rv" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
          {INDUSTRIES.map((ind, i) => (
            <div key={i} className="icard" style={{ background: "#1a2e45", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 16, padding: "28px 22px", textAlign: "center", transitionDelay: `${i * 0.05}s` }}>
              <div style={{ fontSize: 34, marginBottom: 14 }}>{ind.icon}</div>
              <div className="sy" style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>{ind.title}</div>
              <div style={{ fontSize: 12, color: "#6b8199", lineHeight: 1.65 }}>{ind.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OurProducts() {
  const categories = ["All", "Property Tech", "Education Tech", "Hospitality Tech", "FinTech", "Retail Tech", "Food Tech", "Fashion Tech", "Health Tech"];
  const [active, setActive] = useState("All");
  const [animKey, setAnimKey] = useState(0);
  const [hovered, setHovered] = useState(null);

  const filtered = active === "All" ? PRODUCTS : PRODUCTS.filter(p => p.category === active);

  const handleCat = (cat) => {
    setActive(cat);
    setAnimKey(k => k + 1);
  };

  return (
    <section id="products" style={{ background: "#0b1929", padding: "110px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div className="rv" style={{ marginBottom: 52 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Our Products & Solutions</span>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
            <div>
              <h2 className="sy" style={{ fontSize: "clamp(30px,4vw,54px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 14 }}>Innovative SaaS Products<br />We've Built & Shipped</h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", fontWeight: 300, maxWidth: 520, lineHeight: 1.75 }}>8 industry-specific platforms live in production. Each one solving real problems for real businesses across India. Not concepts — shipped products.</p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "16px 22px", background: "rgba(14,127,114,0.08)", border: "1px solid rgba(14,127,114,0.2)", borderRadius: 14 }}>
              <div style={{ fontSize: 28, lineHeight: 1 }}>🏗️</div>
              <div>
                <div className="sy" style={{ fontSize: 22, fontWeight: 800, color: "#1dcfba" }}>8 Products</div>
                <div style={{ fontSize: 12, color: "#6b8199", marginTop: 2 }}>Live in Production</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category filter */}
        <div className="rv" style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
          {categories.map((cat) => (
            <button key={cat} className="pcat-btn" onClick={() => handleCat(cat)}
              style={{ padding: "8px 18px", borderRadius: 100, border: `1px solid ${active === cat ? "rgba(29,207,186,0.6)" : "rgba(14,127,114,0.2)"}`, background: active === cat ? "rgba(29,207,186,0.12)" : "transparent", color: active === cat ? "#1dcfba" : "rgba(255,255,255,0.55)", fontSize: 13, fontWeight: active === cat ? 600 : 400, fontFamily: "inherit", outline: "none" }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div key={animKey} style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }} className="rv ig4">
          {filtered.map((p, i) => (
            <div key={p.id} className="pcard pen" onMouseEnter={() => setHovered(p.id)} onMouseLeave={() => setHovered(null)}
              style={{ animationDelay: `${i * 0.07}s`, background: hovered === p.id ? `rgba(${hexToRgb(p.color)},0.12)` : "#1a2e45", border: `1px solid ${hovered === p.id ? p.accent + "55" : "rgba(14,127,114,0.18)"}`, borderRadius: 20, overflow: "hidden", position: "relative" }}>
              {/* Top color strip */}
              <div style={{ height: 4, background: `linear-gradient(90deg,${p.color},${p.accent})`, borderRadius: "0" }} />
              <div style={{ padding: "24px 22px 28px" }}>
                {/* Badge + Category */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: p.accent, background: `rgba(${hexToRgb(p.accent)},0.1)`, border: `1px solid rgba(${hexToRgb(p.accent)},0.25)`, padding: "3px 9px", borderRadius: 100 }}>{p.category}</span>
                  <span style={{ fontSize: 11, padding: "3px 8px", background: "rgba(29,207,186,0.1)", color: "#1dcfba", borderRadius: 6, fontWeight: 600 }}>● Live</span>
                </div>
                {/* Icon & Name */}
                <div style={{ fontSize: 40, marginBottom: 12, lineHeight: 1 }}>{p.emoji}</div>
                <h3 className="sy" style={{ fontSize: 17, fontWeight: 800, lineHeight: 1.2, marginBottom: 8, letterSpacing: "-0.01em" }}>{p.name}</h3>
                <p style={{ fontSize: 12, color: p.accent, fontWeight: 600, marginBottom: 10 }}>{p.tagline}</p>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.52)", lineHeight: 1.7, marginBottom: 18, fontWeight: 300 }}>{p.desc}</p>
                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 18 }}>
                  {p.features.slice(0, 3).map((f, fi) => (
                    <div key={fi} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: "rgba(255,255,255,0.65)" }}>
                      <div style={{ width: 14, height: 14, borderRadius: "50%", background: `rgba(${hexToRgb(p.accent)},0.15)`, border: `1px solid rgba(${hexToRgb(p.accent)},0.3)`, display: "grid", placeItems: "center", flexShrink: 0 }}>
                        <Check size={9} color={p.accent} />
                      </div>
                      {f}
                    </div>
                  ))}
                  {p.features.length > 3 && (
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", paddingLeft: 22 }}>+{p.features.length - 3} more features</div>
                  )}
                </div>
                {/* Tech tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 20 }}>
                  {p.tags.slice(0, 3).map((t, ti) => (
                    <span key={ti} style={{ fontSize: 10, padding: "3px 8px", borderRadius: 5, background: "rgba(14,127,114,0.1)", color: "#1dcfba", border: "1px solid rgba(29,207,186,0.15)", fontWeight: 500 }}>{t}</span>
                  ))}
                </div>
                {/* Badge + CTA */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.45)" }}>{p.badge}</span>
                  <a href={`/?product=${p.id}`} style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, color: p.accent, fontWeight: 600 }}>
                    Learn more <ChevronRight size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="rv" style={{ marginTop: 52, padding: "36px 40px", background: "linear-gradient(135deg,rgba(14,127,114,0.12),rgba(29,207,186,0.05))", border: "1px solid rgba(29,207,186,0.2)", borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div>
            <div className="sy" style={{ fontSize: 22, fontWeight: 800, marginBottom: 8 }}>Want a SaaS product built for your industry?</div>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>We have deep domain knowledge across 8 verticals. Your next product could be on this list.</p>
          </div>
          <a href="#contact" className="bp" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "linear-gradient(135deg,#0e7f72,#12a896)", color: "#fff", padding: "14px 28px", borderRadius: 9, fontSize: 14, fontWeight: 500, boxShadow: "0 4px 20px rgba(14,127,114,0.35)", whiteSpace: "nowrap" }}>
            Discuss Your SaaS Idea <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

function hexToRgb(hex) {
  const r = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!r) return "14,127,114";
  return `${parseInt(r[1], 16)},${parseInt(r[2], 16)},${parseInt(r[3], 16)}`;
}

function Testimonials() {
  return (
    <section style={{ background: "#1a2e45", padding: "110px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="rv" style={{ marginBottom: 52, textAlign: "center" }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Client Stories</span>
          <h2 className="sy" style={{ fontSize: "clamp(30px,4vw,50px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 14 }}>Don't Take Our Word.<br />Read Theirs.</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>Real results from real clients across industries.</p>
        </div>
        <div className="sg rv" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="tcard" style={{ background: "#0b1929", border: "1px solid rgba(14,127,114,0.2)", borderRadius: 18, padding: "32px 28px", position: "relative", transitionDelay: `${i * 0.08}s` }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg,#0e7f72,#1dcfba,transparent)", borderRadius: "18px 18px 0 0" }} />
              <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                {[...Array(t.stars)].map((_, j) => <Star key={j} size={14} fill="#1dcfba" color="#1dcfba" />)}
              </div>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.68)", lineHeight: 1.8, marginBottom: 24, fontStyle: "italic" }}>"{t.text}"</p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div className="sy" style={{ fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: "#6b8199", marginTop: 2 }}>{t.role}</div>
                </div>
                <div style={{ padding: "6px 12px", background: "rgba(29,207,186,0.1)", border: "1px solid rgba(29,207,186,0.25)", borderRadius: 8, fontSize: 12, color: "#1dcfba", fontWeight: 600 }}>{t.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section style={{ background: "#0b1929", padding: "110px 5%" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div className="rv" style={{ textAlign: "center", marginBottom: 52 }}>
          <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Common Questions</span>
          <h2 className="sy" style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 14 }}>Everything You Want<br />to Know Upfront</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>We believe in radical transparency. No surprises.</p>
        </div>
        <div className="rv" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {FAQS.map((faq, i) => (
            <div key={i} className="faq-item" onClick={() => setOpenIdx(openIdx === i ? null : i)} style={{ border: `1px solid ${openIdx === i ? "rgba(29,207,186,0.3)" : "rgba(14,127,114,0.18)"}`, borderRadius: 14, overflow: "hidden", cursor: "pointer", transition: "border-color 0.25s" }}>
              <div style={{ padding: "20px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, background: openIdx === i ? "rgba(14,127,114,0.07)" : "transparent" }}>
                <h3 className="sy" style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.3 }}>{faq.q}</h3>
                <div style={{ color: "#1dcfba", flexShrink: 0 }}>{openIdx === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}</div>
              </div>
              {openIdx === i && (
                <div style={{ padding: "0 24px 22px", animation: "fadeUp 0.25s ease both" }}>
                  <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontWeight: 300 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABand() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectName: "",
    service: ""
  });

  const [loading, setLoading] = useState(false);
  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email) {
      alert("Please fill required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("https://api.manageyourpg.com/api/pg-en/codex", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (data.success) {
        alert("✅ Enquiry sent successfully!");
        setForm({
          name: "",
          email: "",
          projectName: "",
          service: ""
        });
      } else {
        alert("❌ Failed to send enquiry");
      }

    } catch (err) {
      console.error(err);
      alert("⚠️ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" style={{ background: "linear-gradient(135deg,#0e7f72 0%,#0a5c55 50%,#1a2e45 100%)", padding: "100px 5%", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(29,207,186,0.15) 0%,transparent 70%)" }} />
      <div style={{ position: "absolute", bottom: -80, left: "20%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,255,255,0.04) 0%,transparent 70%)" }} />
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="cff rv" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 40 }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)", padding: "6px 14px", borderRadius: 100, fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", marginBottom: 20 }}>
              <div style={{ width: 7, height: 7, background: "#fff", borderRadius: "50%", animation: "blink 1.8s infinite" }} />
              Currently Accepting New Projects
            </div>
            <h2 className="sy" style={{ fontSize: "clamp(28px,4vw,52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 14 }}>Ready to Build<br />Something Remarkable?</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", fontWeight: 300, maxWidth: 480, lineHeight: 1.75 }}>Tell us about your project. We'll get back with a detailed proposal — scope, timeline, and fixed cost — within 24 hours. Zero obligation.</p>
            <div style={{ display: "flex", gap: 24, marginTop: 24, flexWrap: "wrap" }}>
              {[["📧", "hello@codextechinnovations.com"], ["📞", "+91 9741821179"], ["📍", "Bengaluru, India"]].map(([icon, val], i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                  <span>{icon}</span><span>{val}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: "rgba(11,25,41,0.6)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 20, padding: "36px 32px", minWidth: 340, backdropFilter: "blur(12px)", flexShrink: 0 }}>

            <h3 className="sy" style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>
              Get Your Free Estimate
            </h3>

            {/* Name */}
            <input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              style={{ width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 9, color: "#fff", fontSize: 14, marginBottom: 12, outline: "none" }}
            />

            {/* Email */}
            <input
              placeholder="Work Email"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              style={{ width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 9, color: "#fff", fontSize: 14, marginBottom: 12, outline: "none" }}
            />

            {/* Project */}
            <input
              placeholder="Company / Project Name"
              value={form.projectName}
              onChange={(e) => handleChange("projectName", e.target.value)}
              style={{ width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 9, color: "#fff", fontSize: 14, marginBottom: 12, outline: "none" }}
            />

            {/* Service */}
            <select
              value={form.service}
              onChange={(e) => handleChange("service", e.target.value)}
              style={{ width: "100%", padding: "12px 16px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 9, color: "rgba(255,255,255,0.7)", fontSize: 14, marginBottom: 12, outline: "none" }}
            >
              <option value="">What are you building?</option>
              <option value="Mobile App">Mobile App (iOS/Android)</option>
              <option value="Web App">Web Application / Platform</option>
              <option value="Both">Both Mobile + Web</option>
              <option value="Cloud">Cloud / DevOps</option>
              <option value="AI">AI / ML Integration</option>
            </select>

            {/* Button */}
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bw"
              style={{ width: "100%", padding: "14px", background: "#fff", color: "#0e7f72", border: "none", borderRadius: 9, fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, boxShadow: "0 4px 20px rgba(0,0,0,0.2)", fontFamily: "inherit", opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Sending..." : "Send My Free Estimate"}
              {!loading && <ArrowRight size={16} />}
            </button>

            <p style={{ fontSize: 11, color: "rgba(255,255,255,0.38)", textAlign: "center", marginTop: 12 }}>
              We respond within 24 hours · No spam · No obligation
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const hrefFor = (link) => {
    const map = {
      "Contact": "#contact", "Free Consultation": "#contact",
      "Sitemap": "/sitemap.xml",
      "Mobile App Development": "#services", "Website Development": "#services", "SaaS Product Development": "#services",
      "Cloud & DevOps": "#services", "AI & Automation": "#services", "UI/UX Design": "#services",
      "PG Management System": "#products", "Hotel Management System": "#products", "Hostel Management System": "#products",
      "OMF Food Delivery App": "#products", "Compliance & CA Manager": "#products", "Arthomed Hospital System": "#products",
    };
    return map[link] || "#";
  };
  const cols = [
    { title: "Services", links: ["Mobile App Development", "Website Development", "SaaS Product Development", "Cloud & DevOps", "AI & Automation", "UI/UX Design"] },
    { title: "Our Products", links: ["PG Management System", "Hotel Management System", "Hostel Management System", "OMF Food Delivery App", "Compliance & CA Manager", "Arthomed Hospital System"] },
    { title: "Company", links: ["About Us", "Our Work", "Careers", "Blog", "Press Kit", "Contact"] },
    { title: "Resources", links: ["Case Studies", "Tech Blog", "Free Consultation", "Project Estimator", "Privacy Policy", "Terms of Service"] },
  ];
  return (
    <footer style={{ background: "#060f1a", padding: "72px 5% 36px", borderTop: "1px solid rgba(14,127,114,0.18)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="fg" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr 0.8fr", gap: 36, marginBottom: 60 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <img src="/logo.svg" width={38} height={38} alt="CODEX" />
              <span className="sy" style={{ fontWeight: 700, fontSize: 17, letterSpacing: 1, textTransform: "uppercase" }}>CODEX <span style={{ color: "#1dcfba" }}>|</span> <span style={{ fontWeight: 300, color: "rgba(255,255,255,0.5)", fontSize: 10, letterSpacing: 2 }}>Tech Innovations & Consultants LLP</span></span>
            </div>
            <p style={{ fontSize: 14, color: "#6b8199", lineHeight: 1.75, maxWidth: 280 }}>India's premium mobile app and web development studio. We build digital products that drive measurable business growth.</p>
            <div style={{ marginTop: 20, display: "flex", gap: 8 }}>
              {["in", "𝕏", "gh", "yt"].map((s, i) => (
                <a key={i} href="#" className="sb" style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid rgba(14,127,114,0.2)", display: "grid", placeItems: "center", color: "#6b8199", fontSize: 13 }}>{s}</a>
              ))}
            </div>
          </div>
          {cols.map((col, ci) => (
            <div key={ci}>
              <div className="sy" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: 18 }}>{col.title}</div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map((link, li) => (
                  <li key={li}><a href={hrefFor(link)} className="fl" style={{ fontSize: 14, color: "#6b8199", transition: "color 0.2s" }}>{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ paddingTop: 28, borderTop: "1px solid rgba(14,127,114,0.15)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/logo.svg" width={20} height={20} alt="CODEX" />
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.28)" }}>© 2026 CODEX Tech Innovations & Consultants LLP · All rights reserved · Bengaluru, India</p>
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {["Privacy Policy", "Terms", "Sitemap", "AI Info"].map((l, i) => (
              <a key={i} href={l === "AI Info" ? "/llms.txt" : l === "Sitemap" ? "/sitemap.xml" : "#"} className="fl" style={{ fontSize: 12, color: "rgba(255,255,255,0.28)", transition: "color 0.2s" }}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   PRODUCT DETAIL
───────────────────────────────────────────────────────────── */
const PRODUCT_EXTRA = {
  "pg-management": {
    longDesc: "The PG Management System is a comprehensive digital solution designed specifically for paying guest accommodation owners and managers. It replaces manual ledgers, scattered WhatsApp conversations, and messy spreadsheets with a unified platform that handles every aspect of PG operations — from tenant onboarding to monthly rent collection.",
    audience: "PG owners, hostel operators, rental property managers, real estate investors managing multiple properties",
    liveSites: [
      { url: "https://www.manageyourpg.com", label: "manageyourpg.com", desc: "Main product website — learn more, sign up, and access the platform" },
      { url: "https://www.getyourstay.in", label: "getyourstay.in", desc: "Tenant-facing portal — browse PGs, check availability, and book online" },
    ],
    benefits: [
      { icon: "⏱️", title: "70% Less Admin Work", desc: "Automate rent reminders, receipt generation, and occupancy tracking so you focus on growing your business instead of chasing paperwork." },
      { icon: "💰", title: "Faster Payments", desc: "Integrated Razorpay payment gateway with automated reminders reduces late payments by 80%. Tenants can pay via UPI, cards, or net banking." },
      { icon: "📊", title: "Real-Time Visibility", desc: "Dashboard shows occupancy rates, revenue trends, pending maintenance requests, and tenant status — all updated in real time." },
      { icon: "🔐", title: "Digital KYC & Agreements", desc: "Tenants upload ID proofs, sign digital rental agreements, and complete onboarding without a single paper document." },
    ],
    modules: ["Room & Inventory Management", "Tenant Onboarding & KYC", "Rent Collection & Payment Gateway", "Maintenance Ticketing", "Analytics & Revenue Reports", "Document Vault"],
    integrations: ["Razorpay", "AWS S3", "WhatsApp API", "SMS Gateway", "Email Automation"],
  },
  "hostel-management": {
    longDesc: "The Hostel Management System is a full-featured administration platform built for educational institutions — colleges, universities, and residential schools. It digitizes the entire hostel lifecycle from student admission and room allocation to mess management, fee collection, and alumni tracking.",
    audience: "College hostel wardens, university accommodation offices, school administrators, private hostel chains",
    benefits: [
      { icon: "🎯", title: "Smart Room Allocation", desc: "Algorithm-based room assignment considering preferences, course, year, and roommate compatibility. Eliminates manual shuffling." },
      { icon: "🍽️", title: "Mess Plan Automation", desc: "Students choose meal plans digitally. Mess managers track inventory, generate menus, and control costs based on live subscription data." },
      { icon: "👨‍👩‍👧", title: "Parent Peace of Mind", desc: "Dedicated parent portal for attendance updates, fee payments, conduct reports, and direct communication with wardens." },
      { icon: "📈", title: "Institute-Wide Analytics", desc: "Cross-hostel occupancy reports, fee collection status, incident tracking, and compliance documentation for accreditation." },
    ],
    modules: ["Room Allocation Engine", "Mess & Meal Plan Management", "Fee Collection & Receipts", "Attendance & Conduct Records", "Parent Communication Portal", "Alumni Network Module"],
    integrations: ["Firebase", "Stripe", "SMS Gateway", "Email Service", "Biometric API"],
  },
  "hotel-management": {
    longDesc: "The Hotel Management System is an enterprise-grade Property Management System (PMS) designed for hotels, resorts, and serviced apartments of all sizes. It streamlines every operation — from multi-channel reservation management and front desk check-ins to housekeeping workflows, POS billing, and guest satisfaction programs.",
    audience: "Hotel owners, resort managers, boutique property operators, hotel chains, serviced apartment managers",
    benefits: [
      { icon: "🛏️", title: "Centralized Reservations", desc: "Manage bookings from OTAs (Booking.com, Expedia), direct website, and walk-ins in a single dashboard. Real-time availability across all channels." },
      { icon: "🧹", title: "Housekeeping Automation", desc: "Room status tracking, cleaning schedules, maintenance alerts, and inventory management for linens and amenities." },
      { icon: "💳", title: "Integrated POS & Billing", desc: "Restaurant, spa, and mini-bar charges automatically post to guest folios. One-click checkout with split billing and tax compliance." },
      { icon: "⭐", title: "Guest Experience Platform", desc: "Pre-arrival preferences, contactless check-in, in-room service requests, feedback collection, and loyalty program management." },
    ],
    modules: ["Channel Manager & Reservation System", "Front Desk & Housekeeping", "POS Billing & Folio Management", "Guest Portal & Mobile App", "Revenue & Yield Analytics", "Maintenance & Inventory"],
    integrations: ["Booking.com API", "Expedia API", "Stripe", "Redis Cache", "SMS/Email Engine"],
  },
  "ca-compliance": {
    longDesc: "Compliance & CA Manager is a FinTech workflow platform purpose-built for Chartered Accountants, tax firms, and compliance teams. It automates the most time-consuming aspects of compliance management — GST filing reminders, ITR status tracking, client document collection, and regulatory deadline monitoring — saving firms 15+ hours per week.",
    audience: "Chartered accountants, tax consultants, CA firms, compliance teams, financial advisors",
    benefits: [
      { icon: "📅", title: "Never Miss a Deadline", desc: "Automated compliance calendar with GST, ITR, TDS, and ROC deadlines. Email and SMS reminders sent to clients 7, 3, and 1 day before due dates." },
      { icon: "📁", title: "Centralized Document Vault", desc: "Clients upload documents directly to a secure portal. Automatic OCR classification, version tracking, and e-sign integration for approvals." },
      { icon: "👥", title: "Multi-User Team Workspace", desc: "Partner, manager, and associate roles with task assignment, review workflows, and time tracking. Client communication history in one place." },
      { icon: "💵", title: "Billing & Invoice Management", desc: "Generate professional invoices, track payments, and manage retainer agreements. Integration with major accounting software for seamless reconciliation." },
    ],
    modules: ["Compliance Calendar & Alerts", "Client Document Vault & E-Sign", "Task & Workflow Management", "GST/ITR Status Tracker", "Billing & Invoice Engine", "Team Collaboration Dashboard"],
    integrations: ["Razorpay", "AWS S3", "GST Portal API", "ITR Filing APIs", "Email/SMS Gateway"],
  },
  "store-management": {
    longDesc: "The Store Management System is a robust retail platform that unifies Point of Sale (POS), inventory management, supplier relationships, and sales analytics into a single, easy-to-use interface. Built for both single retail outlets and multi-branch chains, it runs on touchscreen terminals and handheld devices alike.",
    audience: "Retail store owners, supermarket chains, boutique operators, wholesale distributors, franchise networks",
    benefits: [
      { icon: "🛒", title: "Blazing-Fast POS", desc: "Touchscreen-optimized POS with barcode scanning, support for multiple payment modes, and instant receipt printing on thermal printers." },
      { icon: "📦", title: "Real-Time Inventory", desc: "Stock levels update instantly with every sale and purchase. Low-stock alerts, expiry tracking, and automated purchase order generation." },
      { icon: "🏪", title: "Multi-Branch Management", desc: "Centralized dashboard for all branches. Transfer stock between locations, compare branch performance, and consolidate reports." },
      { icon: "📈", title: "Profitability Analytics", desc: "Sales by product, category, staff, and time period. Margin analysis, best-seller reports, and demand forecasting to optimize stock." },
    ],
    modules: ["Touchscreen POS Terminal", "Inventory & Stock Control", "Supplier & Purchase Orders", "Multi-Branch Management", "Sales Analytics & Reports", "Customer Loyalty Program"],
    integrations: ["Thermal Printers", "Barcode Scanners", "UPI/ Card Terminals", "SMS Gateway", "Cloud Backup"],
  },
  "omf-food-delivery": {
    longDesc: "OMF Food Delivery App is a white-label, multi-app food delivery ecosystem that lets restaurants and food brands launch their own delivery service — just like Swiggy or Zomato — without paying hefty commissions. The platform includes three integrated applications: a consumer app for ordering, a restaurant dashboard for managing orders, and a delivery partner app for real-time dispatch.",
    audience: "Restaurant chains, food brands, cloud kitchens, food delivery startups, hospitality groups",
    benefits: [
      { icon: "📱", title: "Three Apps, One Ecosystem", desc: "Consumer app (iOS & Android) for ordering, restaurant dashboard for order management, and delivery partner app with live GPS tracking." },
      { icon: "📍", title: "Real-Time GPS Tracking", desc: "Customers see delivery partner location in real time. Estimated arrival times update dynamically based on actual GPS data." },
      { icon: "🎁", title: "Built-In Marketing Tools", desc: "Push notifications, promo code engine, loyalty points, referral rewards, and rating systems — everything you need to retain customers." },
      { icon: "⚡", title: "Instant Order Processing", desc: "Socket.io-powered real-time order flow from customer → restaurant → delivery partner. Average acceptance-to-pickup time: under 3 minutes." },
    ],
    modules: ["Customer Mobile App", "Restaurant Owner Dashboard", "Delivery Partner App", "Order Management System", "Payment & Wallet Engine", "Analytics & Growth Tools"],
    integrations: ["Razorpay", "Google Maps API", "Socket.io", "Firebase Cloud Messaging", "SMS Gateway"],
  },
  "wroggle": {
    longDesc: "Wroggle is a next-generation fashion e-commerce platform designed for D2C fashion brands ready to scale online. It combines AI-powered personalization with a complete commerce backend — inventory management, order processing, returns automation, and influencer marketing — all in one platform.",
    audience: "D2C fashion brands, clothing retailers, boutique owners, fashion designers, lifestyle brands",
    benefits: [
      { icon: "🤖", title: "AI Size & Style Recommendations", desc: "Machine learning models analyze customer preferences, past purchases, and body measurements to recommend the perfect size and style — reducing returns by up to 35%." },
      { icon: "🎨", title: "Visual Look-Builder", desc: "Customers mix and match outfits using an interactive look-builder interface. Share looks on social media and save favorites for later." },
      { icon: "👥", title: "Influencer Affiliate Program", desc: "Built-in influencer management module with unique referral links, commission tracking, and performance analytics for influencer campaigns." },
      { icon: "🔄", title: "Automated Returns & Exchange", desc: "Self-service returns portal with automated label generation, quality check workflows, and exchange processing — handled end-to-end." },
    ],
    modules: ["AI Recommendation Engine", "Visual Look-Builder", "Multi-Variant Inventory", "Influencer Affiliate Module", "Returns & Exchange Automation", "Order & Fulfillment Dashboard"],
    integrations: ["Stripe", "Cloudinary", "Shiprocket", "Google Analytics 4", "Meta Pixel"],
  },
  "arthomed": {
    longDesc: "Arthomed Hospital System is an ABDM-aligned (Ayushman Bharat Digital Mission) healthcare management platform designed for modern hospitals and clinics. It digitizes the complete patient journey — from registration and OPD/IPD management to EMR, pharmacy, lab integration, and billing — reducing wait times and virtually eliminating paper-based workflows.",
    audience: "Hospital administrators, clinic managers, healthcare chains, nursing homes, diagnostic centers",
    benefits: [
      { icon: "👨‍⚕️", title: "End-to-End Patient Journey", desc: "From online appointment booking and registration to consultation, pharmacy, and discharge — every step is digitized and tracked in real time." },
      { icon: "📋", title: "ABDM-Aligned EMR", desc: "Electronic Medical Records compliant with Indian healthcare standards. Interoperable with other ABDM-compliant systems via HL7 FHIR APIs." },
      { icon: "🧪", title: "Integrated Lab & Pharmacy", desc: "Lab orders auto-populate from prescriptions. Results flow back to EMR automatically. Pharmacy tracks stock, expiry, and dispensing." },
      { icon: "💳", title: "Smart Billing & Insurance", desc: "Automated billing with insurance claim processing, package management, TPA integration, and digital payment collection at every touchpoint." },
    ],
    modules: ["Patient Registration & EMR", "OPD/IPD Queue Management", "Pharmacy & Lab Integration", "Insurance & Billing Engine", "Doctor Scheduling & Telemedicine", "ABDM Compliance Gateway"],
    integrations: ["ABDM APIs", "HL7 FHIR", "IRDA Insurance APIs", "SMS Gateway", "Cloud Backup"],
  },
};

function ProductDetail() {
  const params = new URLSearchParams(window.location.search);
  const product = PRODUCTS.find((p) => p.id === params.get("product")) || null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const extras = product ? PRODUCT_EXTRA[product.id] : null;

  if (!product) {
    return (
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 5%" }}>
        <div style={{ fontSize: 64, marginBottom: 20 }}>🔍</div>
        <h2 className="sy" style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>Product Not Found</h2>
        <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: 28 }}>The product you're looking for doesn't exist.</p>
        <a href="/" style={{ background: "linear-gradient(135deg,#0e7f72,#12a896)", color: "#fff", padding: "12px 28px", borderRadius: 9, fontSize: 14, fontWeight: 500 }}>Back to Home</a>
      </section>
    );
  }

  const p = product;
  const e = extras;
  const related = PRODUCTS.filter((x) => x.id !== p.id && x.category === p.category).slice(0, 3);

  return (
    <div style={{ background: "#0b1929", minHeight: "100vh" }}>
      <NavbarOnDetail />

      {/* Hero */}
      <section style={{ padding: "120px 5% 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: `radial-gradient(ellipse 80% 60% at 50% 40%, rgba(${hexToRgb(p.color)},0.25) 0%,transparent 70%)` }} />
        <div className="hgrid" style={{ position: "absolute", inset: 0 }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <a href="/?section=products" className="bs" style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", padding: "8px 16px", borderRadius: 7, fontSize: 13, marginBottom: 32 }}>
            ← Back to All Products
          </a>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 32, flexWrap: "wrap" }}>
            <div style={{ fontSize: 80, lineHeight: 1, flexShrink: 0 }}>{p.emoji}</div>
            <div style={{ flex: 1, minWidth: 280 }}>
              <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12, flexWrap: "wrap" }}>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: p.accent, background: `rgba(${hexToRgb(p.accent)},0.1)`, border: `1px solid rgba(${hexToRgb(p.accent)},0.25)`, padding: "4px 12px", borderRadius: 100 }}>{p.category}</span>
                <span style={{ fontSize: 11, padding: "4px 10px", background: "rgba(29,207,186,0.1)", color: "#1dcfba", borderRadius: 6, fontWeight: 600 }}>● {p.status}</span>
                <span style={{ fontSize: 11, padding: "4px 10px", background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)", borderRadius: 6 }}>{p.badge}</span>
              </div>
              <h1 className="sy" style={{ fontSize: "clamp(36px,5vw,64px)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: 12 }}>{p.name}</h1>
              <p style={{ fontSize: 20, color: p.accent, fontWeight: 500, marginBottom: 20 }}>{p.tagline}</p>
              <p style={{ fontSize: 17, color: "rgba(255,255,255,0.58)", lineHeight: 1.8, fontWeight: 300, maxWidth: 680 }}>{e ? e.longDesc : p.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Strip */}
      <div style={{ background: "#1a2e45", borderTop: "1px solid rgba(14,127,114,0.18)", borderBottom: "1px solid rgba(14,127,114,0.18)", padding: "20px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 32, flexWrap: "wrap" }}>
          <div><span style={{ fontSize: 12, color: "#6b8199" }}>Tech Stack</span><div style={{ display: "flex", gap: 6, marginTop: 6, flexWrap: "wrap" }}>{p.tags.map((t, i) => <span key={i} style={{ fontSize: 12, padding: "3px 10px", borderRadius: 5, background: "rgba(14,127,114,0.1)", color: "#1dcfba", border: "1px solid rgba(29,207,186,0.15)" }}>{t}</span>)}</div></div>
          <div><span style={{ fontSize: 12, color: "#6b8199" }}>Category</span><p style={{ fontSize: 14, fontWeight: 600, marginTop: 4 }}>{p.category}</p></div>
          <div><span style={{ fontSize: 12, color: "#6b8199" }}>Status</span><p style={{ fontSize: 14, fontWeight: 600, marginTop: 4, color: "#1dcfba" }}>● {p.status}</p></div>
        </div>
      </div>

      {/* Live Sites */}
      {e && e.liveSites && (
        <section style={{ padding: "80px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 36 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Live Websites</span>
              <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Visit the Platform Live</h2>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.5)", fontWeight: 300, marginTop: 8 }}>Explore the product in action on these live websites.</p>
            </div>
            <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
              {e.liveSites.map((site, i) => (
                <a key={i} href={site.url} target="_blank" rel="noopener noreferrer" className="scard" style={{ display: "flex", alignItems: "flex-start", gap: 16, background: "#1a2e45", border: "1px solid rgba(14,127,114,0.2)", borderRadius: 16, padding: "28px 24px", textDecoration: "none" }}>
                  <div style={{ width: 48, height: 48, background: "rgba(29,207,186,0.12)", borderRadius: 12, display: "grid", placeItems: "center", flexShrink: 0, fontSize: 22 }}>🌐</div>
                  <div style={{ flex: 1 }}>
                    <div className="sy" style={{ fontSize: 17, fontWeight: 700, color: "#1dcfba", marginBottom: 4 }}>{site.label}</div>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, marginBottom: 10 }}>{site.desc}</p>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 13, color: "#1dcfba", fontWeight: 500 }}>
                      Visit site <ArrowRight size={14} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Key Benefits */}
      {e && e.benefits && (
        <section style={{ padding: "80px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 44 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Why Choose This Product</span>
              <h2 className="sy" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Key Benefits</h2>
            </div>
            <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="g2">
              {e.benefits.map((b, i) => (
                <div key={i} className="scard" style={{ background: "#1a2e45", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 16, padding: "28px 24px", display: "flex", gap: 16 }}>
                  <div style={{ fontSize: 36, flexShrink: 0, lineHeight: 1 }}>{b.icon}</div>
                  <div>
                    <h3 className="sy" style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{b.title}</h3>
                    <p style={{ fontSize: 14, color: "rgba(255,255,255,0.55)", lineHeight: 1.7 }}>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Features */}
      <section style={{ background: "#1a2e45", padding: "80px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="rv" style={{ marginBottom: 44 }}>
            <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Everything Included</span>
            <h2 className="sy" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", marginBottom: 12 }}>Complete Feature Set</h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>Every tool and capability you need to run your operations efficiently.</p>
          </div>
          <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 14 }} className="g2">
            {p.features.map((f, i) => (
              <div key={i} className="icard" style={{ display: "flex", alignItems: "center", gap: 14, padding: "18px 20px", background: "#0b1929", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 12 }}>
                <div style={{ width: 32, height: 32, background: `rgba(${hexToRgb(p.accent)},0.12)`, borderRadius: 8, display: "grid", placeItems: "center", flexShrink: 0 }}>
                  <Check size={16} color={p.accent} />
                </div>
                <span style={{ fontSize: 15, color: "rgba(255,255,255,0.78)" }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      {e && e.modules && (
        <section style={{ padding: "80px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 44 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Core Modules</span>
              <h2 className="sy" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>What's Under the Hood</h2>
            </div>
            <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="ig4">
              {e.modules.map((m, i) => (
                <div key={i} className="tcard" style={{ background: "#1a2e45", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 14, padding: "28px 22px", textAlign: "center" }}>
                  <div style={{ width: 48, height: 48, background: `rgba(${hexToRgb(p.color)},0.15)`, borderRadius: 12, display: "grid", placeItems: "center", margin: "0 auto 16px", fontSize: 22 }}>{p.emoji}</div>
                  <div className="sy" style={{ fontSize: 15, fontWeight: 700, lineHeight: 1.3 }}>{m}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Integrations */}
      {e && e.integrations && (
        <section style={{ background: "#1a2e45", padding: "80px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 36 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Integrations</span>
              <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Seamlessly Connects With</h2>
            </div>
            <div className="rv" style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {e.integrations.map((int, i) => (
                <span key={i} className="tpill" style={{ padding: "10px 20px", borderRadius: 8, border: "1px solid rgba(14,127,114,0.2)", background: "rgba(14,127,114,0.04)", fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,0.75)", display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#0e7f72", flexShrink: 0 }} />{int}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Audience */}
      {e && e.audience && (
        <section style={{ padding: "80px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 28 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Who It's For</span>
              <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>Built For</h2>
            </div>
            <div className="rv" style={{ padding: "24px 28px", background: "rgba(14,127,114,0.07)", border: "1px solid rgba(29,207,186,0.18)", borderRadius: 14, borderLeft: "3px solid #1dcfba" }}>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.72)", lineHeight: 1.8, fontWeight: 300 }}>{e.audience}</p>
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {related.length > 0 && (
        <section style={{ background: "#1a2e45", padding: "80px 5%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div className="rv" style={{ marginBottom: 36 }}>
              <span style={{ display: "inline-block", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#1dcfba", marginBottom: 14 }}>Related</span>
              <h2 className="sy" style={{ fontSize: "clamp(26px,3vw,38px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em" }}>More in {p.category}</h2>
            </div>
            <div className="rv" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }} className="ig">
              {related.map((r) => (
                <a key={r.id} href={`/?product=${r.id}`} className="pcard" style={{ display: "block", background: "#0b1929", border: "1px solid rgba(14,127,114,0.18)", borderRadius: 16, padding: "24px 20px" }}>
                  <div style={{ fontSize: 36, marginBottom: 10, lineHeight: 1 }}>{r.emoji}</div>
                  <div className="sy" style={{ fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{r.name}</div>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>{r.tagline}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg,#0e7f72 0%,#0a5c55 50%,#1a2e45 100%)", padding: "80px 5%", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle,rgba(29,207,186,0.15) 0%,transparent 70%)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <h2 className="sy" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 14 }}>Interested in {p.name}?</h2>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.7)", fontWeight: 300, maxWidth: 520, margin: "0 auto 28px" }}>Let's discuss how we can tailor this solution for your specific business needs. Free consultation within 24 hours.</p>
          <a href="/?section=contact" className="bw" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#fff", color: "#0e7f72", padding: "15px 32px", borderRadius: 9, fontSize: 15, fontWeight: 700, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}>
            Get Started <ArrowRight size={16} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function NavbarOnDetail() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 70, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 5%", background: scrolled ? "rgba(11,25,41,0.97)" : "rgba(11,25,41,0.8)", backdropFilter: "blur(18px)", borderBottom: `1px solid rgba(14,127,114,${scrolled ? 0.25 : 0.15})`, transition: "all 0.3s ease" }}>
      <a href="/" aria-label="CODEX Tech Innovations logo" style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <svg width="36" height="36" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ overflow: "visible" }} role="img"><title>CODEX Tech Innovations logo</title>
          <defs>
            <linearGradient id="hexGradD" x1="0" y1="0" x2="110" y2="110" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#0d1f2d"/><stop offset="100%" stopColor="#061018"/></linearGradient>
            <linearGradient id="xGradD" x1="25" y1="25" x2="85" y2="85" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#00ffb9"/><stop offset="100%" stopColor="#00b4ff"/></linearGradient>
          </defs>
          <polygon points="55,10 95,32 95,74 55,96 15,74 15,32" fill="url(#hexGradD)" stroke="rgba(0,255,185,0.6)" strokeWidth="1.5"/>
          <g filter="url(#glowD)">
            <line x1="33" y1="35" x2="77" y2="75" stroke="url(#xGradD)" strokeWidth="8" strokeLinecap="round"/>
            <line x1="77" y1="35" x2="33" y2="75" stroke="url(#xGradD)" strokeWidth="8" strokeLinecap="round"/>
            <circle cx="55" cy="55" r="4.5" fill="#0a1820" stroke="url(#xGradD)" strokeWidth="1.5"/>
            <circle cx="55" cy="55" r="2" fill="url(#xGradD)"/>
          </g>
        </svg>
        <span className="sy" style={{ fontWeight: 700, fontSize: 15, letterSpacing: 0.5, textTransform: "uppercase" }}>CODEX</span>
      </a>
      <a href="/?section=products" className="bs" style={{ display: "inline-flex", alignItems: "center", gap: 6, border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", padding: "8px 16px", borderRadius: 7, fontSize: 13 }}>
        ← All Products
      </a>
    </nav>
  );
}

/* ─────────────────────────────────────────────────────────────
   ROOT APP
───────────────────────────────────────────────────────────── */
export default function App() {
  // Scroll reveal
  useReveal();

  // Product detail routing — ?product=ID
  const [params, setParams] = useState(() => new URLSearchParams(window.location.search));
  useEffect(() => {
    const onPop = () => setParams(new URLSearchParams(window.location.search));
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Crawlable section routing — ?section=services, ?section=products, etc.
  useEffect(() => {
    const section = params.get("section");
    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 300);
    }
  }, [params]);

  if (params.get("product")) {
    return <ProductDetail key={params.get("product")} />;
  }

  return (
    <div style={{ background: "#0b1929", minHeight: "100vh" }}>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <WorkflowSection />
        <WhyCodeX />
        <TechStack />
        <Industries />
        <OurProducts />
        <Testimonials />
        <FAQ />
        <CTABand />
      </main>
      <Footer />
    </div>
  );
}
