import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Eye, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Smartphone, 
  Monitor, 
  Info,
  Calendar,
  Dumbbell,
  UtensilsCrossed,
  Stethoscope
} from "lucide-react";
import SEO from "../components/SEO";
import { projectsData } from "../data/projectsData";
import ProjectModal from "../components/ProjectModal";

export default function Portfolio({ onOpenQuote }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <SEO
        title="Our Work — Demonstration & Concept Projects"
        description="Explore Youmika Digital's demonstration prototypes for Dental Clinics, Modern Gyms, and Premium Restaurants. Built to showcase technical craftsmanship and conversion architecture."
        canonicalPath="/work"
      />

      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-semibold text-[#56B4FF]">
            <Sparkles className="w-3.5 h-3.5 text-[#56B4FF]" />
            <span>Interactive Prototypes</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white tracking-tight">
            Curated Demonstration Projects
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We believe in showing, not telling. Explore our live interactive demonstration projects designed specifically for healthcare clinics, athletic facilities, and fine dining establishments.
          </p>
        </div>

        {/* Prominent Transparency Disclosure Notice */}
        <div className="p-5 rounded-2xl bg-[#131D31] border border-blue-500/30 text-xs sm:text-sm text-slate-300 flex items-start gap-3 shadow-lg">
          <Info className="w-5 h-5 text-[#56B4FF] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <strong className="text-white font-semibold block">
              Ethical Agency Disclosure: Concept Demonstration Projects
            </strong>
            <p className="text-slate-400 text-xs leading-relaxed">
              In line with our commitment to transparency, the projects below are fully functional concept prototypes created by founder and developer Abhishek. They showcase our design aesthetics, code quality, mobile responsiveness, and booking flows. We never fabricate client statistics or invent false testimonials.
            </p>
          </div>
        </div>

        {/* 3 Main Projects Detailed Showcase */}
        <div className="space-y-20">
          {projectsData.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#131D31] to-[#101827] border border-slate-800 shadow-2xl relative overflow-hidden"
              >
                {/* Accent glow behind card */}
                <div
                  className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-15"
                  style={{ backgroundColor: project.accentColor }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  {/* Text & Overview */}
                  <div className={`lg:col-span-6 space-y-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700">
                          {project.badge}
                        </span>
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30">
                          Concept Demo
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-4xl font-display font-extrabold text-white">
                        {project.title}
                      </h2>
                      <p className="text-[#56B4FF] text-sm font-medium">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Key Features */}
                    <div className="space-y-2.5">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                        Signature Architectural Features:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {project.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#56B4FF] shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="space-y-2 pt-2">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                        Technologies:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Triggers */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#2478D4] hover:bg-[#1D63B5] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#2478D4]/30 hover:scale-105 active:scale-95 transition-all"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Launch Interactive Demo Window</span>
                      </button>

                      <Link
                        to={`/contact?service=Website%20Development&projectType=${encodeURIComponent(project.title)}`}
                        className="text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                      >
                        <span>Request Similar Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Browser Mockup Visual */}
                  <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden group">
                      {/* Chrome Header */}
                      <div className="bg-[#0B0F19] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-[10px] font-mono text-slate-500">
                          https://demo.{project.id}.youmika.site
                        </span>
                        <div className="text-[10px] text-slate-400">SSL Secure</div>
                      </div>

                      {/* Screen Content Graphic */}
                      <div
                        className="p-8 sm:p-10 text-center space-y-5 relative"
                        style={{
                          background: `radial-gradient(circle at 50% 30%, ${project.accentColor}25 0%, #0F172A 80%)`
                        }}
                      >
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-white" style={{ backgroundColor: `${project.accentColor}` }}>
                          {project.badge}
                        </span>

                        <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                          {project.mockupDetails.headline}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                          {project.mockupDetails.subheadline}
                        </p>

                        <div className="pt-2">
                          <button
                            onClick={() => setSelectedProject(project)}
                            className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white shadow-md hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: project.accentColor }}
                          >
                            {project.mockupDetails.primaryAction} (Test Live)
                          </button>
                        </div>

                        {/* Metrics Bar */}
                        <div className="grid grid-cols-3 gap-2 pt-6 border-t border-slate-800/80">
                          {project.metrics.map((m, idx) => (
                            <div key={idx} className="p-2 rounded bg-slate-900/80 border border-slate-800">
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
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Project CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
            Have a Unique Industry or Requirement?
          </h3>
          <p className="text-slate-400 text-sm max-w-xl mx-auto leading-relaxed">
            We design and code bespoke digital platforms tailored to any business model in India or the United States.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#2478D4] hover:bg-[#1D63B5] text-white text-sm font-semibold transition-all shadow-md"
            >
              <span>Discuss Your Custom Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}

