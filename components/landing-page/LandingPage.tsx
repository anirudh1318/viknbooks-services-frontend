import { ApiActivationSection } from "./sections/ApiActivationSection";
import { DemoBookingSection } from "./sections/DemoBookingSection/DemoBookingSection";
import { FaqSection } from "./sections/FaqSection";
import { FooterSection } from "./sections/FooterSection";
import { HeaderNavSection } from "./sections/HeaderNavSection/HeaderNavSection";
import { HeroIntroSection } from "./sections/HeroIntroSection";
import { HeroMediaSection } from "./sections/HeroMediaSection";
import { HeroValueSection } from "./sections/HeroValueSection";
import { PlatformOverviewSection } from "./sections/PlatformOverviewSection/PlatformOverviewSection";
import { PricingPlansSection } from "./sections/PricingPlansSection";

export const LandingPage = () => {

  return (
    <main
      className="relative w-full overflow-hidden bg-white"
      data-model-id="93:763"
    >
      <HeaderNavSection />
      <section className="relative isolate overflow-hidden bg-white">
        <div className="mx-auto flex w-full max-w-[1512px] flex-col">
          <HeroIntroSection />
          <div className="relative px-4 pb-10 sm:px-6 lg:px-10 mt-10 sm:mt-16 lg:mt-20">
            <div className="relative mx-auto flex max-w-7xl justify-center">
              <img
                className="w-full h-auto object-contain max-w-[1200px]"
                alt="Viknbooks WhatsApp Main Interface"
                src="/assets/images/landing/main.png"
              />
            </div>
          </div>
        </div>
      </section>
      <HeroMediaSection />
      <HeroValueSection />
      <div id="features">
        <PlatformOverviewSection />
      </div>
      <ApiActivationSection />
      <DemoBookingSection />
      <div id="pricing">
        <PricingPlansSection />
      </div>
      <FaqSection />
      <FooterSection />
    </main>
  );
};

export default LandingPage;
