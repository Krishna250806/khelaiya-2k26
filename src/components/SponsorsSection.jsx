import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, PhoneCall, Sparkles, X, Crown, Shield, Music, Radio, Coffee, Gem, Utensils, Tv, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import FestiveCardBorder from './common/FestiveCardBorder';
import { SPONSORS_DATA, OUTREACH_CONTACTS } from '../data/festivalData';
import { DiyaIcon } from './common/MandalaDecorations';

// Map sponsor icon types
const ICON_MAP = {
  "title-1": Crown,
  "title-2": Sparkles,
  "other-1": Music,
  "other-2": Radio,
  "other-3": Coffee,
  "other-4": Sparkles,
  "other-5": Gem,
  "other-6": Shield,
  "other-7": Utensils,
  "other-8": Tv,
};

export default function SponsorsSection() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const toranScrollRef = useRef(null);
  const manualTimeoutRef = useRef(null);

  const pauseAutoTemporarily = () => {
    setIsAutoPlay(false);
    if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    manualTimeoutRef.current = setTimeout(() => {
      setIsAutoPlay(true);
    }, 6000);
  };

  const handlePrevSponsor = () => {
    if (!toranScrollRef.current) return;
    pauseAutoTemporarily();
    toranScrollRef.current.scrollBy({ left: -290, behavior: 'smooth' });
  };

  const handleNextSponsor = () => {
    if (!toranScrollRef.current) return;
    pauseAutoTemporarily();
    toranScrollRef.current.scrollBy({ left: 290, behavior: 'smooth' });
  };

  // Prevent background scroll on iOS and desktop when modal is active
  useEffect(() => {
    if (inquiryModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [inquiryModalOpen]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setInquiryModalOpen(false);
      }
    };
    if (inquiryModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [inquiryModalOpen]);

  // Robust Call handler that works on iOS Safari, Android, and Desktop
  const handleCall = (phone) => {
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    window.location.href = `tel:${cleanPhone}`;
  };

  const closeModal = (e) => {
    if (e) {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      if (typeof e.stopPropagation === 'function') e.stopPropagation();
    }
    setInquiryModalOpen(false);
  };

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setSubmittedInquiry(true);
    setTimeout(() => {
      setSubmittedInquiry(false);
      setInquiryModalOpen(false);
    }, 2200);
  };

  const titleSponsors = SPONSORS_DATA?.titleSponsors || [];
  const otherSponsors = SPONSORS_DATA?.otherSponsors || [];
  // 4 sets for continuous smooth looping and manual navigation in both directions
  const marqueeList = [...otherSponsors, ...otherSponsors, ...otherSponsors, ...otherSponsors];

  useEffect(() => {
    const container = toranScrollRef.current;
    if (!container) return;

    // Start in the second quadrant for immediate bi-directional manual scroll
    if (container.scrollLeft === 0) {
      container.scrollLeft = container.scrollWidth / 4;
    }

    let animationFrameId;
    let lastTime = performance.now();
    let scrollPos = container.scrollLeft;

    const step = (currentTime) => {
      const delta = Math.min((currentTime - lastTime) / 1000, 0.1);
      lastTime = currentTime;

      if (isAutoPlay && !isPaused && container) {
        // Paced slightly faster than 40 (58 px/sec) and silky smooth subpixel calculation
        scrollPos += 58 * delta;

        const singleSetWidth = container.scrollWidth / 4;
        if (scrollPos >= singleSetWidth * 3) {
          scrollPos -= singleSetWidth;
        } else if (scrollPos <= 40) {
          scrollPos += singleSetWidth;
        }
        container.scrollLeft = scrollPos;
      } else if (container) {
        scrollPos = container.scrollLeft;
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(animationFrameId);
      if (manualTimeoutRef.current) clearTimeout(manualTimeoutRef.current);
    };
  }, [isAutoPlay, isPaused]);

  return (
    <section id="sponsors" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0c2e36] via-[#24061a] to-[#210314]">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial-gold opacity-10 pointer-events-none blur-3xl" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Partnerships"
          title="OUR"
          highlight="SPONSORS"
          subtitle="Proudly supported by esteemed patrons and partners celebrating the royal spirit of Garba."
        />

        {/* ======================================================= */}
        {/* 1. TITLE SPONSORS (2 Featured Cards)                    */}
        {/* ======================================================= */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#febf4a]/60" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#febf4a] flex items-center gap-2">
              <Crown className="w-4 h-4 text-[#febf4a]" />
              <span>TITLE SPONSORS</span>
            </span>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#febf4a]/60" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {titleSponsors.map((sponsor, idx) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl p-[1.5px] bg-gradient-to-br from-[#febf4a] via-[#ffd982]/60 to-[#5f1040] shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300"
              >
                <div className="h-full rounded-[22px] bg-gradient-to-br from-[#330520] via-[#24061a] to-[#0a232b] p-6 sm:p-8 flex items-center justify-center relative overflow-hidden">
                  
                  {/* Ornate Corner Accents */}
                  <div className="absolute top-2.5 left-2.5 text-[#febf4a]/30 text-xs">✦</div>
                  <div className="absolute top-2.5 right-2.5 text-[#febf4a]/30 text-xs">✦</div>
                  <div className="absolute bottom-2.5 left-2.5 text-[#febf4a]/30 text-xs">✦</div>
                  <div className="absolute bottom-2.5 right-2.5 text-[#febf4a]/30 text-xs">✦</div>

                  {/* Brand Logo Only (No text inside card) */}
                  <div className="w-full max-w-[240px] sm:max-w-[260px] aspect-square rounded-2xl bg-white p-4 sm:p-6 flex items-center justify-center shadow-lg border border-[#febf4a]/50 group-hover:scale-105 group-hover:shadow-gold-glow transition-all duration-300 overflow-hidden">
                    <img
                      src={sponsor.logo}
                      alt="Title Sponsor"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ======================================================= */}
        {/* 2. TORAN TYPE SPONSOR LIST (Moving Sideways with Manual Controls) */}
        {/* ======================================================= */}
        <div className="mb-20">
          
          {/* Toran Header Swag */}
          <div className="text-center mb-6">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#febf4a] px-4 py-1.5 rounded-full bg-[#5f1040]/70 border border-[#febf4a]/30">
              ASSOCIATE & EVENT PARTNERS
            </span>
          </div>

          {/* Toran Hanging Architecture Container */}
          <div 
            className="relative w-full overflow-hidden py-6 select-none group"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {/* The Top Hanging Golden Toran String with Decorative Marigold Beads */}
            <div className="absolute top-2 left-0 right-0 h-3 z-20 pointer-events-none flex items-center justify-between px-2">
              <div className="w-full h-[2px] bg-gradient-to-r from-[#febf4a]/20 via-[#febf4a] to-[#febf4a]/20 shadow-[0_0_10px_rgba(254,191,74,0.8)]" />
            </div>

            {/* Left & Right Gradient Shadows for Seamless Fade In/Out */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0c2e36] via-[#0c2e36]/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#210314] via-[#210314]/80 to-transparent z-20 pointer-events-none" />

            {/* Floating Manual Navigation Arrows (Left & Right) */}
            <button
              type="button"
              onClick={handlePrevSponsor}
              aria-label="Previous Sponsor"
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3a0826]/90 border border-[#febf4a]/60 text-[#febf4a] flex items-center justify-center hover:bg-[#5f1040] hover:scale-110 active:scale-95 shadow-gold-glow backdrop-blur-md transition-all duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              type="button"
              onClick={handleNextSponsor}
              aria-label="Next Sponsor"
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#3a0826]/90 border border-[#febf4a]/60 text-[#febf4a] flex items-center justify-center hover:bg-[#5f1040] hover:scale-110 active:scale-95 shadow-gold-glow backdrop-blur-md transition-all duration-200 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Scrollable Track */}
            <div
              ref={toranScrollRef}
              className="flex items-start gap-6 overflow-x-auto no-scrollbar py-2 px-10 sm:px-16"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {marqueeList.map((sponsor, index) => {
                const IconComponent = ICON_MAP[sponsor.id] || Sparkles;
                return (
                  <div
                    key={`${sponsor.id}-${index}`}
                    className="relative flex flex-col items-center flex-shrink-0 cursor-pointer transition-transform duration-300 hover:-translate-y-2"
                  >
                    {/* Hanging String & Toran Brass Bell/Bead */}
                    <div className="flex flex-col items-center mb-1">
                      <div className="w-[1.5px] h-4 bg-gradient-to-b from-[#febf4a] to-[#ffd982]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffd982] border border-[#febf4a] shadow-sm -mt-0.5" />
                    </div>

                    {/* Toran Leaf / Pennant Card */}
                    <div className="w-64 sm:w-72 rounded-2xl p-[1px] bg-gradient-to-b from-[#febf4a]/60 via-[#5f1040]/50 to-[#0f4d5b]/40 hover:from-[#febf4a] hover:to-[#ffd982] hover:shadow-gold-glow transition-all duration-300">
                      <div className="rounded-[15px] bg-gradient-to-b from-[#3a0826] via-[#250417] to-[#0a232b] p-5 text-center relative overflow-hidden flex flex-col items-center">
                        
                        {/* Toran Top Arch Accent */}
                        <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#febf4a] to-transparent rounded-full mb-3" />

                        {/* Partner Category Icon or Brand Logo (Increased Size) */}
                        <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-[#febf4a]/60 flex items-center justify-center mb-3 shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105 ${
                          sponsor.logo ? 'bg-white p-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.35)]' : 'bg-gradient-to-br from-[#febf4a]/20 to-[#5f1040]/30 text-[#febf4a]'
                        }`}>
                          {sponsor.logo ? (
                            <img
                              src={sponsor.logo}
                              alt={sponsor.name}
                              className="w-full h-full object-contain filter"
                            />
                          ) : (
                            <IconComponent className="w-9 h-9 sm:w-10 sm:h-10 text-[#febf4a]" />
                          )}
                        </div>

                        {/* Partner Name (Reduced Font Size a Little Bit) */}
                        <h5 className="font-display text-sm sm:text-base font-bold text-white mb-1 tracking-wide group-hover:text-[#febf4a] text-center line-clamp-1">
                          {sponsor.name}
                        </h5>

                        {/* Partner Role / Badge */}
                        <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-[#febf4a]/90 px-3 py-0.5 rounded-full bg-[#5f1040]/70 border border-[#febf4a]/30 mt-0.5">
                          {sponsor.role}
                        </span>

                        {/* Hanging Tassel Triangle at Bottom of Toran Card */}
                        <div className="mt-4 flex flex-col items-center">
                          <div className="w-4 h-2 bg-gradient-to-b from-[#febf4a]/60 to-transparent [clip-path:polygon(50%_100%,0_0,100%_0)]" />
                        </div>

                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

            {/* Manual Navigation Controls & Interactive Helper */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6">
              <button
                type="button"
                onClick={handlePrevSponsor}
                className="px-3.5 py-1.5 rounded-full bg-[#3a0826]/80 border border-[#febf4a]/40 text-[#febf4a] text-xs font-semibold hover:bg-[#5f1040] hover:border-[#febf4a] hover:shadow-gold-glow flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <button
                type="button"
                onClick={() => setIsAutoPlay((prev) => !prev)}
                className="px-3.5 py-1.5 rounded-full bg-[#3a0826]/80 border border-[#febf4a]/40 text-[#febf4a] text-xs font-semibold hover:bg-[#5f1040] hover:border-[#febf4a] hover:shadow-gold-glow flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {isAutoPlay ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#febf4a]" />
                    <span>Auto-Scroll: ON</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#febf4a]" />
                    <span>Auto-Scroll: PAUSED</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleNextSponsor}
                className="px-3.5 py-1.5 rounded-full bg-[#3a0826]/80 border border-[#febf4a]/40 text-[#febf4a] text-xs font-semibold hover:bg-[#5f1040] hover:border-[#febf4a] hover:shadow-gold-glow flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-center text-[11px] text-[#fff0c2]/50 italic mt-3">
              ✦ Use arrows or drag to navigate • Hover to pause ✦
            </p>
          </div>
        </div>

        {/* ======================================================= */}
        {/* 3. ONLY ONE BUTTON TO CONTACT FOR SPONSORSHIP ENQUIRY   */}
        {/* ======================================================= */}
        <div className="text-center max-w-xl mx-auto">
          <button
            type="button"
            onClick={() => setInquiryModalOpen(true)}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-display font-bold text-sm uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 transition-all flex items-center justify-center gap-3 mx-auto cursor-pointer"
          >
            <PhoneCall className="w-4 h-4 text-[#3a0826]" />
            <span>CONTACT FOR SPONSORSHIP ENQUIRY</span>
          </button>
        </div>

      </div>

      {/* Sponsor Inquiry Modal - Rendered via Portal at document.body for iOS fixed positioning */}
      {typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {inquiryModalOpen && (
            <div 
              className="fixed inset-0 z-[9999] overflow-y-auto flex items-center justify-center p-4 backdrop-blur-md bg-black/85"
              onClick={closeModal}
              onTouchEnd={(e) => {
                if (e.target === e.currentTarget) {
                  closeModal(e);
                }
              }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md bg-gradient-to-b from-[#2a061b] via-[#3a0826] to-[#0f4d5b] border-2 border-[#febf4a]/60 rounded-3xl p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.95)]"
              >
                {/* Large iOS-friendly close button with high touch target */}
                <button
                  type="button"
                  onClick={closeModal}
                  onTouchEnd={closeModal}
                  className="absolute top-4 right-4 z-50 min-w-[44px] min-h-[44px] rounded-full border border-[#febf4a]/50 bg-[#3a0826] text-[#febf4a] hover:bg-[#5f1040] active:scale-90 flex items-center justify-center transition-all cursor-pointer shadow-lg"
                  aria-label="Close"
                >
                  <X className="w-5 h-5 text-[#febf4a]" />
                </button>

                <div className="flex items-center gap-3 mb-2 pr-10">
                  <DiyaIcon className="w-7 h-7 text-[#febf4a] flex-shrink-0" />
                  <h3 className="font-display text-2xl font-bold text-gradient-gold">
                    Sponsorship Enquiry
                  </h3>
                </div>

                <p className="text-xs text-[#fff0c2]/80 mb-6 leading-relaxed">
                  Connect directly with our <strong>Outreach Team Heads</strong> to discuss title partnerships, stalls, and brand associations for <strong>NUV खेलैया 2026</strong>:
                </p>

                <div className="space-y-3.5">
                  {OUTREACH_CONTACTS.map((head) => {
                    const cleanPhone = head.phone.replace(/[^0-9+]/g, '');
                    return (
                      <div 
                        key={head.name} 
                        onClick={() => handleCall(head.phone)}
                        className="p-3.5 rounded-2xl bg-[#170310]/95 border border-[#febf4a]/35 flex items-center justify-between gap-3 hover:border-[#febf4a] active:bg-[#250417] transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <img 
                            src={head.image} 
                            alt={head.name} 
                            className="w-12 h-12 rounded-full object-cover border border-[#febf4a]/50 flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <h4 className="font-display text-sm sm:text-base font-bold text-white truncate group-hover:text-[#febf4a] transition-colors">
                              {head.name}
                            </h4>
                            <span className="text-[10px] uppercase tracking-wider text-[#febf4a] font-semibold block">
                              {head.designation}
                            </span>
                            <a 
                              href={`tel:${cleanPhone}`} 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCall(head.phone);
                              }}
                              className="text-xs text-[#ffd982] hover:underline font-mono mt-0.5 inline-block cursor-pointer"
                            >
                              {head.phone}
                            </a>
                          </div>
                        </div>

                        <a
                          href={`tel:${cleanPhone}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCall(head.phone);
                          }}
                          className="px-4 py-2 rounded-full bg-gradient-to-r from-[#febf4a] to-[#ffd982] text-[#3a0826] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-md hover:scale-105 active:scale-95 transition-all flex-shrink-0 cursor-pointer"
                        >
                          <Phone className="w-3.5 h-3.5 fill-[#3a0826]" />
                          <span>Call</span>
                        </a>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-4 border-t border-[#febf4a]/20 text-center">
                  <span className="text-[11px] text-[#fff0c2]/60 block mb-3">
                    Event Venue: Jyoti Party Plot • Vadodara, Gujarat
                  </span>
                  
                  {/* Additional explicit Close Button at bottom */}
                  <button
                    type="button"
                    onClick={closeModal}
                    onTouchEnd={closeModal}
                    className="w-full py-2.5 rounded-xl border border-[#febf4a]/30 bg-[#250417] text-[#febf4a] text-xs font-semibold uppercase tracking-wider hover:bg-[#5f1040] active:scale-98 transition-all cursor-pointer"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>,
        document.body
      )}

    </section>
  );
}
