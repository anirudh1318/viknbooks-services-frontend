"use client";
import { Card, CardContent } from "../../../../components/ui/card";
import { useTranslation } from "react-i18next";

export const HeroMediaSection = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full bg-white px-4 py-4 sm:px-6 sm:py-5">
      <Card className="mx-auto w-full max-w-[560px] border-0 bg-transparent shadow-none">
        <CardContent className="flex flex-col items-center gap-6 p-0 text-center sm:gap-8">
          <div className="flex flex-col items-center gap-1.5">
            <h2 className="[font-family:'SF_Pro-Bold',Helvetica] text-black text-2xl font-bold leading-none tracking-[0] sm:text-[32px]">
              {t("landing.heroMedia.title")}
            </h2>
            <p className="[font-family:'SF_Pro-Regular',Helvetica] text-black text-sm font-bold leading-none tracking-[0] sm:text-base">
              {t("landing.heroMedia.subtitle")}
            </p>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
