export const PRODUCTS = [
  {
    id: "pg-management",
    name: "PG Management System",
    tagline: "The all-in-one OS for paying guest businesses",
    desc: "End-to-end platform for PG owners to manage bookings, automate rent collection, handle tenant onboarding, and track occupancy — all from a single dashboard. Cuts admin time by 70%.",
    category: "Property Tech",
    emoji: "🏠",
    color: "#0e7f72",
    accent: "#1dcfba",
    features: [
      "Online booking & room allocation",
      "Automated rent reminders & payment gateway",
      "Tenant KYC & digital agreements",
      "Maintenance request tracking",
      "Occupancy & revenue analytics dashboard",
    ],
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
    features: [
      "Smart room allocation engine",
      "Mess plan & meal tracking",
      "Fee management & receipt generation",
      "Student attendance & conduct records",
      "Parent portal with real-time updates",
    ],
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
    features: [
      "Real-time reservation & channel management",
      "Front desk & housekeeping workflows",
      "Multi-channel online booking engine",
      "POS billing & room service management",
      "Guest feedback & loyalty programs",
    ],
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
    features: [
      "GST & ITR deadline automation",
      "Client document vault & e-sign",
      "Compliance calendar & alerts",
      "Multi-user CA team workspace",
      "Billing & invoice management",
    ],
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
    features: [
      "Touchscreen POS with barcode scanning",
      "Real-time stock & reorder alerts",
      "Multi-branch inventory management",
      "Supplier & purchase order system",
      "Sales reports & profitability analytics",
    ],
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
    features: [
      "Customer iOS & Android app",
      "Restaurant owner dashboard",
      "Delivery partner app with live GPS",
      "Real-time order tracking",
      "Ratings, promos & loyalty wallet",
    ],
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
    features: [
      "AI-powered size & style recommendations",
      "Visual look-builder & outfit curator",
      "Multi-variant inventory management",
      "Influencer affiliate program module",
      "Returns & exchange automation",
    ],
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
    features: [
      "Patient registration & EMR",
      "OPD/IPD queue management",
      "Pharmacy & lab module integration",
      "Insurance & billing automation",
      "Doctor scheduling & telemedicine",
    ],
    tags: ["React", "Python", "PostgreSQL", "HL7 FHIR", "ABDM APIs"],
    status: "Live",
    badge: "❤️ Health Tech",
  },
];

