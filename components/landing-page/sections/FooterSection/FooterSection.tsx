"use client";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";

export const FooterSection = () => {
  const { t } = useTranslation();
  const navigate = useRouter();

  const footerSections = [
    {
      title: t("landing.footer.sections.product.title"),
      links: [
        { label: t("landing.footer.sections.product.links.features"), id: "features" },
        { label: t("landing.footer.sections.product.links.pricing"), id: "pricing" },
        { label: t("landing.footer.sections.product.links.blog"), route: "/blog" },
      ],
    },
    {
      title: t("landing.footer.sections.legal.title"),
      links: [
        { label: t("landing.footer.sections.legal.links.privacy"), route: "/privacy" },
        { label: t("landing.footer.sections.legal.links.terms"), route: "/terms" },
        { label: t("landing.footer.sections.legal.links.security"), route: "/security" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#00180a] text-white">
      <div className="mx-auto flex w-full max-w-[1512px] flex-col px-6 pb-6 pt-16 sm:px-10 md:px-16 lg:px-[119px] lg:pt-[78px]">
        <div className="flex w-full flex-col justify-between gap-12 lg:flex-row lg:gap-16">
          <section className="flex max-w-[248px] flex-col items-start gap-4 sm:gap-[29px]">
            <h2 className="mt-[-1.00px] self-stretch [font-family:'Inter',Helvetica] text-xl font-bold leading-[normal] tracking-[0] text-[#25c85d] sm:text-2xl">
              {t("landing.footer.brand")}
            </h2>
            <p className="self-stretch [font-family:'Inter',Helvetica] text-sm font-normal leading-[normal] tracking-[0] text-white sm:text-base">
              {t("landing.footer.tagline")}
            </p>
          </section>
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:gap-14 lg:grid-cols-3 lg:gap-[120px] xl:gap-[184px]"
          >
            {footerSections.map((section) => (
              <section
                key={section.title}
                className="flex min-w-[91px] flex-col items-start gap-10"
              >
                <h3 className="mt-[-1.00px] self-stretch [font-family:'Inter',Helvetica] text-lg font-semibold leading-[normal] tracking-[0] text-white sm:text-xl">
                  {section.title}
                </h3>
                <div className="flex flex-col items-start justify-center gap-4 sm:gap-[35px] self-stretch">
                  {section.links.map((link) => (
                    <Button
                      key={link.label}
                      variant="link"
                      onClick={() => {
                        if (link.route) {
                          navigate.push(link.route);
                        } else if (link.id) {
                          const element = document.getElementById(link.id);
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth" });
                          } else {
                            navigate.push(`/landing#${link.id}`);
                          }
                        }
                      }}
                      className="h-auto p-0 [font-family:'Inter',Helvetica] text-left text-base font-normal leading-[normal] tracking-[0] text-white no-underline hover:text-white/80 hover:no-underline sm:text-lg"
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              </section>
            ))}
          </nav>
        </div>
        <Separator className="mt-16 bg-[#777777]" />
        <div className="flex min-h-[53px] items-center justify-center px-2.5 py-4">
          <p className="[font-family:'Inter',Helvetica] text-xs font-normal leading-[normal] tracking-[0] text-neutral-400 sm:text-base">
            {t("landing.footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};
