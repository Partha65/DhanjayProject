'use client';

import { useState } from 'react';
import { PageShell, PageHero } from '@/components/ui/PageShell';

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'eligibility', title: 'Eligibility' },
  { id: 'process', title: 'Refund Process' },
  { id: 'timeline', title: 'Timeline' },
  { id: 'non-refundable', title: 'Non-Refundable Cases' },
  { id: 'contact', title: 'Contact Us' },
];

const content: Record<string, string[]> = {
  overview: [
    'Vertexpay Solutions Pvt. Ltd. is committed to ensuring fair and transparent refund policies for all our payment gateway users.',
    'This policy outlines the terms and conditions under which refunds may be initiated, processed, and settled.',
  ],
  eligibility: [
    'Failed Transactions: If a payment is debited but the transaction fails, a refund is automatically initiated.',
    'Duplicate Payments: Refunds for accidental duplicate charges will be processed upon verification.',
    'Merchant-Initiated Refunds: Refunds initiated by merchants for order cancellations, returns, or service issues.',
  ],
  process: [
    'Step 1: Contact our support team at vertexpaysolutionsprivatelimit@gmail.com with your transaction details.',
    'Step 2: Our team will investigate and verify the refund eligibility within 24-48 hours.',
    'Step 3: Once approved, the refund will be processed to the original payment method.',
    'Step 4: You will receive a confirmation email with the refund reference number.',
  ],
  timeline: [
    'UPI Refunds: 1-3 business days',
    'Credit/Debit Card Refunds: 5-7 business days',
    'Net Banking Refunds: 5-10 business days',
    'Wallet Refunds: 1-2 business days',
    'Note: The exact timeline may vary depending on the issuing bank or payment provider.',
  ],
  'non-refundable': [
    'Transactions flagged for fraud or suspicious activity.',
    'Services already rendered or consumed in full.',
    'Refund requests made after 180 days from the transaction date.',
    'Chargebacks initiated directly with the card issuer.',
  ],
  contact: [
    'For refund-related queries, please contact us at:',
    'Email: vertexpaysolutionsprivatelimit@gmail.com',
    'Phone: +918079739587',
    'Address: Pl/No.-3242856, At./P.O./P.S.-Sahadevkhunta, Dist.-Balasore, Odisha-756001',
  ],
};

export default function RefundPolicyPage() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <PageShell>
      <PageHero tag="Legal" title="Refund" titleGradient="Policy" />

      <div className="flex flex-col lg:flex-row gap-8">
        <nav className="lg:w-64 shrink-0">
          <div className="glass rounded-2xl p-4 lg:sticky lg:top-28 space-y-1">
            {sections.map((s) => (
              <button key={s.id} onClick={() => { setActiveSection(s.id); document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }}
                className="w-full text-left px-3 py-2 rounded-lg text-[13px] font-medium transition-all duration-200"
                style={{
                  color: activeSection === s.id ? 'var(--accent-1)' : 'var(--text-secondary)',
                  background: activeSection === s.id ? 'rgba(var(--glow-rgb), 0.08)' : 'transparent',
                  opacity: activeSection === s.id ? 1 : 0.7,
                }}>
                {s.title}
              </button>
            ))}
          </div>
        </nav>

        <div className="flex-1 space-y-8">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="glass rounded-2xl p-6 sm:p-8 scroll-mt-28">
              <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>{s.title}</h2>
              <div className="space-y-3">
                {content[s.id]?.map((p, i) => (
                  <p key={i} className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
