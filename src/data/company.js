export const TECH_STACK = {
  Mobile: ["React Native", "Flutter", "Swift", "Kotlin", "Expo", "Capacitor"],
  Frontend: ["React.js", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "Redux"],
  Backend: ["Node.js", "Python", "Go", "Java Spring", "GraphQL", "REST APIs"],
  Database: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Supabase", "Prisma"],
  Cloud: ["AWS", "Google Cloud", "Azure", "Firebase", "Vercel", "Cloudflare"],
  "DevOps & AI": ["Docker", "Kubernetes", "CI/CD", "Terraform", "OpenAI", "LangChain"],
};

export const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    role: "CTO, FinVault Technologies",
    stars: 5,
    text: "CODEX Tech Innovations & Consultants LLP took our fintech app from a napkin sketch to App Store-live in 14 weeks. The architecture they chose handled 10× our projected launch traffic without a single incident. Their senior engineers spotted scalability pitfalls we didn't even know to ask about.",
    metric: "10× traffic handled",
  },
  {
    name: "Sarah Chen",
    role: "Founder, MediConnect India",
    stars: 5,
    text: "We'd had two failed app development attempts before CODEX Tech Innovations & Consultants LLP. The difference was night and day — weekly demos, zero scope creep, and a final product our doctors actually want to use daily. Post-launch crash rate: 0.02%. That's exceptional.",
    metric: "0.02% crash rate",
  },
  {
    name: "Rohan Kapoor",
    role: "Head of Digital, RetailHub",
    stars: 5,
    text: "Our e-commerce platform went from 3.1s to 0.9s load time after CODEX Tech Innovations & Consultants LLP rebuilt it on Next.js with their custom CDN setup. Conversion rate climbed 38% in the first month. The ROI calculation was easy to make.",
    metric: "+38% conversion rate",
  },
];

export const CASE_STUDIES = [
  {
    id: "pg-management",
    emoji: "🏠",
    title: "PG Management System — From Paper Ledgers to Digital Operations for 500+ Properties",
    author: "Vikram Singh, Lead Product Engineer at CODEX",
    summary:
      "A chain of 12 PG properties across Bangalore was managing tenant onboarding, rent collection, and maintenance requests through a combination of paper ledgers, WhatsApp groups, and spreadsheets. The result: 40+ hours of admin work per week, 25% late rent payments, and no visibility into occupancy trends. CODEX built a unified platform that cut admin time by 70%, reduced late payments to 5%, and gave real-time occupancy analytics across all properties.",
    challenge:
      "The client operated 12 PG properties with 480+ beds. Each property had its own 'system': a register for check-ins, a WhatsApp group for maintenance requests, and an Excel file for rent tracking. Key pain points included: (1) tenant onboarding required 3+ hours of manual paperwork per new tenant, (2) rent collection depended on manual reminders via WhatsApp, with 25% of tenants paying late, (3) no centralized view of occupancy, revenue, or maintenance status across properties, (4) digital rental agreements were non-existent — everything was paper-based and took weeks to file.",
    solution:
      "We designed and built a full-stack SaaS platform over 14 weeks: (1) a React Native mobile app for tenants to browse rooms, book online, upload KYC documents, sign digital agreements, and pay rent, (2) a React.js admin dashboard for property managers to track occupancy, manage tenants, generate reports, and handle maintenance tickets, (3) a Node.js + PostgreSQL backend with Razorpay payment gateway integration for automated rent reminders and collection, (4) AWS S3 document vault for KYC records and digital agreements with e-sign capability.",
    outcome:
      "Within 3 months of deployment: admin time dropped from 40+ hours/week to 12 hours/week (70% reduction), late rent payments fell from 25% to 5%, tenant onboarding time reduced from 3 hours to 15 minutes, occupancy visibility became real-time across all 12 properties, digital agreements eliminated 200+ pages of paper per month. The platform now manages 500+ active tenants across 15 properties.",
    tech: ["React Native", "React.js", "Node.js", "PostgreSQL", "Razorpay", "AWS S3", "Redis"],
    results: ["70% less admin time", "25% → 5% late payments", "15 min onboarding (was 3 hrs)", "500+ active tenants"],
  },
  {
    id: "omf-food-delivery",
    emoji: "🍔",
    title: "OMF Food Delivery — A White-Label Platform Processing 5,000+ Orders Monthly",
    author: "Arun Prasad, Senior Full-Stack Developer at CODEX",
    summary:
      "A regional restaurant chain wanted to launch its own food delivery service — independent of Swiggy and Zomato — to eliminate 30% commission fees and own the customer relationship directly. CODEX built a complete three-app ecosystem (consumer, restaurant, delivery partner) in 16 weeks. The platform now processes 5,000+ orders monthly with an average delivery time of 28 minutes.",
    challenge:
      "The client, a chain of 18 restaurants across Bangalore, was paying 28–32% commission to Swiggy and Zomato on every order. They had no direct customer data, no ability to run their own promotions, and no control over the delivery experience. Key challenges: (1) building three integrated apps (iOS consumer, restaurant dashboard, delivery partner Android) within budget constraints, (2) real-time GPS tracking required sub-second latency between all three apps, (3) the payment flow needed to handle split payments (restaurant share, delivery partner fee, platform fee) with daily settlements, (4) the system had to handle peak-hour bursts of 200+ concurrent orders.",
    solution:
      "Over 16 weeks and 8 two-week sprints, we delivered: (1) a consumer iOS/Android app built with React Native featuring restaurant browsing, menu selection, cart management, real-time order tracking, and wallet/promo code support, (2) a restaurant dashboard (React.js) for order management, menu updates, outlet performance analytics, and delivery partner assignment, (3) a delivery partner Android app with live GPS tracking, optimized route suggestions, and one-tap status updates, (4) a Node.js + Socket.io real-time backend handling order flow with sub-500ms latency, (5) Razorpay payment gateway with automated split-settlement logic, (6) Firebase Cloud Messaging for push notifications across all three apps.",
    outcome:
      "The platform launched in 16 weeks and within 2 months was processing 5,000+ monthly orders. Average delivery time: 28 minutes. Customer acquisition cost dropped 60% compared to aggregator platforms. The client now owns 100% of customer data, runs their own loyalty program, and pays zero aggregator commissions. The platform handles 200+ concurrent orders during peak hours without degradation.",
    tech: ["React Native", "React.js", "Node.js", "Socket.io", "Razorpay", "Google Maps API", "Firebase", "PostgreSQL"],
    results: ["5,000+ orders/month", "28 min avg delivery", "60% lower CAC", "200+ peak concurrent orders"],
  },
];

