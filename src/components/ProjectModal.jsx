import React, { useState } from "react";
import { X, ExternalLink, ShieldCheck, CheckCircle2, Star, Calendar, Clock, MapPin, Sparkles, Smartphone, Monitor } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState("preview");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#101827] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Browser Top Chrome */}
        <div className="bg-[#0B0F19] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <span className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="hidden sm:flex items-center gap-2 ml-4 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-400 font-mono">
              <span className="text-emerald-400">https://</span>
              <span>demo.{project.id}.youmika.site</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-[#2478D4]/20 border border-[#2478D4]/40 text-[#56B4FF]">
              {project.type}
            </span>
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-slate-800 px-6 bg-slate-900/60">
          <button
            onClick={() => setActiveTab("preview")}
            className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "preview"
                ? "border-[#2478D4] text-[#56B4FF]"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Live Interface Demo
          </button>
          <button
            onClick={() => setActiveTab("details")}
            className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "details"
                ? "border-[#2478D4] text-[#56B4FF]"
                : "border-transparent text-slate-400 hover:text-slate-200"
            }`}
          >
            Specifications &amp; Features
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {activeTab === "preview" ? (
            <div className="space-y-6">
              {/* Simulated Website Header */}
              <div
                className="p-6 sm:p-8 rounded-xl border relative overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, #131D31 0%, #101827 100%)`,
                  borderColor: `${project.accentColor}40`
                }}
              >
                {/* Accent glow */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-20"
                  style={{ backgroundColor: project.accentColor }}
                />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                      {project.badge}
                    </span>
                    <span className="text-xs text-emerald-400 flex items-center gap-1 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Interactive Prototype
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                    {project.mockupDetails.headline}
                  </h3>

                  <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                    {project.mockupDetails.subheadline}
                  </p>

                  {/* Simulated Action */}
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => setBookingSuccess(!bookingSuccess)}
                      className="px-5 py-2.5 rounded-lg font-semibold text-sm shadow-md transition-all active:scale-95 text-white"
                      style={{ backgroundColor: project.accentColor }}
                    >
                      {bookingSuccess ? "✓ Action Simulated!" : project.mockupDetails.primaryAction}
                    </button>
                    <span className="text-xs text-slate-400">
                      Click to test interactive trigger
                    </span>
                  </div>

                  {bookingSuccess && (
                    <div className="p-3 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-xs flex items-center gap-2 animate-fadeIn">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>
                        Simulated Workflow: Inquiry captured and queued to instant WhatsApp &amp; Calendar notification system.
                      </span>
                    </div>
                  )}

                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    Open the full live demo website
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {/* Simulated Services Chips */}
                  <div className="pt-4 border-t border-slate-700/50">
                    <span className="text-xs text-slate-400 block mb-2 font-medium">
                      Featured Offerings Showcase:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {project.mockupDetails.servicesList.map((service, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-md text-xs bg-slate-800/80 text-slate-300 border border-slate-700/60"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Simulated Stats Banner */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                    {project.mockupDetails.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-center"
                      >
                        <span className="text-xs font-semibold text-slate-200 block">
                          {stat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Metrics Highlight */}
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <span className="text-xl sm:text-2xl font-bold font-display text-white block">
                      {m.value}
                    </span>
                    <span className="text-xs text-slate-400 mt-1 block">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Overview */}
              <div>
                <h4 className="text-white font-semibold text-base mb-2 font-display">
                  Project Intent &amp; Architecture
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-white font-semibold text-base mb-3 font-display">
                  Key Conversion &amp; Functional Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-slate-300 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#56B4FF] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-white font-semibold text-base mb-2 font-display">
                  Technologies Employed
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#0B0F19] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span>Interested in a similar high-performance build for your practice or business?</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-300 hover:text-white"
            >
              Close
            </button>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-all shadow-md"
            >
              Open Live Demo
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={`/contact?service=Website%20Development&projectType=${encodeURIComponent(project.title)}`}
              className="px-4 py-2 rounded-lg bg-[#2478D4] hover:bg-[#1D63B5] text-white text-xs font-semibold transition-all shadow-md"
            >
              Request Similar Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

