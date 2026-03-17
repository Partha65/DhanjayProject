'use client';

import { useState } from 'react';
import ScrollFadeIn from '@/components/ui/ScrollFadeIn';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen px-4 md:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        <ScrollFadeIn className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-500/15 px-4 py-2 rounded-full text-sm font-medium text-orange-300 mb-6 border border-orange-500/20">
            Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have questions? Our team is here to help. Reach out to us for inquiries, support, or partnership opportunities.
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          {/* Contact Form */}
          <ScrollFadeIn>
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thank you for contacting us. We&apos;ll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5 font-medium">Full Name</label>
                      <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors text-sm" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm text-gray-400 mb-1.5 font-medium">Email</label>
                      <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors text-sm" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5 font-medium">Phone Number</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors text-sm" placeholder="+91 XXXXXXXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5 font-medium">Business Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors text-sm" placeholder="Your business name" />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5 font-medium">Message</label>
                    <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors text-sm resize-none" placeholder="Tell us about your requirements..." />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className={`w-full py-3 rounded-xl font-bold text-white transition-all duration-300 text-sm ${loading ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 shadow-xl hover:shadow-2xl'}`}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </ScrollFadeIn>

          {/* Contact Info */}
          <ScrollFadeIn delay={0.2}>
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Email Us</h3>
                    <p className="text-gray-400 text-sm">support@sptransactionhub.com</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Call Us</h3>
                    <p className="text-gray-400 text-sm">+91 XXXXXXXXXX</p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">Head Office</h3>
                    <p className="text-gray-400 text-sm">Laxmi Nagar, New Delhi, 110092</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFadeIn>
        </div>

        {/* Google Maps */}
        <ScrollFadeIn>
          <div className="rounded-2xl bg-gradient-to-tr from-[#25204b]/90 to-[#ff8f56]/60 shadow-xl overflow-hidden">
            <div className="p-8 pb-6">
              <h2 className="text-3xl font-bold text-white text-center mb-2">Find Us Here</h2>
              <p className="text-gray-200 text-center">Visit our Head Office in Laxmi Nagar, New Delhi</p>
            </div>
            <div className="mx-8 mb-8 rounded-xl overflow-hidden ring-4 ring-white/20 shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5!2d77.28!3d28.63!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzQ4LjAiTiA3N8KwMTYnNDguMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SP Transaction Hub Location"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
