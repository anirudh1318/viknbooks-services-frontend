"use client";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export const DemoBookingSection = () => {
  const { t } = useTranslation();
  const navigate = useRouter();

  const featureItems = [
    {
      icon: "/assets/icons/landing/megaphone.svg",
      text: t("landing.demo.feature1"),
    },
    {
      icon: "/assets/icons/landing/storage.svg",
      text: t("landing.demo.feature2"),
    },
    {
      icon: "/assets/icons/landing/range.svg",
      text: t("landing.demo.feature3"),
    },
  ];

  return (
    <section id="demo-booking" className="w-full bg-[#004c3d]">
      <div className="mx-auto flex w-full max-w-[1512px] flex-col gap-10 px-6 py-10 sm:px-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16 lg:px-20 lg:py-[120px]">
        <article className="flex w-full max-w-[694px] flex-col items-start gap-12 lg:gap-20">
          <header className="flex w-full flex-col items-start gap-4">
            <h2 className="flex flex-wrap items-center font-['SF_Pro-Bold',Helvetica] text-2xl font-bold leading-none tracking-[0] text-white sm:text-[32px] sm:text-[40px]">
              <span>{t("landing.demo.title")}</span>
            </h2>
            <p className="font-['SF_Pro-Regular',Helvetica] text-base font-normal leading-normal tracking-[0] text-white sm:text-2xl">
              {t("landing.demo.subtitle")}
            </p>
          </header>
          <ul className="flex w-full max-w-[663px] flex-col items-start gap-7">
            {featureItems.map((item, index) => (
              <li
                key={`feature-${index}`}
                className="flex items-center gap-[22px]"
              >
                <img
                  className="h-10 w-10 shrink-0 sm:h-[60px] sm:w-[60px]"
                  alt="Feature icon"
                  src={item.icon}
                />
                <p className="font-['SF_Pro-Regular',Helvetica] text-base font-normal leading-normal tracking-[0] text-white sm:text-[26px]">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </article>
        <Card className="w-full max-w-[545px] rounded-[24px] border border-white/50 bg-transparent shadow-none">
          <CardContent className="flex flex-col items-center justify-center gap-10 px-6 py-8 sm:px-10 sm:py-10">
            <h3 className="text-center font-['SF_Pro-Medium',Helvetica] text-xl font-medium leading-normal tracking-[0] text-white sm:text-[28px]">
              Start Your 7-Day Trial Today
            </h3>
            <Button

              className="h-[60px] w-full max-w-[400px] rounded-xl bg-[#0DF06C] px-5 py-2.5 font-['SF_Pro-Bold',Helvetica] text-[18px] font-bold tracking-[0] text-[#004c3d] hover:bg-[#0DF06C]/90"
            >
              Start 7 Day Free Trial
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
