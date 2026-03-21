import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ)',
  description: 'Find answers to commonly asked questions about Vertexpay Solutions payment gateway, integration, pricing, security, and more.',
  openGraph: {
    title: 'FAQ - Vertexpay Solutions',
    description: 'Find answers to commonly asked questions about Vertexpay Solutions payment gateway.',
    url: 'https://vertexpaysolutions.in/faq',
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
