export default function Products() {
  const products = [
    {
       title: "Payment Gateway",
       desc: "Our core highly-available gateway. Accept payments on your website or app seamlessly.",
       icon: "🔌"
    },
    {
       title: "Payment Links",
       desc: "Generate and share links via WhatsApp, SMS, or Email to collect payments instantly without a website.",
       icon: "🔗"
    },
    {
       title: "UPI Autopay",
       desc: "Automate recurring payments for subscriptions, EMIs, and mutual funds using UPI.",
       icon: "🔄"
    },
    {
       title: "Smart Routing",
       desc: "Dynamically route transactions across multiple acquiring banks to guarantee the highest success rates.",
       icon: "🧠"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] animate-fadeInUp">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">A comprehensive suite of payment products built for the modern Indian internet economy.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
         {products.map((p, i) => (
           <div key={i} className="glass-bg p-8 rounded-2xl group hover:-translate-y-1 transition-transform">
             <div className="text-4xl mb-6">{p.icon}</div>
             <h2 className="text-2xl font-bold mb-3 group-hover:text-primary-400 transition-colors">{p.title}</h2>
             <p className="text-gray-400 leading-relaxed">{p.desc}</p>
           </div>
         ))}
      </div>
    </div>
  );
}
