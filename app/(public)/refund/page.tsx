'use client';

import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, XCircle, Clock, FileText, Phone, Mail, CreditCard, RefreshCw } from 'lucide-react';

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-[#0A1612]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl" />
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-6">
              <RefreshCw className="w-4 h-4" />
              Refund Information
            </span>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6">
              REFUND{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                POLICY
              </span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Last updated: February 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary Cards */}
      <section className="relative pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-4"
          >
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm">
              <CheckCircle className="w-10 h-10 text-emerald-400 mb-3" />
              <h3 className="font-semibold text-emerald-400 mb-1">Full Refund</h3>
              <p className="text-sm text-white/60">Cancel 24+ hours before activity (5% processing fee applies)</p>
            </div>
            <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm">
              <Clock className="w-10 h-10 text-amber-400 mb-3" />
              <h3 className="font-semibold text-amber-400 mb-1">Medical Cases</h3>
              <p className="text-sm text-white/60">Within 48 hours with medical certificate</p>
            </div>
            <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20 backdrop-blur-sm">
              <XCircle className="w-10 h-10 text-red-400 mb-3" />
              <h3 className="font-semibold text-red-400 mb-1">No Refund</h3>
              <p className="text-sm text-white/60">Less than 24 hours or no-show</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            {/* Glassmorphic Container */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.08] to-white/[0.02] backdrop-blur-xl" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl" />
              
              {/* Decorative Orbs */}
              <div className="absolute top-10 right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
              
              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 space-y-10">
                {/* Section 1 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">1. Overview</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>
                      This Refund Policy applies to all online bookings made through our website. 
                      Payments are processed by <strong className="text-white">Chamnanthang Co., Ltd.</strong> (operating 
                      as "ONEBOOKING"). Your credit card statement will display the payment as "ONEBOOKING".
                    </p>
                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-semibold text-blue-400">Important Note</p>
                          <p className="text-sm text-white/60">
                            A <strong className="text-white">5% processing fee</strong> will be deducted from all refunds 
                            to cover payment gateway and administrative costs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">2. Standard Cancellation & Refund</h2>
                  </div>
                  <div className="pl-13 space-y-6 text-white/70 leading-relaxed">
                    <div>
                      <h3 className="text-lg font-semibold text-emerald-400 mb-3">2.1 More Than 24 Hours Before Activity</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-emerald-400" /><span><strong className="text-white">Refund:</strong> Full refund minus 5% processing fee</span></li>
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-emerald-400" /><span><strong className="text-white">Processing Time:</strong> 5-10 business days</span></li>
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-emerald-400" /><span><strong className="text-white">How to Cancel:</strong> Email support@skyrockkhaolak.com with your booking reference</span></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-red-400 mb-3">2.2 Less Than 24 Hours Before Activity</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-red-400" /><span><strong className="text-white">Refund:</strong> No refund available</span></li>
                        <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-red-400" /><span><strong className="text-white">Reason:</strong> Staff, equipment, and transfers have already been allocated</span></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-semibold text-red-400 mb-3">2.3 No-Show</h3>
                      <p>If you miss the scheduled pick-up time without prior notification, or fail to arrive for your activity, <strong className="text-red-400">no refund will be issued under any circumstances</strong>.</p>
                    </div>
                  </div>
                </div>

                {/* Section 3 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <AlertCircle className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">3. Medical & Emergency Cancellations</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>For unintentional cancellations due to accidents or illness within 48 hours of the activity:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-amber-400" /><span><strong className="text-white">Required:</strong> Medical certificate from a licensed physician</span></li>
                      <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-amber-400" /><span><strong className="text-white">Refund:</strong> Full refund minus 5% processing fee</span></li>
                      <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-amber-400" /><span><strong className="text-white">Submission:</strong> Email medical certificate to support@skyrockkhaolak.com within 7 days</span></li>
                    </ul>
                  </div>
                </div>

                {/* Section 4 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">4. Rescheduling</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>If you need to change your play date or time:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-blue-400" /><span><strong className="text-white">More than 24 hours before:</strong> Free rescheduling (subject to availability)</span></li>
                      <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-blue-400" /><span><strong className="text-white">On the activity date:</strong> Additional transportation fee may apply</span></li>
                    </ul>
                  </div>
                </div>

                {/* Section 5 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">5. Cancellation by Sky Rock</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>If we cancel due to severe weather, safety concerns, or unforeseen circumstances:</p>
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                      <p className="text-emerald-400 font-medium">You will receive a full refund (100%) or the option to reschedule at no additional cost.</p>
                    </div>
                  </div>
                </div>

                {/* Section 6 */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">6. Refund Processing</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-cyan-400" /><span><strong className="text-white">Method:</strong> Refunds are processed to the original payment method</span></li>
                      <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-cyan-400" /><span><strong className="text-white">Processing Time:</strong> 5-10 business days after approval</span></li>
                      <li className="flex items-start gap-3"><span className="w-2 h-2 mt-2 rounded-full bg-cyan-400" /><span><strong className="text-white">Bank Processing:</strong> May take additional time depending on your bank</span></li>
                    </ul>
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">7. Contact Us</h2>
                  </div>
                  <div className="pl-13 space-y-4">
                    <p className="text-white/70">For refund requests or questions about this policy:</p>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-white/70">
                          <Mail className="w-4 h-4 text-cyan-400" />
                          <span>support@skyrockkhaolak.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/70">
                          <Phone className="w-4 h-4 text-cyan-400" />
                          <span>+66 (0) 81 097 9983</span>
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
