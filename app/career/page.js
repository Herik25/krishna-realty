import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ApplicationForm from "@/components/custom/ApplicationForm";
import CustomAccordian from "@/components/custom/CustomAccordian";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Atom,
  BanknoteArrowUp,
  BrainCircuit,
  ChartCandlestick,
  ChartNoAxesCombined,
  Earth,
  Gem,
  HandCoins,
  Hospital,
  Lightbulb,
  PartyPopper,
  ShieldUser,
  Trophy,
  Users,
} from "lucide-react";
import Image from "next/image";

const careerSection = [
  {
    id: 1,
    title: "Meet Our Team",
    points: [
      "We have a team of diligent professionals with a strong sense of motivation, who architect our success at every step of our journey.Their positive spirit is driven by an intense sense of belongingness and nurtured by a transparent and open environment. Since people are at the heart of our core business, we encourage our people to be emotionally driven with their approach towards creating products and solving problems",
      "At Square Yards we strive to go beyond the status quo and find the tipping point for a constant and consistent evolutionary process.",
    ],
    image: "/images/",
  },
  {
    id: 2,
    title: "Life at Krishna Realty",
    points: [
      "At Square Yards, supporting our employees is a core part of how we do business. We believe in a wholesome individual and team balance and thus emphasize absolute autonomy at all levels, along with celebrating the process of achieving individual and group goals.",
      "We are proud of our supportive and inclusive culture that nurtures the creative side of our employees. We thus encourage indulgence in de-stressing and rejuvenating activities at work.",
    ],
    image: "/images/",
  },
];

