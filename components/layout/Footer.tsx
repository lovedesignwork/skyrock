'use client';

import Link from 'next/link';
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '@/components/ui';

const footerLinks = {
  combinedPackages: [
    { name: 'World A+', href: '/packages/combined' },
    { name: 'World B+', href: '/packages/combined' },
    { name: 'World C+', href: '/packages/combined' },
    { name: 'World D+', href: '/packages/combined' },
  ],
  activities: [
    { name: '32 Platform Zipline', href: '/packages/zipline' },
    { name: 'Roller Zipline', href: '/packages/roller' },
    { name: 'Skywalk', href: '/packages/skywalk' },
    { name: 'Slingshot', href: '/packages/slingshot' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Safety Info', href: '/safety' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Refund Policy', href: '/refund' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
};

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/skyrockkhaolak' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/skyrockkhaolak' },
  { name: 'YouTube', icon: Youtube, href: 'https://youtube.com/@skyrockkhaolak' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10" style={{ backgroundColor: '#DC2626' }}>
      {/* Swirl background decorations */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,186.7C960,213,1056,235,1152,218.7C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,90.7C672,85,768,107,864,128C960,149,1056,171,1152,165.3C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          transform: 'rotate(180deg)',
        }}
      />
      
      <Container className="relative z-10">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4 font-heading">
              SKY ROCK
            </h3>
            <p className="text-white/80 mb-4 text-sm">
              Thailand&apos;s premier zipline adventure park in Khao Lak. Experience thrilling adventures above the jungle canopy.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-heading">
              PACKAGES
            </h4>
            <ul className="space-y-2">
              {footerLinks.combinedPackages.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-heading">
              ACTIVITIES
            </h4>
            <ul className="space-y-2">
              {footerLinks.activities.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-heading">
              COMPANY
            </h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-heading">
              CONTACT
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 text-white flex-shrink-0" />
                <span className="text-sm">Khao Lak, Phang Nga, Thailand</span>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <a href="tel:+66XXXXXXXXX" className="hover:text-white transition-colors text-sm">
                  +66 XX XXX XXXX
                </a>
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <a href="mailto:info@skyrockkhaolak.com" className="hover:text-white transition-colors text-sm">
                  info@skyrockkhaolak.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-center text-white/80 text-sm">
            &copy; {new Date().getFullYear()} SKY ROCK ADVENTURE CO., LTD. All rights reserved.
          </p>
          <p className="text-center text-white/60 text-xs mt-1">
            Online payments processed by Chamnanthang Co., Ltd. (ONEBOOKING)
          </p>
        </div>
      </Container>
    </footer>
  );
}
