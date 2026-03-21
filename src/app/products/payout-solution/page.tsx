import ProductPageTemplate from '@/components/ui/ProductPageTemplate';

export default function PayoutSolutionPage() {
  return (
    <ProductPageTemplate
      name="Payout Solution"
      tagline="Instant Payouts Made Simple"
      description="Send instant payouts to vendors, partners, and customers via UPI, IMPS, NEFT, and bank transfers with real-time tracking."
      features={[
        { title: 'Instant Bank Transfers', desc: 'Send payouts via IMPS, NEFT, RTGS, and UPI with real-time confirmation.' },
        { title: 'Bulk Payouts', desc: 'Process thousands of payouts in a single batch with CSV upload or API.' },
        { title: 'Scheduled Payments', desc: 'Set up recurring payouts with custom schedules and approval workflows.' },
        { title: 'Multi-Mode Support', desc: 'Payout to bank accounts, UPI IDs, wallets, and cards.' },
        { title: 'Real-Time Tracking', desc: 'Track every payout with instant status updates and delivery receipts.' },
        { title: 'Compliance & Reporting', desc: 'Auto-generate TDS reports, invoices, and compliance documentation.' },
      ]}
      benefits={[
        'Process payouts in under 10 seconds',
        'Support for 150+ banks across India',
        'Automated retry for failed payouts',
        'Maker-checker approval workflows',
        'Comprehensive reconciliation reports',
        'Dedicated payout dashboard',
      ]}
    />
  );
}
