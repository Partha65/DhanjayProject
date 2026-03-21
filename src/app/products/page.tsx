'use client';

import { PageShell, PageHero, GlassCard } from '@/components/ui/PageShell';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

const products = [
  { title: 'UPI Payments', desc: 'Accept all UPI apps with instant settlement.', href: '/products/upi' },
  { title: 'Collection Service', desc: 'Automated collection with real-time reconciliation.', href: '/products/collection-service' },
  { title: 'Payout Solution', desc: 'Instant payouts to vendors and customers.', href: '/products/payout-solution' },
  { title: 'Smart Checkout', desc: 'Optimized checkout for higher conversion.', href: '/products/smart-checkout' },
  { title: 'Wallet', desc: 'Digital wallet for seamless payments.', href: '/products/wallet' },
  { title: 'Payment Gateway API', desc: 'Developer-friendly REST API for integration.', href: '/products/api' },
  { title: 'Sound Box', desc: 'Audio confirmation for every payment.', href: '#', comingSoon: true },
  { title: 'Static & Dynamic QR', desc: 'QR code payments for retail.', href: '#', comingSoon: true },
];

export default function ProductsPage() {
  return (
    <PageShell>
      <PageHero tag="Products" title="Complete Payment" titleGradient="Solutions" description="Everything your business needs to accept, process, and manage digital payments." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((p, i) => (
          <ScrollFadeIn key={p.title} delay={i * 0.06}>
            <Link href={p.href} className="block h-full">
              <GlassCard className="h-full relative group">
                {p.comingSoon && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 text-[9px] font-bold rounded-full flex items-center gap-1"
                    style={{ background: 'rgba(var(--glow-rgb), 0.12)', color: 'var(--accent-1)' }}>
                    <Sparkles className="w-2.5 h-2.5" /> Soon
                  </span>
                )}
                <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{p.title}</h3>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>{p.desc}</p>
                {!p.comingSoon && (
                  <span className="inline-flex items-center gap-1 text-[12px] font-semibold transition-all group-hover:gap-2"
                    style={{ color: 'var(--accent-1)' }}>
                    Learn More <ArrowRight className="w-3 h-3" />
                  </span>
                )}
              </GlassCard>
            </Link>
          </ScrollFadeIn>
        ))}
      </div>
    </PageShell>
  );
}
