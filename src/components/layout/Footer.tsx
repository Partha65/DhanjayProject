import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black/40 border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1 space-y-4">
             <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary-500 to-secondary-500 flex items-center justify-center font-bold text-sm">
                SP
              </div>
              <span className="font-bold text-lg">Transaction Hub</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering Indian businesses with reliable and instant payment gateway solutions.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Products</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/products" className="hover:text-primary-400 transition-colors">Payment Gateway</Link></li>
              <li><Link href="/products" className="hover:text-primary-400 transition-colors">UPI Autopay</Link></li>
              <li><Link href="/products" className="hover:text-primary-400 transition-colors">Payment Links</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
              <li><Link href="/contact-us" className="hover:text-primary-400 transition-colors">Contact</Link></li>
              <li><Link href="/banking-patner" className="hover:text-primary-400 transition-colors">Banking Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/privacy-policy" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-primary-400 transition-colors">Refund Policy</Link></li>
              <li><Link href="/faq" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} SP Transaction Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
