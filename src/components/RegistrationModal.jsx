import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Ticket, Download, Sparkles, User, Mail, Phone, School, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DiyaIcon, MandalaPattern } from './common/MandalaDecorations';
import { PASS_TIERS } from '../data/festivalData';

export default function RegistrationModal({ isOpen, onClose, preselectedTierId = "early-bird" }) {
  const [selectedTier, setSelectedTier] = useState(preselectedTierId);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    studentId: "",
    quantity: 1,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ticketResult, setTicketResult] = useState(null);

  if (!isOpen) return null;

  const currentTier = PASS_TIERS.find(t => t.id === selectedTier) || PASS_TIERS[0];
  const totalPrice = currentTier.price * formData.quantity;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API registration & generate unique ticket ID
    setTimeout(() => {
      const ticketId = `KHEL26-${Math.random().toString(36).substring(2, 7).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      setTicketResult({
        ticketId,
        tierName: currentTier.name,
        quantity: formData.quantity,
        totalPaid: totalPrice,
        holderName: formData.fullName,
        college: formData.college,
        date: "October 24, 2026",
        entryGate: selectedTier === "early-bird" ? "Gate 1 (VIP Fast-Track)" : "Gate 2 / 3 (General)",
      });
      setIsSubmitting(false);

      // Trigger Festive Confetti Celebration!
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#febf4a', '#ffd982', '#5f1040', '#0f4d5b'],
        });
      } catch (err) {
        console.log("Confetti trigger:", err);
      }
    }, 1200);
  };

  const handleReset = () => {
    setTicketResult(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      college: "",
      studentId: "",
      quantity: 1,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 backdrop-blur-xl bg-black/80">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="relative w-full max-w-2xl bg-gradient-to-b from-[#250417] via-[#3a0826] to-[#0f4d5b] border-2 border-[#febf4a]/50 rounded-3xl shadow-[0_0_60px_rgba(254,191,74,0.35)] overflow-hidden"
      >
        {/* Background Mandala Watermark */}
        <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none">
          <MandalaPattern className="w-80 h-80 text-[#febf4a]" />
        </div>

        {/* Modal Header */}
        <div className="relative p-6 sm:p-8 border-b border-[#febf4a]/25 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#febf4a]/20 border border-[#febf4a]/60 flex items-center justify-center">
              <DiyaIcon className="w-6 h-6 text-[#febf4a]" />
            </div>
            <div>
              <h3 className="font-display text-2xl text-gradient-gold font-bold">
                {ticketResult ? "Your Digital Garba Pass" : "Khelaiya 2026 Pass Booking"}
              </h3>
              <p className="text-xs text-[#fff0c2]/70">
                {ticketResult ? "Official Entry Credential Generated" : "Enter details for instant pass issuance"}
              </p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="p-2 rounded-full border border-[#febf4a]/30 text-[#febf4a] hover:bg-[#5f1040] transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!ticketResult ? (
            /* REGISTRATION FORM */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Pass Tier Selector Radio Cards */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#febf4a] mb-2.5">
                  Select Pass Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PASS_TIERS.map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setSelectedTier(tier.id)}
                      className={`relative p-3.5 rounded-2xl border text-left transition-all ${
                        selectedTier === tier.id
                          ? 'bg-gradient-to-b from-[#5f1040] to-[#3a0826] border-[#febf4a] shadow-gold-glow'
                          : 'bg-[#1e0413]/60 border-[#febf4a]/20 hover:border-[#febf4a]/50 text-[#fff0c2]/80'
                      }`}
                    >
                      {tier.popular && (
                        <span className="absolute -top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#febf4a] text-[#3a0826]">
                          Best Value
                        </span>
                      )}
                      <div className="font-display font-bold text-sm text-white">{tier.name}</div>
                      <div className="text-lg font-bold text-[#febf4a] mt-1">₹{tier.price}</div>
                      <div className="text-[11px] text-[#fff0c2]/70 mt-1 line-clamp-1">{tier.urgencyText}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Attendee Details Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#fff0c2]/90 mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-[#febf4a]" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Radhika Sharma"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1a0210] border border-[#febf4a]/30 text-white placeholder-white/40 focus:outline-none focus:border-[#febf4a] focus:ring-1 focus:ring-[#febf4a] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#fff0c2]/90 mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#febf4a]" />
                    <span>College Email *</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="student@college.edu.in"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1a0210] border border-[#febf4a]/30 text-white placeholder-white/40 focus:outline-none focus:border-[#febf4a] focus:ring-1 focus:ring-[#febf4a] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#fff0c2]/90 mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-[#febf4a]" />
                    <span>WhatsApp / Phone *</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1a0210] border border-[#febf4a]/30 text-white placeholder-white/40 focus:outline-none focus:border-[#febf4a] focus:ring-1 focus:ring-[#febf4a] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#fff0c2]/90 mb-1.5 flex items-center gap-1.5">
                    <School className="w-3.5 h-3.5 text-[#febf4a]" />
                    <span>College / University *</span>
                  </label>
                  <input
                    type="text"
                    name="college"
                    required
                    placeholder="e.g. Gujarat University"
                    value={formData.college}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#1a0210] border border-[#febf4a]/30 text-white placeholder-white/40 focus:outline-none focus:border-[#febf4a] focus:ring-1 focus:ring-[#febf4a] text-sm"
                  />
                </div>
              </div>

              {/* Quantity & Summary */}
              <div className="p-4 rounded-2xl bg-[#5f1040]/40 border border-[#febf4a]/30 flex items-center justify-between">
                <div>
                  <div className="text-xs text-[#fff0c2]/80 uppercase font-semibold">Total Payable</div>
                  <div className="text-2xl font-display font-bold text-gradient-gold">
                    ₹{totalPrice}
                  </div>
                  <div className="text-[11px] text-[#febf4a]">Includes taxes & complimentary amenities</div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-[#fff0c2]/80 font-medium">Quantity:</span>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    className="px-3 py-1.5 rounded-lg bg-[#250417] border border-[#febf4a]/50 text-[#febf4a] font-bold text-sm focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Pass' : 'Passes'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-gradient-to-r from-[#febf4a] via-[#ffd982] to-[#febf4a] text-[#3a0826] font-bold text-base uppercase tracking-wider shadow-gold-glow hover:shadow-gold-glow-lg transition-all flex items-center justify-center gap-3 disabled:opacity-70 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#3a0826] border-t-transparent rounded-full animate-spin" />
                    <span>Securing Your Garba Pass...</span>
                  </>
                ) : (
                  <>
                    <Ticket className="w-5 h-5" />
                    <span>Proceed to Confirm & Generate Pass (₹{totalPrice})</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-[#fff0c2]/60">
                <ShieldCheck className="w-4 h-4 text-[#febf4a]" />
                <span>Encrypted Verification • Official College Cultural Council Credential</span>
              </div>
            </form>
          ) : (
            /* DIGITAL E-PASS RESULT */
            <div className="space-y-6">
              
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#0f4d5b]/60 border border-[#febf4a]/40 text-[#febf4a] text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#febf4a] flex-shrink-0" />
                <span>Booking Confirmed! Your digital e-Pass has been registered to {formData.email}.</span>
              </div>

              {/* E-PASS CARD */}
              <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#5f1040] via-[#2f071e] to-[#0f4d5b] border-2 border-[#febf4a] shadow-festive-card text-[#fff0c2] overflow-hidden">
                {/* Decorative cut notches on sides */}
                <div className="absolute top-1/2 -left-3 w-6 h-6 rounded-full bg-[#15020e] border-r-2 border-[#febf4a]" />
                <div className="absolute top-1/2 -right-3 w-6 h-6 rounded-full bg-[#15020e] border-l-2 border-[#febf4a]" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-dashed border-[#febf4a]/40">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#febf4a]">
                      Official Admission Credential
                    </span>
                    <h4 className="font-display text-2xl sm:text-3xl font-bold text-gradient-gold">
                      KHELAIYA 2026
                    </h4>
                    <p className="text-xs text-[#fff0c2]/80 mt-0.5">
                      The Grand College Ras-Garba Mahotsav
                    </p>
                  </div>

                  {/* QR Code */}
                  <div className="p-2 rounded-2xl bg-white shadow-md flex-shrink-0">
                    <img
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=${encodeURIComponent(ticketResult.ticketId)}`}
                      alt="Digital Ticket QR Code"
                      className="w-24 h-24 sm:w-28 sm:h-28"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-xs">
                  <div>
                    <span className="text-[#fff0c2]/60 block uppercase font-medium text-[10px]">Pass Holder</span>
                    <span className="font-bold text-white text-sm">{ticketResult.holderName}</span>
                  </div>
                  <div>
                    <span className="text-[#fff0c2]/60 block uppercase font-medium text-[10px]">Tier</span>
                    <span className="font-bold text-[#febf4a] text-sm">{ticketResult.tierName}</span>
                  </div>
                  <div>
                    <span className="text-[#fff0c2]/60 block uppercase font-medium text-[10px]">Date & Time</span>
                    <span className="font-bold text-white text-sm">{ticketResult.date}</span>
                  </div>
                  <div>
                    <span className="text-[#fff0c2]/60 block uppercase font-medium text-[10px]">Access Gate</span>
                    <span className="font-bold text-[#febf4a] text-sm">{ticketResult.entryGate}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#febf4a]/20 flex items-center justify-between text-[11px] font-mono text-[#fff0c2]/75">
                  <span>ID: <strong className="text-[#febf4a]">{ticketResult.ticketId}</strong></span>
                  <span>QTY: {ticketResult.quantity} | Total: ₹{ticketResult.totalPaid}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => window.print()}
                  className="flex-1 py-3.5 rounded-full bg-gradient-to-r from-[#febf4a] to-[#ffd982] text-[#3a0826] font-bold text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-gold-glow"
                >
                  <Download className="w-4 h-4" />
                  <span>Download / Print E-Pass</span>
                </button>
                <button
                  onClick={handleReset}
                  className="px-6 py-3.5 rounded-full border border-[#febf4a]/50 text-[#febf4a] hover:bg-[#5f1040] font-semibold text-sm tracking-wider uppercase transition-colors"
                >
                  Close
                </button>
              </div>

            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
