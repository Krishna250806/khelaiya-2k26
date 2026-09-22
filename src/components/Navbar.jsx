import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Ticket, Sparkles, Volume2, VolumeX, DoorOpen } from 'lucide-react';
import { MandalaPattern } from './common/MandalaDecorations';

export default function Navbar({ onOpenPassModal, onReopenDoors, isAudioPlaying, onToggleAudio }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Passes", href: "#passes" },
    { name: "Committee", href: "#committee" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Gallery", href: "#gallery" },
    { name: "Schedule", href: "#schedule" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-gradient-to-r from-[#2a061b]/95 via-[#5f1040]/90 to-[#0b333c]/95 backdrop-blur-xl border-b border-[#febf4a]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-gradient-to-b from-[#250417]/80 via-[#250417]/40 to-transparent border-b border-[#febf4a]/15 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Emblem */}
          <a 
            href="#" 
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Khelaiya 2026 Home"
          >
            <div className="relative w-10 h-10 rounded-full border border-[#febf4a]/60 bg-gradient-to-br from-[#5f1040] to-[#0f4d5b] flex items-center justify-center shadow-gold-glow group-hover:scale-105 transition-transform">
              <MandalaPattern className="w-8 h-8 text-[#febf4a] animate-spin-slow" opacity={0.8} />
              <div className="absolute w-2 h-2 rounded-full bg-[#febf4a] shadow-[0_0_8px_#febf4a]" />
            </div>
            
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-bold tracking-wider text-gradient-gold">
                KHELAIYA
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#fff0c2]/70 font-semibold -mt-1">
                Fest 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-sm font-medium text-[#fff0c2]/85 hover:text-[#febf4a] hover:bg-[#5f1040]/40 transition-all duration-200 border border-transparent hover:border-[#febf4a]/30"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={onToggleAudio}
              className="p-2 rounded-full border border-[#febf4a]/30 bg-[#5f1040]/60 hover:bg-[#5f1040] text-[#febf4a] hover:border-[#febf4a] transition-colors focus:outline-none"
              title={isAudioPlaying ? "Mute festive ambient sound" : "Play festive ambient sound"}
              aria-label="Toggle festive ambient sound"
            >
              {isAudioPlaying ? (
                <div className="relative">
                  <Volume2 className="w-4 h-4 text-[#febf4a]" />
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#febf4a] animate-ping" />
                </div>
              ) : (
                <VolumeX className="w-4 h-4 text-[#febf4a]/70" />
              )}
            </button>

            {/* Replay Gate Animation */}
            {onReopenDoors && (
              <button
                onClick={onReopenDoors}
                className="p-2 rounded-full border border-[#febf4a]/30 bg-[#0f4d5b]/60 hover:bg-[#0f4d5b] text-[#febf4a] hover:border-[#febf4a] transition-colors focus:outline-none"
                title="Relive royal gate entrance"
                aria-label="Reopen haveli gates"
              >
                <DoorOpen className="w-4 h-4 text-[#febf4a]" />
              </button>
            )}

            {/* Book Pass CTA */}
            <motion.button
              onClick={onOpenPassModal}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all focus:outline-none"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Book Pass</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#5f1040] animate-ping" />
            </motion.button>
          </div>

          {/* Mobile Menu & Audio Buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onToggleAudio}
              className="p-2 rounded-full border border-[#febf4a]/30 bg-[#5f1040]/60 text-[#febf4a]"
              aria-label="Toggle festive ambient sound"
            >
              {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <motion.button
              onClick={onOpenPassModal}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#febf4a] text-[#3a0826] font-bold text-xs uppercase tracking-wider"
            >
              <Ticket className="w-3.5 h-3.5" />
              <span>Passes</span>
            </motion.button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[#febf4a]/30 bg-[#3a0826]/70 text-[#febf4a] hover:bg-[#5f1040] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-30 bg-gradient-to-b from-[#2a061b] via-[#3a0826] to-[#0b333c] border-b border-[#febf4a]/30 p-6 shadow-2xl md:hidden backdrop-blur-2xl"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-base font-semibold text-[#fff0c2] hover:bg-[#5f1040] hover:text-[#febf4a] transition-all border border-transparent hover:border-[#febf4a]/30 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Sparkles className="w-4 h-4 text-[#febf4a]/60" />
                </a>
              ))}
              
              <div className="pt-4 mt-2 border-t border-[#febf4a]/20 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenPassModal();
                  }}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-bold text-center tracking-wider uppercase text-sm shadow-gold-glow flex items-center justify-center gap-2"
                >
                  <Ticket className="w-4 h-4" />
                  <span>Register & Buy Passes</span>
                </button>

                {onReopenDoors && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onReopenDoors();
                    }}
                    className="w-full py-2.5 rounded-full border border-[#febf4a]/40 bg-[#0f4d5b]/70 text-[#febf4a] font-medium text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                  >
                    <DoorOpen className="w-4 h-4" />
                    <span>Reopen Royal Gates</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
