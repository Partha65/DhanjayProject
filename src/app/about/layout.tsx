import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Vertexpay Solutions, a leading payment gateway provider in Balasore, Odisha. Discover our mission, vision, and core values.',
  openGraph: {
    title: 'About Us - Vertexpay Solutions',
    description: 'Learn about Vertexpay Solutions, a leading payment gateway provider in Balasore, Odisha.',
    url: 'https://vertexpaysolutions.in/about',
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
