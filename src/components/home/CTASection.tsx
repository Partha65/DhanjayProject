'use client';

import { ctaSection } from '@/data/services';
import { CheckCircle } from 'lucide-react';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 px-4 md:px-8">
      <ScrollFadeIn>
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-[#130d28]/90 via-[#29204b]/90 to-[#29204b]/95 border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            {/* Left content */}
            <div className="flex-1">
              <div className="inline-flex items-center bg-cyan-400/15 px-3 py-1.5 rounded-full text-xs font-semibold text-cyan-300 mb-5 border border-cyan-400/20">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2" />
                {ctaSection.tag}
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2 leading-tight">
                {ctaSection.headline}{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {ctaSection.headlineGradient}
                </span>
              </h2>

              <p className="text-gray-300 text-base leading-relaxed mt-4 mb-6">
                {ctaSection.description}
              </p>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-sm"
              >
                Get Started <span>→</span>
              </Link>
            </div>

            {/* Right checkmarks */}
            <div className="shrink-0 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 space-y-4">
              {ctaSection.checkpoints.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 shrink-0" />
                  <span className="text-white font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollFadeIn>
    </section>
  );
}
