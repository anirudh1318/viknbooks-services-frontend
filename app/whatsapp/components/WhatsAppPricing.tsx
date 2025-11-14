"use client";

import { Check } from "lucide-react";

const pricingPlans = [
  {
    name: "Starter",
    price: "₹499",
    period: "/month",
    description: "Perfect for small businesses",
    features: ["500 messages/month", "Basic templates", "Payment reminders", "Email support", "1 WhatsApp account"],
    popular: false
  },
  {
    name: "Professional",
    price: "₹999",
    period: "/month",
    description: "For growing businesses",
    features: ["2,000 messages/month", "Custom templates", "Automated notifications", "Priority support", "3 WhatsApp accounts", "Analytics dashboard"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: ["Unlimited messages", "Advanced automation", "Dedicated account manager", "24/7 premium support", "Unlimited accounts", "Custom integrations", "API access"],
    popular: false
  }
];

export default function WhatsAppPricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your business needs</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col ${plan.popular
                ? 'bg-gradient-to-br from-green-600 to-emerald-700 text-white shadow-2xl md:transform md:scale-105'
                : 'bg-white border-2 border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="inline-block bg-white text-green-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
                  Most Popular
                </div>
              )}

              <div className="flex-grow">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`mb-6 ${plan.popular ? 'text-green-100' : 'text-gray-600'}`}>{plan.description}</p>

                <div className="mb-6">
                  <span className={`text-4xl sm:text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</span>
                  <span className={`text-base sm:text-lg ${plan.popular ? 'text-green-100' : 'text-gray-600'}`}>{plan.period}</span>
                </div>
              </div>

              <button
                className={`w-full py-3 px-4 rounded-lg font-semibold transition text-sm sm:text-base ${plan.popular
                  ? 'bg-white text-green-600 hover:bg-green-50'
                  : 'bg-green-600 text-white hover:bg-green-700'
                }`}
              >
                Get Started
              </button>

              <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start space-x-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-green-200' : 'text-green-600'}`} />
                    <span className={`text-sm sm:text-base ${plan.popular ? 'text-green-50' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
