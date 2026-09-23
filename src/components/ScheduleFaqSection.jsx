import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle, Calendar, MapPin, Clock, Ticket, Sparkles } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { FAQ_ITEMS, FESTIVAL_INFO } from '../data/festivalData';

export default function ScheduleFaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#210314] via-[#2a061b] to-[#0e2c34]">
      
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Information & Guidelines"
          title="EVENT DETAILS &"
          highlight="FAQS"
          subtitle="Essential information regarding attendance, campus venue, and answers to frequently asked questions."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Event Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#febf4a]" />
                <h3 className="font-display text-2xl font-bold text-white">
                  Event Details
                </h3>
              </div>
              <div className="w-16 h-10 overflow-hidden">
                <img src="/nuv-assets/asset4_temple_bells.svg" alt="Temple Bells" className="w-full h-full object-contain filter brightness-110 drop-shadow-[0_2px_8px_rgba(254,191,74,0.4)]" />
              </div>
            </div>

            {/* Event Details Card */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-[#5f1040]/70 via-[#3a0826]/80 to-[#0f4d5b]/60 border border-[#febf4a]/30 backdrop-blur-xl shadow-festive-card space-y-6">
              
              {/* Date Block */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#febf4a]/20 border border-[#febf4a]/50 text-[#febf4a] flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#febf4a] block">
                    Event Date
                  </span>
                  <h4 className="font-display text-lg font-bold text-white mt-0.5">
                    {FESTIVAL_INFO.date}
                  </h4>
                  <p className="text-xs text-[#fff0c2]/70 mt-1">
                    Saturday • Gates open for students, faculty & guests.
                  </p>
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#febf4a]/15" />

              {/* Venue Block */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#febf4a]/20 border border-[#febf4a]/50 text-[#febf4a] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#febf4a] block">
                    Venue
                  </span>
                  <h4 className="font-display text-lg font-bold text-white mt-0.5">
                    Jyoti Party Plot
                  </h4>
                  <p className="text-xs text-[#fff0c2]/70 mt-1">
                    Vadodara, Gujarat • Entry passes & gate instructions to be announced.
                  </p>
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#febf4a]/15" />

              {/* Registration Block */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl bg-[#febf4a]/20 border border-[#febf4a]/50 text-[#febf4a] flex items-center justify-center flex-shrink-0">
                  <Ticket className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#febf4a] block">
                    Registration
                  </span>
                  <h4 className="font-display text-lg font-bold text-white mt-0.5">
                    Details coming soon
                  </h4>
                  <p className="text-xs text-[#fff0c2]/70 mt-1">
                    Online portal access will open prior to the celebration.
                  </p>
                </div>
              </div>

            </div>

            {/* Timetable note */}
            <div className="p-5 rounded-2xl bg-[#0f4d5b]/40 border border-[#febf4a]/25 text-xs text-[#fff0c2]/80 leading-relaxed">
              <span className="font-semibold text-[#febf4a] block mb-1">Evening Schedule:</span>
              Detailed schedule of Aarti, traditional Garba rounds, and student performances will be released with official invitations.
            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordion */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <HelpCircle className="w-5 h-5 text-[#febf4a]" />
              <h3 className="font-display text-2xl font-bold text-white">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-3.5">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#febf4a]/30 overflow-hidden bg-[#3a0826]/40 backdrop-blur-md transition-all duration-300 hover:border-[#febf4a]/60"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-[#fff0c2] hover:text-[#febf4a] transition-colors focus:outline-none cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <div className="w-6 h-6 rounded-full border border-[#febf4a]/40 flex items-center justify-center flex-shrink-0 text-[#febf4a]">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-5 pb-5 text-xs sm:text-sm text-[#fff0c2]/80 leading-relaxed border-t border-[#febf4a]/15 pt-3">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
