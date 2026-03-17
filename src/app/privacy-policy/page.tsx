export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] animate-fadeInUp max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p><strong>Last Updated:</strong> March 2026</p>
        
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Introduction</h2>
        <p>Welcome to SP Transaction Hub. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</p>
        
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. The Data We Collect</h2>
        <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
           <li><strong>Identity Data</strong> includes first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender.</li>
           <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
           <li><strong>Financial Data</strong> includes bank account and payment card details (processed securely via PCI-DSS compliant providers).</li>
           <li><strong>Transaction Data</strong> includes details about payments to and from you and other details of products and services you have purchased from us.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. How We Use Your Data</h2>
        <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
          <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
          <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          <li>Where we need to comply with a legal obligation.</li>
        </ul>
        
        <div className="mt-12 p-6 glass-bg rounded-xl border border-white/10">
           <p className="text-sm text-gray-400 m-0">If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@sptransactionhub.com.</p>
        </div>
      </div>
    </div>
  );
}
