import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/custom/EmblaCarousel";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-inter">
      <Header />
      <section className="mx-auto grid h-[calc(100vh-7rem)] max-h-[800px] max-w-5xl place-items-center px-4 text-center">
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
            JV Consultant · Investment Company · Sole Selling
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
            description1:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptates porro. Unde nemo ipsum maxime libero architecto voluptates.",
            description2:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, facere numquam a itaque inventore saepe quo adipisci sed ipsam.",
          },
          {
            id: 2,
            image: "/images/building.png",
            alt: "Real Estate Office",
            title: "Investment Company",
            description1:
              "Pariatur nemo debitis libero sed quidem ducimus ratione maiores, ex deleniti vitae reprehenderit.",
            description2:
              "Omnis, nisi eaque! Ad esse, amet dolorum qui iure ex odio.",
          },
          {
            id: 3,
            image: "/images/building.png",
            alt: "Luxury Apartments",
            title: "Sole Selling",
            description1:
              "Voluptatem assumenda ullam natus consequuntur blanditiis quaerat deserunt perferendis rerum nobis non?",
            description2:
              "Corporis, facere numquam a itaque inventore saepe quo adipisci sed ipsam, quaerat.",
          },
          {
            id: 4,
            image: "/images/building.png",
            alt: "Modern Building",
            title: "JV Consultant",
            description1:
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptates porro. Unde nemo ipsum maxime libero architecto voluptates.",
            description2:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, facere numquam a itaque inventore saepe quo adipisci sed ipsam.",
          },
          {
            id: 5,
            image: "/images/building.png",
            alt: "Real Estate Office",
            title: "Investment Company",
            description1:
              "Pariatur nemo debitis libero sed quidem ducimus ratione maiores, ex deleniti vitae reprehenderit.",
            description2:
              "Omnis, nisi eaque! Ad esse, amet dolorum qui iure ex odio.",
          },
          {
            id: 6,
            image: "/images/building.png",
            alt: "Luxury Apartments",
            title: "Sole Selling",
            description1:
              "Voluptatem assumenda ullam natus consequuntur blanditiis quaerat deserunt perferendis rerum nobis non?",
            description2:
              "Corporis, facere numquam a itaque inventore saepe quo adipisci sed ipsam, quaerat.",
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

                <p className="text-center md:text-start lg:text-lg leading-relaxed">
                  {card.description1}
                </p>

                <p className="text-center md:text-start lg:text-lg leading-relaxed">
                  {card.description2}
                </p>

                <div className="w-min mx-auto md:mx-0">
                  <div className="rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] lg:block cursor-pointer">
                    <Button
                      className="rounded-full border-0 text-xs sm:text-sm bg-background text-gray-700 font-light hover:bg-transparent hover:text-white"
                      aria-label="Read More"
                    >
                      Read More
                    </Button>
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

      <Carousel
        className="h-24"
        opts={{ align: "start", loop: true, duration: 30 }}
        plugins={{ Autoscroll: { speed: 1 } }}
      >
        <CarouselContent>
          {[
            "AstraZeneca.svg",
            "dtn.svg",
            "Cambria.svg",
            "Basf.svg",
            "Cambria.svg",
            "Edmentum.svg",
            "Graco.svg",
            "JuniorAchivment.svg",
            "PropertyFinder.svg",
            "AstraZeneca.svg",
            "dtn.svg",
            "Cambria.svg",
            "Basf.svg",
            "Cambria.svg",
            "Edmentum.svg",
            "Graco.svg",
            "JuniorAchivment.svg",
            "PropertyFinder.svg",
          ].map((a, i) => (
            <CarouselItem className="h-full basis-1/3 lg:basis-[12.5%]" key={i}>
              <Image
                src={`/images/${a}`}
                alt={a.replace(".png", "")}
                width={125}
                height={64}
                className="mx-auto block h-full w-auto opacity-60"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Footer />
    </div>
  );
}
