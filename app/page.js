import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import CustomAccordian from "@/components/custom/CustomAccordian";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/custom/EmblaCarousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-inter">
      <Header />
      <section className="mx-auto grid h-[calc(100vh-5rem)] max-h-[800px] max-w-5xl place-items-center px-4 text-center">
        <div>
          <p className="md:text-lg font-light md:tracking-wide uppercase text-muted-foreground">
            Real Estate Company
          </p>

          <h1 className="my-4 text-5xl font-bold md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
              Krishna Realty
            </span>
          </h1>

          <p className="mx-auto mb-6 max-w-2xl md:text-lg font-light text-muted-foreground lg:text-xl">
            JV Consultant · Investment Consultant · Sole Selling
          </p>

          <div className="w-min mx-auto">
            <div className="rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] lg:block cursor-pointer">
              <Button
                className="rounded-full border-0 text-xs sm:text-sm bg-background text-gray-700 font-light hover:bg-transparent hover:text-white"
                aria-label="Contact Us"
              >
                CONTACT US
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="my-16 lg:my-24">
        <Carousel
          className="h-16 md:h-24"
          opts={{ align: "start", loop: true, duration: 30 }}
          plugins={{ Autoscroll: { speed: 1 } }}
        >
          <CarouselContent>
            {[
              {
                img: "ic-2.svg",
                lable: "Launching",
              },
              {
                img: "ic-3.svg",
                lable: "Strategy",
              },
              {
                img: "ic-4.svg",
                lable: "Survey",
              },
              {
                img: "ic-5.svg",
                lable: "Planning",
              },
              {
                img: "ic-7.svg",
                lable: "Marketing",
              },
              {
                img: "ic-8.svg",
                lable: "Joint Venture",
              },
              {
                img: "ic-9.svg",
                lable: "Sole Selling",
              },
              {
                img: "ic-10.svg",
                lable: "Investment",
              },
              {
                img: "ic-11.svg",
                lable: "Work Pattern",
              },
              {
                img: "ic-12.svg",
                lable: "Suggestions",
              },
            ].map((a, i) => (
              <CarouselItem
                className="h-full w-auto flex-shrink-1 px-2"
                key={i}
              >
                <div className="rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5">
                  <div
                    className={`bg-background flex items-center rounded-full px-2 ${
                      (i === 0 || i === 7) && "pl-4"
                    }`}
                  >
                    <Image
                      src={`/images/${a.img}`}
                      alt={a.lable}
                      width={60}
                      height={60}
                      className="block h-full w-auto max-w-10 md:max-w-none"
                    />
                    <p className="pr-2 text-lg">{a.lable}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Carousel
          className="h-16 md:h-24"
          opts={{ align: "start", loop: true, duration: 30 }}
          plugins={{ Autoscroll: { speed: -1 } }}
        >
          <CarouselContent>
            {[
              {
                img: "ic-2.svg",
                lable: "Experience",
              },
              {
                img: "ic-3.svg",
                lable: "Media",
              },
              {
                img: "ic-4.svg",
                lable: "Sales",
              },
              {
                img: "ic-5.svg",
                lable: "Management",
              },
              {
                img: "ic-7.svg",
                lable: "Deal",
              },
              {
                img: "ic-8.svg",
                lable: "Real Estate",
              },
              {
                img: "ic-9.svg",
                lable: "Success",
              },
              {
                img: "ic-10.svg",
                lable: "Portfolio",
              },
              {
                img: "ic-11.svg",
                lable: "Team Building",
              },
              {
                img: "ic-12.svg",
                lable: "Development",
              },
            ].map((a, i) => (
              <CarouselItem
                className="h-full w-auto flex-shrink-1 px-2"
                key={i}
              >
                <div className="rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5">
                  <div
                    className={`bg-background flex items-center rounded-full px-2`}
                  >
                    <Image
                      src={`/images/${a.img}`}
                      alt={a.lable}
                      width={60}
                      height={60}
                      className="block h-full w-auto max-w-10 md:max-w-none"
                    />
                    <p className="pr-2 text-lg">{a.lable}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <section className="mt-16 lg:mt-24 max-w-5xl mx-auto">
        {[
          {
            id: 1,
            image: "/images/building.png",
            alt: "Modern Building",
            title: "JV Consultant",
            description: [
              "Find perfect partner accordingly builder's requirement and working pattern",
              "Fill the gap to gear up the projects grow",
              "Establish the connection between Investors, Land Owners and developer for long term planning and execution.",
              "Create a situation where Everyone is winner.",
            ],
            link: "/jv-consultant",
          },
          {
            id: 2,
            image: "/images/building.png",
            alt: "Luxury Apartments",
            title: "Investment Consultant",
            description: [
              "We connect builders with partners who align with their project goals and working styles.",
              "Our solutions bridge gaps, helping accelerate the progress and expansion of projects.",
              "We facilitate long-term relationships between investors, landowners, and developers.",
              "We ensure that all parties benefit, fostering trust and long-term collaboration.",
            ],
            link: "/",
          },
          {
            id: 3,
            image: "/images/building.png",
            alt: "Real Estate Office",
            title: "Sole Selling",
            description: [
              "Builders will be free from selling pressure. So, they can focus on planning of next upcoming projects",
              "Fast selling is beneficial for builders that's why they can develop more and more projects.",
              "Krishna Realty have wide experience of sales and scientific marketing",
              "Always be ready with Plan A and Plan B.",
            ],
            link: "/",
          },
          {
            id: 4,
            image: "/images/building.png",
            alt: "Services",
            title: "Services",
            description: [
              "Comprehensive real estate consultancy tailored to your needs.",
              "Sole selling expertise ensuring faster project closures.",
              "Strategic marketing solutions to maximize project visibility.",
              "End-to-end support from project launch to final handover.",
            ],
            link: "/services",
          },
          {
            id: 5,
            image: "/images/building.png",
            alt: "Portfolio",
            title: "Portfolio",
            description: [
              "A diverse range of successfully completed real estate projects.",
              "Residential, commercial, and luxury developments across the city.",
              "Trusted by leading builders and investors for consistent results.",
              "Each project reflects our commitment to quality and excellence.",
            ],
            link: "/portfolio",
          },
          {
            id: 6,
            image: "/images/building.png",
            alt: "Experts",
            title: "Experts",
            description: [
              "A team of seasoned professionals with deep industry knowledge.",
              "Dedicated specialists for sales, marketing, and client servicing.",
              "Proven track record of exceeding sales and partnership goals.",
              "Passionate about building lasting relationships with clients.",
            ],
            link: "/team",
          },
        ].map((card, index) => (
          <div key={index} className="px-4">
            <div
              key={card.id}
              className={`flex flex-col-reverse md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } gap-8 py-12 items-center max-w-7xl mx-auto`}
            >
              {/* Text Section */}
              <div className="space-y-4 text-gray-600 md:w-1/2">
                <h3 className="text-3xl font-semibold text-center md:text-left text-gray-900">
                  <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
                    {card.title}
                  </span>
                </h3>

                <ul className="text-center md:text-start leading-relaxed md:list-disc pl-4">
                  {card.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                <div className="w-min mx-auto md:mx-0">
                  <div className="rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] lg:block cursor-pointer">
                    <Link href={card.link} passHref>
                      <div className="rounded-full border-0 text-xs text-nowrap sm:text-sm bg-background text-gray-700 font-light hover:bg-transparent hover:text-white px-6 py-2 text-center">
                        Read More
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex justify-center md:w-1/2">
                <Image
                  src={card.image}
                  alt={card.alt}
                  height={500}
                  width={500}
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
            {index === 2 && (
              <div className="h-full w-full bg-background border border-black  rounded-xl grid grid-cols-[auto_1fr_auto] gap-4 items-center p-4 md:p-8">
                <Image
                  src="/images/ic-5.svg"
                  alt="calculator"
                  height={40}
                  width={40}
                />
                <h2 className="md:text-xl">
                  Introducing Advance Property&nbsp;
                  <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
                    ROI Calculator
                  </span>
                </h2>
                <div className="rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-0.5 cursor-pointer">
                  <Button
                    className="rounded-full border-0 bg-background text-black font-light hover:bg-transparent hover:text-white"
                    aria-label="Contact Us"
                  >
                    Check ROI
                  </Button>
                </div>
              </div>
            )}
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

      <Carousel
        className="h-20"
        opts={{ align: "start", loop: true, duration: 30 }}
        plugins={{ Autoscroll: { speed: 1 } }}
      >
        <CarouselContent>
          {[
            "aurum-one.svg",
            "opec-heights.svg",
            "prabhu-group.svg",
            "aurum-residency.svg",
            "rb-elements.svg",
            "saven-sarface.svg",
            "prabhu-sneh.svg",
            "sharnam-heights.svg",
            "the-taurus.svg",
            "prabhu-heights.svg",
            "saven-serena.svg",
            "west-gate-2.svg",
            "prabhu-navan-01.svg",
            "sopan-heights.svg",
            "sanskar-elegance.svg",
            "one-mavdi.svg",
            "sopan-hill.svg",
            "the-one-world.svg",
            "sanskar-sanidhya.svg",
            "rk-group.svg",
            "pride-signate.svg",
            "sopan-luxuria.svg",
            "sanskar-heights.svg",
            "marrygold-square.svg",
            "aalap-astoria.svg",
            "pride-aura.svg",
            "sopan-elegance.svg",
          ].map((a, i) => (
            <CarouselItem className="h-full basis-1/3 lg:basis-[12.5%]" key={i}>
              <Image
                src={`/images/${a}`}
                alt={a.replace(".png", "")}
                width={125}
                height={64}
                className="mx-auto block h-20 w-20 grayscale"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <section className="my-16 lg:my-24 px-4 max-w-5xl mx-auto">
        <CustomAccordian />
      </section>

      <Footer />
    </div>
  );
}
