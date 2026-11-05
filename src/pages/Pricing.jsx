import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  Sparkles, 
  Info,
  DollarSign,
  CreditCard,
  Layers
} from "lucide-react";
import SEO from "../components/SEO";
import { pricingPlans, pricingNotice } from "../data/pricingData";

export default function Pricing({ onOpenQuote }) {
  // Currency toggle state: 'INR' or 'USD'
  const [currency, setCurrency] = useState("INR");

  const faqs = [
    {
      q: "Are there any hidden charges or recurring monthly lock-ins?",
      a: "None. Our website development packages are fixed, one-time engineering investments. You own 100% of your website code, design, and assets upon project completion."
    },
    {
      q: "What costs are NOT included in the package price?",
      a: "As transparently outlined, domain registration (approx. ₹800 - ₹1,200/year or $12/year on Namecheap/Cloudflare), third-party hosting server costs (Vercel, AWS, or host of your choice), and optional paid APIs (like Twilio SMS or paid Google Workspace emails) are billed directly by the respective providers. We set them up for you without any agency markups."
    },
    {
      q: "How do revisions work?",
      a: "Starter includes 2 structured iteration rounds, Business includes 4 rounds, and Premium includes comprehensive sprint revisions during the development phase to ensure the final website matches your exact satisfaction."
    },
    {
      q: "How do you work with USA and international clients?",
      a: "We work seamlessly across US time zones with dedicated EST/PST overlap hours. We accept international payments via Stripe, Wise, and international wire transfer, providing commercial invoices."
    },
    {
      q: "Can I add features later as my business expands?",
      a: "Yes! Our code architecture is built on modular React and Tailwind CSS, allowing you to easily add new pages, booking workflows, e-commerce checkouts, or automation at any time in the future."
    }
  ];

  return (
    <>
      <SEO
        title="Transparent Pricing Packages — India & USA"
        description="Explore Youmika Digital's transparent pricing: Starter Website ₹5,999 ($199), Business Website ₹9,999 ($399), and Premium from ₹19,999 ($649). No hidden costs or fake discounts."
        canonicalPath="/pricing"
      />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-[#56B4FF]">
            <Sparkles className="w-3.5 h-3.5 text-[#56B4FF]" />
            <span>Honest &amp; Predictable Investment</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Transparent Pricing. Real Value.
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            High-converting digital engineering without inflated agency retainers or fake discount gimmicks. Choose the package that suits your current stage.
          </p>

          {/* Currency Switcher */}
          <div className="pt-4 flex items-center justify-center">
            <div className="p-1 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-1 shadow-inner">
              <button
                onClick={() => setCurrency("INR")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  currency === "INR"
                    ? "bg-[#2478D4] text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                🇮🇳 Indian Rupee (INR ₹)
              </button>
              <button
                onClick={() => setCurrency("USD")}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                  currency === "USD"
                    ? "bg-[#2478D4] text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                🇺🇸 US Dollar (USD $)
              </button>
            </div>
          </div>
        </div>

        {/* 3 Pricing Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const displayPrice = currency === "INR" ? plan.priceINR : plan.priceUSD;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? "bg-gradient-to-b from-[#131D31] via-[#101827] to-[#101827] border-2 border-[#2478D4] shadow-2xl shadow-[#2478D4]/15 lg:-translate-y-3"
                    : "bg-[#101827] border border-slate-800"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2478D4] text-white shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold text-[#56B4FF] uppercase tracking-wider">
                      {plan.badge}
                    </span>
                    <h2 className="text-2xl font-display font-bold text-white mt-1">
                      {plan.name}
                    </h2>
                    <p className="text-xs text-slate-400 mt-2 min-h-[40px] leading-relaxed">
                      {plan.idealFor}
                    </p>
                  </div>

                  <div className="pt-2 pb-6 border-y border-slate-800">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-display font-extrabold text-white">
                        {displayPrice}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 block mt-1">
                      {plan.billingNote} • Turnaround: <strong className="text-slate-200">{plan.turnaround}</strong>
                    </span>
                    <div className="mt-2 inline-block px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
                      Revision Scope: <span className="text-[#56B4FF] font-semibold">{plan.revisions}</span>
                    </div>
                  </div>

                  {/* Included Deliverables */}
                  <div className="space-y-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                      Included Deliverables:
                    </span>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {plan.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#56B4FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-800/80">
                  <Link
                    to={plan.ctaLink}
                    className={`w-full py-3.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      plan.isPopular
                        ? "bg-[#2478D4] hover:bg-[#1D63B5] text-white shadow-lg shadow-[#2478D4]/30 hover:scale-105 active:scale-95"
                        : "bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-600"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Transparent Cost Clarification Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 space-y-4">
          <div className="flex items-center gap-2 text-white font-display font-bold text-lg">
            <Info className="w-5 h-5 text-[#56B4FF]" />
            <span>{pricingNotice.transparencyTitle}</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed max-w-4xl">
            {pricingNotice.transparencyBody}
          </p>
        </div>

        {/* Dedicated USA & International Clients Quotation Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#131D31] to-slate-900 border border-slate-800 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <Globe2 className="w-5 h-5 text-[#56B4FF]" />
                <span className="text-xs font-semibold text-[#56B4FF] uppercase tracking-wider">
                  International Services
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
                {pricingNotice.usaClientNote.title}
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                {pricingNotice.usaClientNote.body}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  <strong className="text-white block font-semibold mb-0.5">Flexible Invoicing</strong>
                  <span>Stripe, Wise, Wire Transfer (USD)</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  <strong className="text-white block font-semibold mb-0.5">Time Zone Sync</strong>
                  <span>EST &amp; PST Dedicated Overlap</span>
                </div>
                <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                  <strong className="text-white block font-semibold mb-0.5">Custom Scope Quotes</strong>
                  <span>Fast estimates within 24 hours</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right space-y-3">
              <Link
                to="/contact?country=USA"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2478D4] hover:bg-[#1D63B5] text-white text-xs font-semibold shadow-lg shadow-[#2478D4]/30 transition-all hover:scale-105 active:scale-95"
              >
                <span>Request Custom USA Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <span className="block text-[11px] text-slate-400">
                Direct quote from founder Abhishek
              </span>
            </div>
          </div>
        </div>

        {/* Pricing FAQs */}
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="text-center space-y-2">
            <span className="text-xs font-semibold text-[#56B4FF] uppercase tracking-wider">
              Common Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Frequently Asked Pricing Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2"
              >
                <h4 className="text-base font-semibold text-white flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#56B4FF] shrink-0" />
                  <span>{faq.q}</span>
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm pl-6 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