export const TEAM = [
  {
    name: "Jiten",
    role: "Founder & Managing Director",
    exp: "12+ years",
    expertise: "Strategic direction, business development, technology vision, partnerships",
    creds: "Co-founded CODEX Tech Innovations and drives strategic growth, technology vision, and key partnerships. Leads the company's expansion into new markets and verticals.",
  },
  {
    name: "Chandrakanth",
    role: "Founder & Operational Manager",
    exp: "10+ years",
    expertise: "Business operations, product strategy, client delivery, team management",
    creds: "Co-founded CODEX Tech Innovations and oversees daily operations, project delivery, and client relationships across all 150+ shipped projects.",
  },
  {
    name: "Vikram Singh",
    role: "Lead Product Engineer",
    exp: "12+ years",
    expertise: "Full-stack architecture, SaaS product design, React/Node.js ecosystem",
    creds: "Ex-CTO at two YC-backed startups. Built products serving 100K+ users. Specializes in taking products from zero to production in under 16 weeks.",
  },
  {
    name: "Arun Prasad",
    role: "Senior Full-Stack Developer",
    exp: "9+ years",
    expertise: "React Native, Node.js, real-time systems, API design",
    creds: "Architected the OMF Food Delivery app handling 5,000+ monthly orders. Previously led mobile engineering at a Series A food-tech startup.",
  },
  {
    name: "Priya Sharma",
    role: "Lead UI/UX Designer",
    exp: "8+ years",
    expertise: "Design systems, user research, conversion optimization, Figma prototyping",
    creds: "Designed interfaces for 40+ shipped products. Background in cognitive psychology applied to UX research and conversion rate optimization.",
  },
  {
    name: "Rahul Gupta",
    role: "DevOps & Cloud Architect",
    exp: "10+ years",
    expertise: "AWS/GCP/Azure, Kubernetes, CI/CD, infrastructure-as-code",
    creds: "Managed infrastructure for a fintech processing ₹500Cr+ annually. Certified AWS Solutions Architect. Reduced cloud costs by 40% for multiple clients.",
  },
];

export const FAQS = [
  {
    q: "How much does a mobile app typically cost?",
    a: "Most apps we build range from ₹15L–₹60L depending on complexity, platform (iOS/Android/both), and integrations. We provide a detailed fixed-price quote after a free discovery call — no vague ballparks.",
  },
  {
    q: "Do you sign NDAs before project discussions?",
    a: "Absolutely. We sign mutual NDAs before any technical discussion. Your idea stays confidential, and we proactively flag if there's any conflict with existing clients.",
  },
  {
    q: "What happens to my source code and data?",
    a: "You own 100% of everything. Source code, design files, database schemas, and all third-party accounts are transferred to you on final payment. No licensing fees, no platform lock-in.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Yes — we regularly work as an extension of in-house teams. We can slot into your Jira/Linear, join your standups, and integrate with your existing CI/CD. Collaboration is our default mode.",
  },
  {
    q: "What does your post-launch support look like?",
    a: "Every project includes 6 months of free bug fixes. After that, we offer flexible retainer plans starting at ₹40K/month for monitoring, updates, and new feature development.",
  },
];
