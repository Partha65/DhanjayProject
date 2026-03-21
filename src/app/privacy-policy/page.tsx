'use client';

import { useState } from 'react';
import { PageShell, PageHero } from '@/components/ui/PageShell';

const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'info-collected', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'cookies', title: 'Cookies' },
  { id: 'third-party', title: 'Third-Party Services' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'contact', title: 'Contact Us' },
];

const content: Record<string, string[]> = {
  introduction: [
    'Vertexpay Solutions Pvt. Ltd. ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our payment gateway services.',
    'By using our services, you agree to the collection and use of information in accordance with this policy.',
  ],
  'info-collected': [
    'Personal Information: Name, email address, phone number, and business details provided during registration.',
    'Financial Information: Bank account details, transaction data, and payment instrument details necessary for processing payments.',
    'Technical Information: IP address, browser type, device information, and usage analytics collected automatically.',
    'Communication Data: Records of correspondence when you contact our support team.',
  ],
  'how-we-use': [
    'To process and facilitate payment transactions securely.',
    'To verify your identity and comply with KYC/AML regulations.',
    'To provide customer support and respond to inquiries.',
    'To improve our services, detect fraud, and ensure platform security.',
    'To send important service updates and notifications.',
  ],
  'data-security': [
    'We implement industry-standard security measures including SSL/TLS encryption, tokenization, and PCI DSS Level 1 compliance.',
    'All sensitive payment data is encrypted at rest and in transit using AES-256 encryption.',
    'We conduct regular security audits and vulnerability assessments.',
  ],
  cookies: [
    'We use essential cookies necessary for service functionality and security.',
    'Analytics cookies help us understand how users interact with our platform.',
    'You can manage cookie preferences through your browser settings.',
  ],
  'third-party': [
    'We may share necessary data with banking partners, payment processors, and regulatory authorities as required.',
    'We do not sell or rent your personal information to third parties for marketing purposes.',
  ],
  'your-rights': [
    'Access: You may request a copy of the personal data we hold about you.',
    'Correction: You may request correction of inaccurate personal data.',
    'Deletion: You may request deletion of your personal data, subject to legal retention requirements.',
    'Portability: You may request your data in a portable format.',
  ],
  contact: [
    'If you have any questions about this Privacy Policy, please contact us at:',
    'Email: vertexpaysolutionsprivatelimit@gmail.com',
    'Address: Pl/No.-3242856, At./P.O./P.S.-Sahadevkhunta, Dist.-Balasore, Odisha-756001',
  ],
};

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('introduction');

  return (
    <PageShell>
      <PageHero tag="Legal" title="Privacy" titleGradient="Policy" />

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
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

        {/* Content */}
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
