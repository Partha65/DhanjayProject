'use client';

import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Startup',
    badge: 'For New Businesses',
    price: 'Custom',
    color: 'from-blue-500 to-cyan-500',
    border: 'border-blue-500/20 hover:border-blue-400/40',
    features: [
      'UPI + Card + Net Banking',
      'Basic Dashboard',
      'Email Support',
      'T+2 Settlements',
      'Up to ₹10L/month volume',
    ],
  },
  {
    name: 'Enterprise',
    badge: 'Most Popular',
    price: 'Custom',
    color: 'from-purple-500 to-pink-500',
    border: 'border-purple-500/30 hover:border-purple-400/50',
    popular: true,
    features: [
      'All Payment Modes',
      'Advanced Analytics',
      'Priority Support 24/7',
      'T+1 Settlements',
      'Unlimited Volume',
      'Dedicated Account Manager',
      'Custom Integration Support',
    ],
  },
  {
    name: 'Platform',
    badge: 'For Marketplaces',
    price: 'Custom',
    color: 'from-orange-500 to-amber-500',
    border: 'border-orange-500/20 hover:border-orange-400/40',
    features: [
      'Split Payments',
      'Multi-vendor Settlement',
      'Advanced APIs',
      'Instant Settlements',
      'White-label Checkout',
      'Escrow Services',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <ScrollFadeIn className="text-center mb-16">
          <div className="inline-flex items-center bg-cyan-500/15 px-4 py-2 rounded-full text-sm font-medium text-cyan-300 mb-6 border border-cyan-500/20">
            Transparent Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Simple, Competitive Pricing
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            No hidden fees. No surprises. Get started with a plan that scales with your business.
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {plans.map((plan, i) => (
            <ScrollFadeIn key={plan.name} delay={i * 0.15}>
              <div className={`relative rounded-2xl border ${plan.border} bg-white/5 backdrop-blur-md p-8 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col ${plan.popular ? 'ring-1 ring-purple-500/30' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className={`inline-flex w-fit items-center bg-gradient-to-r ${plan.color} bg-clip-text text-transparent text-xs font-bold px-3 py-1 rounded-full border border-white/10 mb-4`}>
                  {plan.badge}
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-3xl font-bold mb-6">{plan.price}</p>

                <ul className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact-us"
                  className={`mt-8 block text-center px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r ${plan.color} hover:shadow-lg transition-all duration-300 text-sm`}
                >
                  Contact Sales
                </Link>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn className="text-center">
          <p className="text-gray-400 text-sm">
            Need a custom solution?{' '}
            <Link href="/contact-us" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
              Talk to our team →
            </Link>
          </p>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
