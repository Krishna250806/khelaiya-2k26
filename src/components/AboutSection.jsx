import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Music, Heart } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { MandalaPattern, PaisleyFlourish } from './common/MandalaDecorations';

export default function AboutSection() {

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#210314] via-[#2f071e] to-[#0e2c34]">
      
      {/* Background Decorative Mandalas */}
      <div className="absolute -top-24 -left-24 pointer-events-none opacity-15">
        <MandalaPattern className="w-96 h-96 text-[#febf4a] animate-spin-slow" />
      </div>
      <div className="absolute -bottom-24 -right-24 pointer-events-none opacity-15">
        <MandalaPattern className="w-96 h-96 text-[#febf4a] animate-spin-reverse" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Navratri Mahotsav"
          title="ABOUT"
          highlight="NUV खेलैया"
          subtitle="A grand celebration of tradition, music, movement, and the sacred spirit of togetherness."
        />

        {/* Narrative + Visual Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#5f1040]/70 via-[#3a0826]/80 to-[#0f4d5b]/60 border border-[#febf4a]/30 shadow-festive-card backdrop-blur-xl">
              
              <div className="absolute top-4 right-4 opacity-40">
                <PaisleyFlourish className="w-10 h-10 text-[#febf4a]" />
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 mb-5">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#febf4a]/25 via-[#5f1040]/80 to-[#0f4d5b]/80 border border-[#febf4a]/50 p-2 flex-shrink-0 shadow-gold-glow flex items-center justify-center">
                  <img src="/nuv-assets/asset4_durga.svg" alt="Maa Amba Navratri Deity" className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_2px_8px_rgba(254,191,74,0.5)]" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-bold text-[#febf4a] block mb-1">
                    Sacred Navratri Heritage
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl text-gradient-gold font-bold">
                    Tradition, Devotion & Rhythm
                  </h3>
                </div>
              </div>

              <p className="text-base sm:text-lg text-[#fff0c2]/95 leading-relaxed font-normal">
                Rooted in divine devotion to <strong className="text-[#febf4a]">Maa Ambe</strong>, <span className="font-nuv font-bold text-[#febf4a]">NUV </span><span className="font-khelaiya text-[#febf4a] text-xl">खेलैया</span> brings Vadodara together in a grand celebration of heritage, folk music, and the sacred swirl of Garba.
              </p>

              <p className="text-sm sm:text-base text-[#fff0c2]/85 leading-relaxed font-normal">
                Under radiant festive lights, synchronized Dandiya beats and authentic dhol rhythms unite thousands of hearts in cultural joy.
              </p>

              {/* Core Values - Traditional, Short & Clean */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#febf4a]/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/50 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-[#febf4a]" />
                  </div>
                  <span className="text-sm text-[#fff0c2]/90 font-medium">Maa Ambe’s Blessings</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/50 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-[#febf4a]" />
                  </div>
                  <span className="text-sm text-[#fff0c2]/90 font-medium">Sacred Folk Traditions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/50 flex items-center justify-center flex-shrink-0">
                    <Music className="w-4 h-4 text-[#febf4a]" />
                  </div>
                  <span className="text-sm text-[#fff0c2]/90 font-medium">Authentic Dhol & Raas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/50 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-[#febf4a]" />
                  </div>
                  <span className="text-sm text-[#fff0c2]/90 font-medium">United in Celebration</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Visual Showcase Card with Actual NUV Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Visual Showcase Card with Royal Haveli Frame (Asset 8) */}
            <div className="relative rounded-2xl overflow-hidden aspect-[481/738] max-w-sm sm:max-w-md mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.85)] border-2 border-[#febf4a]/60 bg-[#250417]">
              {/* Photo of Garba Dancers - Natural un-stretched proportions */}
              <img
                src="/gallery/garba 1.jpeg"
                alt="NUV खेलैया Garba Dancers"
                className="w-full h-full object-cover object-center filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#250417]/80 via-transparent to-transparent pointer-events-none" />

              {/* Royal Haveli Gateway Frame Overlay (Asset 8) - Fits edge-to-edge flush with card border */}
              <img
                src="/nuv-assets/Asset 8-frame.png"
                alt="Haveli Gateway Frame"
                className="absolute inset-0 w-full h-full object-fill pointer-events-none z-10 filter drop-shadow-[0_4px_15px_rgba(0,0,0,0.6)]"
              />

              {/* Floating Caption Badge */}
              <div className="absolute bottom-4 sm:bottom-5 left-5 right-5 sm:left-7 sm:right-7 p-3 rounded-2xl bg-[#3a0826]/90 backdrop-blur-md border border-[#febf4a]/40 text-center z-20 shadow-lg">
                <span className="text-base sm:text-lg text-gradient-gold font-bold block">
                  <span className="font-nuv font-bold">NUV </span>
                  <span className="font-khelaiya text-lg sm:text-xl">खेलैया</span>
                </span>
                <span className="text-[11px] text-[#fff0c2]/80 font-medium">
                  Jyoti Party Plot • Vadodara, Gujarat
                </span>
              </div>
            </div>


          </motion.div>

        </div>

      </div>
    </section>
  );
}
