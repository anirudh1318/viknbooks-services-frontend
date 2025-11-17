import { Zap, Shield, Users } from "lucide-react";

export default function BenefitsSection() {
  return (
    <section className="bg-gradient-to-br from-green-600 to-emerald-700 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose ViknBooks Integrations?</h2>
          <p className="text-xl text-green-100">Built for efficiency, designed for growth</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-white">
            <div className="w-12 h-12 bg-green-200 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-green-700 text-green-700">Quick Setup</h3>
            <p className="text-gray-500">Connect your tools in minutes with our simple configuration wizard. No technical expertise required.</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-white">
            <div className="w-12 h-12 bg-green-200 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-green-700">Secure & Reliable</h3>
            <p className="text-gray-500">Enterprise-grade security with encrypted connections. Your data is always protected and private.</p>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-white">
            <div className="w-12 h-12 bg-green-200 bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-700" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-green-700">24/7 Support</h3>
            <p className="text-gray-500">Our dedicated support team is always ready to help you with setup and troubleshooting.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
