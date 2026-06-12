import Link from 'next/link';
import { HeaderNavSection } from './sections/HeaderNavSection/HeaderNavSection';
import { FooterSection } from './sections/FooterSection';
import { Calendar, Clock } from 'lucide-react';

export const BlogSaasDetailsPage = () => {
  return (
    <main className="relative w-full overflow-hidden bg-white">
      <HeaderNavSection />

      <section className="relative w-full px-4 pt-8 pb-16 sm:px-6 lg:px-8 lg:pt-12 lg:pb-20 max-w-[1000px] mx-auto font-['Inter',Helvetica,sans-serif]">
        
        {/* Breadcrumb */}
        <div className="mb-6 hidden sm:flex items-center gap-2 text-[13px] font-medium text-[#666666]">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span className="text-[10px]">●</span>
          <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          <span className="text-[10px]">●</span>
          <span className="text-black">WhatsApp Business For SaaS: Onboarding...</span>
        </div>

        {/* Main Image */}
        <div className="mb-8 w-full aspect-[2.2/1] rounded-[30px] bg-[#D9D9D9] overflow-hidden">
           <img src="/assets/images/landing/saas-blog-hero.jpg" alt="WhatsApp Business For SaaS" className="w-full h-full object-cover" />
        </div>

        {/* Header Meta Pills */}
        <div className="mb-8 flex flex-wrap items-center gap-3 text-[15px] font-medium text-[#4D4D4D]">
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
          WhatsApp Business For SaaS:<br />Onboarding, Activation & Churn Reduction
        </h1>

        {/* Content */}
        <div className="text-[17px] leading-[1.6] text-[#4D4D4D] space-y-6">
          <p className="capitalize">
            Email Open Rates Have Collapsed. Push Notifications Get Ignored. Yet WhatsApp Messages Are Opened Within 3 Minutes, 98% Of The Time. Here's Exactly How SaaS Teams Are Using WhatsApp Business API To Drive Onboarding, Activate Users Faster, And Slash Churn — With Real Playbooks You Can Implement This Week.
          </p>

          <h2 className="pt-8 text-[28px] font-black text-black leading-tight tracking-[-0.01em] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
            Why WhatsApp For SaaS?
          </h2>
          <p className="capitalize">
            SaaS Companies Spend Enormous Effort Acquiring Users, Only To Lose Most Of Them Before They Experience Real Value. The Culprit Isn't The Product — It's The Communication Gap. Users Get Confused, Distracted, Or Simply Forget To Come Back. WhatsApp, With Its Unmatched Attention And Intimacy, Is Uniquely Positioned To Close That Gap.
          </p>
          <p className="capitalize">
            The WhatsApp Business API (Now Meta's Cloud API) Allows SaaS Products To Send Templated Notifications, Transactional Messages, And Conversational Flows — All Within A Channel Users Already Trust And Check Dozens Of Times Daily.
          </p>

          <h2 className="pt-8 text-[28px] font-black text-black leading-tight tracking-[-0.01em] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
            Onboarding: The First 7 Days Make Or Break Retention
          </h2>
          <p className="capitalize mb-8">
            Research Consistently Shows That 40–60% Of SaaS Users Who Sign Up Never Return After Day One. The First 7 Days Are A Critical Window. WhatsApp Lets You Deliver Timely, Personal Nudges That Email Simply Can't Compete With.
          </p>

          <h2 className="pt-8 text-[28px] font-black text-black leading-tight tracking-[-0.01em] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
            Activation: Reaching The "Aha Moment" Faster
          </h2>
          <p className="capitalize mb-8">
            Activation Is The Moment A User First Experiences Your Product's Core Value. For Slack It's When A Team Sends 2,000 Messages. For Dropbox It's Uploading A First File. WhatsApp Can Dramatically Accelerate The Path To That Moment By Delivering Contextual Nudges At Precisely The Right Time.
          </p>

          <div className="grid gap-5 sm:grid-cols-2 mb-12">
            <div className="rounded-[20px] border border-[#E3E3E3] p-6">
              <h3 className="mb-3 text-[20px] font-bold text-black tracking-[-0.01em]">Behaviour-Triggered Prompts</h3>
              <p className="capitalize">Fire A Message When A User Starts But Doesn't Complete A Key Flow (E.G. Adds A Product To A Workflow But Doesn't Publish It).</p>
            </div>
            <div className="rounded-[20px] border border-[#E3E3E3] p-6">
              <h3 className="mb-3 text-[20px] font-bold text-black tracking-[-0.01em]">Invite Team Members</h3>
              <p className="capitalize">For Team-Based Products, Virality Lives In Inviting Colleagues. A WhatsApp Nudge To Invite A Teammate Drives Both Activation And Expansion Revenue.</p>
            </div>
            <div className="rounded-[20px] border border-[#E3E3E3] p-6">
              <h3 className="mb-3 text-[20px] font-bold text-black tracking-[-0.01em]">Integration Nudges</h3>
              <p className="capitalize">Users Who Connect Integrations Have 3x Higher 90-Day Retention. Send A Timely Message Highlighting The Top 1–2 Relevant Integrations.</p>
            </div>
            <div className="rounded-[20px] border border-[#E3E3E3] p-6">
              <h3 className="mb-3 text-[20px] font-bold text-black tracking-[-0.01em]">Milestone Celebrations</h3>
              <p className="capitalize">Celebrate The User's First Meaningful Action: "🎉 You Just Sent Your First Report. You're Now Part Of 50K+ Teams Saving Time With [Product]."</p>
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
            Churn Reduction: Catch Signals Before It's Too Late
          </h2>
          <p className="capitalize">
            Churn Rarely Happens Overnight. Users Telegraph Their Intent To Leave Through Behavioural Signals Weeks Before Cancelling. WhatsApp, Used Proactively, Is One Of The Highest-ROI Churn-Intervention Tools Available To SaaS Teams.
          </p>

          <p className="capitalize pt-4">
            <strong className="text-black">The Win-Back Message Formula</strong>
          </p>
          <p className="capitalize">
            The Most Effective Churn-Intervention WhatsApp Messages Follow A Simple Structure: Acknowledge The Gap → Lead With Value, Not Guilt → Make It Effortless To Re-Engage. Example:
          </p>

          <h2 className="pt-12 text-[28px] font-black text-black leading-tight tracking-[-0.01em] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
            Compliance & Opt-In Best Practices
          </h2>
          <p className="capitalize">
            WhatsApp Business API Requires Explicit Opt-In Before You Can Message Users. This Isn't Just A Legal Requirement — It's What Keeps Your Messages Feeling Personal Rather Than Spammy. Done Right, It's A Feature, Not A Constraint.
          </p>

          <h2 className="pt-12 text-[28px] font-black text-black leading-tight tracking-[-0.01em] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
            WhatsApp Business Best Practices For GCC Retail Success
          </h2>
          
          <div className="pt-4 space-y-6">
            <p className="capitalize"><strong className="text-black">Respond Within 5 Minutes —</strong> GCC Customers Expect Near-Instant Replies. Use Auto-Responses When Human Agents Are Unavailable.</p>
            <p className="capitalize"><strong className="text-black">Always Get Opt-In —</strong> Only Message Customers Who Have Explicitly Agreed To Receive WhatsApp Communications From Your Business. This Is Both A Legal Requirement And Best Practice.</p>
            <p className="capitalize"><strong className="text-black">Use Rich Media —</strong> Send Product Photos, Short Videos, Voice Notes, And PDF Catalogs. Visual Content Drives Significantly Higher Engagement In GCC Retail Conversations.</p>
            <p className="capitalize"><strong className="text-black">Localize Your Content —</strong> Speak To Customers In Their Preferred Language. Arabic Messages For Local GCC Nationals And English For The Expat Community Drives Stronger Connection And Conversion.</p>
          </div>

          <h2 className="pt-12 text-[28px] font-black text-black leading-tight tracking-[-0.01em] [font-family:'SF_Pro-Heavy',Inter,sans-serif]">
            Top WhatsApp Business API Tools For SaaS
          </h2>
          <p className="capitalize">
            If You're Ready To Implement, Here Are The Most Popular Platforms For Connecting WhatsApp Business API To Your SaaS Stack: Intercom (WhatsApp Inbox + Automation), Customer.io (Behaviour-Triggered Campaigns), Wati (SMB-Focused, Easy Setup), Bird (Formerly MessageBird) (Enterprise API), And Respond.io (Multi-Channel Conversations). Most Integrate Natively With Segment, HubSpot, And Salesforce.
          </p>

        </div>
      </section>

      <FooterSection />
    </main>
  );
};
