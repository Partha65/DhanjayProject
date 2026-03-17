'use client';

import { useState } from 'react';
import Link from 'next/link';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { Home, CreditCard, ArrowRightLeft, CheckCircle, ChevronDown, ArrowRight, Banknote, Users, BarChart3, Shield, Zap, Globe } from 'lucide-react';

const steps = [
  { step: 1, title: 'API Integration', description: 'Quick integration with comprehensive documentation and SDKs for seamless setup.', color: 'from-blue-500 to-cyan-500' },
  { step: 2, title: 'Initiate Payout', description: 'Create payout requests with beneficiary details, amount, and preferred transfer mode.', color: 'from-purple-500 to-indigo-500' },
  { step: 3, title: 'Verification', description: 'Automated beneficiary verification with real-time validation and fraud checks.', color: 'from-green-500 to-emerald-500' },
  { step: 4, title: 'Instant Transfer', description: 'Funds disbursed instantly via IMPS, NEFT, UPI, or bank transfer.', color: 'from-orange-500 to-amber-500' },
];

const features = [
  { icon: <Zap className="w-6 h-6" />, title: 'Instant Disbursements', description: 'Send payouts instantly to vendors, partners, and customers via multiple channels.', color: 'from-blue-500 to-cyan-500' },
  { icon: <Users className="w-6 h-6" />, title: 'Bulk Transfers', description: 'Process thousands of payouts simultaneously with our batch processing API.', color: 'from-purple-500 to-pink-500' },
  { icon: <BarChart3 className="w-6 h-6" />, title: 'Real-time Tracking', description: 'Monitor all payouts with real-time status updates and comprehensive reporting.', color: 'from-green-500 to-emerald-500' },
  { icon: <Shield className="w-6 h-6" />, title: 'Secure Transfers', description: 'Enterprise-grade security with multi-factor authentication and encryption.', color: 'from-orange-500 to-amber-500' },
  { icon: <Globe className="w-6 h-6" />, title: 'Multi-Mode Support', description: 'Payouts via IMPS, NEFT, RTGS, UPI, and wallet transfers.', color: 'from-indigo-500 to-blue-500' },
  { icon: <Banknote className="w-6 h-6" />, title: 'Auto Reconciliation', description: 'Automated reconciliation with detailed transaction reports and analytics.', color: 'from-pink-500 to-rose-500' },
];

const benefits = [
  'Reduce operational costs by up to 60%',
  'Process payouts 24/7 with 99.9% uptime',
  'Automated compliance and regulatory reporting',
  'Dedicated account manager for enterprise clients',
  'Sub-second payout processing for UPI transfers',
  'Comprehensive dashboard with exportable reports',
];

const faqs = [
  { question: 'What payout methods are supported?', answer: 'We support IMPS, NEFT, RTGS, UPI, and wallet transfers for payouts across India.' },
  { question: 'How fast are payouts processed?', answer: 'UPI and IMPS payouts are instant (within seconds). NEFT transfers are settled within 2 hours, and RTGS within 30 minutes during banking hours.' },
  { question: 'Is there a limit on payout volume?', answer: 'No fixed limits. Our platform is built for high-volume processing and can handle millions of payouts daily.' },
  { question: 'How is payout security handled?', answer: 'We use 256-bit encryption, IP whitelisting, webhook verification, and multi-factor authentication for all payout operations.' },
];

export default function PayoutSolutionPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen px-6 py-16 text-gray-200" style={{ background: `radial-gradient(ellipse at 30% 40%, #552a7a 0%, #31205b 25%, #151328 55%, #0c0b18 80%, #090918 100%)`, backgroundColor: '#0c0b18' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
              <span className="text-blue-400 font-semibold bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent text-sm">Payout Service</span>
            </nav>
          </div>
        </div>

        <ScrollFadeIn className="mb-16 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-medium text-blue-300 mb-6 border border-white/20 animate-bounce">
            <ArrowRightLeft className="w-4 h-4 mr-2" />
            Payout Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Payout Services for Instant Fund Transfers
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-8 animate-pulse" />
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Enable fast and secure <strong>payout services</strong> to instantly disburse funds to vendors, partners, employees, and customers across India.
          </p>
        </ScrollFadeIn>

        {/* Steps */}
        <ScrollFadeIn className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">How Our Payout Service Works</h2>
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={s.step} className={`flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col group`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} text-center`}>
                  <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/20 group-hover:shadow-xl transition-all duration-500 group-hover:bg-white/15 hover:scale-105">
                    <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{s.description}</p>
                  </div>
                </div>
                <div className="relative z-10 mx-8 my-4 md:my-0">
                  <div className={`w-16 h-16 bg-gradient-to-r ${s.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-all duration-500`}>
                    {s.step}
                  </div>
                </div>
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        {/* Features */}
        <ScrollFadeIn className="mb-20">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
              <div key={f.title} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-3xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <div className="relative bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 group-hover:-translate-y-2">
                  <div className={`p-4 bg-gradient-to-r ${f.color} rounded-2xl mr-4 shadow-lg inline-block mb-4`}>
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        {/* Why Choose Us */}
        <ScrollFadeIn className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Why Choose Our Payout Services?</h2>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start hover:bg-white/5 p-4 rounded-xl transition-all duration-300">
                  <CheckCircle className="text-green-400 mr-3 mt-1 shrink-0 w-5 h-5" />
                  <span className="text-gray-200 leading-relaxed">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        {/* FAQ */}
        <ScrollFadeIn className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Frequently Asked Questions</h2>
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
            <div className="relative p-8 md:p-12 text-center border border-white/20 rounded-3xl">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent mb-4">Ready to Streamline Your Payouts?</h2>
              <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">Transform your business disbursements with our secure, fast, and reliable payout solutions.</p>
              <Link href="/contact-us" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                Start Sending Payouts <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
