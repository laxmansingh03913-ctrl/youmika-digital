import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Clean prefilled WhatsApp message
  const message = encodeURIComponent(
    "Hi Youmika Digital! I would like to discuss a digital project (Website / UI/UX / SEO) for my business."
  );
  
  // Open WhatsApp direct link
  const whatsappUrl = `https://wa.me/?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip banner */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs text-white shadow-xl animate-fadeIn">
          <span>Chat directly with Founder &amp; Developer Abhishek</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-xl shadow-[#25D366]/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat on WhatsApp with Youmika Digital"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        
        {/* Subtle pulsing badge */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-[#101827]"></span>
        </span>
      </a>
    </div>
  );
}

