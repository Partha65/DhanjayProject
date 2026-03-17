'use client';

import { useState } from 'react';

const sections = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'info-collected', title: 'Information We Collect' },
  { id: 'how-we-use', title: 'How We Use Your Information' },
  { id: 'data-sharing', title: 'Data Sharing' },
  { id: 'data-security', title: 'Data Security' },
  { id: 'cookies', title: 'Cookies' },
  { id: 'your-rights', title: 'Your Rights' },
  { id: 'changes', title: 'Changes to Policy' },
  { id: 'contact', title: 'Contact Us' },
];

const content: Record<string, string[]> = {
  introduction: [
    'SP Transaction Hub Technology Pvt. Ltd. ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you use our payment gateway services.',
    'By using our services, you agree to the collection and use of information in accordance with this policy.',
  ],
  'info-collected': [
    'Personal Information: Name, email address, phone number, business name, and billing address.',
    'Financial Information: Bank account details, UPI IDs, and transaction data necessary for processing payments.',
    'Technical Information: IP address, browser type, device information, and cookies for service optimization.',
    'Usage Data: Information about how you interact with our platform, including pages visited and features used.',
  ],
  'how-we-use': [
    'To process and facilitate payment transactions securely.',
    'To provide customer support and respond to your inquiries.',
    'To improve our services, platform performance, and user experience.',
    'To comply with legal obligations and prevent fraudulent activities.',
    'To send you important updates about our services and policy changes.',
  ],
  'data-sharing': [
    'We do not sell your personal data. We may share your information with:',
    'Banking partners for transaction processing.',
    'Regulatory authorities as required by law.',
    'Service providers who assist us in operating our platform (under strict confidentiality agreements).',
  ],
  'data-security': [
    'We implement industry-standard security measures including:',
    '256-bit SSL encryption for all data transmission.',
    'PCI DSS Level 1 compliance for payment data handling.',
    'Regular security audits and vulnerability assessments.',
    'Tokenization of sensitive financial data.',
  ],
  cookies: [
    'We use cookies and similar tracking technologies to enhance your experience. You can manage cookie preferences through your browser settings.',
    'Essential cookies: Required for basic platform functionality.',
    'Analytics cookies: Help us understand how you use our services.',
    'Performance cookies: Used to optimize platform performance.',
  ],
  'your-rights': [
    'Access: Request a copy of your personal data we hold.',
    'Correction: Request correction of inaccurate data.',
    'Deletion: Request deletion of your personal data (subject to legal obligations).',
    'Portability: Request transfer of your data to another service provider.',
  ],
  changes: [
    'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.',
    'We encourage you to review this Privacy Policy periodically for any changes.',
  ],
  contact: [
    'If you have any questions about this Privacy Policy, please contact us at:',
    'Email: support@sptransactionhub.com',
    'Address: Laxmi Nagar, New Delhi, 110092',
  ],
};

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('introduction');

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: '#0c0b18' }}
    >
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
              Privacy Policy
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
