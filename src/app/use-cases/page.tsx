'use client';

import ScrollFadeIn from '@/components/ui/ScrollFadeIn';

const useCases = [
  { title: 'E-Commerce', description: 'Seamless checkout for online stores with multi-payment support and quick settlement.', icon: '🛒', gradient: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/20' },
  { title: 'Healthcare', description: 'Secure patient payment solutions with EMI options and insurance integration.', icon: '🏥', gradient: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/20' },
  { title: 'Education', description: 'Fee collection platforms with recurring billing and parent notification systems.', icon: '📚', gradient: 'from-purple-500/20 to-indigo-500/20', border: 'border-purple-500/20' },
  { title: 'Travel & Hospitality', description: 'Booking payments with multi-currency support and instant confirmations.', icon: '✈️', gradient: 'from-orange-500/20 to-amber-500/20', border: 'border-orange-500/20' },
  { title: 'Retail & POS', description: 'Offline and online payment acceptance with QR codes and sound box integration.', icon: '🏪', gradient: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/20' },
  { title: 'Financial Services', description: 'Fintech solutions with advanced payout APIs and real-time reconciliation.', icon: '🏦', gradient: 'from-indigo-500/20 to-blue-500/20', border: 'border-indigo-500/20' },
];

export default function UseCasesPage() {
  return (
    <div className="min-h-screen px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <ScrollFadeIn className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Use Cases
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Tailored payment solutions for every industry
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <ScrollFadeIn key={uc.title} delay={i * 0.1}>
              <div className={`group bg-gradient-to-br ${uc.gradient} backdrop-blur-md p-6 rounded-2xl border ${uc.border} hover:border-opacity-60 transition-all duration-500 hover:scale-105 hover:shadow-xl h-full`}>
                <div className="text-4xl mb-4 text-center">{uc.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{uc.title}</h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm">{uc.description}</p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
