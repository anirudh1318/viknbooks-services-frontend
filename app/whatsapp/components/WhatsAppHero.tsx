"use client";

import { MessageCircle, ChevronRight, Check } from "lucide-react";

export default function WhatsAppHero() {
    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm font-medium">WhatsApp Integration</span>
                    </div>

                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        Connect Your Business with
                        <span className="text-green-600"> WhatsApp</span>
                    </h1>

                    <p className="text-xl text-gray-600 mb-8">
                        Send invoices, payment reminders, and business updates directly to your customers on WhatsApp.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition flex items-center justify-center space-x-2 shadow-lg shadow-green-200">
                            <span className="font-semibold">Get Started Free</span>
                            <ChevronRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition border-2 border-gray-200 font-semibold">
                            Watch Demo
                        </button>
                    </div>

                    <div className="mt-8 flex items-center space-x-6 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                            <Check className="w-5 h-5 text-green-600" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Check className="w-5 h-5 text-green-600" />
                            <span>14-day free trial</span>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition duration-300">
                        <div className="bg-white rounded-2xl p-6 transform -rotate-3">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <MessageCircle className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <div className="font-semibold text-gray-900">WhatsApp Business</div>
                                    <div className="text-sm text-gray-500">Connected</div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                                    <div className="text-sm font-medium text-gray-900 mb-1">Invoice #INV-001</div>
                                    <div className="text-xs text-gray-600">Sent via WhatsApp ✓</div>
                                </div>
                                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                    <div className="text-sm font-medium text-gray-900 mb-1">Payment Reminder</div>
                                    <div className="text-xs text-gray-600">Delivered ✓✓</div>
                                </div>
                                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                                    <div className="text-sm font-medium text-gray-900 mb-1">Order Update</div>
                                    <div className="text-xs text-gray-600">Read ✓✓</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
