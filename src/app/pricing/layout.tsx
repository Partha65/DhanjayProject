import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent and competitive pricing for all your payment processing needs. Choose the plan that fits your business scale out of our standard and enterprise packages.',
  openGraph: {
    title: 'Pricing - Vertexpay Solutions',
    description: 'Transparent and competitive pricing for all your payment processing needs.',
    url: 'https://vertexpaysolutions.in/pricing',
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
