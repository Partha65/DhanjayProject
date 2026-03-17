'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, LogIn, MessageSquare, CreditCard, Smartphone, ArrowRightLeft, ShoppingCart, Wallet, Code, Volume2, QrCode } from 'lucide-react';
import { productDropdownItems, navLinks } from '@/data/navigation';

const iconMap: Record<string, React.ReactNode> = {
  'UPI': <Smartphone className="w-5 h-5" />,
  'Collection Service': <CreditCard className="w-5 h-5" />,
  'Payout Solution': <ArrowRightLeft className="w-5 h-5" />,
  'Smart Checkout': <ShoppingCart className="w-5 h-5" />,
  'Wallet': <Wallet className="w-5 h-5" />,
  'Payment Gateway API': <Code className="w-5 h-5" />,
  'Sound Box': <Volume2 className="w-5 h-5" />,
  'Mobile App': <Smartphone className="w-5 h-5" />,
  'Static & Dynamic QR': <QrCode className="w-5 h-5" />,
};

const iconBgMap: Record<string, string> = {
  'UPI': 'bg-blue-100 text-blue-600',
  'Collection Service': 'bg-purple-100 text-purple-600',
  'Payout Solution': 'bg-cyan-100 text-cyan-600',
  'Smart Checkout': 'bg-amber-100 text-amber-600',
  'Wallet': 'bg-pink-100 text-pink-600',
  'Payment Gateway API': 'bg-red-100 text-red-600',
  'Sound Box': 'bg-gray-100 text-gray-500',
  'Mobile App': 'bg-gray-100 text-gray-500',
  'Static & Dynamic QR': 'bg-gray-100 text-gray-500',
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[1000] bg-[rgba(16,16,28,0.95)] backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-black text-sm">SP</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-sm tracking-wide">TRANSACTION HUB</span>
              <span className="text-gray-400 text-[10px] tracking-wider">TECHNOLOGY PVT. LTD.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                <CreditCard className="w-4 h-4" />
                Products
                <ChevronDown className={`w-4 h-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown */}
              <div className={`absolute top-full left-0 mt-1 w-64 bg-[rgba(16,16,28,0.95)] backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl transition-all duration-300 origin-top ${productsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="p-2">
                  {productDropdownItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.comingSoon ? '#' : item.href}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                        item.comingSoon
                          ? 'opacity-60 cursor-not-allowed'
                          : 'hover:bg-white/10 hover:-translate-y-0.5'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${iconBgMap[item.title] || 'bg-gray-100 text-gray-500'}`}>
                        {iconMap[item.title]}
                      </div>
                      <span className="text-sm text-white font-medium">{item.title}</span>
                      {item.comingSoon && (
                        <span className="ml-auto text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full font-semibold">
                          Soon
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Developers Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium">
                <Code className="w-4 h-4" />
                Developers
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-56 bg-[rgba(16,16,28,0.95)] backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl transition-all duration-300 origin-top opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto focus-within:opacity-100 focus-within:scale-100 focus-within:pointer-events-auto">
                <div className="p-2">
                  <Link href="/api" className="block px-3 py-2.5 rounded-lg text-sm text-white hover:bg-white/10 transition-colors">API Documentation</Link>
                  <Link href="/api" className="block px-3 py-2.5 rounded-lg text-sm text-white hover:bg-white/10 transition-colors">Integration Guide</Link>
                  <Link href="/api" className="block px-3 py-2.5 rounded-lg text-sm text-white hover:bg-white/10 transition-colors">Sandbox Testing</Link>
                </div>
              </div>
            </div>

            {/* Regular links */}
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="flex items-center gap-1.5 px-4 py-2 text-gray-300 hover:text-white transition-colors text-sm font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Right buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact-us"
              className="relative overflow-hidden flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              Enquiry Now
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 text-sm"
            >
              <LogIn className="w-4 h-4" />
              Login
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 top-16 bg-[rgba(16,16,28,0.98)] backdrop-blur-xl z-[999] transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 space-y-4 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <div className="space-y-1">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">Products</p>
            {productDropdownItems.map((item) => (
              <Link
                key={item.title}
                href={item.comingSoon ? '#' : item.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg ${item.comingSoon ? 'opacity-50' : 'hover:bg-white/10'}`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${iconBgMap[item.title]}`}>
                  {iconMap[item.title]}
                </div>
                <span className="text-sm text-white">{item.title}</span>
                {item.comingSoon && (
                  <span className="ml-auto text-[10px] bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full font-semibold">Soon</span>
                )}
              </Link>
            ))}
          </div>
          <div className="border-t border-white/10 pt-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-white hover:bg-white/10 text-sm font-medium"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="border-t border-white/10 pt-4 space-y-3">
            <Link href="/contact-us" onClick={() => setMobileOpen(false)} className="block w-full text-center px-5 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-orange-500 to-pink-500 text-sm">
              Enquiry Now
            </Link>
            <Link href="#" onClick={() => setMobileOpen(false)} className="block w-full text-center px-5 py-3 rounded-xl font-semibold text-white border border-white/20 text-sm">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
