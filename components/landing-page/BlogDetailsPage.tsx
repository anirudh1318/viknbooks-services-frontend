import Link from "next/link";
import { useParams } from 'next/navigation';
import { HeaderNavSection } from './sections/HeaderNavSection/HeaderNavSection';
import { FooterSection } from './sections/FooterSection';
import { User, Calendar, Clock } from 'lucide-react';
import { BlogSaasDetailsPage } from './BlogSaasDetailsPage';

export const BlogDetailsPage = () => {
  const { slug } = useParams();

  if (slug === 'whatsapp-business-saas') {
    return <BlogSaasDetailsPage />;
  }

  return (
    <main className="relative w-full overflow-hidden bg-white">
      <HeaderNavSection />

      <section className="relative w-full px-4 pt-8 pb-16 sm:px-6 lg:px-8 lg:pt-12 lg:pb-20 max-w-[1000px] mx-auto font-['Inter',Helvetica,sans-serif]">
        
        {/* Breadcrumb */}
        <div className="mb-6 hidden sm:flex items-center gap-2 text-[13px] font-medium text-[#666666]">
          <Link href="/landing" className="hover:text-black transition-colors">Home</Link>
          <span className="text-[10px]">●</span>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <span className="text-[10px]">●</span>
          <span className="text-black">WhatsApp Business For Retail In GCC Countries</span>
        </div>

        {/* Main Image */}
        <div className="mb-8 w-full aspect-[2.2/1] rounded-[30px] bg-[#D9D9D9] overflow-hidden">
           <img src="/assets/images/landing/card-2.jpg" alt="WhatsApp Business" className="w-full h-full object-cover" />
        </div>

        {/* Header Meta Pills */}
        <div className="mb-8 flex flex-wrap items-center gap-3 text-[15px] font-medium text-[#4D4D4D]">
          <div className="flex items-center gap-2 rounded-full border border-[#E3E3E3] bg-[#F9F9F9] px-4 py-2">
            <User className="h-4 w-4" />
            <span>Suhail CTO</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#E3E3E3] bg-[#F9F9F9] px-4 py-2">
            <Calendar className="h-4 w-4" />
            <span>June 2025</span>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-[#E3E3E3] bg-[#F9F9F9] px-4 py-2">
            <Clock className="h-4 w-4" />
            <span>9 Min Read</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-8 text-[32px] font-black leading-[1.1] text-black sm:text-[40px] lg:text-[48px] [font-family:'SF_Pro-Heavy',Inter,sans-serif] tracking-[-0.02em]">
          WhatsApp Business For Retail In GCC Countries:<br />The Ultimate 2025 Guide
        </h1>

        {/* Content */}
        <div className="text-[17px] leading-[1.6] text-[#4D4D4D] space-y-6">
          <p className="capitalize">
            How UAE, Saudi Arabia, Qatar, Kuwait, Bahrain & Oman Retailers Are Using WhatsApp Business API To Drive Sales, Boost Customer Engagement, And Dominate The Mobile-First Market.
          </p>
          <p className="capitalize">
            WhatsApp Isn't Just A Messaging App In The Gulf — It's The Heartbeat Of Commerce. From Souks In Dubai To Fashion Boutiques In Riyadh, Retail Businesses Across The GCC Are Leveraging WhatsApp Business To Connect With Customers, Process Orders, And Deliver Seamless Shopping Experiences — All Inside A Single Chat Window.
          </p>
          <p className="capitalize">
            If You're A Retail Business Owner In The UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Or Oman And You're Not Yet Using WhatsApp Business Strategically, You're Leaving Significant Revenue On The Table. This Guide Covers Everything You Need To Know.
          </p>

          <h2 className="pt-8 text-[28px] font-black text-black leading-tight tracking-[-0.01em] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
            Why WhatsApp Business Is Essential For GCC Retail
          </h2>
          <p className="capitalize">
            The GCC Is One Of The Most WhatsApp-Saturated Regions On Earth. With Smartphone Penetration Above 90% Across All Six Countries And Cultures That Strongly Prefer Conversational Commerce, WhatsApp Business Is Not A Nice-To-Have — It's A Necessity.
          </p>

          <h2 className="pt-8 text-[28px] font-black text-black leading-tight tracking-[-0.01em] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
            Key WhatsApp Business Features For Retail
          </h2>
          <p className="capitalize mb-8">
            The GCC Is One Of The Most WhatsApp-Saturated Regions On Earth. With Smartphone Penetration Above 90% Across All Six Countries And Cultures That Strongly Prefer Conversational Commerce, WhatsApp Business Is Not A Nice-To-Have — It's A Necessity.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 mb-12">
            <div className="rounded-[20px] border border-[#E3E3E3] p-6">
              <h3 className="mb-3 text-[20px] font-bold text-black tracking-[-0.01em]">WhatsApp Catalog</h3>
              <p className="capitalize">Showcase Your Products Directly In WhatsApp — No Website Needed. Customers Browse, Select, And Order In One Conversation.</p>
            </div>
            <div className="rounded-[20px] border border-[#E3E3E3] p-6">
              <h3 className="mb-3 text-[20px] font-bold text-black tracking-[-0.01em]">Automated Replies</h3>
              <p className="capitalize">Set Quick Replies, Greeting Messages, And Away Messages To Serve Customers 24/7, Even Outside Business Hours.</p>
            </div>
            <div className="rounded-[20px] border border-[#E3E3E3] p-6">
              <h3 className="mb-3 text-[20px] font-bold text-black tracking-[-0.01em]">Broadcast Lists</h3>
              <p className="capitalize">Send Promotional Messages, New Arrivals, And Ramadan Offers To Thousands Of Opted-In Customers Simultaneously.</p>
            </div>
            <div className="rounded-[20px] border border-[#E3E3E3] p-6">
              <h3 className="mb-3 text-[20px] font-bold text-black tracking-[-0.01em]">Label Management</h3>
              <p className="capitalize">Organize Customers By VIP, New Customer, Pending Payment, And More — Enabling Personalized Follow-Ups At Scale.</p>
            </div>
            <div className="rounded-[20px] border border-[#E3E3E3] p-6">
              <h3 className="mb-3 text-[20px] font-bold text-black tracking-[-0.01em]">WhatsApp Catalog</h3>
              <p className="capitalize">Showcase Your Products Directly In WhatsApp — No Website Needed. Customers Browse, Select, And Order In One Conversation.</p>
            </div>
            <div className="rounded-[20px] border border-[#E3E3E3] p-6">
              <h3 className="mb-3 text-[20px] font-bold text-black tracking-[-0.01em]">Business Analytics</h3>
              <p className="capitalize">Track Message Delivery, Read Rates, And Response Times To Optimize Your Retail Communication Strategy.</p>
            </div>
          </div>

          <h2 className="pt-8 text-[28px] font-black text-black leading-tight tracking-[-0.01em] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
            WhatsApp Business App Vs. WhatsApp Business API
          </h2>
          <p className="capitalize">Choosing The Right Tier Depends On Your Business Size. Here's What GCC Retailers Need To Know:</p>
          
          <div className="pt-4 space-y-8">
            <div>
              <strong className="text-[17px] text-black block mb-1">WhatsApp Business App — Best For Small Retailers</strong>
              <p className="capitalize">Free To Download And Use. Ideal For Small Shops, Boutiques, And Family Businesses With One Or Two Customer-Facing Staff. Supports Catalogs, Quick Replies, And Basic Automation — Perfect For A Startup Retail Business In Dubai Or A Local Shop In Riyadh.</p>
            </div>

            <div>
              <strong className="text-[17px] text-black block mb-1">WhatsApp Business API — Best For Scaling Retail Brands</strong>
              <p className="capitalize">The API Is Built For Mid-To-Large GCC Retailers Who Need Multi-Agent Support, CRM Integration, Advanced Chatbots, And Large-Scale Broadcast Campaigns. It's The Backbone Of Enterprise Retail Communication In The GCC, Used By Leading Brands In Fashion, Electronics, Food & Beverage, And Beauty Sectors.</p>
            </div>
          </div>

          <h2 className="pt-12 text-[28px] font-black text-black leading-tight tracking-[-0.01em] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
            High-Impact Use Cases For GCC Retail Businesses
          </h2>
          
          <div className="pt-4 space-y-8">
            <div>
              <strong className="text-[17px] text-black block mb-1">1. Order Taking And Confirmation</strong>
              <p className="capitalize">Customers Can Browse Your WhatsApp Catalog, Add Items, And Place Orders Directly Via Chat. Instant Order Confirmation Messages Build Trust And Reduce Cart Abandonment — A Major Win For UAE And Saudi Online Retail.</p>
            </div>

            <div>
              <strong className="text-[17px] text-black block mb-1">2. Ramadan And Eid Campaign Broadcasts</strong>
              <p className="capitalize">The Holy Month Is The Biggest Retail Season In The GCC. WhatsApp Broadcast Campaigns For Ramadan Deals, Eid Promotions, And National Day Sales Consistently Outperform Email And SMS Campaigns In Open Rates And Conversions.</p>
            </div>

            <div>
              <strong className="text-[17px] text-black block mb-1">3. Delivery And Shipment Updates</strong>
              <p className="capitalize">Send Automated Dispatch Notifications, Delivery Tracking Links, And Arrival Confirmations Via WhatsApp. This Reduces Inbound Support Queries And Dramatically Improves The Post-Purchase Customer Experience.</p>
            </div>

            <div>
              <strong className="text-[17px] text-black block mb-1">4. Customer Support In Arabic And English</strong>
              <p className="capitalize">WhatsApp Enables Bilingual Customer Service — Critical In A Region Where Both Arabic-Speaking Locals And A Large Expat Population Must Be Served. Chatbots Can Handle FAQs In Both Languages Around The Clock.</p>
            </div>

            <div>
              <strong className="text-[17px] text-black block mb-1">5. VIP And Loyalty Customer Engagement</strong>
              <p className="capitalize">Create Dedicated Broadcast Lists For Your VIP Shoppers In Dubai, Doha, Or Manama. Send Early Access To New Collections, Exclusive Discounts, And Personalized Recommendations That Make Loyal Customers Feel Valued.</p>
            </div>
          </div>

          <h2 className="pt-12 text-[28px] font-black text-black leading-tight tracking-[-0.01em] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
            Getting Started: WhatsApp Business Setup For GCC Retailers
          </h2>
          
          <div className="pt-4 space-y-8">
            <div>
              <strong className="text-[17px] text-black block mb-1">Step 1 — Set Up Your Business Profile</strong>
              <p className="capitalize">Add Your Business Name, Logo, Address, Website, And A Compelling Business Description With Relevant Keywords Like "Fashion Retail UAE" Or "Electronics Shop Riyadh." This Also Helps With WhatsApp SEO And Local Discovery.</p>
            </div>

            <div>
              <strong className="text-[17px] text-black block mb-1">Step 2 — Build Your Product Catalog</strong>
              <p className="capitalize">Upload High-Quality Product Images, Set Prices In AED, SAR, QAR, Or KWD, And Write Clear Arabic And English Product Descriptions. A Well-Curated WhatsApp Catalog Is Your Mobile Storefront.</p>
            </div>

            <div>
              <strong className="text-[17px] text-black block mb-1">Step 3 — Set Up Automation</strong>
              <p className="capitalize">Configure A Greeting Message That Introduces Your Business, An Away Message For Outside Working Hours, And At Least 10 Quick Replies For Your Most Common Customer Questions — Pricing, Delivery Areas, Return Policies, And Payment Methods.</p>
            </div>

            <div>
              <strong className="text-[17px] text-black block mb-1">Step 4 — Promote Your WhatsApp Number</strong>
              <p className="capitalize">Add A WhatsApp Click-To-Chat Button On Your Website, Instagram Bio, Facebook Page, Google My Business Listing, And Physical Store Signage. Run WhatsApp-Specific Campaigns During Peak GCC Retail Seasons.</p>
            </div>
          </div>

          <h2 className="pt-12 text-[28px] font-black text-black leading-tight tracking-[-0.01em] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
            WhatsApp Business Best Practices For GCC Retail Success
          </h2>
          
          <div className="pt-4 space-y-6">
            <p className="capitalize"><strong className="text-black">Respond Within 5 Minutes —</strong> GCC Customers Expect Near-Instant Replies. Use Auto-Responses When Human Agents Are Unavailable.</p>
            <p className="capitalize"><strong className="text-black">Always Get Opt-In —</strong> Only Message Customers Who Have Explicitly Agreed To Receive WhatsApp Communications From Your Business. This Is Both A Legal Requirement And Best Practice.</p>
            <p className="capitalize"><strong className="text-black">Use Rich Media —</strong> Send Product Photos, Short Videos, Voice Notes, And PDF Catalogs. Visual Content Drives Significantly Higher Engagement In GCC Retail Conversations.</p>
            <p className="capitalize"><strong className="text-black">Localize Your Content —</strong> Speak To Customers In Their Preferred Language. Arabic Messages For Local GCC Nationals And English For The Expat Community Drives Stronger Connection And Conversion.</p>
          </div>

        </div>
      </section>

      <FooterSection />
    </main>
  );
};
