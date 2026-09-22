import React from 'react';
import { motion } from 'framer-motion';
import { Users, Music, Trophy, Clock, Sparkles, Heart, ShieldCheck, Star } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { MandalaPattern, PaisleyFlourish, DiyaIcon } from './common/MandalaDecorations';
import { FESTIVAL_INFO } from '../data/festivalData';

export default function AboutSection() {
  const statIcons = {
    Users: Users,
    Music: Music,
    Trophy: Trophy,
    Clock: Clock,
  };

  const highlights = [
    {
      title: "Authentic Gujarati Heritage",
      description: "From soulful classical 2-taali and heench to energetic 12-step dodhiya, experience true authentic garba guided by legendary folk vocalists Pt. Devang Vyas.",
      icon: Sparkles,
      tag: "Sacred Culture"
    },
    {
      title: "The Thunder of Live Dhol",
      description: "Feel the vibrations of 15+ live master nasik & gujarati dhol players syncing up with electric synthesizers under state-of-the-art concert sound.",
      icon: Music,
      tag: "Pure Beats"
    },
    {
      title: "Grand 1,000 Diya Maha Aarti",
      description: "A breathtaking moment of spiritual harmony at 9:30 PM, when thousands of students raise illuminated brass lamps in praise of Maa Ambe.",
      icon: DiyaIcon,
      isCustomIcon: true,
      tag: "Divine Ritual"
    },
    {
      title: "Royal Attire & Mega Prizes",
      description: "Dress in your finest traditional Chaniya Choli, Kediyu, and oxidized silver jewelry to compete for ₹1,50,000 in grand trophies and prizes.",
      icon: Trophy,
      tag: "₹1.5L Rewards"
    }
  ];

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#210314] via-[#2f071e] to-[#0e2c34]">
      
      {/* Background Decorative Mandalas */}
      <div className="absolute -top-24 -left-24 pointer-events-none opacity-20">
        <MandalaPattern className="w-96 h-96 text-[#febf4a] animate-spin-slow" />
      </div>
      <div className="absolute -bottom-24 -right-24 pointer-events-none opacity-20">
        <MandalaPattern className="w-96 h-96 text-[#febf4a] animate-spin-reverse" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Our Sacred Legacy"
          title="The Spirit Of"
          highlight="Khelaiya 2026"
          subtitle="More than an event — an exhilarating cultural celebration where 5,000+ collegiate dancers unite under the autumn night sky."
        />

        {/* Story Grid: Narrative + Visual Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#5f1040]/70 via-[#3a0826]/80 to-[#0f4d5b]/60 border border-[#febf4a]/30 shadow-festive-card backdrop-blur-xl">
              
              {/* Corner Paisley Decoration */}
              <div className="absolute top-4 right-4 opacity-40">
                <PaisleyFlourish className="w-10 h-10 text-[#febf4a]" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-gradient-gold font-bold mb-4">
                Where Ancient Rhythm Meets Youthful Euphoria
              </h3>

              <p className="text-base sm:text-lg text-[#fff0c2]/90 leading-relaxed">
                Founded over a decade ago by passionate university students, <strong className="text-[#febf4a]">Khelaiya</strong> has grown into Western India’s most celebrated collegiate Navratri festival. It is the sacred intersection of pure folk tradition and the electrifying zest of youth.
              </p>

              <p className="text-base text-[#fff0c2]/80 leading-relaxed">
                For one monumental night on <strong className="text-white">October 24, 2026</strong>, our sprawling university grounds transform into an ethereal royal courtyard. The rhythmic clack of polished dandiyas, the swirl of Kutchi mirror-work chaniyas, and the soul-stirring hymns of Maa Durga coalesce into an unrepeatable evening of devotion and celebration.
              </p>

              {/* Core Values / Features list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#febf4a]/20">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/50 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-[#febf4a]" />
                  </div>
                  <span className="text-sm text-[#fff0c2]/90 font-medium">100% Student Organized</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/50 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#febf4a]" />
                  </div>
                  <span className="text-sm text-[#fff0c2]/90 font-medium">Safe & Monitored Campus</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/50 flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-[#febf4a]" />
                  </div>
                  <span className="text-sm text-[#fff0c2]/90 font-medium">Authentic Folk Orchestra</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/50 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-4 h-4 text-[#febf4a]" />
                  </div>
                  <span className="text-sm text-[#fff0c2]/90 font-medium">Royal Decor & Lighting</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Visual Showcase Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Frame with Gold Border */}
            <div className="relative rounded-3xl p-2 bg-gradient-to-br from-[#febf4a]/60 via-[#5f1040] to-[#0f4d5b] shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-[#3a0826]">
                <img
                  src="https://images.unsplash.com/photo-1603228254119-e6a4d095dc59?auto=format&fit=crop&w=1000&q=80"
                  alt="Khelaiya Garba Dancers in concentric circles"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#250417] via-transparent to-transparent opacity-80" />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#5f1040]/80 backdrop-blur-md border border-[#febf4a]/40 text-center">
                  <span className="font-display text-lg text-gradient-gold font-bold block">
                    The 2026 Grand Edition
                  </span>
                  <span className="text-xs text-[#fff0c2]/80">
                    Grand Open Grounds • Ahmedabad, Gujarat
                  </span>
                </div>
              </div>
            </div>

            {/* Accent Floating Diya */}
            <div className="absolute -bottom-6 -left-6 p-3 rounded-2xl bg-[#3a0826] border border-[#febf4a]/60 shadow-gold-glow flex items-center gap-3">
              <DiyaIcon className="w-7 h-7 text-[#febf4a]" />
              <div>
                <span className="text-[11px] block uppercase tracking-wider text-[#febf4a] font-bold">1,000 Diyas</span>
                <span className="text-[10px] text-[#fff0c2]/70">Simultaneous Aarti</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Highlights 4-Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
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
                      {item.isCustomIcon ? (
                        <item.icon className="w-6 h-6 text-[#febf4a]" />
                      ) : (
                        <item.icon className="w-6 h-6 text-[#febf4a]" />
                      )}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#febf4a] px-2.5 py-1 rounded-full bg-[#5f1040]/70 border border-[#febf4a]/30">
                    {item.tag}
                  </span>
                </div>

                <h4 className="font-display text-lg font-bold text-white mb-2 group-hover:text-[#febf4a] transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-[#fff0c2]/75 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="w-8 h-[2px] mt-6 bg-[#febf4a]/40 group-hover:w-full group-hover:bg-[#febf4a] transition-all duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Live Statistics Counter Bar */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#5f1040]/90 via-[#27153a]/90 to-[#0f4d5b]/90 border border-[#febf4a]/40 shadow-festive-card backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#febf4a]/20">
            {FESTIVAL_INFO.stats.map((stat, i) => {
              const IconComp = statIcons[stat.icon] || Sparkles;
              return (
                <div key={stat.label} className={`flex flex-col items-center justify-center ${i > 0 ? 'pt-6 md:pt-0' : ''}`}>
                  <IconComp className="w-6 h-6 text-[#febf4a] mb-2" />
                  <span className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gradient-gold tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-1 text-xs sm:text-sm font-semibold text-[#fff0c2]/80 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
