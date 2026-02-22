'use client';

export const dynamic = 'force-dynamic';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { XCircle, ArrowLeft, RefreshCw, Phone, Mail, MessageCircle } from 'lucide-react';

function CancelContent() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get('booking_id');

  return (
    <main className="min-h-screen pt-20 relative overflow-hidden">
      {/* Sporty Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #0A1612 0%, #0D2818 30%, #1B4332 60%, #0A1612 100%)' }}
        />
        <div 
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255,0,128,0.3) 0%, rgba(128,0,255,0.2) 50%, transparent 70%)',
            animation: 'pulse 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,255,0.3) 0%, rgba(0,128,255,0.2) 50%, transparent 70%)',
            animation: 'pulse 10s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 12px)',
          }}
        />
      </div>
      
      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden"
        >
          <div 
            className="px-6 py-8 text-center"
            style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #40916C 100%)' }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <XCircle className="w-12 h-12 text-amber-500" />
            </motion.div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Payment Cancelled</h1>
            <p className="text-white/90">Your booking was not completed</p>
          </div>

          <div className="p-6 md:p-8">
            <div className="bg-slate-50 rounded-2xl p-6 mb-6">
              <p className="text-slate-600 text-center">
                Don't worry! Your booking has not been charged. You can try again or contact us for assistance.
              </p>
            </div>

            <div className="space-y-3 mb-8">
              <h3 className="font-semibold text-slate-800">What would you like to do?</h3>
              
              <Link href="/booking" className="block">
                <div className="flex items-center gap-4 p-4 bg-[#1B4332]/5 hover:bg-[#1B4332]/10 rounded-xl transition-colors cursor-pointer">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)' }}
                  >
                    <RefreshCw className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">Try Again</p>
                    <p className="text-sm text-slate-500">Start a new booking</p>
                  </div>
                </div>
              </Link>

              <Link href="/" className="block">
                <div className="flex items-center gap-4 p-4 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer">
                  <div className="w-12 h-12 bg-slate-200 rounded-lg flex items-center justify-center">
                    <ArrowLeft className="w-6 h-6 text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-slate-800">Return Home</p>
                    <p className="text-sm text-slate-500">Go back to the homepage</p>
                  </div>
                </div>
              </Link>
            </div>

            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-6 mb-6">
              <h3 className="font-semibold text-amber-800 mb-3">Having trouble?</h3>
              <p className="text-sm text-amber-700 mb-4">
                If you're experiencing issues with payment, please check:
              </p>
              <ul className="space-y-2 text-sm text-amber-700">
                <li>• Your card has sufficient funds</li>
                <li>• The card details are entered correctly</li>
                <li>• Your bank has approved international transactions</li>
                <li>• Try using a different payment method</li>
              </ul>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <p className="text-center text-sm text-slate-500 mb-4">Need assistance? Contact our support team</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <a
                  href="tel:+66629795533"
                  className="flex items-center justify-center gap-2 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#2D6A4F]" />
                  <span className="text-slate-700">Call Us</span>
                </a>
                <a
                  href="mailto:info@skyrockkhaolak.com"
                  className="flex items-center justify-center gap-2 p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#2D6A4F]" />
                  <span className="text-slate-700">Email</span>
                </a>
                <a
                  href="https://wa.me/66629795533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <span className="text-green-700">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default function CancelPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen pt-20 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0A1612 0%, #1B4332 100%)' }}>
        <div className="text-white text-xl">Loading...</div>
      </main>
    }>
      <CancelContent />
    </Suspense>
  );
}
