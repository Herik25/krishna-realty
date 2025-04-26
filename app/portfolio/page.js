"use client";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import SkillSection from "@/components/custom/SkillSection";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

const soleSellingClients = [
  {
    name: "Aurum One",
    logo: "aurum-one.svg",
    images: Array.from({ length: 20 }, (_, i) => `/images/site-image.jpg`),
  },
  {
    name: "Aurum Residency",
    logo: "aurum-residency.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-2-${i + 1}.jpg`
    ),
  },
  {
    name: "Opec Heights",
    logo: "opec-heights.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-3-${i + 1}.jpg`
    ),
  },
  {
    name: "Prabhu Group",
    logo: "prabhu-group.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-4-${i + 1}.jpg`
    ),
  },
  {
    name: "Prabhu Heights",
    logo: "prabhu-heights.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-5-${i + 1}.jpg`
    ),
  },
  {
    name: "Prabhu Navan 01",
    logo: "prabhu-navan-01.svg",
    images: Array.from({ length: 20 }, (_, i) => `/images/site-image.jpg`),
  },
  //   {
  //     name: "Prabhu Navan 02",
  //     logo: "prabhu-navan-02.svg",
  //     images: Array.from(
  //       { length: 20 },
  //       (_, i) => `/images/client-2-${i + 1}.jpg`
  //     ),
  //   },
  {
    name: "Prabhu Sneh",
    logo: "prabhu-sneh.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-3-${i + 1}.jpg`
    ),
  },
  {
    name: "RB Elements",
    logo: "rb-elements.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-4-${i + 1}.jpg`
    ),
  },
  {
    name: "Saven Sarface",
    logo: "saven-sarface.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-5-${i + 1}.jpg`
    ),
  },
  {
    name: "Saven Serena",
    logo: "saven-serena.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-2-${i + 1}.jpg`
    ),
  },
  {
    name: "Sharnam Heights",
    logo: "sharnam-heights.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-3-${i + 1}.jpg`
    ),
  },
  {
    name: "The Taurus",
    logo: "the-taurus.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-4-${i + 1}.jpg`
    ),
  },
  {
    name: "West Gate-2",
    logo: "west-gate-2.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-5-${i + 1}.jpg`
    ),
  },
];

const marketingClients = [
  {
    name: "Sanskar Elegance",
    logo: "sanskar-elegance.svg",
    images: Array.from({ length: 20 }, (_, i) => `/images/site-image.jpg`),
  },
  {
    name: "Sanskar Heights",
    logo: "sanskar-heights.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-2-${i + 1}.jpg`
    ),
  },
  {
    name: "Sanskar Sanidhya",
    logo: "sanskar-sanidhya.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-3-${i + 1}.jpg`
    ),
  },
  {
    name: "One Mavdi",
    logo: "one-mavdi.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-4-${i + 1}.jpg`
    ),
  },
  {
    name: "The One World",
    logo: "the-one-world.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-5-${i + 1}.jpg`
    ),
  },
  {
    name: "RK Group",
    logo: "rk-group.svg",
    images: Array.from({ length: 20 }, (_, i) => `/images/site-image.jpg`),
  },
  //   {
  //     name: "Prabhu Navan 02",
  //     logo: "prabhu-navan-02.svg",
  //     images: Array.from(
  //       { length: 20 },
  //       (_, i) => `/images/client-2-${i + 1}.jpg`
  //     ),
  //   },
  {
    name: "Sopan Hill",
    logo: "sopan-hill.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-3-${i + 1}.jpg`
    ),
  },
  {
    name: "Sopan Heights",
    logo: "sopan-heights.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-4-${i + 1}.jpg`
    ),
  },
  {
    name: "Sopan Luxuria",
    logo: "sopan-luxuria.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-5-${i + 1}.jpg`
    ),
  },
  {
    name: "Pride Signate",
    logo: "pride-signate.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-2-${i + 1}.jpg`
    ),
  },
  {
    name: "Pride Aura",
    logo: "pride-aura.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-3-${i + 1}.jpg`
    ),
  },
  {
    name: "Marrygold Square",
    logo: "marrygold-square.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-4-${i + 1}.jpg`
    ),
  },
  {
    name: "Aalap Astoria",
    logo: "aalap-astoria.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-5-${i + 1}.jpg`
    ),
  },
  {
    name: "Sopan Elegance",
    logo: "sopan-elegance.svg",
    images: Array.from(
      { length: 20 },
      (_, i) => `/images/client-5-${i + 1}.jpg`
    ),
  },
];

