import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Payment Gateway Delhi | UPI & Online Payments – SP Transaction HUB",
  description:
    "SP Transaction HUB offers a secure payment gateway in Delhi with fast UPI, card, and online payment solutions for businesses.",
  openGraph: {
    type: "website",
    siteName: "SP Transaction Hub",
    title: "Payment Gateway Delhi – SP Transaction HUB",
    description: "Reliable UPI and online payment gateway services for businesses in Delhi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>
        <TopBar />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
