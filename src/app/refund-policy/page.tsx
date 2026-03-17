'use client';

import { useState } from 'react';

const sections = [
  { id: 'overview', title: 'Overview' },
  { id: 'eligibility', title: 'Refund Eligibility' },
  { id: 'process', title: 'Refund Process' },
  { id: 'timelines', title: 'Refund Timelines' },
  { id: 'non-refundable', title: 'Non-Refundable Cases' },
  { id: 'disputes', title: 'Dispute Resolution' },
  { id: 'contact', title: 'Contact Us' },
];

const content: Record<string, string[]> = {
  overview: [
    'SP Transaction Hub Technology Pvt. Ltd. is committed to ensuring fair and transparent refund policies for all our payment gateway users.',
    'This policy outlines the terms and conditions under which refunds may be initiated, processed, and settled.',
  ],
  eligibility: [
    'Duplicate Transactions: If a customer is charged multiple times for the same transaction.',
    'Failed Transactions: If money is debited but the transaction fails and payment is not received by the merchant.',
    'Unauthorized Transactions: Transactions made without the account holder\'s consent (subject to investigation).',
    'Merchant-Initiated Refunds: Refunds initiated by merchants for order cancellations, returns, or service issues.',
  ],
  process: [
    'Step 1: Contact our support team at support@sptransactionhub.com with your transaction details.',
    'Step 2: Our team will investigate and verify the refund eligibility within 24-48 hours.',
    'Step 3: Once approved, the refund will be processed to the original payment method.',
    'Step 4: You will receive a confirmation email with the refund reference number.',
  ],
  timelines: [
    'UPI Transactions: 1-3 business days',
    'Credit/Debit Card: 5-7 business days',
    'Net Banking: 3-5 business days',
    'Wallet Refunds: 1-2 business days',
    'Note: Timelines may vary depending on the issuing bank and payment method.',
  ],
  'non-refundable': [
    'Service charges and processing fees already incurred.',
    'Transactions older than 180 days from the date of the transaction.',
    'Cases involving fraudulent activity by the claimant.',
    'Transactions where the service/product has been delivered and consumed as agreed.',
  ],
  disputes: [
    'If you disagree with a refund decision, you may escalate the matter by contacting our grievance officer.',
    'All disputes will be resolved in accordance with the applicable Indian laws and regulations.',
    'The decision of the grievance officer shall be final and binding unless overridden by a competent legal authority.',
  ],
  contact: [
    'For refund-related queries, please contact us at:',
    'Email: support@sptransactionhub.com',
    'Phone: +91 XXXXXXXXXX',
    'Address: Laxmi Nagar, New Delhi, 110092',
  ],
};

export default function RefundPolicyPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0c0b18' }}>
      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="md:w-1/4 md:sticky md:top-24 md:self-start mb-6 md:mb-0 md:pr-6">
          <div
            className="rounded-lg shadow-md p-6 md:p-8"
            style={{
              background: `radial-gradient(ellipse at 30% 40%, #552a7a 0%, #31205b 25%, #151328 50%, #0c0b18 80%, #090918 100%)`,
            }}
          >
            <h2
              className="text-lg font-bold mb-4"
              style={{
                background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Table of Contents
            </h2>
            <nav>
              <ul className="space-y-2">
                {sections.map((s) => (
                  <li key={s.id}>
                    <button
                      onClick={() => scrollTo(s.id)}
                      className={`w-full text-left py-1 px-2 rounded-md transition-colors duration-300 text-sm ${
                        activeSection === s.id
                          ? 'bg-blue-700/20 font-semibold'
                          : 'text-white hover:bg-white/10'
                      }`}
                      style={
                        activeSection === s.id
                          ? {
                              backgroundImage: 'linear-gradient(to right, #3b82f6, #06b6d4, #3b82f6)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                            }
                          : undefined
                      }
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>

        {/* Content */}
        <div className="md:w-3/4">
          <div
            className="rounded-lg shadow-md p-6 md:p-8"
            style={{
              background: `radial-gradient(ellipse at 30% 40%, #552a7a 0%, #31205b 25%, #151328 50%, #0c0b18 80%, #090918 100%)`,
            }}
          >
            <h1
              className="text-3xl font-bold mb-8"
              style={{
                background: 'linear-gradient(90deg, #3b82f6, #06b6d4, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Refund Policy
            </h1>

            {sections.map((s) => (
              <section key={s.id} id={s.id} className="mb-10">
                <h2 className="text-2xl font-semibold text-white mb-4">{s.title}</h2>
                <div className="space-y-3">
                  {content[s.id]?.map((paragraph, i) => (
                    <p key={i} className="text-gray-300 leading-relaxed text-sm">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
