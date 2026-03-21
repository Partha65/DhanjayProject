import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Vertexpay Solutions for sales, support, or partnership inquiries. We are here to help your business grow with seamless payments.',
  openGraph: {
    title: 'Contact Us - Vertexpay Solutions',
    description: 'Get in touch with Vertexpay Solutions for sales, support, or partnership inquiries.',
    url: 'https://vertexpaysolutions.in/contact-us',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
