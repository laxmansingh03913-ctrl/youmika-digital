import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Mail, MessageSquare, Globe, Shield, Code, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0F19] border-t border-slate-800 text-slate-400 text-sm">
      {/* Top CTA Banner */}
      <div className="border-b border-slate-800/80 bg-gradient-to-b from-[#101827] to-[#0B0F19]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-gradient-to-r from-slate-900 via-[#131D31] to-slate-900 border border-slate-800 p-8 md:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            {/* Subtle light effect */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#2478D4]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 text-center md:text-left z-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#56B4FF] bg-[#2478D4]/10 border border-[#2478D4]/30">
                Ready for growth?
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                Let's turn your digital presence into real revenue.
              </h3>
              <p className="text-slate-400 max-w-xl text-sm sm:text-base">
                Whether you need a high-converting website, bespoke UI/UX, or technical automation in India or the USA, we're ready to engineer it.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto z-10">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#2478D4] hover:bg-[#1D63B5] text-white font-semibold text-sm shadow-lg shadow-[#2478D4]/30 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/918000548640?text=Hi%20Youmika%20Digital%2C%20I%20would%20like%20to%20discuss%20a%20website%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border border-slate-700 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#56B4FF]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#2478D4] to-[#101827] border border-[#56B4FF]/40 flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 40 40" fill="none">
                  <path
                    d="M10 10L20 23L30 10"
                    stroke="#56B4FF"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 23V32"
                    stroke="#FFFFFF"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <span className="font-display font-extrabold text-xl tracking-tight text-white">
                YOUMIKA <span className="text-[#2478D4]">DIGITAL</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              We don't just build websites — we handle your website, marketing and SEO, your entire business online. A modern, premium, reliable digital agency helping companies in India and the USA establish authority and scale online.
            </p>

            <div className="pt-2 text-xs space-y-1.5 text-slate-400">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#56B4FF]" />
                <span>Official Domain: <a href="https://digital.youmika.site" className="text-slate-300 hover:text-[#56B4FF] underline">https://digital.youmika.site</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Code className="w-4 h-4 text-[#2478D4]" />
                <span>Founder: <strong className="text-slate-300">Abhishek — Founder &amp; Developer</strong></span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-display">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services (8 Offerings)</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors">Our Work (Demo Projects)</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Youmika Digital</Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-white transition-colors">Pricing Packages</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Get in Touch</Link>
              </li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-display">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services#web-development" className="hover:text-white transition-colors">Website Development</Link>
              </li>
              <li>
                <Link to="/services#ui-ux-design" className="hover:text-white transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services#landing-page-development" className="hover:text-white transition-colors">Landing Pages</Link>
              </li>
              <li>
                <Link to="/services#seo" className="hover:text-white transition-colors">SEO &amp; Visibility</Link>
              </li>
              <li>
                <Link to="/services#digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/services#business-automation" className="hover:text-white transition-colors">Business Automation</Link>
              </li>
              <li>
                <Link to="/services#website-maintenance" className="hover:text-white transition-colors">Website Maintenance</Link>
              </li>
              <li>
                <Link to="/services#complete-business-management" className="hover:text-white transition-colors">Complete Business Management</Link>
              </li>
            </ul>
          </div>

          {/* Target Audiences & Direct Reach */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-display">
              Target Verticals
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#56B4FF]" />
                <span>Dental &amp; Health Clinics</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#56B4FF]" />
                <span>Modern Gyms &amp; Fitness Studios</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#56B4FF]" />
                <span>Fine Dining &amp; Restaurants</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#56B4FF]" />
                <span>Local SMBs &amp; Service Providers</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#56B4FF]" />
                <span>Startups &amp; Tech Ventures</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2478D4]" />
                <span>USA &amp; International Businesses</span>
              </li>
            </ul>

            <div className="mt-5 pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">Inquiry Mailbox</span>
              <a
                href="mailto:web@youmika.site"
                className="text-xs font-medium text-slate-300 hover:text-[#56B4FF] transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#56B4FF]" />
                <span>web@youmika.site</span>
              </a>
              <a
                href="https://wa.me/918000548640"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-slate-300 hover:text-[#56B4FF] transition-colors flex items-center gap-1.5 mt-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                <span>WhatsApp: +91 80005 48640</span>
              </a>
            </div>
          </div>
        </div>

        {/* Concept Project Transparency Disclaimer */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 bg-slate-900/40 p-4 rounded-xl border border-slate-800 text-xs text-slate-400 leading-relaxed flex items-start gap-3">
          <Shield className="w-5 h-5 text-[#56B4FF] shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-300 font-semibold block mb-0.5">Integrity &amp; Demonstration Disclosure:</strong>
            Portfolio items presented on this site (Apex Dental &amp; Implant Center, IronPulse Athletic Club, and Saffron &amp; Sage Fine Bistro) are concept demonstration projects built to showcase our technical craftsmanship, design aesthetics, and conversion architecture. We pride ourselves on transparent, honest business practices and never misrepresent concept prototypes as completed client contracts.
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {currentYear} <strong className="text-slate-300">Youmika Digital</strong>. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-300 transition-colors">About Us</Link>
            <Link to="/pricing" className="hover:text-slate-300 transition-colors">Transparent Pricing</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

