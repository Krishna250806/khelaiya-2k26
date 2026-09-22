import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { LEADERSHIP_TEAM, TEAM_HEADS } from '../data/festivalData';
import { DiyaIcon } from './common/MandalaDecorations';

// Individual Member Card Component
function MemberCard({ member, highlightBadge }) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2);

  return (
    <div className="group relative rounded-2xl p-[1px] bg-gradient-to-b from-[#febf4a]/35 via-[#5f1040]/40 to-[#0f4d5b]/30 hover:from-[#febf4a] hover:to-[#5f1040] hover:shadow-gold-glow transition-all duration-300 flex flex-col overflow-hidden">
      <div className="h-full rounded-[15px] bg-gradient-to-b from-[#3a0826] to-[#180312] p-4 flex flex-col justify-between">
        
        {/* Photo Container */}
        <div className="relative rounded-xl overflow-hidden aspect-[3/4] mb-4 bg-[#230417] border border-[#febf4a]/25 flex items-center justify-center">
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
            />
          ) : (
            /* Tasteful Monogram Placeholder */
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#5f1040]/80 via-[#27153a]/90 to-[#0f4d5b]/80 p-4 text-center">
              <div className="w-14 h-14 rounded-full border border-[#febf4a]/50 bg-[#3a0826] flex items-center justify-center mb-2 shadow-inner">
                <span className="font-display text-xl font-bold text-gradient-gold">
                  {initials}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-[#febf4a]/80 font-medium">
                NUV Student Leader
              </span>
            </div>
          )}

          {/* Optional Role Badge */}
          {highlightBadge && (
            <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-[#5f1040]/90 border border-[#febf4a]/40 text-[9px] font-bold uppercase tracking-wider text-[#febf4a] backdrop-blur-md">
              {highlightBadge}
            </div>
          )}
        </div>

        {/* Member Name & Official Designation */}
        <div className="text-center pb-1">
          <h4 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-[#febf4a] transition-colors leading-snug">
            {member.name}
          </h4>
          <p className="text-[11px] font-semibold text-[#febf4a] uppercase tracking-wider mt-1">
            {member.designation}
          </p>
        </div>

      </div>
    </div>
  );
}

export default function TeamSection() {
  return (
    <section id="team" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#210314] via-[#30061e] to-[#0c2e36]">
      
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Organizing Committee"
          title="THE"
          highlight="TEAM"
          subtitle="Meet the dedicated student leaders orchestrating the cultural celebration of NUV Khelaiya."
        />

        {/* ======================================================= */}
        {/* 1. LEADERSHIP SECTION                                    */}
        {/* ======================================================= */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#febf4a]/60" />
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wider uppercase text-center flex items-center gap-2">
              <span>LEADERSHIP</span>
            </h3>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#febf4a]/60" />
          </div>

          {/* Presidents */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#febf4a] px-3.5 py-1 rounded-full bg-[#5f1040]/70 border border-[#febf4a]/30">
                Presidents
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {LEADERSHIP_TEAM.presidents.map((member) => (
                <MemberCard key={member.name} member={member} highlightBadge="President" />
              ))}
            </div>
          </div>

          {/* Vice-Presidents & Treasurers Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            
            {/* Vice-Presidents */}
            <div>
              <div className="text-center mb-6">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#febf4a] px-3.5 py-1 rounded-full bg-[#5f1040]/70 border border-[#febf4a]/30">
                  Vice-Presidents
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {LEADERSHIP_TEAM.vicePresidents.map((member) => (
                  <MemberCard key={member.name} member={member} highlightBadge="Vice-President" />
                ))}
              </div>
            </div>

            {/* Treasurers */}
            <div>
              <div className="text-center mb-6">
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#febf4a] px-3.5 py-1 rounded-full bg-[#5f1040]/70 border border-[#febf4a]/30">
                  Treasurers
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {LEADERSHIP_TEAM.treasurers.map((member) => (
                  <MemberCard key={member.name} member={member} highlightBadge="Treasurer" />
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================= */}
        {/* 2. TEAM HEADS SECTION                                   */}
        {/* ======================================================= */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#febf4a]/60" />
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wider uppercase text-center flex items-center gap-2">
              <span>TEAM HEADS</span>
            </h3>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#febf4a]/60" />
          </div>

          <div className="space-y-14">
            {TEAM_HEADS.map((teamGroup) => (
              <div key={teamGroup.teamName} className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#3a0826]/40 via-[#210314]/60 to-[#0c2e36]/30 border border-[#febf4a]/20 backdrop-blur-sm">
                
                {/* Team Category Title Header */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-[#febf4a]/15">
                  <div className="w-2 h-2 rounded-full bg-[#febf4a]" />
                  <h4 className="font-display text-lg sm:text-xl font-bold text-white tracking-wide">
                    {teamGroup.teamName}
                  </h4>
                  <span className="text-xs text-[#febf4a]/70 font-mono ml-auto">
                    {teamGroup.members.length} {teamGroup.members.length === 1 ? 'Head' : 'Heads'}
                  </span>
                </div>

                {/* Team Members Grid */}
                <div className={`grid gap-5 ${
                  teamGroup.members.length === 3 
                    ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                    : teamGroup.members.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
                    : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {teamGroup.members.map((member, idx) => (
                    <MemberCard 
                      key={`${teamGroup.teamName}-${member.name}-${idx}`} 
                      member={member} 
                    />
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
