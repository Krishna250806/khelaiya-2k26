import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { GALLERY_ITEMS } from '../data/festivalData';
import { DiyaIcon } from './common/MandalaDecorations';

export default function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Garba Circles", "Fashion & Glamour", "Music & Beats", "Traditions & Aarti", "Celebrity Moments"];

  const filteredItems = activeFilter === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === "Escape") setSelectedImageIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex]);

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  };

  return (
    <section id="gallery" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#210314] via-[#330823] to-[#0e2c34]">
      
      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Relive The Magic"
          title="Glimpses Of"
          highlight="Past Fests"
          subtitle="Explore the kaleidoscope of ecstatic circles, ornate attire, thumping dhol beats, and sacred devotion."
        />

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-gradient-to-r from-[#febf4a] to-[#ffd982] text-[#3a0826] font-bold shadow-gold-glow'
                  : 'bg-[#5f1040]/40 text-[#fff0c2]/80 hover:text-[#febf4a] border border-[#febf4a]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onClick={() => {
                  const originalIndex = GALLERY_ITEMS.findIndex(g => g.id === item.id);
                  setSelectedImageIndex(originalIndex);
                }}
                className="group relative rounded-3xl overflow-hidden aspect-[4/3] cursor-pointer border border-[#febf4a]/30 hover:border-[#febf4a] shadow-lg hover:shadow-gold-glow transition-all duration-500 bg-[#250417]"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#250417] via-[#250417]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-[#febf4a] bg-[#5f1040]/80 border border-[#febf4a]/40 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Expand Icon */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0f4d5b]/80 border border-[#febf4a]/50 text-[#febf4a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Details */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="font-display text-lg font-bold text-white group-hover:text-[#febf4a] transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#fff0c2]/80 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* FULL-FEATURED LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center bg-black/95 p-4 sm:p-8 backdrop-blur-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#5f1040]/80 border border-[#febf4a]/60 text-[#febf4a] hover:bg-[#5f1040] hover:scale-110 transition-all"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#3a0826]/80 border border-[#febf4a]/50 text-[#febf4a] hover:bg-[#5f1040] hover:scale-110 transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#3a0826]/80 border border-[#febf4a]/50 text-[#febf4a] hover:bg-[#5f1040] hover:scale-110 transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Card */}
            <div className="relative max-w-5xl w-full flex flex-col items-center">
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-3xl overflow-hidden border-2 border-[#febf4a]/60 shadow-[0_0_80px_rgba(254,191,74,0.3)] bg-[#250417]"
              >
                <img
                  src={GALLERY_ITEMS[selectedImageIndex].image}
                  alt={GALLERY_ITEMS[selectedImageIndex].title}
                  className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                />

                {/* Lightbox Caption Strip */}
                <div className="p-6 bg-gradient-to-r from-[#250417] via-[#3a0826] to-[#0f4d5b] border-t border-[#febf4a]/30">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#febf4a] px-2.5 py-0.5 rounded-full bg-[#5f1040] border border-[#febf4a]/30 inline-block mb-1.5">
                        {GALLERY_ITEMS[selectedImageIndex].category}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {GALLERY_ITEMS[selectedImageIndex].title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#fff0c2]/80 mt-1 max-w-2xl">
                        {GALLERY_ITEMS[selectedImageIndex].caption}
                      </p>
                    </div>

                    <div className="text-xs font-mono text-[#febf4a] whitespace-nowrap self-end sm:self-center">
                      {selectedImageIndex + 1} of {GALLERY_ITEMS.length}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
