'use client';

import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { integrations } from '@/data/services';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function IntegrationLogos() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollFadeIn className="text-center mb-14">
          <p className="text-[12px] uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: 'var(--accent-1)' }}>
            Integrations
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
            Works With Your <span className="text-gradient">Stack</span>
          </h2>
          <p className="max-w-lg mx-auto text-base" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
            Plug into your existing platform in minutes
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {integrations.map((integration, i) => (
            <ScrollFadeIn key={integration.name} delay={i * 0.1}>
              <div className="group glass rounded-2xl p-6 text-center hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1">
                <div className="text-4xl mb-3">{integration.logo}</div>
                <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{integration.name}</p>
                <Link href="#"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold px-3 py-1.5 rounded-lg transition-all duration-300 hover:opacity-80"
                  style={{ color: 'var(--accent-1)', background: 'rgba(var(--glow-rgb), 0.1)', border: '1px solid rgba(var(--glow-rgb), 0.12)' }}>
                  Setup <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn className="text-center">
          <Link href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 hover:gap-3"
            style={{ color: 'var(--accent-1)' }}>
            View All Integrations <ArrowRight className="w-4 h-4" />
          </Link>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
