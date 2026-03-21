'use client';

import Link from 'next/link';
import { PageShell } from '@/components/ui/PageShell';
import { Rocket, ArrowLeft } from 'lucide-react';

export default function ComingSoonPage() {
  return (
    <PageShell>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8"
          style={{ background: 'rgba(var(--glow-rgb), 0.1)', border: '1px solid rgba(var(--glow-rgb), 0.15)', animation: 'float 4s ease-in-out infinite' }}>
          <Rocket className="w-10 h-10" style={{ color: 'var(--accent-1)' }} />
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: 'var(--text-primary)' }}>
          Coming <span className="text-gradient">Soon</span>
        </h1>
        <p className="text-lg mb-10 max-w-md" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
          We&apos;re working on something exciting. Stay tuned for updates!
        </p>
        <Link href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5"
          style={{ color: 'var(--text-secondary)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    </PageShell>
  );
}
