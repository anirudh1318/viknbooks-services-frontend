"use client";

import { useState } from "react";
import { integrations } from "../lib/integrations";

import HeroSection from "./components/HeroSection";
import CategoryFilter from "./components/CategoryFilter";
import IntegrationCard from "./components/IntegrationCard";
import BenefitsSection from "./components/BenefitsSection";
import CTASection from "./components/CTASection";
import WhatsAppIntegration from "./whatsapp/page";

const categories = ['All', 'Communication', 'Payments', 'Sales', 'Productivity', 'Storage', 'Data', 'Logistics', 'Operations'];

export default function IntegrationHub() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedIntegration, setSelectedIntegration] = useState<string | null>(null);

  const filteredIntegrations = activeCategory === 'All'
    ? integrations
    : integrations.filter(int => int.category === activeCategory);

  if (selectedIntegration === 'whatsapp') {
    return <WhatsAppIntegration />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <HeroSection />
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      </section>

      <section id="integrations" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIntegrations.map((integration) => (
            <IntegrationCard
              key={integration.id}
              integration={integration}
              onSelect={setSelectedIntegration}
            />
          ))}
        </div>
      </section>

      <BenefitsSection />
      <CTASection />
    </div>
  );
}
