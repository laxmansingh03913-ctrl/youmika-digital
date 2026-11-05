import React from "react";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Code2, 
  Target, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Cpu, 
  Zap, 
  Compass,
  FileCheck,
  Terminal,
  HeartHandshake
} from "lucide-react";
import SEO from "../components/SEO";

export default function About({ onOpenQuote }) {
  const processSteps = [
    {
      step: "01",
      name: "Discovery & Strategic Architecture",
      desc: "We analyze your business model, target clientele (India or USA), and primary conversion goal (calls, bookings, sales). We define the user journey before writing a single line of code."
    },
    {
      step: "02",
      name: "High-Fidelity Interface Design",
      desc: "We craft clean, modern UI/UX mockups in Figma with strong visual hierarchy, generous whitespace, brand-aligned color palettes, and frictionless mobile touch targets."
    },
    {
      step: "03",
      name: "Agile Clean-Code Engineering",
      desc: "We code using React, Tailwind CSS, and modern web standards. Zero bulky page-builder bloat, zero spaghetti code. Clean, modular, and maintainable architecture."
    },
    {
      step: "04",
      name: "Performance Tuning & Production Launch",
      desc: "Comprehensive testing across devices, Google Lighthouse 95+ speed tuning, on-page SEO schema implementation, domain DNS setup, and zero-downtime deployment."
    }
  ];

  return (
    <>
      <SEO
        title="About Us — Mission, Process & Engineering Standards"
        description="Learn about Youmika Digital, our developer-led agency model, commitment to quality, and founder Abhishek. Clean code and digital experiences that grow businesses."
        canonicalPath="/about"
      />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-[#56B4FF]">
            <Compass className="w-3.5 h-3.5 text-[#56B4FF]" />
            <span>Who We Are</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Engineering Digital Growth with Precision &amp; Transparency
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Youmika Digital is an independent, founder-led digital agency serving ambitious businesses across India and the United States. We reject generic templates, opaque pricing, and middleman agency bloat.
          </p>
        </div>

        {/* Mission & Approach 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#131D31] to-[#101827] border border-slate-800 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-[#2478D4]/20 border border-[#2478D4]/40 flex items-center justify-center text-[#56B4FF]">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white">
              Our Mission
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Our mission is to help small and medium-sized businesses, healthcare clinics, fitness clubs, and restaurants turn their online presence into an active revenue-generating system. We believe every enterprise deserves a modern, lightning-fast website that inspires trust from the very first click.
            </p>
          </div>

          {/* Approach */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#131D31] to-[#101827] border border-slate-800 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white">
              Our Approach
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              We approach every website as an engineering challenge and a marketing asset. By blending conversion rate optimization (CRO) principles with performant frontend architecture, our solutions look sophisticated, load instantly, and guide visitors smoothly toward taking real-world action.
            </p>
          </div>
        </div>

        {/* 4-Step Agile Process */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold text-[#56B4FF] uppercase tracking-wider">
              Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Our 4-Stage Development Process
            </h2>
            <p className="text-slate-400 text-sm">
              Predictable, structured, and collaborative sprints from discovery to live deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 relative space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-3xl font-display font-extrabold text-[#2478D4] block">
                    {step.step}
                  </span>
                  <h3 className="text-base font-display font-bold text-white">
                    {step.name}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-block w-8 h-1 bg-[#2478D4] rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment to Quality */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Standards We Never Compromise On
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Our Commitment to Technical Quality
            </h2>
            <p className="text-slate-400 text-sm">
              Every deliverable from Youmika Digital is held to international development benchmarks:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Sub-Second Speed", desc: "Optimized bundles, modern image formats, and responsive code." },
              { title: "Mobile Touch Ergonomics", desc: "Every button and form element tested for one-handed thumb reach." },
              { title: "Semantic SEO Standards", desc: "Clean H1-H6 hierarchy, Schema.org JSON-LD, and valid metadata." },
              { title: "Security & Clean Code", desc: "No bloated plugins with hidden vulnerabilities. Modern secure code." }
            ].map((q, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <h4 className="text-white text-sm font-semibold">{q.title}</h4>
                <p className="text-slate-400 text-xs">{q.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section (Abhishek) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-slate-900 via-[#131D31] to-slate-900 border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 text-center lg:text-left space-y-4">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#2478D4] to-slate-900 border-2 border-[#56B4FF]/40 flex items-center justify-center text-white font-display font-extrabold text-4xl shadow-xl shadow-[#2478D4]/20 mx-auto lg:mx-0">
                A
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-white">
                  Abhishek
                </h3>
                <span className="text-xs font-semibold text-[#56B4FF] block">
                  Founder &amp; Full-Stack Developer
                </span>
                <span className="text-xs text-slate-400">
                  Youmika Digital
                </span>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                Hello! I am Abhishek, the founder and full-stack developer behind Youmika Digital.
              </p>
              <p>
                I founded Youmika Digital after witnessing countless small business owners, dental clinics, and local entrepreneurs get burned by traditional agencies that charge exorbitant fees, deliver slow-loading template websites, and disappear when maintenance is needed.
              </p>
              <p>
                By working with me directly, you get direct engineering expertise, clear communication without corporate jargon, and honest pricing starting from just ₹4,999 for India and $199 for US businesses.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="px-5 py-2.5 rounded-lg bg-[#2478D4] hover:bg-[#1D63B5] text-white text-xs font-semibold transition-colors"
                >
                  Contact Abhishek Directly
                </Link>
                <a
                  href="mailto:web@youmika.site"
                  className="text-xs text-slate-400 hover:text-white"
                >
                  web@youmika.site
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

