'use client';

import { motion } from 'framer-motion';
import { 
  Shield, 
  Scale, 
  Heart, 
  Shirt, 
  Clock, 
  AlertTriangle, 
  CheckCircle, 
  XCircle,
  Baby,
  Camera,
  Droplets,
  Sun,
  Phone,
  Mail
} from 'lucide-react';

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-[#0A1612]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-amber-500/15 to-orange-500/15 rounded-full blur-3xl" />
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
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-white mb-6">
              SAFETY{' '}
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                INFORMATION
              </span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Your safety is our top priority. Please read this information carefully before your visit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Requirements Cards */}
      <section className="relative pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid md:grid-cols-3 gap-4"
          >
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-sm text-center">
              <Scale className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
              <h3 className="font-bold text-white mb-1">Weight Limit</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">15 - 120 kg</p>
              <p className="text-xs text-white/50 mt-1">For zipline activities</p>
            </div>
            <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm text-center">
              <Baby className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-bold text-white mb-1">Minimum Age</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">4 Years</p>
              <p className="text-xs text-white/50 mt-1">With adult supervision</p>
            </div>
            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 backdrop-blur-sm text-center">
              <Clock className="w-12 h-12 text-amber-400 mx-auto mb-3" />
              <h3 className="font-bold text-white mb-1">Arrive Early</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">30 Minutes</p>
              <p className="text-xs text-white/50 mt-1">Before scheduled time</p>
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
              <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
              <div className="absolute bottom-20 left-10 w-24 h-24 bg-teal-500/10 rounded-full blur-2xl" />
              
              {/* Content */}
              <div className="relative z-10 p-8 md:p-12 space-y-10">
                {/* Health Requirements */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Health Requirements</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Can Participate */}
                    <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                      <h3 className="font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        You CAN Participate If:
                      </h3>
                      <ul className="space-y-2 text-sm text-white/70">
                        {[
                          'You are in good general health',
                          'You weigh between 15kg and 120kg',
                          'You are at least 4 years old (with guardian)',
                          'You can follow safety instructions',
                          'You have no recent injuries affecting mobility'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-400 mt-0.5">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Cannot Participate */}
                    <div className="p-5 rounded-2xl bg-red-500/10 border border-red-500/20">
                      <h3 className="font-semibold text-red-400 mb-4 flex items-center gap-2">
                        <XCircle className="w-5 h-5" />
                        You CANNOT Participate If:
                      </h3>
                      <ul className="space-y-2 text-sm text-white/70">
                        {[
                          'You are pregnant',
                          'You have had recent surgery',
                          'You have heart conditions',
                          'You are under influence of alcohol/drugs',
                          'You have severe fear of heights',
                          'You have back, neck or joint problems'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-red-400 mt-0.5">✕</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* What to Wear */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                      <Shirt className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">What to Wear</h2>
                  </div>
                  <div className="pl-13 space-y-4">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {[
                        { icon: '👟', title: 'Closed-toe Shoes', desc: 'Required - sneakers or sports shoes (no sandals/heels)' },
                        { icon: '👕', title: 'Comfortable Clothing', desc: 'Light, breathable fabrics that allow movement' },
                        { icon: '🧢', title: 'Hair Tied Back', desc: 'Long hair must be secured' },
                        { icon: '💍', title: 'Remove Jewelry', desc: 'No loose necklaces, earrings, or accessories' }
                      ].map((item, i) => (
                        <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-2xl">{item.icon}</span>
                            <h4 className="font-semibold text-white">{item.title}</h4>
                          </div>
                          <p className="text-sm text-white/60">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* What to Bring */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">What to Bring</h2>
                  </div>
                  <div className="pl-13 grid sm:grid-cols-3 gap-3">
                    {[
                      { icon: Sun, text: 'Sunscreen', color: 'amber' },
                      { icon: Droplets, text: 'Insect Repellent', color: 'emerald' },
                      { icon: Camera, text: 'Camera with Strap', color: 'blue' }
                    ].map((item, i) => (
                      <div key={i} className={`p-4 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20 flex items-center gap-3`}>
                        <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                        <span className="text-white/70">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Safety Equipment */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Our Safety Standards</h2>
                  </div>
                  <div className="pl-13 space-y-4 text-white/70 leading-relaxed">
                    <p>All equipment and facilities meet <strong className="text-white">European EN 15567 safety standards</strong>. We provide:</p>
                    <ul className="space-y-2">
                      {[
                        'Petzl harnesses and safety equipment',
                        'Double-line redundant safety system',
                        'Daily equipment inspections',
                        'Certified professional guides',
                        'Comprehensive insurance coverage'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-2 h-2 mt-2 rounded-full bg-emerald-400 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Important Notice */}
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-amber-400 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-bold text-amber-400 mb-2">Important Notice</h3>
                      <p className="text-white/70">
                        All participants must sign a liability waiver before participating. Final determination 
                        of fitness to participate is at the discretion of our safety staff. Our guides reserve 
                        the right to refuse participation if safety requirements are not met.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">Questions?</h2>
                  </div>
                  <div className="pl-13 space-y-4">
                    <p className="text-white/70">If you have health concerns or questions about participation:</p>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-white/70">
                          <Mail className="w-4 h-4 text-emerald-400" />
                          <span>info@skyrockkhaolak.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-white/70">
                          <Phone className="w-4 h-4 text-emerald-400" />
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
