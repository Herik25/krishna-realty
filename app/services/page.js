import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import CustomAccordian from "@/components/custom/CustomAccordian";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Sole Selling",
    description:
      "We handle the complete selling process, allowing builders to focus on project development. With strategic planning, a trained sales team, and broker management, we ensure faster and tension-free sales.",
    points: [
      "End-to-End Sales Management",
      "Marketing Strategy & Execution",
      "Broker Channel Management",
      "Lead Follow-ups & Deal Finalization",
      "Payment Collection & Legal Coordination",
    ],
    image: "/images/sole-selling.jpg",
  },
  {
    id: 2,
    title: "Marketing",
    description:
      "From brand identity to powerful media campaigns, Krishna Realty crafts customized marketing strategies that position your project as a market leader.",
    points: [
      "Print & Digital Media Campaigns",
      "Creative Brand Design (Logo, Brochures, Ads)",
      "Social Media Marketing & Management",
      "On-ground Event Promotions",
      "Complete Campaign Planning & Execution",
    ],
    image: "/images/marketing.jpg",
  },
  {
    id: 3,
    title: "Consultancy",
    description:
      "With 12+ years of project surveying and market expertise, we provide sharp consultancy services to optimize your project success, pricing strategy, and customer satisfaction.",
    points: [
      "Market Trend Analysis",
      "Project Planning Support",
      "Customer Buying Behavior Insights",
      "Pricing Strategy Consulting",
      "Long-term Partnership Building",
    ],
    image: "/images/consultancy.jpg",
  },
];

export default function Services() {
  return (
    <div className="font-inter">
      <Header />

      <section className="mx-auto grid h-[calc(100vh-5rem)] max-h-[800px] max-w-5xl place-items-center px-4 text-center">
        <div className="text-center text-black">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl font-light max-w-3xl mx-auto">
            End-to-End Real Estate Solutions Empowering Builders, Buyers, and
            Investors.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-10 mb-20`}
          >
            {/* Image */}
            <div className="flex-1">
              <Image
                src={service.image}
                alt={service.title}
                height={400}
                width={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
                {service.title}
              </h2>
              <p className="text-black text-lg mb-6">{service.description}</p>
              <ul className="space-y-3 text-black md:list-disc pl-4">
                {service.points.map((point, idx) => (
                  <li key={idx} className="">
                    {/* <span className="mt-1 w-2 h-2 bg-black rounded-full" /> */}
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
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
