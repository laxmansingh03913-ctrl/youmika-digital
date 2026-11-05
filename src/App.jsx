import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import QuoteModal from "./components/QuoteModal";
import WhatsAppButton from "./components/WhatsAppButton";

// Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-[#101827] text-slate-100 flex flex-col justify-between selection:bg-[#2478D4] selection:text-white">
        {/* Navigation */}
        <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenQuote={() => setIsQuoteOpen(true)} />} />
            <Route path="/services" element={<Services onOpenQuote={() => setIsQuoteOpen(true)} />} />
            <Route path="/work" element={<Portfolio onOpenQuote={() => setIsQuoteOpen(true)} />} />
            {/* Alias for portfolio */}
            <Route path="/portfolio" element={<Navigate to="/work" replace />} />
            <Route path="/about" element={<About onOpenQuote={() => setIsQuoteOpen(true)} />} />
            <Route path="/pricing" element={<Pricing onOpenQuote={() => setIsQuoteOpen(true)} />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Global Quote Modal */}
        <QuoteModal
          isOpen={isQuoteOpen}
          onClose={() => setIsQuoteOpen(false)}
        />

        {/* Floating WhatsApp Quick Action Button */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}
