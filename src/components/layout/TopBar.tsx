'use client';

import { Facebook, Linkedin, Instagram, Youtube, X, Mail } from 'lucide-react';
import { topBarData } from '@/data/navigation';

export default function TopBar() {
  return (
    <div className="w-full bg-[#070814] border-b border-white/5 text-sm py-2 px-4 z-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Support info */}
        <div className="hidden md:flex items-center gap-4 text-gray-300 shrink-0">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs">24/7 Support Available</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            <span className="text-xs">{topBarData.supportEmail}</span>
          </div>
        </div>

        {/* Center: Marquee ticker */}
        <div className="flex-1 mx-4 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee text-xs text-yellow-400 font-medium">
            {topBarData.ticker.join(' | ')}
          </div>
        </div>

        {/* Right: Social icons */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {topBarData.socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label={social.name}
            >
              {social.icon === 'facebook' && <Facebook className="w-4 h-4" />}
              {social.icon === 'linkedin' && <Linkedin className="w-4 h-4" />}
              {social.icon === 'instagram' && <Instagram className="w-4 h-4" />}
              {social.icon === 'youtube' && <Youtube className="w-4 h-4" />}
              {social.icon === 'x' && <X className="w-4 h-4" />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
