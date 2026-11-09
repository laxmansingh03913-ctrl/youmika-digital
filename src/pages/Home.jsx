import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  Eye, 
  Code2, 
  Cpu, 
  Globe2, 
  ChevronRight,
  Stethoscope,
  Dumbbell,
  UtensilsCrossed,
  Briefcase,
  UserCheck,
  Gauge,
  Tag,
  MessageCircle,
  FileCheck,
  Rocket
} from "lucide-react";
import SEO from "../components/SEO";
import { servicesData } from "../data/servicesData";
import { projectsData } from "../data/projectsData";
import { pricingPlans } from "../data/pricingData";
import ProjectModal from "../components/ProjectModal";

export default function Home({ onOpenQuote }) {
  const [selectedProject, setSelectedProject] = useState(null);

  // 4 Core Honest Value Propositions
  const coreValueProps = [
    {
      title: "You Talk to Me, Not a Team",
      description: "I'm Abhishek. I design and build your website myself. No juniors, no account managers, no middlemen.",
      icon: UserCheck
    },
    {
      title: "Fast Websites That Work on Phones",
      description: "Light, fast pages that load quickly and look right on any phone — because that's where your customers are.",
      icon: Gauge
    },
    {
      title: "Clear Prices, No Surprises",
      description: "Packages start at ₹5,999 ($199). The price I quote is the price you pay — no hidden charges later.",
      icon: Tag
    },
    {
      title: "Talk to Me Directly",
      description: "WhatsApp, email (web@youmika.site), or a video call — you always reach me directly, in India or the USA.",
      icon: MessageCircle
    }
  ];

  // 4-Stage Project Delivery Process
  const deliveryProcess = [
    {
      step: "01",
      title: "We Talk",
      desc: "You tell me what your business needs — more calls, more bookings, more sales. I ask questions until I understand it properly."
    },
    {
      step: "02",
      title: "I Design",
      desc: "I show you a simple design first. You tell me what you like and what you don't, and we fix it before any code is written."
    },
    {
      step: "03",
      title: "I Build",
      desc: "I write the code myself — clean, fast, and easy to change later. No heavy page builders, no bloated plugins."
    },
    {
      step: "04",
      title: "You Go Live",
      desc: "We test it on phones and computers, connect your domain, and launch. The website is fully yours — files, domain, everything."
    }
  ];

  return (
    <>
      <SEO 
        title="We Manage Your Entire Business Online" 
        description="Youmika Digital manages your entire business online — websites, social media, leads, bookings, and reviews — for businesses in India and the USA."
        canonicalPath="/"
      />

      <div className="relative overflow-hidden bg-white">
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-ambient-radial pointer-events-none" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#2478D4]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-96 left-10 w-96 h-96 bg-[#56B4FF]/5 rounded-full blur-3xl pointer-events-none" />

        {/* ============================================================ */}
        {/* 1. HERO SECTION                                              */}
        {/* ============================================================ */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-[#1D63B5] shadow-sm backdrop-blur-sm animate-fadeIn">
              <span className="w-2 h-2 rounded-full bg-[#2478D4] animate-pulse" />
              <span>Modern Digital Agency for India &amp; USA Businesses</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              We Don't Just Build Websites — <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2478D4] via-[#1D63B5] to-[#56B4FF]">
                We Manage Your Entire Business Online.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
              Websites, social media, leads, bookings, and reviews — handled directly by Abhishek while you focus on running your business.
            </p>

            {/* Positioning line */}
            <p className="text-base sm:text-lg font-semibold text-slate-900 max-w-2xl mx-auto leading-relaxed">
              We don't just build websites — we handle your website, marketing and SEO, your entire business online.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#2478D4] to-[#1D63B5] hover:from-[#1D63B5] hover:to-[#2478D4] text-white font-semibold text-base shadow-xl shadow-[#2478D4]/30 hover:shadow-2xl hover:shadow-[#2478D4]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </Link>

              <Link
                to="/work"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 hover:text-slate-900 font-semibold text-base border border-slate-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-5 h-5 text-slate-500" />
              </Link>
            </div>

            {/* Value Indicators (Honest propositions, no fake claims) */}
            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1D63B5]" />
                <span>Built by Abhishek himself</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1D63B5]" />
                <span>Fast on every phone</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1D63B5]" />
                <span>Starts at ₹5,999 / $199</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#1D63B5]" />
                <span>Talk directly on WhatsApp</span>
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
                  <div className="hidden sm:flex items-center gap-2 ml-4 px-3 py-1 rounded bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono whitespace-nowrap">
                    <span className="text-emerald-400">https://</span>
                    <span>digital.youmika.site</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                  <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>3 live demos — try them below</span>
                </div>
              </div>

              {/* Mockup Content Screen */}
              <div className="p-6 sm:p-10 bg-gradient-to-br from-[#101827] via-[#131D31] to-[#0F172A]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: UI Showcase */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs font-semibold text-[#56B4FF] uppercase tracking-wider">
                        Real Websites, Not Mockups
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                        Don't Believe the Words — Try a Demo
                      </h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        These are real websites I built. Click one, use the booking form, try the filters. That's exactly what your business will get.
                      </p>
                    </div>

                    {/* Value Pillars (Replaces unverified statistics) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                        <span className="text-xs font-semibold text-white block mb-0.5">Built by Me, Abhishek</span>
                        <span className="text-[11px] text-slate-400 block">No juniors, no outsourcing</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                        <span className="text-xs font-semibold text-white block mb-0.5">Fast, Light Code</span>
                        <span className="text-[11px] text-slate-400 block">Loads quickly on any phone</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                        <span className="text-xs font-semibold text-white block mb-0.5">Made for Phones First</span>
                        <span className="text-[11px] text-slate-400 block">Big buttons, easy to tap</span>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                        <span className="text-xs font-semibold text-white block mb-0.5">Prices from ₹5,999</span>
                        <span className="text-[11px] text-slate-400 block">No surprises, no hidden charges</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <button 
                        onClick={onOpenQuote}
                        className="px-4 py-2 rounded-lg bg-[#2478D4] text-white text-xs font-semibold hover:bg-[#1D63B5] transition-colors"
                      >
                        Request Project Quotation
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

                  {/* Right Column: Real Live Demos */}
                  <div className="lg:col-span-5 space-y-3">
                    {[
                      { img: "/demo-img/dental/dental-hero.webp", name: "Apex Dental", try: "Book an appointment", url: "/demo-apex-dental.html" },
                      { img: "/demo-img/gym/hero.jpg", name: "IronPulse Gym", try: "Try the class filter", url: "/demo-ironpulse-gym.html" },
                      { img: "/demo-img/restaurant/restaurant-hero.webp", name: "Saffron & Sage", try: "Reserve a table", url: "/demo-saffron-sage.html" }
                    ].map((demo) => (
                      <a
                        key={demo.url}
                        href={demo.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/95 border border-slate-800 hover:border-[#2478D4]/60 transition-colors group"
                      >
                        <img
                          src={demo.img}
                          alt={demo.name}
                          className="w-16 h-12 rounded-lg object-cover shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="text-sm font-semibold text-white block group-hover:text-[#56B4FF] transition-colors">
                            {demo.name}
                          </span>
                          <span className="text-[11px] text-slate-400 block">
                            {demo.try}
                          </span>
                        </div>
                        <span className="text-xs font-semibold text-[#56B4FF] shrink-0 inline-flex items-center gap-1">
                          Open
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </a>
                    ))}

                    {/* Honest Note */}
                    <div className="p-3.5 rounded-xl bg-[#1E293B]/80 border border-slate-700 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#2478D4]/20 border border-[#2478D4]/40 flex items-center justify-center text-[#56B4FF] shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div className="text-xs">
                        <strong className="text-white block font-semibold">No fake screenshots — real, working websites</strong>
                        <span className="text-slate-400">Every form, filter, and button above actually works.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. CORE VALUE PROPOSITIONS (HONEST PILLARS)                  */}
        {/* ============================================================ */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
              <span className="text-xs font-semibold text-[#1D63B5] uppercase tracking-wider">
                Why Work With Me
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
                No Big Promises. Just Honest Work.
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm">
                Clear prices, direct communication, and websites that do their job.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValueProps.map((prop, idx) => {
                const Icon = prop.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#2478D4]/40 transition-all space-y-3"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#2478D4]/15 border border-[#2478D4]/30 flex items-center justify-center text-[#1D63B5]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-display font-bold text-slate-900">
                      {prop.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {prop.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. INDUSTRY FOCUS / AUDIENCE STRIP                           */}
        {/* ============================================================ */}
        <section className="border-b border-slate-200 bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
                Who I Build For
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
                    className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#2478D4]/50 transition-all text-center space-y-2 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-blue-50 group-hover:text-[#1D63B5] text-slate-500 flex items-center justify-center mx-auto transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-slate-800 block">
                      {item.name}
                    </span>
                    <span className="text-[10px] text-[#1D63B5] block">
                      {item.tag}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. CORE SERVICES PREVIEW                                     */}
        {/* ============================================================ */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-semibold text-[#1D63B5] uppercase tracking-wider">
                What I Can Do
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
                What I Can Do for Your Business
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Websites, marketing, bookings, and full management — pick what you need, or hand me the whole thing.
              </p>
            </div>

            <div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D63B5] hover:text-slate-900 transition-colors"
              >
                <span>See all 8 services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.slice(0, 7).map((service) => (
              <div
                key={service.id}
                className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#2478D4]/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#1D63B5]">
                      {service.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-[#1D63B5] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200">
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors"
                  >
                    <span>View deliverables &amp; ROI</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#1D63B5] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 7th Service Callout Banner */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-blue-50 border border-blue-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                Service #08 • Monthly Partner
              </span>
              <h4 className="text-xl font-display font-bold text-slate-900">
                Complete Business Management
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm max-w-xl">
                Website, social media, Google profile, leads, bookings, and reviews — your whole business, managed every month.
              </p>
            </div>
            <Link
              to="/services#complete-business-management"
              className="px-5 py-2.5 rounded-lg bg-[#2478D4] hover:bg-[#1D63B5] text-white text-xs font-semibold transition-colors shrink-0 shadow-md"
            >
              See the Management Plan
            </Link>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. FEATURED CONCEPT WORK (3 DEMONSTRATION PROJECTS)          */}
        {/* ============================================================ */}
        <section className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#2478D4]/5 border border-[#2478D4]/30 text-[#1D63B5]">
                Demonstration Portfolio
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                Don't Take My Word for It — Try Them Yourself.
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Three real demo websites I built. Click one and use it — book a table, filter the menu, try the class schedule. Your website will work the same way.
              </p>
              <div className="inline-block p-2 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600">
                Notice: These are concept demonstration prototypes created to illustrate technical capabilities.
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {projectsData.map((project) => (
                <div
                  key={project.id}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-slate-300 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
                >
                  {/* Thumbnail / Mock Screen Graphic */}
                  <div
                    className="p-6 relative overflow-hidden border-b border-slate-200"
                    style={{
                      background: `linear-gradient(135deg, ${project.accentColor}15 0%, #ffffff 100%)`
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-600 px-2.5 py-1 rounded bg-white border border-slate-300">
                        {project.badge}
                      </span>
                      <span className="text-[11px] text-emerald-700 font-medium">
                        Concept Demo
                      </span>
                    </div>

                    <div className="space-y-2 py-4">
                      <h4 className="text-xl font-display font-bold text-slate-900 group-hover:text-[#1D63B5] transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Architecture specifications row */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-200">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="text-center">
                          <span className="text-xs font-semibold text-slate-900 block">
                            {m.value}
                          </span>
                          <span className="text-[9px] text-slate-500 uppercase tracking-wider block">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {project.summary}
                    </p>

                    <div className="space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2.5 rounded-lg bg-[#2478D4] hover:bg-[#1D63B5] text-white text-xs font-semibold transition-all flex items-center justify-center gap-2"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Open Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full py-2 text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors"
                      >
                        View details &amp; features
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-300 text-slate-700 hover:text-slate-900 shadow-sm hover:border-[#2478D4] text-xs font-semibold transition-all"
              >
                <span>View Full Portfolio &amp; Technical Breakdown</span>
                <ArrowRight className="w-4 h-4 text-[#1D63B5]" />
              </Link>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. OUR PROJECT DELIVERY PROCESS (IMPROVED TRUST)              */}
        {/* ============================================================ */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold text-[#1D63B5] uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              Four Simple Steps
            </h2>
            <p className="text-slate-500 text-sm">
              You always know what's happening, and you always talk to me.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryProcess.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 relative space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-3xl font-display font-extrabold text-[#2478D4] block">
                    {step.step}
                  </span>
                  <h3 className="text-base font-display font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="inline-block w-8 h-1 bg-[#2478D4] rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. FOUNDER SECTION (ABHISHEK — AUTHENTIC TRUST)               */}
        {/* ============================================================ */}
        <section className="py-20 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 text-center lg:text-left space-y-4">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#2478D4] to-[#101827] border-2 border-[#2478D4]/30 shadow-xl shadow-[#2478D4]/20 mx-auto lg:mx-0 flex items-center justify-center" aria-label="Abhishek — Founder of Youmika Digital">
                    <span className="text-4xl font-display font-extrabold text-white">A</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-slate-900">
                      Abhishek
                    </h3>
                    <span className="text-xs font-semibold text-[#1D63B5] block">
                      Founder &amp; Lead Full-Stack Developer
                    </span>
                    <span className="text-xs text-slate-500">
                      Youmika Digital • Serving India &amp; USA
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-8 space-y-4 text-slate-600 text-sm leading-relaxed">
                  <p>
                    Hi, I'm Abhishek. I'm a software engineer from Bhilwara, Rajasthan. I taught myself to build websites. I started with my own reading website, Youmika, and now I help clinics, gyms, restaurants, and local businesses get customers online.
                  </p>
                  <p>
                    When you message me, you talk to me — not a team, not a manager. I build your website myself, I answer your questions myself, and my prices start at ₹5,999 ($199). If I can't do something well, I'll tell you straight.
                  </p>

                  <div className="pt-3 flex flex-wrap items-center gap-4">
                    <Link
                      to="/contact"
                      className="px-6 py-2.5 rounded-lg bg-[#2478D4] hover:bg-[#1D63B5] text-white text-xs font-semibold transition-colors shadow-md"
                    >
                      Discuss Your Project with Abhishek
                    </Link>
                    <a
                      href="mailto:web@youmika.site"
                      className="text-xs font-mono text-slate-600 hover:text-[#1D63B5] transition-colors"
                    >
                      web@youmika.site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8. TRANSPARENT PRICING SNAPSHOT                              */}
        {/* ============================================================ */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold text-[#1D63B5] uppercase tracking-wider">
              Straightforward Investment
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
              Clear Packages. No Hidden Costs.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Pick a package that fits. Every price includes the full website — no hidden charges later.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? "bg-white border-2 border-[#2478D4] shadow-xl shadow-[#2478D4]/10 md:-translate-y-2"
                    : "bg-white border border-slate-200"
                }`}
              >
                {plan.isPopular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2478D4] text-white shadow-md">
                    Recommended for Growth
                  </span>
                )}

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-semibold text-[#1D63B5] uppercase tracking-wider">
                      {plan.badge}
                    </span>
                    <h3 className="text-xl font-display font-bold text-slate-900 mt-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-2 min-h-[36px]">
                      {plan.idealFor}
                    </p>
                  </div>

                  <div className="pt-2 pb-4 border-y border-slate-200">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900">
                        {plan.priceINR}
                      </span>
                      <span className="text-xs text-slate-500">/ {plan.priceUSD} USD</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block mt-1">
                      Turnaround: <strong className="text-slate-600">{plan.turnaround}</strong> • {plan.revisions}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-600">
                    {plan.deliverables.slice(0, 5).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#1D63B5] shrink-0 mt-0.5" />
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
                        : "bg-slate-100 hover:bg-slate-200 text-slate-800 hover:text-slate-900 border border-slate-300"
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
              className="text-xs font-semibold text-[#1D63B5] hover:text-slate-900 inline-flex items-center gap-1.5 transition-colors"
            >
              <span>Read detailed feature breakdowns &amp; USA quotation notes</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
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
