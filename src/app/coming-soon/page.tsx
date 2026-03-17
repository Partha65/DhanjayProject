import Link from 'next/link';

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <div className="relative inline-block mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center animate-pulse">
            <span className="text-4xl">🚀</span>
          </div>
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-xl animate-pulse" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Coming Soon
          </span>
        </h1>
        <p className="text-gray-300 text-lg max-w-md mx-auto mb-8">
          We&apos;re working on something amazing. This feature will be available soon!
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
