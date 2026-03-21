'use client';

import Link from 'next/link';
import { PageShell, PageHero, GlassCard } from '@/components/ui/PageShell';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { Home, CreditCard, ArrowRight, CheckCircle } from 'lucide-react';

interface Feature {
  title: string;
  desc: string;
}

interface ProductPageTemplateProps {
  name: string;
  tagline: string;
  description: string;
  features: Feature[];
  benefits?: string[];
}

/**
 * Shared product page layout — breadcrumb, hero, features grid, benefits, CTA.
 * All theme-aware via CSS variables.
 */
export default function ProductPageTemplate({ name, tagline, description, features, benefits }: ProductPageTemplateProps) {
  return (
    <PageShell>
      {/* Breadcrumb */}
      <div className="mb-10">
        <div className="glass rounded-xl px-4 py-3 inline-flex items-center gap-2 text-[13px]">
          <Link href="/" className="flex items-center gap-1 hover:text-white transition-colors" style={{ color: 'var(--text-muted)' }}>
            <Home className="w-3.5 h-3.5" /> Home
          </Link>
          <span style={{ color: 'var(--text-muted)', opacity: 0.4 }}>›</span>
          <Link href="/products" className="flex items-center gap-1 hover:text-white transition-colors" style={{ color: 'var(--text-muted)' }}>
            <CreditCard className="w-3.5 h-3.5" /> Products
          </Link>
          <span style={{ color: 'var(--text-muted)', opacity: 0.4 }}>›</span>
          <span style={{ color: 'var(--accent-1)' }} className="font-semibold">{name}</span>
        </div>
      </div>

      {/* Hero */}
      <PageHero tag={name} title={tagline} description={description} />

      {/* Features */}
      <ScrollFadeIn className="mb-16">
        <p className="text-[12px] uppercase tracking-[0.25em] font-semibold text-center mb-8" style={{ color: 'var(--accent-1)' }}>Features</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <ScrollFadeIn key={f.title} delay={i * 0.08}>
              <GlassCard className="h-full">
                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{f.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>{f.desc}</p>
              </GlassCard>
            </ScrollFadeIn>
          ))}
        </div>
      </ScrollFadeIn>

      {/* Benefits */}
      {benefits && benefits.length > 0 && (
        <ScrollFadeIn className="mb-16">
          <div className="glass rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8" style={{ color: 'var(--text-primary)' }}>
              Why Choose <span className="text-gradient">{name}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((b) => (
                <div key={b} className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/[0.03] transition-all">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--accent-1)' }} />
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollFadeIn>
      )}

      {/* CTA */}
      <ScrollFadeIn>
        <div className="glass rounded-3xl p-8 sm:p-12 text-center"
          style={{ boxShadow: '0 0 60px rgba(var(--glow-rgb), 0.05)' }}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
            Ready to Get Started?
          </h2>
          <p className="text-sm mb-8 max-w-md mx-auto" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
            Start accepting payments with {name} today.
          </p>
          <Link href="/contact-us"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all hover:-translate-y-0.5"
            style={{ background: 'var(--gradient-button)', boxShadow: '0 8px 30px rgba(var(--glow-rgb), 0.3)' }}>
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </ScrollFadeIn>
    </PageShell>
  );
}
