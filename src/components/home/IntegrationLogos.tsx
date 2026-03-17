'use client';

import ScrollFadeIn from '@/components/ui/ScrollFadeIn';

const integrations = [
  { name: 'Shopify', color: 'text-green-400' },
  { name: 'WooCommerce', color: 'text-purple-400' },
  { name: 'Wix', color: 'text-blue-400' },
  { name: 'Wordpress', color: 'text-cyan-400' },
];

export default function IntegrationLogos() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Easy Platform Integration
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Integrate with your favorite platforms in minutes</p>
        </ScrollFadeIn>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {integrations.map((platform, i) => (
            <ScrollFadeIn key={platform.name} delay={i * 0.1}>
              <div className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                {/* Placeholder for logo */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className={`text-2xl font-black ${platform.color}`}>{platform.name[0]}</span>
                </div>
                <h3 className={`font-bold ${platform.color} mb-3`}>{platform.name}</h3>
                <button className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold hover:from-orange-600 hover:to-amber-600 transition-all shadow-lg">
                  Click for Integration Setup
                </button>
              </div>
            </ScrollFadeIn>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="px-6 py-3 rounded-full border border-orange-500/50 text-orange-400 font-semibold text-sm hover:bg-orange-500/10 transition-all">
            View All ↓
          </button>
        </div>
      </div>
    </section>
  );
}
