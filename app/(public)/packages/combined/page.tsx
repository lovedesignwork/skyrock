'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Utensils, Clock, Users, ChevronRight, Star, Zap } from 'lucide-react';
import { packages } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';

const statLabels: Record<string, string> = {
  platforms: 'Platforms',
  ziplines: 'Ziplines',
  skyBridge: 'Sky Bridges',
  abseilPoints: 'Abseil Points',
};

export default function CombinedPackagesPage() {
  // Get all packages
  const allPackages = packages;

  return (
    <main className="min-h-screen pt-24 bg-[#0A1612] relative overflow-hidden">
      {/* Full Page Background - Sporty Style */}
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
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-cyan-600/20 to-blue-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-gradient-to-r from-yellow-600/15 to-orange-600/15 rounded-full blur-3xl"
        />
        
        {/* Sporty diagonal lines */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, #fff 40px, #fff 42px)`,
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

      {/* Hero Section */}
      <section className="relative py-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-white font-bold tracking-wider text-sm">ALL PACKAGES</span>
              <Zap className="w-4 h-4 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-2">
              CHOOSE YOUR
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">ADVENTURE</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              From beginner-friendly courses to our ultimate 27-platform experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages List */}
      <section className="relative py-12 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {allPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Rainbow Border Wrapper */}
              <div className="relative p-[3px] rounded-3xl overflow-hidden group">
                {/* Animated Rainbow Gradient Border */}
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
                    <div className="relative h-72 lg:h-auto lg:min-h-[400px] overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${pkg.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1612] to-transparent lg:hidden" />
                      
                      {/* Badges */}
                      <div className="absolute top-6 left-6 flex flex-col gap-2">
                        {pkg.popular && (
                          <span className="px-4 py-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-bold rounded-full flex items-center gap-2 shadow-lg shadow-orange-500/30">
                            <Star className="w-4 h-4 fill-current" />
                            BEST VALUE
                          </span>
                        )}
                        <span className="px-4 py-2 bg-black/40 backdrop-blur-sm text-white text-sm rounded-full flex items-center gap-1 border border-white/20">
                          <Clock className="w-4 h-4" />
                          {pkg.duration}
                        </span>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-3xl lg:text-4xl font-heading text-white mb-4">
                        {pkg.name}
                      </h2>
                      
                      {/* Stats Grid */}
                      {pkg.stats && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                          {Object.entries(pkg.stats).map(([key, value]) => (
                            <div key={key} className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                              <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">{value}</div>
                              <div className="text-xs text-white/50 uppercase tracking-wider mt-1">
                                {statLabels[key] || key}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      <p className="text-white/70 mb-6">{pkg.description}</p>

                      {/* Includes */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {pkg.includesMeal && (
                          <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 text-green-400 rounded-full text-sm">
                            <Utensils className="w-4 h-4" />
                            Meal Included
                          </span>
                        )}
                        <span className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 rounded-full text-sm">
                          <Users className="w-4 h-4" />
                          Professional Guides
                        </span>
                      </div>

                      {/* Price & CTA */}
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div>
                          <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
                            {formatPrice(pkg.price)}
                          </div>
                          <div className="text-white/50 text-sm">per person</div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Link href={`/packages/${pkg.slug}`}>
                            <button className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold rounded-xl flex items-center gap-2 transition-all hover:-translate-y-1">
                              VIEW DETAILS
                            </button>
                          </Link>
                          <Link href={`/booking?package=${pkg.id}`}>
                            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white font-bold rounded-xl flex items-center gap-2 hover:shadow-xl hover:shadow-pink-500/30 transition-all hover:-translate-y-1">
                              BOOK NOW
                              <ChevronRight className="w-5 h-5" />
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
