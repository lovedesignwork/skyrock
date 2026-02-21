'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TreePine, Users, Award, Shield, Heart, MapPin, Calendar, ChevronRight } from 'lucide-react';

const stats = [
  { value: '2020', label: 'Established' },
  { value: '50K+', label: 'Happy Guests' },
  { value: '27', label: 'Platforms' },
  { value: '2km', label: 'Zipline Length' },
];

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'We use European EN 15567 certified equipment and conduct daily safety inspections.',
  },
  {
    icon: TreePine,
    title: 'Eco-Friendly',
    description: 'We operate in harmony with nature, preserving the rainforest ecosystem.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Our team is passionate about creating unforgettable adventure experiences.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We support local communities and employ local guides and staff.',
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#0A1612]">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B4332]/50 to-transparent" />
        <div className="absolute inset-0 bg-pattern-leaves opacity-20" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-6">
              <TreePine className="w-4 h-4" />
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-6">
              ABOUT <span className="gradient-text">SKY ROCK</span>
            </h1>
            <p className="text-white/60 text-lg">
              Khao Lak's premier zipline adventure park, where nature meets adventure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/30 rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/50 text-sm uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                <img
                  src="/images/Gallery/SKYROCK109.jpg"
                  alt="Sky Rock Adventure"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 px-6 py-4 bg-accent rounded-2xl shadow-xl"
              >
                <div className="text-primary-dark font-bold text-lg">Since 2020</div>
                <div className="text-primary-dark/70 text-sm">Khao Lak, Thailand</div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                OUR <span className="gradient-text">STORY</span>
              </h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Sky Rock was born from a passion for adventure and a deep love for the 
                  stunning natural beauty of Khao Lak. Established in 2020, we set out to 
                  create an eco-friendly adventure experience that would allow visitors to 
                  experience the rainforest from a unique perspective.
                </p>
                <p>
                  Our 27-platform zipline course was carefully designed to minimize 
                  environmental impact while maximizing the thrill of soaring through the 
                  ancient trees. Every platform, every zipline, and every sky bridge was 
                  built with both safety and sustainability in mind.
                </p>
                <p>
                  Today, we're proud to be one of Khao Lak's top-rated attractions, having 
                  welcomed over 50,000 adventurers from around the world. Our team of 
                  professional guides ensures that every guest has a safe, memorable, and 
                  exhilarating experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-[#0A1612] to-[#0D2818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-4">
              OUR <span className="gradient-text">VALUES</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/30 transition-all text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-[#0D2818]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
                FIND <span className="gradient-text">US</span>
              </h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Address</h4>
                    <p className="text-white/60">Khao Lak, Phang Nga, Thailand</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Opening Hours</h4>
                    <p className="text-white/60">Daily: 8:30 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold rounded-xl flex items-center gap-2 hover:shadow-xl hover:shadow-accent/20 transition-all">
                  CONTACT US
                  <ChevronRight className="w-5 h-5" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="aspect-video rounded-2xl overflow-hidden border border-primary/30"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63168.5!2d98.2!3d8.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKhao+Lak!5e0!3m2!1sen!2sth!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="grayscale contrast-125"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0A1612]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading text-white mb-6">
              READY FOR YOUR <span className="gradient-text">ADVENTURE?</span>
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Join thousands of adventurers who have experienced the thrill of Sky Rock
            </p>
            <Link href="/booking">
              <button className="px-10 py-5 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold text-lg rounded-xl flex items-center gap-3 mx-auto hover:shadow-2xl hover:shadow-accent/30 transition-all hover:-translate-y-1">
                <TreePine className="w-6 h-6" />
                BOOK YOUR ADVENTURE
                <ChevronRight className="w-6 h-6" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
