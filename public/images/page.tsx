import AiBot from "@/components/custom/AiBot";
import { Carousel, CarouselContent, CarouselItem } from "@/components/custom/EmblaCorousel";
import GradientButton from "@/components/custom/GradientButton";
import SuccessStoriesCarousel from "@/components/custom/SuccessStoriesCarousel";
import getData from "@/lib/getData";
import metadata1, { home } from "@/lib/metadata";
import { FooterDataResponse } from "@/lib/resTypes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Fragment } from "react";

export default async function Home() {
  const data = await getData<FooterDataResponse>("/footer-data");
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata1(home).jsonLD) }} />
      <div className="grid items-center gap-12 py-12 pb-16 sm:h-[calc(100vh-10rem)] lg:grid-cols-[60%_1fr] lg:gap-12 lg:py-0 2xl:grid-cols-[auto_1fr]">
        <div>
          <p className="mx-auto max-w-3xl text-center text-4xl font-bold leading-tight lg:mx-0 lg:text-start lg:text-5xl">
            Integrate <span className="bg-main-gradient bg-clip-text text-transparent">AI Services</span> into Your Existing!
          </p>
          <p className="mx-auto max-w-2xl pb-6 pt-3 text-center text-secondary-foreground lg:mx-0 lg:text-start">
            Move your business forward with AI-driven SaaS solutions, delivering better efficiency and smarter results.
          </p>
          <div className="mx-auto w-min lg:mx-0">
            <GradientButton name="Hire Top AI Professionals Now!" href="" />
          </div>
        </div>
        <div>
          <AiBot />
        </div>
      </div>
      <div>
        <Carousel className="h-24" opts={{ align: "start", loop: true, duration: 30 }} plugins={{ Autoscroll: { speed: 1 } }}>
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
              "PropertyFinder.svg"
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
      </div>
      <div className="my-24">
        <h1 className="mx-auto bg-main-gradient bg-clip-text text-center text-4xl font-bold italic text-transparent sm:w-min sm:whitespace-nowrap">
          What do we deliver?
        </h1>
        <p className="mx-auto max-w-3xl py-5 text-center text-secondary-foreground">
          We&apos;re more than just a technology company, we leverage AI to enhance the solutions and services we provide.
        </p>
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-12">
          {[
            {
              h: "Artificial Intelligence",
              p: "We offer a comprehensive range of AI services to help streamline your business operations, enhance decision-making, and drive overall efficiency and growth.",
              bg: "bg-[linear-gradient(90deg,rgba(0,0,0,0)_20%,#7C50BD_50%,rgba(0,0,0,0)_80%)]",
              bluredBg: "bg-[#7C50BD]"
            },
            {
              h: "Enterprise-Level Software Development",
              p: "Our team develops cutting-edge enterprise software that is customized to meet all your specific needs, ensuring scalability, performance, and seamless integration.",
              bg: "bg-[linear-gradient(90deg,rgba(0,0,0,0)_20%,#BD6650_50%,rgba(0,0,0,0)_80%)]",
              bluredBg: "bg-[#BD6650]"
            },
            {
              h: "Mobile App Development",
              p: "Whether you're looking to create an Android or iOS app, our mobile app development service offers end-to-end solutions that cater to all your business needs.",
              bg: "bg-[linear-gradient(90deg,rgba(0,0,0,0)_20%,#50A6BD_50%,rgba(0,0,0,0)_80%)]",
              bluredBg: "bg-[#50A6BD]"
            },
            {
              h: "Web Application Development",
              p: "Our web application development service delivers innovative and robust solutions, ensuring your web apps are optimized for performance, security, and user experience.",
              bg: "bg-[linear-gradient(90deg,rgba(0,0,0,0)_20%,#7C50BD_50%,rgba(0,0,0,0)_80%)]",
              bluredBg: "bg-[#7C50BD]"
            },
            {
              h: "Staff Augmentation",
              p: "Hire our skilled professionals to strengthen your current team, enhance your project capabilities, and ensure faster project completion with expert assistance.",
              bg: "bg-[linear-gradient(90deg,rgba(0,0,0,0)_20%,#BD6650_50%,rgba(0,0,0,0)_80%)]",
              bluredBg: "bg-[#BD6650]"
            },
            {
              h: "Team Augmentation",
              p: "With our team augmentation service, you can bring in a complete team of experts who will work alongside you, tailored to meet the specific requirements of your project.",
              bg: "bg-[linear-gradient(90deg,rgba(0,0,0,0)_20%,#50A6BD_50%,rgba(0,0,0,0)_80%)]",
              bluredBg: "bg-[#50A6BD]"
            }
          ].map((a, i) => (
            <div key={i} className="relative">
              <div key={i} className="group relative overflow-hidden rounded-lg p-0.5">
                <div key={i} className="rounded-lg bg-[linear-gradient(90deg,#040404_0%,#000000_50%,#040404_100%)] p-8 text-center">
                  <h4 className="font-medium">{a.h}</h4>
                  <div className="mx-auto my-4 h-0.5 w-4/12 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#78787850_50%,rgba(0,0,0,0)_100%)]"></div>
                  <p className="text-secondary-foreground">{a.p}</p>
                </div>
                <div
                  className={cn(
                    "absolute left-0 top-0 -z-10 h-full w-full text-transparent transition-all duration-500 ease-out group-hover:[transform:skew(-90deg,-15deg)]",
                    a.bg
                  )}
                >
                  .
                </div>
              </div>
              <div
                className={cn(
                  "absolute left-1/2 top-1/2 -z-10 aspect-square h-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C50BD] blur-[50px]",
                  a.bluredBg
                )}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-24">
        <h1 className="mx-auto bg-main-gradient bg-clip-text text-center text-4xl font-bold italic text-transparent sm:w-min sm:whitespace-nowrap">
          Why Choose Us?
        </h1>
        <p className="mx-auto max-w-3xl py-5 text-center text-secondary-foreground">
          We stand out by offering tailored, AI-driven solutions that meet your unique needs and ensure lasting success.
        </p>
        <div className="grid grid-cols-2 gap-4 pt-8 lg:grid-cols-4 lg:gap-8">
          {[
            {
              i: "/images/choose-1.png",
              p: "Projects Completed!",
              h: 1245,
              bg: "bg-[linear-gradient(21.33deg,rgba(109,67,67,0.25)_14.04%,rgba(235,145,145,0.8)_50%,rgba(109,67,67,0.25)_85.96%)]"
            },
            {
              i: "/images/choose-2.png",
              p: "Team Members",
              h: 14,
              bg: "bg-[linear-gradient(21.33deg,rgba(45,45,113,0.25)_14.04%,rgba(90,90,225,0.8)_50%,rgba(45,45,113,0.25)_85.96%)]"
            },
            {
              i: "/images/choose-3.png",
              p: "Years Experience",
              h: 2,
              bg: "bg-[linear-gradient(21.33deg,rgba(0,59,89,0.25)_14.04%,rgba(0,118,178,0.8)_50%,rgba(0,59,89,0.25)_85.96%)]"
            },
            {
              i: "/images/choose-4.png",
              p: "Success Rate",
              h: 88,
              bg: "bg-[linear-gradient(21.33deg,rgba(102,109,37,0.25)_14.04%,rgba(203,218,73,0.8)_50%,rgba(102,109,37,0.25)_85.96%)]"
            }
          ].map((a, i) => (
            <div key={i} className={cn("rounded-xl p-[1px]", a.bg)}>
              <div className="h-full rounded-xl bg-background p-8">
                <div className="relative mx-auto w-min">
                  <div className="absolute left-1/2 top-1/2 aspect-square w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5A5AE199] blur-[30px] md:blur-[20px]">
                    .
                  </div>
                  <Image src={a.i} width={132} height={100} alt={a.p} className="max-w-20 md:max-w-none" />
                </div>
                <p className="mx-auto mt-4 w-min bg-[linear-gradient(90deg,#EB9191_0%,#C8EB87_100%)] bg-clip-text text-center text-3xl font-bold text-transparent md:mt-8 md:text-5xl">
                  {a.h}+
                </p>
                <p className="text-center text-xs text-secondary-foreground md:pt-4 md:text-base">{a.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-24">
        <h1 className="mx-auto bg-main-gradient bg-clip-text text-center text-4xl font-bold italic text-transparent sm:w-min sm:whitespace-nowrap">
          Behind the Work We Do!
        </h1>
        <p className="mx-auto max-w-3xl py-5 text-center text-secondary-foreground">
          For every project or task, we follow a streamlined model that keeps us organized and ensures we deliver high-quality service.
        </p>
        <div className="mx-auto grid max-w-screen-xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-12">
          {[
            {
              h: "Consultation and Requirements",
              l: ["Connect with an expert", "Understand the problem", "Gather requirements & Research"],
              bg: "bg-[linear-gradient(180deg,rgba(235,145,145,0.6)_0%,rgba(0,0,0,0.6)_100%)]"
            },
            {
              h: "Planning and Design",
              l: ["Offer a solution with a detailed plan", "Create a structured design", "Get approval for the design and structure"],
              bg: "bg-[linear-gradient(180deg,rgba(235,226,145,0.5)_0%,rgba(0,0,0,0.6)_100%)]"
            },
            {
              h: "Development",
              l: ["Select the perfect tech stack", "Deploy a specialized tech team", "Begin coding"],
              bg: "bg-[linear-gradient(180deg,rgba(145,235,154,0.6)_0%,rgba(0,0,0,0.6)_100%)]"
            },
            {
              h: "Testing, Launch, and Maintenance",
              l: ["Conduct alpha and beta testing", "Deploy and launch the product or service", "Maintain and continually improve"],
              bg: "bg-[linear-gradient(180deg,rgba(145,208,235,0.5)_0%,rgba(0,0,0,0.6)_100%)]"
            }
          ].map((a, i) => (
            <div key={i} className={cn("rounded-xl p-[1px]", a.bg)}>
              <div className="grid h-full grid-cols-[1fr_auto] items-start gap-4 rounded-xl bg-background p-6">
                <div>
                  <p className="font-medium md:text-lg">{a.h}</p>
                  <div className="grid grid-cols-[auto_1fr] items-center gap-2 pt-4">
                    {a.l.map((a, i) => (
                      <Fragment key={i}>
                        <div
                          className={cn(
                            "h-1.5 w-1.5 rounded-full",
                            i === 0 && "bg-[#BD875050]",
                            i === 1 && "bg-[#5A5AE150]",
                            i === 2 && "bg-[#00ABB250]"
                          )}
                        ></div>
                        <p className="text-sm text-secondary-foreground md:text-base">{a}</p>
                      </Fragment>
                    ))}
                  </div>
                </div>
                <p className={cn("bg-clip-text text-5xl font-bold text-transparent sm:text-8xl", a.bg)}>0{i + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-24">
        <h1 className="mx-auto bg-main-gradient bg-clip-text text-center text-4xl font-bold italic text-transparent sm:w-min sm:whitespace-nowrap">
          Stories of Achievement and Growth!
        </h1>
        <p className="mx-auto max-w-3xl pb-16 pt-5 text-center text-secondary-foreground">
          Our work speaks for itself, stories that show how we deliver impactful solutions, driving real results for clients.
        </p>
        <SuccessStoriesCarousel data={data} />
      </div>
    </>
  );
}
