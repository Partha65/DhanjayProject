'use client';

import { useState } from 'react';
import { PageShell, PageHero } from '@/components/ui/PageShell';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { faqData } from '@/data/faq';
import { ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell>
      <PageHero tag="FAQ" title="Frequently Asked" titleGradient="Questions" description="Everything you need to know about our payment gateway services." />

      <div className="max-w-3xl mx-auto space-y-3">
        {faqData.map((item, i) => (
          <ScrollFadeIn key={i} delay={i * 0.05}>
            <div className="glass rounded-2xl overflow-hidden transition-all duration-300"
              style={open === i ? { borderColor: 'rgba(var(--glow-rgb), 0.15)' } : {}}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-white/[0.02]">
                <span className="text-sm font-semibold pr-4" style={{ color: open === i ? 'var(--accent-1)' : 'var(--text-primary)' }}>
                  {item.question}
                </span>
                <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                  style={{ color: 'var(--text-muted)' }} />
              </button>
              <div className={`transition-all duration-300 ${open === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ overflow: 'hidden' }}>
                <div className="px-5 pb-5">
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>{item.answer}</p>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        ))}
      </div>
    </PageShell>
  );
}
