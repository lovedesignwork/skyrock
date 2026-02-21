'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, TreePine } from 'lucide-react';

const navigation = [
  { name: 'HOME', href: '/' },
  { name: 'PACKAGES', href: '/packages/combined' },
  { name: 'ROLLER', href: '/packages/roller' },
  { name: 'ABOUT', href: '/about' },
  { name: 'BLOG', href: '/blog' },
  { name: 'CONTACT', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0A1612]/95 backdrop-blur-xl shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src="/images/skyrocklogo.png"
                alt="Sky Rock"
                width={160}
                height={60}
                className="h-14 lg:h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-5 py-2 text-white/80 hover:text-white transition-colors group"
                style={{ fontFamily: 'var(--font-heading)', fontSize: '22px' }}
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="relative p-[3px] rounded-xl overflow-hidden group"
              >
                {/* Animated Rainbow Border */}
                <span 
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
                    backgroundSize: '400% 100%',
                    animation: 'rainbow-flow 13s linear infinite',
                  }}
                />
                {/* Button Content */}
                <span className="relative flex items-center gap-2 px-8 py-3 bg-[#0A1612] rounded-[10px] text-white group-hover:bg-transparent transition-all duration-300" style={{ fontFamily: 'var(--font-heading)', fontSize: '22px' }}>
                  <TreePine className="w-5 h-5" />
                  BOOK NOW
                </span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A1612]/98 backdrop-blur-xl border-t border-primary/20"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 space-y-2">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3 text-white/80 hover:text-white hover:bg-primary/20 rounded-xl transition-all"
                    style={{ fontFamily: 'var(--font-heading)', fontSize: '22px' }}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navigation.length * 0.1 }}
                className="pt-4"
              >
                <Link href="/booking" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full px-6 py-4 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold rounded-xl flex items-center justify-center gap-2">
                    <TreePine className="w-5 h-5" />
                    BOOK YOUR ADVENTURE
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
