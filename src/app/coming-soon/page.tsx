import Link from 'next/link';

export default function ComingSoon() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] flex flex-col items-center justify-center text-center animate-fadeInUp">
       <div className="w-24 h-24 bg-primary-500/20 rounded-full flex items-center justify-center mb-8 relative">
          <div className="absolute inset-0 bg-primary-500/20 rounded-full animate-ping"></div>
          <svg className="w-12 h-12 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
       </div>
       
       <h1 className="text-4xl md:text-6xl font-bold mb-6">Coming Soon</h1>
       <p className="max-w-xl text-gray-400 text-lg md:text-xl mb-10">
         We are currently building something amazing. This feature will be available very soon. 
         Stay tuned for updates!
       </p>
       
       <Link href="/" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full font-bold transition-all">
         Return to Homepage
       </Link>
    </div>
  );
}
