import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Read the Privacy Policy of Vertexpay Solutions to understand how we collect, use, and protect your personal information and transaction data.',
  openGraph: {
    title: 'Privacy Policy - Vertexpay Solutions',
    description: 'Read the Privacy Policy of Vertexpay Solutions to understand how we protect your data.',
    url: 'https://vertexpaysolutions.in/privacy-policy',
  },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
