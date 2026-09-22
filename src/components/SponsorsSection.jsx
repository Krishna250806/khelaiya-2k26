import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Sparkles, X, CheckCircle2, Handshake } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { DiyaIcon } from './common/MandalaDecorations';

export default function SponsorsSection() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setSubmittedInquiry(true);
    setTimeout(() => {
      setSubmittedInquiry(false);
      setInquiryModalOpen(false);
    }, 2200);
  };

  return (
    <section id="sponsors" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0c2e36] via-[#24061a] to-[#210314]">
      
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Partnerships"
          title="OUR"
          highlight="SPONSORS"
          subtitle="Proudly supported by partners who celebrate student culture and creativity."
        />

        {/* Brand Partner Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-1 bg-gradient-to-r from-[#febf4a]/50 via-[#5f1040]/70 to-[#0f4d5b]/60 shadow-festive-card backdrop-blur-xl">
            <div className="rounded-[22px] bg-gradient-to-br from-[#2a061b] via-[#3a0826] to-[#072b33] p-8 sm:p-12 text-center">
              
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#febf4a]/20 to-[#5f1040]/40 border border-[#febf4a]/50 flex items-center justify-center mx-auto mb-6 text-[#febf4a]">
                <Handshake className="w-8 h-8" />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
                Partner with NUV Khelaiya
              </h3>

              <p className="text-sm sm:text-base text-[#fff0c2]/85 max-w-xl mx-auto mb-8 leading-relaxed">
                Brand collaborations and event sponsorships for NUV Khelaiya are currently open. Connect with thousands of engaged university students and the wider Navrachana University community.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setInquiryModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-bold text-xs sm:text-sm uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>BECOME A SPONSOR</span>
                </button>

                <a
                  href="mailto:khelaiya@nuv.ac.in"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-[#febf4a]/40 text-[#febf4a] hover:bg-[#5f1040]/50 font-semibold text-xs sm:text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                >
                  <span>Contact Sponsorship Desk</span>
                </a>
              </div>

            </div>
          </div>
        </div>

      </div>

      {/* Sponsor Inquiry Modal */}
      <AnimatePresence>
        {inquiryModalOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 backdrop-blur-xl bg-black/80">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-md bg-gradient-to-b from-[#250417] to-[#0f4d5b] border-2 border-[#febf4a]/50 rounded-3xl p-6 sm:p-8 shadow-2xl"
            >
              <button
                onClick={() => setInquiryModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full border border-[#febf4a]/30 text-[#febf4a] hover:bg-[#5f1040]"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <DiyaIcon className="w-7 h-7 text-[#febf4a]" />
                <h3 className="font-display text-2xl font-bold text-gradient-gold">
                  Sponsorship Inquiry
                </h3>
              </div>

              <p className="text-xs text-[#fff0c2]/80 mb-6">
                Submit your details and the NUV Khelaiya partnership team will reach out to discuss collaboration opportunities.
              </p>

              {submittedInquiry ? (
                <div className="text-center py-6">
                  <CheckCircle2 className="w-10 h-10 text-[#febf4a] mx-auto mb-2" />
                  <h4 className="font-display text-lg font-bold text-white">Inquiry Received</h4>
                  <p className="text-xs text-[#fff0c2]/80 mt-1">Thank you. The NUV Khelaiya team will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#fff0c2]/90 mb-1">Company / Organization</label>
                    <input
                      type="text"
                      required
                      placeholder="Your organization name"
                      className="w-full px-4 py-2 rounded-xl bg-[#1a0210] border border-[#febf4a]/30 text-white text-sm focus:outline-none focus:border-[#febf4a]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#fff0c2]/90 mb-1">Contact Person & Email</label>
                    <input
                      type="email"
                      required
                      placeholder="contact@company.com"
                      className="w-full px-4 py-2 rounded-xl bg-[#1a0210] border border-[#febf4a]/30 text-white text-sm focus:outline-none focus:border-[#febf4a]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#fff0c2]/90 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 Phone number"
                      className="w-full px-4 py-2 rounded-xl bg-[#1a0210] border border-[#febf4a]/30 text-white text-sm focus:outline-none focus:border-[#febf4a]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-gradient-to-r from-[#febf4a] to-[#ffd982] text-[#3a0826] font-bold text-xs uppercase tracking-wider shadow-gold-glow cursor-pointer"
                  >
                    Submit Sponsorship Inquiry
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
