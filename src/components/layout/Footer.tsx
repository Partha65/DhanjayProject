'use client';

import Link from 'next/link';
import { footerData } from '@/data/footer';
import { Facebook, Linkedin, Instagram, Youtube, X, Mail, Phone, MapPin } from 'lucide-react';

const socialIcons: Record<string, React.ReactNode> = {
  facebook: <Facebook className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  instagram: <Instagram className="w-4 h-4" />,
  youtube: <Youtube className="w-4 h-4" />,
  x: <X className="w-4 h-4" />,
};

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Info */}
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-white text-xs"
                style={{ background: 'var(--gradient-button)' }}>VP</div>
              <div className="flex flex-col leading-none">
                <span className="font-bold text-sm" style={{ color: 'var(--text-primary)' }}>{footerData.company.name}</span>
                <span className="text-[9px] uppercase tracking-widest" style={{ color: 'var(--text-muted)', opacity: 0.6 }}>{footerData.company.tagline}</span>
              </div>
            </Link>
            <p className="text-[13px] leading-relaxed" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
              {footerData.company.description}
            </p>
            <div className="flex gap-2">
              {footerData.socialLinks?.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-0.5"
                  style={{ background: 'rgba(255,255,255,0.03)', color: 'var(--text-muted)' }}>
                  {socialIcons[s.icon] || s.name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.2em] font-semibold mb-5" style={{ color: 'var(--accent-1)' }}>Products</h4>
            <div className="space-y-2.5">
              {footerData.products.map((p) => (
                <Link key={p.title} href={p.href} className="block text-[13px] transition-colors hover:text-white" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
                  {p.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.2em] font-semibold mb-5" style={{ color: 'var(--accent-1)' }}>Company</h4>
            <div className="space-y-2.5">
              {footerData.company_links?.map((l) => (
                <Link key={l.title} href={l.href} className="block text-[13px] transition-colors hover:text-white" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
                  {l.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] uppercase tracking-[0.2em] font-semibold mb-5" style={{ color: 'var(--accent-1)' }}>Contact</h4>
            <div className="space-y-4">
              {footerData.offices.map((office) => (
                <div key={office.city} className="space-y-2">
                  <p className="text-[13px] font-semibold" style={{ color: 'var(--text-primary)' }}>{office.city}</p>
                  <div className="flex items-start gap-2 text-[12px]" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
                    <MapPin className="w-3 h-3 mt-0.5 shrink-0" />{office.address}
                  </div>
                  <div className="flex items-center gap-2 text-[12px]" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
                    <Phone className="w-3 h-3 shrink-0" />{office.phone}
                  </div>
                  <div className="flex items-start gap-2 text-[12px] break-all" style={{ color: 'var(--text-secondary)', opacity: 0.6 }}>
                    <Mail className="w-3 h-3 mt-0.5 shrink-0" />{office.email}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center">
          <p className="text-[11px]" style={{ color: 'var(--text-muted)', opacity: 0.4 }}>{footerData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
