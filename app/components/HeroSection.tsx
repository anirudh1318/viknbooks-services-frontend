import { Zap, Check } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
      <div className="text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
          <Zap className="w-4 h-4" />
          <span className="text-sm font-medium">Connect Everything</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Powerful <span className="text-green-600">Integrations</span> for Your Business
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Connect ViknBooks with your favorite tools and platforms. Automate workflows and boost productivity with seamless integrations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="flex items-center space-x-2 text-gray-700">
            <Check className="w-5 h-5 text-green-600" />
            <span>50+ Integrations</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Check className="w-5 h-5 text-green-600" />
            <span>Easy Setup</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-700">
            <Check className="w-5 h-5 text-green-600" />
            <span>No Coding Required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
