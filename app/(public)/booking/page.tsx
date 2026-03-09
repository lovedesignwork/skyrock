'use client';

import { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Check, Calendar, Clock, Users, Minus, Plus, Car, Navigation, 
  MapPin, ShieldCheck, CalendarDays, ArrowRight, Hotel
} from 'lucide-react';
import { Container, Section, Badge, CalendarPicker } from '@/components/ui';
import { packages } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';

const timeSlots = [
  { time: '08:00', label: '8:00 AM', available: true },
  { time: '09:00', label: '9:00 AM', available: true },
  { time: '10:00', label: '10:00 AM', available: true },
  { time: '13:00', label: '1:00 PM', available: true },
  { time: '14:00', label: '2:00 PM', available: true },
  { time: '15:00', label: '3:00 PM', available: true },
];

const allBookablePackages = packages.filter(pkg => 
  ['rock-1', 'rock-2', 'rock-3', 'roller'].includes(pkg.id)
);

// Packages that have flexible/open time (no specific time slot needed)
// These can be done anytime between 8AM-6PM on the selected day
const openTimePackages = ['roller'];

const addonPackages = packages.filter(pkg => 
  ['roller-zipline', 'skywalk', 'slingshot', 'luge'].includes(pkg.id)
);

// Promotional add-ons
const promotionalAddons = [
  {
    id: 'zipline-photos',
    name: 'Zipline Photos',
    description: 'Zipline Photography Services 10% OFF',
    price: 770,
    originalPrice: 856,
    discount: '10% off',
    image: '/images/SKYROCK75.jpg',
  },
  {
    id: 'roller-videos',
    name: 'Roller Videos',
    description: 'Roller Videos 20% OFF',
    price: 428,
    originalPrice: 535,
    discount: '20% off',
    image: '/images/SKYROCK36.jpg',
  },
];

const PRIVATE_TRANSFER_PRICE = 2500;
const NON_PLAYER_PRICE = 300;
const MAX_PRIVATE_PASSENGERS = 10;

