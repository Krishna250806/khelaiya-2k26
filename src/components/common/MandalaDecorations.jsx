import React from 'react';

export const MandalaPattern = ({ className = "w-64 h-64 text-[#febf4a]", opacity = 0.15 }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    style={{ opacity }}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
    <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
    <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" />
    <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="100" cy="100" r="12" fill="currentColor" opacity="0.3" />
    
    {/* 8-fold Ray Petals */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 100 100)`}>
        <path
          d="M100 20 C110 50 110 70 100 80 C90 70 90 50 100 20 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle cx="100" cy="15" r="3" fill="currentColor" />
        <path
          d="M100 40 C105 60 105 70 100 75 C95 70 95 60 100 40 Z"
          fill="currentColor"
          opacity="0.2"
        />
        <path
          d="M95 90 L100 85 L105 90 L100 95 Z"
          fill="currentColor"
        />
      </g>
    ))}
    {/* 16 small petals */}
    {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
      <g key={`sub-${i}`} transform={`rotate(${angle} 100 100)`}>
        <path
          d="M100 35 C104 55 104 70 100 75 C96 70 96 55 100 35 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.8"
        />
        <circle cx="100" cy="30" r="2" fill="currentColor" />
      </g>
    ))}
  </svg>
);

export const ToranBorder = ({ className = "w-full text-[#febf4a]" }) => (
  <div className={`overflow-hidden h-6 flex items-center ${className}`}>
    <svg className="w-full h-6" preserveAspectRatio="repeat-x" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="toran-repeat" x="0" y="0" width="40" height="24" patternUnits="userSpaceOnUse">
          {/* Hanging Marigold Leaf & Bead */}
          <path d="M0 0 Q20 18 40 0" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M20 18 L20 24" stroke="currentColor" strokeWidth="1.2" />
          <circle cx="20" cy="22" r="2" fill="#febf4a" />
          <circle cx="10" cy="8" r="1.5" fill="#febf4a" opacity="0.7" />
          <circle cx="30" cy="8" r="1.5" fill="#febf4a" opacity="0.7" />
          {/* Little mango leaf drop */}
          <path d="M20 14 C18 10 18 6 20 4 C22 6 22 10 20 14 Z" fill="currentColor" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="24" fill="url(#toran-repeat)" />
    </svg>
  </div>
);

export const DiyaIcon = ({ className = "w-8 h-8 text-[#febf4a]" }) => (
  <svg viewBox="0 0 48 48" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Diya Clay Bowl */}
    <path
      d="M8 26 C8 38 40 38 40 26 C40 25 38 24 35 24 C30 24 28 27 24 27 C20 27 18 24 13 24 C10 24 8 25 8 26 Z"
      fill="url(#diya-bowl-grad)"
      stroke="#febf4a"
      strokeWidth="1.5"
    />
    {/* Diya Base */}
    <path d="M18 36 L15 42 L33 42 L30 36 Z" fill="#5f1040" stroke="#febf4a" strokeWidth="1.2" />
    {/* Oil Flame */}
    <g className="animate-flame">
      {/* Outer Glow Flame */}
      <path
        d="M24 6 C28 14 31 18 28 24 C26 26 22 26 20 24 C17 18 20 14 24 6 Z"
        fill="url(#diya-flame-grad)"
      />
      {/* Inner Pure Core Flame */}
      <path
        d="M24 11 C26 15 27 18 26 22 C25 23 23 23 22 22 C21 18 22 15 24 11 Z"
        fill="#ffffff"
        opacity="0.85"
      />
    </g>
    <defs>
      <linearGradient id="diya-bowl-grad" x1="8" y1="24" x2="40" y2="42" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#801857" />
        <stop offset="50%" stopColor="#5f1040" />
        <stop offset="100%" stopColor="#3a0826" />
      </linearGradient>
      <linearGradient id="diya-flame-grad" x1="24" y1="6" x2="24" y2="26" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#ffffff" />
        <stop offset="25%" stopColor="#febf4a" />
        <stop offset="70%" stopColor="#ff7b00" />
        <stop offset="100%" stopColor="#5f1040" />
      </linearGradient>
    </defs>
  </svg>
);

export const PaisleyFlourish = ({ className = "w-12 h-12 text-[#febf4a]" }) => (
  <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M32 4 C18 4 10 16 10 28 C10 44 24 58 40 58 C52 58 58 48 58 38 C58 26 48 20 40 20 C34 20 30 24 30 28 C30 32 34 34 37 34 C40 34 42 32 42 30 C42 27 40 26 38 26 C36 26 35 27 35 28 C35 29 36 30 37 30"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="40" cy="42" r="3" fill="currentColor" />
    <circle cx="28" cy="38" r="2.5" fill="currentColor" opacity="0.6" />
    <circle cx="22" cy="28" r="2" fill="currentColor" opacity="0.8" />
  </svg>
);
