'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Zap,
  ChevronRight,
  Heart
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'Packages', href: '/packages/combined' },
  { name: 'About Us', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'FAQ', href: '/faq' },
];

const packages = [
  { name: 'ROCK 1 - 27 Platforms', href: '/booking?package=rock-1' },
  { name: 'ROCK 2 - 14 Platforms', href: '/booking?package=rock-2' },
  { name: 'ROCK 3 - 10 Platforms', href: '/booking?package=rock-3' },
  { name: 'Roller Zipline', href: '/packages/roller' },
];

const legal = [
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Refund Policy', href: '/refund' },
  { name: 'Safety Guidelines', href: '/safety' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/skyrockkhaolak', color: 'hover:bg-blue-600' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/skyrockkhaolak', color: 'hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-400' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@skyrockkhaolak', color: 'hover:bg-red-600' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A1612]">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-r from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl"
        />
        
        {/* Sporty diagonal lines */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 40px, #fff 40px, #fff 42px)`,
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Top Rainbow Border */}
      <div 
        className="h-1"
        style={{
          background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
          backgroundSize: '400% 100%',
          animation: 'rainbow-flow 8s linear infinite',
        }}
      />
      
      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/skyrocklogo.png"
                alt="Sky Rock"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Experience the thrill of ziplining through Khao Lak's pristine rainforest. 
              Your adventure awaits among the ancient trees.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:border-transparent hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-pink-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Packages */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              Our Packages
            </h4>
            <ul className="space-y-3">
              {packages.map((pkg) => (
                <li key={pkg.name}>
                  <Link
                    href={pkg.href}
                    className="text-white/50 hover:text-white transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-pink-400" />
                    {pkg.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold mb-6 flex items-center gap-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 text-pink-400" />
                </div>
                <span className="text-white/50 text-sm">
                  Khao Lak, Phang Nga<br />Thailand
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-4 h-4 text-pink-400" />
                </div>
                <a href="tel:+66XXXXXXXX" className="text-white/50 hover:text-white text-sm transition-colors">
                  +66 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 text-pink-400" />
                </div>
                <a href="mailto:info@skyrockkhaolak.com" className="text-white/50 hover:text-white text-sm transition-colors">
                  info@skyrockkhaolak.com
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Clock className="w-4 h-4 text-pink-400" />
                </div>
                <span className="text-white/50 text-sm">
                  Daily: 8:30 AM - 5:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>© {new Date().getFullYear()} SKY ROCK ADVENTURE CO., LTD.</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-pink-500 fill-pink-500" /> in Thailand
            </span>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/40 hover:text-white/70 text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Rainbow Border */}
      <div 
        className="h-1"
        style={{
          background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
          backgroundSize: '400% 100%',
          animation: 'rainbow-flow 8s linear infinite',
        }}
      />
    </footer>
  );
}
