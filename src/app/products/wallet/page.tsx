'use client';

import Link from 'next/link';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { Home, CreditCard, Wallet, ArrowRight } from 'lucide-react';

const features = [
  { title: 'Mobile Wallet', description: 'Full-featured digital wallet for seamless mobile payments.', color: 'from-pink-500 to-rose-500' },
  { title: 'Instant Top-up', description: 'Quick wallet loading via UPI, cards, net banking.', color: 'from-blue-500 to-cyan-500' },
  { title: 'P2P Transfers', description: 'Peer-to-peer transfers with zero fees.', color: 'from-purple-500 to-indigo-500' },
  { title: 'QR Payments', description: 'Scan and pay with dynamic QR codes.', color: 'from-green-500 to-emerald-500' },
  { title: 'Secure Storage', description: 'Bank-grade security with biometric access.', color: 'from-orange-500 to-amber-500' },
  { title: 'Merchant Payments', description: 'One-tap wallet payments at any merchant.', color: 'from-indigo-500 to-blue-500' },
];

export default function WalletPage() {
  return (
    <div className="min-h-screen px-6 py-16 text-gray-200" style={{ background: `radial-gradient(ellipse at 30% 40%, #552a7a 0%, #31205b 25%, #151328 55%, #0c0b18 80%, #090918 100%)` }}>
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-8">
          <div className="backdrop-blur-xl bg-gradient-to-r from-white/[0.08] via-white/[0.05] to-white/[0.08] border border-white/10 rounded-2xl">
            <nav className="px-6 py-4 flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-white"><div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20"><Home className="w-4 h-4" /></div><span className="text-sm">Home</span></Link>
              <span className="text-gray-500">›</span>
              <Link href="/products" className="flex items-center space-x-2 text-gray-300 hover:text-white"><div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20"><CreditCard className="w-4 h-4" /></div><span className="text-sm">Products</span></Link>
              <span className="text-gray-500">›</span>
              <span className="text-pink-400 font-semibold text-sm">Wallet</span>
            </nav>
          </div>
        </div>

        <ScrollFadeIn className="mb-16 text-center">
          <div className="inline-flex items-center bg-white/10 px-6 py-3 rounded-full text-sm text-pink-300 mb-6 border border-white/20 animate-bounce"><Wallet className="w-4 h-4 mr-2" />Digital Wallet</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 bg-clip-text text-transparent">Digital Wallet Solutions</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-red-500 mx-auto rounded-full mb-8 animate-pulse" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Full-featured wallet with seamless top-up, P2P transfers, and merchant payments.</p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((f) => (
            <div key={f.title} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${f.color} flex items-center justify-center text-white mb-4`}><Wallet className="w-6 h-6" /></div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-300 text-sm">{f.description}</p>
            </div>
          ))}
        </div>

        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-rose-600/20" />
          <div className="relative p-12 text-center border border-white/20 rounded-3xl">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-300 to-rose-300 bg-clip-text text-transparent mb-4">Launch Your Digital Wallet</h2>
            <p className="text-gray-200 mb-8">Get started with our white-label wallet solution.</p>
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-2xl font-semibold hover:-translate-y-1 transition-all shadow-lg">Contact Sales <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
