"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { useTranslation } from "react-i18next";

export const FaqSection = () => {
  const { t } = useTranslation();

  const faqItems = [
    {
      value: "item-1",
      question: t("landing.faq.items.item1.question"),
      content: t("landing.faq.items.item1.answer"),
    },
    {
      value: "item-2",
      question: t("landing.faq.items.item2.question"),
      content: t("landing.faq.items.item2.answer"),
    },
    {
      value: "item-3",
      question: t("landing.faq.items.item3.question"),
      content: t("landing.faq.items.item3.answer"),
    },
    {
      value: "item-4",
      question: t("landing.faq.items.item4.question"),
      content: t("landing.faq.items.item4.answer"),
    },
    {
      value: "item-5",
      question: t("landing.faq.items.item5.question"),
      content: t("landing.faq.items.item5.answer"),
    },
  ];

  return (
    <section className="relative w-full px-4 py-12 sm:px-6 md:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-[1083px] flex-col items-center gap-12 lg:gap-20">
        <header className="flex w-full max-w-[720.24px] flex-col items-center justify-center gap-6 text-center">
          <h2 className="flex min-h-[47px] items-center justify-center [font-family:'SF_Pro-Bold',Helvetica] text-2xl font-bold leading-none tracking-[0] text-black sm:text-[32px] sm:text-[36px] lg:text-[40px]">
            {t("landing.faq.title")}
          </h2>
          <p className="flex items-center justify-center [font-family:'SF_Pro-Regular',Helvetica] text-base font-normal leading-normal tracking-[0] text-[#878787] sm:text-xl lg:text-2xl">
            {t("landing.faq.subtitle")}
          </p>
        </header>
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col gap-6"
        >
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className="overflow-hidden rounded-[19px] border border-[#dddddd] bg-white px-5 py-2 sm:px-8 lg:px-10 data-[state=open]:shadow-none"
            >
              <AccordionTrigger
                className={`group w-full py-4 text-left no-underline hover:no-underline [&>svg]:hidden ${
                  index < 3
                    ? "min-h-[78px] items-center"
                    : "min-h-[107px] items-start"
                }`}
              >
                <div className="flex w-full items-start justify-between gap-4">
                  <span
                    className={`block flex-1 pr-2 text-left [font-family:'SF_Pro-Medium',Helvetica] text-lg font-medium leading-normal tracking-[0] text-black opacity-80 sm:text-xl sm:text-2xl lg:text-[26px] ${
                      index < 3 ? "self-center" : ""
                    }`}
                  >
                    {item.question}
                  </span>
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#036830] sm:h-[55.46px] sm:w-[55.46px]">
                    <img
                      src="/assets/icons/landing/add.svg"
                      alt="Expand"
                      className="h-6 w-auto group-data-[state=open]:hidden sm:h-10 sm:w-[41px]"
                    />
                    <img
                      src="/assets/icons/landing/minus.svg"
                      alt="Collapse"
                      className="hidden h-6 w-auto group-data-[state=open]:block sm:h-10 sm:w-[41px]"
                    />
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-0 pb-4 text-lg font-normal leading-relaxed text-[#555555]">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
