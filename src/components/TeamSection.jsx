import React from 'react';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { LEADERSHIP_TEAM, TEAM_HEADS } from '../data/festivalData';
import { DiyaIcon } from './common/MandalaDecorations';

// Member Card Component with support for compact sizing
function MemberCard({ member, highlightBadge, isCompact = false }) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2);

  return (
    <div className={`group relative rounded-2xl p-[1px] bg-gradient-to-b from-[#febf4a]/35 via-[#5f1040]/40 to-[#0f4d5b]/30 hover:from-[#febf4a] hover:to-[#5f1040] hover:shadow-gold-glow transition-all duration-300 flex flex-col overflow-hidden ${
      isCompact ? 'w-[calc(50%-8px)] sm:w-[170px] md:w-[185px] max-w-[190px] flex-shrink-0' : 'w-full max-w-[320px] mx-auto'
    }`}>
      <div className={`h-full rounded-[15px] bg-gradient-to-b from-[#3a0826] to-[#180312] flex flex-col justify-between ${
        isCompact ? 'p-2 sm:p-3' : 'p-4'
      }`}>
        
        {/* Photo Container */}
        <div className={`relative rounded-xl overflow-hidden bg-[#230417] border border-[#febf4a]/25 flex items-center justify-center ${
          isCompact ? 'aspect-[4/5] mb-2.5' : 'aspect-[3/4] mb-4'
        }`}>
          {member.image ? (
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
            />
          ) : (
            /* Tasteful Monogram Placeholder */
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#5f1040]/80 via-[#27153a]/90 to-[#0f4d5b]/80 p-3 text-center">
              <div className={`${isCompact ? 'w-10 h-10' : 'w-14 h-14'} rounded-full border border-[#febf4a]/50 bg-[#3a0826] flex items-center justify-center mb-1.5 shadow-inner`}>
                <span className={`font-display ${isCompact ? 'text-base' : 'text-xl'} font-bold text-gradient-gold`}>
                  {initials}
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-wider text-[#febf4a]/80 font-medium">
                Student Leader
              </span>
            </div>
          )}

          {/* Optional Role Badge */}
          {highlightBadge && (
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#5f1040]/90 border border-[#febf4a]/40 text-[9px] font-bold uppercase tracking-wider text-[#febf4a] backdrop-blur-md">
              {highlightBadge}
            </div>
          )}
        </div>

        {/* Member Name & Official Designation */}
        <div className="text-center pb-0.5">
          <h4 className={`font-display font-bold text-white group-hover:text-[#febf4a] transition-colors leading-tight ${
            isCompact ? 'text-xs sm:text-sm line-clamp-1' : 'text-base sm:text-lg'
          }`}>
            {member.name}
          </h4>
          <p className={`font-semibold text-[#febf4a] uppercase tracking-wider ${
            isCompact ? 'text-[9px] sm:text-[10px] mt-0.5 line-clamp-1' : 'text-[11px] mt-1'
          }`}>
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
          subtitle="Meet the dedicated student leaders orchestrating the cultural celebration of NUV खेलैया."
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
        {/* 2. TEAM HEADS SECTION (Lower Sized Cards)               */}
        {/* ======================================================= */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#febf4a]/60" />
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-wider uppercase text-center flex items-center gap-2">
              <span>TEAM HEADS</span>
            </h3>
            <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#febf4a]/60" />
          </div>

          <div className="space-y-8 max-w-5xl mx-auto">
            {TEAM_HEADS.map((teamGroup) => (
              <div key={teamGroup.teamName} className="p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#3a0826]/40 via-[#210314]/60 to-[#0c2e36]/30 border border-[#febf4a]/20 backdrop-blur-sm">
                
                {/* Team Category Title Header */}
                <div className="flex items-center gap-3 mb-4 pb-2.5 border-b border-[#febf4a]/15">
                  <div className="w-2 h-2 rounded-full bg-[#febf4a]" />
                  <h4 className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
                    {teamGroup.teamName}
                  </h4>
                </div>

                {/* Team Members Flex/Grid with Compact Lower-Sized Cards */}
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
                  {teamGroup.members.map((member, idx) => (
                    <MemberCard 
                      key={`${teamGroup.teamName}-${member.name}-${idx}`} 
                      member={member} 
                      isCompact={true}
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
