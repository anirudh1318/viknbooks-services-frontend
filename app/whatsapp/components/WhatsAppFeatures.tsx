"use client";

import { MessageCircle, Bell, FileText, BarChart3, Shield, Zap } from "lucide-react";

const features = [
    { icon: <MessageCircle className="w-6 h-6" />, title: "Direct Customer Communication", description: "Send invoices, estimates, and payment reminders directly through WhatsApp" },
    { icon: <Bell className="w-6 h-6" />, title: "Automated Notifications", description: "Get instant alerts for payments, orders, and important business activities" },
    { icon: <FileText className="w-6 h-6" />, title: "Document Sharing", description: "Share bills, receipts, and financial reports with customers instantly" },
    { icon: <BarChart3 className="w-6 h-6" />, title: "Real-time Updates", description: "Keep customers informed with order status and delivery updates" },
    { icon: <Shield className="w-6 h-6" />, title: "Secure & Reliable", description: "End-to-end encrypted communication ensuring data privacy" },
    { icon: <Zap className="w-6 h-6" />, title: "Quick Setup", description: "Connect your WhatsApp Business account in minutes" }
];

export default function WhatsAppFeatures() {
    return (
        <section id="features" className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
                    <p className="text-xl text-gray-600">Everything you need to communicate with customers on WhatsApp</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition group">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4 group-hover:bg-green-600 group-hover:text-white transition">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
