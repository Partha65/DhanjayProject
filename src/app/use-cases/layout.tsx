import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Use Cases',
  description: 'See how businesses across various industries use Vertexpay Solutions to streamline their payment operations, from E-commerce and SaaS to Education and Retail.',
  openGraph: {
    title: 'Use Cases - Vertexpay Solutions',
    description: 'See how businesses across various industries use Vertexpay Solutions to streamline their payment operations.',
    url: 'https://vertexpaysolutions.in/use-cases',
  },
};

export default function UseCasesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
