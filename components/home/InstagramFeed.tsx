'use client';

import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, ExternalLink, Zap, Sparkles } from 'lucide-react';

const instagramPosts = [
  { src: '/images/Gallery/SKYROCK102.jpg', likes: 892, comments: 45 },
  { src: '/images/Gallery/SKYROCK103.jpg', likes: 1247, comments: 89 },
  { src: '/images/Gallery/SKYROCK104.jpg', likes: 756, comments: 32 },
  { src: '/images/Gallery/SKYROCK105.jpg', likes: 2103, comments: 156 },
  { src: '/images/Gallery/SKYROCK106.jpg', likes: 634, comments: 28 },
  { src: '/images/Gallery/SKYROCK107.jpg', likes: 1589, comments: 94 },
  { src: '/images/Gallery/SKYROCK108.jpg', likes: 943, comments: 51 },
  { src: '/images/Gallery/SKYROCK109.jpg', likes: 1876, comments: 112 },
];

export function InstagramFeed() {
  return (
    <section className="relative overflow-hidden">
      {/* Full Section Background - Sporty Style */}
      <div className="absolute inset-0 bg-[#0A1612]">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-r from-orange-600/20 to-yellow-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 60, 0], y: [0, -30, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-cyan-600/15 to-blue-600/15 rounded-full blur-3xl"
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

        {/* Shining gradient sweep */}
        <motion.div
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-[0.03]"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
            width: '50%',
          }}
        />
      </div>

      {/* Header Section */}
      <div className="relative py-20 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-white font-bold tracking-wider text-sm">SOCIAL FEED</span>
              <Zap className="w-4 h-4 text-yellow-400" />
            </div>
          </div>
          
          {/* Title */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-2">
              FOLLOW THE
            </h2>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">ADVENTURE</span>
            </h2>
          </div>

          {/* Instagram Handle */}
          <a
            href="https://instagram.com/skyrockkhaolak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-orange-400/20 border border-purple-500/30 hover:border-pink-500/50 transition-all group"
          >
            <Instagram className="w-5 h-5 text-pink-400" />
            <span className="text-white font-bold tracking-wider">@skyrockkhaolak</span>
            <ExternalLink className="w-4 h-4 text-white/50 group-hover:text-pink-400 transition-colors" />
          </a>
          
          <p className="text-white/50 text-lg max-w-xl mx-auto px-4">
            Join our community and share your Sky Rock moments
          </p>
        </motion.div>
      </div>

      {/* Full Width Image Grid - Uniform Size */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-1 px-1">
        {instagramPosts.map((post, index) => (
          <motion.a
            key={index}
            href="https://instagram.com/skyrockkhaolak"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="relative aspect-square overflow-hidden group rounded-lg"
          >
            {/* Image */}
            <img
              src={post.src}
              alt={`Instagram post ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-3">
              <div className="flex items-center gap-6 text-white">
                <span className="flex items-center gap-2">
                  <Heart className="w-6 h-6 fill-white" />
                  <span className="font-bold">{post.likes.toLocaleString()}</span>
                </span>
                <span className="flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 fill-white" />
                  <span className="font-bold">{post.comments}</span>
                </span>
              </div>
              <Instagram className="w-8 h-8 text-white/80" />
            </div>

            {/* Rainbow glow on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg ring-3 ring-pink-500"
            />
          </motion.a>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="relative z-10 py-20 text-center">
        {/* Shining line */}
        <div className="absolute top-0 left-0 right-0 h-px overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            className="h-full w-1/2"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(236,72,153,0.8), transparent)',
            }}
          />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Rainbow border button */}
          <a
            href="https://instagram.com/skyrockkhaolak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block relative p-[3px] rounded-2xl overflow-hidden group"
          >
            {/* Animated rainbow border */}
            <span 
              className="absolute inset-0 rounded-2xl"
              style={{
                background: 'linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045, #833ab4)',
                backgroundSize: '300% 100%',
                animation: 'rainbow-flow 4s linear infinite',
              }}
            />
            {/* Button content */}
            <span 
              className="relative flex items-center gap-3 px-10 py-5 bg-[#0A1612] rounded-[13px] text-white group-hover:bg-transparent transition-all duration-300"
              style={{ fontFamily: 'var(--font-heading)', fontSize: '20px' }}
            >
              <Instagram className="w-7 h-7" />
              Follow Us on Instagram
              <Sparkles className="w-5 h-5 text-yellow-400" />
            </span>
          </a>
          
          <p className="text-white/40 text-sm">
            Tag us with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 font-bold">#SkyRockKhaoLak</span> for a chance to be featured!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
