import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Code2, 
  Layout, 
  Sparkles, 
  Search, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  ChevronRight,
  Shield,
  Zap
} from "lucide-react";
import SEO from "../components/SEO";
import { servicesData } from "../data/servicesData";

// Icon mapping helper
const iconMap = {
  Code2,
  Layout,
  Sparkles,
  Search,
  TrendingUp,
  ShieldCheck,
  Cpu
};

export default function Services({ onOpenQuote }) {
  const location = useLocation();

  useEffect(() => {
    // If there is an anchor hash, scroll to that service section
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <>
      <SEO
        title="Comprehensive Digital Services"
        description="Explore Youmika Digital's 7 core offerings: Website Development, UI/UX Design, Landing Pages, SEO, Digital Marketing, Website Maintenance, and Business Automation."
        canonicalPath="/services"
      />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-[#56B4FF]">
            <span>End-to-End Capabilities</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            High-Impact Digital Services Engineered for Growth
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We don't just build pages; we build strategic digital assets designed to establish authority, attract qualified prospects, and convert visitors into clients.
          </p>
        </div>

        {/* Quick Jump Navigation Pill Bar */}
        <div className="flex flex-wrap gap-2 p-3 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm sticky top-20 z-20 shadow-xl">
          <span className="text-xs font-semibold text-slate-400 self-center px-2">Jump to:</span>
          {servicesData.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-[#2478D4] text-slate-300 hover:text-white transition-colors"
            >
              {s.title}
            </a>
          ))}
        </div>

        {/* 7 Services Sections */}
        <div className="space-y-16">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            const isAlternate = index % 2 === 1;

            return (
              <section
                key={service.id}
                id={service.id}
                className="scroll-mt-36 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#131D31] to-[#101827] border border-slate-800 shadow-xl relative overflow-hidden"
              >
                {/* Subtle radial ambient highlight */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#2478D4]/10 rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                  {/* Left Column: Number, Title, Description, CTA */}
                  <div className="lg:col-span-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-[#56B4FF]">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-bold text-[#56B4FF]">
                          Service {service.number}
                        </span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                      {service.title}
                    </h2>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {service.longDescription}
                    </p>

                    <div className="pt-2">
                      <Link
                        to={service.ctaLink}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#2478D4] hover:bg-[#1D63B5] text-white text-xs font-semibold shadow-md shadow-[#2478D4]/30 hover:scale-[1.02] active:scale-95 transition-all"
                      >
                        <span>{service.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Business Benefits & Key Deliverables */}
                  <div className="lg:col-span-6 space-y-6">
                    {/* Business Benefits Card */}
                    <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        <TrendingUp className="w-4 h-4" />
                        <span>Tangible Business Benefits</span>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Deliverables Card */}
                    <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-3">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#56B4FF]">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Included Deliverables</span>
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#2478D4] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Closing Consultation Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#131D31] to-slate-900 border border-slate-800 text-center space-y-5">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#2478D4]/20 text-[#56B4FF] border border-[#2478D4]/40">
            Unsure Which Service Fits Your Stage?
          </span>
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white max-w-xl mx-auto">
            Schedule a Free 15-Minute Strategy Consultation
          </h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto">
            Founder &amp; Developer Abhishek will review your current website or new concept and offer honest technical guidance with zero sales pressure.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="px-7 py-3.5 rounded-xl bg-[#2478D4] hover:bg-[#1D63B5] text-white text-sm font-semibold shadow-lg shadow-[#2478D4]/30 transition-all hover:scale-105 active:scale-95"
            >
              Book Strategy Session
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

