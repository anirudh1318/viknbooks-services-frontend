"use client";
import React, { useState } from 'react';
import { MessageCircle, Check, Zap, Shield, BarChart3, Users, Bell, FileText, ChevronRight, Menu, X, Mail, CreditCard, ShoppingCart, Calendar, Cloud, Database, Truck, Package } from 'lucide-react';

// WhatsApp Integration Component (from your provided code)
function WhatsAppIntegration({ onBack }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Direct Customer Communication",
      description: "Send invoices, estimates, and payment reminders directly through WhatsApp"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Automated Notifications",
      description: "Get instant alerts for payments, orders, and important business activities"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Document Sharing",
      description: "Share bills, receipts, and financial reports with customers instantly"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Updates",
      description: "Keep customers informed with order status and delivery updates"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "End-to-end encrypted communication ensuring data privacy"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Setup",
      description: "Connect your WhatsApp Business account in minutes"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹499",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "500 messages/month",
        "Basic templates",
        "Payment reminders",
        "Email support",
        "1 WhatsApp account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹999",
      period: "/month",
      description: "For growing businesses",
      features: [
        "2,000 messages/month",
        "Custom templates",
        "Automated notifications",
        "Priority support",
        "3 WhatsApp accounts",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited messages",
        "Advanced automation",
        "Dedicated account manager",
        "24/7 premium support",
        "Unlimited accounts",
        "Custom integrations",
        "API access"
      ],
      popular: false
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Connect WhatsApp",
      description: "Link your WhatsApp Business account with ViknBooks"
    },
    {
      number: "02",
      title: "Configure Settings",
      description: "Set up message templates and notification preferences"
    },
    {
      number: "03",
      title: "Start Messaging",
      description: "Begin sending invoices and updates to your customers"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="text-gray-600 hover:text-green-600 transition flex items-center space-x-2"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
                <span className="hidden sm:inline">Back to Integrations</span>
              </button>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg"></div>
                <span className="text-xl font-bold text-gray-900">ViknBooks</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-green-600 transition">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-green-600 transition">Pricing</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition">How It Works</a>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <a href="#features" className="block text-gray-600 hover:text-green-600">Features</a>
              <a href="#pricing" className="block text-gray-600 hover:text-green-600">Pricing</a>
              <a href="#how-it-works" className="block text-gray-600 hover:text-green-600">How It Works</a>
              <button className="w-full px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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
              Send invoices, payment reminders, and business updates directly to your customers on WhatsApp. Streamline communication and get paid faster.
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

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600">Everything you need to communicate with customers on WhatsApp</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition group"
              >
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

      {/* How It Works */}
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

      {/* Pricing Section */}
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
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mb-6 ${plan.popular ? 'text-green-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className={`text-4xl sm:text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      {plan.price}
                    </span>
                    <span className={`text-base sm:text-lg ${plan.popular ? 'text-green-100' : 'text-gray-600'}`}>
                      {plan.period}
                    </span>
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
                      <span className={`text-sm sm:text-base ${plan.popular ? 'text-green-50' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg"></div>
                <span className="text-xl font-bold text-white">ViknBooks</span>
              </div>
              <p className="text-sm">Simplifying business accounting with smart integrations.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2025 ViknBooks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Main Integrations Hub Component
export default function IntegrationsHub() {
  const [selectedIntegration, setSelectedIntegration] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const integrations = [
    {
      id: 'whatsapp',
      name: 'WhatsApp Business',
      icon: <MessageCircle className="w-8 h-8" />,
      description: 'Send invoices, reminders, and updates directly to customers',
      category: 'Communication',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
      popular: true,
      status: 'Available'
    },
    {
      id: 'email',
      name: 'Email Marketing',
      icon: <Mail className="w-8 h-8" />,
      description: 'Automate email campaigns and customer communications',
      category: 'Communication',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      popular: false,
      status: 'Coming Soon'
    },
    {
      id: 'payment',
      name: 'Payment Gateways',
      icon: <CreditCard className="w-8 h-8" />,
      description: 'Accept online payments with Razorpay, Stripe, and PayPal',
      category: 'Payments',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
      popular: true,
      status: 'Available'
    },
    {
      id: 'ecommerce',
      name: 'E-commerce Platforms',
      icon: <ShoppingCart className="w-8 h-8" />,
      description: 'Sync with Shopify, WooCommerce, and Amazon',
      category: 'Sales',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600',
      popular: true,
      status: 'Available'
    },
    {
      id: 'calendar',
      name: 'Calendar & Scheduling',
      icon: <Calendar className="w-8 h-8" />,
      description: 'Sync appointments with Google Calendar and Outlook',
      category: 'Productivity',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-600',
      popular: false,
      status: 'Available'
    },
    {
      id: 'cloud',
      name: 'Cloud Storage',
      icon: <Cloud className="w-8 h-8" />,
      description: 'Backup and sync files with Google Drive, Dropbox, OneDrive',
      category: 'Storage',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600',
      popular: false,
      status: 'Available'
    },
    {
      id: 'database',
      name: 'Database Sync',
      icon: <Database className="w-8 h-8" />,
      description: 'Connect with MySQL, PostgreSQL, and MongoDB',
      category: 'Data',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-600',
      popular: false,
      status: 'Coming Soon'
    },
    {
      id: 'shipping',
      name: 'Shipping & Logistics',
      icon: <Truck className="w-8 h-8" />,
      description: 'Integrate with DHL, FedEx, and local courier services',
      category: 'Logistics',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-600',
      popular: false,
      status: 'Available'
    },
    {
      id: 'inventory',
      name: 'Inventory Management',
      icon: <Package className="w-8 h-8" />,
      description: 'Real-time inventory tracking and stock management',
      category: 'Operations',
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-600',
      popular: true,
      status: 'Available'
    }
  ];

  const categories = ['All', 'Communication', 'Payments', 'Sales', 'Productivity', 'Storage', 'Data', 'Logistics', 'Operations'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredIntegrations = activeCategory === 'All'
    ? integrations
    : integrations.filter(int => int.category === activeCategory);

  if (selectedIntegration === 'whatsapp') {
    return <WhatsAppIntegration onBack={() => setSelectedIntegration(null)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">ViknBooks</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#integrations" className="text-gray-600 hover:text-green-600 transition">Integrations</a>
              <a href="#categories" className="text-gray-600 hover:text-green-600 transition">Categories</a>
              <a href="#support" className="text-gray-600 hover:text-green-600 transition">Support</a>
              <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-3">
              <a href="#integrations" className="block text-gray-600 hover:text-green-600">Integrations</a>
              <a href="#categories" className="block text-gray-600 hover:text-green-600">Categories</a>
              <a href="#support" className="block text-gray-600 hover:text-green-600">Support</a>
              <button className="w-full px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

      {/* Category Filter */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition ${activeCategory === category
                ? 'bg-green-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Integrations Grid */}
      <section id="integrations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map((integration) => (
            <div
              key={integration.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group cursor-pointer relative overflow-hidden"
              onClick={() => integration.status === 'Available' && integration.id === 'whatsapp' && setSelectedIntegration(integration.id)}
            >
              {integration.popular && (
                <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}

              <div className={`w-16 h-16 ${integration.bgColor} rounded-xl flex items-center justify-center ${integration.textColor} mb-4 group-hover:scale-110 transition-transform`}>
                {integration.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {integration.name}
              </h3>

              <p className="text-gray-600 mb-4 text-sm">
                {integration.description}
              </p>

              <div className="flex items-center justify-between">
                <span className={`text-xs font-medium px-3 py-1 rounded-full ${integration.bgColor} ${integration.textColor}`}>
                  {integration.category}
                </span>

                {integration.status === 'Available' ? (
                  integration.id === 'whatsapp' ? (
                    <button className="flex items-center space-x-1 text-green-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                      <span>Learn More</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <span className="text-green-600 font-semibold text-sm">Available</span>
                  )
                ) : (
                  <span className="text-gray-400 font-semibold text-sm">Coming Soon</span>
                )}
              </div>

              {integration.status === 'Coming Soon' && (
                <div className="absolute inset-0 bg-white bg-opacity-60 flex items-center justify-center rounded-2xl">
                  <span className="bg-gray-900 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                    Coming Soon
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-br from-green-600 to-emerald-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose ViknBooks Integrations?</h2>
            <p className="text-xl text-green-100">Built for efficiency, designed for growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Quick Setup</h3>
              <p className="text-green-100">Connect your tools in minutes with our simple configuration wizard. No technical expertise required.</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">Secure & Reliable</h3>
              <p className="text-green-100">Enterprise-grade security with encrypted connections. Your data is always protected and private.</p>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 text-white">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
              <p className="text-green-100">Our dedicated support team is always ready to help you with setup and troubleshooting.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg"></div>
                <span className="text-xl font-bold text-white">ViknBooks</span>
              </div>
              <p className="text-sm">Simplifying business accounting with smart integrations.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; 2025 ViknBooks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}