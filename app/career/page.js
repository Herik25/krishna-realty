import Header from "@/components/common/Header";
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

      <section className="max-w-5xl mx-auto my-16 lg:my-24">
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
        <div className="mt-10 grid grid-cols-3 gap-8">
          {[
            {
              t: "INTEGRITY",
              d: "Integrity is doing the right thing, even when no one is watching.",
              i: "",
            },
            {
              t: "TEAM WORK",
              d: "Team work results in success or disaster. We love success. We abhor disaster.",
              i: "",
            },
            {
              t: "TRANSPARENCY",
              d: "Be transparent. Be clear. Be happy",
              i: "",
            },
            {
              t: "INNOVATIVENESS",
              d: "Dare to think. Believe in it. Execute it",
              i: "",
            },
            {
              t: "USER CENTRIC",
              d: "As the cliché goes, ‘Customer is the King’. Well, honestly he is and will remain so forever and ever.",
              i: "",
            },
            {
              t: "DYNAMIC",
              d: "Life is dynamic. So be alive.",
              i: "",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-black rounded-sm p-4 grid grid-cols-[auto_1fr] gap-4"
            >
              <Image
                src={`/images/${item.i}`}
                alt={item.t}
                height={40}
                width={40}
              />
              <div>
                <h3>{item.t}</h3>
                <p className="text-sm">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
