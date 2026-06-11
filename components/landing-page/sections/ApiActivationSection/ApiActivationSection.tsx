"use client";
import { Card, CardContent } from "../../../../components/ui/card";
import { useTranslation } from "react-i18next";
import { cn } from "../../../../lib/utils";

export const ApiActivationSection = () => {
  const { t } = useTranslation();

  const activationFeatures = [
    {
      title: t("landing.api.features.greenTick.title"),
      description: t("landing.api.features.greenTick.desc"),
      iconSrc: "/assets/icons/landing/tick.svg",
      iconAlt: "Frame",
      iconClassName: "h-[74px] w-[84px]",
    },
    {
      title: t("landing.api.features.support.title"),
      description: t("landing.api.features.support.desc"),
      iconSrc: "/assets/icons/landing/message.svg",
      iconAlt: "Message",
      iconClassName: "h-14 w-14",
    },
    {
      title: t("landing.api.features.innovation.title"),
      description: t("landing.api.features.innovation.desc"),
      iconSrc: "/assets/icons/landing/rocket.svg",
      iconAlt: "Rocket ship svgrepo",
      iconClassName: "h-[47px] w-[47px]",
    },
  ];

  return (
    <section className="relative w-full px-4 py-10 sm:px-6 lg:px-[22px] lg:py-12">
      <div className="mx-auto flex w-full max-w-[1363px] flex-col items-center justify-between gap-10 lg:flex-row lg:items-end lg:gap-14">
        <div className="mx-auto w-full max-w-[607.34px] lg:mx-0">
          <img
            className="h-auto w-full object-contain"
            alt="Api Activation Illustration"
            src="/assets/images/landing/safvan.png"
          />
        </div>

        <div className="flex w-full max-w-[696.27px] flex-col items-start gap-12 lg:gap-[66px]">
          <header className="flex w-full max-w-[696.27px] flex-col items-start gap-5">
            <h2 className="[font-family:'SF_Pro-Bold',Helvetica] text-2xl font-bold leading-[1.1] tracking-[0] text-black sm:text-[36px] lg:text-[40px]">
              {t("landing.api.title")}
            </h2>
            <p className="[font-family:'SF_Pro-Regular',Helvetica] text-sm font-normal leading-[1.35] tracking-[0] text-black sm:text-xl lg:text-2xl">
              {t("landing.api.subtitle")}
            </p>
          </header>
          <div className="flex w-full max-w-[617px] flex-col gap-8 lg:gap-10">
            {activationFeatures.map((feature) => (
              <article
                key={feature.title}
                className="grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-3"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#e4fcef] sm:h-[75px] sm:w-[75px]">
                  <img
                    className={cn(feature.iconClassName, "h-7 w-7 sm:h-auto sm:w-auto sm:max-h-[55%] sm:max-w-[55%] object-contain")}
                    alt={feature.iconAlt}
                    src={feature.iconSrc}
                  />
                </div>
                <Card className="border-0 bg-transparent p-0 shadow-none">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-start gap-4">
                      <h3 className="[font-family:'SF_Pro-Medium',Helvetica] text-lg font-medium leading-[1.2] tracking-[0] text-black sm:text-[24px] lg:text-[26px]">
                        {feature.title}
                      </h3>
                      <p className="[font-family:'SF_Pro-Regular',Helvetica] text-sm font-normal leading-[1.35] tracking-[0] text-[#9e9e9e] sm:text-lg lg:text-xl">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
