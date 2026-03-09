'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { 
  TreePine, Users, Award, Shield, Heart, MapPin, Calendar, 
  ChevronRight, Zap, Mountain, Leaf, Star, Play, ArrowRight,
  Clock, Phone, Mail
} from 'lucide-react';

const stats = [
  { value: '2020', label: 'Established', icon: Calendar, color: 'from-emerald-500 to-cyan-500' },
  { value: '50K+', label: 'Happy Guests', icon: Users, color: 'from-amber-500 to-orange-500' },
  { value: '27', label: 'Platforms', icon: Mountain, color: 'from-purple-500 to-pink-500' },
  { value: '2km', label: 'Zipline Length', icon: Zap, color: 'from-cyan-500 to-blue-500' },
];

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'European EN 15567 certified equipment with daily safety inspections by trained professionals.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly',
    description: 'Operating in harmony with nature, preserving the pristine rainforest ecosystem for generations.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our dedicated team lives for creating unforgettable adventure experiences every single day.',
    gradient: 'from-rose-500 to-pink-500',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Supporting local communities by employing local guides and contributing to regional development.',
    gradient: 'from-blue-500 to-indigo-500',
  },
];

const teamImages = [
  '/images/Gallery/SKYROCK01.jpg',
  '/images/Gallery/SKYROCK02.jpg',
  '/images/Gallery/SKYROCK03.jpg',
  '/images/Gallery/SKYROCK04.jpg',
];

