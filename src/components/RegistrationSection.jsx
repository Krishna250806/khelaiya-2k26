import React from 'react';
import { ArrowRight, Calendar, MapPin, Sparkles } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import FestiveCardBorder from './common/FestiveCardBorder';
import { FESTIVAL_INFO } from '../data/festivalData';
import { MandalaPattern } from './common/MandalaDecorations';

export default function RegistrationSection() {
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
                src="/durgamaa.png" 
                alt="Maa Durga" 
                className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_2px_6px_rgba(254,191,74,0.6)]" 
              />
            </div>

            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Be Part of the <span className="text-gradient-gold">Celebration</span>
            </h3>

            <p className="text-base sm:text-lg text-[#fff0c2]/90 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
              Join the university community for an evening of traditional Garba, music, and celebration.
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
              {/* Primary Registration Link */}
              <a
                href={FESTIVAL_INFO.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-display font-bold text-base uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-5 h-5 text-[#3a0826] transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <p className="text-xs text-[#fff0c2]/60 mt-6 flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#febf4a]" />
              <span>Click above to register on the official NUV portal</span>
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}

