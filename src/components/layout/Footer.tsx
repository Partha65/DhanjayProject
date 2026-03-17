import Link from 'next/link';
import { Facebook, Linkedin, Instagram, Youtube, X, Mail, Phone, MapPin } from 'lucide-react';
import { footerData } from '@/data/footer';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 mt-20">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b0f22]/80 to-[#0b0f22] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white font-black text-xs">SP</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-bold text-sm">{footerData.company.name}</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">{footerData.company.description}</p>
            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Products</h3>
            <ul className="space-y-3">
              {footerData.products.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerData.companyLinks.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              {footerData.legal.map((link) => (
                <li key={link.title}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 shrink-0" />
                <span>{footerData.offices[0].email}</span>
              </div>
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{footerData.offices[0].address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-500 text-xs">{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
