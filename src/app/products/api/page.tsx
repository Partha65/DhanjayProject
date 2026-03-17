'use client';

import Link from 'next/link';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { Home, CreditCard, Code, ArrowRight, CheckCircle, Shield, Zap, Globe, FileCode, BookOpen } from 'lucide-react';

const steps = [
  { step: 1, title: 'API Authentication', description: 'Secure your integration with API keys and OAuth 2.0.', color: 'from-blue-500 to-cyan-500' },
  { step: 2, title: 'Initialize Payment', description: 'Create payment request with customer and amount details.', color: 'from-purple-500 to-indigo-500' },
  { step: 3, title: 'Process Transaction', description: 'API handles payment with real-time validation.', color: 'from-green-500 to-emerald-500' },
  { step: 4, title: 'Receive Response', description: 'Get instant status updates and handle results.', color: 'from-orange-500 to-amber-500' },
  { step: 5, title: 'Handle Response', description: 'Update your system and provide customer feedback.', color: 'from-pink-500 to-rose-500' },
];

const features = [
  { icon: <Shield className="w-6 h-6" />, title: 'Data Security', description: 'Encryption, tokenization, and secure vault storage.', color: 'from-blue-500 to-cyan-500' },
  { icon: <Zap className="w-6 h-6" />, title: 'Real-Time Processing', description: 'Sub-second response times with 99.9% uptime.', color: 'from-green-500 to-emerald-500' },
  { icon: <Globe className="w-6 h-6" />, title: 'Flexible Config', description: 'Customizable payment flows and retry logic.', color: 'from-orange-500 to-amber-500' },
  { icon: <FileCode className="w-6 h-6" />, title: 'Analytics', description: 'Dashboards, reporting, and business insights.', color: 'from-pink-500 to-rose-500' },
  { icon: <BookOpen className="w-6 h-6" />, title: 'Developer Resources', description: 'Docs, code samples, and dedicated support.', color: 'from-indigo-500 to-purple-500' },
];

const benefits = [
  'Reduce development time by 60%',
  'Accept 50+ payment methods',
  'Process payments in 150+ currencies',
  '99.9% uptime guarantee',
  'Advanced fraud protection with ML',
  '24/7 developer support',
];

export default function APIPage() {
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
              <span className="text-indigo-400 font-semibold text-sm">Payment Gateway API</span>
            </nav>
          </div>
        </div>

        <ScrollFadeIn className="mb-16 text-center">
          <div className="inline-flex items-center bg-white/10 px-6 py-3 rounded-full text-sm text-indigo-300 mb-6 border border-white/20 animate-bounce"><Code className="w-4 h-4 mr-2" />REST API</div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">Payment Gateway API</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full mb-8 animate-pulse" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Developer-friendly REST API for seamless payment integration with comprehensive documentation and SDKs.</p>
        </ScrollFadeIn>

        {/* Steps */}
        <ScrollFadeIn className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Integration Flow</h2>
          <div className="space-y-8">
            {steps.map((s) => (
              <div key={s.step} className="flex items-start group">
                <div className={`w-16 h-16 bg-gradient-to-r ${s.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-all shrink-0`}>{s.step}</div>
                <div className="ml-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 flex-1 group-hover:bg-white/15 transition-all hover:scale-[1.02]">
                  <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-300">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        {/* Features */}
        <ScrollFadeIn className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${f.color} flex items-center justify-center text-white mb-4`}>{f.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-300 text-sm">{f.description}</p>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        {/* Benefits */}
        <ScrollFadeIn className="mb-16">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Why Choose Our API?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((b) => (
                <div key={b} className="flex items-start p-3 hover:bg-white/5 rounded-xl transition-all">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 shrink-0" />
                  <span className="text-gray-200">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>

        {/* CTA */}
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-blue-600/20" />
          <div className="relative p-12 text-center border border-white/20 rounded-3xl">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-300 to-blue-300 bg-clip-text text-transparent mb-4">Ready to Integrate?</h2>
            <p className="text-gray-200 mb-8">Start building with our API in minutes.</p>
            <Link href="/contact-us" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-8 py-4 rounded-2xl font-semibold hover:-translate-y-1 transition-all shadow-lg">Get API Access <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
