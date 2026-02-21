'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MapPin, Zap } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'London, UK',
    avatar: '/images/Gallery/SKYROCK15.jpg',
    rating: 5,
    text: 'Absolutely incredible experience! The ziplines were thrilling and the staff made us feel so safe. A must-do in Khao Lak!',
    highlight: 'THRILLING',
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'Singapore',
    avatar: '/images/Gallery/SKYROCK28.jpg',
    rating: 5,
    text: 'Best adventure activity we did in Thailand! The views from the platforms are breathtaking and the guides are fantastic.',
    highlight: 'BREATHTAKING',
  },
  {
    id: 3,
    name: 'Emma Williams',
    location: 'Sydney, Australia',
    avatar: '/images/Gallery/SKYROCK41.jpg',
    rating: 5,
    text: 'Perfect for families! Our kids loved every moment. The safety standards are impressive and the whole team was wonderful.',
    highlight: 'FAMILY FUN',
  },
  {
    id: 4,
    name: 'David Mueller',
    location: 'Berlin, Germany',
    avatar: '/images/Gallery/SKYROCK54.jpg',
    rating: 5,
    text: 'The roller zipline is unlike anything I\'ve experienced. Pure adrenaline! Highly recommend the full package.',
    highlight: 'ADRENALINE',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-[#0A1612]" />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Funky Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-bold tracking-wider text-sm">REAL STORIES</span>
            <Zap className="w-4 h-4 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-2">
            WHAT ADVENTURERS
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">SAY ABOUT US</span>
          </h2>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-5xl mx-auto">
          {/* Background card with rainbow border */}
          <div className="relative p-[3px] rounded-3xl">
            <div 
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
                backgroundSize: '400% 100%',
                animation: 'rainbow-flow 8s linear infinite',
              }}
            />
            
            <div className="relative bg-[#0A1612] rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-64 lg:h-auto lg:min-h-[450px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A1612] lg:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1612] via-[#0A1612]/50 to-transparent lg:hidden" />
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Highlight Badge */}
                  <motion.div
                    key={`badge-${currentIndex}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-6 left-6"
                  >
                    <span 
                      className="px-4 py-2 font-bold text-sm rounded-full text-white"
                      style={{
                        background: 'linear-gradient(90deg, #ff0080, #8000ff, #0080ff)',
                      }}
                    >
                      {testimonials[currentIndex].highlight}
                    </span>
                  </motion.div>
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: 'linear-gradient(135deg, #ff0080, #8000ff)',
                      }}
                    >
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={`text-${currentIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-8"
                    >
                      "{testimonials[currentIndex].text}"
                    </motion.p>
                  </AnimatePresence>

                  {/* Author */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`author-${currentIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-purple-500">
                        <img
                          src={testimonials[currentIndex].avatar}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-white font-bold text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="flex items-center gap-1 text-white/50 text-sm">
                          <MapPin className="w-3 h-3" />
                          {testimonials[currentIndex].location}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
            </button>
            
            {/* Progress Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setCurrentIndex(index); setIsAutoPlaying(false); }}
                  className="relative"
                >
                  <div className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125' 
                      : 'bg-white/20 hover:bg-white/40'
                  }`} />
                  {index === currentIndex && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute inset-0 rounded-full border-2 border-purple-500"
                      style={{ margin: '-4px' }}
                    />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={next}
              className="p-4 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 transition-all group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-purple-400 transition-colors" />
            </button>
          </div>
        </div>

        {/* Trust Badges - Funky Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: '#1', label: 'Adventure Park', sublabel: 'in Khao Lak' },
            { value: '4.9', label: 'Star Rating', sublabel: 'Average' },
            { value: '500+', label: 'Five Star', sublabel: 'Reviews' },
          ].map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all"
            >
              <div 
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{
                  background: 'linear-gradient(90deg, #ff0080, #8000ff, #00ffff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {badge.value}
              </div>
              <div className="text-white/70 text-sm font-medium">{badge.label}</div>
              <div className="text-white/40 text-xs">{badge.sublabel}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