export default function Portfolio() {
  const [togller, setTogller] = useState(false);
  const [selectedSoleSellingClient, setSelectedSoleSellingClient] = useState(
    soleSellingClients[0]
  );
  const [selectedMarketingClient, setSelectedMarketingClient] = useState(
    marketingClients[0]
  );

  return (
    <div className="font-inter">
      <Header />
      <section className="mx-auto grid h-[calc(100vh-7rem)] max-h-[800px] max-w-5xl place-items-center px-4 text-center">
        <div className="text-center text-black">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
              Krishna Realty
            </span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl font-light max-w-3xl mx-auto">
            Specializing in Sole Selling & Consultancy Services, Krishna Realty
            empowers builders, developers, and investors to unlock growth and
            build lasting partnerships.
          </p>
        </div>
      </section>

      <SkillSection />

      {/* Portfolio Section */}
      <section className="my-16 lg:my-24 max-w-5xl mx-auto bg-background">
        <div className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] h-12 w-[14rem] rounded-full mx-auto mb-8">
          <div
            className="relative flex cursor-pointer items-center w-full h-full justify-between rounded-full bg-background p-1 px-3 transition-all duration-300"
            onClick={() => setTogller(!togller)}
          >
            <div>Sole Selling</div>
            <div>Marketing</div>
            <div
              className={cn(
                "absolute left-1 h-10 w-[6.7rem] rounded-full bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] p-[1px] transition-all duration-300",
                togller ? "translate-x-0" : "translate-x-full"
              )}
            >
              <div className="bg-transparent flex h-full w-full items-center justify-center rounded-full text-white">
                {togller ? "Sole Selling" : "Marketing"}
              </div>
            </div>
          </div>
        </div>

        {togller ? (
          <div className="px-4">
            <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-center">
              <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
                Our Clients
              </span>
            </h2>
            <p className="mt-2 text-lg sm:text-xl font-light text-center">
              Our awesome clients we've had the pleasure to work with!
            </p>

            {/* Client Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 mt-10">
              {soleSellingClients.map((client, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-md transition-all duration-300 cursor-pointer flex items-center justify-center ${
                    selectedSoleSellingClient?.name === client.name
                      ? "border-2 border-[#6228d7] shadow-lg"
                      : ""
                  }`}
                  onClick={() => setSelectedSoleSellingClient(client)}
                >
                  <Image
                    src={`/images/${client.logo}`}
                    alt={client.name}
                    height={150}
                    width={150}
                    className={`object-contain hover:grayscale-0 transition-all duration-300 w-28 h-28 ${
                      selectedSoleSellingClient?.name === client.name
                        ? "grayscale-0"
                        : "grayscale"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Selected Client Images */}
            {selectedSoleSellingClient && (
              <div className="w-full mt-12">
                {/* <h3 className="text-2xl font-semibold mb-6 text-center">
                  {selectedClient.name.replace("-", " ").toUpperCase()}{" "}
                  Portfolio
                </h3> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4">
                  {selectedSoleSellingClient.images.map((img, idx) => (
                    <div key={idx} className="overflow-hidden rounded-md">
                      <Image
                        src={img}
                        alt={`Portfolio ${idx + 1}`}
                        height={300}
                        width={500}
                        className="object-cover w-full h-full max-h-60 sm:max-h-72 md:max-h-80 transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="px-4">
            <h2 className="text-2xl sm:text-4xl font-bold leading-tight text-center">
              <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
                Our Clients
              </span>
            </h2>
            <p className="mt-2 text-lg sm:text-xl font-light text-center">
              Our awesome clients we've had the pleasure to work with!
            </p>

            {/* Client Logos */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-10 mt-10">
              {marketingClients.map((client, index) => (
                <div
                  key={index}
                  className={`p-2 rounded-md transition-all duration-300 cursor-pointer flex items-center justify-center ${
                    selectedMarketingClient?.name === client.name
                      ? "border-2 border-[#6228d7] shadow-lg"
                      : ""
                  }`}
                  onClick={() => setSelectedMarketingClient(client)}
                >
                  <Image
                    src={`/images/${client.logo}`}
                    alt={client.name}
                    height={150}
                    width={150}
                    className={`object-contain hover:grayscale-0 transition-all duration-300 w-28 h-28 ${
                      selectedMarketingClient?.name === client.name
                        ? "grayscale-0"
                        : "grayscale"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Selected Client Images */}
            {selectedMarketingClient && (
              <div className="w-full mt-12">
                {/* <h3 className="text-2xl font-semibold mb-6 text-center">
                  {selectedClient.name.replace("-", " ").toUpperCase()}{" "}
                  Portfolio
                </h3> */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-4">
                  {selectedMarketingClient.images.map((img, idx) => (
                    <div key={idx} className="overflow-hidden rounded-md">
                      <Image
                        src={img}
                        alt={`Portfolio ${idx + 1}`}
                        height={300}
                        width={500}
                        className="object-cover w-full h-full max-h-60 sm:max-h-72 md:max-h-80 transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
