import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MandalaPattern, ToranBorder } from './common/MandalaDecorations';

export default function DoorLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isOpening, setIsOpening] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Smooth progress simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        const increment = Math.floor(Math.random() * 9) + 5;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    if (isOpening) return;
    setIsOpening(true);
    // After doors swing open, signal completion to parent
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 1800);
  };

  // Auto enter shortly after 100% if user hasn't clicked
  useEffect(() => {
    if (isReady && !isOpening) {
      const autoTimer = setTimeout(() => {
        handleEnter();
      }, 1200);
      return () => clearTimeout(autoTimer);
    }
  }, [isReady, isOpening]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-[#15020e] perspective-1000 select-none"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      >
        {/* Golden Light Burst Behind Doors */}
        <div 
          className={`absolute inset-0 bg-gradient-radial from-[#febf4a]/40 via-[#5f1040]/30 to-[#0f4d5b]/40 transition-opacity duration-1000 ${
            isOpening ? 'opacity-100 scale-125' : 'opacity-0 scale-95'
          }`}
        />

        {/* Floating Sparks Behind */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#febf4a_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

        {/* Top Arch Toran Frame */}
        <div className="absolute top-0 left-0 right-0 z-40">
          <ToranBorder className="text-[#febf4a] filter drop-shadow-[0_2px_8px_rgba(254,191,74,0.4)]" />
        </div>

        {/* 3D HAVELI GATE DOORS CONTAINER */}
        <div className="relative w-full h-full flex transform-style-3d">
          
          {/* LEFT DOOR */}
          <motion.div
            className="relative w-1/2 h-full bg-gradient-to-r from-[#200313] via-[#3a0826] to-[#5f1040] border-r-2 border-[#febf4a]/60 shadow-[inset_-20px_0_40px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-end"
            style={{ 
              transformOrigin: 'left center',
              backfaceVisibility: 'hidden',
            }}
            animate={isOpening ? { 
              rotateY: -105, 
              x: '-20%',
              transition: { duration: 1.6, ease: [0.65, 0, 0.35, 1] } 
            } : { rotateY: 0, x: 0 }}
          >
            {/* Wooden Texture Overlay */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200 via-stone-800 to-black" />
            
            {/* Ornate Door Carvings (Left) */}
            <div className="absolute inset-4 md:inset-8 border-2 border-[#febf4a]/30 rounded-t-full rounded-b-lg pointer-events-none flex flex-col items-center justify-between p-6">
              <div className="translate-x-1/2 opacity-30">
                <MandalaPattern className="w-48 h-48 text-[#febf4a]" />
              </div>
              
              <div className="grid grid-cols-2 gap-8 my-auto opacity-70">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-[#fff0c2] via-[#febf4a] to-[#734e07] shadow-[0_2px_6px_rgba(0,0,0,0.9)] border border-[#febf4a]/50" />
                ))}
              </div>

              <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#febf4a]/40 to-transparent" />
            </div>

            {/* Left Brass Door Ring Knocker */}
            <div className="relative mr-4 sm:mr-8 md:mr-16 flex flex-col items-center">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-[#febf4a] bg-gradient-to-b from-[#febf4a] via-[#8c600b] to-[#3a0826] flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-[#febf4a]/80 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#fff0c2]" />
                </div>
              </div>
              <div className="w-2 h-6 bg-gradient-to-b from-[#febf4a] to-[#3a0826] rounded-b-md" />
            </div>
          </motion.div>

          {/* RIGHT DOOR */}
          <motion.div
            className="relative w-1/2 h-full bg-gradient-to-l from-[#200313] via-[#3a0826] to-[#5f1040] border-l-2 border-[#febf4a]/60 shadow-[inset_20px_0_40px_rgba(0,0,0,0.8)] overflow-hidden flex items-center justify-start"
            style={{ 
              transformOrigin: 'right center',
              backfaceVisibility: 'hidden',
            }}
            animate={isOpening ? { 
              rotateY: 105, 
              x: '20%',
              transition: { duration: 1.6, ease: [0.65, 0, 0.35, 1] } 
            } : { rotateY: 0, x: 0 }}
          >
            {/* Wooden Texture Overlay */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-200 via-stone-800 to-black" />
            
            {/* Ornate Door Carvings (Right) */}
            <div className="absolute inset-4 md:inset-8 border-2 border-[#febf4a]/30 rounded-t-full rounded-b-lg pointer-events-none flex flex-col items-center justify-between p-6">
              <div className="-translate-x-1/2 opacity-30">
                <MandalaPattern className="w-48 h-48 text-[#febf4a]" />
              </div>
              
              <div className="grid grid-cols-2 gap-8 my-auto opacity-70">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-[#fff0c2] via-[#febf4a] to-[#734e07] shadow-[0_2px_6px_rgba(0,0,0,0.9)] border border-[#febf4a]/50" />
                ))}
              </div>

              <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#febf4a]/40 to-transparent" />
            </div>

            {/* Right Brass Door Ring Knocker */}
            <div className="relative ml-4 sm:ml-8 md:ml-16 flex flex-col items-center">
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-4 border-[#febf4a] bg-gradient-to-b from-[#febf4a] via-[#8c600b] to-[#3a0826] flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full border-2 border-[#febf4a]/80 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-[#fff0c2]" />
                </div>
              </div>
              <div className="w-2 h-6 bg-gradient-to-b from-[#febf4a] to-[#3a0826] rounded-b-md" />
            </div>
          </motion.div>

        </div>

        {/* CENTER EMBOSSED EMBLEM & LOADING / ENTER ACTION */}
        <div className={`absolute z-40 flex flex-col items-center justify-center text-center px-4 max-w-md transition-all duration-700 pointer-events-auto ${
          isOpening ? 'opacity-0 scale-75 pointer-events-none' : 'opacity-100 scale-100'
        }`}>
          {/* NUV Festive Emblem */}
          <div className="relative mb-5">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-[#febf4a]/70 flex items-center justify-center bg-[#3a0826]/90 shadow-[0_0_35px_rgba(254,191,74,0.4)] backdrop-blur-md overflow-hidden p-3">
              {/* Spinning Sacred Mandala */}
              <div className="absolute inset-0 flex items-center justify-center animate-spin-slow opacity-40">
                <MandalaPattern className="w-28 h-28 text-[#febf4a]" />
              </div>
              
              {/* NUV Official Emblem / Artwork */}
              <img 
                src="/nuv-assets/Asset 5.png" 
                alt="NUV Khelaiya Emblem" 
                className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 object-contain filter drop-shadow-[0_2px_10px_rgba(254,191,74,0.5)]" 
              />
            </div>

            <div className="absolute -inset-2 rounded-full border border-[#febf4a]/30 animate-pulse-glow pointer-events-none" />
          </div>

          <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#febf4a] font-semibold mb-1">
            Navrachana University Presents
          </p>

          <h1 className="font-display text-3xl sm:text-4xl text-gradient-gold tracking-wider mb-2 drop-shadow-md">
            NUV KHELAIYA
          </h1>

          <p className="text-xs text-[#fff0c2]/80 font-medium mb-6">
            A celebration of culture, rhythm & togetherness
          </p>

          {/* Progress Indicator */}
          <div className="w-64 sm:w-72 mb-6">
            <div className="flex justify-between items-center text-xs text-[#febf4a]/80 font-mono mb-2">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#febf4a] animate-spin-slow" />
                {progress < 100 ? "Opening the celebration..." : "Gates are ready to open"}
              </span>
              <span className="font-bold text-[#febf4a]">{progress}%</span>
            </div>
            
            <div className="h-2 w-full bg-[#1c0413] border border-[#febf4a]/40 rounded-full p-[1px] overflow-hidden shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#5f1040] via-[#febf4a] to-[#0f4d5b] rounded-full"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Enter Button */}
          <motion.button
            onClick={handleEnter}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className={`group relative inline-flex items-center gap-3 px-7 py-3 rounded-full font-semibold text-sm tracking-wider uppercase transition-all duration-300 shadow-gold-glow cursor-pointer ${
              progress === 100
                ? 'bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-bold ring-2 ring-[#febf4a]/80'
                : 'bg-[#5f1040]/80 text-[#febf4a] border border-[#febf4a]/40 hover:bg-[#5f1040]'
            }`}
          >
            <span>{progress === 100 ? "Enter The Celebration" : "Open The Gates"}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#febf4a] to-[#0f4d5b] opacity-0 group-hover:opacity-30 blur-sm transition-opacity" />
          </motion.button>
        </div>

      </motion.div>
    </AnimatePresence>
  );
}
