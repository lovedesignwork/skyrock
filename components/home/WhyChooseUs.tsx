'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Leaf, Users, Zap, Trophy, Target, Heart } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'WORLD-CLASS SAFETY',
    description: 'European EN 15567 certified equipment with daily inspections.',
    stat: '100%',
    statLabel: 'Safety Record',
  },
  {
    icon: Trophy,
    title: 'TOP RATED',
    description: 'Consistently rated #1 adventure park in Khao Lak.',
    stat: '#1',
    statLabel: 'In Khao Lak',
  },
  {
    icon: Leaf,
    title: 'ECO-FRIENDLY',
    description: 'Operating in harmony with the rainforest ecosystem.',
    stat: '0',
    statLabel: 'Trees Harmed',
  },
  {
    icon: Users,
    title: 'EXPERT GUIDES',
    description: 'Professionally trained guides for your safety.',
    stat: '50+',
    statLabel: 'Pro Guides',
  },
];

const galleryImages = [
  '/images/Gallery/SKYROCK33.jpg',
  '/images/Gallery/SKYROCK56.jpg',
  '/images/Gallery/SKYROCK78.jpg',
  '/images/Gallery/SKYROCK91.jpg',
];

export function WhyChooseUs() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Background with Images */}
      <div className="absolute inset-0">
        {/* Main background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(/images/Gallery/SKYROCK44.jpg)` }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/80" />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1612] via-transparent to-[#0A1612]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1612] via-transparent to-[#0A1612]" />
      </div>

      {/* Diagonal Stripes Pattern - Sporty Element */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 20px,
            #fff 20px,
            #fff 22px
          )`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Sporty Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-accent" />
            <span className="text-accent font-bold tracking-[0.3em] text-sm">WHY CHOOSE</span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-4">
            SKY <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-400 to-accent">ROCK</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            The ultimate adventure experience in Khao Lak
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Left Features */}
          <div className="lg:col-span-4 space-y-6">
            {features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 overflow-hidden">
                  {/* Accent line */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent via-yellow-400 to-accent" />
                  
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-white/50 text-sm">{feature.description}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-accent">{feature.stat}</div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider">{feature.statLabel}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center - Image Collage */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Main center image */}
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 p-[3px] rounded-3xl" style={{
                  background: 'linear-gradient(135deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
                  backgroundSize: '400% 100%',
                  animation: 'rainbow-slow 15s linear infinite',
                }}>
                  <div className="w-full h-full rounded-3xl overflow-hidden">
                    <img
                      src="/images/Gallery/SKYROCK66.jpg"
                      alt="Sky Rock Adventure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating stat badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 px-5 py-3 bg-[#1B4332] rounded-2xl shadow-xl shadow-primary/30 border border-primary-light/30 text-center"
              >
                <div className="text-accent font-heading text-3xl">27</div>
                <div className="text-white/70 font-heading text-xs tracking-wider">PLATFORMS</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 px-5 py-3 bg-white rounded-2xl shadow-xl"
              >
                <div className="text-[#0A1612] font-bold text-2xl">50K+</div>
                <div className="text-[#0A1612]/70 text-xs font-medium">HAPPY GUESTS</div>
              </motion.div>

              {/* Small floating images */}
              <motion.div
                animate={{ rotate: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-1/4 -left-8 w-20 h-20 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg hidden lg:block"
              >
                <img src="/images/Gallery/SKYROCK22.jpg" alt="" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                animate={{ rotate: [0, -5, 0, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-1/4 -right-8 w-20 h-20 rounded-xl overflow-hidden border-2 border-white/20 shadow-lg hidden lg:block"
              >
                <img src="/images/Gallery/SKYROCK88.jpg" alt="" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Features */}
          <div className="lg:col-span-4 space-y-6">
            {features.slice(2, 4).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-300 overflow-hidden">
                  {/* Accent line */}
                  <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-accent via-yellow-400 to-accent" />
                  
                  <div className="flex items-start gap-4">
                    <div className="text-left">
                      <div className="text-2xl font-bold text-accent">{feature.stat}</div>
                      <div className="text-[10px] text-white/40 uppercase tracking-wider">{feature.statLabel}</div>
                    </div>
                    <div className="flex-grow text-right">
                      <h3 className="text-white font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-white/50 text-sm">{feature.description}</p>
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Bar - Sporty Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="relative">
            {/* Rainbow border */}
            <div 
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
                backgroundSize: '400% 100%',
                animation: 'rainbow-flow 8s linear infinite',
                padding: '2px',
              }}
            />
            <div className="relative bg-[#0A1612] rounded-2xl p-8 m-[2px]">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '2km', label: 'ZIPLINE LENGTH' },
                  { value: '4.9★', label: 'AVERAGE RATING' },
                  { value: '5+', label: 'YEARS EXPERIENCE' },
                  { value: '24/7', label: 'SUPPORT' },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/40 text-xs tracking-[0.2em]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
