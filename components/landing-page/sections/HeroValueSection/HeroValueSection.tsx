"use client";
import { Card, CardContent } from "../../../../components/ui/card";
import { useTranslation } from "react-i18next";

export const HeroValueSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      value: "90%",
      label: t("landing.value.stats.openRates"),
    },
    {
      value: "40-50%",
      label: t("landing.value.stats.clickRates"),
    },
    {
      value: "20%",
      label: t("landing.value.stats.conversionRates"),
    },
    {
      value: "70%",
      label: t("landing.value.stats.engagementRates"),
    },
  ];

  return (
    <section className="w-full bg-[#ebfcf3] px-4 pt-6 pb-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="mx-auto flex w-full max-w-[1352px] flex-col items-center gap-4 sm:gap-12 lg:gap-20">
        <header className="flex flex-col items-center gap-3 sm:gap-6 text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-6">
            <img
              className="h-6 w-6 sm:h-10 sm:w-10 lg:h-14 lg:w-14"
              alt="Checkmark Icon"
              src="/assets/icons/landing/tick.svg"
            />
            <h2 className="font-['SF_Pro-Bold',Helvetica] text-lg font-bold leading-tight text-black sm:text-4xl lg:text-[48px] whitespace-nowrap">
              {t("landing.value.title")}
            </h2>
          </div>
          <p className="max-w-[800px] font-['SF_Pro-Regular',Helvetica] text-sm font-normal leading-relaxed text-[#777777] sm:text-xl lg:text-2xl">
            {t("landing.value.subtitle")}
          </p>
        </header>

        <div className="grid w-full grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card
              key={stat.label}
              className="overflow-hidden rounded-3xl border-0 bg-[#003f15] transition-transform duration-300 hover:scale-[1.02] shadow-none"
            >
              <CardContent className="flex flex-col items-center justify-center py-4 px-2 text-center sm:min-h-40 sm:p-8">
                <div className="flex flex-col items-center gap-2 sm:gap-3">
                  <div className="font-['SF_Pro-Heavy',Helvetica] text-2xl font-bold leading-none tracking-tight text-white sm:text-[36px] lg:text-[40px]">
                    {stat.value}
                  </div>
                  <div className="font-['SF_Pro-Medium',Helvetica] text-sm font-medium leading-tight text-white/90 sm:text-base lg:text-lg">
                    {stat.label}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
