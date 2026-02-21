'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { TreePine, Clock, Users, Utensils, ChevronRight, Star, Zap, Sparkles } from 'lucide-react';
import { packages } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';

const statIcons: Record<string, any> = {
  platforms: TreePine,
  ziplines: Zap,
  skyBridge: TreePine,
  abseilPoints: TreePine,
};

export function FeaturedPackages() {
  const rock1 = packages.find(pkg => pkg.id === 'rock-1');
  const otherPackages = packages.filter(pkg => pkg.id !== 'rock-1');

  return (
    <section className="relative py-24 bg-[#0A1612] overflow-hidden">
      {/* Background - Sporty Style */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-3xl"
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
            <span className="text-white font-bold tracking-wider text-sm">CHOOSE YOUR ADVENTURE</span>
            <Zap className="w-4 h-4 text-yellow-400" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-2">
            OUR ADVENTURE
          </h2>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">PACKAGES</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            From beginner-friendly courses to our ultimate 27-platform adventure
          </p>
        </motion.div>

        {/* Featured Package - ROCK 1 */}
        {rock1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            {/* Rainbow Border Wrapper */}
            <div className="relative p-[3px] rounded-3xl overflow-hidden group">
              {/* Slow Animated Rainbow Gradient Border */}
              <div 
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
                  backgroundSize: '400% 100%',
                  animation: 'rainbow-slow 15s linear infinite',
                }}
              />
              
              {/* Card Content */}
              <div className="relative rounded-3xl overflow-hidden bg-[#0A1612]">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-80 lg:h-auto lg:min-h-[500px] overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${rock1.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1612] to-transparent lg:hidden" />
                    
                    {/* Badges */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <span className="px-4 py-2 bg-accent text-primary-dark text-sm font-bold rounded-full flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        BEST VALUE
                      </span>
                      <span className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white text-sm rounded-full border border-white/20">
                        {rock1.duration}
                      </span>
                    </div>
                  </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl lg:text-4xl font-heading text-white mb-4">
                    {rock1.name}
                  </h3>
                  
                  {/* Stats Grid */}
                  {rock1.stats && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                      {Object.entries(rock1.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="text-2xl font-bold text-accent">{value}</div>
                          <div className="text-xs text-white/50 uppercase tracking-wider mt-1">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <p className="text-white/70 mb-6">{rock1.description}</p>

                  {/* Includes */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {rock1.includesMeal && (
                      <span className="flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full text-sm">
                        <Utensils className="w-4 h-4" />
                        Meal Included
                      </span>
                    )}
                    <span className="flex items-center gap-2 px-4 py-2 bg-primary/20 text-primary-light rounded-full text-sm">
                      <Users className="w-4 h-4" />
                      Professional Guides
                    </span>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-4xl font-bold text-white">
                        {formatPrice(rock1.price)}
                      </div>
                      <div className="text-white/50 text-sm">per person</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Link href={`/packages/${rock1.id}`}>
                        <button className="px-6 py-4 bg-transparent text-white font-bold rounded-xl flex items-center gap-2 border border-white/30 hover:border-white/60 transition-all hover:-translate-y-1">
                          VIEW DETAILS
                        </button>
                      </Link>
                      <Link href={`/booking?package=${rock1.id}`}>
                        <div className="relative p-[2px] rounded-xl overflow-hidden group/btn">
                          <div 
                            className="absolute inset-0 rounded-xl"
                            style={{
                              background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
                              backgroundSize: '400% 100%',
                              animation: 'rainbow-slow 38s linear infinite',
                            }}
                          />
                          <button className="relative px-8 py-4 bg-[#0A1612] group-hover/btn:bg-transparent text-white group-hover/btn:text-primary-dark font-bold rounded-xl flex items-center gap-2 transition-all">
                            BOOK NOW
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Other Packages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Rainbow Border Wrapper */}
              <div className="relative p-[2px] rounded-3xl overflow-hidden group">
                {/* Animated Rainbow Gradient Border */}
                <div 
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
                    backgroundSize: '400% 100%',
                    animation: 'rainbow-flow 8s linear infinite',
                  }}
                />
                
                {/* Card Content */}
                <div className="relative h-full flex flex-col rounded-3xl overflow-hidden bg-[#0A1612]">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${pkg.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1612] via-transparent to-transparent" />
                    
                    {/* Duration Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-black/40 backdrop-blur-sm text-white text-xs rounded-full flex items-center gap-1 border border-white/20">
                        <Clock className="w-3 h-3" />
                        {pkg.duration}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-heading text-white mb-2">{pkg.name}</h3>
                    
                    {/* Stats */}
                    {pkg.stats && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {Object.entries(pkg.stats).slice(0, 3).map(([key, value]) => (
                          <span key={key} className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-lg border border-white/10">
                            {value} {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-white/60 text-sm mb-6 flex-grow">{pkg.shortDescription}</p>

                    {/* Price & CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div>
                        <div className="text-2xl font-bold text-white">{formatPrice(pkg.price)}</div>
                        <div className="text-white/40 text-xs">per person</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link href={`/packages/${pkg.id}`}>
                          <button className="px-3 py-2 bg-transparent text-white/70 hover:text-white text-xs font-bold rounded-lg transition-all border border-white/20 hover:border-white/40">
                            DETAILS
                          </button>
                        </Link>
                        <Link href={`/booking?package=${pkg.id}`}>
                          <div className="relative p-[2px] rounded-xl overflow-hidden group/btn">
                            <div 
                              className="absolute inset-0 rounded-xl"
                              style={{
                                background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
                                backgroundSize: '400% 100%',
                                animation: 'rainbow-flow 20s linear infinite',
                              }}
                            />
                            <button className="relative px-4 py-2 bg-[#0A1612] group-hover/btn:bg-transparent text-white group-hover/btn:text-primary-dark font-bold rounded-[10px] transition-all flex items-center gap-1 text-sm">
                              BOOK
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/packages/combined">
            <button className="px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold rounded-xl flex items-center gap-2 mx-auto hover:shadow-xl hover:shadow-accent/30 transition-all hover:-translate-y-1">
              <TreePine className="w-5 h-5" />
              VIEW ALL PACKAGES
              <ChevronRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
