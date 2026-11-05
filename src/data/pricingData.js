export const pricingPlans = [
  {
    id: "starter",
    name: "Starter Website",
    badge: "Essential Presence",
    priceINR: "₹5,999",
    priceUSD: "$199",
    billingNote: "One-time investment",
    idealFor: "Solo practitioners, local service providers, single-location clinics, and small startups needing a fast, credible digital presence.",
    turnaround: "5 to 7 Business Days",
    revisions: "2 Iteration Rounds Included",
    isPopular: false,
    deliverables: [
      "1 to 3 Clean, Responsive Custom Web Pages",
      "Mobile & Tablet Touch-Optimized Layout",
      "Basic On-Page SEO (Meta tags, H1-H3 structure)",
      "Contact & Inquiry Form with Email Delivery",
      "Click-to-Call & WhatsApp Direct Chat Button",
      "Social Media Profile Link Integration",
      "Fast Hosting Setup & Deployment Assistance",
      "SSL Certificate & Security Configuration"
    ],
    notIncluded: [
      "Domain and third-party hosting charges",
      "Advanced animations or custom web applications",
      "Multi-language localization"
    ],
    ctaText: "Choose Starter Package",
    ctaLink: "/contact?package=Starter%20Website"
  },
  {
    id: "business",
    name: "Business Website",
    badge: "Most Popular",
    priceINR: "₹9,999",
    priceUSD: "$399",
    billingNote: "One-time investment",
    idealFor: "Established local businesses, active dental/health clinics, gyms, restaurants, and growing professional service firms.",
    turnaround: "10 to 14 Business Days",
    revisions: "4 Iteration Rounds Included",
    isPopular: true,
    deliverables: [
      "Up to 7 Custom-Designed Responsive Pages",
      "Tailored UI/UX Design System with Brand Alignment",
      "Full On-Page & Technical SEO Setup + Google Indexing",
      "Dynamic Services & Portfolio / Gallery Section",
      "Interactive Appointment / Reservation / Inquiry Form",
      "Google Maps, Business Hours & Location Schemas",
      "Speed & Performance Optimization with Clean Modular Code",
      "Google Analytics 4 & Meta Pixel Setup",
      "30 Days of Complimentary Post-Launch Support"
    ],
    notIncluded: [
      "Domain and ongoing server subscription",
      "Paid third-party API / SMS gateway fees"
    ],
    ctaText: "Choose Business Package",
    ctaLink: "/contact?package=Business%20Website"
  },
  {
    id: "premium",
    name: "Premium Website",
    badge: "Growth & Performance",
    priceINR: "Starting at ₹19,999",
    priceUSD: "Starting at $649",
    billingNote: "Custom scope quotation",
    idealFor: "Brands wanting an international-grade digital presence, custom web applications, complex scheduling workflows, or multi-location brands.",
    turnaround: "2 to 4 Weeks",
    revisions: "Comprehensive Sprint Revisions",
    isPopular: false,
    deliverables: [
      "Bespoke Multi-Page Web Architecture (10+ Pages or Custom Flow)",
      "Custom Micro-Interactions & Framer Motion Animations",
      "Advanced Booking / Scheduling / Intake Workflow Automation",
      "Local SEO Dominance & Schema.org Rich Snippet Markup",
      "Content Architecture & Persuasive Copy Consultation",
      "CRM & WhatsApp Business API Webhook Integration",
      "High-Traffic Server Infrastructure Guidance",
      "Priority Direct Founder-Led Communication",
      "60 Days of Dedicated Post-Launch Maintenance"
    ],
    notIncluded: [
      "Domain and cloud server costs",
      "Paid commercial software subscriptions"
    ],
    ctaText: "Request Premium Consultation",
    ctaLink: "/contact?package=Premium%20Website"
  }
];

export const pricingNotice = {
  transparencyTitle: "Transparent Pricing Without Hidden Surprises",
  transparencyBody: "We believe in honest, predictable pricing. The package price covers our complete design, development, and launch engineering. Domain registration (approx. ₹800 - ₹1,200/yr), cloud hosting (Vercel, Cloudflare, or AWS), and any specialized third-party paid services (e.g. Twilio SMS, paid CRM accounts) are billed directly by their respective providers with zero agency markups.",
  usaClientNote: {
    title: "Working with USA & International Clients",
    body: "We routinely partner with businesses across the United States. We accept seamless international payments via Wire Transfer, Wise, and Stripe. USA projects benefit from dedicated overlap hours in EST/PST time zones, English fluency, and founder-level accountability at highly competitive international rates."
  }
};

