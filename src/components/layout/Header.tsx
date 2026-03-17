import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Mock Logo */}
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-500 to-secondary-500 flex items-center justify-center font-bold text-xl shadow-[0_0_12px_#a855f7]">
            SP
          </div>
          <span className="font-bold text-xl hidden sm:block tracking-wide">
            Transaction Hub
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link>
          <Link href="/use-cases" className="text-gray-300 hover:text-white transition-colors">Use Cases</Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">Company</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/contact-us" className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Support
          </Link>
          <Link href="/contact-us" className="px-5 py-2.5 text-sm font-medium bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-all">
            Get in touch
          </Link>
        </div>
      </div>
    </header>
  );
}
