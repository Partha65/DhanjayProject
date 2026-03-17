'use client';

import { stats } from '@/data/services';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';

export default function StatsBar() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Trusted by <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">10,000+</span> Businesses
          </h2>
        </ScrollFadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <ScrollFadeIn key={stat.label} delay={i * 0.1}>
              <div className="text-center p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <span className={`text-4xl md:text-5xl font-black block mb-2 ${
                  i === 0 ? 'text-white' :
                  i === 1 ? 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent' :
                  i === 2 ? 'bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent' :
                  'text-white'
                }`}>
                  {stat.value}
                </span>
                <span className="text-gray-400 text-xs font-semibold tracking-wider uppercase">
                  {stat.label}
                </span>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
