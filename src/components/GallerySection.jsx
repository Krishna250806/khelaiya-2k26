import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import SectionHeading from './common/SectionHeading';
import { GALLERY_ITEMS } from '../data/festivalData';

export default function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

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
    <section id="gallery" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#0c2e36] via-[#24061a] to-[#210314]">
      
      {/* Hanging Festive Jhumka Chandelier Accent (Asset 4) */}
      <div className="absolute top-16 right-6 lg:right-16 w-14 lg:w-20 pointer-events-none hidden md:block opacity-85 animate-float z-20">
        <img src="/nuv-assets/asset4_jhumka.svg" alt="Festive Jhumka" className="w-full h-auto filter drop-shadow-[0_4px_15px_rgba(254,191,74,0.4)] brightness-110" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Gallery"
          title="THE"
          highlight="MOMENTS"
          subtitle="Captured in rhythm. Captured at NUV खेलैया."
        />

        {/* Editorial Responsive Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer border border-[#febf4a]/30 hover:border-[#febf4a] shadow-lg hover:shadow-gold-glow transition-all duration-500 bg-[#250417]"
            >
              {/* Actual NUV Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#250417] via-[#250417]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

              {/* Expand Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0f4d5b]/80 border border-[#febf4a]/50 text-[#febf4a] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Title Strip */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#febf4a] block mb-1">
                  NUV खेलैया
                </span>
                <h4 className="font-display text-lg font-bold text-white group-hover:text-[#febf4a] transition-colors">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
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
              className="absolute top-6 right-6 z-50 p-3 rounded-full bg-[#5f1040]/80 border border-[#febf4a]/60 text-[#febf4a] hover:bg-[#5f1040] hover:scale-110 transition-all cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#3a0826]/80 border border-[#febf4a]/50 text-[#febf4a] hover:bg-[#5f1040] hover:scale-110 transition-all cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#3a0826]/80 border border-[#febf4a]/50 text-[#febf4a] hover:bg-[#5f1040] hover:scale-110 transition-all cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Lightbox Card */}
            <div className="relative max-w-4xl w-full flex flex-col items-center">
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
                  className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
                />

                {/* Lightbox Footer Strip */}
                <div className="p-5 bg-gradient-to-r from-[#250417] via-[#3a0826] to-[#0f4d5b] border-t border-[#febf4a]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#febf4a] block">
                      NUV खेलैया
                    </span>
                    <h4 className="font-display text-xl font-bold text-white">
                      {GALLERY_ITEMS[selectedImageIndex].title}
                    </h4>
                  </div>

                  <div className="text-xs font-mono text-[#febf4a]">
                    {selectedImageIndex + 1} of {GALLERY_ITEMS.length}
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
