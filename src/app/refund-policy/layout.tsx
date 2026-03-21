import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: 'Learn about the refund and cancellation policies for transactions processed through the Vertexpay Solutions payment gateway.',
  openGraph: {
    title: 'Refund Policy - Vertexpay Solutions',
    description: 'Learn about the refund and cancellation policies for transactions processed through the Vertexpay Solutions payment gateway.',
    url: 'https://vertexpaysolutions.in/refund-policy',
  },
};

export default function RefundPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
