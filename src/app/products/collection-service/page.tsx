import ProductPageTemplate from '@/components/ui/ProductPageTemplate';

export default function CollectionServicePage() {
  return (
    <ProductPageTemplate
      name="Collection Service"
      tagline="Automated Payment Collection"
      description="Streamline your payment collections with automated invoicing, reminders, and real-time reconciliation."
      features={[
        { title: 'Auto-Invoicing', desc: 'Generate and send professional invoices automatically.' },
        { title: 'Payment Links', desc: 'Create shareable payment links via SMS, email, and WhatsApp.' },
        { title: 'Recurring Collection', desc: 'Set up auto-debit mandates for subscription and EMI collection.' },
        { title: 'Multi-Channel', desc: 'Collect via UPI, cards, net banking, wallets, and NACH.' },
        { title: 'Smart Reminders', desc: 'Automated payment reminders to reduce failed collections.' },
        { title: 'Real-Time Reconciliation', desc: 'Instant matching of payments against invoices.' },
      ]}
      benefits={[
        'Reduce payment delays by 70%',
        'Automated follow-ups and reminders',
        'Real-time collection dashboard',
        'Customizable invoice templates',
        'Multi-currency collection support',
        'Seamless ERP integration',
      ]}
    />
  );
}
