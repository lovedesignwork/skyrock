'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  CheckCircle, Calendar, Clock, Users, MapPin, Mail, Phone, 
  Package, Car, UserMinus, AlertCircle, Info, Shirt, Scale
} from 'lucide-react';

interface BookingAddon {
  id: string;
  quantity: number;
  unit_price: number;
  total_price: number;
  promo_addons: {
    id: string;
    name: string;
  };
}

interface BookingCustomer {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

interface BookingTransport {
  type: string;
  pickup_location: string;
  pickup_time?: string;
}

interface BookingData {
  id: string;
  booking_ref: string;
  activity_date: string;
  time_slot: string;
  guest_count: number;
  non_playing_guests: number;
  total_amount: number;
  currency: string;
  packages: {
    name: string;
    slug: string;
  };
  booking_customers: BookingCustomer | BookingCustomer[];
  booking_addons: BookingAddon[];
  booking_transport: BookingTransport | BookingTransport[] | null;
}

function SuccessContent() {
  const searchParams = useSearchParams();
  const bookingRef = searchParams.get('booking_ref');
  const paymentIntent = searchParams.get('payment_intent');
  const sessionId = searchParams.get('session_id');
  
  const [booking, setBooking] = useState<BookingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBookingDetails = async () => {
      if (!bookingRef) {
        setError('Invalid booking link');
        setLoading(false);
        return;
      }
      
      const params = new URLSearchParams();
      if (paymentIntent) params.set('payment_intent', paymentIntent);
      if (sessionId) params.set('session_id', sessionId);
      
      try {
        const response = await fetch(`/api/bookings/${bookingRef}?${params.toString()}`);
        if (response.ok) {
          const data = await response.json();
          setBooking(data);
        } else if (response.status === 401) {
          setError('This booking confirmation link is not valid or has expired.');
        } else {
          setError('Booking not found');
        }
      } catch (err) {
        console.error('Error fetching booking:', err);
        setError('Failed to load booking details');
      }
      setLoading(false);
    };

    fetchBookingDetails();
  }, [bookingRef, paymentIntent, sessionId]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('th-TH', {
      style: 'currency',
      currency: 'THB',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const getCustomer = (): BookingCustomer | null => {
    if (!booking?.booking_customers) return null;
    if (Array.isArray(booking.booking_customers)) {
      return booking.booking_customers[0] || null;
    }
    return booking.booking_customers;
  };

  const getTransport = (): BookingTransport | null => {
    if (!booking?.booking_transport) return null;
    if (Array.isArray(booking.booking_transport)) {
      return booking.booking_transport[0] || null;
    }
    return booking.booking_transport;
  };

  const hasTransfer = (): boolean => {
    const transport = getTransport();
    return transport !== null && transport.type !== 'self' && transport.type !== 'none';
  };

  const customer = getCustomer();
  const transport = getTransport();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const checkmarkVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  if (error) {
    return (
      <main className="min-h-screen relative overflow-hidden">
        {/* Sporty Background */}
        <div className="fixed inset-0 z-0">
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
        
        <div className="relative z-10 max-w-md mx-auto px-4 pt-40 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl shadow-xl p-8 text-center"
          >
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertCircle className="w-8 h-8 text-amber-500" />
            </div>
            <h1 className="text-xl font-bold text-slate-800 mb-2">Access Denied</h1>
            <p className="text-sm text-slate-600 mb-6">{error}</p>
            <p className="text-xs text-slate-500 mb-6">
              If you made a booking, please check your email for the confirmation with the correct link, 
              or contact our support team for assistance.
            </p>
            <Link href="/" className="block">
              <button 
                className="w-full px-6 py-3 text-white font-semibold rounded-xl transition-all text-sm hover:opacity-90"
                style={{
                  background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
                }}
              >
                Back to Home
              </button>
            </Link>
            <div className="mt-6 pt-4 border-t border-slate-100">
              <p className="text-xs text-slate-500 mb-2">Need help?</p>
              <a href="mailto:support@skyrockkhaolak.com" className="text-sm text-[#2D6A4F] hover:underline font-medium">
                support@skyrockkhaolak.com
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Sporty Background - Fixed to cover entire page */}
      <div className="fixed inset-0 z-0">
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
          className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0,255,255,0.3) 0%, rgba(0,128,255,0.2) 50%, transparent 70%)',
            animation: 'pulse 10s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255,200,0,0.3) 0%, rgba(255,100,0,0.2) 50%, transparent 70%)',
            animation: 'pulse 12s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 12px)',
          }}
        />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0.1) 55%, transparent 60%)',
            backgroundSize: '200% 100%',
            animation: 'shine 8s ease-in-out infinite',
          }}
        />
      </div>
      
      <motion.div 
        className="relative z-10 max-w-2xl mx-auto px-4 pt-32 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1. SUCCESS HEADER CARD */}
        <motion.div
          variants={headerVariants}
          className="rounded-2xl shadow-2xl overflow-hidden mb-6"
          style={{
            background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #40916C 100%)',
          }}
        >
          <div className="px-6 py-8 text-center">
            {/* Checkmark with spring animation */}
            <motion.div
              variants={checkmarkVariants}
              className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
            >
              <CheckCircle className="w-12 h-12 text-emerald-500" />
            </motion.div>
            
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2 font-heading tracking-wide">
              BOOKING CONFIRMED!
            </h1>
            
            {customer && (
              <p className="text-white/90 text-lg mb-4">
                Thank you, {customer.first_name}!
              </p>
            )}
            
            {/* Booking Reference Box */}
            <div className="inline-block bg-white/20 backdrop-blur-sm rounded-xl px-6 py-3 mb-4">
              <p className="text-white/70 text-xs uppercase tracking-wider mb-1">Booking Reference</p>
              <p className="text-white text-xl font-bold font-mono tracking-wider">
                {bookingRef || 'Loading...'}
              </p>
            </div>
            
            {customer?.email && (
              <p className="text-white/80 text-sm">
                Confirmation sent to <span className="font-semibold text-white">{customer.email}</span>
              </p>
            )}
          </div>
        </motion.div>

        {!loading && booking && (
          <>
            {/* 2. BOOKING DETAILS CARD */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6"
            >
              {/* Dark Header with Package Name */}
              <div className="bg-[#0f0f0f] px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1B4332] to-[#2D6A4F] flex items-center justify-center">
                    <Package className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider">Package</p>
                    <p className="text-white font-bold text-lg">{booking.packages?.name || 'Adventure Package'}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {/* 3-Column Grid: Date | Time | Players */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <Calendar className="w-6 h-6 text-[#2D6A4F] mx-auto mb-2" />
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Date</p>
                    <p className="text-sm font-semibold text-slate-800">
                      {new Date(booking.activity_date).toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <Clock className="w-6 h-6 text-[#2D6A4F] mx-auto mb-2" />
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Time</p>
                    <p className="text-sm font-semibold text-slate-800">
                      {booking.time_slot === 'flexible' ? '8AM - 6PM' : booking.time_slot}
                    </p>
                  </div>
                  
                  <div className="text-center p-4 bg-slate-50 rounded-xl">
                    <Users className="w-6 h-6 text-[#2D6A4F] mx-auto mb-2" />
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-1">Players</p>
                    <p className="text-sm font-semibold text-slate-800">
                      {booking.guest_count} {booking.guest_count === 1 ? 'Person' : 'People'}
                    </p>
                  </div>
                </div>

                {/* Non-Players (if > 0) */}
                {booking.non_playing_guests > 0 && (
                  <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl mb-4">
                    <UserMinus className="w-5 h-5 text-[#2D6A4F]" />
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wider">Non-Playing Guests</p>
                      <p className="text-sm font-semibold text-slate-800">
                        {booking.non_playing_guests} {booking.non_playing_guests === 1 ? 'Person' : 'People'}
                      </p>
                    </div>
                  </div>
                )}

                {/* Transport Info (if has transfer) */}
                {hasTransfer() && transport && (
                  <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl mb-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                      <Car className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-blue-600 uppercase tracking-wider">
                        {transport.type === 'private' ? 'Private Transfer' : 'Shared Transfer'}
                      </p>
                      {transport.pickup_location && (
                        <p className="text-sm font-semibold text-blue-800">{transport.pickup_location}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Add-ons List */}
                {booking.booking_addons && booking.booking_addons.length > 0 && (
                  <div className="mb-6">
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-3">Add-ons & Upgrades</p>
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                      <ul className="space-y-2">
                        {booking.booking_addons.map((addon, index) => {
                          const price = (addon.unit_price || 0) * (addon.quantity || 1);
                          return (
                            <li key={index} className="flex items-center justify-between">
                              <span className="text-sm text-slate-700">
                                {addon.promo_addons?.name || 'Add-on'} 
                                <span className="text-slate-500 ml-1">× {addon.quantity}</span>
                              </span>
                              <span className="text-sm font-semibold text-emerald-700">
                                {formatCurrency(addon.total_price || price)}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Total Amount - Large & Bold */}
                <div 
                  className="flex items-center justify-between p-5 rounded-xl"
                  style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)' }}
                >
                  <span className="text-white/80 font-medium">Total Paid</span>
                  <span className="text-2xl font-bold text-white">
                    {formatCurrency(booking.total_amount)}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 3. IMPORTANT INFO CARD */}
            <motion.div
              variants={cardVariants}
              className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Info className="w-5 h-5 text-amber-600" />
                <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wider">
                  Important Information
                </h3>
              </div>
              <ul className="space-y-3">
                {hasTransfer() ? (
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-amber-700" />
                    </div>
                    <span className="text-sm text-amber-800">
                      Be at your hotel lobby <strong>15 minutes before</strong> your scheduled pick-up time
                    </span>
                  </li>
                ) : (
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-3.5 h-3.5 text-amber-700" />
                    </div>
                    <span className="text-sm text-amber-800">
                      Arrive at least <strong>30 minutes before</strong> your scheduled time
                    </span>
                  </li>
                )}
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-3.5 h-3.5 text-amber-700" />
                  </div>
                  <span className="text-sm text-amber-800">
                    Bring your <strong>booking confirmation</strong> (email or screenshot)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shirt className="w-3.5 h-3.5 text-amber-700" />
                  </div>
                  <span className="text-sm text-amber-800">
                    Wear <strong>comfortable clothes</strong> and <strong>closed-toe shoes</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Scale className="w-3.5 h-3.5 text-amber-700" />
                  </div>
                  <span className="text-sm text-amber-800">
                    Weight limit: <strong>120kg maximum</strong> for zipline activities
                  </span>
                </li>
              </ul>
            </motion.div>

            {/* 4. LOCATION CARD */}
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-xl p-6 mb-6"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)' }}
                >
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Sky Rock Khao Lak</h3>
                  <p className="text-sm text-slate-600">
                    Khao Lak, Phang Nga Province, Thailand 82190
                  </p>
                  <a 
                    href="https://maps.google.com/?q=Sky+Rock+Khao+Lak" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-[#2D6A4F] hover:underline mt-2 font-medium"
                  >
                    View on Google Maps
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* 5. BACK TO HOME BUTTON */}
            <motion.div variants={cardVariants}>
              <Link href="/" className="block">
                <button 
                  className="w-full px-6 py-4 text-white font-bold rounded-xl transition-all text-base hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
                  style={{ 
                    background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)',
                    boxShadow: '0 4px 20px rgba(27, 67, 50, 0.4)',
                  }}
                >
                  Back to Home
                </button>
              </Link>
            </motion.div>

            {/* 6. HELP FOOTER */}
            <motion.div 
              variants={cardVariants}
              className="mt-8 text-center"
            >
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3">
                Need help with your booking?
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="mailto:support@skyrockkhaolak.com" 
                  className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">support@skyrockkhaolak.com</span>
                </a>
                <a 
                  href="tel:+66629795533" 
                  className="inline-flex items-center justify-center gap-2 text-white/90 hover:text-white transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium">+66 62 979 5533</span>
                </a>
              </div>
            </motion.div>
          </>
        )}

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-12 h-12 border-4 border-[#1B4332]/20 border-t-[#1B4332] rounded-full animate-spin mb-4" />
              <p className="text-slate-600 text-sm">Loading your booking details...</p>
            </div>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0A1612 0%, #1B4332 100%)' }}>
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4" />
          <p className="text-white/80 text-sm">Loading...</p>
        </div>
      </main>
    }>
      <SuccessContent />
    </Suspense>
  );
}
