'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Car, Phone, Mail, Navigation, Plane, Hotel, Mountain } from 'lucide-react';

const locationInfo = {
  address: 'Khao Lak, Phang Nga, Thailand',
  hours: 'Daily: 8:30 AM - 5:00 PM',
  phone: '+66 XX XXX XXXX',
  email: 'info@skyrockkhaolak.com',
};

const distances = [
  { from: 'Khao Lak Beach', time: '15 mins', icon: Hotel },
  { from: 'Bang Niang Beach', time: '20 mins', icon: Hotel },
  { from: 'Phuket Airport', time: '90 mins', icon: Plane },
  { from: 'Phang Nga Town', time: '30 mins', icon: Mountain },
];

export function Location() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-[#0A1612]" />
        
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(/images/Gallery/SKYROCK99.jpg)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1612] via-transparent to-[#0A1612]" />
        
        {/* Sporty diagonal stripes */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              135deg,
              transparent,
              transparent 50px,
              #fff 50px,
              #fff 52px
            )`,
          }}
        />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl"
        />
      </div>

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
            <span className="text-accent font-bold tracking-[0.3em] text-sm">FIND US</span>
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-white mb-4">
            HOW TO <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-yellow-400 to-accent">GET HERE</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Located in the heart of Khao Lak's beautiful nature
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Rainbow border */}
            <div className="relative p-[3px] rounded-3xl h-full">
              <div 
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
                  backgroundSize: '400% 100%',
                  animation: 'rainbow-slow 15s linear infinite',
                }}
              />
              <div className="relative h-full bg-[#0A1612] rounded-3xl overflow-hidden">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[400px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63168.5!2d98.2!3d8.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKhao+Lak!5e0!3m2!1sen!2sth!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                {/* Get Directions Button - Floating */}
                <a
                  href="https://maps.google.com/?q=Khao+Lak+Thailand"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-6 left-6 px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-primary-dark font-bold rounded-xl flex items-center gap-2 hover:shadow-xl hover:shadow-accent/30 transition-all hover:-translate-y-1"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Address */}
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-white font-bold mb-1">Address</h4>
                <p className="text-white/60 text-sm">{locationInfo.address}</p>
              </div>

              {/* Hours */}
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-white font-bold mb-1">Opening Hours</h4>
                <p className="text-white/60 text-sm">{locationInfo.hours}</p>
              </div>

              {/* Phone */}
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-white font-bold mb-1">Phone</h4>
                <a href={`tel:${locationInfo.phone}`} className="text-white/60 text-sm hover:text-accent transition-colors">
                  {locationInfo.phone}
                </a>
              </div>

              {/* Email */}
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/30 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-white font-bold mb-1">Email</h4>
                <a href={`mailto:${locationInfo.email}`} className="text-white/60 text-sm hover:text-accent transition-colors break-all">
                  {locationInfo.email}
                </a>
              </div>
            </div>

            {/* Distances - Sporty Cards */}
            <div className="relative p-[2px] rounded-2xl">
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'linear-gradient(90deg, #ff0000, #ff8000, #ffff00, #00ff00, #00ffff, #0080ff, #8000ff, #ff0080, #ff0000)',
                  backgroundSize: '400% 100%',
                  animation: 'rainbow-flow 8s linear infinite',
                }}
              />
              <div className="relative bg-[#0A1612] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Car className="w-5 h-5 text-accent" />
                  <h4 className="text-white font-bold">Distance From</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {distances.map((item) => (
                    <div
                      key={item.from}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/30 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="text-white/50 text-xs">{item.from}</div>
                        <div className="text-accent font-bold">{item.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Transfer Info - Highlighted */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center flex-shrink-0">
                  <Hotel className="w-7 h-7 text-primary-dark" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Free Hotel Transfer</h4>
                  <p className="text-white/60 text-sm">
                    We offer complimentary pickup and drop-off from hotels in the Khao Lak area 
                    when you book our packages. Contact us for details.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
