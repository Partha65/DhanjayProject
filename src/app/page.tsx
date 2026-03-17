export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary-600/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Seamless Payments,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
                Boundless Growth.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Empower your business with lightning-fast UPI, Cards, and NetBanking solutions tailored for zero downtime and maximum success.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact-us" className="glow-card inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-500 rounded-full transition-all hover:scale-105">
                Join Now <span className="ml-2">→</span>
              </a>
              <a href="/pricing" className="glass-bg inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-full transition-all hover:bg-white/10 hover:border-white/30">
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose SP Transaction Hub?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Robust infrastructure built for modern enterprises across India.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="glass-bg p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-primary-500/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Settlements</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Experience zero delay with our next-gen settlement engine. Keep your cash-flow optimal.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="glass-bg p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-secondary-500/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-secondary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Bank-Grade Security</h3>
              <p className="text-gray-400 text-sm leading-relaxed">PCI-DSS compliant platform with advanced fraud detection and instant risk mitigation.</p>
            </div>

            {/* Feature 3 */}
            <div className="glass-bg p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Developer Friendly</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Easy-to-integrate APIs and SDKs allowing you to go live in less than 24 hours.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials / Stats placeholder */}
      <section className="py-20 bg-black/20 relative z-10 border-y border-white/5">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Trusted by 10,000+ Businesses</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               <div>
                  <div className="text-4xl font-bold text-primary-400 mb-2">99.9%</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Uptime</div>
               </div>
               <div>
                  <div className="text-4xl font-bold text-secondary-400 mb-2">5M+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Txns Daily</div>
               </div>
               <div>
                  <div className="text-4xl font-bold text-blue-400 mb-2">100+</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Payment Modes</div>
               </div>
               <div>
                  <div className="text-4xl font-bold text-green-400 mb-2">&lt; 1s</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">Latency</div>
               </div>
            </div>
        </div>
      </section>
    </div>
  );
}
