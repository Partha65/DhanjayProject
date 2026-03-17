export default function Pricing() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] flex flex-col items-center animate-fadeInUp">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          No hidden fees, no setup costs. Only pay for what you process with our industry-leading rates.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Tier 1 */}
        <div className="glass-bg p-8 rounded-2xl flex flex-col border border-white/5">
           <h3 className="text-xl font-bold mb-2">Startup</h3>
           <div className="text-3xl font-bold text-primary-400 mb-6">1.5% <span className="text-base font-normal text-gray-500">per tx</span></div>
           <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-gray-300"><span className="text-primary-500 mr-2">✓</span> All UPI Apps</li>
              <li className="flex items-center text-gray-300"><span className="text-primary-500 mr-2">✓</span> Domestic Cards</li>
              <li className="flex items-center text-gray-300"><span className="text-primary-500 mr-2">✓</span> Standard Support</li>
           </ul>
           <button className="w-full py-3 rounded-lg border border-white/20 hover:bg-white/10 transition-colors">Get Started</button>
        </div>
        
        {/* Tier 2 */}
        <div className="glow-card p-1 bg-gradient-to-b from-primary-600 to-secondary-600 rounded-2xl">
          <div className="bg-background h-full w-full rounded-[14px] p-8 flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 bg-primary-500 text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
             <h3 className="text-xl font-bold mb-2">Enterprise</h3>
             <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400 mb-6">Custom <span className="text-base font-normal text-gray-500 mt-2 block">high volume</span></div>
             <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-center text-gray-300"><span className="text-primary-500 mr-2">✓</span> All Startup Features</li>
                <li className="flex items-center text-gray-300"><span className="text-primary-500 mr-2">✓</span> International Cards</li>
                <li className="flex items-center text-gray-300"><span className="text-primary-500 mr-2">✓</span> Dedicated Account Manager</li>
                <li className="flex items-center text-gray-300"><span className="text-primary-500 mr-2">✓</span> Custom Settlements</li>
             </ul>
             <button className="w-full py-3 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 font-bold hover:shadow-[0_0_20px_#9333ea60] transition-shadow">Contact Sales</button>
          </div>
        </div>
        
        {/* Tier 3 */}
        <div className="glass-bg p-8 rounded-2xl flex flex-col border border-white/5">
           <h3 className="text-xl font-bold mb-2">Platform</h3>
           <div className="text-3xl font-bold text-blue-400 mb-6">2.0% <span className="text-base font-normal text-gray-500">per tx</span></div>
           <ul className="space-y-4 mb-8 flex-grow">
              <li className="flex items-center text-gray-300"><span className="text-primary-500 mr-2">✓</span> Split Payments</li>
              <li className="flex items-center text-gray-300"><span className="text-primary-500 mr-2">✓</span> Partner Onboarding API</li>
              <li className="flex items-center text-gray-300"><span className="text-primary-500 mr-2">✓</span> White-label Checkout</li>
           </ul>
           <button className="w-full py-3 rounded-lg border border-white/20 hover:bg-white/10 transition-colors">Get Started</button>
        </div>
      </div>
    </div>
  );
}
