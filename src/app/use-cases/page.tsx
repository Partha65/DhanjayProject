export default function UseCases() {
  const industries = [
    { name: "E-Commerce", desc: "Highest success rates for D2C brands, eliminating cart abandonments." },
    { name: "EdTech", desc: "Automate fee collections, EMIs, and subscription models seamlessly." },
    { name: "Gaming", desc: "Instant pay-ins and payouts for real-time skill-based gaming platforms." },
    { name: "SaaS", desc: "Global recurring billing infrastructures designed for B2B software." },
    { name: "Financial Services", desc: "Secure loan disbursals and EMI collections with maximum reliability." },
    { name: "Travel & Hospitality", desc: "Handle high-ticket complex bookings with multi-vendor split payments." }
  ];

  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] animate-fadeInUp">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Tailor-made payment solutions adapted to the unique challenges of your industry.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
         {industries.map((ind, i) => (
           <div key={i} className="glass-bg p-8 rounded-2xl border border-white/5 relative overflow-hidden group">
             {/* Decorative glow */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-primary-500/20 transition-colors" />
             
             <h3 className="text-xl font-bold mb-3 relative z-10">{ind.name}</h3>
             <p className="text-gray-400 text-sm leading-relaxed relative z-10">{ind.desc}</p>
             <button className="mt-6 text-primary-400 font-medium text-sm hover:text-primary-300 flex items-center gap-1 transition-colors relative z-10">
               Learn more <span className="text-lg">→</span>
             </button>
           </div>
         ))}
      </div>
    </div>
  );
}
