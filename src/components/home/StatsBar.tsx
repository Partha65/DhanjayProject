'use client';

import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { stats } from '@/data/services';

export default function StatsBar() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollFadeIn className="text-center mb-14">
          <p className="text-[12px] uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: 'var(--accent-1)' }}>
            Trusted Worldwide
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold" style={{ color: 'var(--text-primary)' }}>
            Numbers That <span className="text-gradient">Speak</span>
          </h2>
        </ScrollFadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <ScrollFadeIn key={stat.label} delay={i * 0.1}>
              <div className="relative group glass rounded-2xl p-6 text-center hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1 overflow-hidden">
                <div className="shimmer absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <p className="text-3xl sm:text-4xl font-extrabold mb-1 text-gradient">{stat.value}</p>
                  <p className="text-[13px] font-medium" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>{stat.label}</p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
