export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-20 min-h-[70vh] flex justify-center animate-fadeInUp">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-400 text-lg">Have questions? Our support team in Delhi is ready to assist you.</p>
        </div>
        
        <form className="glass-bg p-8 md:p-12 rounded-2xl shadow-xl space-y-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">First Name</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Last Name</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="Doe" />
              </div>
           </div>
           
           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-300">Email Address</label>
             <input type="email" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors" placeholder="john@company.com" />
           </div>

           <div className="space-y-2">
             <label className="text-sm font-medium text-gray-300">Message</label>
             <textarea rows={5} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors resize-none" placeholder="How can we help you?"></textarea>
           </div>
           
           <button type="button" className="w-full py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-lg hover:shadow-[0_0_20px_#9333ea60] transition-shadow">
             Send Message
           </button>
        </form>
      </div>
    </div>
  );
}
