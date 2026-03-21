'use client';

import { PageShell, PageHero, GlassCard } from '@/components/ui/PageShell';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { Target, Eye, Shield, Zap, Globe, Heart } from 'lucide-react';

const values = [
  { icon: <Shield className="w-6 h-6" />, title: 'Security First', desc: 'PCI DSS Level 1 certified with end-to-end encryption for every transaction.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Lightning Speed', desc: 'Sub-second processing with 99.9% uptime guarantee.' },
  { icon: <Globe className="w-6 h-6" />, title: 'Pan-India Reach', desc: '100+ payment modes covering every corner of India.' },
  { icon: <Heart className="w-6 h-6" />, title: 'Customer Focus', desc: '24/7 dedicated support for seamless merchant experience.' },
  { icon: <Target className="w-6 h-6" />, title: 'Innovation', desc: 'Continuously evolving payment solutions with cutting-edge technology.' },
  { icon: <Eye className="w-6 h-6" />, title: 'Transparency', desc: 'Clear pricing, real-time reporting, and no hidden charges.' },
];

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        tag="About Us"
        title="Empowering Digital"
        titleGradient="Payments Across India"
        description="Vertexpay Solutions is a leading payment gateway provider headquartered in Balasore, Odisha, offering secure, reliable, and innovative digital payment solutions for businesses of all sizes across India."
      />

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
        <ScrollFadeIn delay={0.1}>
          <GlassCard className="h-full">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ background: 'rgba(var(--glow-rgb), 0.1)', color: 'var(--accent-1)' }}>
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Our Mission</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
              To democratize digital payments by providing businesses with affordable, reliable, and secure payment infrastructure that enables growth in India&apos;s digital economy.
            </p>
          </GlassCard>
        </ScrollFadeIn>
        <ScrollFadeIn delay={0.2}>
          <GlassCard className="h-full">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
              style={{ background: 'rgba(var(--glow-rgb), 0.1)', color: 'var(--accent-1)' }}>
              <Eye className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Our Vision</h2>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
              To become India&apos;s most trusted payment gateway, powering millions of businesses with innovative financial technology solutions.
            </p>
          </GlassCard>
        </ScrollFadeIn>
      </div>

      {/* Core Values */}
      <ScrollFadeIn className="text-center mb-12">
        <p className="text-[12px] uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: 'var(--accent-1)' }}>Core Values</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
          What <span className="text-gradient">Drives Us</span>
        </h2>
      </ScrollFadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {values.map((v, i) => (
          <ScrollFadeIn key={v.title} delay={i * 0.08}>
            <GlassCard className="h-full">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ background: 'rgba(var(--glow-rgb), 0.1)', color: 'var(--accent-1)' }}>
                {v.icon}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>{v.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>{v.desc}</p>
            </GlassCard>
          </ScrollFadeIn>
        ))}
      </div>
    </PageShell>
  );
}
