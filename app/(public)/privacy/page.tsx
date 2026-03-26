'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, Phone, MapPin, FileText } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A1612]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-orange-500/15 to-yellow-500/15 rounded-full blur-3xl" />
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Your Privacy Matters
            </span>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6">
              PRIVACY{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                POLICY
              </span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Last updated: February 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            {/* Glassmorphic Container */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl" />
              
              {/* Decorative Orbs */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-20 left-10 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl" />
              
              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 space-y-10">
                {/* Section 1 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>
                      This Privacy Policy explains how <strong className="text-white">SKY ROCK ADVENTURE CO., LTD.</strong> 
                      (operating as "SKY ROCK") and <strong className="text-white">Chamnanthang Co., Ltd.</strong> 
                      (operating as "ONEBOOKING" for online payment processing) collect, use, disclose, 
                      and safeguard your information when you visit our website or use our services.
                    </p>
                    <p>
                      We are committed to protecting your privacy and complying with the Thailand 
                      Personal Data Protection Act (PDPA) and other applicable data protection laws.
                    </p>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">2. Data Controllers</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>For the purposes of this Privacy Policy:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span><strong className="text-white">SKY ROCK ADVENTURE CO., LTD.</strong> is the data controller for information related to your visit, activities, and general customer service.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span><strong className="text-white">Chamnanthang Co., Ltd. (ONEBOOKING)</strong> is the data controller for online booking and payment processing. Your credit card statement will display payments as "ONEBOOKING".</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">3. Information We Collect</h2>
                  </div>
                  <div className="pl-13 space-y-6 text-white/70 leading-relaxed">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">3.1 Personal Information</h3>
                      <p className="mb-3">We may collect personal information that you provide to us, including:</p>
                      <ul className="space-y-2">
                        {['Name (first and last)', 'Email address', 'Phone number and country code', 'Hotel name and room number (for pickup services)', 'Special requests, dietary requirements, or accessibility needs'].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 rounded-full bg-orange-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">3.2 Payment Information</h3>
                      <p>
                        Payment information is processed securely by our payment processor, Stripe. 
                        We do not store your full credit card details on our servers. Stripe is 
                        PCI-DSS Level 1 certified, the highest level of certification in the payment industry.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3">3.3 Automatically Collected Information</h3>
                      <p className="mb-3">When you visit our website, we may automatically collect:</p>
                      <ul className="space-y-2">
                        {['IP address', 'Browser type and version', 'Device type and operating system', 'Pages visited and time spent on each page', 'Referring website or source', 'Geographic location (country/region level)'].map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-2 h-2 mt-2 rounded-full bg-orange-400 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">4. How We Use Your Information</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>We use the information we collect to:</p>
                    <ul className="space-y-2">
                      {[
                        'Process and manage your bookings',
                        'Send booking confirmations, reminders, and updates',
                        'Arrange transportation and pickup services',
                        'Provide customer support and respond to inquiries',
                        'Process payments and refunds',
                        'Improve our services, website, and user experience',
                        'Comply with legal and regulatory obligations',
                        'Send promotional communications (only with your explicit consent)',
                        'Analyze website usage and performance'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 mt-2 rounded-full bg-purple-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">5. Legal Basis for Processing</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>We process your personal data based on:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span><strong className="text-white">Contract:</strong> To fulfill our booking agreement with you</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span><strong className="text-white">Consent:</strong> For marketing communications and non-essential cookies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span><strong className="text-white">Legitimate Interest:</strong> To improve our services and prevent fraud</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400 flex-shrink-0" />
                        <span><strong className="text-white">Legal Obligation:</strong> To comply with tax, accounting, and safety regulations</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Section 6 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                      <Database className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">6. Information Sharing</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>We may share your information with:</p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-blue-400 flex-shrink-0" />
                        <span><strong className="text-white">Payment Processors:</strong> Stripe processes all online payments on behalf of Chamnanthang Co., Ltd. (ONEBOOKING)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-blue-400 flex-shrink-0" />
                        <span><strong className="text-white">Email Service Providers:</strong> To send booking confirmations and communications (e.g., Resend)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-blue-400 flex-shrink-0" />
                        <span><strong className="text-white">Transportation Partners:</strong> Hotel and pickup location details for transfer arrangements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-blue-400 flex-shrink-0" />
                        <span><strong className="text-white">Analytics Providers:</strong> Aggregated, anonymized data for website analytics (e.g., Google Analytics)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 mt-2 rounded-full bg-blue-400 flex-shrink-0" />
                        <span><strong className="text-white">Legal Authorities:</strong> When required by law, court order, or to protect our legal rights</span>
                      </li>
                    </ul>
                    <div className="mt-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <p className="text-emerald-400 font-medium">
                        We do not sell, rent, or trade your personal information to third parties for marketing purposes.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Section 7 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">
                      <Lock className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">7. Data Security</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>We implement appropriate technical and organizational measures to protect your personal information, including:</p>
                    <ul className="space-y-2">
                      {[
                        'SSL/TLS encryption for all data transmission (HTTPS)',
                        'Secure database storage with access controls',
                        'Regular security assessments and updates',
                        'PCI-DSS compliant payment processing through Stripe',
                        'Employee training on data protection',
                        'Incident response procedures'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 mt-2 rounded-full bg-red-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Section 8 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">8. Your Rights Under PDPA</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>Under the Thailand Personal Data Protection Act, you have the right to:</p>
                    <ul className="space-y-2">
                      {[
                        { title: 'Access', desc: 'Request a copy of the personal data we hold about you' },
                        { title: 'Rectification', desc: 'Request correction of inaccurate or incomplete data' },
                        { title: 'Erasure', desc: 'Request deletion of your personal data (subject to legal retention requirements)' },
                        { title: 'Restriction', desc: 'Request limitation of processing in certain circumstances' },
                        { title: 'Data Portability', desc: 'Receive your data in a structured, machine-readable format' },
                        { title: 'Objection', desc: 'Object to processing based on legitimate interests' },
                        { title: 'Withdraw Consent', desc: 'Withdraw consent for marketing communications at any time' },
                        { title: 'Complaint', desc: 'Lodge a complaint with the Personal Data Protection Committee' }
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 mt-2 rounded-full bg-amber-400 flex-shrink-0" />
                          <span><strong className="text-white">{item.title}:</strong> {item.desc}</span>
                        </li>
                      ))}
                    </ul>
                    <p>To exercise these rights, please contact us using the details in Section 15.</p>
                  </div>
                </div>

                {/* Section 9-14 (Condensed) */}
                <div className="space-y-8">
                  {[
                    { num: 9, title: 'Cookies and Tracking Technologies', content: 'Our website uses cookies and similar technologies to enhance your experience. Types include: Essential Cookies (required for functionality), Analytics Cookies (help us understand usage), and Marketing Cookies (used for targeted advertising with consent).' },
                    { num: 10, title: 'Third-Party Links', content: 'Our website may contain links to third-party websites (e.g., social media, payment providers, map services). We are not responsible for the privacy practices of these websites.' },
                    { num: 11, title: "Children's Privacy", content: 'Our services are not directed to children under 13 years of age. Bookings for minors must be made by a parent or legal guardian.' },
                    { num: 12, title: 'Data Retention', content: 'We retain booking records for 7 years, marketing preferences until you withdraw consent, website analytics for 26 months (anonymized), and customer support records for 3 years after last interaction.' },
                    { num: 13, title: 'International Data Transfers', content: 'Your information may be transferred to and processed in countries other than Thailand, including the United States and European Union. We ensure appropriate safeguards are in place.' },
                    { num: 14, title: 'Changes to This Policy', content: 'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.' }
                  ].map((section) => (
                    <div key={section.num} className="space-y-3">
                      <h2 className="text-xl font-bold text-white">{section.num}. {section.title}</h2>
                      <p className="text-white/70 leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>

                {/* Section 15 - Contact */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">15. Contact Us</h2>
                  </div>
                  <div className="pl-13 space-y-6">
                    <p className="text-white/70">
                      If you have questions about this Privacy Policy, wish to exercise your rights, 
                      or have concerns about our data practices, please contact us:
                    </p>
                    
                    {/* Contact Cards */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* SKY ROCK Contact */}
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-lg font-bold text-white mb-4">SKY ROCK ADVENTURE CO., LTD.</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-white/70">
                            <Mail className="w-4 h-4 text-emerald-400" />
                            <span>privacy@skyrockkhaolak.com</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/70">
                            <Phone className="w-4 h-4 text-emerald-400" />
                            <span>+66 62 979 5533</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/70">
                            <MapPin className="w-4 h-4 text-emerald-400" />
                            <span>Khao Lak, Phang Nga, Thailand</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* ONEBOOKING Contact */}
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-lg font-bold text-white mb-4">Chamnanthang Co., Ltd. (ONEBOOKING)</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-white/70">
                            <Mail className="w-4 h-4 text-cyan-400" />
                            <span>support@onebooking.co</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/70">
                            <FileText className="w-4 h-4 text-cyan-400" />
                            <span>onebooking.co</span>
                          </div>
                        </div>
                      </div>
                    </div>
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
