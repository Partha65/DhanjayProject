'use client';

import { PageShell, PageHero, GlassCard } from '@/components/ui/PageShell';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';

const banks = [
  { name: 'State Bank of India', short: 'SBI' },
  { name: 'HDFC Bank', short: 'HDFC' },
  { name: 'ICICI Bank', short: 'ICICI' },
  { name: 'Axis Bank', short: 'AXIS' },
  { name: 'Kotak Mahindra Bank', short: 'KOTAK' },
  { name: 'Yes Bank', short: 'YES' },
  { name: 'Punjab National Bank', short: 'PNB' },
  { name: 'Bank of Baroda', short: 'BOB' },
];

export default function BankingPartnerPage() {
  return (
    <PageShell>
      <PageHero tag="Partners" title="Our Banking" titleGradient="Partners" description="We partner with India's leading banks to ensure reliable and secure payment processing." />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
        {banks.map((bank, i) => (
          <ScrollFadeIn key={bank.name} delay={i * 0.06}>
            <GlassCard className="text-center py-8">
              <div className="w-14 h-14 rounded-xl mx-auto flex items-center justify-center text-sm font-black mb-4"
                style={{ background: 'rgba(var(--glow-rgb), 0.08)', color: 'var(--accent-1)', border: '1px solid rgba(var(--glow-rgb), 0.12)' }}>
                {bank.short}
              </div>
              <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{bank.name}</p>
            </GlassCard>
          </ScrollFadeIn>
        ))}
      </div>
    </PageShell>
  );
}
