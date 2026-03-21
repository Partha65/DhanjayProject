'use client';

import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { services } from '@/data/services';
import { Shield, Zap, Globe, Headphones } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Headphones: <Headphones className="w-6 h-6" />,
};

export default function ServiceCards() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <ScrollFadeIn className="text-center mb-16">
          <p className="text-[12px] uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: 'var(--accent-1)' }}>
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
            Built for <span className="text-gradient">Scale & Speed</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
            Enterprise-grade infrastructure designed for businesses that demand reliability
          </p>
        </ScrollFadeIn>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ScrollFadeIn key={service.title} delay={i * 0.1}>
              <div className="group relative glass rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1 h-full"
                style={{ borderColor: 'rgba(255,255,255,0.06)' }}>

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(var(--glow-rgb), 0.1)',
                      color: 'var(--accent-1)',
                      border: '1px solid rgba(var(--glow-rgb), 0.15)',
                    }}>
                    {iconMap[service.icon] || <Zap className="w-6 h-6" />}
                  </div>

                  {/* Text */}
                  <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
