import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { 
  Send, 
  MessageSquare, 
  Mail, 
  Globe2, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Info,
  ArrowRight
} from "lucide-react";
import SEO from "../components/SEO";

export default function Contact() {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    country: "India",
    service: "Website Development",
    projectCategory: "Local SMB & Services",
    timeline: "Standard (2 to 4 Weeks)",
    budget: "Business Package - ₹9,999",
    description: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // Pre-fill fields from query params if available
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    const packageParam = searchParams.get("package");
    const countryParam = searchParams.get("country");
    const projectType = searchParams.get("projectType");

    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
    if (packageParam) {
      setFormData((prev) => ({ ...prev, budget: packageParam }));
    }
    if (countryParam) {
      setFormData((prev) => ({ ...prev, country: countryParam }));
    }
    if (projectType) {
      setFormData((prev) => ({ 
        ...prev, 
        description: `I am interested in a website similar to the ${projectType} demonstration project.` 
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. If an actual backend or form service endpoint is configured (e.g. Web3Forms or Formspree)
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT;

      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString()
          })
        });
      }

      // 2. Persist to local backup storage so inquiries are never lost
      try {
        const existing = JSON.parse(localStorage.getItem("youmika_inquiries") || "[]");
        existing.push({ ...formData, date: new Date().toISOString() });
        localStorage.setItem("youmika_inquiries", JSON.stringify(existing));
      } catch (err) {
        // Storage access fallback
      }

      setStatusMessage(endpoint ? "Inquiry sent successfully. Abhishek will respond within 24 hours." : "Your enquiry is saved in this browser — please send it directly via WhatsApp or Email below so it reaches Abhishek. He will respond within 24 hours.");
      setSubmitted(true);
    } catch (error) {
      // Fallback
      setStatusMessage("Inquiry captured. You can also send a direct copy via WhatsApp or email.");
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Youmika Digital, I would like to inquire about a project.\n\nName: ${formData.fullName || "Prospective Client"}\nBusiness: ${formData.businessName || "Not specified"}\nService: ${formData.service}\nBudget: ${formData.budget}`
  );
  const whatsappUrl = `https://wa.me/918000548640?text=${whatsappMessage}`;

  const mailtoUrl = `mailto:web@youmika.site?subject=${encodeURIComponent(
    `Project Inquiry: ${formData.businessName || formData.fullName || "Website Project"}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.fullName}\nBusiness: ${formData.businessName}\nCountry: ${formData.country}\nService: ${formData.service}\nBudget: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Overview:\n${formData.description}`
  )}`;

  return (
    <>
      <SEO
        title="Contact Us — Start Your Project"
        description="Get in touch with Youmika Digital. Request a tailored quotation for web development, UI/UX, or SEO for your business in India or the USA. Fast response within 24 hours."
        canonicalPath="/contact"
      />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-[#56B4FF]">
            <Sparkles className="w-3.5 h-3.5 text-[#56B4FF]" />
            <span>Direct Founder Access</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional Together
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Have a project in mind, an existing site that needs a performance overhaul, or a new concept to launch? Reach out below and get a detailed quotation directly from founder Abhishek within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#131D31] border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-10 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-display font-bold text-white">
                  Thank You, {formData.fullName}!
                </h3>

                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  {statusMessage} Founder &amp; Developer Abhishek will review your brief for <strong className="text-[#56B4FF]">{formData.businessName || "your business"}</strong> and reply directly to <strong className="text-white">{formData.email}</strong>.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold shadow-md transition-all active:scale-95"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Copy via WhatsApp</span>
                  </a>

                  <a
                    href={mailtoUrl}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#56B4FF]" />
                    <span>Open in Email App</span>
                  </a>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-400 hover:text-white underline"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Abhishek Kumar / David Miller"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2478D4] focus:ring-1 focus:ring-[#2478D4] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Business / Organization Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Apex Health Studio"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2478D4] focus:ring-1 focus:ring-[#2478D4] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2478D4] focus:ring-1 focus:ring-[#2478D4] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Country / Region *
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#2478D4] focus:ring-1 focus:ring-[#2478D4] transition-all"
                    >
                      <option value="India">India (INR Packages)</option>
                      <option value="USA">United States (USD Packages)</option>
                      <option value="Canada">Canada (USD/CAD)</option>
                      <option value="United Kingdom">United Kingdom (GBP)</option>
                      <option value="Other">Other International</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#2478D4] focus:ring-1 focus:ring-[#2478D4] transition-all"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Landing Page Development">Landing Page Development</option>
                      <option value="Search Engine Optimization">Search Engine Optimization (SEO)</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Website Maintenance">Website Maintenance</option>
                      <option value="Business Automation">Business Automation</option>
                      <option value="Complete Business Management">Complete Business Management (Monthly retainer — custom quote)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Target Industry / Category
                    </label>
                    <select
                      value={formData.projectCategory}
                      onChange={(e) => setFormData({ ...formData, projectCategory: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#2478D4] focus:ring-1 focus:ring-[#2478D4] transition-all"
                    >
                      <option value="Clinics & Healthcare">Dental &amp; Health Clinic</option>
                      <option value="Gyms & Fitness">Gym &amp; Fitness Facility</option>
                      <option value="Restaurants & Dining">Restaurant &amp; Dining Bistro</option>
                      <option value="Local SMB & Services">Local Business &amp; Service Firm</option>
                      <option value="Startup & Tech">Startup &amp; Tech Platform</option>
                      <option value="Other">Custom Scope</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Estimated Budget Tier
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#2478D4] focus:ring-1 focus:ring-[#2478D4] transition-all"
                    >
                      <option value="Starter Package - ₹5,999">Starter Package — ₹5,999</option>
                      <option value="Business Package - ₹9,999">Business Package — ₹9,999</option>
                      <option value="Premium Package - ₹19,999+">Premium Package — Starting ₹19,999</option>
                      <option value="USA Starter ($199 USD)">USA Starter ($199 USD)</option>
                      <option value="USA Business ($399 USD)">USA Business ($399 USD)</option>
                      <option value="USA Custom Scope ($649+ USD)">USA Custom Scope ($649+ USD)</option>
                      <option value="Complete Business Management — Monthly retainer (custom quote)">Complete Business Management — Monthly retainer (custom quote)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Target Project Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#2478D4] focus:ring-1 focus:ring-[#2478D4] transition-all"
                    >
                      <option value="Urgent (1 to 2 Weeks)">Urgent (1 to 2 Weeks)</option>
                      <option value="Standard (2 to 4 Weeks)">Standard (2 to 4 Weeks)</option>
                      <option value="Flexible / Planning Ahead">Flexible / Planning Ahead</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Project Description &amp; Goals *
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us about your business goals, required pages or features, reference designs you like..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2478D4] focus:ring-1 focus:ring-[#2478D4] transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#2478D4] to-[#1D63B5] hover:from-[#1D63B5] hover:to-[#2478D4] text-white font-semibold text-sm shadow-xl shadow-[#2478D4]/30 hover:shadow-2xl hover:shadow-[#2478D4]/40 flex items-center justify-center gap-2 transition-all active:scale-[0.99] disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Processing...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Project Enquiry</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Privacy Guaranteed: Reviewed strictly by Abhishek. Zero spam.</span>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Contact Box */}
            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-white">
                    Direct WhatsApp Chat
                  </h3>
                  <span className="text-xs text-slate-400">
                    Quick inquiries &amp; consultation
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly on WhatsApp to ask questions about scope feasibility, timelines, or custom features.
              </p>
              <p className="text-xs font-mono text-emerald-400">WhatsApp: +91 80005 48640</p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold shadow-md transition-all active:scale-95"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start Direct WhatsApp Chat</span>
              </a>
            </div>

            {/* Email Box */}
            <div className="p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#2478D4]/20 border border-[#2478D4]/40 flex items-center justify-center text-[#56B4FF]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-display font-bold text-white">
                    Direct Email Inquiries
                  </h3>
                  <span className="text-xs text-slate-400">
                    For RFPs, briefs, and documentation
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300">
                Send your RFP, requirements document, or scope brief directly to:
              </p>

              <a
                href="mailto:web@youmika.site"
                className="block p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-[#56B4FF] hover:underline"
              >
                web@youmika.site
              </a>
            </div>

            {/* Working Hours & Response Policy */}
            <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-xs text-slate-400 space-y-2.5">
              <div className="flex items-center gap-2 text-slate-200 font-semibold">
                <Clock className="w-4 h-4 text-[#56B4FF]" />
                <span>Response Time SLA: Under 24 Hours</span>
              </div>
              <p className="leading-relaxed">
                We monitor inbound briefs Monday through Saturday across Indian Standard Time (IST) and US Eastern/Pacific business hours.
              </p>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
