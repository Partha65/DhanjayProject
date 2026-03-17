import Link from 'next/link';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] flex flex-col items-center justify-center animate-fadeInUp">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">About SP Transaction Hub</h1>
      <p className="max-w-3xl text-center text-gray-300 text-lg md:text-xl leading-relaxed mb-12">
        We are a leading payment gateway provider based in Delhi, committed to
        delivering seamless, secure, and instant payment experiences for
        businesses across India. Our goal is to empower merchants with robust
        infrastructures, zero downtime, and innovative solutions tailored for modern commerce.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="glass-bg p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-primary-400">Our Mission</h2>
          <p className="text-gray-400">To simplify and accelerate digital payments for businesses of all scales, providing the tools necessary for boundless growth.</p>
        </div>
        <div className="glass-bg p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-4 text-secondary-400">Our Vision</h2>
          <p className="text-gray-400">To be the trusted backbone of India's digital economy, setting the standard for innovation, security, and reliability in FinTech.</p>
        </div>
      </div>
    </div>
  );
}
