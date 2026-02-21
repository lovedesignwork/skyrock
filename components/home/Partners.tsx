'use client';

import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const partners = [
  'TripAdvisor',
  'Viator',
  'GetYourGuide',
  'Klook',
  'TAT',
  'Petzl',
];

export function Partners() {
  return (
    <section className="relative py-16 bg-[#0D2818] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 text-white/40 text-sm">
            <Award className="w-4 h-4" />
            Trusted By
          </span>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-white/30 hover:text-white/60 transition-colors text-lg font-semibold"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
