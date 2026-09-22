import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Sparkles, Compass, Music, Flame } from 'lucide-react';
import HeroThreeScene from './HeroThreeScene';
import CountdownTimer from './CountdownTimer';
import { FESTIVAL_INFO } from '../data/festivalData';
import { DiyaIcon, ToranBorder } from './common/MandalaDecorations';

export default function HeroSection({ onOpenPassModal }) {
  const titleLetters = "KHELAIYA".split("");

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* 1. Interactive Three.js 3D Dandiya & Particle Scene */}
      <HeroThreeScene />

      {/* 2. Top Toran Floral Garland Accent */}
      <div className="absolute top-0 left-0 right-0 z-20 opacity-80 pointer-events-none">
        <ToranBorder />
      </div>

      {/* 3. Subtle Radial Gradient Ambience */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-radial from-[#febf4a]/15 via-[#5f1040]/25 to-transparent blur-3xl pointer-events-none" />

      {/* 4. Main Hero Typography & Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto text-center flex flex-col items-center my-auto">
        
        {/* Decorative Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#febf4a]/40 bg-[#5f1040]/70 backdrop-blur-md shadow-gold-glow mb-6"
        >
          <Sparkles className="w-4 h-4 text-[#febf4a] animate-spin-slow" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#febf4a] uppercase">
            The Grand College Ras-Garba Mahotsav
          </span>
          <DiyaIcon className="w-4 h-4 text-[#febf4a]" />
        </motion.div>

        {/* Animated Festival Title Reveal */}
        <div className="flex items-center justify-center overflow-hidden py-1 mb-2">
          {titleLetters.map((char, index) => (
            <motion.span
              key={index}
              initial={{ y: 80, opacity: 0, rotateZ: 10 }}
              animate={{ y: 0, opacity: 1, rotateZ: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3 + index * 0.08,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-gradient-festive select-none drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] inline-block"
            >
              {char}
            </motion.span>
          ))}
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0, type: "spring" }}
            className="font-display text-2xl sm:text-4xl md:text-5xl font-bold text-[#febf4a] ml-2 -mt-4 sm:-mt-8 px-2.5 py-0.5 rounded-md border border-[#febf4a]/40 bg-[#5f1040]/60 backdrop-blur-sm self-center"
          >
            2026
          </motion.span>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-base sm:text-xl md:text-2xl text-[#fff0c2]/90 font-medium max-w-3xl mx-auto leading-relaxed mb-8 px-2"
        >
          {FESTIVAL_INFO.tagline}
        </motion.p>

        {/* Live Countdown Timer to October 24, 2026 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="w-full mb-10"
        >
          <CountdownTimer targetDate={FESTIVAL_INFO.dateTarget} />
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md"
        >
          {/* Primary CTA */}
          <motion.button
            onClick={onOpenPassModal}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-bold text-base tracking-wider uppercase shadow-gold-glow hover:shadow-gold-glow-lg transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <Ticket className="w-5 h-5 text-[#3a0826]" />
            <span>Register Now</span>
            <span className="w-2 h-2 rounded-full bg-[#5f1040] animate-ping" />
          </motion.button>

          {/* Secondary CTA */}
          <a
            href="#about"
            className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#febf4a]/50 bg-[#0f4d5b]/60 hover:bg-[#0f4d5b] text-[#febf4a] font-semibold text-sm tracking-wider uppercase backdrop-blur-md hover:border-[#febf4a] transition-all flex items-center justify-center gap-2.5"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Fest</span>
          </a>
        </motion.div>

        {/* Quick Highlights Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-[#fff0c2]/80 font-medium"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#febf4a]" />
            <span>5,000+ Student Khelaiyas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#febf4a]" />
            <span>Live Dhol & Gujarati Folk Bands</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#febf4a]" />
            <span>Grand Maha Aarti with 1,000 Diyas</span>
          </div>
        </motion.div>

      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="relative z-20 mt-6 flex flex-col items-center pointer-events-none opacity-70"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#febf4a]/90 font-mono mb-1">
          Scroll To Immerse
        </span>
        <div className="w-4 h-7 rounded-full border border-[#febf4a]/50 flex justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-[#febf4a]" />
        </div>
      </motion.div>

    </section>
  );
}
