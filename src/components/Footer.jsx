import React from 'react';
import { Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { InstagramIcon, YouTubeIcon, TwitterIcon } from './common/SocialIcons';
import { MandalaPattern, ToranBorder, DiyaIcon } from './common/MandalaDecorations';
import { FESTIVAL_INFO } from '../data/festivalData';

export default function Footer({ onOpenPassModal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#16020f] text-[#fff0c2] pt-16 pb-12 overflow-hidden border-t border-[#febf4a]/30">
      
      {/* Top Toran Arch */}
      <div className="absolute top-0 left-0 right-0 opacity-40 pointer-events-none">
        <ToranBorder />
      </div>

      {/* Subtle Background Mandala */}
      <div className="absolute bottom-0 right-10 opacity-5 pointer-events-none">
        <MandalaPattern className="w-96 h-96 text-[#febf4a]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#febf4a]/20">
          
          {/* Brand & Mission (2 Cols) */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border border-[#febf4a] bg-gradient-to-br from-[#5f1040] to-[#0f4d5b] flex items-center justify-center shadow-gold-glow">
                <DiyaIcon className="w-6 h-6 text-[#febf4a]" />
              </div>
              <span className="font-display text-2xl font-bold tracking-wider text-gradient-gold">
                {FESTIVAL_INFO.name}
              </span>
            </div>

            <p className="text-sm text-[#fff0c2]/75 leading-relaxed max-w-sm mb-6">
              The premier inter-collegiate Ras-Garba Mahotsav. Preserving centuries of sacred Gujarati cultural art while energizing modern university youth through rhythm, devotion, and community.
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#5f1040]/70 border border-[#febf4a]/40 text-[#febf4a] hover:bg-[#febf4a] hover:text-[#3a0826] transition-all flex items-center justify-center shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#5f1040]/70 border border-[#febf4a]/40 text-[#febf4a] hover:bg-[#febf4a] hover:text-[#3a0826] transition-all flex items-center justify-center shadow-sm"
                aria-label="YouTube"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#5f1040]/70 border border-[#febf4a]/40 text-[#febf4a] hover:bg-[#febf4a] hover:text-[#3a0826] transition-all flex items-center justify-center shadow-sm"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#febf4a] pl-2">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#fff0c2]/80">
              <li><a href="#about" className="hover:text-[#febf4a] transition-colors">About Khelaiya</a></li>
              <li><a href="#passes" className="hover:text-[#febf4a] transition-colors">Pass Tiers & Pricing</a></li>
              <li><a href="#committee" className="hover:text-[#febf4a] transition-colors">Organizing Committee</a></li>
              <li><a href="#sponsors" className="hover:text-[#febf4a] transition-colors">Brand Sponsors</a></li>
              <li><a href="#gallery" className="hover:text-[#febf4a] transition-colors">Fest Gallery</a></li>
              <li><a href="#schedule" className="hover:text-[#febf4a] transition-colors">Event Timeline & FAQs</a></li>
            </ul>
          </div>

          {/* Contact & Venue Details */}
          <div>
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#febf4a] pl-2">
              Venue & Timing
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-[#fff0c2]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#febf4a] flex-shrink-0 mt-0.5" />
                <span>Grand Open Grounds, University Campus, Gate 4, Ahmedabad</span>
              </li>
              <li className="flex items-center gap-2.5">
                <DiyaIcon className="w-4 h-4 text-[#febf4a] flex-shrink-0" />
                <span>Saturday, October 24, 2026 • 6 PM Onwards</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#febf4a] flex-shrink-0" />
                <a href="mailto:khelaiya@university.edu" className="hover:text-[#febf4a]">khelaiya@university.edu</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#febf4a] flex-shrink-0" />
                <span>+91 79 2630 1122</span>
              </li>
            </ul>
          </div>

          {/* Student Helpdesk & Pass CTA */}
          <div>
            <h4 className="font-display text-base font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-[#febf4a] pl-2">
              Registration
            </h4>
            <p className="text-xs text-[#fff0c2]/75 mb-4">
              Passes are digital credentials. Physical verification at gate is mandatory.
            </p>
            <button
              onClick={onOpenPassModal}
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#febf4a] to-[#ffd982] text-[#3a0826] font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all"
            >
              Book Passes Online
            </button>
          </div>

        </div>

        {/* Bottom Copyright Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#fff0c2]/60">
          <div className="flex items-center gap-1 text-center sm:text-left">
            <span>© 2026 Khelaiya Cultural Council. Presented with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current inline mx-0.5" />
            <span>by the Student Affairs Committee.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#febf4a] font-serif italic">જય અંબે • Jai Mataji</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full border border-[#febf4a]/40 hover:bg-[#5f1040] text-[#febf4a] transition-colors focus:outline-none"
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
