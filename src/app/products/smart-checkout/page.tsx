import ProductPageTemplate from '@/components/ui/ProductPageTemplate';

export default function SmartCheckoutPage() {
  return (
    <ProductPageTemplate
      name="Smart Checkout"
      tagline="Checkout That Converts"
      description="A fully customizable checkout experience optimized for higher conversion rates with intelligent payment routing."
      features={[
        { title: 'One-Click Checkout', desc: 'Saved card and UPI support for returning customers.' },
        { title: 'Smart Routing', desc: 'AI-powered payment routing for maximum success rates.' },
        { title: 'Custom Branding', desc: 'White-label checkout with your brand colors and logo.' },
        { title: 'Multi-Currency', desc: 'Accept payments in 100+ currencies with auto-conversion.' },
        { title: 'Subscription Billing', desc: 'Manage recurring payments with flexible billing cycles.' },
        { title: 'Cart Recovery', desc: 'Automated reminders for abandoned checkouts.' },
      ]}
      benefits={[
        'Increase conversion by up to 40%',
        '50+ payment methods supported',
        'Mobile-optimized design',
        'Real-time analytics dashboard',
        'A/B testing for checkout flows',
        'Instant payment confirmation',
      ]}
    />
  );
}
