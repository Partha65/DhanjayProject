'use client';

import { PageShell, PageHero, GlassCard } from '@/components/ui/PageShell';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import Link from 'next/link';
import { Check, ArrowRight, Star } from 'lucide-react';

const plans = [
  {
    name: 'Startup',
    price: 'Contact Sales',
    desc: 'For small businesses getting started with digital payments.',
    features: ['UPI Payments', 'Basic Analytics', 'Email Support', 'Standard Settlement'],
    popular: false,
  },
  {
    name: 'Enterprise',
    price: 'Contact Sales',
    desc: 'For growing businesses needing advanced payment features.',
    features: ['All Payment Modes', 'Advanced Analytics', 'Priority Support', 'Same-Day Settlement', 'Custom Checkout', 'Payout API'],
    popular: true,
  },
  {
    name: 'Platform',
    price: 'Contact Sales',
    desc: 'For marketplaces and platforms with complex payment needs.',
    features: ['Split Payments', 'White-label Checkout', 'Dedicated Account Manager', 'Instant Settlement', 'Custom SLA', 'Bulk Payouts'],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        tag="Pricing"
        title="Simple, Transparent"
        titleGradient="Pricing"
        description="No hidden fees. Pay only for what you use with competitive transaction rates."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <ScrollFadeIn key={plan.name} delay={i * 0.1}>
            <div className={`relative glass rounded-2xl p-6 h-full flex flex-col transition-all duration-500 hover:-translate-y-1 ${plan.popular ? 'ring-1' : ''}`}
              style={plan.popular ? { borderColor: 'var(--accent-1)', boxShadow: '0 0 40px rgba(var(--glow-rgb), 0.1)' } : {}}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-[10px] font-bold flex items-center gap-1"
                  style={{ background: 'var(--gradient-button)', color: 'white' }}>
                  <Star className="w-3 h-3" /> Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>{plan.name}</h3>
              <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>{plan.desc}</p>
              <p className="text-2xl font-extrabold mb-6 text-gradient">{plan.price}</p>
              <div className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <Check className="w-4 h-4 shrink-0" style={{ color: 'var(--accent-1)' }} /> {f}
                  </div>
                ))}
              </div>
              <Link href="/contact-us"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300"
                style={plan.popular
                  ? { background: 'var(--gradient-button)', color: 'white', boxShadow: '0 4px 20px rgba(var(--glow-rgb), 0.2)' }
                  : { color: 'var(--text-secondary)', border: '1px solid rgba(255,255,255,0.1)' }
                }>
                Contact Sales <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </PageShell>
  );
}
