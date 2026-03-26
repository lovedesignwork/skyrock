'use client';

import { motion } from 'framer-motion';
import { FileText, CreditCard, XCircle, Car, Users, Shield, Camera, Clock, AlertTriangle, Phone, Mail, MapPin } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0A1612]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-red-500/15 to-pink-500/15 rounded-full blur-3xl" />
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Legal Information
            </span>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6">
              TERMS &{' '}
              <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-400 bg-clip-text text-transparent">
                CONDITIONS
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
              <div className="absolute top-10 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-20 left-10 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl" />
              
              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 space-y-10">
                {/* Section 1 - Introduction */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>
                      Welcome to SKY ROCK, operated by <strong className="text-white">SKY ROCK ADVENTURE CO., LTD.</strong> 
                      These Terms and Conditions govern your use of our website, services, and adventure 
                      activities. By making a booking or participating in our activities, you agree to 
                      be bound by these terms.
                    </p>
                    <p>
                      Online bookings and payments are processed by <strong className="text-white">Chamnanthang Co., Ltd.</strong> 
                      (operating as "ONEBOOKING"). Your credit card statement will display the payment 
                      as "ONEBOOKING".
                    </p>
                  </div>
                </div>

                {/* Section 2 - Booking and Reservations */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">2. Booking and Reservations</h2>
                  </div>
                  <div className="pl-13 space-y-6 text-white/70 leading-relaxed">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">2.1 Making a Booking</h3>
                      <p>All bookings are subject to availability. When you make a booking, you will receive a confirmation email with your booking reference number. Please keep this for your records and present it upon arrival.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">2.2 Payment</h3>
                      <p>Full payment is required at the time of booking. We accept major credit cards through our secure payment partner, Stripe. All prices are displayed in Thai Baht (THB) and include applicable taxes.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">2.3 Confirmation</h3>
                      <p>Your booking is confirmed once payment is successfully processed and you receive a confirmation email. The credit card statement will display the payment as "ONEBOOKING" (Chamnanthang Co., Ltd.).</p>
                    </div>
                  </div>
                </div>

                {/* Section 3 - Cancellation Policy */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center">
                      <XCircle className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">3. Cancellation Policy</h2>
                  </div>
                  <div className="pl-13 space-y-6 text-white/70 leading-relaxed">
                    {/* Important Notice Box */}
                    <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                      <p className="text-red-400 font-medium flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Please read our cancellation policy carefully before booking
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">3.1 Standard Cancellations</h3>
                      <p>Cancellations are accepted if made at least <strong className="text-white">24 hours</strong> before the scheduled playtime. A <strong className="text-white">5% processing fee</strong> will be deducted from the total amount paid for all cancellations and partial refunds.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">3.2 Unintentional Cancellations</h3>
                      <p>For unintentional cancellations due to accidents or illness, a <strong className="text-white">medical certificate is required</strong> for a refund if the cancellation occurs within 48 hours of the scheduled playtime.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">3.3 No-Show Policy</h3>
                      <p>If you miss the scheduled pick-up time without prior notification, or if you are a no-show, <strong className="text-red-400">no refund will be issued under any circumstances</strong>.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">3.4 Changing Play Date/Time</h3>
                      <p>If you need to change the play date or time on the activity date, an additional transportation fee may apply depending on the new location within Khao Lak.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">3.5 Third-Party Purchases</h3>
                      <p>If you purchased tickets from a third-party distributor or agent (not directly from our website), please note that their cancellation policy may differ.</p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">3.6 Cancellation by SKY ROCK</h3>
                      <p>We reserve the right to cancel activities due to severe weather conditions, safety concerns, or unforeseen circumstances. In such cases, you will receive a <strong className="text-emerald-400">full refund</strong> or the option to reschedule at no additional cost.</p>
                    </div>
                  </div>
                </div>

                {/* Section 4 - Transfer & Transportation */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                      <Car className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">4. Transfer & Transportation</h2>
                  </div>
                  <div className="pl-13 space-y-6 text-white/70 leading-relaxed">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">4.1 Free Transfer Zone</h3>
                      <p className="mb-3">We offer complimentary shared transfers from selected areas in Khao Lak. Locations <strong className="text-white">outside our free transfer zone</strong> include:</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-3">
                        {['Ao Por', 'Baan Dorn', 'Bangjo', 'Layan Beach', 'Maikhao Beach', 'Naithon Beach', 'Naiyang Beach', 'Pasak'].map((loc) => (
                          <span key={loc} className="px-3 py-1 rounded-lg bg-white/5 text-white/70 text-sm">{loc}</span>
                        ))}
                      </div>
                      <p>For these locations: First person <strong className="text-white">500 THB</strong>, each additional person <strong className="text-white">200 THB</strong></p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">4.2 Private Transfer</h3>
                      <p>Private round-trip transfers available:</p>
                      <ul className="mt-2 space-y-1">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400" />In-zone: <strong className="text-white">1,800 THB</strong></li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400" />Out-zone: <strong className="text-white">2,500 THB</strong></li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400" />Maximum: 10 passengers per van</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">4.3 Luggage, Stroller & Car Seat</h3>
                      <ul className="space-y-1">
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400" />Large luggage: <strong className="text-white">300 THB per piece</strong></li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400" />Stroller: <strong className="text-white">300 THB</strong></li>
                        <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-400" />Car seat: <strong className="text-white">200 THB</strong></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">4.4 Airport Pick-Up and Drop-Off</h3>
                      <p>We <strong className="text-red-400">do not provide airport pick-up</strong> due to fixed activity times. Airport drop-off is available; please include your flight time in the booking note.</p>
                    </div>
                  </div>
                </div>

                {/* Section 5 - Participation Requirements */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">5. Participation Requirements</h2>
                  </div>
                  <div className="pl-13 space-y-6 text-white/70 leading-relaxed">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">5.1 Physical Requirements</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-purple-400" />Weight: Minimum 15kg, Maximum <strong className="text-white">120kg for zipline activities</strong></li>
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-purple-400" />Age: Minimum 4 years old (children must be accompanied by an adult)</li>
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-purple-400" />Health: Participants must be in good physical health</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">5.2 Not Permitted to Participate</h3>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {['Pregnancy', 'Recent surgery or injuries', 'Heart conditions', 'Severe fear of heights', 'Under the influence of alcohol/drugs', 'Conditions aggravated by activity'].map((item) => (
                          <span key={item} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/20 text-red-300 text-sm">
                            <XCircle className="w-4 h-4 flex-shrink-0" />
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">5.3 What to Wear</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-purple-400" />Comfortable, light clothing suitable for outdoor activities</li>
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-purple-400" /><strong className="text-white">Closed-toe shoes required</strong> (no sandals, flip-flops, or heels)</li>
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-purple-400" />Long hair should be tied back</li>
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-purple-400" />Remove loose jewelry and accessories</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Section 6 - Safety and Liability */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">6. Safety and Liability</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                      <p className="text-amber-400 font-medium">All participants are covered by our comprehensive insurance policy for accidents occurring during the activity.</p>
                    </div>
                    <p>Zipline and adventure activities involve inherent risks. By participating, you acknowledge and voluntarily accept these risks. All participants must attend the safety briefing and follow all instructions provided by our trained guides.</p>
                    <p>All participants (or legal guardians for minors) must sign a liability waiver before participating.</p>
                  </div>
                </div>

                {/* Section 7 - Arrival and Check-In */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">7. Arrival and Check-In</h2>
                  </div>
                  <div className="pl-13 text-white/70 leading-relaxed">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-cyan-400" />Please arrive at least <strong className="text-white">30 minutes before</strong> your scheduled time</li>
                      <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-cyan-400" />Bring your booking confirmation (printed or digital)</li>
                      <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-cyan-400" />Late arrivals may result in reduced activity time or rescheduling</li>
                    </ul>
                  </div>
                </div>

                {/* Section 8 - Code of Conduct */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">8. Code of Conduct</h2>
                  </div>
                  <div className="pl-13 text-white/70 leading-relaxed">
                    <p className="mb-3">Participants must:</p>
                    <ul className="space-y-2">
                      {[
                        'Follow all instructions from guides and staff',
                        'Respect other participants, staff, and the environment',
                        'Not engage in reckless, dangerous, or disruptive behavior',
                        'Not damage equipment, facilities, or natural surroundings',
                        'Dispose of waste properly and respect the rainforest ecosystem'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="mt-3 text-red-400">Violation of the code of conduct may result in immediate removal from the activity without refund.</p>
                  </div>
                </div>

                {/* Section 9 - Photography */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">9. Photography and Media</h2>
                  </div>
                  <div className="pl-13 text-white/70 leading-relaxed">
                    <p>SKY ROCK may photograph or film activities for promotional purposes. By participating, you grant us permission to use such images unless you notify us otherwise in writing before the activity.</p>
                    <p className="mt-3">Professional photo and video packages are available for purchase. Personal cameras may be used at designated areas only.</p>
                  </div>
                </div>

                {/* Sections 10-14 (Condensed) */}
                <div className="space-y-8">
                  {[
                    { num: 10, title: 'Intellectual Property', content: 'All content on this website, including text, images, logos, and designs, is the property of SKY ROCK ADVENTURE CO., LTD. and is protected by copyright and trademark laws.' },
                    { num: 11, title: 'Limitation of Liability', content: 'To the maximum extent permitted by law, SKY ROCK ADVENTURE CO., LTD. and Chamnanthang Co., Ltd. shall not be liable for any indirect, incidental, special, consequential, or punitive damages.' },
                    { num: 12, title: 'Changes to Terms', content: 'We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.' },
                    { num: 13, title: 'Governing Law', content: 'These terms are governed by the laws of the Kingdom of Thailand. Any disputes shall be subject to the exclusive jurisdiction of the courts of Phang Nga, Thailand.' },
                    { num: 14, title: 'Severability', content: 'If any provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.' }
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
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">15. Contact Information</h2>
                  </div>
                  <div className="pl-13 space-y-6">
                    <p className="text-white/70">For questions about these terms, please contact us:</p>
                    
                    {/* Contact Cards */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {/* SKY ROCK Contact */}
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-lg font-bold text-white mb-4">SKY ROCK ADVENTURE CO., LTD.</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-white/70">
                            <Mail className="w-4 h-4 text-orange-400" />
                            <span>info@skyrockkhaolak.com</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/70">
                            <Phone className="w-4 h-4 text-orange-400" />
                            <span>+66 62 979 5533</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/70">
                            <MapPin className="w-4 h-4 text-orange-400" />
                            <span>Khao Lak, Phang Nga, Thailand</span>
                          </div>
                        </div>
                      </div>
                      
                      {/* ONEBOOKING Contact */}
                      <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                        <h3 className="text-lg font-bold text-white mb-4">Chamnanthang Co., Ltd. (ONEBOOKING)</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 text-white/70">
                            <Mail className="w-4 h-4 text-amber-400" />
                            <span>support@onebooking.co</span>
                          </div>
                          <div className="flex items-center gap-3 text-white/70">
                            <FileText className="w-4 h-4 text-amber-400" />
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
