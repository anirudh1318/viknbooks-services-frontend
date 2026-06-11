import { HeaderNavSection } from "./sections/HeaderNavSection/HeaderNavSection";
import { FooterSection } from "./sections/FooterSection";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

// Dummy blog posts based on Figma export
const BLOG_POSTS = [
  {
    id: 1,
    title: "WhatsApp Business for Retail in GCC Countries: The Ultimate 2025 Guide",
    image: "/assets/images/landing/card-2.jpg",
  },
  {
    id: 2,
    title: "WhatsApp Business For SaaS: Onboarding, Activation & Churn Reduction",
    image: "/assets/images/landing/saas-blog-hero.jpg",
  },
];

export const BlogPage = () => {
  return (
    <main className="relative w-full overflow-hidden bg-white">
      <HeaderNavSection />

      {/* Blog Hero Section */}
      <section className="relative w-full bg-linear-to-b from-[#FFFFFF] via-[#FAFFFD] to-[#E4FFF7] px-4 pt-20 pb-20 sm:px-6 lg:px-8 lg:pt-36 lg:pb-32">
        <div className="relative z-10 mx-auto flex w-full max-w-[801px] flex-col items-center text-center">
          <h1
            className="w-full max-w-[800px] text-center [font-family:'SF_Pro-Heavy',Inter,Helvetica,sans-serif] text-4xl font-black leading-[1.1] tracking-[-0.04em] text-black sm:text-[56px] lg:text-[64px]"
            style={{ WebkitTextStroke: '1px black', paintOrder: 'stroke fill' }}
          >
            Insights, Tips & <span className="bg-gradient-to-r from-[#036831] to-[#06CE60] bg-clip-text text-transparent" style={{ WebkitTextStroke: '0px transparent' }}>WhatsApp</span><br />
            Growth Strategies
          </h1>
          <p className="mt-6 w-full font-['Inter',Helvetica] text-base font-normal leading-normal text-[#0c0c0c] sm:text-xl lg:text-[24px]">
            Learn How To Grow Your Business Using WhatsApp Marketing,<br className="hidden sm:block" /> Automation, And Customer Engagement.
          </p>

          {/* Search Bar */}
          <div className="relative mt-12 w-full max-w-[432px]">
            <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-6 pointer-events-none">
              <Search className="h-5 w-5 text-[#A3A3A3]" strokeWidth={2} />
            </div>
            <Input
              type="text"
              placeholder="Search..."
              className="h-[60px] w-full rounded-[100px] border-0 bg-white pl-[52px] pr-8 font-['SF_Pro-Regular',Helvetica] text-[20px] text-black shadow-[0px_4px_20px_rgba(0,0,0,0.05)] focus-visible:ring-2 focus-visible:ring-[#036831]"
            />
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="relative w-full bg-white px-4 py-16 sm:px-6 lg:px-[105px] lg:py-20">
        <div className="mx-auto w-full max-w-[1300px]">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link href={post.id === 2 ? "/blog/whatsapp-business-saas" : "/blog/whatsapp-business-retail-gcc"} key={post.id} className="block group">
                <Card
                  className="flex flex-col h-full overflow-hidden rounded-[30px] border border-[#E3E3E3] bg-white shadow-none transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer p-0 gap-0"
                >
                  <div className="relative h-[204px] w-full shrink-0 overflow-hidden bg-[#D9D9D9]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="flex flex-1 flex-col p-0 pb-10">
                    <h3 className="mt-[25px] px-[30px] font-['SF_Pro-Regular',Inter,Helvetica,sans-serif] text-xl font-normal leading-[1.3] text-[#1a1a1a] sm:text-[22px]">
                      {post.title}
                    </h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
};
