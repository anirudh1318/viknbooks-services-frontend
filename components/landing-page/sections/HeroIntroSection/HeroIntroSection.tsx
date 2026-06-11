"use client";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Trans, useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export const HeroIntroSection = () => {
  const { t } = useTranslation();
  const navigate = useRouter();

  const featureItems = [
    { label: t("landing.hero.features.onePlatform"), color: "bg-[#c20000]" },
    { label: t("landing.hero.features.biggerResults"), color: "bg-[#0096b0]" },
    { label: t("landing.hero.features.zeroMissed"), color: "bg-[#1369cb]" },
  ];

  return (
    <section className="relative w-full px-4 pt-8 sm:pt-[158px]">
      <div className="mx-auto flex w-full max-w-[990px] flex-col items-center gap-8 sm:gap-[60px]">
        <header className="flex flex-col items-center gap-2 sm:gap-3">
          <Card className="w-fit py-[8px] rounded-[100px] border border-solid border-[#04853E] bg-white shadow-[0px_5px_12px_#7d7d7d1a,0px_21px_21px_#7d7d7d17,0px_47px_28px_#7d7d7d0d,0px_84px_34px_#7d7d7d03,0px_131px_37px_transparent]">
            <CardContent className="flex h-auto items-center justify-center p-0 px-6 sm:px-10 sm:py-2.5">
              <span className="[font-family:'Inter',Helvetica] text-[22px] sm:text-[26px] font-bold leading-[normal] tracking-[0] text-black">
                {t("landing.hero.brandName")}
              </span>
            </CardContent>
          </Card>
          <a
            href="https://vikncodes.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center justify-center gap-1.5 [font-family:'Inter',Helvetica] text-sm sm:text-base font-normal leading-[normal] tracking-[0] text-black transition-opacity hover:opacity-80"
          >
            <span>{t("landing.hero.craftedBy")}</span>
            <img
              src="/assets/logos/logo-vikn.svg"
              alt={t("landing.hero.companyLogoAlt")}
              className="h-3.5 sm:h-4 w-auto"
            />
            <span>{t("landing.hero.companyName")}</span>
          </a>
        </header>
        <div className="flex w-full flex-col items-center gap-10 sm:gap-12">
          <div className="flex w-full flex-col items-center gap-7 sm:gap-8">
            <div className="flex w-full flex-col items-center gap-5 sm:gap-8">
              <h1
                className="w-full max-w-[800px] text-center [font-family:'SF_Pro-Heavy',Inter,Helvetica,sans-serif] text-[28px] font-black leading-[1.1] tracking-[-0.04em] text-black sm:text-[64px] lg:text-[56px]"
                style={{ WebkitTextStroke: '1px black', paintOrder: 'stroke fill' }}
              >
                <Trans
                  i18nKey="landing.hero.title"
                  components={[
                    <span key="0" />,
                    <span
                      key="1"
                      className="bg-gradient-to-r from-[#036831] to-[#06CE60] bg-clip-text text-transparent"
                      style={{ WebkitTextStroke: '0px transparent' }}
                    />,
                    <br key="2" className="block sm:hidden" />
                  ]}
                />
              </h1>
              <p className="w-full max-w-[990px] text-center [font-family:'Inter',Helvetica] text-[15px] font-normal leading-relaxed tracking-[0] text-[#0c0c0c] sm:text-2xl px-2">
                <Trans
                  i18nKey="landing.hero.subtitle"
                  components={[
                    <span key="0" />,
                    <br key="1" className="block sm:hidden" />
                  ]}
                />
              </p>
            </div>
            <div className="w-full max-w-[640.44px] px-1 sm:px-2.5">
              <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-6 sm:gap-y-3">
                {featureItems.map((item) => (
                  <li
                    key={item.label}
                    className="inline-flex items-center gap-1.5 sm:gap-[15px]"
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full sm:h-[9.48px] sm:w-[9.48px] ${item.color}`}
                    />
                    <span className="[font-family:'SF_Pro-Regular',Helvetica] text-[10px] font-normal leading-[normal] tracking-[0] text-black sm:text-base md:text-xl">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Button
            type="button"
            onClick={() => {
              window.location.href = (process.env.NEXT_PUBLIC_GET_STARTED_URL || "https://accounts.viknbooks.com/signin?service=whatsapp");
            }}
            className="h-[46px] sm:h-12 w-fit min-w-[180px] sm:min-w-[207px] cursor-pointer rounded-[100px] bg-[#036830] p-2.5 shadow-[0px_3px_8px_#4a4a4a33,0px_14px_14px_#4a4a4a2b,0px_31px_18px_#4a4a4a1a,0px_55px_22px_#4a4a4a08,0px_85px_24px_transparent] hover:bg-[#036830]/95 px-6 sm:px-8"
          >
            <span className="flex items-center gap-2">
              <span className="[font-family:'SF_Pro-Regular',Helvetica] text-center text-[17px] sm:text-xl font-normal leading-[normal] tracking-[0] text-white">
                {t("landing.hero.startFreeTrial")}
              </span>
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
