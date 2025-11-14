"use client";

import { ChevronRight } from "lucide-react";

const steps = [
  { number: "01", title: "Connect WhatsApp", description: "Link your WhatsApp Business account with ViknBooks" },
  { number: "02", title: "Configure Settings", description: "Set up message templates and notification preferences" },
  { number: "03", title: "Start Messaging", description: "Begin sending invoices and updates to your customers" }
];

export default function WhatsAppHowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Get started in three simple steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                <div className="text-5xl font-bold text-green-100 mb-4">{step.number}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="w-8 h-8 text-green-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
