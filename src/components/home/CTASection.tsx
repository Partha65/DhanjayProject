'use client';

import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { ctaSection } from '@/data/services';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollFadeIn>
          <div className="relative glass rounded-3xl overflow-hidden"
            style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.3), 0 0 60px rgba(var(--glow-rgb), 0.06)' }}>

            {/* Ambient glow inside */}
            <div className="absolute top-0 right-0 w-96 h-96 opacity-15 pointer-events-none"
              style={{ background: 'radial-gradient(circle, var(--accent-1), transparent 70%)', filter: 'blur(80px)' }} />
            <div className="absolute bottom-0 left-0 w-80 h-80 opacity-10 pointer-events-none"
              style={{ background: 'radial-gradient(circle, var(--accent-2), transparent 70%)', filter: 'blur(60px)' }} />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left */}
                <div>
                  <p className="text-[12px] uppercase tracking-[0.25em] font-semibold mb-4"
                    style={{ color: 'var(--accent-1)' }}>
                    {ctaSection.tag}
                  </p>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4"
                    style={{ color: 'var(--text-primary)' }}>
                    {ctaSection.headline}{' '}
                    <span className="text-gradient">{ctaSection.headlineGradient}</span>
                  </h2>
                  <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                    {ctaSection.description}
                  </p>

                  <Link href="/contact-us"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
                    style={{ background: 'var(--gradient-button)', boxShadow: '0 8px 30px rgba(var(--glow-rgb), 0.3)' }}>
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Right — Checkpoints */}
                <div className="space-y-4">
                  {ctaSection.checkpoints.map((cp) => (
                    <div key={cp} className="flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 hover:bg-white/[0.04]"
                      style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}>
                      <CheckCircle className="w-5 h-5 shrink-0" style={{ color: 'var(--accent-1)' }} />
                      <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{cp}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