function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  // Selected package
  const [selectedPackageId, setSelectedPackageId] = useState<string | null>(null);
  const selectedPackage = packages.find(p => p.id === selectedPackageId);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-select package from URL parameter
  useEffect(() => {
    const packageParam = searchParams.get('package');
    if (packageParam) {
      const foundPackage = packages.find(p => p.id === packageParam);
      if (foundPackage) {
        setSelectedPackageId(packageParam);
      }
    }
  }, [searchParams]);

  // Form state
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [guestCount, setGuestCount] = useState(1);
  
  // Pickup options
  const [needPickup, setNeedPickup] = useState(true);
  const [hotelName, setHotelName] = useState('');
  const [roomNumber, setRoomNumber] = useState('');
  
  // Add-ons
  const [privateTransfer, setPrivateTransfer] = useState(false);
  const [privateTransferPassengers, setPrivateTransferPassengers] = useState(1);
  const [nonPlayerCount, setNonPlayerCount] = useState(0);
  
  // Dropdown state
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Selected add-ons
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  
  // Promotional add-ons with quantity
  const [promoAddonQuantities, setPromoAddonQuantities] = useState<Record<string, number>>({});


  // Update private transfer passengers min when guest count changes
  const handleGuestCountChange = (delta: number) => {
    const newCount = Math.max(1, guestCount + delta);
    setGuestCount(newCount);
    if (privateTransferPassengers < newCount) {
      setPrivateTransferPassengers(newCount);
    }
  };

  // Select package from dropdown
  const handleSelectPackage = (pkgId: string) => {
    setSelectedPackageId(pkgId);
    setIsDropdownOpen(false);
    setSelectedAddons([]);
  };

  // Toggle addon selection
  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    );
  };

  // Get available addons (exclude the selected main package)
  const availableAddons = addonPackages.filter(pkg => pkg.id !== selectedPackageId);

  // Update promo addon quantity
  const updatePromoAddonQty = (addonId: string, delta: number) => {
    setPromoAddonQuantities(prev => {
      const current = prev[addonId] || 0;
      const newQty = Math.max(0, current + delta);
      return { ...prev, [addonId]: newQty };
    });
  };

  // Price calculations
  const prices = useMemo(() => {
    if (!selectedPackage) return { base: 0, addons: 0, promoAddons: 0, transfer: 0, total: 0 };
    
    const base = selectedPackage.price * guestCount;

    let addons = 0;
    selectedAddons.forEach(addonId => {
      const addon = packages.find(p => p.id === addonId);
      if (addon) {
        addons += addon.price * guestCount;
      }
    });

    let promoAddons = 0;
    Object.entries(promoAddonQuantities).forEach(([addonId, qty]) => {
      if (qty > 0) {
        const promo = promotionalAddons.find(p => p.id === addonId);
        if (promo) {
          promoAddons += promo.price * qty;
        }
      }
    });

    let transfer = 0;
    if (privateTransfer) {
      transfer = PRIVATE_TRANSFER_PRICE;
    } else if (!needPickup) {
      transfer = 0;
    } else if (nonPlayerCount > 0) {
      transfer = nonPlayerCount * NON_PLAYER_PRICE;
    }

    return {
      base,
      addons,
      promoAddons,
      transfer,
      total: base + addons + promoAddons + transfer
    };
  }, [selectedPackage, guestCount, selectedAddons, promoAddonQuantities, privateTransfer, needPickup, nonPlayerCount]);

  // Check if selected package has open/flexible time
  const isOpenTimePackage = selectedPackageId ? openTimePackages.includes(selectedPackageId) : false;

  const isFormValid = selectedPackageId && selectedDate && 
    (isOpenTimePackage || selectedTime) && // Time slot not required for open time packages
    (selectedPackage?.includesTransfer ? (needPickup ? hotelName.trim() : true) : true);

  // Handle proceed to checkout
  const handleProceedToCheckout = () => {
    if (!isFormValid) return;
    
    // Build promo addons string (format: "id:qty,id:qty")
    const promoAddonsStr = Object.entries(promoAddonQuantities)
      .filter(([, qty]) => qty > 0)
      .map(([id, qty]) => `${id}:${qty}`)
      .join(',');
    
    // For open time packages, use "flexible" as the time value
    const timeValue = isOpenTimePackage ? 'flexible' : selectedTime;
    
    // Build URL params
    const params = new URLSearchParams({
      package: selectedPackageId!,
      date: selectedDate,
      time: timeValue,
      guests: guestCount.toString(),
      pickup: needPickup.toString(),
      hotel: hotelName,
      room: roomNumber,
      privateTransfer: privateTransfer.toString(),
      privatePassengers: privateTransferPassengers.toString(),
      nonPlayers: nonPlayerCount.toString(),
    });
    
    if (promoAddonsStr) {
      params.set('promoAddons', promoAddonsStr);
    }
    
    router.push(`/checkout?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-[#0A1612]">
      <Section 
        className="relative overflow-hidden min-h-[calc(100vh-80px)]"
        style={{ background: 'linear-gradient(135deg, #0A1612 0%, #0D2818 30%, #1B4332 60%, #0D2818 100%)' }}
      >
        <Container className="relative z-10 pt-[100px]">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-10">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-heading font-medium text-white mb-2 sm:mb-4">
              BOOK YOUR ADVENTURE
            </h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Package Selection Dropdown */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-heading font-medium text-white mb-4">
                  CHOOSE YOUR PACKAGE
                </h2>
                
                {/* Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`w-full p-4 rounded-2xl border-2 transition-all duration-300 text-left relative overflow-hidden ${
                      selectedPackage 
                        ? 'border-emerald-500/50 shadow-lg shadow-emerald-500/20' 
                        : 'border-white/20 bg-white/5 hover:border-emerald-500/30'
                    }`}
                    style={selectedPackage ? {
                      background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(16, 185, 129, 0.15) 100%)'
                    } : undefined}
                  >
                    {selectedPackage && (
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl" />
                      </div>
                    )}
                    {selectedPackage ? (
                      <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                        <div 
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-cover bg-center flex-shrink-0 shadow-lg ring-2 ring-white/20"
                          style={{ backgroundImage: `url(${selectedPackage.image})` }}
                        />
                        <div className="flex-grow min-w-0">
                          <h3 
                            className="text-lg sm:text-xl md:text-2xl font-heading font-bold truncate"
                            style={{ 
                              background: 'linear-gradient(90deg, #10b981, #34d399, #6ee7b7)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          >
                            {selectedPackage.name}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span className="flex items-center gap-1 text-xs text-white/60 bg-white/10 px-2 py-0.5 rounded-full">
                              <Clock className="w-3 h-3" />
                              {selectedPackage.duration}
                            </span>
                            {selectedPackage.includesMeal && (
                              <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">✓ Meal</span>
                            )}
                            {selectedPackage.includesTransfer && (
                              <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full">✓ Transfer</span>
                            )}
                          </div>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div 
                            className="text-xl sm:text-2xl font-heading font-bold"
                            style={{ 
                              background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          >
                            {formatPrice(selectedPackage.price)}
                          </div>
                          <div className="text-[10px] text-white/50">per person</div>
                        </div>
                        <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between py-2">
                        <span className="text-white/50">Select a package...</span>
                        <div className={`w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}>
                          <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 w-full mt-2 rounded-2xl border border-white/20 shadow-2xl overflow-hidden max-h-[400px] overflow-y-auto"
                        style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)' }}
                      >
                        {allBookablePackages.map((pkg, index) => (
                          <div
                            key={pkg.id}
                            onClick={() => handleSelectPackage(pkg.id)}
                            className={`p-4 cursor-pointer transition-all duration-200 border-b border-white/10 last:border-b-0 relative overflow-hidden ${
                              selectedPackageId === pkg.id 
                                ? 'bg-emerald-500/20' 
                                : 'hover:bg-white/10'
                            }`}
                          >
                            {selectedPackageId === pkg.id && (
                              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent" />
                            )}
                            <div className="flex items-center gap-4 relative z-10">
                              <div 
                                className="w-16 h-16 rounded-xl bg-cover bg-center flex-shrink-0 ring-2 ring-white/10"
                                style={{ backgroundImage: `url(${pkg.image})` }}
                              />
                              <div className="flex-grow min-w-0">
                                <h3 className="text-base font-heading font-bold text-white">
                                  {pkg.name}
                                </h3>
                                <div className="flex items-center gap-2 mt-1">
                                  <span className="text-xs text-white/50">{pkg.duration}</span>
                                  {pkg.includesMeal && <span className="text-xs text-emerald-400">✓ Meal</span>}
                                </div>
                              </div>
                              <div className="text-right flex-shrink-0">
                                <div className="text-lg font-heading font-bold text-amber-400">
                                  {formatPrice(pkg.price)}
                                </div>
                              </div>
                              {selectedPackageId === pkg.id && (
                                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                                  <Check className="w-4 h-4 text-white" />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Popular Packages Preview (when no package selected) */}
                {!selectedPackage && (
                  <div className="mt-6">
                    <h3 
                      className="text-lg font-heading font-bold mb-4 flex items-center gap-2"
                      style={{ 
                        background: 'linear-gradient(90deg, #ffffff, #a1a1aa)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      <span className="w-2 h-6 bg-gradient-to-b from-emerald-400 to-cyan-400 rounded-full"></span>
                      Popular Packages
                    </h3>
                    <div className="space-y-3">
                      {allBookablePackages.slice(0, 7).map((pkg, index) => (
                        <motion.div
                          key={pkg.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => handleSelectPackage(pkg.id)}
                          className="group flex items-center gap-4 p-3 rounded-2xl border border-white/10 cursor-pointer transition-all duration-300 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 relative overflow-hidden"
                          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 100%)' }}
                        >
                          {/* Hover gradient */}
                          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                          
                          {/* Image with glow effect */}
                          <div className="relative">
                            <div 
                              className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-cover bg-center flex-shrink-0 ring-2 ring-white/10 group-hover:ring-emerald-500/30 transition-all"
                              style={{ backgroundImage: `url(${pkg.image})` }}
                            />
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          
                          <div className="flex-grow min-w-0 relative z-10">
                            <h4 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                              {pkg.name}
                            </h4>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-white/50 bg-white/10 px-2 py-0.5 rounded-full">{pkg.duration}</span>
                              {pkg.includesMeal && (
                                <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">+ Meal</span>
                              )}
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end gap-1 relative z-10">
                            <div 
                              className="text-xl sm:text-2xl font-heading font-bold"
                              style={{ 
                                background: 'linear-gradient(90deg, #fbbf24, #f59e0b)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                              }}
                            >
                              {formatPrice(pkg.price)}
                            </div>
                            <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Promotional Add-ons */}
                <AnimatePresence>
                  {selectedPackage && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-6"
                    >
                      <div className="mt-6">
                        <h3 
                          className="font-heading mb-4 flex items-center gap-2 text-xl font-bold"
                          style={{ 
                            background: 'linear-gradient(90deg, #fb923c, #f97316, #ea580c)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                          }}
                        >
                          <span className="w-2 h-6 bg-gradient-to-b from-orange-400 to-red-500 rounded-full"></span>
                          ADD-ONS & PROMOTIONS
                        </h3>
                        <div className="space-y-4">
                          {promotionalAddons
                            .filter((promo) => {
                              if (!selectedPackage) return false;
                              const pkgCategory = selectedPackage.category;
                              const pkgFeatures = selectedPackage.features?.join(' ').toLowerCase() || '';
                              const hasZipline = pkgCategory === 'zipline' || pkgCategory === 'combined' || pkgFeatures.includes('zipline');
                              const hasRoller = pkgCategory === 'roller' || pkgCategory === 'combined' || pkgFeatures.includes('roller');
                              
                              if (promo.id === 'zipline-photos') return hasZipline;
                              if (promo.id === 'roller-videos') return hasRoller;
                              return true;
                            })
                            .map((promo) => {
                            const qty = promoAddonQuantities[promo.id] || 0;
                            return (
                              <div
                                key={promo.id}
                                className={`p-4 rounded-2xl border-2 relative overflow-hidden transition-all duration-300 ${
                                  qty > 0 
                                    ? 'border-orange-500/50 shadow-lg shadow-orange-500/20' 
                                    : 'border-white/10 hover:border-orange-500/30'
                                }`}
                                style={{ background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)' }}
                              >
                                {/* Animated background */}
                                <div className="absolute inset-0 overflow-hidden">
                                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/10 rounded-full blur-3xl" />
                                  <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl" />
                                </div>
                                
                                {/* Discount badge */}
                                {promo.discount && (
                                  <div className="absolute top-3 right-3 z-20">
                                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                                      {promo.discount}
                                    </span>
                                  </div>
                                )}
                                
                                <div className="flex gap-4 relative z-10">
                                  {/* Image */}
                                  <div
                                    className="w-[35%] aspect-square rounded-xl bg-cover bg-center flex-shrink-0 ring-2 ring-white/10"
                                    style={{
                                      backgroundImage: `url(${promo.image})`,
                                      backgroundSize: 'cover'
                                    }}
                                  />
                                  
                                  {/* Info & Quantity */}
                                  <div className="flex-grow min-w-0 flex flex-col justify-between">
                                    <div>
                                      <h4 className="text-lg font-heading font-bold text-white mb-1">
                                        {promo.name}
                                      </h4>
                                      <p className="text-xs text-white/50 line-clamp-2 mb-2">
                                        {promo.description}
                                      </p>
                                    </div>
                                    
                                    {/* Price and Quantity */}
                                    <div className="flex items-center justify-between">
                                      {/* Price */}
                                      <div className="flex items-baseline gap-2">
                                        {promo.originalPrice && (
                                          <span className="text-sm text-white/30 line-through">
                                            {formatPrice(promo.originalPrice)}
                                          </span>
                                        )}
                                        <span 
                                          className="text-2xl font-heading font-bold"
                                          style={{ 
                                            background: 'linear-gradient(90deg, #fb923c, #f59e0b)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            backgroundClip: 'text'
                                          }}
                                        >
                                          {formatPrice(promo.price)}
                                        </span>
                                      </div>
                                      
                                      {/* Quantity Selector */}
                                      <div className="flex items-center gap-2">
                                        <button
                                          onClick={() => updatePromoAddonQty(promo.id, -1)}
                                          disabled={qty <= 0}
                                          className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center hover:from-orange-400 hover:to-red-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg shadow-orange-500/30"
                                        >
                                          <Minus className="w-4 h-4 text-white" />
                                        </button>
                                        <span className="w-10 text-center text-xl font-bold text-white">{qty}</span>
                                        <button
                                          onClick={() => updatePromoAddonQty(promo.id, 1)}
                                          className="h-9 w-9 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center hover:from-orange-400 hover:to-red-400 transition-all shadow-lg shadow-orange-500/30"
                                        >
                                          <Plus className="w-4 h-4 text-white" />
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div>
              <AnimatePresence mode="wait">
                {selectedPackage ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative"
                    style={{ 
                      background: 'linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 50%, #0f0f0f 100%)',
                      border: '2px solid rgba(45, 106, 79, 0.3)'
                    }}
                  >
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
                      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-tr from-cyan-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                      <div 
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)'
                        }}
                      />
                    </div>

                    {/* Form Header */}
                    <div 
                      className="px-4 sm:px-6 py-5 sm:py-6 relative overflow-hidden"
                      style={{ 
                        background: 'linear-gradient(135deg, rgba(45, 106, 79, 0.3) 0%, rgba(16, 185, 129, 0.2) 50%, rgba(45, 106, 79, 0.3) 100%)',
                        borderBottom: '1px solid rgba(45, 106, 79, 0.3)' 
                      }}
                    >
                      {/* Decorative swirl */}
                      <img 
                        src="/images/swirl-bg.svg" 
                        alt=""
                        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-28 sm:w-40 h-28 sm:h-40 opacity-20 animate-spin-slow"
                      />
                      {/* Shining sweep effect */}
                      <div 
                        className="absolute inset-0 opacity-30"
                        style={{
                          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
                          backgroundSize: '200% 100%',
                          animation: 'shine 4s ease-in-out infinite'
                        }}
                      />
                      
                      <p className="text-emerald-400/80 text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-1 relative z-10 font-medium">BOOK YOUR EXPERIENCE</p>
                      <h2 
                        className="font-heading relative z-10 text-lg sm:text-xl md:text-[25px] font-bold"
                        style={{ 
                          background: 'linear-gradient(90deg, #10b981, #34d399, #6ee7b7, #34d399, #10b981)',
                          backgroundSize: '200% auto',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          backgroundClip: 'text'
                        }}
                      >
                        {selectedPackage.name}
                      </h2>
                    </div>

                    {/* Form Body */}
                    <div className="p-4 sm:p-6 space-y-5 sm:space-y-6 relative z-10">
                      {/* Section 1: Date & Time */}
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-emerald-500/30">1</span>
                          <CalendarDays className="w-5 h-5 text-emerald-400" />
                          <span className="font-bold text-white text-sm uppercase tracking-wide">Select Date & Time</span>
                        </div>
                        
                        <div className={`grid grid-cols-1 ${!isOpenTimePackage ? 'sm:grid-cols-2' : ''} gap-4`}>
                          <div>
                            <label className="block text-[10px] uppercase tracking-wider text-emerald-400/70 mb-2 font-medium">Activity Date</label>
                            <CalendarPicker
                              value={selectedDate}
                              onChange={setSelectedDate}
                              minDate={new Date().toISOString().split('T')[0]}
                            />
                          </div>
                          
                          {isOpenTimePackage ? (
                            selectedDate && (
                              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10">
                                <div className="flex items-center gap-2 mb-2">
                                  <Clock className="w-4 h-4 text-emerald-400" />
                                  <span className="text-sm font-medium text-white">Flexible Time</span>
                                </div>
                                <p className="text-xs text-white/70">
                                  This activity is available <span className="font-semibold text-emerald-400">anytime between 8:00 AM - 6:00 PM</span> on your selected date.
                                </p>
                              </div>
                            )
                          ) : (
                            <div>
                              <label className="block text-[10px] uppercase tracking-wider text-emerald-400/70 mb-2 font-medium">Time Slot</label>
                              <div className="grid grid-cols-2 gap-2">
                                {timeSlots.slice(0, 4).map((slot) => (
                                  <button
                                    key={slot.time}
                                    onClick={() => setSelectedTime(slot.time)}
                                    disabled={!slot.available}
                                    className={`h-11 px-3 rounded-lg border-2 text-sm font-medium transition-all ${
                                      selectedTime === slot.time
                                        ? 'border-emerald-500 bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                                        : 'border-white/20 bg-white/5 text-white/80 hover:border-emerald-500/50 hover:bg-white/10'
                                    } ${!slot.available && 'opacity-40 cursor-not-allowed'}`}
                                  >
                                    {slot.label}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Section 2: Number of Guests */}
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-cyan-500/30">2</span>
                          <Users className="w-5 h-5 text-cyan-400" />
                          <span className="font-bold text-white text-sm uppercase tracking-wide">Number of Players</span>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                          <div>
                            <span className="text-white font-medium text-base">Persons</span>
                            <p className="text-xs text-cyan-400">{formatPrice(selectedPackage.price)} per person</p>
                          </div>
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => handleGuestCountChange(-1)}
                              disabled={guestCount <= 1}
                              className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center hover:from-cyan-400 hover:to-cyan-500 disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-lg shadow-cyan-500/30"
                            >
                              <Minus className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </button>
                            <span className="w-12 text-center text-3xl font-bold text-white tabular-nums">
                              {guestCount}
                            </span>
                            <button
                              onClick={() => handleGuestCountChange(1)}
                              className="h-10 w-10 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/30"
                            >
                              <Plus className="w-5 h-5 text-white" strokeWidth={2.5} />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Section 3: Transport */}
                      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-amber-500/30">3</span>
                          <Car className="w-5 h-5 text-amber-400" />
                          <span className="font-bold text-white text-sm uppercase tracking-wide">Transport Options</span>
                        </div>

                        {/* Show pickup options only if package includes transfer */}
                        {selectedPackage.includesTransfer ? (
                          <>
                            {/* Pickup Toggle */}
                            <div className="grid grid-cols-2 gap-3 mb-4">
                              <button
                                onClick={() => setNeedPickup(true)}
                                className={`p-4 rounded-xl border-2 text-left transition-all ${
                                  needPickup 
                                    ? 'border-amber-500 bg-gradient-to-br from-amber-500/20 to-orange-500/20 shadow-lg shadow-amber-500/20' 
                                    : 'border-white/20 bg-white/5 hover:border-amber-500/50'
                                }`}
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <Car className={`w-4 h-4 ${needPickup ? 'text-amber-400' : 'text-white/50'}`} />
                                  <span className={`text-sm font-medium ${needPickup ? 'text-white' : 'text-white/70'}`}>
                                    Hotel Pickup
                                  </span>
                                </div>
                                <p className={`text-xs font-medium ${needPickup ? 'text-amber-400' : 'text-emerald-400/70'}`}>FREE SHARED TRANSFER</p>
                              </button>
                              
                              <button
                                onClick={() => setNeedPickup(false)}
                                className={`p-4 rounded-xl border-2 text-left transition-all ${
                                  !needPickup 
                                    ? 'border-amber-500 bg-gradient-to-br from-amber-500/20 to-orange-500/20 shadow-lg shadow-amber-500/20' 
                                    : 'border-white/20 bg-white/5 hover:border-amber-500/50'
                                }`}
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <Navigation className={`w-4 h-4 ${!needPickup ? 'text-amber-400' : 'text-white/50'}`} />
                                  <span className={`text-sm font-medium ${!needPickup ? 'text-white' : 'text-white/70'}`}>
                                    Come Direct
                                  </span>
                                </div>
                                <p className={`text-xs ${!needPickup ? 'text-white/70' : 'text-white/50'}`}>Self arrange</p>
                              </button>
                            </div>

                            {/* Hotel Details (when pickup selected) */}
                            <AnimatePresence>
                              {needPickup && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="space-y-3"
                            >
                              <div className="grid grid-cols-3 gap-3">
                                <div className="col-span-2">
                                  <label className="block text-[10px] uppercase tracking-wider text-amber-400/70 mb-2 font-medium">Hotel Name *</label>
                                  <div className="relative">
                                    <Hotel className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400" />
                                    <input
                                      type="text"
                                      value={hotelName}
                                      onChange={(e) => setHotelName(e.target.value)}
                                      placeholder="Your hotel name"
                                      className="w-full h-11 pl-10 pr-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-amber-500"
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label className="block text-[10px] uppercase tracking-wider text-amber-400/70 mb-2 font-medium">Room #</label>
                                  <input
                                    type="text"
                                    value={roomNumber}
                                    onChange={(e) => setRoomNumber(e.target.value)}
                                    placeholder="101"
                                    className="w-full h-11 px-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-amber-500"
                                  />
                                </div>
                              </div>

                              {/* Private Transfer Upgrade */}
                              <div 
                                onClick={() => setPrivateTransfer(!privateTransfer)}
                                className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                  privateTransfer 
                                    ? 'border-purple-500 bg-gradient-to-br from-purple-500/20 to-pink-500/20 shadow-lg shadow-purple-500/20' 
                                    : 'border-white/20 bg-white/5 hover:border-purple-500/50'
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                                      privateTransfer ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-white/10'
                                    }`}>
                                      <Car className={`w-5 h-5 ${privateTransfer ? 'text-white' : 'text-white/50'}`} />
                                    </div>
                                    <div>
                                      <p className="font-medium text-white text-sm">Upgrade to Private Transfer</p>
                                      <p className="text-xs text-white/60">Max {MAX_PRIVATE_PASSENGERS} passengers · +{formatPrice(PRIVATE_TRANSFER_PRICE)}</p>
                                    </div>
                                  </div>
                                  <div className={`w-12 h-7 rounded-full transition-colors ${privateTransfer ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-white/20'}`}>
                                    <div className={`w-5 h-5 rounded-full bg-white shadow-lg transition-transform mt-1 ${privateTransfer ? 'translate-x-6' : 'translate-x-1'}`} />
                                  </div>
                                </div>

                                {/* Passenger count when private transfer enabled */}
                                <AnimatePresence>
                                  {privateTransfer && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: 'auto' }}
                                      exit={{ opacity: 0, height: 0 }}
                                      className="mt-4 pt-4 border-t border-white/10"
                                      onClick={(e) => e.stopPropagation()}
                                    >
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                          <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                            <Users className="w-4 h-4 text-purple-400" />
                                          </div>
                                          <div>
                                            <p className="text-sm font-medium text-white">Total Passengers</p>
                                            <p className="text-xs text-white/50">
                                              {guestCount} guests + {privateTransferPassengers - guestCount} additional · Max {MAX_PRIVATE_PASSENGERS}
                                            </p>
                                          </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <button
                                            onClick={() => setPrivateTransferPassengers(Math.max(guestCount, privateTransferPassengers - 1))}
                                            disabled={privateTransferPassengers <= guestCount}
                                            className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center hover:bg-purple-400 disabled:opacity-30"
                                          >
                                            <Minus className="w-3 h-3 text-white" />
                                          </button>
                                          <span className="w-8 text-center font-bold text-white">{privateTransferPassengers}</span>
                                          <button
                                            onClick={() => setPrivateTransferPassengers(Math.min(MAX_PRIVATE_PASSENGERS, privateTransferPassengers + 1))}
                                            disabled={privateTransferPassengers >= MAX_PRIVATE_PASSENGERS}
                                            className="h-8 w-8 rounded-full bg-purple-500 flex items-center justify-center hover:bg-purple-400 disabled:opacity-30"
                                          >
                                            <Plus className="w-3 h-3 text-white" />
                                          </button>
                                        </div>
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>

                              {/* Non-player addon (only when private transfer OFF) */}
                              {!privateTransfer && (
                                <div className="p-4 rounded-xl border border-white/20 bg-white/5">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                                        <Users className="w-5 h-5 text-white/60" />
                                      </div>
                                      <div>
                                        <p className="font-medium text-white text-sm">Additional Non-Player</p>
                                        <p className="text-xs text-white/50">Shared transfer only · +{formatPrice(NON_PLAYER_PRICE)}/person</p>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <button
                                        onClick={() => setNonPlayerCount(Math.max(0, nonPlayerCount - 1))}
                                        disabled={nonPlayerCount <= 0}
                                        className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center hover:bg-amber-400 disabled:opacity-30"
                                      >
                                        <Minus className="w-3 h-3 text-white" />
                                      </button>
                                      <span className="w-8 text-center font-bold text-white">{nonPlayerCount}</span>
                                      <button
                                        onClick={() => setNonPlayerCount(nonPlayerCount + 1)}
                                        className="h-8 w-8 rounded-full bg-amber-500 flex items-center justify-center hover:bg-amber-400"
                                      >
                                        <Plus className="w-3 h-3 text-white" />
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Meeting Point (when self-drive) */}
                            <AnimatePresence>
                              {!needPickup && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10"
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                      <MapPin className="w-5 h-5 text-emerald-400" />
                                    </div>
                                    <div>
                                      <p className="font-medium text-white">SKY ROCK</p>
                                      <p className="text-xs text-white/60 mt-1">Khao Lak, Phang Nga, Thailand</p>
                                      <a 
                                        href="https://maps.app.goo.gl/hkNWgQQi1ksvYY37A" 
                                        target="_blank"
                                        className="mt-2 inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black text-xs font-bold rounded-lg transition-all shadow-lg shadow-yellow-500/30"
                                      >
                                        Open in Google Maps →
                                      </a>
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          /* Package does NOT include transfer - Show self-arrange only */
                          <div className="space-y-4">
                            <div className="p-4 rounded-xl border border-amber-500/30 bg-amber-500/10">
                              <div className="flex items-center gap-2 mb-2">
                                <Navigation className="w-4 h-4 text-amber-400" />
                                <span className="text-sm font-medium text-white">Self Transfer</span>
                              </div>
                              <p className="text-xs text-white/60">This package does not include transfer. Please arrange your own transportation to SKY ROCK.</p>
                            </div>
                            
                            <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10">
                              <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                                  <MapPin className="w-5 h-5 text-emerald-400" />
                                </div>
                                <div className="min-w-0">
                                  <p className="font-medium text-white">SKY ROCK</p>
                                  <p className="text-xs text-white/60 mt-1">Khao Lak, Phang Nga, Thailand</p>
                                  <a 
                                    href="https://maps.app.goo.gl/hkNWgQQi1ksvYY37A" 
                                    target="_blank"
                                    className="mt-2 inline-flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-300 hover:to-amber-400 text-black text-xs font-bold rounded-lg transition-all shadow-lg shadow-yellow-500/30"
                                  >
                                    Open in Google Maps →
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Price Summary */}
                      <div 
                        className="rounded-xl p-4 relative overflow-hidden"
                        style={{ 
                          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15) 0%, rgba(6, 182, 212, 0.1) 50%, rgba(16, 185, 129, 0.15) 100%)',
                          border: '1px solid rgba(16, 185, 129, 0.3)'
                        }}
                      >
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-white/70 truncate mr-2">{selectedPackage.name} × {guestCount}</span>
                            <span className="font-semibold text-white flex-shrink-0">{formatPrice(prices.base)}</span>
                          </div>
                          
                          {selectedAddons.length > 0 && selectedAddons.map(addonId => {
                            const addon = packages.find(p => p.id === addonId);
                            if (!addon) return null;
                            return (
                              <div key={addonId} className="flex justify-between text-sm">
                                <span className="text-white/70 truncate mr-2">{addon.name} × {guestCount}</span>
                                <span className="text-emerald-400 flex-shrink-0">+{formatPrice(addon.price * guestCount)}</span>
                              </div>
                            );
                          })}

                          {Object.entries(promoAddonQuantities).map(([addonId, qty]) => {
                            if (qty <= 0) return null;
                            const promo = promotionalAddons.find(p => p.id === addonId);
                            if (!promo) return null;
                            return (
                              <div key={addonId} className="flex justify-between text-sm">
                                <span className="text-white/70 truncate mr-2">{promo.name} × {qty}</span>
                                <span className="text-emerald-400 flex-shrink-0">+{formatPrice(promo.price * qty)}</span>
                              </div>
                            );
                          })}
                          
                          {privateTransfer && (
                            <div className="flex justify-between text-sm">
                              <span className="text-white/70">Private Transfer</span>
                              <span className="text-purple-400 flex-shrink-0">+{formatPrice(PRIVATE_TRANSFER_PRICE)}</span>
                            </div>
                          )}
                          
                          {!privateTransfer && nonPlayerCount > 0 && (
                            <div className="flex justify-between text-sm">
                              <span className="text-white/70">Non-Player × {nonPlayerCount}</span>
                              <span className="text-amber-400 flex-shrink-0">+{formatPrice(nonPlayerCount * NON_PLAYER_PRICE)}</span>
                            </div>
                          )}
                          
                          <div className="border-t border-white/20 pt-3 mt-3 flex justify-between items-center">
                            <span className="font-medium text-white/60 text-sm uppercase tracking-wide">Total</span>
                            <span 
                              className="text-3xl font-extrabold"
                              style={{ 
                                background: 'linear-gradient(90deg, #10b981, #34d399, #6ee7b7)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                              }}
                            >
                              {formatPrice(prices.total)}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="button"
                        onClick={handleProceedToCheckout}
                        disabled={!isFormValid}
                        className="w-full h-14 rounded-xl font-bold text-white flex items-center justify-center gap-3 transition-all disabled:opacity-50 disabled:cursor-not-allowed group text-base relative overflow-hidden"
                        style={{
                          background: isFormValid 
                            ? 'linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)' 
                            : 'linear-gradient(135deg, #374151 0%, #1f2937 100%)',
                          boxShadow: isFormValid ? '0 10px 40px rgba(16, 185, 129, 0.4)' : 'none'
                        }}
                      >
                        {isFormValid && (
                          <div 
                            className="absolute inset-0 opacity-30"
                            style={{
                              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)',
                              backgroundSize: '200% 100%',
                              animation: 'shine 2s ease-in-out infinite'
                            }}
                          />
                        )}
                        <span className="relative z-10">Proceed to Checkout</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                      </button>

                      {/* Trust Badges */}
                      <div className="flex items-center justify-center gap-6 text-[10px] text-white/40">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4" />
                          Secure Payment
                        </span>
                        <span className="flex items-center gap-1.5">
                          <CalendarDays className="w-4 h-4" />
                          Instant Confirmation
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full min-h-[500px] flex items-center justify-center rounded-2xl border-2 border-dashed border-white/20 bg-white/5"
                  >
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                        <CalendarDays className="w-10 h-10 text-white/30" />
                      </div>
                      <p className="text-white/50 text-lg">Select a package to continue</p>
                      <p className="text-white/30 text-sm mt-1">Choose from the options on the left</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-[#0A1612]">
        <Section className="relative overflow-hidden">
          <Container className="relative z-10">
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            </div>
          </Container>
        </Section>
      </main>
    }>
      <BookingContent />
    </Suspense>
  );
}
