import React from 'react';
import { motion } from 'framer-motion';
import { Check, Ticket, Sparkles, Flame, Users } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { PASS_TIERS } from '../data/festivalData';
import { DiyaIcon } from './common/MandalaDecorations';

export default function PassTiersSection({ onSelectPass }) {
  return (
    <section id="passes" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0e2c34] via-[#2f071e] to-[#210314]">
      
      {/* Background Lighting Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-radial from-[#febf4a]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-radial from-[#5f1040]/30 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Secure Your Presence"
          title="Official Festival"
          highlight="Pass Tiers"
          subtitle="Choose your gateway to Gujarat's premier collegiate Ras-Garba night. Early bird allocation is limited."
        />

        {/* Pass Tiers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PASS_TIERS.map((tier, idx) => {
            const isHighlighted = tier.popular;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className={`relative rounded-3xl flex flex-col justify-between transition-all duration-300 ${
                  isHighlighted
                    ? 'lg:-translate-y-4 p-1 bg-gradient-to-b from-[#febf4a] via-[#801857] to-[#0f4d5b] shadow-[0_20px_50px_rgba(254,191,74,0.35)]'
                    : 'p-[1px] bg-gradient-to-b from-[#febf4a]/40 via-[#5f1040]/60 to-[#0f4d5b]/40 hover:shadow-gold-glow'
                }`}
              >
                {/* Highlight Badge */}
                {isHighlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 z-20">
                    <Flame className="w-3.5 h-3.5 text-[#5f1040] animate-bounce" />
                    <span>{tier.badge}</span>
                  </div>
                )}

                {/* Card Inner Body */}
                <div className="h-full rounded-[22px] bg-gradient-to-b from-[#3a0826] via-[#250417] to-[#0f4d5b]/90 p-6 sm:p-8 flex flex-col justify-between backdrop-blur-xl">
                  
                  <div>
                    {/* Tier Header */}
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-2xl font-bold text-white">
                        {tier.name}
                      </h3>
                      {!isHighlighted && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#febf4a]/90 px-2.5 py-0.5 rounded-full border border-[#febf4a]/30 bg-[#5f1040]/40">
                          {tier.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-[#fff0c2]/75 min-h-[40px] mb-6">
                      {tier.description}
                    </p>

                    {/* Pricing Display */}
                    <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-[#febf4a]/20">
                      <span className="font-display text-4xl sm:text-5xl font-extrabold text-gradient-gold">
                        ₹{tier.price}
                      </span>
                      {tier.originalPrice && (
                        <span className="text-lg text-[#fff0c2]/45 line-through font-medium">
                          ₹{tier.originalPrice}
                        </span>
                      )}
                      <span className="text-xs text-[#fff0c2]/60 uppercase tracking-wider ml-auto font-medium">
                        Per Person
                      </span>
                    </div>

                    {/* Perks Checklist */}
                    <div className="space-y-3 mb-8">
                      <div className="text-xs font-bold uppercase tracking-wider text-[#febf4a] mb-2 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Included With Pass</span>
                      </div>
                      {tier.perks.map((perk, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 text-[#febf4a]" />
                          </div>
                          <span className="text-xs sm:text-sm text-[#fff0c2]/90 leading-snug">
                            {perk}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Urgency and CTA */}
                  <div>
                    <div className="mb-4 text-center">
                      <span className="text-xs font-medium text-[#febf4a] bg-[#5f1040]/50 border border-[#febf4a]/30 px-3 py-1 rounded-full inline-block">
                        {tier.urgencyText}
                      </span>
                    </div>

                    <motion.button
                      onClick={() => onSelectPass(tier.id)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`w-full py-3.5 rounded-full font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-gold-glow transition-all cursor-pointer ${
                        isHighlighted
                          ? 'bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] hover:shadow-gold-glow-lg'
                          : 'bg-[#5f1040] hover:bg-[#801857] text-[#febf4a] border border-[#febf4a]/50'
                      }`}
                    >
                      <Ticket className="w-4 h-4" />
                      <span>Buy {tier.name}</span>
                    </motion.button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Security & Support Guarantee Note */}
        <div className="mt-14 max-w-3xl mx-auto text-center p-4 rounded-2xl bg-[#5f1040]/30 border border-[#febf4a]/20 text-xs text-[#fff0c2]/70 flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <DiyaIcon className="w-5 h-5 text-[#febf4a]" />
            <span>Valid Student Identity Card Required at Gate</span>
          </div>
          <span className="hidden sm:inline text-[#febf4a]">•</span>
          <div>Instant Digital e-Pass Issued to Email & WhatsApp</div>
        </div>

      </div>
    </section>
  );
}
