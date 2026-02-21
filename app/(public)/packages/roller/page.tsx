'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Users, Zap, ChevronRight, Star, Play } from 'lucide-react';
import { packages } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';

export default function RollerPage() {
  const rollerPackage = packages.find(pkg => pkg.id === 'roller');

  if (!rollerPackage) {
    return (
      <main className="min-h-screen pt-24 bg-[#0A1612] flex items-center justify-center">
        <p className="text-white">Package not found</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 bg-[#0A1612]">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${rollerPackage.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1612]/95 via-[#0A1612]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1612] via-transparent to-[#0A1612]/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Unique Experience
            </span>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6">
              THE <span className="gradient-text">ROLLER</span>
            </h1>
            
            <p className="text-xl text-white/70 mb-8">
              {rollerPackage.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full">
                <Clock className="w-4 h-4 text-accent" />
                {rollerPackage.duration}
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full">
                <Users className="w-4 h-4 text-accent" />
                All Ages Welcome
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div>
                <div className="text-5xl font-bold gradient-text">
                  {formatPrice(rollerPackage.price)}
                </div>
                <div className="text-white/50">per person</div>
              </div>
              <Link href={`/booking?package=${rollerPackage.id}`}>
                <button className="px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold rounded-xl flex items-center gap-3 hover:shadow-2xl hover:shadow-accent/30 transition-all hover:-translate-y-1">
                  <Zap className="w-5 h-5" />
                  BOOK THE ROLLER
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-[#0A1612] to-[#0D2818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
              WHAT MAKES IT <span className="gradient-text">SPECIAL</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A unique zipline experience unlike any other
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Unique Design',
                description: 'A special roller mechanism that lets you glide smoothly through the jungle canopy.',
              },
              {
                icon: Star,
                title: 'Thrilling Speed',
                description: 'Experience the rush of speed as you roll through the treetops.',
              },
              {
                icon: Users,
                title: 'Family Friendly',
                description: 'Safe and exciting for adventurers of all ages and experience levels.',
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary-dark" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0D2818]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
              READY TO <span className="gradient-text">ROLL?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Book your roller zipline experience today and feel the thrill!
            </p>
            <Link href={`/booking?package=${rollerPackage.id}`}>
              <button className="px-10 py-5 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold text-lg rounded-xl flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-accent/30 transition-all hover:-translate-y-1">
                <Zap className="w-6 h-6" />
                BOOK NOW - {formatPrice(rollerPackage.price)}
                <ChevronRight className="w-6 h-6" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
