import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

// Ornate 3D Brass Rosette Stud (Iconic Indian Haveli Door Boss)
function BrassDoorBoss({ size = "w-4 h-4 sm:w-5 sm:h-5" }) {
  return (
    <div className={`relative flex items-center justify-center flex-shrink-0 ${size}`}>
      {/* Outer scalloped petal ring */}
      <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ffd982] via-[#c48b1a] to-[#422502] p-0.5 shadow-[0_3px_8px_rgba(0,0,0,0.9)] border border-[#ffe6a3]/70 flex items-center justify-center">
        {/* Raised conical boss dome */}
        <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-br from-[#fff5d0] via-[#d49924] to-[#261301] shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),0_2px_5px_rgba(0,0,0,0.9)] flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ffd982]" />
        </div>
      </div>
    </div>
  );
}

// Ornate Royal Brass Ring Knocker (Hidden on small mobile to maximize plaque space)
function BrassRingKnocker({ side = "left" }) {
  return (
    <div className={`absolute ${side === 'left' ? 'right-4 sm:right-8 md:right-10' : 'left-4 sm:left-8 md:left-10'} top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center pointer-events-none z-20`}>
      {/* Sunburst Backplate */}
      <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#ffd982] via-[#c48b1a] to-[#3a1a02] p-1.5 shadow-[0_6px_20px_rgba(0,0,0,0.95)] border-2 border-[#ffe6a3]/80 flex items-center justify-center">
        <div className="w-full h-full rounded-full border-2 border-dashed border-[#5a3a08] flex items-center justify-center bg-gradient-to-br from-[#e0a838] via-[#8c5a10] to-[#200e02]">
          <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-[#fed575] shadow-inner border border-[#fff]" />
        </div>
      </div>
      {/* Heavy Hanging Brass Drop Ring */}
      <div className="w-8 h-11 sm:w-11 sm:h-14 md:w-13 md:h-17 rounded-b-full border-[5px] sm:border-[6px] border-[#febf4a] bg-gradient-to-b from-transparent via-[#c48b1a]/25 to-[#ffd982]/40 shadow-[0_8px_18px_rgba(0,0,0,0.9)] -mt-3.5 group-hover:scale-105 transition-transform" />
    </div>
  );
}

// Heavy Forged Brass Strap Hinge (Outer Edges)
function BrassStrapHinge({ side = "left", topPos = "top-[15%]" }) {
  return (
    <div className={`absolute ${topPos} ${side === 'left' ? 'left-0' : 'right-0'} z-20 pointer-events-none flex items-center`}>
      <div className={`h-6 sm:h-8 md:h-10 w-12 sm:w-16 md:w-20 bg-gradient-to-r ${
        side === 'left' 
          ? 'from-[#784606] via-[#fed575] to-[#422502] rounded-r-lg border-r-2 border-y' 
          : 'from-[#422502] via-[#fed575] to-[#784606] rounded-l-lg border-l-2 border-y'
      } border-[#ffd982]/80 shadow-[0_4px_12px_rgba(0,0,0,0.9)] flex items-center ${side === 'left' ? 'justify-end pr-2' : 'justify-start pl-2'}`}>
        <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#1e0a02] border border-[#ffd982]" />
      </div>
    </div>
  );
}

export default function DoorLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(prev + 18, 100);
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 1800);
  };

  return (
    <AnimatePresence>
      <motion.div
        onClick={handleEnter}
        className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-[#0d0108] perspective-1000 select-none cursor-pointer group"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      >
        {/* ========================================================= */}
        {/* GOLDEN FESTIVAL LIGHT BURST (Behind Opening Doors) */}
        {/* ========================================================= */}
        <div 
          className={`absolute inset-0 bg-gradient-radial from-[#febf4a]/90 via-[#701045]/75 to-[#07242c]/85 transition-opacity duration-1000 pointer-events-none z-0 ${
            isOpening ? 'opacity-100 scale-125' : 'opacity-0 scale-95'
          }`}
        />

        {/* Ambient Warm Sparkles */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#febf4a_1.5px,transparent_1.5px)] [background-size:26px_26px] opacity-15" />

        {/* ========================================================= */}
        {/* HEAVY ARCHITECTURAL OUTER DOOR FRAME (Jambs & Toran Lintel) */}
        {/* ========================================================= */}
        <div className="absolute inset-0 border-[10px] sm:border-[16px] md:border-[22px] border-[#18030f] shadow-[inset_0_0_80px_rgba(0,0,0,0.98)] pointer-events-none z-30 flex flex-col justify-between">
          
          {/* Top Ornate Lintel Beam with Hanging Festive Toran & Bells */}
          <div className="w-full bg-gradient-to-r from-[#1c0312] via-[#3a0624] to-[#1c0312] border-b-4 border-[#febf4a]/70 shadow-[0_8px_30px_rgba(0,0,0,0.95)] px-4 py-2 sm:py-3 flex flex-col items-center relative overflow-hidden">
            {/* Lintel Carved Pattern */}
            <div className="absolute inset-0 opacity-15 bg-[repeating-linear-gradient(45deg,#febf4a,#febf4a_4px,transparent_4px,transparent_14px)] pointer-events-none" />

            {/* Hanging Toran Garland Swag across top of doors */}
            <div className="w-full flex items-center justify-around pt-1.5 opacity-90">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-3 sm:w-5 h-3 sm:h-5 bg-gradient-to-br from-[#febf4a] to-[#991b1b] [clip-path:polygon(50%_100%,0_0,100%_0)] shadow-sm" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ffd982] -mt-0.5" />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Heavy Brass Threshold Step */}
          <div className="w-full h-3 sm:h-5 bg-gradient-to-r from-[#422502] via-[#fed575] to-[#422502] border-t-2 border-[#fff0c2]/60 shadow-[0_-4px_15px_rgba(0,0,0,0.9)]" />
        </div>

        {/* Outer Strap Hinges on Far Edges */}
        <BrassStrapHinge side="left" topPos="top-[18%]" />
        <BrassStrapHinge side="left" topPos="bottom-[18%]" />
        <BrassStrapHinge side="right" topPos="top-[18%]" />
        <BrassStrapHinge side="right" topPos="bottom-[18%]" />

        {/* ========================================================= */}
        {/* 3D DOUBLE-LEAF HAVELI DOORS (100% Screen Coverage) */}
        {/* ========================================================= */}
        <div className="relative w-full h-full flex transform-style-3d">
          
          {/* ========================================================= */}
          {/* LEFT DOOR LEAF */}
          {/* ========================================================= */}
          <motion.div
            className="relative w-1/2 h-full bg-[#200414] border-r-2 sm:border-r-4 border-[#12010b] shadow-[inset_-25px_0_50px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col justify-between py-16 sm:py-20 px-3 sm:px-6 md:px-12"
            style={{
              transformOrigin: 'left center',
              backfaceVisibility: 'hidden',
              backgroundImage: 'linear-gradient(135deg, #1f0313 0%, #2f071e 35%, #420a2a 70%, #1f0313 100%)',
            }}
            animate={isOpening ? { 
              rotateY: -105, 
              transition: { duration: 1.6, ease: [0.65, 0, 0.35, 1] } 
            } : { rotateY: 0 }}
          >
            {/* Authentic Woodgrain Planks Texture */}
            <div className="absolute inset-0 opacity-25 pointer-events-none bg-[repeating-linear-gradient(90deg,transparent,transparent_50px,rgba(0,0,0,0.7)_51px,rgba(254,191,74,0.12)_52px)]" />
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400 via-rose-950 to-black" />

            {/* Horizontal Brass Reinforcing Strap - Upper */}
            <div className="absolute top-[22%] left-0 right-0 h-3 sm:h-4 bg-gradient-to-r from-[#6b4004] via-[#ffd982] to-[#6b4004] border-y border-[#ffe6a3]/70 shadow-[0_4px_12px_rgba(0,0,0,0.9)] flex items-center justify-around px-4 pointer-events-none z-10">
              {[...Array(5)].map((_, i) => (
                <BrassDoorBoss key={i} />
              ))}
            </div>

            {/* Horizontal Brass Reinforcing Strap - Lower */}
            <div className="absolute bottom-[22%] left-0 right-0 h-3 sm:h-4 bg-gradient-to-r from-[#6b4004] via-[#ffd982] to-[#6b4004] border-y border-[#ffe6a3]/70 shadow-[0_4px_12px_rgba(0,0,0,0.9)] flex items-center justify-around px-4 pointer-events-none z-10">
              {[...Array(5)].map((_, i) => (
                <BrassDoorBoss key={i} />
              ))}
            </div>

            {/* TOP RECESSED PANEL COFFER */}
            <div className="w-full h-20 sm:h-28 md:h-36 rounded-2xl bg-gradient-to-b from-[#13010b] via-[#200313] to-[#0f0108] border-2 sm:border-4 border-[#febf4a]/30 shadow-[inset_0_6px_16px_rgba(0,0,0,0.95),inset_0_-2px_6px_rgba(254,191,74,0.2)] flex items-center justify-around px-4 pointer-events-none">
              <BrassDoorBoss size="w-6 h-6 sm:w-8 sm:h-8" />
              <div className="w-12 h-1 rounded bg-[#febf4a]/30" />
              <BrassDoorBoss size="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            {/* ========================================================= */}
            {/* CENTER OF LEFT DOOR: "NUV KHELAIYA" ROYAL CARVED CREST */}
            {/* ========================================================= */}
            <div className="relative z-20 flex items-center justify-center pointer-events-none my-auto py-2 sm:py-4">
              <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-[16/11] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#18020e] via-[#2b051b] to-[#12010a] border-2 sm:border-4 border-[#febf4a]/80 shadow-[0_15px_40px_rgba(0,0,0,0.95),inset_0_6px_20px_rgba(0,0,0,0.95),inset_0_-3px_8px_rgba(254,191,74,0.25)] p-2.5 sm:p-5 md:p-6 flex flex-col items-center justify-center text-center relative overflow-hidden backdrop-blur-md">
                
                {/* Ornate Gold Corner Filigree Brackets */}
                <div className="absolute top-2 left-2 sm:top-3.5 sm:left-3.5 w-3.5 sm:w-6 h-3.5 sm:h-6 border-t-2 border-l-2 border-[#febf4a]" />
                <div className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 w-3.5 sm:w-6 h-3.5 sm:h-6 border-t-2 border-r-2 border-[#febf4a]" />
                <div className="absolute bottom-2 left-2 sm:bottom-3.5 sm:left-3.5 w-3.5 sm:w-6 h-3.5 sm:h-6 border-b-2 border-l-2 border-[#febf4a]" />
                <div className="absolute bottom-2 right-2 sm:bottom-3.5 sm:right-3.5 w-3.5 sm:w-6 h-3.5 sm:h-6 border-b-2 border-r-2 border-[#febf4a]" />

                {/* Inner Beveled Frame */}
                <div className="absolute inset-2 sm:inset-3.5 rounded-xl sm:rounded-2xl border border-[#febf4a]/30 pointer-events-none" />

                {/* "NUV KHELAIYA" Royal Typography */}
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <span className="font-nuv text-[10px] sm:text-base md:text-xl tracking-[0.35em] sm:tracking-[0.6em] text-[#febf4a] font-bold uppercase block mb-0.5 sm:mb-1 drop-shadow-md">
                    NUV
                  </span>
                  <h1 className="font-khelaiya text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-gradient-gold tracking-wide drop-shadow-[0_4px_25px_rgba(0,0,0,0.98)] leading-none">
                    खेलैया
                  </h1>
                  <div className="w-16 sm:w-32 h-0.5 sm:h-1 mx-auto mt-1 sm:mt-3 bg-gradient-to-r from-transparent via-[#febf4a] to-transparent" />
                  <span className="text-[9px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#fed575]/80 font-bold mt-1.5 sm:mt-2">
                    Vadodara • Gujarat
                  </span>
                </div>
              </div>
            </div>

            {/* BOTTOM RECESSED PANEL COFFER */}
            <div className="w-full h-20 sm:h-28 md:h-36 rounded-2xl bg-gradient-to-b from-[#13010b] via-[#200313] to-[#0f0108] border-2 sm:border-4 border-[#febf4a]/30 shadow-[inset_0_6px_16px_rgba(0,0,0,0.95),inset_0_-2px_6px_rgba(254,191,74,0.2)] flex items-center justify-around px-4 pointer-events-none">
              <BrassDoorBoss size="w-6 h-6 sm:w-8 sm:h-8" />
              <div className="w-12 h-1 rounded bg-[#febf4a]/30" />
              <BrassDoorBoss size="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            {/* Left Ring Knocker */}
            <BrassRingKnocker side="left" />

            {/* Left Door Heavy Brass Pull Handle (Near Center Seam) */}
            <div className="absolute right-2 sm:right-4 md:right-5 top-1/2 -translate-y-1/2 z-25 pointer-events-none flex flex-col items-center">
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-[#ffd982] via-[#c48b1a] to-[#3a1a02] border border-[#ffd982] shadow-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#18020e]" />
              </div>
              <div className="w-2 sm:w-3 h-28 sm:h-40 md:h-52 bg-gradient-to-r from-[#6b4004] via-[#fed575] to-[#422502] shadow-[0_6px_15px_rgba(0,0,0,0.95)] border-x border-[#ffe6a3]/70 my-0.5 rounded-full relative">
                <div className="absolute top-1/2 left-0 right-0 h-2 bg-[#fff0c2]/90 shadow-sm" />
              </div>
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-[#ffd982] via-[#c48b1a] to-[#3a1a02] border border-[#ffd982] shadow-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#18020e]" />
              </div>
            </div>

          </motion.div>

          {/* ========================================================= */}
          {/* RIGHT DOOR LEAF */}
          {/* ========================================================= */}
          <motion.div
            className="relative w-1/2 h-full bg-[#200414] border-l-2 sm:border-l-4 border-[#12010b] shadow-[inset_25px_0_50px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col justify-between py-16 sm:py-20 px-3 sm:px-6 md:px-12"
            style={{
              transformOrigin: 'right center',
              backfaceVisibility: 'hidden',
              backgroundImage: 'linear-gradient(225deg, #1f0313 0%, #2f071e 35%, #420a2a 70%, #1f0313 100%)',
            }}
            animate={isOpening ? { 
              rotateY: 105, 
              transition: { duration: 1.6, ease: [0.65, 0, 0.35, 1] } 
            } : { rotateY: 0 }}
          >
            {/* Authentic Woodgrain Planks Texture */}
            <div className="absolute inset-0 opacity-25 pointer-events-none bg-[repeating-linear-gradient(90deg,transparent,transparent_50px,rgba(0,0,0,0.7)_51px,rgba(254,191,74,0.12)_52px)]" />
            <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400 via-rose-950 to-black" />

            {/* Horizontal Brass Reinforcing Strap - Upper */}
            <div className="absolute top-[22%] left-0 right-0 h-3 sm:h-4 bg-gradient-to-r from-[#6b4004] via-[#ffd982] to-[#6b4004] border-y border-[#ffe6a3]/70 shadow-[0_4px_12px_rgba(0,0,0,0.9)] flex items-center justify-around px-4 pointer-events-none z-10">
              {[...Array(5)].map((_, i) => (
                <BrassDoorBoss key={i} />
              ))}
            </div>

            {/* Horizontal Brass Reinforcing Strap - Lower */}
            <div className="absolute bottom-[22%] left-0 right-0 h-3 sm:h-4 bg-gradient-to-r from-[#6b4004] via-[#ffd982] to-[#6b4004] border-y border-[#ffe6a3]/70 shadow-[0_4px_12px_rgba(0,0,0,0.9)] flex items-center justify-around px-4 pointer-events-none z-10">
              {[...Array(5)].map((_, i) => (
                <BrassDoorBoss key={i} />
              ))}
            </div>

            {/* TOP RECESSED PANEL COFFER */}
            <div className="w-full h-20 sm:h-28 md:h-36 rounded-2xl bg-gradient-to-b from-[#13010b] via-[#200313] to-[#0f0108] border-2 sm:border-4 border-[#febf4a]/30 shadow-[inset_0_6px_16px_rgba(0,0,0,0.95),inset_0_-2px_6px_rgba(254,191,74,0.2)] flex items-center justify-around px-4 pointer-events-none">
              <BrassDoorBoss size="w-6 h-6 sm:w-8 sm:h-8" />
              <div className="w-12 h-1 rounded bg-[#febf4a]/30" />
              <BrassDoorBoss size="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            {/* ========================================================= */}
            {/* CENTER OF RIGHT DOOR: MAA DURGA IN CARVED FRAME */}
            {/* ========================================================= */}
            <div className="relative z-20 flex items-center justify-center pointer-events-none my-auto py-2 sm:py-4">
              <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-[16/11] rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#18020e] via-[#2b051b] to-[#12010a] border-2 sm:border-4 border-[#febf4a]/80 shadow-[0_15px_40px_rgba(0,0,0,0.95),inset_0_6px_20px_rgba(0,0,0,0.95),inset_0_-3px_8px_rgba(254,191,74,0.25)] p-2 sm:p-4 flex items-center justify-center relative overflow-hidden backdrop-blur-md">
                
                {/* Inlaid Maa Durga Artwork */}
                <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden shadow-inner border border-[#febf4a]/60 bg-[#3b2816] flex items-center justify-center">
                  <img
                    src="/nuv-assets/door-durga.png"
                    alt="Maa Durga"
                    className="w-full h-full object-contain filter brightness-105"
                  />
                  {/* Subtle inner warm shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18020e]/40 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>
            </div>

            {/* BOTTOM RECESSED PANEL COFFER */}
            <div className="w-full h-20 sm:h-28 md:h-36 rounded-2xl bg-gradient-to-b from-[#13010b] via-[#200313] to-[#0f0108] border-2 sm:border-4 border-[#febf4a]/30 shadow-[inset_0_6px_16px_rgba(0,0,0,0.95),inset_0_-2px_6px_rgba(254,191,74,0.2)] flex items-center justify-around px-4 pointer-events-none">
              <BrassDoorBoss size="w-6 h-6 sm:w-8 sm:h-8" />
              <div className="w-12 h-1 rounded bg-[#febf4a]/30" />
              <BrassDoorBoss size="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

            {/* Right Ring Knocker */}
            <BrassRingKnocker side="right" />

            {/* Right Door Heavy Brass Pull Handle (Near Center Seam) */}
            <div className="absolute left-2 sm:left-4 md:left-5 top-1/2 -translate-y-1/2 z-25 pointer-events-none flex flex-col items-center">
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-[#ffd982] via-[#c48b1a] to-[#3a1a02] border border-[#ffd982] shadow-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#18020e]" />
              </div>
              <div className="w-2 sm:w-3 h-28 sm:h-40 md:h-52 bg-gradient-to-r from-[#6b4004] via-[#fed575] to-[#422502] shadow-[0_6px_15px_rgba(0,0,0,0.95)] border-x border-[#ffe6a3]/70 my-0.5 rounded-full relative">
                <div className="absolute top-1/2 left-0 right-0 h-2 bg-[#fff0c2]/90 shadow-sm" />
              </div>
              <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-[#ffd982] via-[#c48b1a] to-[#3a1a02] border border-[#ffd982] shadow-md flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#18020e]" />
              </div>
            </div>

          </motion.div>

        </div>

        {/* ========================================================= */}
        {/* CENTER MEETING STILE ASTRAGAL (Down Middle Seam) */}
        {/* ========================================================= */}
        {!isOpening && (
          <div className="absolute top-12 sm:top-16 md:top-20 bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 w-3 sm:w-4 bg-gradient-to-r from-[#200313] via-[#fed575] to-[#200313] shadow-[0_0_20px_rgba(0,0,0,0.95)] z-30 pointer-events-none flex flex-col items-center justify-between py-10">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#fed575] shadow-md border border-[#754407]" />
            ))}
          </div>
        )}

        {/* ========================================================= */}
        {/* BOTTOM ENTER PROMPT */}
        {/* ========================================================= */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2.5 sm:gap-3.5 px-6 sm:px-8 py-2 sm:py-2.5 rounded-full bg-[#18020e]/95 border-2 border-[#febf4a]/80 shadow-[0_6px_25px_rgba(0,0,0,0.95)] backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#febf4a] animate-spin-slow" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#fed575]">
              Click Gates To Enter
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#febf4a] animate-spin-slow" />
          </motion.div>
        </div>

      </motion.div>
    </AnimatePresence>
  );
}
