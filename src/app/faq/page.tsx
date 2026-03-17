export default function FAQ() {
  const faqs = [
    {
      q: "What payment methods do you support?",
      a: "We support over 100+ payment methods including all major Credit/Debit Cards, NetBanking from 50+ banks, UPI (GPay, PhonePe, Paytm, etc.), and popular Wallets."
    },
    {
      q: "How long does settlement take?",
      a: "Depending on your plan, settlements can be Instant (real-time), T+0 (same day), or standard T+2 working days. We ensure your cash flow is never interrupted."
    },
    {
      q: "Is SP Transaction Hub PCI-DSS compliant?",
      a: "Absolutely. We employ bank-grade security, 256-bit encryption, and are fully PCI-DSS Level 1 compliant to ensure your and your customers' data is perfectly secure."
    },
    {
      q: "Do you have checkout plugins for Shopify or WooCommerce?",
      a: "Yes! We have plug-and-play integrations for Shopify, WooCommerce, Magento, and popular mobile frameworks like React Native and Flutter."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] animate-fadeInUp">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-gray-400 text-lg">Everything you need to know about our payment infrastructure.</p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="glass-bg p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
              <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
              <p className="text-gray-400 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
