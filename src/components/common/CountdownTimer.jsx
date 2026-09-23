import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Flame } from 'lucide-react';
import { FESTIVAL_INFO } from '../../data/festivalData';

export default function CountdownTimer({ targetDate = FESTIVAL_INFO.targetDate || "2026-10-24T18:00:00+05:30" }) {
  const calculateTimeLeft = () => {
    const eventTime = new Date(targetDate).getTime();
    const now = new Date().getTime();
    const difference = eventTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isCompleted: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-xl mx-auto my-6 px-2">
      {/* Mini Title Eyebrow */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <Flame className="w-3.5 h-3.5 text-[#febf4a] animate-pulse" />
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#febf4a]/90 font-mono">
          Celebration Begins In
        </span>
        <Sparkles className="w-3 h-3 text-[#febf4a] animate-spin-slow" />
      </div>

      {/* Timer Units Container */}
      <div className="grid grid-cols-4 gap-2 sm:gap-4 items-center justify-center">
        {timeUnits.map((unit, index) => {
          const formattedValue = String(unit.value).padStart(2, '0');

          return (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative group"
            >
              {/* Card Container */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#5f1040]/85 via-[#380924]/90 to-[#190412]/95 border border-[#febf4a]/35 shadow-festive-card backdrop-blur-md px-2 py-3 sm:px-4 sm:py-4 flex flex-col items-center justify-center transition-all duration-300 group-hover:border-[#febf4a]/70 group-hover:shadow-gold-glow">
                
                {/* Subtle top golden light accent */}
                <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#febf4a] to-transparent opacity-60" />
                
                {/* Numeric value */}
                <span className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-gradient-gold tracking-tight drop-shadow-[0_2px_10px_rgba(254,191,74,0.4)]">
                  {formattedValue}
                </span>

                {/* Unit label */}
                <span className="text-[9px] sm:text-[11px] uppercase tracking-wider font-semibold text-[#fff0c2]/75 mt-1">
                  {unit.label}
                </span>

                {/* Bottom subtle glow line */}
                <div className="absolute bottom-0 inset-x-3 h-[2px] bg-gradient-to-r from-transparent via-[#febf4a]/40 to-transparent group-hover:via-[#febf4a] transition-all" />
              </div>

              {/* Colon Separator (between cards, except last) */}
              {index < timeUnits.length - 1 && (
                <div className="hidden sm:block absolute -right-2.5 top-1/2 -translate-y-1/2 text-[#febf4a]/60 font-bold text-lg select-none pointer-events-none">
                  :
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
