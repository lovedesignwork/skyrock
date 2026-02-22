'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Lock, Mail, Eye, EyeOff, Loader2, AlertCircle } from 'lucide-react';
import { signIn } from '@/lib/supabase/auth';
import Image from 'next/image';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    console.log('[Login] Starting sign in for:', email);

    try {
      console.log('[Login] Calling signIn...');
      const authData = await signIn(email, password);
      console.log('[Login] signIn returned:', { 
        hasSession: !!authData.session, 
        hasUser: !!authData.user,
        userId: authData.user?.id 
      });
      
      if (!authData.session) {
        console.log('[Login] No session returned');
        setError('Sign in failed. Please try again.');
        return;
      }

      console.log('[Login] Calling check-admin API...');
      // Check if user is admin - pass the access token
      const response = await fetch(`/api/auth/check-admin?email=${encodeURIComponent(email)}`, {
        headers: {
          'Authorization': `Bearer ${authData.session.access_token}`,
        },
      });
      console.log('[Login] check-admin response status:', response.status);
      const data = await response.json();
      console.log('[Login] check-admin data:', data);
      
      if (data.isAdmin) {
        console.log('[Login] User is admin, redirecting...');
        // Store admin info in localStorage for client-side checks
        localStorage.setItem('adminUser', JSON.stringify(data.user));
        // Force navigation using window.location for a clean redirect
        window.location.href = '/admin';
      } else {
        console.log('[Login] User is NOT admin');
        setError('You do not have admin access.');
      }
    } catch (err: unknown) {
      console.error('[Login] Error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Invalid email or password';
      setError(errorMessage);
    } finally {
      console.log('[Login] Finally block, setting loading to false');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div 
            className="px-8 py-6 text-center"
            style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 50%, #40916C 100%)' }}
          >
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 p-2">
              <Image
                src="/images/skyrocklogo.png"
                alt="Sky Rock"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold text-white font-heading">ADMIN LOGIN</h1>
            <p className="text-white/70 text-sm mt-1">Sky Rock Management Portal</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 text-sm"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                {error}
              </motion.div>
            )}

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@skyrockkhaolak.com"
                  className="w-full h-12 pl-11 pr-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F]"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-12 pl-11 pr-12 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:border-[#2D6A4F] focus:ring-1 focus:ring-[#2D6A4F]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 100%)' }}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <Lock className="w-5 h-5" />
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="px-8 pb-6 text-center">
            <p className="text-xs text-slate-400">
              Protected area. Authorized personnel only.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
