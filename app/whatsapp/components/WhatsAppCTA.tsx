"use client";

export default function WhatsAppCTA() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-3xl p-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Customer Communication?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of businesses using WhatsApp with ViknBooks
          </p>
          <button className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-green-50 transition font-semibold text-lg shadow-xl">
            Start Your Free Trial
          </button>
          <p className="text-green-100 mt-4 text-sm">No credit card required • 14-day free trial</p>
        </div>
      </div>
    </section>
  );
}