export const PRODUCT_EXTRA = {
  "pg-management": {
    longDesc:
      "The PG Management System is a comprehensive digital solution designed specifically for paying guest accommodation owners and managers. It replaces manual ledgers, scattered WhatsApp conversations, and messy spreadsheets with a unified platform that handles every aspect of PG operations — from tenant onboarding to monthly rent collection.",
    audience:
      "PG owners, hostel operators, rental property managers, real estate investors managing multiple properties",
    liveSites: [
      {
        url: "https://www.manageyourpg.com",
        label: "manageyourpg.com",
        desc: "Main product website — learn more, sign up, and access the platform",
      },
      {
        url: "https://www.getyourstay.in",
        label: "getyourstay.in",
        desc: "Tenant-facing portal — browse PGs, check availability, and book online",
      },
    ],
    benefits: [
      {
        icon: "⏱️",
        title: "70% Less Admin Work",
        desc: "Automate rent reminders, receipt generation, and occupancy tracking so you focus on growing your business instead of chasing paperwork.",
      },
      {
        icon: "💰",
        title: "Faster Payments",
        desc: "Integrated Razorpay payment gateway with automated reminders reduces late payments by 80%. Tenants can pay via UPI, cards, or net banking.",
      },
      {
        icon: "📊",
        title: "Real-Time Visibility",
        desc: "Dashboard shows occupancy rates, revenue trends, pending maintenance requests, and tenant status — all updated in real time.",
      },
      {
        icon: "🔐",
        title: "Digital KYC & Agreements",
        desc: "Tenants upload ID proofs, sign digital rental agreements, and complete onboarding without a single paper document.",
      },
    ],
    modules: [
      "Room & Inventory Management",
      "Tenant Onboarding & KYC",
      "Rent Collection & Payment Gateway",
      "Maintenance Ticketing",
      "Analytics & Revenue Reports",
      "Document Vault",
    ],
    integrations: ["Razorpay", "AWS S3", "WhatsApp API", "SMS Gateway", "Email Automation"],
  },
  "hostel-management": {
    longDesc:
      "The Hostel Management System is a full-featured administration platform built for educational institutions — colleges, universities, and residential schools. It digitizes the entire hostel lifecycle from student admission and room allocation to mess management, fee collection, and alumni tracking.",
    audience:
      "College hostel wardens, university accommodation offices, school administrators, private hostel chains",
    benefits: [
      {
        icon: "🎯",
        title: "Smart Room Allocation",
        desc: "Algorithm-based room assignment considering preferences, course, year, and roommate compatibility. Eliminates manual shuffling.",
      },
      {
        icon: "🍽️",
        title: "Mess Plan Automation",
        desc: "Students choose meal plans digitally. Mess managers track inventory, generate menus, and control costs based on live subscription data.",
      },
      {
        icon: "👨‍👩‍👧",
        title: "Parent Peace of Mind",
        desc: "Dedicated parent portal for attendance updates, fee payments, conduct reports, and direct communication with wardens.",
      },
      {
        icon: "📈",
        title: "Institute-Wide Analytics",
        desc: "Cross-hostel occupancy reports, fee collection status, incident tracking, and compliance documentation for accreditation.",
      },
    ],
    modules: [
      "Room Allocation Engine",
      "Mess & Meal Plan Management",
      "Fee Collection & Receipts",
      "Attendance & Conduct Records",
      "Parent Communication Portal",
      "Alumni Network Module",
    ],
    integrations: ["Firebase", "Stripe", "SMS Gateway", "Email Service", "Biometric API"],
  },
  "hotel-management": {
    longDesc:
      "The Hotel Management System is an enterprise-grade Property Management System (PMS) designed for hotels, resorts, and serviced apartments of all sizes. It streamlines every operation — from multi-channel reservation management and front desk check-ins to housekeeping workflows, POS billing, and guest satisfaction programs.",
    audience:
      "Hotel owners, resort managers, boutique property operators, hotel chains, serviced apartment managers",
    benefits: [
      {
        icon: "🛏️",
        title: "Centralized Reservations",
        desc: "Manage bookings from OTAs (Booking.com, Expedia), direct website, and walk-ins in a single dashboard. Real-time availability across all channels.",
      },
      {
        icon: "🧹",
        title: "Housekeeping Automation",
        desc: "Room status tracking, cleaning schedules, maintenance alerts, and inventory management for linens and amenities.",
      },
      {
        icon: "💳",
        title: "Integrated POS & Billing",
        desc: "Restaurant, spa, and mini-bar charges automatically post to guest folios. One-click checkout with split billing and tax compliance.",
      },
      {
        icon: "⭐",
        title: "Guest Experience Platform",
        desc: "Pre-arrival preferences, contactless check-in, in-room service requests, feedback collection, and loyalty program management.",
      },
    ],
    modules: [
      "Channel Manager & Reservation System",
      "Front Desk & Housekeeping",
      "POS Billing & Folio Management",
      "Guest Portal & Mobile App",
      "Revenue & Yield Analytics",
      "Maintenance & Inventory",
    ],
    integrations: ["Booking.com API", "Expedia API", "Stripe", "Redis Cache", "SMS/Email Engine"],
  },
  "ca-compliance": {
    longDesc:
      "Compliance & CA Manager is a FinTech workflow platform purpose-built for Chartered Accountants, tax firms, and compliance teams. It automates the most time-consuming aspects of compliance management — GST filing reminders, ITR status tracking, client document collection, and regulatory deadline monitoring — saving firms 15+ hours per week.",
    audience:
      "Chartered accountants, tax consultants, CA firms, compliance teams, financial advisors",
    benefits: [
      {
        icon: "📅",
        title: "Never Miss a Deadline",
        desc: "Automated compliance calendar with GST, ITR, TDS, and ROC deadlines. Email and SMS reminders sent to clients 7, 3, and 1 day before due dates.",
      },
      {
        icon: "📁",
        title: "Centralized Document Vault",
        desc: "Clients upload documents directly to a secure portal. Automatic OCR classification, version tracking, and e-sign integration for approvals.",
      },
      {
        icon: "👥",
        title: "Multi-User Team Workspace",
        desc: "Partner, manager, and associate roles with task assignment, review workflows, and time tracking. Client communication history in one place.",
      },
      {
        icon: "💵",
        title: "Billing & Invoice Management",
        desc: "Generate professional invoices, track payments, and manage retainer agreements. Integration with major accounting software for seamless reconciliation.",
      },
    ],
    modules: [
      "Compliance Calendar & Alerts",
      "Client Document Vault & E-Sign",
      "Task & Workflow Management",
      "GST/ITR Status Tracker",
      "Billing & Invoice Engine",
      "Team Collaboration Dashboard",
    ],
    integrations: ["Razorpay", "AWS S3", "GST Portal API", "ITR Filing APIs", "Email/SMS Gateway"],
  },
  "store-management": {
    longDesc:
      "The Store Management System is a robust retail platform that unifies Point of Sale (POS), inventory management, supplier relationships, and sales analytics into a single, easy-to-use interface. Built for both single retail outlets and multi-branch chains, it runs on touchscreen terminals and handheld devices alike.",
    audience:
      "Retail store owners, supermarket chains, boutique operators, wholesale distributors, franchise networks",
    benefits: [
      {
        icon: "🛒",
        title: "Blazing-Fast POS",
        desc: "Touchscreen-optimized POS with barcode scanning, support for multiple payment modes, and instant receipt printing on thermal printers.",
      },
      {
        icon: "📦",
        title: "Real-Time Inventory",
        desc: "Stock levels update instantly with every sale and purchase. Low-stock alerts, expiry tracking, and automated purchase order generation.",
      },
      {
        icon: "🏪",
        title: "Multi-Branch Management",
        desc: "Centralized dashboard for all branches. Transfer stock between locations, compare branch performance, and consolidate reports.",
      },
      {
        icon: "📈",
        title: "Profitability Analytics",
        desc: "Sales by product, category, staff, and time period. Margin analysis, best-seller reports, and demand forecasting to optimize stock.",
      },
    ],
    modules: [
      "Touchscreen POS Terminal",
      "Inventory & Stock Control",
      "Supplier & Purchase Orders",
      "Multi-Branch Management",
      "Sales Analytics & Reports",
      "Customer Loyalty Program",
    ],
    integrations: ["Thermal Printers", "Barcode Scanners", "UPI/ Card Terminals", "SMS Gateway", "Cloud Backup"],
  },
  "omf-food-delivery": {
    longDesc:
      "OMF Food Delivery App is a white-label, multi-app food delivery ecosystem that lets restaurants and food brands launch their own delivery service — just like Swiggy or Zomato — without paying hefty commissions. The platform includes three integrated applications: a consumer app for ordering, a restaurant dashboard for managing orders, and a delivery partner app for real-time dispatch.",
    audience:
      "Restaurant chains, food brands, cloud kitchens, food delivery startups, hospitality groups",
    benefits: [
      {
        icon: "📱",
        title: "Three Apps, One Ecosystem",
        desc: "Consumer app (iOS & Android) for ordering, restaurant dashboard for order management, and delivery partner app with live GPS tracking.",
      },
      {
        icon: "📍",
        title: "Real-Time GPS Tracking",
        desc: "Customers see delivery partner location in real time. Estimated arrival times update dynamically based on actual GPS data.",
      },
      {
        icon: "🎁",
        title: "Built-In Marketing Tools",
        desc: "Push notifications, promo code engine, loyalty points, referral rewards, and rating systems — everything you need to retain customers.",
      },
      {
        icon: "⚡",
        title: "Instant Order Processing",
        desc: "Socket.io-powered real-time order flow from customer → restaurant → delivery partner. Average acceptance-to-pickup time: under 3 minutes.",
      },
    ],
    modules: [
      "Customer Mobile App",
      "Restaurant Owner Dashboard",
      "Delivery Partner App",
      "Order Management System",
      "Payment & Wallet Engine",
      "Analytics & Growth Tools",
    ],
    integrations: ["Razorpay", "Google Maps API", "Socket.io", "Firebase Cloud Messaging", "SMS Gateway"],
  },
  wroggle: {
    longDesc:
      "Wroggle is a next-generation fashion e-commerce platform designed for D2C fashion brands ready to scale online. It combines AI-powered personalization with a complete commerce backend — inventory management, order processing, returns automation, and influencer marketing — all in one platform.",
    audience:
      "D2C fashion brands, clothing retailers, boutique owners, fashion designers, lifestyle brands",
    benefits: [
      {
        icon: "🤖",
        title: "AI Size & Style Recommendations",
        desc: "Machine learning models analyze customer preferences, past purchases, and body measurements to recommend the perfect size and style — reducing returns by up to 35%.",
      },
      {
        icon: "🎨",
        title: "Visual Look-Builder",
        desc: "Customers mix and match outfits using an interactive look-builder interface. Share looks on social media and save favorites for later.",
      },
      {
        icon: "👥",
        title: "Influencer Affiliate Program",
        desc: "Built-in influencer management module with unique referral links, commission tracking, and performance analytics for influencer campaigns.",
      },
      {
        icon: "🔄",
        title: "Automated Returns & Exchange",
        desc: "Self-service returns portal with automated label generation, quality check workflows, and exchange processing — handled end-to-end.",
      },
    ],
    modules: [
      "AI Recommendation Engine",
      "Visual Look-Builder",
      "Multi-Variant Inventory",
      "Influencer Affiliate Module",
      "Returns & Exchange Automation",
      "Order & Fulfillment Dashboard",
    ],
    integrations: ["Stripe", "Cloudinary", "Shiprocket", "Google Analytics 4", "Meta Pixel"],
  },
  arthomed: {
    longDesc:
      "Arthomed Hospital System is an ABDM-aligned (Ayushman Bharat Digital Mission) healthcare management platform designed for modern hospitals and clinics. It digitizes the complete patient journey — from registration and OPD/IPD management to EMR, pharmacy, lab integration, and billing — reducing wait times and virtually eliminating paper-based workflows.",
    audience:
      "Hospital administrators, clinic managers, healthcare chains, nursing homes, diagnostic centers",
    benefits: [
      {
        icon: "👨‍⚕️",
        title: "End-to-End Patient Journey",
        desc: "From online appointment booking and registration to consultation, pharmacy, and discharge — every step is digitized and tracked in real time.",
      },
      {
        icon: "📋",
        title: "ABDM-Aligned EMR",
        desc: "Electronic Medical Records compliant with Indian healthcare standards. Interoperable with other ABDM-compliant systems via HL7 FHIR APIs.",
      },
      {
        icon: "🧪",
        title: "Integrated Lab & Pharmacy",
        desc: "Lab orders auto-populate from prescriptions. Results flow back to EMR automatically. Pharmacy tracks stock, expiry, and dispensing.",
      },
      {
        icon: "💳",
        title: "Smart Billing & Insurance",
        desc: "Automated billing with insurance claim processing, package management, TPA integration, and digital payment collection at every touchpoint.",
      },
    ],
    modules: [
      "Patient Registration & EMR",
      "OPD/IPD Queue Management",
      "Pharmacy & Lab Integration",
      "Insurance & Billing Engine",
      "Doctor Scheduling & Telemedicine",
      "ABDM Compliance Gateway",
    ],
    integrations: ["ABDM APIs", "HL7 FHIR", "IRDA Insurance APIs", "SMS Gateway", "Cloud Backup"],
  },
};
