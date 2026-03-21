import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { activeTheme } from "@/lib/theme";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://vertexpaysolutions.in'),
  title: {
    default: "Payment Gateway Balasore, Odisha | UPI & Online Payments - Vertexpay Solutions",
    template: "%s | Vertexpay Solutions",
  },
  description:
    "Vertexpay Solutions offers a secure payment gateway in Balasore, Odisha with fast UPI, card, and online payment solutions for businesses.",
  keywords: [
    "Payment Gateway", "UPI Payments", "Online Payments", "Balasore", "Odisha",
    "Vertexpay Solutions", "Business Payment Solutions", "Secure Payments"
  ],
  authors: [{ name: "Vertexpay Solutions" }],
  creator: "Vertexpay Solutions",
  publisher: "Vertexpay Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vertexpaysolutions.in/",
    siteName: "Vertexpay Solutions",
    title: "Payment Gateway Balasore, Odisha - Vertexpay Solutions",
    description: "Reliable UPI and online payment gateway services for businesses in Balasore, Odisha.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vertexpay Solutions - Secure Payment Gateway",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Gateway Balasore, Odisha - Vertexpay Solutions",
    description: "Reliable UPI and online payment gateway services for businesses in Balasore, Odisha.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = activeTheme;
  const cssVars = {
    '--bg-primary': t.bgPrimary,
    '--bg-secondary': t.bgSecondary,
    '--bg-tertiary': t.bgTertiary,
    '--accent-1': t.accent1,
    '--accent-2': t.accent2,
    '--accent-3': t.accent3,
    '--text-primary': t.textPrimary,
    '--text-secondary': t.textSecondary,
    '--text-muted': t.textMuted,
    '--glow-rgb': t.glowColorRgb,
    '--gradient-body': t.gradientBody,
    '--gradient-hero': t.gradientHero,
    '--gradient-button': t.gradientButton,
    '--gradient-card': t.gradientCard,
    '--nav-bg': t.navBg,
    '--nav-border': t.navBorder,
    '--nav-button-gradient': t.navButtonGradient,
  } as React.CSSProperties;

  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`} style={cssVars}>
        {/* <TopBar /> */}
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
