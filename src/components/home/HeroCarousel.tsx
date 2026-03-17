'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlides } from '@/data/services';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[current];

  return (
    <section className="relative min-h-[80svh] flex items-center overflow-hidden">
      {/* Background image: circuit-board aesthetic */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0c0b18]/70 to-[#0c0b18]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c0b18]/80 via-transparent to-[#0c0b18]/50" />
      </div>

      {/* Animated aurora blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {slide.headline}
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 mb-6">
              {slide.subheadline}
            </h2>

            {/* Bullet points */}
            <div className="space-y-3 mb-8">
              {slide.bullets.map((bullet, i) => (
                <motion.div
                  key={bullet}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-gray-300 text-lg">{bullet}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-lg"
            >
              Get Started
              <span className="text-xl">→</span>
            </Link>
          </motion.div>
        </AnimatePresence>

        {/* Slide indicators */}
        <div className="flex gap-2 mt-8">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === current ? 'bg-cyan-400 w-8' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
