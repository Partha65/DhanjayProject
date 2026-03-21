'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlides } from '@/data/services';
import { ArrowRight, Shield, Clock, Headphones } from 'lucide-react';
import Link from 'next/link';

const trustBadges = [
  { icon: <Shield className="w-4 h-4" />, label: 'PCI DSS Certified' },
  { icon: <Clock className="w-4 h-4" />, label: '99.9% Uptime' },
  { icon: <Headphones className="w-4 h-4" />, label: '24/7 Support' },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [next]);

  const slide = heroSlides[current];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, var(--accent-1), transparent 70%)', filter: 'blur(80px)', animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, var(--accent-2), transparent 70%)', filter: 'blur(100px)', animation: 'float 10s ease-in-out infinite reverse' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, var(--accent-3), transparent 70%)', filter: 'blur(60px)', animation: 'float 6s ease-in-out infinite' }} />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — Text */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {/* Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wide mb-6"
                  style={{ background: 'rgba(var(--glow-rgb), 0.1)', color: 'var(--accent-1)', border: '1px solid rgba(var(--glow-rgb), 0.15)' }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent-1)' }} />
                  PAYMENT GATEWAY
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6">
                  <span style={{ color: 'var(--text-primary)' }}>{slide.headline.split(' ').slice(0, 2).join(' ')}</span>
                  <br />
                  <span className="text-gradient">{slide.headline.split(' ').slice(2).join(' ')}</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg mb-8 max-w-lg leading-relaxed" style={{ color: 'var(--text-secondary)', opacity: 0.8 }}>
                  {slide.subtitle}
                </p>

                {/* Bullets */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {slide.bullets.map((b) => (
                    <div key={b} className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[13px] font-medium"
                      style={{ background: 'rgba(255,255,255,0.04)', color: 'var(--text-secondary)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <span className="w-1 h-1 rounded-full" style={{ background: 'var(--accent-1)' }} />
                      {b}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact-us"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5"
                    style={{ background: 'var(--gradient-button)', boxShadow: '0 8px 30px rgba(var(--glow-rgb), 0.3)' }}>
                    Get Started
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link href="/products"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold transition-all duration-300 hover:bg-white/[0.06]"
                    style={{ color: 'var(--text-secondary)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    Explore Products
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right — Dashboard visual */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Main card */}
              <div className="glass rounded-3xl p-8 relative overflow-hidden"
                style={{ boxShadow: '0 32px 80px rgba(0,0,0,0.4), 0 0 40px rgba(var(--glow-rgb), 0.06)' }}>
                <div className="shimmer absolute inset-0 rounded-3xl" />

                {/* Mock dashboard */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-[11px] uppercase tracking-widest font-medium" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>Total Revenue</p>
                      <p className="text-3xl font-extrabold" style={{ color: 'var(--text-primary)' }}>₹12,48,350</p>
                    </div>
                    <div className="px-3 py-1 rounded-full text-[11px] font-bold" style={{ background: 'rgba(var(--glow-rgb), 0.15)', color: 'var(--accent-1)' }}>
                      +24.5%
                    </div>
                  </div>

                  {/* Chart bars */}
                  <div className="flex items-end gap-2 h-32 mb-6">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-md transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          background: i === 9 ? 'var(--gradient-button)' : 'rgba(var(--glow-rgb), 0.15)',
                          animationDelay: `${i * 100}ms`,
                        }}
                      />
                    ))}
                  </div>

                  {/* Stats row */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: 'Transactions', value: '14,230' },
                      { label: 'Success Rate', value: '99.7%' },
                      { label: 'Avg. Time', value: '0.8s' },
                    ].map((s) => (
                      <div key={s.label} className="text-center p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)' }}>
                        <p className="text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{s.value}</p>
                        <p className="text-[10px] uppercase tracking-wider" style={{ color: 'var(--text-muted)', opacity: 0.5 }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 rounded-xl text-[11px] font-bold glass"
                style={{ color: 'var(--accent-1)', boxShadow: '0 8px 24px rgba(0,0,0,0.3)', animation: 'float 4s ease-in-out infinite' }}>
                🔒 PCI DSS Level 1
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-16 pt-10" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2 text-[12px] font-medium" style={{ color: 'var(--text-muted)', opacity: 0.5 }}>
              {badge.icon}
              {badge.label}
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: i === current ? '24px' : '6px',
                height: '6px',
                background: i === current ? 'var(--accent-1)' : 'rgba(255,255,255,0.15)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
