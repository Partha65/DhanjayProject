import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Banking Partners',
  description: 'Discover the trusted banking partners that power Vertexpay Solutions, ensuring reliable and secure payment routing across India.',
  openGraph: {
    title: 'Banking Partners - Vertexpay Solutions',
    description: 'Discover the trusted banking partners that power Vertexpay Solutions.',
    url: 'https://vertexpaysolutions.in/banking-patner',
  },
};

export default function BankingPartnerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
