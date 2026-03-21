'use client';

import ScrollFadeIn from '@/components/ui/ScrollFadeIn';

interface PageHeroProps {
  tag?: string;
  title: string;
  titleGradient?: string;
  description?: string;
  children?: React.ReactNode;
}

/**
 * Reusable page hero section — consistent styling across all sub-pages.
 * All colors come from CSS variables so it auto-matches any theme.
 */
export function PageHero({ tag, title, titleGradient, description, children }: PageHeroProps) {
  return (
    <ScrollFadeIn className="text-center mb-16">
      {tag && (
        <p className="text-[12px] uppercase tracking-[0.25em] font-semibold mb-3" style={{ color: 'var(--accent-1)' }}>
          {tag}
        </p>
      )}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5" style={{ color: 'var(--text-primary)' }}>
        {title}{' '}
        {titleGradient && <span className="text-gradient">{titleGradient}</span>}
      </h1>
      {description && (
        <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
          {description}
        </p>
      )}
      {children}
    </ScrollFadeIn>
  );
}

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wrapper for page content — adds ambient glow, grid overlay, and consistent padding.
 */
export function PageShell({ children, className = '' }: PageShellProps) {
  return (
    <div className={`relative min-h-screen ${className}`}>
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, var(--accent-1), transparent 70%)', filter: 'blur(80px)' }} />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, var(--accent-2), transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {children}
      </div>
    </div>
  );
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * Reusable glass card component.
 */
export function GlassCard({ children, className = '', hover = true }: GlassCardProps) {
  return (
    <div className={`glass rounded-2xl p-6 ${hover ? 'hover:bg-white/[0.06] transition-all duration-500 hover:-translate-y-1' : ''} ${className}`}>
      {children}
    </div>
  );
}
