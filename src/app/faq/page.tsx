'use client';

import { useState } from 'react';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { faqData } from '@/data/faq';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <ScrollFadeIn className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-500/15 px-4 py-2 rounded-full text-sm font-medium text-blue-300 mb-6 border border-blue-500/20">
            FAQ
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-gray-300 text-lg">
            Everything you need to know about our payment solutions
          </p>
        </ScrollFadeIn>

        <div className="space-y-4">
          {faqData.map((faq, i) => (
            <ScrollFadeIn key={i} delay={i * 0.05}>
              <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300">
                <button
                  className="w-full text-left p-6 focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                    <ChevronDown className={`w-5 h-5 text-purple-400 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