const galleryImages = [
  '/images/Gallery/SKYROCK109.jpg',
  '/images/Gallery/SKYROCK89.jpg',
  '/images/Gallery/SKYROCK93.jpg',
  '/images/Gallery/SKYROCK95.jpg',
  '/images/Gallery/SKYROCK106.jpg',
  '/images/Gallery/SKYROCK108.jpg',
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen bg-[#0A1612] overflow-hidden" ref={containerRef}>
      {/* Hero Section - Full Screen Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          className="absolute inset-0"
          style={{ y }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/Gallery/SKYROCK89.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0A1612]" />
        </motion.div>

        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/30 rounded-full blur-[120px]"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/30 rounded-full blur-[120px]"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 4 }}
          />
        </div>

        {/* Hero Content */}
        <motion.div 
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
          style={{ opacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/80 text-sm font-medium mb-8">
              <TreePine className="w-4 h-4 text-emerald-400" />
              Since 2020 • Khao Lak, Thailand
            </span>
          </motion.div>

          <motion.h1 
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-white">ABOUT</span>
            <br />
            <span 
              style={{ 
                background: 'linear-gradient(90deg, #10b981 0%, #06b6d4 50%, #8b5cf6 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'rainbow-flow 4s linear infinite'
              }}
            >
              SKY ROCK
            </span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where adventure meets nature in Thailand's most breathtaking rainforest
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-8 h-14 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
              <motion.div 
                className="w-2 h-2 bg-emerald-400 rounded-full"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section - Floating Cards */}
      <section className="relative py-32 -mt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                  style={{ background: `linear-gradient(135deg, ${stat.color.split(' ')[0].replace('from-', '')} 0%, ${stat.color.split(' ')[1].replace('to-', '')} 100%)` }}
                />
                <div 
                  className="relative p-8 rounded-3xl border border-white/10 backdrop-blur-xl overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Value */}
                  <div 
                    className="text-5xl md:text-6xl font-heading font-bold mb-2"
                    style={{ 
                      background: `linear-gradient(135deg, ${stat.color.includes('emerald') ? '#10b981, #06b6d4' : stat.color.includes('amber') ? '#f59e0b, #ef4444' : stat.color.includes('purple') ? '#8b5cf6, #ec4899' : '#06b6d4, #3b82f6'})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm uppercase tracking-widest font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section - Split Screen */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1612] via-[#0D2818] to-[#0A1612]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  className="space-y-4"
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                    <img
                      src="/images/Gallery/SKYROCK109.jpg"
                      alt="Sky Rock Adventure"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img
                      src="/images/Gallery/SKYROCK93.jpg"
                      alt="Sky Rock Adventure"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
                <motion.div 
                  className="space-y-4 pt-12"
                  initial={{ y: -20 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="aspect-square rounded-3xl overflow-hidden">
                    <img
                      src="/images/Gallery/SKYROCK95.jpg"
                      alt="Sky Rock Adventure"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="aspect-[3/4] rounded-3xl overflow-hidden">
                    <img
                      src="/images/Gallery/SKYROCK106.jpg"
                      alt="Sky Rock Adventure"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 lg:right-8"
              >
                <div className="px-8 py-6 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl shadow-2xl shadow-emerald-500/30">
                  <div className="text-white font-bold text-2xl">Since 2020</div>
                  <div className="text-white/80 text-sm">Khao Lak, Thailand</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
                <Star className="w-4 h-4" />
                Our Journey
              </span>

              <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8">
                THE <span 
                  style={{ 
                    background: 'linear-gradient(90deg, #10b981, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >STORY</span>
              </h2>

              <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                <p>
                  Sky Rock was born from a passion for adventure and a deep love for the 
                  stunning natural beauty of Khao Lak. Established in 2020, we set out to 
                  create an <span className="text-emerald-400 font-medium">eco-friendly adventure experience</span> that would allow visitors to 
                  experience the rainforest from a unique perspective.
                </p>
                <p>
                  Our 27-platform zipline course was carefully designed to minimize 
                  environmental impact while maximizing the thrill of soaring through the 
                  ancient trees. Every platform, every zipline, and every sky bridge was 
                  built with both <span className="text-cyan-400 font-medium">safety and sustainability</span> in mind.
                </p>
                <p>
                  Today, we're proud to be one of Khao Lak's top-rated attractions, having 
                  welcomed over <span className="text-amber-400 font-medium">50,000 adventurers</span> from around the world.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/booking">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-emerald-500/30"
                  >
                    Book Adventure
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
                <Link href="/packages">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-xl flex items-center gap-2 hover:bg-white/20 transition-colors"
                  >
                    View Packages
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section - Bento Grid */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[150px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              What We Stand For
            </span>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
              OUR <span 
                style={{ 
                  background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >VALUES</span>
            </h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              The principles that guide everything we do at Sky Rock
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-2xl"
                  style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }}
                />
                <div 
                  className="relative h-full p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 100%)' }}
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all">
                    {value.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section className="py-20 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1920, 0] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex gap-6"
        >
          {[...galleryImages, ...galleryImages, ...galleryImages].map((img, index) => (
            <div 
              key={index} 
              className="w-80 h-52 rounded-2xl overflow-hidden flex-shrink-0"
            >
              <img
                src={img}
                alt="Sky Rock Gallery"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>
      </section>

      {/* Location Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1612] to-[#0D2818]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium mb-6">
                <MapPin className="w-4 h-4" />
                Visit Us
              </span>

              <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-8">
                FIND <span 
                  style={{ 
                    background: 'linear-gradient(90deg, #f59e0b, #ef4444)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >US</span>
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Address</h4>
                    <p className="text-white/60">Khao Lak, Phang Nga, Thailand</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Opening Hours</h4>
                    <p className="text-white/60">Daily: 8:30 AM - 5:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/30 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Contact</h4>
                    <p className="text-white/60">+66 XX XXX XXXX</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl flex items-center gap-2 shadow-lg shadow-amber-500/30"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63168.5!2d98.2!3d8.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKhao+Lak!5e0!3m2!1sen!2sth!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="grayscale-[50%] contrast-125 hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl -z-10 blur-2xl opacity-50" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl -z-10 blur-2xl opacity-50" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: 'url(/images/Gallery/SKYROCK108.jpg)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-[#0A1612]/95 to-cyan-900/90" />
        </div>

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 mb-8 shadow-2xl shadow-emerald-500/30"
            >
              <Zap className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
              READY FOR YOUR
              <br />
              <span 
                style={{ 
                  background: 'linear-gradient(90deg, #10b981, #06b6d4, #8b5cf6)',
                  backgroundSize: '200% auto',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  animation: 'rainbow-flow 4s linear infinite'
                }}
              >
                ADVENTURE?
              </span>
            </h2>

            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
              Join thousands of adventurers who have experienced the thrill of soaring through Khao Lak's pristine rainforest
            </p>

            <Link href="/booking">
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(16, 185, 129, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 bg-[length:200%_auto] text-white font-bold text-xl rounded-2xl flex items-center gap-3 mx-auto shadow-2xl shadow-emerald-500/30 hover:animate-none"
                style={{ animation: 'rainbow-flow 3s linear infinite' }}
              >
                <TreePine className="w-7 h-7" />
                BOOK YOUR ADVENTURE
                <ArrowRight className="w-7 h-7" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
