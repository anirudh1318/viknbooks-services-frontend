"use client";

import WhatsAppHowItWorks from "./components/WhatsAppHowItWorks";
import WhatsAppCTA from "./components/WhatsAppCTA";
import WhatsAppHero from "./components/WhatsAppHero";
import WhatsAppFeatures from "./components/WhatsAppFeatures";
import WhatsAppPricing from "./components/WhatsAppPricing";


export default function WhatsAppIntegration() {

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
            <WhatsAppHero />
            <WhatsAppFeatures />
            <WhatsAppHowItWorks />
            <WhatsAppPricing />
            <WhatsAppCTA />
        </div>
    );
}
