import React from 'react';
import { motion } from 'framer-motion';
import { Users, Music, Award } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import FestiveCardBorder from './common/FestiveCardBorder';

export default function EventHighlights() {
  return (
    <section id="organizer" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0e2c34] via-[#24061a] to-[#210314]">
      {/* Invisible anchor so existing #event links also land here seamlessly */}
      <span id="event" className="absolute -top-20 opacity-0 pointer-events-none" />

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-radial from-[#febf4a]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-radial from-[#5f1040]/25 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Leadership & Execution"
          title="ORGANIZED"
          highlight="BY"
          subtitle="Presented with pride, devotion, and festive spirit by the student cultural body of Navrachana University."
        />

        {/* Grand Cultural Committee Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl p-1 bg-gradient-to-r from-[#febf4a] via-[#5f1040] to-[#0f4d5b] shadow-[0_0_50px_rgba(254,191,74,0.25)] mt-12"
        >
          <div className="rounded-[22px] bg-gradient-to-br from-[#2a061b] via-[#3a0826] to-[#0a272f] p-8 sm:p-12 md:p-14 text-center relative overflow-hidden backdrop-blur-xl">
            
            {/* Ornate Festive Border on All 4 Sides */}
            <FestiveCardBorder className="opacity-80" />

            {/* Cultural Committee Logo Emblem (CC_logo) */}
            <div className="relative mx-auto mb-6 w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-white p-3.5 border-2 border-[#febf4a] shadow-gold-glow flex items-center justify-center overflow-hidden group hover:scale-105 transition-transform duration-300">
              <img 
                src="/CC_logo.jpg" 
                alt="Cultural Committee - Navrachana University" 
                className="w-full h-full object-contain"
              />
            </div>

            {/* University Tag */}
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#5f1040]/80 border border-[#febf4a]/40 text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#febf4a] mb-4 shadow-sm">
              Navrachana University
            </div>

            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Cultural <span className="text-gradient-gold">Committee</span>
            </h3>

            <p className="text-sm sm:text-base text-[#fff0c2]/90 max-w-2xl mx-auto leading-relaxed mb-10">
              The official student-led Cultural Committee conceptualizes and orchestrates <strong className="text-[#febf4a]">NUV खेलैया 2026</strong>. From authentic traditional folk rhythms to seamless event coordination, our committee unites the university community in celebration.
            </p>

            {/* Three Pillar Value Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto pt-8 border-t border-[#febf4a]/20">
              <div className="p-4 rounded-2xl bg-[#170310]/80 border border-[#febf4a]/25 text-center">
                <div className="w-10 h-10 rounded-full bg-[#febf4a]/15 border border-[#febf4a]/40 text-[#febf4a] flex items-center justify-center mx-auto mb-2">
                  <Music className="w-5 h-5 text-[#febf4a]" />
                </div>
                <h4 className="font-display text-sm font-bold text-white mb-1">Cultural Heritage</h4>
                <p className="text-[11px] text-[#fff0c2]/70">Preserving genuine folk Garba traditions & devotion</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#170310]/80 border border-[#febf4a]/25 text-center">
                <div className="w-10 h-10 rounded-full bg-[#febf4a]/15 border border-[#febf4a]/40 text-[#febf4a] flex items-center justify-center mx-auto mb-2">
                  <Users className="w-5 h-5 text-[#febf4a]" />
                </div>
                <h4 className="font-display text-sm font-bold text-white mb-1">Community Unity</h4>
                <p className="text-[11px] text-[#fff0c2]/70">Bringing students, faculty & alumni together</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#170310]/80 border border-[#febf4a]/25 text-center">
                <div className="w-10 h-10 rounded-full bg-[#febf4a]/15 border border-[#febf4a]/40 text-[#febf4a] flex items-center justify-center mx-auto mb-2">
                  <Award className="w-5 h-5 text-[#febf4a]" />
                </div>
                <h4 className="font-display text-sm font-bold text-white mb-1">Student Leadership</h4>
                <p className="text-[11px] text-[#fff0c2]/70">Dedicated coordinators driving grand celebrations</p>
              </div>
            </div>

            {/* Link to Meet the Team */}
            <div className="mt-10">
              <a
                href="#team"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-display font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg hover:scale-105 transition-all"
              >
                <span>MEET THE ORGANIZING TEAM</span>
                <Users className="w-4 h-4 text-[#3a0826]" />
              </a>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
