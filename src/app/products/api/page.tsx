import ProductPageTemplate from '@/components/ui/ProductPageTemplate';

export default function APIPage() {
  return (
    <ProductPageTemplate
      name="Payment Gateway API"
      tagline="Developer-Friendly REST API"
      description="Integrate our payment gateway with comprehensive REST APIs, SDKs, and developer tools. Build custom payment flows in minutes."
      features={[
        { title: 'RESTful API', desc: 'Clean, well-documented REST API with JSON responses.' },
        { title: 'SDKs & Libraries', desc: 'Official SDKs for Node.js, Python, PHP, Java, and more.' },
        { title: 'Sandbox Testing', desc: 'Full-featured sandbox environment for development and testing.' },
        { title: 'Webhooks', desc: 'Real-time event notifications for payment status changes.' },
        { title: 'Idempotency', desc: 'Built-in idempotency support to prevent duplicate transactions.' },
        { title: 'Rate Limiting', desc: 'Generous rate limits with burst support for high-volume processing.' },
      ]}
      benefits={[
        'Reduce integration time by 60%',
        'Accept 50+ payment methods via single API',
        '99.9% API uptime guarantee',
        'Sub-second response times',
        'Comprehensive API documentation',
        '24/7 developer support',
      ]}
    />
  );
}
