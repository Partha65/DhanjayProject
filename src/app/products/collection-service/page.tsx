'use client';

import Link from 'next/link';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { Home, CreditCard, CheckCircle, ArrowRight, Banknote, FileCheck, BarChart3, Shield, Clock, RefreshCw } from 'lucide-react';

const features = [
  { icon: <Banknote className="w-6 h-6" />, title: 'Automated Collections', description: 'Automate payment collection with recurring billing, e-mandates, and scheduled debits.', color: 'from-blue-500 to-cyan-500' },
  { icon: <FileCheck className="w-6 h-6" />, title: 'Smart Invoicing', description: 'Generate and send professional invoices with payment links and automatic reminders.', color: 'from-purple-500 to-pink-500' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Real-time Analytics', description: 'Track collection performance with detailed dashboards and exportable reports.', color: 'from-green-500 to-emerald-500' },
  { icon: <Shield className="w-6 h-6" />, title: 'Fraud Protection', description: 'Advanced fraud detection with machine learning and risk scoring for every transaction.', color: 'from-orange-500 to-amber-500' },
  { icon: <Clock className="w-6 h-6" />, title: 'Fast Settlements', description: 'T+1 standard settlements with express options for same-day fund availability.', color: 'from-indigo-500 to-blue-500' },
  { icon: <RefreshCw className="w-6 h-6" />, title: 'Auto-retry Logic', description: 'Intelligent retry mechanisms for failed payments with customizable retry schedules.', color: 'from-pink-500 to-rose-500' },
];

const benefits = [
  'Support for 100+ payment methods',
  'Customizable payment pages and forms',
  'Multi-currency collection support',
  'Webhook notifications for payment events',
  'Automated reconciliation and settlement',
  'Dedicated integration support team',
];

export default function CollectionServicePage() {
  return (
    <div className="min-h-screen px-6 py-16 text-gray-200" style={{ background: `radial-gradient(ellipse at 30% 40%, #552a7a 0%, #31205b 25%, #151328 55%, #0c0b18 80%, #090918 100%)`, backgroundColor: '#0c0b18' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="relative backdrop-blur-xl bg-gradient-to-r from-white/[0.08] via-white/[0.05] to-white/[0.08] border border-white/10 rounded-2xl shadow-2xl">
            <nav className="px-6 py-4 flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all"><div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20"><Home className="w-4 h-4" /></div><span className="font-medium text-sm">Home</span></Link>
              <span className="text-gray-500">›</span>
              <Link href="/products" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-all"><div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20"><CreditCard className="w-4 h-4" /></div><span className="font-medium text-sm">Products</span></Link>
              <span className="text-gray-500">›</span>
              <span className="text-cyan-400 font-semibold text-sm">Collection Service</span>
            </nav>
          </div>
        </div>

        <ScrollFadeIn className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Collection Service
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-8 animate-pulse" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Automated payment collection solutions with smart invoicing, recurring billing, and multi-channel payment acceptance.
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="group bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${f.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn className="mb-16">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Why Choose Our Collection Service?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((b) => (
                <div key={b} className="flex items-start hover:bg-white/5 p-4 rounded-xl transition-all">
                  <CheckCircle className="text-green-400 mr-3 mt-1 shrink-0 w-5 h-5" />
                  <span className="text-gray-200">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/20 via-blue-600/20 to-purple-600/20" />
            <div className="relative p-8 md:p-12 text-center border border-white/20 rounded-3xl">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">Ready to Automate Your Collections?</h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">Start collecting payments automatically with our smart collection service.</p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
