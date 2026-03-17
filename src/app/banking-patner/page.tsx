'use client';

import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { Building2 } from 'lucide-react';

const banks = [
  { name: 'ICICI Bank', description: 'Leading Indian private bank' },
  { name: 'HDFC Bank', description: 'India\'s largest private bank' },
  { name: 'Axis Bank', description: 'Third largest private bank' },
  { name: 'Yes Bank', description: 'Full-service private bank' },
  { name: 'Kotak Mahindra', description: 'Premium banking solutions' },
  { name: 'IndusInd Bank', description: 'New-generation banking' },
  { name: 'Federal Bank', description: 'Traditional banking partner' },
  { name: 'RBL Bank', description: 'Innovation in banking' },
];

export default function BankingPartnerPage() {
  return (
    <div className="min-h-screen px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <ScrollFadeIn className="text-center mb-16">
          <div className="inline-flex items-center bg-green-500/15 px-4 py-2 rounded-full text-sm font-medium text-green-300 mb-6 border border-green-500/20">
            Our Partners
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Banking Partners
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We work with India&apos;s leading banks to ensure secure, reliable, and fast payment processing
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {banks.map((bank, i) => (
            <ScrollFadeIn key={bank.name} delay={i * 0.08}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Building2 className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-white font-bold mb-1">{bank.name}</h3>
                <p className="text-gray-400 text-sm">{bank.description}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
