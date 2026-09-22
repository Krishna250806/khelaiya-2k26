import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ChevronDown, ChevronUp, HelpCircle, Calendar, Sparkles, MapPin } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { SCHEDULE_TIMELINE, FAQ_ITEMS, FESTIVAL_INFO } from '../data/festivalData';
import { DiyaIcon } from './common/MandalaDecorations';

export default function ScheduleFaqSection() {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="schedule" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0e2c34] via-[#2a061b] to-[#210314]">
      
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Evening Itinerary & Guidelines"
          title="Schedule &"
          highlight="Frequently Asked"
          subtitle="Everything you need to plan your festive night from gate opening to the grand midnight Aarti."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Festival Timeline */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-8">
              <Calendar className="w-5 h-5 text-[#febf4a]" />
              <h3 className="font-display text-2xl font-bold text-white">
                The Festive Night Itinerary
              </h3>
            </div>

            {/* Timeline List */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#febf4a]/30 space-y-8">
              {SCHEDULE_TIMELINE.map((item, idx) => (
                <motion.div
                  key={item.time}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Glowing Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1 w-5 h-5 rounded-full bg-[#5f1040] border-2 border-[#febf4a] group-hover:bg-[#febf4a] group-hover:scale-125 transition-all shadow-gold-glow flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-[#5f1040]/50 via-[#3a0826]/60 to-[#0f4d5b]/40 border border-[#febf4a]/25 hover:border-[#febf4a]/70 transition-all duration-300 backdrop-blur-md">
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="font-mono text-xs sm:text-sm font-bold text-[#febf4a] px-3 py-1 rounded-full bg-[#3a0826] border border-[#febf4a]/30 inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {item.time}
                      </span>
                      {idx === 3 && (
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#febf4a] px-2 py-0.5 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/40">
                          Highlight
                        </span>
                      )}
                    </div>

                    <h4 className="font-display text-lg font-bold text-white mb-1 group-hover:text-[#febf4a] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#fff0c2]/80 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Venue Card */}
            <div className="mt-10 p-5 rounded-2xl bg-[#0f4d5b]/50 border border-[#febf4a]/40 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#febf4a]/20 border border-[#febf4a] flex items-center justify-center flex-shrink-0 text-[#febf4a]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#febf4a] block">Venue Location</span>
                <h5 className="font-display text-base font-bold text-white">{FESTIVAL_INFO.venue}</h5>
                <p className="text-xs text-[#fff0c2]/70">{FESTIVAL_INFO.city} • Dedicated Two-Wheeler & Four-Wheeler Parking Zones</p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive FAQ Accordion */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-8">
              <HelpCircle className="w-5 h-5 text-[#febf4a]" />
              <h3 className="font-display text-2xl font-bold text-white">
                Frequently Asked Questions
              </h3>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#febf4a]/30 overflow-hidden bg-[#3a0826]/50 backdrop-blur-md transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-semibold text-[#fff0c2] hover:text-[#febf4a] transition-colors focus:outline-none"
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
                          transition={{ duration: 0.3 }}
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

            {/* Need Help Box */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-[#5f1040]/70 to-[#0f4d5b]/70 border border-[#febf4a]/30 text-center">
              <Sparkles className="w-6 h-6 text-[#febf4a] mx-auto mb-2" />
              <h4 className="font-display text-lg font-bold text-white">Have a specific question?</h4>
              <p className="text-xs text-[#fff0c2]/70 mt-1 mb-4">
                Reach out to our campus student helpdesk directly on WhatsApp or Email.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#febf4a] text-[#3a0826] font-bold text-xs uppercase tracking-wider shadow-gold-glow"
              >
                Chat With Helpdesk
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
