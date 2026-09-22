import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Compass, MapPin } from 'lucide-react';
import HeroThreeScene from './HeroThreeScene';
import { FESTIVAL_INFO } from '../data/festivalData';
import { DiyaIcon, ToranBorder } from './common/MandalaDecorations';

export default function HeroSection({ onRegisterClick }) {
  const titleLetters = "KHELAIYA".split("");

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col justify-between items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* 1. Interactive Three.js 3D Dandiya & Particle Scene */}
      <HeroThreeScene />

      {/* 2. Top Toran Floral Garland Accent */}
      <div className="absolute top-0 left-0 right-0 z-20 opacity-70 pointer-events-none">
        <ToranBorder />
      </div>

      {/* 3. Subtle Radial Gradient Ambience */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-radial from-[#febf4a]/15 via-[#5f1040]/25 to-transparent blur-3xl pointer-events-none" />

      {/* Decorative NUV Corner Assets */}
      <div className="absolute top-24 left-4 sm:left-10 w-24 sm:w-36 opacity-15 pointer-events-none hidden md:block">
        <img src="/nuv-assets/Asset 1.svg" alt="" className="w-full h-auto" />
      </div>
      <div className="absolute top-24 right-4 sm:right-10 w-24 sm:w-36 opacity-15 pointer-events-none hidden md:block">
        <img src="/nuv-assets/Asset 2.svg" alt="" className="w-full h-auto" />
      </div>

      {/* 4. Main Hero Typography & Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center my-auto">
        
        {/* Presenter Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#febf4a]/40 bg-[#5f1040]/70 backdrop-blur-md shadow-gold-glow mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#febf4a] animate-spin-slow" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#febf4a] uppercase">
            {FESTIVAL_INFO.presenter}
          </span>
          <DiyaIcon className="w-3.5 h-3.5 text-[#febf4a]" />
        </motion.div>

        {/* NUV Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-lg sm:text-2xl tracking-[0.3em] text-[#febf4a] font-semibold uppercase mb-1"
        >
          NUV
        </motion.p>

        {/* Animated Festival Title Reveal */}
        <div className="flex items-center justify-center overflow-hidden py-1 mb-4">
          {titleLetters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 80, opacity: 0, rotateZ: 8 }}
              animate={{ y: 0, opacity: 1, rotateZ: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.08,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-gradient-festive select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] inline-block"
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Official Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-base sm:text-xl md:text-2xl text-[#fff0c2]/90 font-medium max-w-2xl mx-auto leading-relaxed mb-8 px-2"
        >
          {FESTIVAL_INFO.tagline}
        </motion.p>

        {/* Elegant Venue & Announcement Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mb-10 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-4 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-[#5f1040]/80 via-[#27153a]/90 to-[#0f4d5b]/80 border border-[#febf4a]/35 shadow-festive-card backdrop-blur-md text-xs sm:text-sm text-[#fff0c2]/90"
        >
          <div className="flex items-center gap-1.5 text-[#febf4a] font-semibold">
            <MapPin className="w-4 h-4 text-[#febf4a]" />
            <span>Navrachana University Campus</span>
          </div>
          <span className="text-[#febf4a]/50 hidden sm:inline">•</span>
          <span className="text-[#fff0c2]/80">Vadodara, Gujarat</span>
          <span className="text-[#febf4a]/50 hidden sm:inline">•</span>
          <span className="px-2.5 py-0.5 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/40 text-[#febf4a] font-bold text-[11px] uppercase tracking-wider">
            Date To Be Announced
          </span>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
        >
          {/* Primary CTA */}
          <a
            href="#registration"
            onClick={onRegisterClick}
            className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-bold text-sm sm:text-base tracking-wider uppercase shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <span>REGISTER NOW</span>
            <ArrowRight className="w-5 h-5 text-[#3a0826] transition-transform group-hover:translate-x-1" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#about"
            className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#febf4a]/50 bg-[#0f4d5b]/60 hover:bg-[#0f4d5b] text-[#febf4a] font-semibold text-xs sm:text-sm tracking-wider uppercase backdrop-blur-md hover:border-[#febf4a] transition-all flex items-center justify-center gap-2.5"
          >
            <Compass className="w-4 h-4" />
            <span>Discover Khelaiya</span>
          </a>
        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="relative z-20 mt-8 flex flex-col items-center pointer-events-none opacity-60"
      >
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#febf4a]/90 font-mono mb-1">
          Scroll to explore
        </span>
        <div className="w-4 h-7 rounded-full border border-[#febf4a]/50 flex justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#febf4a]" />
        </div>
      </motion.div>

    </section>
  );
}
