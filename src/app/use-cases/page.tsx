'use client';

import { PageShell, PageHero, GlassCard } from '@/components/ui/PageShell';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { ShoppingCart, HeartPulse, GraduationCap, Plane, Store, Landmark } from 'lucide-react';

const useCases = [
  { icon: <ShoppingCart className="w-6 h-6" />, title: 'E-Commerce', desc: 'Seamless checkout for online stores with cart recovery, multi-currency, and subscription billing.' },
  { icon: <HeartPulse className="w-6 h-6" />, title: 'Healthcare', desc: 'Secure payment solutions for hospitals, clinics, and telemedicine platforms with HIPAA-compliant processing.' },
  { icon: <GraduationCap className="w-6 h-6" />, title: 'Education', desc: 'Fee collection automation for schools, universities, and ed-tech platforms with scheduled payments.' },
  { icon: <Plane className="w-6 h-6" />, title: 'Travel & Hospitality', desc: 'Multi-currency payments with instant refunds and booking management integration.' },
  { icon: <Store className="w-6 h-6" />, title: 'Retail', desc: 'Omni-channel payment solutions with QR payments, POS integration, and inventory sync.' },
  { icon: <Landmark className="w-6 h-6" />, title: 'Financial Services', desc: 'Compliant payment infrastructure for lending, insurance, and investment platforms.' },
];

export default function UseCasesPage() {
  return (
    <PageShell>
      <PageHero tag="Use Cases" title="Payment Solutions for" titleGradient="Every Industry" description="Tailored integrations for businesses across sectors." />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {useCases.map((uc, i) => (
          <ScrollFadeIn key={uc.title} delay={i * 0.08}>
            <GlassCard className="h-full">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(var(--glow-rgb), 0.1)', color: 'var(--accent-1)' }}>
                {uc.icon}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{uc.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>{uc.desc}</p>
            </GlassCard>
          </ScrollFadeIn>
        ))}
      </div>
    </PageShell>
  );
}
