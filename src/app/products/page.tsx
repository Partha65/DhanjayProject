'use client';

import Link from 'next/link';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { Smartphone, CreditCard, ArrowRightLeft, ShoppingCart, Wallet, Code, Volume2, QrCode } from 'lucide-react';

const products = [
  { title: 'UPI', href: '/products/upi', description: 'Accept UPI payments from all apps with instant settlements and real-time tracking.', icon: <Smartphone className="w-8 h-8" />, color: 'from-blue-500 to-cyan-500', border: 'border-blue-500/20' },
  { title: 'Collection Service', href: '/products/collection-service', description: 'Automated payment collection with multi-channel support and smart invoice management.', icon: <CreditCard className="w-8 h-8" />, color: 'from-purple-500 to-pink-500', border: 'border-purple-500/20' },
  { title: 'Payout Solution', href: '/products/payout-solution', description: 'Instant disbursements to vendors, partners, and customers with bulk transfer support.', icon: <ArrowRightLeft className="w-8 h-8" />, color: 'from-orange-500 to-amber-500', border: 'border-orange-500/20' },
  { title: 'Smart Checkout', href: '/products/smart-checkout', description: 'Customizable checkout experience with higher conversion rates and subscription support.', icon: <ShoppingCart className="w-8 h-8" />, color: 'from-green-500 to-emerald-500', border: 'border-green-500/20' },
  { title: 'Wallet', href: '/products/wallet', description: 'Digital wallet solutions with seamless top-up, peer-to-peer transfers, and merchant payments.', icon: <Wallet className="w-8 h-8" />, color: 'from-pink-500 to-rose-500', border: 'border-pink-500/20' },
  { title: 'Payment Gateway API', href: '/products/api', description: 'Developer-friendly REST APIs for seamless payment integration with comprehensive documentation.', icon: <Code className="w-8 h-8" />, color: 'from-indigo-500 to-blue-500', border: 'border-indigo-500/20' },
  { title: 'Sound Box', href: '#', description: 'Voice-enabled payment confirmation device for merchants. Coming Soon!', icon: <Volume2 className="w-8 h-8" />, color: 'from-gray-500 to-gray-600', border: 'border-gray-500/20', comingSoon: true },
  { title: 'Static & Dynamic QR', href: '#', description: 'Generate static and dynamic QR codes for easy payment acceptance. Coming Soon!', icon: <QrCode className="w-8 h-8" />, color: 'from-gray-500 to-gray-600', border: 'border-gray-500/20', comingSoon: true },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <ScrollFadeIn className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-500/15 px-4 py-2 rounded-full text-sm font-medium text-purple-300 mb-6 border border-purple-500/20">
            Our Products
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Payment Solutions
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Comprehensive suite of payment products designed for every business need
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <ScrollFadeIn key={product.title} delay={i * 0.08}>
              <Link href={product.comingSoon ? '#' : product.href} className="block h-full">
                <div className={`group relative rounded-2xl border ${product.border} bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 h-full ${product.comingSoon ? 'opacity-60 cursor-not-allowed' : ''}`}>
                  {product.comingSoon && (
                    <div className="absolute top-3 right-3 px-2 py-0.5 text-xs font-bold bg-orange-500/20 text-orange-400 rounded-full">
                      Coming Soon
                    </div>
                  )}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${product.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{product.description}</p>
                </div>
              </Link>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
