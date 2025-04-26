import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function JvConsultant() {
  return (
    <div className="font-inter">
      <Header />
      <section className="grid items-center gap-12 py-12 pb-16 sm:h-[calc(100vh-7rem)] lg:grid-cols-[60%_1fr] max-w-5xl mx-auto lg:gap-12 lg:py-0 2xl:grid-cols-[auto_1fr]">
        <div>
          <p className="mx-auto max-w-3xl text-center text-xl font-semibold leading-tight lg:mx-0 lg:text-start md:text-3xl">
            Krishna Realty
          </p>
          <h1 className="text-center lg:text-start">
            <span className="bg-gradient-to-r text-4xl md:text-5xl font-bold from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
              JV Consultant
            </span>
          </h1>
          <p className="mx-auto max-w-2xl pb-6 pt-3 text-center text-secondary-foreground lg:mx-0 lg:text-start">
            Unlock new opportunities through perfectly aligned partnerships. Our
            JV services connect developers, investors, and landowners based on
            project requirements and working patterns. We fill gaps, accelerate
            project growth, and foster long-term, trust-driven collaborations
            where every party wins.
          </p>
          <div className="mx-auto w-min lg:mx-0">
            <div className="hidden rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] lg:block cursor-pointer">
              <Button
                className="rounded-full border-0 bg-background text-black font-light hover:bg-transparent hover:text-white"
                aria-label="Contact Us"
              >
                Let&apos;s Connect
              </Button>
            </div>
          </div>
        </div>
        <div>{/* IMAGE */}</div>
      </section>

      <section className="my-16 lg:my-24 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Our JV Services
        </h2>
        <div className="grid gap-16 md:grid-cols-2">
          <div className="space-y-4">
            {[
              "Find perfect partner accordingly builder's requirement and working pattern",
              "Fill the gap to gear up the projects grow",
              "Establish the connection between Investors, Land Owners and developers for long term planning and execution",
              "Create a situation where Everyone is winner",
            ].map((point, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5 rounded-2xl"
              >
                <div
                  key={index}
                  className="h-full w-full bg-background rounded-2xl p-6 hover:shadow-lg transition-all grid grid-cols-[auto_1fr] gap-4 md:gap-8 items-center"
                >
                  <span className="bg-gradient-to-r text-4xl md:text-5xl font-bold from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
                    {index + 1}
                  </span>
                  <p className="text-black text-lg">{point}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="hidden md:grid place-items-center">
            <div>
              <Image
                src="/images/jv-consultant.png"
                alt="jv consultant"
                height={400}
                width={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="my-16 lg:my-24 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          Why Choose Us?
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="hidden md:grid place-items-center">
            <div>
              <Image
                src="/images/jv-consultant.png"
                alt="jv consultant"
                height={400}
                width={400}
              />
            </div>
          </div>
          <div className="space-y-4">
            {[
              "Understand the strength and weakness of both parties",
              "Wide range of public connections",
              "Our recommendation will fit your logic and planning",
              "Benefit to establish trust between all partners",
            ].map((point, index) => (
              <div
                key={index}
                className="bg-background border border-black grid grid-cols-[auto_1fr] gap-4 md:gap-8 items-center shadow-md rounded-2xl p-6 hover:shadow-lg transition-all"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.9 8.1L4.5 9.5L9 14L19 4L17.6 2.6L9 11.2L5.9 8.1ZM18 10C18 14.4 14.4 18 10 18C5.6 18 2 14.4 2 10C2 5.6 5.6 2 10 2C10.8 2 11.5 2.1 12.2 2.3L13.8 0.7C12.6 0.3 11.3 0 10 0C4.5 0 0 4.5 0 10C0 15.5 4.5 20 10 20C15.5 20 20 15.5 20 10H18Z"
                    fill="green"
                  />
                </svg>
                <p className="text-black text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center my-16 lg:my-24 mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-bold text-black mb-4">
          Ready to Build Winning Partnerships?
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Connect with us today and take your project to the next level.
        </p>
        <div className="w-min mx-auto">
          <div className="flex gap-4">
            <div className="rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] block cursor-pointer">
              <Button
                className="rounded-full border-0 bg-background text-black font-light hover:bg-transparent hover:text-white"
                aria-label="Contact Us"
              >
                Let&apos;s Connect
              </Button>
            </div>
            <div className="rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] block cursor-pointer">
              <Button
                className="rounded-full border-0 bg-background text-black font-light hover:bg-transparent hover:text-white"
                aria-label="Contact Us"
              >
                Our Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
