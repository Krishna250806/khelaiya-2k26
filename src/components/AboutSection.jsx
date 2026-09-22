import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Users, Music, Heart } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { MandalaPattern, PaisleyFlourish, DiyaIcon } from './common/MandalaDecorations';
import { ABOUT_PILLARS } from '../data/festivalData';

export default function AboutSection() {
  const pillarIcons = [Sparkles, Music, DiyaIcon, Users];

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
          badge="University Cultural Heritage"
          title="ABOUT"
          highlight="NUV KHELAIYA"
          subtitle="Navrachana University’s signature celebration of tradition, music, movement, and the spirit of togetherness."
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

              <h3 className="font-display text-2xl sm:text-3xl text-gradient-gold font-bold mb-4">
                Culture, Rhythm & Student Togetherness
              </h3>

              <p className="text-base sm:text-lg text-[#fff0c2]/90 leading-relaxed">
                <strong className="text-[#febf4a]">NUV Khelaiya</strong> is Navrachana University’s premier annual Garba and Navratri cultural celebration. Organized with passion by university student leaders and cultural teams, it brings our campus to life in an explosion of rhythm, vibrant colors, and devotional joy.
              </p>

              <p className="text-base text-[#fff0c2]/80 leading-relaxed">
                From concentric Garba circles swirling under the night lights to the synchronized beats of Dandiya sticks, NUV Khelaiya represents the very heart of campus culture — celebrating Gujarat's heritage while fostering enduring bonds of friendship and community.
              </p>

              {/* Core Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#febf4a]/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/50 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-[#febf4a]" />
                  </div>
                  <span className="text-sm text-[#fff0c2]/90 font-medium">Student-Led Spirit</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/50 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-[#febf4a]" />
                  </div>
                  <span className="text-sm text-[#fff0c2]/90 font-medium">Traditional Attire & Folk Art</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/50 flex items-center justify-center flex-shrink-0">
                    <Music className="w-4 h-4 text-[#febf4a]" />
                  </div>
                  <span className="text-sm text-[#fff0c2]/90 font-medium">Authentic Beats & Dance</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/50 flex items-center justify-center flex-shrink-0">
                    <Users className="w-4 h-4 text-[#febf4a]" />
                  </div>
                  <span className="text-sm text-[#fff0c2]/90 font-medium">Navrachana University Pride</span>
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
            <div className="relative rounded-3xl p-2 bg-gradient-to-br from-[#febf4a]/60 via-[#5f1040] to-[#0f4d5b] shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#3a0826]">
                <img
                  src="/gallery/garba 1.jpeg"
                  alt="NUV Khelaiya Garba Dancers"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#250417] via-transparent to-transparent opacity-80" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#5f1040]/80 backdrop-blur-md border border-[#febf4a]/40 text-center">
                  <span className="font-display text-lg text-gradient-gold font-bold block">
                    NUV Khelaiya
                  </span>
                  <span className="text-xs text-[#fff0c2]/80">
                    Navrachana University • Vadodara, Gujarat
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Corner Asset */}
            <div className="absolute -bottom-6 -left-6 w-20 h-20 opacity-70 pointer-events-none hidden sm:block">
              <img src="/nuv-assets/Asset 3.svg" alt="" className="w-full h-full" />
            </div>
          </motion.div>

        </div>

        {/* 4 Highlight Cards: CULTURE, MUSIC, GARBA, COMMUNITY */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ABOUT_PILLARS.map((pillar, idx) => {
            const IconComponent = pillarIcons[idx];

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group p-6 rounded-2xl bg-gradient-to-b from-[#5f1040]/50 to-[#0f4d5b]/40 border border-[#febf4a]/25 hover:border-[#febf4a]/70 hover:shadow-gold-glow transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#febf4a] to-[#c48b1a] p-[1px]">
                      <div className="w-full h-full rounded-xl bg-[#3a0826] flex items-center justify-center group-hover:bg-[#5f1040] transition-colors">
                        <IconComponent className="w-6 h-6 text-[#febf4a]" />
                      </div>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#febf4a] px-2.5 py-1 rounded-full bg-[#5f1040]/70 border border-[#febf4a]/30">
                      {pillar.subtitle}
                    </span>
                  </div>

                  <h4 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#febf4a] transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-[#fff0c2]/75 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="w-8 h-[2px] mt-6 bg-[#febf4a]/40 group-hover:w-full group-hover:bg-[#febf4a] transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
