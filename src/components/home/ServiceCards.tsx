'use client';

import { services } from '@/data/services';
import { Smartphone, CreditCard, ArrowRightLeft, ShoppingCart } from 'lucide-react';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';

const iconMap: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-8 h-8" />,
  CreditCard: <CreditCard className="w-8 h-8" />,
  ArrowRightLeft: <ArrowRightLeft className="w-8 h-8" />,
  ShoppingCart: <ShoppingCart className="w-8 h-8" />,
};

export default function ServiceCards() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive payment solutions tailored for modern businesses
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollFadeIn key={service.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl h-full">
                {/* Glow effect */}
                <div className={`absolute -inset-8 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    {iconMap[service.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                  <button className="mt-4 text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors">
                    Learn More <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
