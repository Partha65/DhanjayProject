import ProductPageTemplate from '@/components/ui/ProductPageTemplate';

export default function UPIPage() {
  return (
    <ProductPageTemplate
      name="UPI Payments"
      tagline="Instant UPI Payment Solutions"
      description="Accept payments from all UPI apps — Google Pay, PhonePe, Paytm, and more — with instant settlement and real-time tracking."
      features={[
        { title: 'All UPI Apps Supported', desc: 'Accept payments from Google Pay, PhonePe, Paytm, BHIM, and 100+ UPI apps.' },
        { title: 'Instant Settlement', desc: 'Get funds settled to your bank account within minutes, not days.' },
        { title: 'QR Code Payments', desc: 'Generate static and dynamic QR codes for in-store and online payments.' },
        { title: 'UPI Autopay', desc: 'Set up recurring mandates for subscription-based businesses.' },
        { title: 'Real-Time Notifications', desc: 'Get instant webhooks and callbacks for every transaction status change.' },
        { title: 'Fraud Protection', desc: 'AI-powered fraud detection with multi-layer security for every transaction.' },
      ]}
      benefits={[
        'Zero setup fee — start accepting UPI in minutes',
        'Support for UPI Pay-in and Pay-out',
        '99.9% uptime with auto-failover',
        'Real-time dashboard and analytics',
        'PCI DSS Level 1 compliant',
        'Dedicated account manager',
      ]}
    />
  );
}
