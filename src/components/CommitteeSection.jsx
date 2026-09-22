import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Award } from 'lucide-react';
import { LinkedInIcon, InstagramIcon } from './common/SocialIcons';
import SectionHeading from './common/SectionHeading';
import { COMMITTEE_MEMBERS } from '../data/festivalData';
import { DiyaIcon } from './common/MandalaDecorations';

export default function CommitteeSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Core Committee", "Heads", "Volunteers"];

  const filteredMembers = activeCategory === "All"
    ? COMMITTEE_MEMBERS
    : COMMITTEE_MEMBERS.filter(m => m.category === activeCategory);

  return (
    <section id="committee" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#210314] via-[#330720] to-[#0c2e36]">
      
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Behind The Mahotsav"
          title="The Organizing"
          highlight="Committee"
          subtitle="Meet the passionate student council and dedicated leaders orchestrating the spirit of Khelaiya 2026."
        />

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#febf4a] to-[#ffd982] text-[#3a0826] shadow-gold-glow font-bold'
                  : 'bg-[#5f1040]/40 text-[#fff0c2]/80 hover:text-[#febf4a] hover:bg-[#5f1040] border border-[#febf4a]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Committee Members Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-b from-[#febf4a]/40 via-[#5f1040]/50 to-[#0f4d5b]/40 hover:from-[#febf4a] hover:to-[#5f1040] hover:shadow-gold-glow transition-all duration-500 flex flex-col overflow-hidden"
              >
                <div className="h-full rounded-[23px] bg-gradient-to-b from-[#3a0826] to-[#1a0210] p-5 flex flex-col justify-between">
                  
                  {/* Member Photo Container */}
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] mb-5 bg-[#250417] border border-[#febf4a]/30">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                      loading="lazy"
                    />

                    {/* Gradient Vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#250417] via-transparent to-transparent opacity-70" />

                    {/* Category Tag Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#5f1040]/85 border border-[#febf4a]/40 text-[10px] font-bold uppercase tracking-wider text-[#febf4a] backdrop-blur-md">
                      {member.category}
                    </div>

                    {/* Social links overlay on hover */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={member.linkedin}
                        className="w-8 h-8 rounded-full bg-[#5f1040]/90 border border-[#febf4a] text-[#febf4a] flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedInIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={member.instagram}
                        className="w-8 h-8 rounded-full bg-[#0f4d5b]/90 border border-[#febf4a] text-[#febf4a] flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                        aria-label={`${member.name} Instagram`}
                      >
                        <InstagramIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Member Details */}
                  <div className="flex flex-col flex-grow justify-between">
                    <div>
                      <h4 className="font-display text-xl font-bold text-white group-hover:text-[#febf4a] transition-colors">
                        {member.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#febf4a] uppercase tracking-wider mt-0.5">
                        {member.role}
                      </p>
                      <p className="text-[11px] text-[#fff0c2]/60 mt-1">
                        {member.department}
                      </p>
                    </div>

                    {/* Festive Quote */}
                    <div className="mt-4 pt-3 border-t border-[#febf4a]/15">
                      <p className="text-xs text-[#fff0c2]/80 italic line-clamp-2">
                        "{member.quote}"
                      </p>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Join Volunteer Team CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 px-6 rounded-2xl bg-[#5f1040]/30 border border-[#febf4a]/30 backdrop-blur-md">
            <span className="text-sm text-[#fff0c2]/90">
              Passionate about stage management, decor, or security?
            </span>
            <a
              href="mailto:committee@khelaiyacollege.edu"
              className="px-4 py-1.5 rounded-full bg-[#0f4d5b] hover:bg-[#186d80] text-[#febf4a] text-xs font-bold uppercase tracking-wider border border-[#febf4a]/40 transition-colors"
            >
              Join As Volunteer
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
