import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  Eye, 
  Code2, 
  Cpu, 
  Globe2, 
  ChevronRight,
  Stethoscope,
  Dumbbell,
  UtensilsCrossed,
  Briefcase
} from "lucide-react";
import SEO from "../components/SEO";
import { servicesData } from "../data/servicesData";
import { projectsData } from "../data/projectsData";
import { pricingPlans } from "../data/pricingData";
import ProjectModal from "../components/ProjectModal";

export default function Home({ onOpenQuote }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeMockupTab, setActiveMockupTab] = useState("preview");

  return (
    <>
      <SEO 
        title="We Build Digital Experiences That Grow Businesses" 
        description="From stunning websites to powerful digital strategies, we help businesses in India and the USA turn their online presence into real opportunities."
        canonicalPath="/"
      />

      <div className="relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-ambient-radial pointer-events-none" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#2478D4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-96 left-10 w-96 h-96 bg-[#56B4FF]/5 rounded-full blur-3xl pointer-events-none" />

        {/* ============================================================ */}
        {/* 1. HERO SECTION                                              */}
        {/* ============================================================ */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-[#56B4FF] shadow-sm backdrop-blur-sm animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-[#56B4FF] animate-pulse" />
              <span>Modern Digital Agency for India &amp; USA Businesses</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white leading-[1.12]">
              We Build Digital Experiences <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#56B4FF] via-[#2478D4] to-blue-400">
                That Grow Businesses.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
              From stunning websites to powerful digital strategies, we help businesses turn their online presence into real opportunities.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2478D4] to-[#1D63B5] hover:from-[#1D63B5] hover:to-[#2478D4] text-white font-semibold text-base shadow-xl shadow-[#2478D4]/30 hover:shadow-2xl hover:shadow-[#2478D4]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-5 h-5 text-[#56B4FF]" />
              </Link>

              <Link
                to="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base border border-slate-700/80 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-5 h-5 text-slate-400" />
              </Link>
            </div>

            {/* Value Indicators */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#56B4FF]" />
                <span>Direct Founder-Led Development</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#56B4FF]" />
                <span>Transparent Packages from ₹4,999 / $199</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#56B4FF]" />
                <span>Lighthouse 95+ Performance</span>
              </div>
            </div>
          </div>

          {/* Premium Hero Visual: Modern Interface Mockup */}
          <div className="mt-14 sm:mt-18 relative max-w-5xl mx-auto">
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2478D4]/30 via-[#56B4FF]/20 to-[#2478D4]/30 rounded-2xl blur-xl opacity-75" />

            {/* Browser Container */}
            <div className="relative rounded-2xl bg-[#0F172A] border border-slate-700 shadow-2xl overflow-hidden">
              {/* Browser Window Chrome */}
              <div className="bg-[#0B0F19] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <div className="hidden sm:flex items-center gap-2 ml-4 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono">
                    <span className="text-emerald-400">https://</span>
                    <span>digital.youmika.site/experience-engine</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>React 19 • Fast CDN</span>
                </div>
              </div>

              {/* Mockup Content Screen */}
              <div className="p-6 sm:p-10 bg-gradient-to-br from-[#101827] via-[#131D31] to-[#0F172A]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: UI Showcase */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-[#56B4FF] uppercase tracking-wider">
                        High-Converting Digital Architecture
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                        Built for Businesses That Demand Results
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        We blend high-impact aesthetics with clean technical execution. Every element is tested to accelerate trust, capture qualified inquiries, and drive customer retention.
                      </p>
                    </div>

                    {/* Interactive Metrics Grid */}
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                        <span className="text-xs text-slate-400 block font-medium">PageSpeed</span>
                        <span className="text-2xl font-bold font-display text-emerald-400">99<span className="text-xs text-slate-400 font-normal">/100</span></span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">Google Web Vitals</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                        <span className="text-xs text-slate-400 block font-medium">Conversion</span>
                        <span className="text-2xl font-bold font-display text-[#56B4FF]">+34%</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">Avg Inquiry Lift</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                        <span className="text-xs text-slate-400 block font-medium">Turnaround</span>
                        <span className="text-2xl font-bold font-display text-white">5-10<span className="text-xs text-slate-400 font-normal"> Days</span></span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">Agile Sprint Delivery</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <button 
                        onClick={onOpenQuote}
                        className="px-4 py-2 rounded-lg bg-[#2478D4] text-white text-xs font-semibold hover:bg-[#1D63B5] transition-colors"
                      >
                        Request Free Strategy Audit
                      </button>
                      <Link 
                        to="/work"
                        className="text-xs text-slate-300 hover:text-white flex items-center gap-1"
                      >
                        <span>View 3 Live Demo Projects</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Code & Interactive Visual Card */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="p-5 rounded-xl bg-slate-900/95 border border-slate-800 font-mono text-xs text-slate-300 space-y-2.5 shadow-inner">
                      <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800 text-[11px]">
                        <span>youmika.engine.config.ts</span>
                        <span className="text-emerald-400">Production Ready</span>
                      </div>
                      <p><span className="text-purple-400">export const</span> <span className="text-blue-300">agencyStack</span> = &#123;</p>
                      <p className="pl-4"><span className="text-slate-400">founder:</span> <span className="text-emerald-300">"Abhishek"</span>,</p>
                      <p className="pl-4"><span className="text-slate-400">regions:</span> [<span className="text-emerald-300">"India"</span>, <span className="text-emerald-300">"USA"</span>],</p>
                      <p className="pl-4"><span className="text-slate-400">architecture:</span> <span className="text-emerald-300">"Ultra-Fast Jamstack"</span>,</p>
                      <p className="pl-4"><span className="text-slate-400">conversionDesign:</span> <span className="text-amber-300">true</span>,</p>
                      <p className="pl-4"><span className="text-slate-400">pricingStartsAt:</span> <span className="text-cyan-300">"₹4,999 / $199"</span></p>
                      <p>&#125;;</p>
                    </div>

                    {/* Floating Trust Card */}
                    <div className="p-3.5 rounded-xl bg-[#1E293B]/80 border border-slate-700 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#2478D4]/20 border border-[#2478D4]/40 flex items-center justify-center text-[#56B4FF]">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div className="text-xs">
                        <strong className="text-white block font-semibold">Zero Bloat, Zero Delays</strong>
                        <span className="text-slate-400">Direct engineering without agency middleman markups.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. INDUSTRY FOCUS / AUDIENCE STRIP                           */}
        {/* ============================================================ */}
        <section className="border-y border-slate-800/80 bg-[#0B0F19]/90 py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                Specialized Digital Solutions Tailored For Your Industry
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "Dental & Health Clinics", icon: Stethoscope, tag: "Patient Booking" },
                { name: "Gyms & Fitness Centers", icon: Dumbbell, tag: "Membership Signups" },
                { name: "Fine Dining & Bistros", icon: UtensilsCrossed, tag: "Table Reservations" },
                { name: "Local SMBs & Services", icon: Briefcase, tag: "Lead Inquiries" },
                { name: "Startups & Tech", icon: Cpu, tag: "Rapid Launch" },
                { name: "USA & Global Businesses", icon: Globe2, tag: "Cross-Border Overlap" }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-[#2478D4]/50 transition-all text-center space-y-2 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-800 group-hover:bg-[#2478D4]/20 group-hover:text-[#56B4FF] text-slate-400 flex items-center justify-center mx-auto transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-200 block">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-[#56B4FF] block">
                      {item.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. CORE SERVICES PREVIEW                                     */}
        {/* ============================================================ */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-semibold text-[#56B4FF] uppercase tracking-wider">
                Comprehensive Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Everything Your Business Needs to Dominate Online
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                From initial design wireframing to high-performance coding and workflow automation, we engineer every touchpoint with precision.
              </p>
            </div>

            <div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#56B4FF] hover:text-white transition-colors"
              >
                <span>Explore All 7 Services In Detail</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="p-7 rounded-2xl bg-gradient-to-b from-[#131D31] to-[#101827] border border-slate-800 hover:border-[#2478D4]/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#56B4FF]">
                      {service.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-[#56B4FF] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 group-hover:text-white transition-colors"
                  >
                    <span>View deliverables &amp; ROI</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#56B4FF] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 7th Service Callout Banner */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-[#131D31] to-slate-900 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Service #07 • Productivity &amp; Speed
              </span>
              <h4 className="text-xl font-display font-bold text-white">
                Business Automation &amp; Instant WhatsApp Ingestion
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
                Automatically route web leads directly to WhatsApp, synchronize Calendly bookings, and eliminate manual intake friction.
              </p>
            </div>
            <Link
              to="/services#business-automation"
              className="px-5 py-2.5 rounded-lg bg-[#2478D4] hover:bg-[#1D63B5] text-white text-xs font-semibold transition-colors shrink-0 shadow-md"
            >
              Learn About Automation
            </Link>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. FEATURED CONCEPT WORK (3 DEMONSTRATION PROJECTS)          */}
        {/* ============================================================ */}
        <section className="py-24 bg-[#0B0F19] border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#2478D4]/10 border border-[#2478D4]/30 text-[#56B4FF]">
                Demonstration Portfolio
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight">
                Designed to Inspire. Built to Convert.
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Explore three handcrafted demonstration concept websites. Built to showcase our responsive UI/UX standards, appointment booking architecture, and conversion craftsmanship.
              </p>
              <div className="inline-block p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400">
                Notice: These are concept demonstration prototypes created to illustrate technical capabilities.
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-[#101827] border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
                >
                  {/* Thumbnail / Mock Screen Graphic */}
                  <div
                    className="p-6 relative overflow-hidden border-b border-slate-800"
                    style={{
                      background: `linear-gradient(135deg, ${project.accentColor}15 0%, #101827 100%)`
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-300 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-700/60">
                        {project.badge}
                      </span>
                      <span className="text-[11px] text-emerald-400 font-medium">
                        Concept Prototype
                      </span>
                    </div>

                    <div className="space-y-2 py-4">
                      <h4 className="text-xl font-display font-bold text-white group-hover:text-[#56B4FF] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-300 line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Metrics row */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="text-center">
                          <span className="text-xs font-bold text-white block">
                            {m.value}
                          </span>
                          <span className="text-[9px] text-slate-400 uppercase tracking-wider block">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-2.5 rounded-lg bg-slate-800 hover:bg-[#2478D4] text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 group-hover:bg-[#2478D4]"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Launch Live Interactive Demo</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-white hover:border-[#2478D4] text-xs font-semibold transition-all"
              >
                <span>View Full Portfolio &amp; Technical Breakdown</span>
                <ArrowRight className="w-4 h-4 text-[#56B4FF]" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. THE YOUMIKA ADVANTAGE (WHY CHOOSE US)                     */}
        {/* ============================================================ */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold text-[#56B4FF] uppercase tracking-wider">
                Founder-Led Engineering
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                No Sales Middlemen. <br />
                Direct Collaboration with Your Developer.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Most agencies assign your project to an account manager who hands it to a junior intern. At Youmika Digital, you collaborate directly with founder and developer Abhishek. This ensures razor-sharp execution, faster feedback cycles, and zero communication lost in translation.
              </p>

              <div className="space-y-3.5 pt-2">
                {[
                  {
                    title: "Bespoke Modern Code (No Generic AI Templates)",
                    desc: "Handcrafted React and Tailwind code designed specifically for your brand identity and conversion goals."
                  },
                  {
                    title: "Lighthouse 95+ Core Web Vitals",
                    desc: "Blazing fast load times that reduce bounce rates, boost mobile experience, and satisfy Google ranking factors."
                  },
                  {
                    title: "India & USA Time-Zone Fluency",
                    desc: "Dedicated communication overlap hours for US clients with native-quality English fluency and clear documentation."
                  },
                  {
                    title: "Honest, Transparent Pricing",
                    desc: "Fixed package pricing from ₹4,999 ($199). No hidden maintenance trap, no fake discount markups."
                  }
                ].map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <CheckCircle2 className="w-5 h-5 text-[#56B4FF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white text-sm font-semibold block">
                        {point.title}
                      </strong>
                      <span className="text-slate-400 text-xs">
                        {point.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Founder Profile Box */}
            <div className="lg:col-span-6">
              <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-[#131D31] to-[#0F172A] border border-slate-700/80 shadow-2xl relative">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#2478D4] to-slate-800 border-2 border-[#56B4FF]/40 flex items-center justify-center text-white font-display font-extrabold text-2xl shadow-lg shadow-[#2478D4]/20">
                      A
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-white">
                        Abhishek
                      </h3>
                      <span className="text-xs font-semibold text-[#56B4FF] block">
                        Founder &amp; Lead Full-Stack Developer
                      </span>
                      <span className="text-xs text-slate-400">
                        Youmika Digital • Serving India &amp; USA
                      </span>
                    </div>
                  </div>

                  <blockquote className="text-slate-300 text-sm italic leading-relaxed border-l-2 border-[#2478D4] pl-4">
                    "My vision for Youmika Digital is simple: deliver agency-grade design and engineering at transparent, fair pricing—without the corporate bloat or fake promises. Every website we build is crafted to be an active revenue-generating asset."
                  </blockquote>

                  <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block">Personal Commitment</span>
                      <strong className="text-white">100% Quality Guarantee</strong>
                    </div>
                    <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                      <span className="text-slate-400 block">Communication</span>
                      <strong className="text-white">WhatsApp &amp; Video Calls</strong>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/about"
                      className="w-full py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors border border-slate-700"
                    >
                      <span>Read Our Development Philosophy</span>
                      <ArrowRight className="w-4 h-4 text-[#56B4FF]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. TRANSPARENT PRICING SNAPSHOT                              */}
        {/* ============================================================ */}
        <section className="py-24 bg-[#0B0F19] border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
              <span className="text-xs font-semibold text-[#56B4FF] uppercase tracking-wider">
                Straightforward Investment
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
                Clear Packages. No Hidden Costs.
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Realistic pricing tailored to grow with your business. Choose a package or request a customized scope for USA operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                    plan.isPopular
                      ? "bg-gradient-to-b from-[#131D31] via-[#101827] to-[#101827] border-2 border-[#2478D4] shadow-2xl shadow-[#2478D4]/10 md:-translate-y-2"
                      : "bg-[#101827] border border-slate-800"
                  }`}
                >
                  {plan.isPopular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2478D4] text-white shadow-md">
                      Recommended for Growth
                    </span>
                  )}

                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-semibold text-[#56B4FF] uppercase tracking-wider">
                        {plan.badge}
                      </span>
                      <h3 className="text-xl font-display font-bold text-white mt-1">
                        {plan.name}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 min-h-[36px]">
                        {plan.idealFor}
                      </p>
                    </div>

                    <div className="pt-2 pb-4 border-y border-slate-800">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl font-display font-extrabold text-white">
                          {plan.priceINR}
                        </span>
                        <span className="text-xs text-slate-400">/ {plan.priceUSD} USD</span>
                      </div>
                      <span className="text-[11px] text-slate-400 block mt-1">
                        Turnaround: <strong className="text-slate-300">{plan.turnaround}</strong> • {plan.revisions}
                      </span>
                    </div>

                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {plan.deliverables.slice(0, 5).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#56B4FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-8">
                    <Link
                      to={plan.ctaLink}
                      className={`w-full py-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                        plan.isPopular
                          ? "bg-[#2478D4] hover:bg-[#1D63B5] text-white shadow-lg shadow-[#2478D4]/30"
                          : "bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700"
                      }`}
                    >
                      <span>{plan.ctaText}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/pricing"
                className="text-xs font-semibold text-[#56B4FF] hover:text-white inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Read detailed feature breakdowns &amp; USA quotation notes</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Interactive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

