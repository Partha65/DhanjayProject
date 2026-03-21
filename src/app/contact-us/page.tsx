'use client';

import { useState } from 'react';
import { PageShell, PageHero, GlassCard } from '@/components/ui/PageShell';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';

const contactInfo = [
  { icon: <Mail className="w-5 h-5" />, title: 'Email Us', value: 'vertexpaysolutionsprivatelimit@gmail.com' },
  { icon: <Phone className="w-5 h-5" />, title: 'Call Us', value: '+918079739587' },
  { icon: <MapPin className="w-5 h-5" />, title: 'Visit Us', value: 'Pl/No.-3242856, At./P.O./P.S.-Sahadevkhunta, Dist.-Balasore, Odisha-756001' },
];

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1500);
  };

  return (
    <PageShell>
      <PageHero tag="Contact" title="Get in" titleGradient="Touch" description="Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible." />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Form */}
        <ScrollFadeIn className="lg:col-span-3">
          <GlassCard hover={false} className="p-8">
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 mx-auto mb-4" style={{ color: 'var(--accent-1)' }} />
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Message Sent!</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" required placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-1"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: 'var(--text-primary)', ['--tw-ring-color' as string]: 'var(--accent-1)' }} />
                  <input type="email" required placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-1"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: 'var(--text-primary)' }} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-1"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: 'var(--text-primary)' }} />
                  <input type="text" placeholder="Business Name"
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-1"
                    style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: 'var(--text-primary)' }} />
                </div>
                <textarea required rows={5} placeholder="Your Message"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none focus:ring-1"
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: 'var(--text-primary)' }} />
                <button type="submit" disabled={loading}
                  className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{ background: 'var(--gradient-button)', boxShadow: '0 4px 20px rgba(var(--glow-rgb), 0.2)' }}>
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </GlassCard>
        </ScrollFadeIn>

        {/* Info + Map */}
        <div className="lg:col-span-2 space-y-5">
          {contactInfo.map((info, i) => (
            <ScrollFadeIn key={info.title} delay={i * 0.1}>
              <GlassCard className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(var(--glow-rgb), 0.1)', color: 'var(--accent-1)' }}>
                  {info.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>{info.title}</h3>
                  <p className="text-[13px] break-all" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>{info.value}</p>
                </div>
              </GlassCard>
            </ScrollFadeIn>
          ))}

          <ScrollFadeIn delay={0.3}>
            <div className="glass rounded-2xl overflow-hidden" style={{ height: '220px' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3712.0277154660707!2d86.91659397514282!3d21.506634330265054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1cf5983ec8ddf5%3A0x3a571da657a74a6e!2sSahadevkhuntha%2C%20Railway%20Colony%2C%20Balia%2C%20Balasore%2C%20Odisha!5e0!3m2!1sen!2sin!4v1774088813226!5m2!1sen!2sin"
                width="100%" height="100%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Vertexpay Solutions Location" style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.8) contrast(1.2)' }}
              />
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </PageShell>
  );
}
