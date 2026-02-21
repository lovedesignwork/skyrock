'use client';

import { motion } from 'framer-motion';
import { Shield, Award, CheckCircle, Users, Zap, BadgeCheck, Lock, Star } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'EN 15567 CERTIFIED',
    description: 'European safety standard for adventure parks',
    stat: '100%',
    color: 'from-green-500 to-emerald-600',
  },
  {
    icon: Award,
    title: 'PETZL EQUIPMENT',
    description: 'World-class French safety gear',
    stat: 'A+',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: Users,
    title: 'TRAINED GUIDES',
    description: 'Professionally certified team',
    stat: '50+',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: CheckCircle,
    title: 'DAILY INSPECTIONS',
    description: 'Equipment checked every morning',
    stat: '365',
    color: 'from-purple-500 to-pink-500',
  },
];

export function SafetyCertifications() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1612] via-[#0D2818] to-[#0A1612]" />
        
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: 'url(/images/Gallery/SKYROCK82.jpg)' }}
        />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full blur-3xl"
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
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-6">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-white font-bold tracking-wider text-sm">YOUR SAFETY FIRST</span>
            <Zap className="w-4 h-4 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-2">
            WORLD-CLASS
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-400 to-emerald-500">SAFETY</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Your adventure is backed by international safety standards
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Rainbow border on hover */}
                <div className="relative p-[2px] rounded-2xl overflow-hidden">
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
                      backgroundSize: '400% 100%',
                      animation: 'rainbow-flow 8s linear infinite',
                    }}
                  />
                  <div className="absolute inset-0 rounded-2xl bg-white/10 group-hover:opacity-0 transition-opacity" />
                  
                  <div className="relative bg-[#0A1612] rounded-2xl p-6 h-full">
                    {/* Icon with gradient */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <cert.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Stat */}
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-1">
                      {cert.stat}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-white font-bold text-sm mb-1">{cert.title}</h3>
                    
                    {/* Description */}
                    <p className="text-white/50 text-xs">{cert.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Main Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Rainbow border */}
            <div className="relative p-[3px] rounded-3xl">
              <div 
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
                  backgroundSize: '400% 100%',
                  animation: 'rainbow-slow 15s linear infinite',
                }}
              />
              
              <div className="relative bg-[#0A1612] rounded-3xl p-8 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 11px)`,
                  }} />
                </div>
                
                {/* Content */}
                <div className="relative text-center">
                  {/* Big Shield Icon */}
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/30"
                  >
                    <Shield className="w-16 h-16 text-white" />
                  </motion.div>
                  
                  {/* Main Stat */}
                  <div className="text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-400 to-emerald-500 mb-2">
                    100%
                  </div>
                  <div className="text-white/60 text-lg uppercase tracking-widest mb-8">
                    Safety Record
                  </div>
                  
                  {/* Trust badges */}
                  <div className="flex flex-wrap justify-center gap-3">
                    {['EN 15567', 'PETZL', 'INSURED', 'CERTIFIED'].map((badge, i) => (
                      <motion.span
                        key={badge}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium flex items-center gap-2"
                      >
                        <BadgeCheck className="w-4 h-4 text-green-400" />
                        {badge}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -left-4 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg shadow-green-500/30"
            >
              <div className="flex items-center gap-2 text-white font-bold">
                <Lock className="w-4 h-4" />
                SECURE
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg shadow-orange-500/30"
            >
              <div className="flex items-center gap-2 text-white font-bold">
                <Star className="w-4 h-4 fill-white" />
                TOP RATED
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
