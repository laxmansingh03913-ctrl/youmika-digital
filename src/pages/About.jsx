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
      name: "We Talk",
      desc: "You tell me what your business needs — more calls, more bookings, more sales. I ask questions until I understand it properly."
    },
    {
      step: "02",
      name: "I Design",
      desc: "I show you a simple design first. You say what you like and what you don't, and we fix it before any code is written."
    },
    {
      step: "03",
      name: "I Build",
      desc: "I write the code myself using React and Tailwind CSS. No bulky page builders, no messy code that's hard to change later."
    },
    {
      step: "04",
      name: "You Go Live",
      desc: "We test it on phones and computers, set up your Google listing, connect your domain, and launch. The site is fully yours."
    }
  ];

  return (
    <>
      <SEO
        title="About — I'm Abhishek, I Run Youmika Digital"
        description="Youmika Digital is my own one-person agency. I build websites and manage your whole business online — no team, no middlemen, no jargon."
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
            One Person. Your Whole Business, Handled Online.
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Youmika Digital is my own agency. I build the website, I post on your social media, I answer your leads — no team, no middlemen, no jargon. Serving businesses in India and the USA.
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
              My Mission
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              My mission is simple: help small businesses get customers from the internet without paying agency prices or waiting weeks for replies. A good website, honest prices, and someone who actually picks up the phone.
            </p>
          </div>

          {/* Approach */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#131D31] to-[#101827] border border-slate-800 space-y-4 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Zap className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-display font-bold text-white">
              How I Work
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              I start with what your business actually needs — more calls, more bookings, or more sales — then build the simplest thing that gets you that. No extra features you didn't ask for, no pages nobody reads.
            </p>
          </div>
        </div>

        {/* 4-Step Agile Process */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-semibold text-[#56B4FF] uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white">
              Four Simple Steps
            </h2>
            <p className="text-slate-400 text-sm">
              You always know what's happening, and you always talk to me.
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
              What You Can Count On
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
              Four Things I Never Compromise On
            </h2>
            <p className="text-slate-400 text-sm">
              Every website I deliver is checked on these four points before it goes live:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Fast, Light Code", desc: "No heavy plugins. Pages load quickly, even on slow mobile internet." },
              { title: "Works Well on Phones", desc: "Every button and form tested for one-handed use on a phone." },
              { title: "Google-Friendly Structure", desc: "Clean headings, proper metadata, and business details Google can read." },
              { title: "Secure and Easy to Maintain", desc: "Modern, secure code that any developer can update later — including me." }
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
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#2478D4] to-[#101827] border-2 border-[#56B4FF]/40 shadow-xl shadow-[#2478D4]/20 mx-auto lg:mx-0 flex items-center justify-center" aria-label="Abhishek — Founder of Youmika Digital">
                <span className="text-4xl font-display font-extrabold text-white">A</span>
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
                Hello! I'm Abhishek — a software engineer from Bhilwara, Rajasthan. I taught myself to build websites.
              </p>
              <p>
                I started with my own reading website, Youmika (youmika.site), and I saw how many small businesses around me had no website at all — or had paid a lot for one that never brought them a single customer. That's why I started Youmika Digital: good websites at honest prices, built by the same person you talk to.
              </p>
              <p>
                When you work with me, you get direct answers, clear prices starting at ₹5,999 ($199), and a website that actually works for your business — bookings, calls, and customers included.
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

