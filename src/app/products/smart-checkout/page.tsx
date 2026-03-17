'use client';

import Link from 'next/link';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { Home, CreditCard, ShoppingCart, CheckCircle, ArrowRight, Palette, Zap, Globe, Shield, BarChart3, Repeat } from 'lucide-react';

const features = [
  { icon: <Palette className="w-6 h-6" />, title: 'Customizable UI', description: 'Fully customizable checkout page that matches your brand identity and design language.', color: 'from-green-500 to-emerald-500' },
  { icon: <Zap className="w-6 h-6" />, title: 'One-click Payments', description: 'Saved cards and UPI IDs for returning customers — reducing friction and increasing conversions.', color: 'from-blue-500 to-cyan-500' },
  { icon: <Globe className="w-6 h-6" />, title: '50+ Payment Modes', description: 'Accept cards, UPI, net banking, wallets, EMI, BNPL, and international payments.', color: 'from-purple-500 to-pink-500' },
  { icon: <Shield className="w-6 h-6" />, title: 'Fraud Prevention', description: 'Machine learning powered fraud detection with real-time risk scoring.', color: 'from-orange-500 to-amber-500' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Conversion Analytics', description: 'Track checkout funnel performance and optimize for higher conversion rates.', color: 'from-indigo-500 to-blue-500' },
  { icon: <Repeat className="w-6 h-6" />, title: 'Subscriptions', description: 'Built-in subscription billing with flexible plans, trial periods, and auto-renewal.', color: 'from-pink-500 to-rose-500' },
];

export default function SmartCheckoutPage() {
  return (
    <div className="min-h-screen px-6 py-16 text-gray-200" style={{ background: `radial-gradient(ellipse at 30% 40%, #552a7a 0%, #31205b 25%, #151328 55%, #0c0b18 80%, #090918 100%)`, backgroundColor: '#0c0b18' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-8">
          <div className="relative backdrop-blur-xl bg-gradient-to-r from-white/[0.08] via-white/[0.05] to-white/[0.08] border border-white/10 rounded-2xl shadow-2xl">
            <nav className="px-6 py-4 flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all"><div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20"><Home className="w-4 h-4" /></div><span className="font-medium text-sm">Home</span></Link>
              <span className="text-gray-500">›</span>
              <Link href="/products" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all"><div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20"><CreditCard className="w-4 h-4" /></div><span className="font-medium text-sm">Products</span></Link>
              <span className="text-gray-500">›</span>
              <span className="text-green-400 font-semibold text-sm">Smart Checkout</span>
            </nav>
          </div>
        </div>

        <ScrollFadeIn className="mb-16 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-green-300 mb-6 border border-white/20 animate-bounce">
            <ShoppingCart className="w-4 h-4 mr-2" /> Smart Checkout
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Smart Checkout Experience
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-cyan-500 mx-auto rounded-full mb-8 animate-pulse" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Customizable checkout that converts more customers with 50+ payment modes and smart features.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="group bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${f.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-cyan-600/20" />
            <div className="relative p-8 md:p-12 text-center border border-white/20 rounded-3xl">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent mb-4">Ready to Boost Your Conversions?</h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">Implement Smart Checkout and see conversion rates increase by up to 30%.</p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
