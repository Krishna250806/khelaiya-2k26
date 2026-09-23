import React from 'react';
import { ArrowUp, MapPin } from 'lucide-react';
import { ToranBorder, DiyaIcon, MandalaPattern } from './common/MandalaDecorations';

export default function Footer({ onRegisterClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#16020f] text-[#fff0c2] pt-16 pb-12 overflow-hidden border-t border-[#febf4a]/30">
      
      {/* Top Toran Arch & Ornate Haveli Border */}
      <div className="absolute top-0 left-0 right-0 opacity-40 pointer-events-none">
        <ToranBorder />
      </div>
      <div className="absolute top-4 left-0 right-0 h-4 sm:h-5 overflow-hidden pointer-events-none opacity-30">
        <img src="/nuv-assets/ornate-band-horizontal.svg" alt="" className="w-full h-full object-fill filter brightness-110" />
      </div>

      {/* Subtle Background Mandala */}
      <div className="absolute bottom-0 right-10 opacity-5 pointer-events-none">
        <MandalaPattern className="w-96 h-96 text-[#febf4a]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#febf4a]/20">
          
          {/* Brand & Identity (2 Cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-full border border-[#febf4a] bg-gradient-to-br from-[#5f1040] to-[#0f4d5b] flex items-center justify-center shadow-gold-glow overflow-hidden p-1.5">
                <img src="/durgamaa.png" alt="Maa Durga" className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_2px_4px_rgba(254,191,74,0.5)]" />
              </div>
              <span className="text-2xl font-bold tracking-wider text-gradient-gold">
                <span className="font-nuv font-bold">NUV </span>
                <span className="font-khelaiya text-3xl">खेलैया</span>
              </span>
            </div>

            <p className="text-sm text-[#fff0c2]/80 leading-relaxed max-w-sm mb-4">
              A grand celebration of culture, rhythm & togetherness. Bringing the entire community together for an unforgettable night of Garba.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#febf4a] font-medium">
              <MapPin className="w-3.5 h-3.5" />
              <span>Jyoti Party Plot • Vadodara, Gujarat</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#febf4a] pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#fff0c2]/80">
              <li><a href="#about" className="hover:text-[#febf4a] transition-colors">About NUV खेलैया</a></li>
              <li><a href="#organizer" className="hover:text-[#febf4a] transition-colors">Organized By</a></li>
              <li><a href="#registration" className="hover:text-[#febf4a] transition-colors">Registration</a></li>
              <li><a href="#sponsors" className="hover:text-[#febf4a] transition-colors">Our Sponsors</a></li>
              <li><a href="#team" className="hover:text-[#febf4a] transition-colors">Organizing Team</a></li>
              <li><a href="#gallery" className="hover:text-[#febf4a] transition-colors">Gallery</a></li>
              <li><a href="#faq" className="hover:text-[#febf4a] transition-colors">Event Details & FAQs</a></li>
            </ul>
          </div>

          {/* Registration CTA block */}
          <div>
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#febf4a] pl-2">
              Join The Circle
            </h4>
            <p className="text-xs text-[#fff0c2]/75 mb-4">
              Be part of NUV खेलैया. Stay connected for registration announcements.
            </p>
            <a
              href="#registration"
              onClick={onRegisterClick}
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#febf4a] to-[#ffd982] text-[#3a0826] font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all inline-block text-center cursor-pointer"
            >
              REGISTER NOW
            </a>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#fff0c2]/70">
          <div>
            <span>© 2026 NUV खेलैया • Vadodara, Gujarat</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#febf4a]/80 font-serif italic">Vadodara, Gujarat</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-[#febf4a]/40 hover:bg-[#5f1040] text-[#febf4a] transition-colors focus:outline-none cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
