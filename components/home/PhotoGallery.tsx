'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Instagram, ZoomIn, Zap } from 'lucide-react';

const galleryImages = [
  { src: '/images/Gallery/SKYROCK17.jpg', span: 'col-span-2 row-span-2' },
  { src: '/images/Gallery/SKYROCK42.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/Gallery/SKYROCK58.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/Gallery/SKYROCK73.jpg', span: 'col-span-2 row-span-1' },
  { src: '/images/Gallery/SKYROCK29.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/Gallery/SKYROCK85.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/Gallery/SKYROCK36.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/Gallery/SKYROCK94.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/Gallery/SKYROCK51.jpg', span: 'col-span-2 row-span-2' },
  { src: '/images/Gallery/SKYROCK68.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/Gallery/SKYROCK12.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/Gallery/SKYROCK77.jpg', span: 'col-span-2 row-span-1' },
  { src: '/images/Gallery/SKYROCK23.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/Gallery/SKYROCK45.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/Gallery/SKYROCK89.jpg', span: 'col-span-2 row-span-1' },
  { src: '/images/Gallery/SKYROCK61.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/Gallery/SKYROCK33.jpg', span: 'col-span-1 row-span-1' },
  { src: '/images/Gallery/SKYROCK55.jpg', span: 'col-span-2 row-span-1' },
];

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));
  const prevImage = () => setSelectedImage((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));

  return (
    <>
      <section className="relative py-24 bg-[#0A1612] overflow-hidden">
        {/* Background Elements - Sporty Style */}
        <div className="absolute inset-0">
          {/* Animated gradient orbs */}
          <motion.div
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl"
          />
          
          {/* Sporty diagonal lines */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 40px,
                #fff 40px,
                #fff 42px
              )`,
            }}
          />
          
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header - Funky Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-white font-bold tracking-wider text-sm">ADVENTURE GALLERY</span>
              <Zap className="w-4 h-4 text-yellow-400" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-2">
              CAPTURE THE
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">MOMENT</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Real moments from real adventurers at Sky Rock
            </p>
          </motion.div>

          {/* Bento Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 auto-rows-[180px] md:auto-rows-[200px] lg:auto-rows-[220px]">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`relative overflow-hidden rounded-2xl cursor-pointer group ${image.span}`}
                onClick={() => openLightbox(index)}
              >
                {/* Image */}
                <img
                  src={image.src}
                  alt={`Sky Rock Adventure ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-end p-6">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-white font-medium text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    View Photo
                  </span>
                </div>

                {/* Rainbow glow on hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ring-4 ring-pink-500/70"
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-white/50 mb-6 text-lg">
              Share your adventure with <span className="text-accent font-bold">#SkyRockKhaoLak</span>
            </p>
            <a
              href="https://instagram.com/skyrockkhaolak"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold rounded-2xl hover:shadow-2xl hover:shadow-pink-500/30 transition-all hover:-translate-y-1"
            >
              <Instagram className="w-6 h-6" />
              Follow @skyrockkhaolak
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 md:left-8 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="w-8 h-8 text-white" />
            </button>

            {/* Image */}
            <motion.img
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={galleryImages[selectedImage].src}
              alt={`Sky Rock Adventure ${selectedImage + 1}`}
              className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next Button */}
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 md:right-8 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="w-8 h-8 text-white" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm text-white font-medium">
              {selectedImage + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
