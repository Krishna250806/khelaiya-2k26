import React from 'react';
import { DiyaIcon } from './MandalaDecorations';

export default function SectionHeading({ 
  badge, 
  title, 
  highlight, 
  subtitle, 
  align = "center" 
}) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center' : 'text-left'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 border border-[#febf4a]/40 bg-[#5f1040]/60 text-[#febf4a] backdrop-blur-md shadow-sm`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#febf4a] animate-ping" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight leading-tight text-white">
        {title}{" "}
        {highlight && (
          <span className="text-gradient-gold drop-shadow-sm inline-block">
            {highlight}
          </span>
        )}
      </h2>

      {/* Decorative Ornate Divider */}
      <div className={`flex items-center gap-3 my-4 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#febf4a]/70 to-[#febf4a]" />
        <DiyaIcon className="w-6 h-6 text-[#febf4a] flex-shrink-0" />
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#febf4a]/70 to-[#febf4a]" />
      </div>

      {subtitle && (
        <p className={`text-[#fff0c2]/80 text-base sm:text-lg max-w-2xl font-normal leading-relaxed ${isCenter ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
