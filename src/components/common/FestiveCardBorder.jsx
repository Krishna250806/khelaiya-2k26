import React from 'react';

/**
 * FestiveCardBorder
 * Renders an authentic Gujarati / Royal Haveli ornate border around all 4 sides of a container.
 * Features red and gold festive bands with stars and geometric diamond motifs.
 */
export default function FestiveCardBorder({ className = "opacity-75" }) {
  return (
    <div className={`absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-[inherit] ${className}`}>
      {/* Top Border Band */}
      <div className="absolute top-0 left-0 right-0 h-4 sm:h-5 overflow-hidden">
        <img
          src="/nuv-assets/ornate-band-horizontal.svg"
          alt=""
          className="w-full h-full object-fill filter brightness-110 drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
        />
      </div>

      {/* Bottom Border Band */}
      <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-5 overflow-hidden">
        <img
          src="/nuv-assets/ornate-band-horizontal.svg"
          alt=""
          className="w-full h-full object-fill filter brightness-110 drop-shadow-[0_-2px_6px_rgba(0,0,0,0.4)] scale-y-[-1]"
        />
      </div>

      {/* Left Border Band */}
      <div className="absolute top-0 bottom-0 left-0 w-3 sm:w-3.5 overflow-hidden">
        <img
          src="/nuv-assets/ornate-band-vertical.svg"
          alt=""
          className="w-full h-full object-fill filter brightness-110"
        />
      </div>

      {/* Right Border Band */}
      <div className="absolute top-0 bottom-0 right-0 w-3 sm:w-3.5 overflow-hidden">
        <img
          src="/nuv-assets/ornate-band-vertical.svg"
          alt=""
          className="w-full h-full object-fill filter brightness-110 scale-x-[-1]"
        />
      </div>

      {/* 4 Corner Ornaments */}
      <div className="absolute top-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-[#febf4a]/30 border border-[#febf4a]/60 shadow-[0_0_8px_rgba(254,191,74,0.6)] flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#febf4a]" />
      </div>
      <div className="absolute top-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#febf4a]/30 border border-[#febf4a]/60 shadow-[0_0_8px_rgba(254,191,74,0.6)] flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#febf4a]" />
      </div>
      <div className="absolute bottom-0.5 left-0.5 w-3.5 h-3.5 rounded-full bg-[#febf4a]/30 border border-[#febf4a]/60 shadow-[0_0_8px_rgba(254,191,74,0.6)] flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#febf4a]" />
      </div>
      <div className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-[#febf4a]/30 border border-[#febf4a]/60 shadow-[0_0_8px_rgba(254,191,74,0.6)] flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-[#febf4a]" />
      </div>
    </div>
  );
}
