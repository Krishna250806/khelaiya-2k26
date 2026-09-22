import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { HIGHLIGHTS_DATA } from '../data/festivalData';

export default function EventHighlights() {
  return (
    <section id="event" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0e2c34] via-[#24061a] to-[#210314]">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-radial from-[#febf4a]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-radial from-[#5f1040]/25 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="The Experience"
          title="MORE THAN JUST"
          highlight="GARBA"
          subtitle="NUV Khelaiya brings together dance, rhythm, culture, and community in one unified campus celebration."
        />

        {/* 6 Event Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HIGHLIGHTS_DATA.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[#febf4a]/35 via-[#5f1040]/40 to-[#0f4d5b]/40 hover:from-[#febf4a] hover:to-[#5f1040] hover:shadow-gold-glow transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              <div className="h-full rounded-[23px] bg-gradient-to-b from-[#3a0826]/90 via-[#220417]/95 to-[#0b262d]/90 p-7 sm:p-8 flex flex-col justify-between backdrop-blur-xl relative">
                
                {/* Top Row: Number & Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-gradient-gold opacity-90">
                    {item.number}
                  </span>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#febf4a] px-3 py-1 rounded-full bg-[#5f1040]/80 border border-[#febf4a]/35 shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Center Content */}
                <div className="my-auto">
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-[#febf4a] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#febf4a]/50 group-hover:text-[#febf4a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </h3>

                  <p className="text-sm text-[#fff0c2]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Decorative Bottom Bar */}
                <div className="mt-8 pt-4 border-t border-[#febf4a]/15 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-[#febf4a]/70 group-hover:text-[#febf4a] transition-colors">
                    NUV Khelaiya Experience
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#febf4a] opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