export default function Career() {
  return (
    <div className="font-inter">
      <Header />
      <section className="mx-auto grid h-[calc(100vh-5rem)] max-h-[800px] max-w-5xl place-items-center px-4 text-center">
        <div className="text-center text-black">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Build Your{" "}
            <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
              Career
            </span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl font-light max-w-3xl mx-auto">
            Join a team that&apos;s redefining the real estate landscape.
            Explore exciting opportunities, grow with industry leaders, and make
            an impact that matters.
          </p>
        </div>
      </section>

      <section className="my-16 lg:my-24 px-4 max-w-5xl mx-auto">
        {careerSection.map((section, index) => (
          <div
            key={section.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-10 mb-20`}
          >
            {/* Image */}
            <div className="flex-1">
              <Image
                src={section.image}
                alt={section.title}
                height={400}
                width={400}
                className="rounded-2xl w-full h-auto object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-600 mb-4">
                {section.title}
              </h2>
              <p className="text-black text-lg mb-6">{section.description}</p>
              <ul className="space-y-2 text-black">
                {section.points.map((point, idx) => (
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

      <section className="max-w-5xl mx-auto my-16 lg:my-24 px-4">
        <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-center">
          <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
            Our Ethos
          </span>
        </h2>
        <p className="mt-2 text-lg sm:text-xl font-light text-center">
          At Square Yards, our goal is to turn transactions into life changing
          experiences. We thus strive to constantly better ourselves through
          self-reflection and keep our ethos as the foundation of our conduct
        </p>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {[
            {
              t: "INTEGRITY",
              d: "Integrity is doing the right thing, even when no one is watching.",
              i: <BrainCircuit size={32} />,
            },
            {
              t: "TEAM WORK",
              d: "Team work results in success or disaster. We love success. We abhor disaster.",
              i: <Users size={32} />,
            },
            {
              t: "TRANSPARENCY",
              d: "Be transparent. Be clear. Be happy",
              i: <Gem size={32} />,
            },
            {
              t: "INNOVATIVENESS",
              d: "Dare to think. Believe in it. Execute it",
              i: <Lightbulb size={32} />,
            },
            {
              t: "USER CENTRIC",
              d: "As the cliché goes, ‘Customer is the King’. Well, honestly he is and will remain so forever and ever.",
              i: <ShieldUser size={32} />,
            },
            {
              t: "DYNAMIC",
              d: "Life is dynamic. So be alive.",
              i: <Atom size={32} />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-black rounded-sm p-4 grid grid-cols-[auto_1fr] gap-4"
            >
              {item.i}
              <div>
                <h3>{item.t}</h3>
                <p className="text-sm">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto my-16 lg:my-24 px-4">
        <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-center">
          <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
            Benefits And Perks
          </span>
        </h2>
        <p className="mt-2 text-lg sm:text-xl font-light text-center">
          We are of a strong opinion that our employees are the architects of
          our success and growth. We thus leave no stone unturned to extend our
          gratitude and appreciation to them.
        </p>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4">
          <div className="p-4 grid grid-cols-[auto_1fr] border-r border-b border-dashed border-black gap-4">
            <HandCoins size={32} />
            <div>
              <h3>Highly Competitive Compensation</h3>
            </div>
          </div>
          <div className="p-4 grid grid-cols-[auto_1fr] md:border-r border-b border-dashed border-black gap-4">
            <ChartNoAxesCombined size={32} />
            <div>
              <h3>Supersonic Growth</h3>
            </div>
          </div>
          <div className="p-4 grid grid-cols-[auto_1fr] border-r border-b border-dashed border-black gap-4">
            <Trophy size={32} />
            <div>
              <h3>Best Incentive Structure</h3>
            </div>
          </div>
          <div className="p-4 grid grid-cols-[auto_1fr] border-b border-dashed border-black gap-4">
            <BanknoteArrowUp size={32} />
            <div>
              <h3>Bi-Annual Appraisals for Sales</h3>
            </div>
          </div>
          <div className="p-4 grid grid-cols-[auto_1fr] border-b md:border-b-0 border-r border-dashed border-black gap-4">
            <Earth size={32} />
            <div>
              <h3>Global Movement Opportunities</h3>
            </div>
          </div>
          <div className="p-4 grid grid-cols-[auto_1fr] border-b md:border-b-0 md:border-r border-dashed border-black gap-4">
            <ChartCandlestick size={32} />
            <div>
              <h3>Employee Stock Options</h3>
            </div>
          </div>
          <div className="p-4 grid grid-cols-[auto_1fr] border-r border-dashed border-black gap-4">
            <Hospital size={32} />
            <div>
              <h3>Healthcare & Insurance</h3>
            </div>
          </div>
          <div className="p-4 grid grid-cols-[auto_1fr] border-dashed border-black gap-4">
            <PartyPopper size={32} />
            <div>
              <h3>Fun, Dynamic Environment</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto my-16 lg:my-24 relative px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* LEFT - Description + Temp Jobs */}
        <div>
          <h2 className="text-3xl font-bold text-black mb-4">
            Join Our Team of Innovators
          </h2>
          <p className="text-gray-800 mb-6">
            We&apos;re always looking for talented individuals who are
            passionate about building creative solutions. Whether you&apos;re a
            coding wizard or a design mastermind, there&apos;s a place for you
            here.
          </p>

          <h3 className="text-xl font-semibold text-black mb-3">
            Available Positions
          </h3>
          <Accordion type="single" collapsible className="w-full space-y-2">
            <AccordionItem className="border-b-black" value="frontend">
              <AccordionTrigger className="hover:no-underline cursor-pointer">
                Frontend Developer (Remote)
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-black">
                  🔹 React, TypeScript, Tailwind CSS
                  <br />
                  🔹 2+ years of experience
                  <br />
                  🔹 Good understanding of UI/UX and responsive design
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="border-b-black" value="backend">
              <AccordionTrigger className="hover:no-underline cursor-pointer">
                Backend Developer
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-800">
                  🔹 Node.js, Express, MongoDB
                  <br />
                  🔹 REST APIs and Microservices
                  <br />
                  🔹 Experience with authentication and authorization
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="border-b-black" value="fullstack">
              <AccordionTrigger className="hover:no-underline cursor-pointer">
                Full Stack Developer
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-800">
                  🔹 MERN Stack expertise
                  <br />
                  🔹 Comfortable with both frontend and backend
                  <br />
                  🔹 Strong problem-solving skills
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem className="border-b-black" value="designer">
              <AccordionTrigger className="hover:no-underline cursor-pointer">
                UI/UX Designer
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-sm text-gray-800">
                  🔹 Figma, Adobe XD, or Sketch
                  <br />
                  🔹 Portfolio required
                  <br />
                  🔹 Ability to translate ideas into wireframes and prototypes
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* RIGHT - Form */}
        <div className="sticky top-28 left-0">
          <ApplicationForm />
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
