'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, TreePine, Play, Mountain } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/Hero%20Image/heroimage1.jpg',
    title: 'SOAR THROUGH',
    subtitle: 'THE JUNGLE',
    description: 'Experience 27 platforms of pure adrenaline through Khao Lak\'s ancient rainforest canopy.',
    accent: 'Khao Lak\'s Premier Adventure',
  },
  {
    id: 2,
    image: '/images/Hero%20Image/heroimage2.jpg',
    title: 'RIDE THE',
    subtitle: 'ROLLER',
    description: 'Feel the rush of our unique roller zipline - a thrilling combination of speed and nature.',
    accent: 'First of Its Kind',
  },
  {
    id: 3,
    image: '/images/Hero%20Image/heroimage3.jpg',
    title: 'CONQUER',
    subtitle: 'NEW HEIGHTS',
    description: 'Cross sky bridges and abseil through the treetops for an unforgettable experience.',
    accent: 'Sky Bridges & Abseil',
  },
  {
    id: 4,
    image: '/images/Hero%20Image/heroimage4.jpg',
    title: 'ADVENTURE',
    subtitle: 'FOR ALL',
    description: 'Safe, exciting adventures for the whole family with professional guides every step.',
    accent: 'Family Friendly',
  },
];

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden bg-[#0A1612]">
      {/* Background Image with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slides[currentSlide].image})`,
              animation: 'kenburns 20s ease-out infinite alternate'
            }}
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1612]/90 via-[#0A1612]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1612] via-transparent to-[#0A1612]/30" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 opacity-10 hidden lg:block">
        <TreePine className="w-32 h-32 text-primary-light animate-float" />
      </div>
      <div className="absolute bottom-1/4 left-10 opacity-10 hidden lg:block">
        <Mountain className="w-40 h-40 text-accent" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Accent Badge */}
            <motion.div
              key={`badge-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium">
                <TreePine className="w-4 h-4" />
                {slides[currentSlide].accent}
              </span>
            </motion.div>

            {/* Title */}
            <motion.div
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-heading text-white leading-none mb-2">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-5xl sm:text-6xl lg:text-8xl font-heading leading-none mb-6">
                <span className="gradient-text">{slides[currentSlide].subtitle}</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 mb-10 max-w-xl"
            >
              {slides[currentSlide].description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/booking">
                <button className="group px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold rounded-xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-accent/30 transition-all hover:-translate-y-1">
                  <TreePine className="w-5 h-5" />
                  BOOK YOUR ADVENTURE
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
              <Link href="/packages/combined">
                <button className="relative p-[2px] rounded-xl overflow-hidden group/btn">
                  {/* Rainbow Border */}
                  <span 
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
                      backgroundSize: '400% 100%',
                      animation: 'rainbow-slow 15s linear infinite',
                    }}
                  />
                  {/* Button Content */}
                  <span 
                    className="relative flex items-center justify-center gap-3 px-8 py-4 bg-[#0A1612] rounded-[10px] text-white group-hover/btn:bg-transparent transition-all duration-300"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '18px' }}
                  >
                    <Play className="w-5 h-5" />
                    EXPLORE PACKAGES
                  </span>
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Slide Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
        {/* Prev Button */}
        <button
          onClick={() => { prevSlide(); setIsAutoPlaying(false); }}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>

        {/* Dots */}
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => { setCurrentSlide(index); setIsAutoPlaying(false); }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-accent' 
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={() => { nextSlide(); setIsAutoPlaying(false); }}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="text-white/40 text-sm font-mono">
          <span className="text-accent font-bold text-lg">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="mx-2">/</span>
          <span>{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-8 z-20 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs uppercase tracking-widest rotate-90 origin-center translate-y-8">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-16 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>

      {/* Ken Burns Animation */}
      <style jsx>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
