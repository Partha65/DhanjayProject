import ProductPageTemplate from '@/components/ui/ProductPageTemplate';

export default function WalletPage() {
  return (
    <ProductPageTemplate
      name="Wallet"
      tagline="Digital Wallet Solutions"
      description="Enable seamless in-app payments with our secure digital wallet infrastructure — top-up, transfer, and pay with ease."
      features={[
        { title: 'Instant Top-Up', desc: 'Fund wallets via UPI, cards, and net banking instantly.' },
        { title: 'P2P Transfers', desc: 'Enable user-to-user transfers within your platform.' },
        { title: 'QR Payments', desc: 'Pay at stores and online using wallet balance via QR.' },
        { title: 'Cashback & Rewards', desc: 'Configure custom cashback rules and reward programs.' },
        { title: 'KYC Compliant', desc: 'Built-in KYC verification with RBI compliance.' },
        { title: 'Transaction History', desc: 'Detailed transaction logs with search and export.' },
      ]}
      benefits={[
        'Reduce payment friction for users',
        'Increase platform retention',
        'Configurable spending limits',
        'Multi-wallet support per user',
        'Real-time balance updates',
        'Webhook notifications for all events',
      ]}
    />
  );
}
