'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { Home, CreditCard, Smartphone, CheckCircle, ChevronDown, Shield, Zap, ArrowRight, Clock, Globe, Lock } from 'lucide-react';

const features = [
  { icon: <Zap className="w-6 h-6" />, title: 'Instant Payment Acceptance', description: 'Accept payments from all UPI-enabled apps instantly with real-time settlement.', color: 'from-blue-500 to-cyan-500' },
  { icon: <Shield className="w-6 h-6" />, title: 'Dynamic QR Codes', description: 'Generate dynamic QR codes for seamless in-store and online transactions.', color: 'from-purple-500 to-pink-500' },
  { icon: <Globe className="w-6 h-6" />, title: 'Multi-bank Support', description: 'Support for 100+ banks with real-time settlement and reconciliation.', color: 'from-green-500 to-emerald-500' },
  { icon: <Clock className="w-6 h-6" />, title: 'Webhook Notifications', description: 'Advanced webhook notifications for instant transaction status updates.', color: 'from-orange-500 to-amber-500' },
  { icon: <Lock className="w-6 h-6" />, title: 'PCI DSS Compliant', description: 'Enterprise-grade security with PCI DSS Level 1 compliance.', color: 'from-red-500 to-pink-500' },
  { icon: <Smartphone className="w-6 h-6" />, title: 'Comprehensive Dashboard', description: 'Real-time analytics and reporting for complete payment visibility.', color: 'from-indigo-500 to-purple-500' },
];

const payinFeatures = [
  'Instant payment acceptance from all UPI-enabled apps',
  'Dynamic QR code generation for seamless transactions',
  'Multi-bank support with real-time settlement',
  'Advanced webhook notifications for transaction updates',
  'Comprehensive dashboard for payment tracking',
];

const payoutFeatures = [
  'Instant bulk payouts to multiple beneficiaries',
  '24/7 payout processing with real-time status updates',
  'Automated reconciliation and reporting',
  'Fund management with escrow account support',
  'Advanced fraud detection and prevention',
];

const faqs = [
  { question: 'What is a UPI payment gateway?', answer: 'A UPI payment gateway enables businesses to accept payments through UPI apps like Google Pay, PhonePe, Paytm, and others. It provides a secure and instant way to collect payments from customers.' },
  { question: 'How fast are UPI settlements?', answer: 'UPI transactions are settled in real-time. With our express settlement feature, merchants can receive funds within 15 minutes of the transaction.' },
  { question: 'Is UPI integration difficult?', answer: 'Not at all! Our RESTful APIs and comprehensive documentation make integration straightforward. Most businesses are up and running within a few hours.' },
  { question: 'What security measures are in place?', answer: 'We implement PCI DSS Level 1 compliance, 256-bit SSL encryption, tokenization, UPI PIN authentication, and advanced fraud detection systems.' },
];

export default function UPIPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen px-6 py-16 text-gray-200"
      style={{
        background: `radial-gradient(ellipse at 30% 40%, #552a7a 0%, #31205b 25%, #151328 55%, #0c0b18 80%, #090918 100%)`,
        backgroundColor: '#0c0b18',
      }}
    >
      {/* Aurora glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="mb-8">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="relative backdrop-blur-xl bg-gradient-to-r from-white/[0.08] via-white/[0.05] to-white/[0.08] border border-white/10 rounded-2xl shadow-2xl">
              <nav className="relative z-10 px-6 py-4">
                <div className="flex items-center space-x-3">
                  <Link href="/" className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-600/20">
                      <Home className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-sm">Home</span>
                  </Link>
                  <span className="text-gray-500">›</span>
                  <Link href="/products" className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-all duration-300">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-600/20">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-sm">Products</span>
                  </Link>
                  <span className="text-gray-500">›</span>
                  <span className="text-blue-400 font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent text-sm">UPI</span>
                </div>
              </nav>
            </div>
          </div>
        </div>

        {/* Hero */}
        <ScrollFadeIn className="mb-16 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-purple-300 mb-6 border border-white/20 animate-bounce">
            <Smartphone className="w-4 h-4 mr-2" />
            UPI Payment Gateway Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent leading-tight">
            UPI Payment Gateway for Businesses in Delhi &amp; India
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 mx-auto rounded-full mb-8 animate-pulse" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Enable fast and secure digital payments with a reliable <strong>UPI payment gateway</strong> trusted by businesses in <strong>Delhi</strong> and across India.
          </p>
        </ScrollFadeIn>

        {/* Features grid */}
        <ScrollFadeIn className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            Why Choose Our UPI Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={f.title} className="group relative overflow-hidden rounded-2xl">
                <div className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-500 group-hover:scale-105 hover:shadow-xl">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${f.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        {/* Pay-in / Pay-out */}
        <ScrollFadeIn className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            Core Features
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 transform group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent mb-6">UPI Pay-in Solutions</h3>
                <div className="space-y-4">
                  {payinFeatures.map((f) => (
                    <div key={f} className="flex items-start hover:bg-white/5 p-3 rounded-xl transition-all">
                      <div className="p-1 bg-green-500/20 rounded-full mr-3 mt-1 border border-green-400/20">
                        <CheckCircle className="text-green-400 w-4 h-4" />
                      </div>
                      <span className="text-gray-200 leading-relaxed text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-600/20 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 transform group-hover:-translate-y-2">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-pink-400 bg-clip-text text-transparent mb-6">UPI Pay-out Solutions</h3>
                <div className="space-y-4">
                  {payoutFeatures.map((f) => (
                    <div key={f} className="flex items-start hover:bg-white/5 p-3 rounded-xl transition-all">
                      <div className="p-1 bg-green-500/20 rounded-full mr-3 mt-1 border border-green-400/20">
                        <CheckCircle className="text-green-400 w-4 h-4" />
                      </div>
                      <span className="text-gray-200 leading-relaxed text-sm">{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>

        {/* FAQ */}
        <ScrollFadeIn className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 overflow-hidden hover:bg-white/15 transition-all duration-300">
                <button className="w-full text-left p-6 focus:outline-none" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-purple-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div className={`transition-all duration-300 ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-6 pb-6"><p className="text-gray-300 leading-relaxed">{faq.answer}</p></div>
                </div>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        {/* CTA */}
        <ScrollFadeIn>
          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-pink-600/20" />
            <div className="relative p-8 md:p-12 text-center border border-white/20 rounded-3xl">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
                Ready to Transform Your Payments?
              </h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
                Join thousands of businesses already using our enterprise-grade UPI solutions.
              </p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Get Started Today <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
