'use client';

import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { Shield, Target, Users, Award, Globe, Zap } from 'lucide-react';

const values = [
  { icon: <Shield className="w-8 h-8" />, title: 'Trust & Security', description: 'PCI DSS compliant infrastructure with 256-bit encryption ensuring every transaction is secure.', color: 'from-blue-500 to-cyan-500' },
  { icon: <Target className="w-8 h-8" />, title: 'Innovation', description: 'Continuously evolving our platform with cutting-edge technology to deliver best-in-class payment solutions.', color: 'from-purple-500 to-pink-500' },
  { icon: <Users className="w-8 h-8" />, title: 'Customer First', description: 'Dedicated 24/7 support team ensuring seamless integration and uninterrupted service.', color: 'from-orange-500 to-amber-500' },
  { icon: <Award className="w-8 h-8" />, title: 'Reliability', description: '99.9% uptime guarantee with robust infrastructure built to handle millions of transactions daily.', color: 'from-green-500 to-emerald-500' },
  { icon: <Globe className="w-8 h-8" />, title: 'Pan-India Reach', description: 'Serving businesses across India with offices in Delhi and Mumbai, supporting 100+ payment modes.', color: 'from-indigo-500 to-blue-500' },
  { icon: <Zap className="w-8 h-8" />, title: 'Fast Settlements', description: 'T+1 standard settlements with express options available. Real-time tracking and reporting dashboards.', color: 'from-pink-500 to-rose-500' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <ScrollFadeIn className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-500/15 px-4 py-2 rounded-full text-sm font-medium text-purple-300 mb-6 border border-purple-500/20">
            About Us
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Empowering Digital Payments
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            SP Transaction Hub is a leading payment gateway provider headquartered in Delhi, offering secure, reliable, and innovative digital payment solutions for businesses of all sizes across India.
          </p>
        </ScrollFadeIn>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <ScrollFadeIn>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:bg-white/10 transition-all duration-500">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed">
                To simplify digital payments for every business in India by providing cutting-edge, secure, and affordable payment gateway solutions that drive growth and enable seamless transactions.
              </p>
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn delay={0.1}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:bg-white/10 transition-all duration-500">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed">
                To become India&apos;s most trusted payment infrastructure partner, making digital transactions accessible, instant, and secure for businesses and consumers alike.
              </p>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Values */}
        <ScrollFadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Our Core Values</span>
          </h2>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <ScrollFadeIn key={value.title} delay={i * 0.1}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-1 h-full">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
