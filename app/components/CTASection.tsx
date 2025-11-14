export default function CTASection() {
  return (
    <section id="support" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Ready to Connect Your Business?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Start integrating your favorite tools with ViknBooks today
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold text-lg shadow-xl">
            Get Started Free
          </button>
          <button className="px-8 py-4 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition border-2 border-gray-200 font-semibold text-lg">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}
