"use client";
import { useState, Fragment } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Switch } from "../../../../components/ui/switch";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

const checkIconSrc = "/assets/icons/landing/check-2.svg";

export const PricingPlansSection = () => {
  const { t } = useTranslation();
  const navigate = useRouter();
  const [isYearly, setIsYearly] = useState(false);

  const planCards = [
    {
      name: t("landing.pricing.plans.free.name"),
      description: t("landing.pricing.plans.free.desc"),
      cta: t("landing.pricing.plans.free.cta"),
      features: t("landing.pricing.plans.free.features", { returnObjects: true }) as string[],
      variant: "default" as const,
      priceType: "free" as const,
      price: t("landing.pricing.plans.free.price"),
      period: t("landing.pricing.plans.free.period"),
    },
    {
      name: t("landing.pricing.plans.basic.name"),
      description: t("landing.pricing.plans.basic.desc"),
      cta: t("landing.pricing.plans.basic.cta"),
      features: t("landing.pricing.plans.basic.features", { returnObjects: true }) as string[],
      variant: "featured" as const,
      priceType: "discount" as const,
      oldPrice: isYearly ? t("landing.pricing.plans.basic.oldPriceYearly") : t("landing.pricing.plans.basic.oldPrice"),
      currentPrice: isYearly ? t("landing.pricing.plans.basic.currentPriceYearly") : t("landing.pricing.plans.basic.currentPrice"),
    },
  ];

  return (
    <section className="relative w-full bg-[#fcfcfc] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-[1093px] flex-col items-center gap-[52px] lg:gap-[68px]">
        <header className="flex w-full max-w-[828.96px] flex-col items-center gap-6 text-center">
          <h2 className="flex min-h-[64.93px] items-center justify-center font-['SF_Pro-Bold',Helvetica] text-2xl font-bold leading-[normal] tracking-[0] text-black sm:text-[34px] lg:text-[40px]">
            {t("landing.pricing.title")}
          </h2>
          <div className="hidden items-center justify-center gap-4 sm:gap-6 lg:flex">
            <span className="font-['SF_Pro-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-neutral-800">
              {t("landing.pricing.monthly")}
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              aria-label="Toggle between monthly and yearly pricing"
              className="data-[state=checked]:bg-black-black-32-disabled data-[state=unchecked]:bg-black-black-32-disabled"
            />
            <span className="font-['SF_Pro-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-neutral-800">
              {t("landing.pricing.yearly")}
            </span>
          </div>
        </header>
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-9">
          {planCards.map((plan, index) => (
            <Fragment key={plan.name}>
              {index === 1 && (
                <div className="flex flex-col items-center justify-center gap-6 lg:hidden mb-2 mt-4">
                  <Card className="w-fit py-[8px] rounded-[100px] border border-solid border-[#d9d9d9] bg-white shadow-[0px_5px_12px_#7d7d7d1a,0px_21px_21px_#7d7d7d17,0px_47px_28px_#7d7d7d0d,0px_84px_34px_#7d7d7d03,0px_131px_37px_transparent]">
                    <CardContent className="flex h-auto items-center justify-center p-0 px-6 sm:px-10 sm:py-2.5">
                      <span className="[font-family:'Inter',Helvetica] text-[18px] sm:text-[22px] font-bold leading-[normal] tracking-[0] text-black">
                        Basic plan
                      </span>
                    </CardContent>
                  </Card>
                  <div className="flex items-center justify-center gap-4 sm:gap-6">
                    <span className="font-['SF_Pro-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-neutral-800">
                      {t("landing.pricing.monthly")}
                    </span>
                    <Switch
                      checked={isYearly}
                      onCheckedChange={setIsYearly}
                      aria-label="Toggle between monthly and yearly pricing"
                      className="data-[state=checked]:bg-black-black-32-disabled data-[state=unchecked]:bg-black-black-32-disabled"
                    />
                    <span className="font-['SF_Pro-Regular',Helvetica] text-base font-normal leading-[normal] tracking-[0] text-neutral-800">
                      {t("landing.pricing.yearly")}
                    </span>
                  </div>
                </div>
              )}
            <Card
              key={plan.name}
              className={
                plan.variant === "featured"
                  ? "relative overflow-hidden rounded-[26px] border border-solid border-[#dadada] bg-white shadow-[0px_19px_41px_#a2969633,0px_75px_75px_#a296962b,0px_168px_101px_#a296961a,0px_298px_119px_#a2969608,0px_466px_130px_transparent]"
                  : "rounded-[26px] border border-solid border-[#dadada] bg-white shadow-none"
              }
            >
              <CardContent className="relative z-2 flex flex-col justify-between px-6 pb-10 pt-10 sm:px-10 lg:px-[50px] lg:pb-[47px] lg:pt-[46px] lg:min-h-[781.59px]">
                <div className="flex flex-col gap-10">
                  <div
                    className={
                      plan.variant === "featured"
                        ? "flex flex-col gap-[52px]"
                        : "flex flex-col gap-[79px]"
                    }
                  >
                    <div className="flex max-w-[370px] flex-col items-start gap-4">
                      {plan.priceType === "free" ? (
                        <div className="flex w-full max-w-[210px] flex-col items-start gap-[15px]">
                          <h3 className="flex h-6 w-full items-center whitespace-nowrap font-['SF_Pro-Bold',Helvetica] text-xl font-bold leading-[normal] tracking-[0] text-black sm:text-2xl">
                            {plan.name}
                          </h3>
                          <div className="flex items-end gap-[9px]">
                            <span className="flex h-11 w-fit items-center whitespace-nowrap font-['SF_Pro-Bold',Helvetica] text-3xl font-bold leading-[normal] tracking-[0] text-black opacity-80 sm:text-5xl">
                              {plan.price}
                            </span>
                            <span className="font-['SF_Pro-Regular',Helvetica] text-xl text-black opacity-80 pb-0.5 sm:text-[32px]">
                              {plan.period}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="flex min-h-[91px] w-full max-w-[210px] flex-col items-start justify-start">
                          <h3 className="flex h-6 w-full items-center whitespace-nowrap font-['SF_Pro-Bold',Helvetica] text-xl font-bold leading-[normal] tracking-[0] text-black sm:text-2xl">
                            {plan.name}
                          </h3>
                          <div className="mt-[15px] flex items-end gap-[9px]">
                            <div className="relative flex h-11 items-center">
                              <span className="flex items-center whitespace-nowrap font-['SF_Pro-Bold',Helvetica] text-2xl font-bold leading-[normal] tracking-[0] text-[#b9b9b9] opacity-80 line-through decoration-[3px] sm:text-[40px]">
                                {plan.oldPrice}
                              </span>
                            </div>
                            <span className="flex h-11 w-fit items-center whitespace-nowrap font-['SF_Pro-Bold',Helvetica] text-3xl font-bold leading-[normal] tracking-[0] text-black opacity-80 sm:text-5xl">
                              {plan.currentPrice}
                            </span>
                          </div>
                        </div>
                      )}

                      <p className="flex items-center self-stretch font-['SF_Pro-Regular',Helvetica] text-base font-normal leading-[18.5px] tracking-[0] text-[#2e2e2e]">
                        {plan.description}
                      </p>
                    </div>
                    <Button 
                      onClick={() => {
                        window.location.href = (process.env.NEXT_PUBLIC_GET_STARTED_URL || "https://accounts.viknbooks.com/signin?service=whatsapp");
                      }}
                      className="h-auto w-full cursor-pointer self-stretch rounded-xl bg-[#003f15] px-4 py-5 font-['SF_Pro-Bold',Helvetica] text-xl font-bold leading-[normal] tracking-[0] text-white hover:bg-[#003f15]/95"
                    >
                      {plan.cta}
                    </Button>
                  </div>
                  <div
                    className={
                      plan.variant === "featured"
                        ? "flex w-full max-w-[322px] flex-col items-start gap-8"
                        : "flex w-full max-w-[311.99px] flex-col items-start gap-8"
                    }
                  >
                    <h4 className="-mt-px flex min-h-[24.22px] items-center self-stretch font-['SF_Pro-Bold',Helvetica] text-base font-bold leading-[normal] tracking-[0] text-black">
                      {t("landing.pricing.featuresTitle")}
                    </h4>
                    <ul className="flex w-full flex-col items-start gap-[18px]">
                      {Array.isArray(plan.features) && plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex w-full items-center gap-2"
                        >
                          <img
                            className="h-[20.99px] w-[20.99px] shrink-0"
                            alt={t("landing.pricing.featuresTitle")}
                            src={checkIconSrc}
                          />
                          <span className="font-['SF_Pro-Regular',Helvetica] text-sm font-normal leading-[18.5px] tracking-[0] text-[#2e2e2e] sm:text-base">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

