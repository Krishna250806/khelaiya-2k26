import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Calendar, Clock } from 'lucide-react';

export default function CountdownTimer({ targetDate = "2026-10-24T18:00:00+05:30" }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isExpired: false
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Decorative Header Pill */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#febf4a] bg-[#5f1040]/70 border border-[#febf4a]/30 backdrop-blur-md">
          <Calendar className="w-3.5 h-3.5 text-[#febf4a]" />
          <span>October 24, 2026</span>
          <span className="w-1 h-1 rounded-full bg-[#febf4a]" />
          <Clock className="w-3.5 h-3.5 text-[#febf4a]" />
          <span>6:00 PM IST</span>
        </span>
      </div>

      {/* Countdown Grid (Glowing Gold on Maroon/Teal gradient cards) */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 md:gap-5">
        {timeUnits.map((unit, idx) => (
          <div
            key={unit.label}
            className="group relative flex flex-col items-center justify-center p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#5f1040]/80 via-[#27153a]/90 to-[#0f4d5b]/80 border border-[#febf4a]/40 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.7),0_0_15px_rgba(254,191,74,0.2)] backdrop-blur-md transition-all duration-300 hover:border-[#febf4a] hover:shadow-[0_10px_30px_rgba(254,191,74,0.35)]"
          >
            {/* Top Corner Brass Accents */}
            <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 rounded-full bg-[#febf4a]/60" />
            <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#febf4a]/60" />
            
            {/* Inner Glow Reflection */}
            <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-b from-[#febf4a]/10 to-transparent pointer-events-none" />

            {/* Value Counter */}
            <div className="relative overflow-hidden h-10 sm:h-14 md:h-16 flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={unit.value}
                  initial={{ y: -15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 15, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gradient-gold filter drop-shadow-[0_2px_10px_rgba(254,191,74,0.5)]"
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Label */}
            <span className="mt-1 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-[#fff0c2]/75 uppercase group-hover:text-[#febf4a] transition-colors">
              {unit.label}
            </span>

            {/* Bottom Glow Line */}
            <div className="w-1/2 h-[2px] mt-2 rounded-full bg-gradient-to-r from-transparent via-[#febf4a]/50 to-transparent group-hover:via-[#febf4a] transition-all" />
          </div>
        ))}
      </div>

      {/* Subtitle / Urgency note */}
      <div className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-[#febf4a]/90 font-medium">
        <Sparkles className="w-3.5 h-3.5 text-[#febf4a] animate-pulse" />
        <span>Rhythm begins in less than a month • Early passes nearly full</span>
      </div>
    </div>
  );
}
