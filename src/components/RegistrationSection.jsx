import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Sparkles, Bell, Calendar, MapPin, X } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { FESTIVAL_INFO } from '../data/festivalData';
import { DiyaIcon, MandalaPattern } from './common/MandalaDecorations';

export default function RegistrationSection({ onRegisterClick }) {
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (!userEmail) return;
    setEmailSubmitted(true);
    setTimeout(() => {
      setEmailSubmitted(false);
      setNotifyModalOpen(false);
      setUserEmail("");
    }, 2200);
  };

  return (
    <section id="registration" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#210314] via-[#2f071e] to-[#0e2c34]">
      
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10">
        <MandalaPattern className="w-[650px] h-[650px] text-[#febf4a] animate-spin-slow" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Registration"
          title="JOIN"
          highlight="NUV KHELAIYA"
          subtitle="Register for NUV Khelaiya and be part of an evening of Garba, music, culture and celebration."
        />

        {/* Premium Registration Card */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-r from-[#febf4a] via-[#5f1040] to-[#0f4d5b] shadow-[0_0_50px_rgba(254,191,74,0.25)]">
          <div className="rounded-[22px] bg-gradient-to-br from-[#2a061b] via-[#3a0826] to-[#072b33] p-8 sm:p-12 md:p-14 text-center relative overflow-hidden">
            
            {/* Top Emblem */}
            <div className="w-16 h-16 rounded-full border border-[#febf4a]/60 bg-gradient-to-br from-[#5f1040] to-[#0f4d5b] mx-auto flex items-center justify-center shadow-gold-glow mb-6 overflow-hidden p-2">
              <img src="/nuv-assets/Asset 5.png" alt="NUV Logo" className="w-full h-full object-contain" />
            </div>

            <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
              Be Part of the <span className="text-gradient-gold">Celebration</span>
            </h3>

            <p className="text-base sm:text-lg text-[#fff0c2]/90 max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
              Register for NUV Khelaiya and be part of an evening of Garba, music, culture and celebration with the Navrachana University community.
            </p>

            {/* Event Info Strip */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-[#fff0c2]/80 font-medium mb-10 pb-8 border-b border-[#febf4a]/20">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#febf4a]" />
                <span>Navrachana University Campus, Vadodara</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#febf4a]" />
                <span>Date: To be announced</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Registration Button - Easy to configure link */}
              <a
                href={FESTIVAL_INFO.registrationUrl !== "#registration" ? FESTIVAL_INFO.registrationUrl : "#"}
                onClick={(e) => {
                  if (FESTIVAL_INFO.registrationUrl === "#registration") {
                    e.preventDefault();
                    setNotifyModalOpen(true);
                  }
                }}
                className="group relative w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-display font-bold text-base uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>REGISTER NOW</span>
                <ArrowRight className="w-5 h-5 text-[#3a0826] transition-transform group-hover:translate-x-1" />
              </a>

              {/* Get Notified / Alerts */}
              <button
                type="button"
                onClick={() => setNotifyModalOpen(true)}
                className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#febf4a]/40 bg-[#5f1040]/50 hover:bg-[#5f1040] text-[#febf4a] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Bell className="w-4 h-4" />
                <span>Get Registration Alerts</span>
              </button>
            </div>

            <p className="text-xs text-[#fff0c2]/60 mt-6">
              Official registration link will be published as soon as portal opens.
            </p>

          </div>
        </div>

      </div>

      {/* Registration Notification Modal */}
      <AnimatePresence>
        {notifyModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 backdrop-blur-xl bg-black/80">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md bg-gradient-to-b from-[#250417] to-[#0f4d5b] border-2 border-[#febf4a]/50 rounded-3xl p-6 sm:p-8 shadow-2xl text-center"
            >
              <button
                onClick={() => setNotifyModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full border border-[#febf4a]/30 text-[#febf4a] hover:bg-[#5f1040]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-12 h-12 rounded-full bg-[#febf4a]/20 border border-[#febf4a] text-[#febf4a] flex items-center justify-center mx-auto mb-4">
                <Bell className="w-6 h-6" />
              </div>

              <h4 className="font-display text-2xl font-bold text-gradient-gold mb-2">
                Registration Alerts
              </h4>

              <p className="text-xs text-[#fff0c2]/80 leading-relaxed mb-6">
                Enter your university email to receive instant notification as soon as official registration for NUV Khelaiya opens.
              </p>

              {emailSubmitted ? (
                <div className="p-4 rounded-xl bg-[#0f4d5b]/70 border border-[#febf4a]/40 text-[#febf4a] text-xs font-semibold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>You are on the notification list!</span>
                </div>
              ) : (
                <form onSubmit={handleNotifySubmit} className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="your.name@nuv.ac.in"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1a0210] border border-[#febf4a]/40 text-white text-sm focus:outline-none focus:border-[#febf4a]"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-[#febf4a] to-[#ffd982] text-[#3a0826] font-bold text-xs uppercase tracking-wider shadow-gold-glow cursor-pointer"
                  >
                    Notify Me When Portal Opens
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
