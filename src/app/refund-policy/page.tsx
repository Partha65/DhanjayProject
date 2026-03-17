export default function RefundPolicy() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] animate-fadeInUp max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Refund Policy</h1>
      
      <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
        <p><strong>Last Updated:</strong> March 2026</p>
        
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. General Policy</h2>
        <p>At SP Transaction Hub, we strive to ensure a smooth and seamless payment experience. This Refund Policy outlines the conditions under which refunds are processed for transactions made through our gateway.</p>
        
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Processing of Refunds</h2>
        <p>Refunds are initiated by the merchant utilizing our payment gateway services. SP Transaction Hub facilitates the transfer of funds back to the customer's original payment method upon receiving a valid refund request from the merchant.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-400">
           <li><strong>Standard Processing Time:</strong> Refunds typically take 5-7 business days to reflect in the customer's account, depending on the issuing bank or payment provider.</li>
           <li><strong>Partial Refunds:</strong> We support partial refunds if initiated by the merchant. The same processing timelines apply.</li>
           <li><strong>Chargebacks:</strong> In the event of a chargeback, the process is governed by the rules of the respective card networks (Visa, Mastercard, RuPay, etc.) or UPI guidelines.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Failed Transactions</h2>
        <p>In cases where funds are debited from the customer's account but the transaction fails on the merchant's platform, an auto-refund is automatically initiated by our system. These auto-refunds are processed immediately and usually reflect within T+2 to T+5 bank working days.</p>
        
        <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Dispute Resolution</h2>
        <p>If you believe a transaction is unauthorized or requires a refund and the merchant is unresponsive, you may escalate the issue to our nodal desk. We will mediate based on our internal grievance redressal mechanism and RBI guidelines.</p>
      </div>
    </div>
  );
}
