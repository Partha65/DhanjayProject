export default function BankingPartners() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] flex flex-col items-center animate-fadeInUp">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">Our Banking Partners</h1>
      <p className="max-w-2xl text-center text-gray-300 text-lg mb-16">
        We collaborate with India's most trusted financial institutions to ensure
        your transactions are secure, compliant, and instantaneously processed.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-5xl">
        {/* Placeholder mock bank cards */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div key={i} className="glass-bg aspect-video rounded-xl flex items-center justify-center hover:scale-105 transition-transform">
             <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-gray-400">
               Bank {i}
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
