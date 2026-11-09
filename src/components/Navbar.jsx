import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export default function Navbar({ onOpenQuote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" }
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#101827]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3.5"
          : "bg-[#101827]/95 backdrop-blur-md border-b border-slate-800/80 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#2478D4] rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2478D4] to-[#101827] border border-[#56B4FF]/40 flex items-center justify-center shadow-md shadow-[#2478D4]/20 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none">
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
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white group-hover:text-[#56B4FF] transition-colors">
                YOUMIKA <span className="text-[#2478D4]">DIGITAL</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                Digital Agency • IN &amp; USA
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 border border-slate-800/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ${
                    active
                      ? "text-white bg-[#2478D4] shadow-sm shadow-[#2478D4]/40"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="text-sm font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors px-2 py-1"
            >
              <MessageCircle className="w-4 h-4 text-[#56B4FF]" />
              <span>Let's Talk</span>
            </Link>
            
            <button
              onClick={onOpenQuote}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#2478D4] to-[#1D63B5] hover:from-[#1D63B5] hover:to-[#2478D4] text-white text-sm font-semibold shadow-md shadow-[#2478D4]/30 hover:shadow-lg hover:shadow-[#2478D4]/40 transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#56B4FF]"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 rounded-md bg-[#2478D4] text-white text-xs font-semibold"
            >
              Get Quote
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2478D4]"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#101827] border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-2 shadow-2xl animate-fadeIn">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                    active
                      ? "bg-[#2478D4] text-white"
                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span>{link.name}</span>
                  {active && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800/80 space-y-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-[#2478D4] to-[#1D63B5] text-white font-semibold text-sm shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#56B4FF]" />
              <span>Request a Custom Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center pt-2">
              <span className="text-xs text-slate-400">
                Serving Businesses in <span className="text-slate-200">India</span> &amp; <span className="text-slate-200">USA</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

