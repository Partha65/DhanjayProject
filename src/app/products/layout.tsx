import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Products & Solutions',
  description: 'Explore our comprehensive suite of digital payment solutions including UPI Payments, Collection Service, Payouts, Smart Checkout, and Payment API.',
  openGraph: {
    title: 'Payment Products & Solutions - Vertexpay Solutions',
    description: 'Explore our comprehensive suite of digital payment solutions including UPI Payments, Collection Service, Payouts, Smart Checkout, and Payment API.',
    url: 'https://vertexpaysolutions.in/products',
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
