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

      {/* Background Cultural Artwork: In Rhythm & Colour Dancers Arc (Asset 2) */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl pointer-events-none opacity-20 filter drop-shadow-[0_0_30px_rgba(254,191,74,0.3)] select-none">
        <img src="/nuv-assets/Asset 2.svg" alt="" className="w-full h-auto object-contain mx-auto" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="The Experience"
          title="MORE THAN JUST"
          highlight="GARBA"
          subtitle="NUV खेलैया brings together dance, rhythm, culture, and community in one grand celebration."
        />

        {/* 6 Event Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12">
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
                
                {/* Top Row: Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl sm:text-3xl font-bold text-gradient-gold opacity-90">
                    {item.number}
                  </span>
                </div>

                {/* Center Content */}
                <div className="my-auto pb-2">
                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-[#febf4a] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#febf4a]/50 group-hover:text-[#febf4a] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </h3>

                  <p className="text-sm text-[#fff0c2]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
