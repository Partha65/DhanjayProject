'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, productDropdownItems, developerDropdownItems } from '@/data/navigation';
import { ChevronDown, Menu, X, ArrowRight, Sparkles, MessageCircle, LogIn } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const handleDropdownEnter = useCallback((name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(name);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  }, []);

  const toggleDropdown = useCallback((name: string) => {
    setOpenDropdown(prev => prev === name ? null : name);
  }, []);

  const active = (href: string) => pathname === href;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-3'}`}
        style={{
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(1.6)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(1.6)' : 'none',
          borderBottom: scrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-white text-xs transition-all duration-300 group-hover:scale-110"
                style={{ background: 'var(--gradient-button)', boxShadow: '0 0 20px rgba(var(--glow-rgb), 0.3)' }}>
                VP
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="font-bold text-[15px] tracking-wide" style={{ color: 'var(--text-primary)' }}>Vertexpay</span>
                <span className="text-[9px] tracking-[0.2em] uppercase font-medium" style={{ color: 'var(--text-muted)', opacity: 0.7 }}>Solutions</span>
              </div>
            </Link>

            {/* Center Nav */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center gap-0.5 px-1.5 py-1.5 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.04)' }}>

                {/* Products Dropdown */}
                <div className="relative"
                  onMouseEnter={() => handleDropdownEnter('products')}
                  onMouseLeave={handleDropdownLeave}>
                  <button
                    onClick={() => toggleDropdown('products')}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-300 ${openDropdown === 'products' ? 'bg-white/[0.06]' : 'hover:bg-white/[0.04]'}`}
                    style={{ color: openDropdown === 'products' ? 'var(--accent-1)' : 'var(--text-secondary)' }}>
                    Products
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${openDropdown === 'products' ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-72 transition-all duration-300 origin-top ${openDropdown === 'products' ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                    <div className="rounded-2xl overflow-hidden"
                      style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(32px) saturate(1.5)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 80px rgba(0,0,0,0.5), 0 0 40px rgba(var(--glow-rgb), 0.08)' }}>
                      <div className="p-1.5 max-h-[70vh] overflow-y-auto">
                        {productDropdownItems.map((item) => (
                          <Link key={item.title} href={item.href}
                            className="flex items-center justify-between p-3 rounded-xl text-[13px] font-medium transition-all duration-200 hover:bg-white/[0.06] group/item">
                            <span className="group-hover/item:text-white transition-colors" style={{ color: 'var(--text-secondary)' }}>{item.title}</span>
                            {item.comingSoon ? (
                              <span className="px-2 py-0.5 text-[9px] font-bold rounded-full flex items-center gap-1"
                                style={{ background: 'rgba(var(--glow-rgb), 0.12)', color: 'var(--accent-1)' }}>
                                <Sparkles className="w-2.5 h-2.5" /> Soon
                              </span>
                            ) : (
                              <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-60 transition-opacity" style={{ color: 'var(--text-muted)' }} />
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Developers Dropdown */}
                <div className="relative"
                  onMouseEnter={() => handleDropdownEnter('developers')}
                  onMouseLeave={handleDropdownLeave}>
                  <button
                    onClick={() => toggleDropdown('developers')}
                    className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-300 ${openDropdown === 'developers' ? 'bg-white/[0.06]' : 'hover:bg-white/[0.04]'}`}
                    style={{ color: openDropdown === 'developers' ? 'var(--accent-1)' : 'var(--text-secondary)' }}>
                    Developers
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${openDropdown === 'developers' ? 'rotate-180' : ''}`} />
                  </button>

                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 w-52 transition-all duration-300 origin-top ${openDropdown === 'developers' ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}>
                    <div className="rounded-2xl overflow-hidden"
                      style={{ background: 'var(--nav-bg)', backdropFilter: 'blur(32px) saturate(1.5)', border: '1px solid rgba(255,255,255,0.08)', boxShadow: '0 24px 80px rgba(0,0,0,0.5)' }}>
                      <div className="p-1.5">
                        {developerDropdownItems.map((item) => (
                          <Link key={item.title} href={item.href}
                            className="block p-3 rounded-xl text-[13px] font-medium transition-all duration-200 hover:bg-white/[0.06] hover:text-white"
                            style={{ color: 'var(--text-secondary)' }}>
                            {item.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Static Links */}
                {navLinks.map((link) => (
                  <Link key={link.title} href={link.href}
                    className={`relative px-4 py-2 rounded-xl text-[13px] font-medium transition-all duration-300 hover:bg-white/[0.04] ${active(link.href) ? 'bg-white/[0.06]' : ''}`}
                    style={{ color: active(link.href) ? 'var(--accent-1)' : 'var(--text-secondary)' }}>
                    {link.title}
                  </Link>
                ))}
              </div>
            </nav>

            {/* Right CTAs */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Link href="/contact-us"
                className="flex items-center gap-2 px-5 py-2 rounded-xl text-[13px] font-semibold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                style={{ background: 'var(--nav-button-gradient)', boxShadow: '0 4px 20px rgba(var(--glow-rgb), 0.25)' }}>
                <MessageCircle className="w-3.5 h-3.5" /> Enquiry
              </Link>
              {/* <Link href="/coming-soon"
                className="flex items-center gap-2 px-5 py-2 rounded-xl text-[13px] font-semibold transition-all duration-300 hover:bg-white/[0.06]"
                style={{ color: 'var(--text-secondary)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <LogIn className="w-3.5 h-3.5" /> Login
              </Link> */}
            </div>

            {/* Mobile Toggle */}
            <button className="lg:hidden p-2.5 rounded-xl transition-all hover:bg-white/[0.06]"
              onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              {mobileOpen ? <X className="w-5 h-5" style={{ color: 'var(--accent-1)' }} /> : <Menu className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-400 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }} onClick={() => setMobileOpen(false)} />

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] z-50 lg:hidden transition-transform duration-400 ease-out flex flex-col ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: 'var(--bg-primary)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="flex items-center justify-between p-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-white text-[10px]"
              style={{ background: 'var(--gradient-button)' }}>VP</div>
            <span className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>Vertexpay</span>
          </Link>
          <button onClick={() => setMobileOpen(false)} className="p-2 rounded-lg hover:bg-white/[0.05] transition-colors">
            <X className="w-4 h-4" style={{ color: 'var(--text-muted)' }} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-3 px-3">
          {/* Products */}
          <button onClick={() => setMobileAccordion(mobileAccordion === 'products' ? null : 'products')}
            className="w-full flex items-center justify-between px-3 py-3.5 rounded-xl text-sm font-medium hover:bg-white/[0.03] transition-colors"
            style={{ color: 'var(--text-secondary)' }}>
            Products
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileAccordion === 'products' ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === 'products' ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pl-3 pb-2 space-y-0.5">
              {productDropdownItems.map((item) => (
                <Link key={item.title} href={item.href} onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-[13px] hover:bg-white/[0.03] transition-colors"
                  style={{ color: 'var(--text-muted)' }}>
                  {item.title}
                  {item.comingSoon && <span className="text-[9px] font-bold px-1.5 py-0.5 rounded" style={{ background: 'rgba(var(--glow-rgb),0.1)', color: 'var(--accent-1)' }}>Soon</span>}
                </Link>
              ))}
            </div>
          </div>

          {/* Developers */}
          <button onClick={() => setMobileAccordion(mobileAccordion === 'devs' ? null : 'devs')}
            className="w-full flex items-center justify-between px-3 py-3.5 rounded-xl text-sm font-medium hover:bg-white/[0.03] transition-colors"
            style={{ color: 'var(--text-secondary)' }}>
            Developers
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileAccordion === 'devs' ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${mobileAccordion === 'devs' ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pl-3 pb-2 space-y-0.5">
              {developerDropdownItems.map((item) => (
                <Link key={item.title} href={item.href} onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-[13px] hover:bg-white/[0.03] transition-colors"
                  style={{ color: 'var(--text-muted)' }}>{item.title}</Link>
              ))}
            </div>
          </div>

          {/* Static */}
          {navLinks.map((link) => (
            <Link key={link.title} href={link.href} onClick={() => setMobileOpen(false)}
              className="block px-3 py-3.5 rounded-xl text-sm font-medium hover:bg-white/[0.03] transition-colors"
              style={{ color: active(link.href) ? 'var(--accent-1)' : 'var(--text-secondary)' }}>
              {link.title}
            </Link>
          ))}
        </div>

        <div className="p-4 space-y-2.5" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <Link href="/contact-us" onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold text-white"
            style={{ background: 'var(--nav-button-gradient)' }}>
            <MessageCircle className="w-4 h-4" /> Enquiry Now
          </Link>
          {/* <Link href="/coming-soon" onClick={() => setMobileOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold hover:bg-white/[0.04]"
            style={{ color: 'var(--text-secondary)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <LogIn className="w-4 h-4" /> Login
          </Link> */}
        </div>
      </div>

      <div className="h-20" />
    </>
  );
}
