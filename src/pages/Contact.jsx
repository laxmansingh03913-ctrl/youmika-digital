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
  Code
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
    budget: "₹9,999 - Business Tier",
    description: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate clean async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Youmika Digital, I would like to inquire about a digital project for my business.`
  );
  const whatsappUrl = `https://wa.me/?text=${whatsappMessage}`;

  return (
    <>
      <SEO
        title="Contact Us — Start Your Project | Youmika Digital"
        description="Get in touch with Youmika Digital. Request a tailored quotation for web development, UI/UX, or SEO for your business in India or the USA. Fast response within 24 hours."
        canonicalPath="/contact"
      />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-[#56B4FF]">
            <Sparkles className="w-3.5 h-3.5 text-[#56B4FF]" />
            <span>Direct Access</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Let's Build Something Exceptional Together
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Have a project in mind, an existing site that needs a performance overhaul, or a new concept to launch? Reach out below and get a detailed quotation within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#131D31] border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative">
            {submitted ? (
              <div className="py-12 text-center space-y-5 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-display font-bold text-white">
                  Thank You, {formData.fullName}!
                </h3>

                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Your inquiry regarding <strong className="text-white">{formData.service}</strong> for <strong className="text-[#56B4FF]">{formData.businessName}</strong> has been received. Founder &amp; Developer Abhishek will review your brief and reply directly to <strong className="text-white">{formData.email}</strong> within 24 hours.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:bg-[#20BD5A] transition-colors"
                  >
                    Chat on WhatsApp Now
                  </a>
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
                      placeholder="e.g. Abhishek Kumar / John Doe"
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
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Estimated Budget Tier
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#2478D4] focus:ring-1 focus:ring-[#2478D4] transition-all"
                    >
                      <option value="Starter Package - ₹4,999">Starter Package — ₹4,999</option>
                      <option value="Business Package - ₹9,999">Business Package — ₹9,999</option>
                      <option value="Premium Package - ₹14,999+">Premium Package — ₹14,999+</option>
                      <option value="USA Starter ($199 USD)">USA Starter ($199 USD)</option>
                      <option value="USA Business ($399 USD)">USA Business ($399 USD)</option>
                      <option value="USA Custom Scope ($649+ USD)">USA Custom Scope ($649+ USD)</option>
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
                    placeholder="Tell us about your business, target audience, preferred timeline, or links to references you like..."
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
                  <span>Privacy Guaranteed: Your details are reviewed strictly by founder Abhishek. Zero spam.</span>
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
                    Prefer WhatsApp Chat?
                  </h3>
                  <span className="text-xs text-slate-400">
                    Instant initial response
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect directly on WhatsApp to ask quick questions about package feasibility, timelines, or custom features.
              </p>

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
                href="mailto:contact@youmika.site"
                className="block p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-[#56B4FF] hover:underline"
              >
                contact@youmika.site
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

            {/* Backend Integration Architecture Note */}
            <div className="p-5 rounded-2xl bg-[#0B0F19] border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-300 font-mono text-[11px]">
                <Code className="w-3.5 h-3.5 text-[#2478D4]" />
                <span>Developer Note: Form Integration</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                This form currently features client-side validation and interactive state feedback. To connect your production email routing, simply add your endpoint from Formspree, Web3Forms, Resend, or your custom server webhook.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

