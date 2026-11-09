import React, { useState } from "react";
import { X, Send, Sparkles, CheckCircle2, Shield, MessageSquare, Mail } from "lucide-react";

export default function QuoteModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    country: "India",
    service: "Website Development",
    budget: "₹9,999 - Business Tier",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
      if (endpoint) {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...formData, submittedAt: new Date().toISOString() })
        });
      }

      try {
        const existing = JSON.parse(localStorage.getItem("youmika_inquiries") || "[]");
        existing.push({ ...formData, date: new Date().toISOString() });
        localStorage.setItem("youmika_inquiries", JSON.stringify(existing));
      } catch (err) {}

      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Youmika Digital, I requested a quote on your website.\nName: ${formData.fullName}\nBusiness: ${formData.businessName}\nService: ${formData.service}\nBudget: ${formData.budget}`
  );
  const whatsappUrl = `https://wa.me/918000548640?text=${whatsappMessage}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#101827] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="bg-[#0B0F19] px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#2478D4]/20 border border-[#2478D4]/40 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-[#56B4FF]" />
            </div>
            <div>
              <h3 className="text-base font-display font-bold text-white">
                Request a Project Quotation
              </h3>
              <p className="text-xs text-slate-400">
                Youmika Digital • Direct Review by Abhishek
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-display font-bold text-white">
                Quotation Request Ready to Send
              </h4>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. Your request is saved in this browser — please tap <strong className="text-white">Send on WhatsApp</strong> below so it reaches Abhishek directly, and he will reply to <strong className="text-white">{formData.email}</strong> within 24 hours.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send on WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rahul Sharma / David Miller"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2478D4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Business / Clinic / Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="e.g. Apex Health Clinic"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2478D4]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2478D4]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Country *
                  </label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#2478D4]"
                  >
                    <option value="India">India (INR Pricing)</option>
                    <option value="USA">United States (USD Pricing)</option>
                    <option value="Canada">Canada</option>
                    <option value="UK">United Kingdom</option>
                    <option value="Other">Other International</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Primary Service *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#2478D4]"
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
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Estimated Budget Tier
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white focus:outline-none focus:border-[#2478D4]"
                  >
                    <option value="₹5,999 - Starter Package">₹5,999 — Starter Website</option>
                    <option value="₹9,999 - Business Package">₹9,999 — Business Website</option>
                    <option value="₹19,999+ - Premium Package">₹19,999+ — Premium Tier</option>
                    <option value="$199 - $399 (USA Client)">$199 - $399 USD (USA Client)</option>
                    <option value="$400+ Custom (USA Client)">$400+ USD Custom Scope (USA Client)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Brief Project Overview (Optional)
                </label>
                <textarea
                  rows="3"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Tell us about your business goals, target timeline, or features needed..."
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#2478D4]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-[#2478D4] to-[#1D63B5] hover:from-[#1D63B5] hover:to-[#2478D4] text-white font-semibold text-sm shadow-lg shadow-[#2478D4]/30 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? "Delivering..." : "Submit Quotation Request"}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <Shield className="w-3.5 h-3.5 text-slate-400" />
                <span>Zero spam guarantee • Direct founder review by Abhishek</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
