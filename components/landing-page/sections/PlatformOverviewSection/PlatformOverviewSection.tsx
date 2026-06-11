"use client";
import { useState, useEffect, useRef } from "react";
import { Button } from "../../../../components/ui/button";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { cn } from "../../../../lib/utils";

export const PlatformOverviewSection = () => {
  const { t } = useTranslation();
  const navigate = useRouter();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isUserScrolling = useRef(false);

  const platformItems = [
    {
      title: t("landing.platform.features.broadcast"),
      src: "/assets/images/landing/card-1.png",
    },
    {
      title: t("landing.platform.features.manageLeads"),
      src: "/assets/images/landing/card-5.jpg",
    },
    {
      title: t("landing.platform.features.monitor"),
      src: "/assets/images/landing/card-3.jpg",
    },
    {
      title: t("landing.platform.features.categories"),
      src: "/assets/images/landing/card-4.jpg",
    },
  ];

  // Auto-cycle animation to make it feel alive, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % platformItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, platformItems.length]);

  // Sync scroll position for mobile carousel when activeIndex changes
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || window.innerWidth >= 768 || isUserScrolling.current) return;
    
    const child = container.children[activeIndex] as HTMLElement;
    if (child) {
      container.scrollTo({
        left: child.offsetLeft - container.offsetLeft - 16,
        behavior: "smooth",
      });
    }
  }, [activeIndex]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (window.innerWidth >= 768) return;
    isUserScrolling.current = true;
    
    const container = e.currentTarget;
    const scrollLeft = container.scrollLeft;
    const childWidth = (container.children[0] as HTMLElement)?.offsetWidth || 0;
    
    if (childWidth > 0) {
      const newIndex = Math.round(scrollLeft / (childWidth + 16));
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < platformItems.length) {
        setActiveIndex(newIndex);
      }
    }
    
    // Clear user scrolling flag after scroll stops
    setTimeout(() => {
      isUserScrolling.current = false;
    }, 150);
  };

  return (
    <section className="relative w-full bg-[#002921] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-20 overflow-hidden">
      <div className="mx-auto flex w-full max-w-[1353px] flex-col items-center gap-10 lg:gap-[72px]">
        <header className="flex w-full max-w-[1100px] flex-col items-center gap-4 sm:gap-5 lg:gap-6 text-center">
          <h2 className="font-['SF_Pro-Bold',Helvetica] text-2xl font-bold leading-tight text-white sm:text-5xl lg:text-[56px] lg:leading-[1.18]">
            {t("landing.platform.title")}
          </h2>
          <p className="font-['SF_Pro-Regular',Helvetica] text-xs font-normal leading-normal text-white/90 sm:text-xl lg:text-[32px]">
            {t("landing.platform.subtitle")}
          </p>
        </header>

        <div 
          ref={scrollContainerRef}
          className="flex w-full flex-row gap-4 h-[320px] sm:h-[350px] md:h-[450px] overflow-x-auto snap-x snap-mandatory md:overflow-hidden md:snap-none lg:h-[490px] [&::-webkit-scrollbar]:!hidden [&::-webkit-scrollbar]:!w-0 [&::-webkit-scrollbar]:!h-0 [&::-webkit-scrollbar]:!bg-transparent [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onScroll={handleScroll}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {platformItems.map((item, index) => (
            <div
              key={`platform-item-${index}`}
              onMouseEnter={() => window.innerWidth >= 768 && setActiveIndex(index)}
              className={cn(
                "relative group cursor-pointer overflow-hidden rounded-4xl transition-all duration-700 ease-in-out",
                // Mobile Carousel Layout
                "w-[85vw] shrink-0 snap-center sm:w-[400px]",
                "h-full",
                // Desktop Accordion Layout
                "md:w-auto md:shrink md:snap-none",
                activeIndex === index
                   ? "md:flex-[4] lg:flex-[5]"
                   : "md:flex-[0.6] lg:flex-[0.8]"
              )}
              onClick={() => {
                if (activeIndex === index) {
                  window.location.href = (process.env.NEXT_PUBLIC_GET_STARTED_URL || "https://accounts.viknbooks.com/signin?service=whatsapp");
                } else {
                  setActiveIndex(index);
                  if (window.innerWidth < 768 && scrollContainerRef.current) {
                    const child = scrollContainerRef.current.children[index] as HTMLElement;
                    if (child) {
                      scrollContainerRef.current.scrollTo({
                        left: child.offsetLeft - scrollContainerRef.current.offsetLeft - 16,
                        behavior: "smooth",
                      });
                    }
                  }
                }
              }}
            >
              <img
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                alt={item.title}
                src={item.src}
              />
              
              {/* Content Overlay for Active State */}
              <div
                className={cn(
                  "absolute inset-0 z-10 flex flex-col justify-end transition-opacity duration-500",
                  // Always visible on mobile, conditionally visible on desktop
                  "opacity-100 md:opacity-0",
                  activeIndex === index && "md:opacity-100"
                )}
              >
                {/* Gradient to ensure text readability */}
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent md:bg-linear-to-r md:from-black/90 md:via-black/30 md:to-transparent" />
                
                <div className="relative z-20 flex max-w-[550px] flex-col items-start gap-4 p-6 sm:gap-6 sm:p-10">
                  <h3 className="font-['SF_Pro-Heavy',Helvetica] text-xl font-bold leading-tight text-white sm:text-3xl lg:text-[40px] lg:leading-12">
                    {item.title}
                  </h3>
                  <Button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.location.href = (process.env.NEXT_PUBLIC_GET_STARTED_URL || "https://accounts.viknbooks.com/signin?service=whatsapp");
                    }}
                    className="h-auto cursor-pointer rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-105 hover:bg-white/90 active:scale-95"
                  >
                    {t("landing.hero.startFreeTrial")}
                  </Button>
                </div>
              </div>

              {/* Inactive State Overlays */}
              <div
                className={cn(
                  "absolute inset-0 z-10 bg-black/10 transition-all duration-500",
                  // Always hidden on mobile, conditionally hidden on desktop
                  "opacity-0 md:opacity-100 group-hover:bg-black/0",
                  activeIndex === index && "md:opacity-0"
                )}
              />
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center gap-2 md:hidden">
          {platformItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIndex(index);
                if (scrollContainerRef.current) {
                  const child = scrollContainerRef.current.children[index] as HTMLElement;
                  if (child) {
                    scrollContainerRef.current.scrollTo({
                      left: child.offsetLeft - scrollContainerRef.current.offsetLeft - 16,
                      behavior: "smooth",
                    });
                  }
                }
              }}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                activeIndex === index ? "w-6 bg-[#22c55e]" : "bg-white/20"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

