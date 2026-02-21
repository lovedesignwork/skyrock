'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TreePine, ArrowRight, Sparkles } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/Gallery/SKYROCK108.jpg)' }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A1612]/95 via-[#0A1612]/80 to-[#0A1612]/95" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-light to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              Limited Time Offer
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6">
              READY FOR YOUR <span className="gradient-text">ADVENTURE?</span>
            </h2>
            
            <p className="text-white/70 text-lg mb-8">
              Book now and experience the thrill of soaring through Khao Lak's 
              ancient rainforest. Create memories that will last a lifetime.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/booking">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold rounded-xl flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-accent/30 transition-all"
                >
                  <TreePine className="w-5 h-5" />
                  BOOK YOUR ADVENTURE
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link href="/contact">
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold rounded-xl transition-all">
                  CONTACT US
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Price Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/20 rounded-3xl blur-2xl" />
              
              <div className="relative bg-gradient-to-br from-primary/40 to-primary/20 backdrop-blur-sm border border-primary/30 rounded-3xl p-8 text-center min-w-[280px]">
                <div className="text-white/60 text-sm uppercase tracking-wider mb-2">
                  Starting From
                </div>
                <div className="text-5xl md:text-6xl font-bold gradient-text mb-2">
                  ฿1,000
                </div>
                <div className="text-white/50 text-sm mb-6">per person</div>
                
                <div className="space-y-2 text-left mb-6">
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Professional guides included
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Safety equipment provided
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Insurance included
                  </div>
                </div>

                <Link href="/booking" className="block">
                  <button className="w-full py-3 bg-accent hover:bg-accent-light text-primary-dark font-bold rounded-xl transition-all">
                    VIEW PACKAGES
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
