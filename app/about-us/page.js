import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import CustomAccordian from "@/components/custom/CustomAccordian";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="font-inter">
      <Header />
      <section className="relative w-full h-[calc(100vh-5rem)] bg-gradient-to-r from-black/60 via-black/40 to-black/20 overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/desktop-banner.jpeg"
          alt="About Krishna Realty"
          height={400}
          width={800}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* Content */}
        <div className="relative z-20 flex flex-col items-center justify-center text-center h-full px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Your Vision,{" "}
            <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
              Our Mission
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl">
            12+ years of real estate expertise — powering builders, investors,
            and buyers towards lasting success.
          </p>

          <div className="mt-8 flex gap-4 items-center">
            <Link
              href="/services"
              className="bg-primary-500 hover:bg-primary-600 text-white px-6 rounded-lg text-lg font-semibold transition"
            >
              Our Services
            </Link>
            <div className="hidden rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] lg:block cursor-pointer">
              <Button
                className="rounded-full border-0 bg-black text-white font-light hover:bg-transparent hover:text-white"
                aria-label="Contact Us"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">
              Welcome to Krishna Realty
            </h2>
            <p className="text-gray-800 mb-4">
              With over <strong>12 years of experience</strong> in real estate,
              Krishna Realty has been a growth partner for builders, developers,
              investors, and buyers. We specialize in creating opportunities,
              forging strong partnerships, and driving success.
            </p>
            <p className="text-gray-800">
              Our vision is simple — to bridge gaps, understand market dynamics,
              and provide custom solutions for every client.
            </p>
          </div>
          <Image
            src="/images/about-hero.jpg"
            alt="Krishna Realty"
            className="w-full rounded-lg"
            height={400}
            width={400}
          />
        </div>
      </section>

      {/* For Builders and Buyers */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Builders */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">For Builders</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• 12+ years, 500+ project surveys completed.</li>
              <li>• Direct involvement in 80+ project launches.</li>
              <li>• Expertise in market trends and buyer patterns.</li>
              <li>• Customized strategy for each project’s success.</li>
            </ul>
          </div>

          {/* Buyers */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">For Buyers</h3>
            <ul className="text-gray-300 space-y-2">
              <li>• Helping you find the perfect property fit.</li>
              <li>• Protecting you from wrong decisions.</li>
              <li>• Valuing customers over money.</li>
              <li>• Stress-free, expert-guided transactions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* JV Section */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-6">
          Joint Ventures (JV)
        </h2>
        <p className="text-gray-800 mb-4">
          At Krishna Realty, we bring together builders, investors, and
          landowners to create thriving projects and lasting partnerships.
        </p>
        <ul className="text-gray-800 space-y-2">
          <li>• Match builders with ideal partners.</li>
          <li>• Accelerate project growth and execution.</li>
          <li>• Build win-win relationships where everyone benefits.</li>
        </ul>
      </section>

      {/* Why Us */}
      <section className="py-16 px-4 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Why Choose Us?</h2>
          <ul className="text-gray-200 space-y-2">
            <li className="flex items-center gap-2 md:justify-center">
              <span className="block md:hidden">•</span> Deep understanding of
              party strengths and weaknesses.
            </li>
            <li className="flex items-center gap-2 md:justify-center">
              <span className="block md:hidden">•</span> Extensive public and
              professional network.
            </li>
            <li className="flex items-center gap-2 md:justify-center">
              <span className="block md:hidden">•</span> Logical, thoughtful
              recommendations.
            </li>
            <li className="flex items-center gap-2 md:justify-center">
              <span className="block md:hidden">•</span> Trusted to foster
              lasting partnerships.
            </li>
          </ul>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-black mb-10 text-center">
          Our Core Services
        </h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Sole Selling */}
          <div className="p-6 border border-black rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-black">Sole Selling</h3>
            <ul className="text-gray-800 space-y-2">
              <li>• Free builders from selling pressure.</li>
              <li>• Fast-track project sales and development.</li>
              <li>• Scientific sales and marketing approach.</li>
              <li>• Always ready with Plan A and B.</li>
            </ul>
          </div>

          {/* Marketing */}
          <div className="p-6 border border-black rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-black">Marketing</h3>
            <ul className="text-gray-800 space-y-2">
              <li>• Media planning and full campaigns.</li>
              <li>• Branding from logos to full literature.</li>
              <li>• On-ground sales and broker management.</li>
              <li>• Lead management and customer follow-ups.</li>
            </ul>
          </div>

          {/* Consultancy */}
          <div className="p-6 border border-black rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-4 text-black">Consultancy</h3>
            <ul className="text-gray-800 space-y-2">
              <li>• Market and competitor research.</li>
              <li>• Project planning and sales strategy.</li>
              <li>• Growth-focused partnership consultancy.</li>
              <li>• Long-term business success planning.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center my-16 lg:my-24 bg-black">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Winning Partnerships?
          </h2>
          <p className="text-lg text-gray-200 mb-4">
            Connect with us today and take your project to the next level.
          </p>
          <div className="w-min mx-auto">
            <div className="flex gap-4">
              <div className="rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] block cursor-pointer">
                <Button
                  className="rounded-full border-0 bg-black text-white font-light hover:bg-transparent hover:text-white"
                  aria-label="Contact Us"
                >
                  Let&apos;s Connect
                </Button>
              </div>
              <div className="rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] block cursor-pointer">
                <Button
                  className="rounded-full border-0 bg-black text-white font-light hover:bg-transparent hover:text-white"
                  aria-label="Contact Us"
                >
                  Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="my-16 lg:my-24 px-4 max-w-5xl mx-auto">
        <CustomAccordian />
      </section>

      <Footer />
    </div>
  );
}
