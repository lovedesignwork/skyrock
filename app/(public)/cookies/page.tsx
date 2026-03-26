'use client';

import { motion } from 'framer-motion';
import { Cookie, Shield, BarChart3, Target, Settings, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Essential Cookies',
      description: 'Required for basic website functionality. Cannot be disabled.',
      gradient: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20',
      text: 'text-emerald-400'
    },
    {
      icon: BarChart3,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors use our website.',
      gradient: 'from-blue-500 to-indigo-500',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      text: 'text-blue-400'
    },
    {
      icon: Target,
      title: 'Marketing Cookies',
      description: 'Used for targeted advertising and remarketing.',
      gradient: 'from-purple-500 to-pink-500',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      text: 'text-purple-400'
    },
    {
      icon: Settings,
      title: 'Preference Cookies',
      description: 'Remember your settings and preferences.',
      gradient: 'from-amber-500 to-orange-500',
      bg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
      text: 'text-amber-400'
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A1612]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl" />
        </div>
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
              <Cookie className="w-4 h-4" />
              Cookie Information
            </span>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6">
              COOKIE{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                POLICY
              </span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Last updated: February 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types Cards */}
      <section className="relative pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-2 gap-4"
          >
            {cookieTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className={`p-5 rounded-2xl ${type.bg} border ${type.border} backdrop-blur-sm`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${type.gradient} flex items-center justify-center`}>
                    <type.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className={`font-semibold ${type.text}`}>{type.title}</h3>
                </div>
                <p className="text-white/60 text-sm">{type.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            {/* Glassmorphic Container */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl" />
              
              {/* Decorative Orbs */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-20 left-10 w-24 h-24 bg-pink-500/10 rounded-full blur-2xl" />
              
              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 space-y-10">
                {/* Section 1 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Cookie className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">1. What Are Cookies?</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>
                      Cookies are small text files that are stored on your device (computer, tablet, 
                      or mobile phone) when you visit a website. They are widely used to make websites 
                      work more efficiently and provide information to website owners.
                    </p>
                    <p>
                      This Cookie Policy explains how <strong className="text-white">SKY ROCK ADVENTURE CO., LTD.</strong> 
                      (operating as "SKY ROCK") uses cookies and similar technologies on our website.
                    </p>
                  </div>
                </div>

                {/* Section 2 - Essential Cookies */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">2. Types of Cookies We Use</h2>
                  </div>
                  <div className="pl-13 space-y-6">
                    {/* Essential Cookies */}
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-400 mb-3">2.1 Essential Cookies (Strictly Necessary)</h3>
                      <p className="text-white/70 mb-4">
                        These cookies are necessary for the website to function properly. They enable 
                        basic functions like page navigation, secure areas access, and booking functionality.
                      </p>
                      <div className="rounded-xl overflow-hidden border border-white/10">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-white/5">
                              <th className="text-left p-3 text-white font-medium">Cookie Name</th>
                              <th className="text-left p-3 text-white font-medium">Purpose</th>
                              <th className="text-left p-3 text-white font-medium">Duration</th>
                            </tr>
                          </thead>
                          <tbody className="text-white/60">
                            <tr className="border-t border-white/5">
                              <td className="p-3">session_id</td>
                              <td className="p-3">Maintains your session during booking</td>
                              <td className="p-3">Session</td>
                            </tr>
                            <tr className="border-t border-white/5">
                              <td className="p-3">csrf_token</td>
                              <td className="p-3">Security - prevents cross-site request forgery</td>
                              <td className="p-3">Session</td>
                            </tr>
                            <tr className="border-t border-white/5">
                              <td className="p-3">cookie_consent</td>
                              <td className="p-3">Stores your cookie preferences</td>
                              <td className="p-3">1 year</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Analytics Cookies */}
                    <div>
                      <h3 className="text-lg font-semibold text-blue-400 mb-3">2.2 Analytics Cookies</h3>
                      <p className="text-white/70 mb-4">
                        These cookies help us understand how visitors interact with our website by 
                        collecting and reporting information anonymously.
                      </p>
                      <div className="rounded-xl overflow-hidden border border-white/10">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-white/5">
                              <th className="text-left p-3 text-white font-medium">Cookie</th>
                              <th className="text-left p-3 text-white font-medium">Provider</th>
                              <th className="text-left p-3 text-white font-medium">Purpose</th>
                              <th className="text-left p-3 text-white font-medium">Duration</th>
                            </tr>
                          </thead>
                          <tbody className="text-white/60">
                            <tr className="border-t border-white/5">
                              <td className="p-3">_ga</td>
                              <td className="p-3">Google Analytics</td>
                              <td className="p-3">Distinguishes unique users</td>
                              <td className="p-3">2 years</td>
                            </tr>
                            <tr className="border-t border-white/5">
                              <td className="p-3">_ga_*</td>
                              <td className="p-3">Google Analytics 4</td>
                              <td className="p-3">Maintains session state</td>
                              <td className="p-3">2 years</td>
                            </tr>
                            <tr className="border-t border-white/5">
                              <td className="p-3">_gid</td>
                              <td className="p-3">Google Analytics</td>
                              <td className="p-3">Distinguishes users</td>
                              <td className="p-3">24 hours</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-3">2.3 Marketing Cookies</h3>
                      <p className="text-white/70 mb-4">
                        These cookies are used to track visitors across websites to display relevant advertisements.
                      </p>
                      <div className="rounded-xl overflow-hidden border border-white/10">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-white/5">
                              <th className="text-left p-3 text-white font-medium">Cookie</th>
                              <th className="text-left p-3 text-white font-medium">Provider</th>
                              <th className="text-left p-3 text-white font-medium">Purpose</th>
                              <th className="text-left p-3 text-white font-medium">Duration</th>
                            </tr>
                          </thead>
                          <tbody className="text-white/60">
                            <tr className="border-t border-white/5">
                              <td className="p-3">_fbp</td>
                              <td className="p-3">Meta (Facebook)</td>
                              <td className="p-3">Tracks visits for Facebook ads</td>
                              <td className="p-3">3 months</td>
                            </tr>
                            <tr className="border-t border-white/5">
                              <td className="p-3">_gcl_au</td>
                              <td className="p-3">Google Ads</td>
                              <td className="p-3">Conversion tracking</td>
                              <td className="p-3">3 months</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Preference Cookies */}
                    <div>
                      <h3 className="text-lg font-semibold text-amber-400 mb-3">2.4 Preference Cookies (Functional)</h3>
                      <p className="text-white/70 mb-4">
                        These cookies enable the website to remember choices you make and provide enhanced features.
                      </p>
                      <div className="rounded-xl overflow-hidden border border-white/10">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-white/5">
                              <th className="text-left p-3 text-white font-medium">Cookie Name</th>
                              <th className="text-left p-3 text-white font-medium">Purpose</th>
                              <th className="text-left p-3 text-white font-medium">Duration</th>
                            </tr>
                          </thead>
                          <tbody className="text-white/60">
                            <tr className="border-t border-white/5">
                              <td className="p-3">language</td>
                              <td className="p-3">Remembers your language preference</td>
                              <td className="p-3">1 year</td>
                            </tr>
                            <tr className="border-t border-white/5">
                              <td className="p-3">currency</td>
                              <td className="p-3">Remembers your currency preference</td>
                              <td className="p-3">1 year</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 3 - Third-Party Cookies */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <ExternalLink className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">3. Third-Party Cookies</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>Some cookies are placed by third-party services that appear on our pages. These include:</p>
                    <ul className="space-y-2">
                      {[
                        { name: 'Google Analytics', desc: 'Website analytics and performance measurement' },
                        { name: 'Google Tag Manager', desc: 'Tag management for marketing and analytics' },
                        { name: 'Meta (Facebook) Pixel', desc: 'Advertising and conversion tracking' },
                        { name: 'Stripe', desc: 'Secure payment processing' }
                      ].map((item) => (
                        <li key={item.name} className="flex items-start gap-3">
                          <span className="w-2 h-2 mt-2 rounded-full bg-cyan-400 flex-shrink-0" />
                          <span><strong className="text-white">{item.name}:</strong> {item.desc}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {[
                        { name: 'Google Privacy', url: 'https://policies.google.com/privacy' },
                        { name: 'Meta Privacy', url: 'https://www.facebook.com/privacy/policy/' },
                        { name: 'Stripe Privacy', url: 'https://stripe.com/privacy' }
                      ].map((link) => (
                        <a
                          key={link.name}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm"
                        >
                          {link.name}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Section 4 - Managing Cookies */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">4. Managing Cookies</h2>
                  </div>
                  <div className="pl-13 space-y-6 text-white/70 leading-relaxed">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">4.1 Cookie Consent</h3>
                      <p>When you first visit our website, you will see a cookie consent banner that allows you to accept or customize your cookie preferences.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">4.2 Browser Settings</h3>
                      <p className="mb-3">Most web browsers allow you to control cookies through their settings. You can:</p>
                      <ul className="space-y-2 mb-4">
                        {[
                          'View what cookies are stored on your device',
                          'Delete all or specific cookies',
                          'Block cookies from all or specific websites',
                          'Be notified when a cookie is set'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 rounded-full bg-orange-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-3">
                        {[
                          { name: 'Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                          { name: 'Firefox', url: 'https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer' },
                          { name: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
                          { name: 'Edge', url: 'https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
                        ].map((link) => (
                          <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition-colors text-sm"
                          >
                            {link.name}
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">4.3 Impact of Disabling Cookies</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          { type: 'Essential disabled', impact: 'You may not be able to complete bookings', color: 'red' },
                          { type: 'Preference disabled', impact: "Your settings won't be remembered", color: 'amber' },
                          { type: 'Analytics disabled', impact: 'No impact on functionality', color: 'green' },
                          { type: 'Marketing disabled', impact: "Ads won't be personalized", color: 'blue' }
                        ].map((item) => (
                          <div key={item.type} className={`p-3 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20`}>
                            <p className={`text-${item.color}-400 font-medium text-sm`}>{item.type}</p>
                            <p className="text-white/60 text-sm mt-1">{item.impact}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sections 5-6 */}
                <div className="space-y-8">
                  <div className="space-y-3">
                    <h2 className="text-xl font-bold text-white">5. Similar Technologies</h2>
                    <p className="text-white/70 leading-relaxed">
                      In addition to cookies, we may use similar technologies such as Local Storage, 
                      Session Storage, and Pixels/Web Beacons. These technologies are subject to the 
                      same consent requirements as cookies.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h2 className="text-xl font-bold text-white">6. Updates to This Policy</h2>
                    <p className="text-white/70 leading-relaxed">
                      We may update this Cookie Policy from time to time to reflect changes in technology, 
                      legislation, or our business practices. The "Last updated" date at the top indicates 
                      when the policy was last revised.
                    </p>
                  </div>
                </div>

                {/* Section 7 - Contact */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">7. Contact Us</h2>
                  </div>
                  <div className="pl-13 space-y-4">
                    <p className="text-white/70">
                      If you have questions about our use of cookies or this Cookie Policy, please contact us:
                    </p>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-white/70">
                          <Mail className="w-4 h-4 text-purple-400" />
                          <span>privacy@skyrockkhaolak.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/70">
                          <Phone className="w-4 h-4 text-purple-400" />
                          <span>+66 62 979 5533</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/70">
                          <MapPin className="w-4 h-4 text-purple-400" />
                          <span>Khao Lak, Phang Nga, Thailand</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-white/70">
                      For more information about how we handle your personal data, please see our{' '}
                      <Link href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">
                        Privacy Policy
                      </Link>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
