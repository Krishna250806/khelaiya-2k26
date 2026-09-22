import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Briefcase, Mail, Download, ArrowUpRight, Sparkles, X, Check } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { SPONSORS } from '../data/festivalData';
import { DiyaIcon } from './common/MandalaDecorations';

export default function SponsorsSection() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState(false);

  // Marquee duplicates for infinite seamless loop
  const marqueeItems = [...SPONSORS, ...SPONSORS];

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setSubmittedInquiry(true);
    setTimeout(() => {
      setSubmittedInquiry(false);
      setInquiryModalOpen(false);
    }, 2000);
  };

  return (
    <section id="sponsors" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0c2e36] via-[#2a061b] to-[#210314]">
      
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Proud Brand Partners"
          title="Our Esteemed"
          highlight="Sponsors"
          subtitle="Collaborating with visionary brands that power the cultural renaissance of collegiate youth."
        />

        {/* 1. Infinite Auto-Scrolling Marquee Showcase */}
        <div className="relative w-full overflow-hidden py-6 mb-16">
          {/* Gradient Edge Blurs */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0c2e36] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0c2e36] to-transparent z-10 pointer-events-none" />

          {/* Marquee Track */}
          <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused]">
            {marqueeItems.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}`}
                className="flex flex-col items-center justify-center p-5 px-8 rounded-2xl bg-gradient-to-br from-[#5f1040]/60 via-[#27153a]/70 to-[#0f4d5b]/60 border border-[#febf4a]/30 shadow-md backdrop-blur-md min-w-[200px] sm:min-w-[240px] hover:border-[#febf4a] hover:shadow-gold-glow transition-all"
              >
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#febf4a]/80 mb-1">
                  {sponsor.tier}
                </span>
                <span className="font-display text-lg sm:text-xl font-bold text-white tracking-wider">
                  {sponsor.logoText}
                </span>
                <span className="text-[11px] text-[#fff0c2]/60 mt-1">
                  {sponsor.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Tiered Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          
          {/* Title Sponsor Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#5f1040] via-[#3a0826] to-[#0f4d5b] border-2 border-[#febf4a] shadow-festive-card text-center flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-[#febf4a]/15 blur-xl pointer-events-none" />
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#febf4a] text-[#3a0826] font-bold text-xs uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>Title Partner</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Royal Gujarat Heritage
              </h4>
              <p className="text-xs text-[#fff0c2]/80 leading-relaxed">
                Preserving architectural wonders and authentic Gujarat folk heritage for global youth.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#febf4a]/30 text-xs text-[#febf4a] font-semibold">
              Official Presenting Partner
            </div>
          </div>

          {/* Powered By Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0f4d5b] via-[#241335] to-[#5f1040] border border-[#febf4a]/60 shadow-festive-card text-center flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0f4d5b] border border-[#febf4a]/60 text-[#febf4a] font-bold text-xs uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Powered By</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Zestify Youth Beverages
              </h4>
              <p className="text-xs text-[#fff0c2]/80 leading-relaxed">
                Keeping 5,000+ dancers energized with zero-sugar electrolyte refreshments throughout the night.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#febf4a]/30 text-xs text-[#febf4a] font-semibold">
              Official Hydration Partner
            </div>
          </div>

          {/* Gold Fashion Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#3a0826] via-[#250417] to-[#0f4d5b] border border-[#febf4a]/40 shadow-festive-card text-center flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5f1040]/70 border border-[#febf4a]/40 text-[#febf4a] font-bold text-xs uppercase tracking-wider mb-4">
                <Award className="w-3.5 h-3.5" />
                <span>Gold Partner</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                KalaNiketan Ethnic Studio
              </h4>
              <p className="text-xs text-[#fff0c2]/80 leading-relaxed">
                Curating authentic Kutchi bandhani, mirror-work chaniya cholis, and royal royal styling for winners.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#febf4a]/30 text-xs text-[#febf4a] font-semibold">
              Official Wardrobe & Styling
            </div>
          </div>

        </div>

        {/* 3. "Interested in Sponsoring?" CTA Box */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#5f1040]/80 via-[#27153a]/90 to-[#0f4d5b]/80 border border-[#febf4a]/40 backdrop-blur-xl shadow-festive-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#febf4a] mb-2">
                <Briefcase className="w-4 h-4" />
                <span>Corporate Partnerships & Brand Activations</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-white mb-3">
                Interested in Sponsoring Khelaiya 2026?
              </h3>
              <p className="text-sm sm:text-base text-[#fff0c2]/85 leading-relaxed max-w-2xl">
                Elevate your brand with Western India's most vibrant student demographic. Reach over <strong>15,000+ collegiate students</strong> across high-engagement on-ground stalls, digital campaigns, and live festival broadcast.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={() => setInquiryModalOpen(true)}
                className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Submit Brand Inquiry</span>
              </button>

              <a
                href="#download-deck"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Khelaiya 2026 Sponsorship Prospectus brochure will be emailed upon inquiry submission!");
                }}
                className="px-6 py-3.5 rounded-full border border-[#febf4a]/50 text-[#febf4a] hover:bg-[#5f1040]/50 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download Deck (PDF)</span>
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* Sponsor Inquiry Modal */}
      <AnimatePresence>
        {inquiryModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 backdrop-blur-xl bg-black/80">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-lg bg-gradient-to-b from-[#250417] to-[#0f4d5b] border-2 border-[#febf4a]/50 rounded-3xl p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setInquiryModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full border border-[#febf4a]/30 text-[#febf4a] hover:bg-[#5f1040]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <DiyaIcon className="w-7 h-7 text-[#febf4a]" />
                <h3 className="font-display text-2xl font-bold text-gradient-gold">
                  Brand Sponsorship Inquiry
                </h3>
              </div>

              {submittedInquiry ? (
                <div className="text-center py-8">
                  <div className="w-12 h-12 rounded-full bg-[#febf4a]/20 border border-[#febf4a] text-[#febf4a] flex items-center justify-center mx-auto mb-3">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs text-[#fff0c2]/80 mt-1">Our PR & Sponsorship convener will connect within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#fff0c2]/90 mb-1">Company / Brand Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. RedBull, Tata, Nykaa"
                      className="w-full px-4 py-2 rounded-xl bg-[#1a0210] border border-[#febf4a]/30 text-white text-sm focus:outline-none focus:border-[#febf4a]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#fff0c2]/90 mb-1">Representative Name & Email</label>
                    <input
                      type="email"
                      required
                      placeholder="corporate@brand.com"
                      className="w-full px-4 py-2 rounded-xl bg-[#1a0210] border border-[#febf4a]/30 text-white text-sm focus:outline-none focus:border-[#febf4a]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#fff0c2]/90 mb-1">Proposed Tier / Category</label>
                    <select className="w-full px-4 py-2 rounded-xl bg-[#1a0210] border border-[#febf4a]/30 text-[#febf4a] text-sm focus:outline-none">
                      <option>Gold Sponsor (₹1,50,000)</option>
                      <option>Silver Sponsor (₹75,000)</option>
                      <option>Food / Stall Partner (₹35,000)</option>
                      <option>Gifting / Prize Partner</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-[#febf4a] to-[#ffd982] text-[#3a0826] font-bold text-xs uppercase tracking-wider shadow-gold-glow"
                  >
                    Submit Sponsorship Request
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
