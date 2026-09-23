import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FESTIVAL_INFO } from '../data/festivalData';
import { MandalaPattern } from './common/MandalaDecorations';
import FestiveCardBorder from './common/FestiveCardBorder';

export default function RegisterCtaSection({ onRegisterClick }) {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0e2c34] via-[#2a061b] to-[#210314]">
      
      {/* Background Mandala Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <MandalaPattern className="w-[600px] h-[600px] text-[#febf4a] animate-spin-slow" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-[#febf4a] via-[#5f1040] to-[#0f4d5b] shadow-[0_0_50px_rgba(254,191,74,0.3)]">
          
          <div className="rounded-[22px] bg-gradient-to-br from-[#2a061b] via-[#3a0826] to-[#072b33] p-8 sm:p-14 md:p-16 text-center relative overflow-hidden">
            
            {/* Ornate Festive Border on All 4 Sides */}
            <FestiveCardBorder className="opacity-80" />

            {/* Row of Vibrant Gujarati Dandiya & Garba Dancers (Asset 4 Element) */}
            <div className="w-full max-w-sm sm:max-w-md mx-auto mb-5 relative z-10">
              <img
                src="/nuv-assets/asset4_dancers_row.svg"
                alt="Gujarati Garba Dancers in Traditional Attire"
                className="w-full max-h-24 sm:max-h-28 object-contain mx-auto filter brightness-110 drop-shadow-[0_4px_15px_rgba(254,191,74,0.45)]"
              />
            </div>

            {/* Main Bold Title */}
            <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-none mb-6">
              COME. DANCE. <span className="text-gradient-gold block sm:inline">CELEBRATE.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-2xl text-[#fff0c2]/90 max-w-xl mx-auto mb-10 font-medium">
              Experience <span className="font-nuv font-bold">NUV </span><span className="font-khelaiya">खेलैया</span>.
            </p>

            {/* Primary Action Button */}
            <div className="flex justify-center">
              <motion.a
                href="#registration"
                onClick={onRegisterClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="relative group px-10 py-5 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-display font-bold text-base sm:text-lg tracking-wider uppercase shadow-gold-glow-lg transition-all cursor-pointer overflow-hidden flex items-center justify-center gap-3"
              >
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#febf4a] via-white to-[#febf4a] opacity-30 blur-md group-hover:opacity-75 transition-opacity" />
                
                <span className="relative z-10">REGISTER NOW</span>
                <ArrowRight className="relative z-10 w-5 h-5 text-[#3a0826] transition-transform group-hover:translate-x-1" />
              </motion.a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
