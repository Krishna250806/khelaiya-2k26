import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Sparkles, AlertCircle, Users, CheckCircle2 } from 'lucide-react';
import { DiyaIcon, MandalaPattern } from './common/MandalaDecorations';

export default function RegisterCtaSection({ onOpenPassModal }) {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Mandala Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-15">
        <MandalaPattern className="w-[600px] h-[600px] text-[#febf4a] animate-spin-slow" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-[#febf4a] via-[#5f1040] to-[#0f4d5b] shadow-[0_0_50px_rgba(254,191,74,0.3)]">
          
          <div className="rounded-[22px] bg-gradient-to-br from-[#2a061b] via-[#3a0826] to-[#072b33] p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">
            
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#febf4a]/50 bg-[#5f1040]/80 text-[#febf4a] text-xs font-bold uppercase tracking-wider mb-6 shadow-md">
              <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
              <span>Limited Capacity • Over 4,200 Passes Already Claimed</span>
            </div>

            {/* Heading */}
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
              Don't Miss The <span className="text-gradient-gold">Grandest Night</span> of 2026
            </h2>

            <p className="text-base sm:text-xl text-[#fff0c2]/85 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
              Step onto the hallowed grounds of Khelaiya on <strong className="text-[#febf4a]">October 24, 2026</strong>. 
              Once the 5,000 capacity threshold is reached, registrations will close permanently.
            </p>

            {/* Live Capacity Bar Indicator */}
            <div className="max-w-md mx-auto mb-10">
              <div className="flex justify-between text-xs text-[#febf4a] font-mono mb-2">
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  Campus Arena Capacity
                </span>
                <span className="font-bold">84% Full</span>
              </div>
              <div className="h-3 w-full bg-[#180311] border border-[#febf4a]/40 rounded-full p-[2px] overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "84%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[#0f4d5b] via-[#febf4a] to-[#ff4500] rounded-full"
                />
              </div>
            </div>

            {/* Pulsing Large CTA Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                onClick={onOpenPassModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="relative group px-10 py-5 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-display font-bold text-lg tracking-wider uppercase shadow-gold-glow-lg transition-all cursor-pointer overflow-hidden"
              >
                {/* Pulsing border aura */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#febf4a] via-white to-[#febf4a] opacity-40 blur-md group-hover:opacity-75 transition-opacity animate-pulse-glow" />
                
                <div className="relative flex items-center justify-center gap-3">
                  <Ticket className="w-6 h-6 text-[#3a0826]" />
                  <span>Claim Your Garba Pass Now</span>
                  <Sparkles className="w-5 h-5 text-[#5f1040]" />
                </div>
              </motion.button>
            </div>

            {/* Guarantee points */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#fff0c2]/70 font-medium">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#febf4a]" />
                Instant QR Verification
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#febf4a]" />
                Free Dandiya Sticks with Early Bird
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#febf4a]" />
                Complimentary Refreshment Voucher
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
