import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Bell, Calendar, MapPin, X, CheckCircle2 } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import FestiveCardBorder from './common/FestiveCardBorder';
import { FESTIVAL_INFO } from '../data/festivalData';
import { DiyaIcon, MandalaPattern } from './common/MandalaDecorations';

export default function RegistrationSection({ onRegisterClick }) {
  const [alertModalOpen, setAlertModalOpen] = useState(false);

  const handleRegisterTrigger = (e) => {
    e.preventDefault();
    setAlertModalOpen(true);
  };

  return (
    <section id="registration" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#210314] via-[#2f071e] to-[#0e2c34]">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <MandalaPattern className="w-[650px] h-[650px] text-[#febf4a] animate-spin-slow" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Registration"
          title="JOIN"
          highlight="NUV खेलैया"
          subtitle="Register for NUV खेलैया and be part of an unforgettable evening of Garba, music, and divine celebration."
        />

        {/* Premium Registration Card */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-[#febf4a] via-[#5f1040] to-[#0f4d5b] shadow-[0_0_50px_rgba(254,191,74,0.25)]">
          <div className="rounded-[22px] bg-gradient-to-br from-[#2a061b] via-[#3a0826] to-[#072b33] p-8 sm:p-12 md:p-14 text-center relative overflow-hidden">
            
            {/* Ornate Festive Border on All 4 Sides */}
            <FestiveCardBorder className="opacity-80" />

            {/* Top Emblem with Maa Ambe */}
            <div className="w-16 h-16 rounded-full border border-[#febf4a]/70 bg-gradient-to-br from-[#5f1040] via-[#2a061b] to-[#0f4d5b] mx-auto flex items-center justify-center shadow-gold-glow mb-6 overflow-hidden p-2 relative z-10">
              <img 
                src="/nuv-assets/asset4_durga.svg" 
                alt="Maa Ambe" 
                className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_2px_6px_rgba(254,191,74,0.6)]" 
              />
            </div>

            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Be Part of the <span className="text-gradient-gold">Celebration</span>
            </h3>

            <p className="text-base sm:text-lg text-[#fff0c2]/90 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
              Experience the vibrant rhythms of Navratri with thousands of Garba lovers at Vadodara's most anticipated festive gathering.
            </p>

            {/* Event Info Strip */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-[#fff0c2]/80 font-medium mb-10 pb-8 border-b border-[#febf4a]/20">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#febf4a]" />
                <span>Jyoti Party Plot, Vadodara</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#febf4a]" />
                <span>Date: {FESTIVAL_INFO.date}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center">
              {/* Primary Registration Button */}
              <button
                type="button"
                onClick={handleRegisterTrigger}
                className="group relative w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-display font-bold text-base uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-5 h-5 text-[#3a0826] transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <p className="text-xs text-[#fff0c2]/60 mt-6">
              Official pass booking will be activated as soon as the portal opens.
            </p>

          </div>
        </div>

      </div>

      {/* Registration Starting Soon Festive Modal Alert */}
      <AnimatePresence>
        {alertModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 backdrop-blur-xl bg-black/80">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-md bg-gradient-to-b from-[#2a061b] via-[#3a0826] to-[#0f4d5b] border-2 border-[#febf4a]/60 rounded-3xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] text-center overflow-hidden"
            >
              {/* Corner Close Button */}
              <button
                onClick={() => setAlertModalOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full border border-[#febf4a]/30 text-[#febf4a] hover:bg-[#5f1040] transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Alert Icon */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#febf4a]/30 to-[#5f1040]/60 border border-[#febf4a] text-[#febf4a] flex items-center justify-center mx-auto mb-4 shadow-gold-glow">
                <Bell className="w-8 h-8 animate-bounce" />
              </div>

              {/* Alert Badge */}
              <div className="inline-block px-3 py-1 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/50 text-[#febf4a] text-xs font-bold uppercase tracking-widest mb-3">
                Notice
              </div>

              {/* Main Alert Title */}
              <h4 className="font-display text-2xl sm:text-3xl font-extrabold text-gradient-gold mb-3">
                Registration Starting Soon!
              </h4>

              <p className="text-sm text-[#fff0c2]/90 leading-relaxed mb-4">
                Official entry passes and attendee registration for <strong className="text-[#febf4a]">NUV खेलैया 2026</strong> at <strong>Jyoti Party Plot</strong> will go live shortly.
              </p>

              <div className="p-3.5 rounded-xl bg-[#12020d]/80 border border-[#febf4a]/30 mb-6 flex items-center justify-center gap-2 text-xs text-[#febf4a] font-medium">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <span>Stay tuned to this official portal for pass announcements!</span>
              </div>

              <button
                type="button"
                onClick={() => setAlertModalOpen(false)}
                className="w-full py-3 rounded-full bg-gradient-to-r from-[#febf4a] to-[#ffd982] text-[#3a0826] font-bold text-sm uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all cursor-pointer"
              >
                Got It
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
