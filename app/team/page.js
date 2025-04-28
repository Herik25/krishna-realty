import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import CustomAccordian from "@/components/custom/CustomAccordian";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Aarav Patel",
    role: "Founder & CEO",
    image: "/team/aarav.jpg",
  },
  {
    name: "Isha Mehta",
    role: "Head of Sales",
    image: "/team/isha.jpg",
  },
  {
    name: "Rohan Desai",
    role: "Marketing Manager",
    image: "/team/rohan.jpg",
  },
  {
    name: "Priya Shah",
    role: "Operations Lead",
    image: "/team/priya.jpg",
  },
];

export default function Team() {
  return (
    <div className="font-inter">
      <Header />
      <section className="mx-auto grid h-[calc(100vh-5rem)] max-h-[800px] max-w-5xl place-items-center px-4 text-center">
        <div className="text-center text-black">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
              Experts
            </span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl font-light max-w-3xl mx-auto">
            The passionate people behind Krishna Realty’s success. We&apos;re
            committed to delivering excellence in every partnership.
          </p>
        </div>
      </section>

      <section className="my-16 lg:my-24 px-4 max-w-5xl mx-auto">
        <div className="flex flex-col gap-16">
          {/* Team Member 1 */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image Left */}
            <div className="w-full md:w-1/2">
              <Image
                src="/images/bill-gates.png"
                alt="Aarav Patel"
                width={600}
                height={600}
                className="rounded-xl object-cover border border-black w-full h-auto"
              />
            </div>
            {/* Text Left */}
            <div className="text-center md:text-left flex-1">
              {/* Position */}
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
                Founder
              </p>

              {/* Name */}
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Bill Gates
              </h2>

              {/* Experience */}
              <p className="text-gray-500 text-base font-medium mb-4">
                8+ Years of Experience
              </p>

              {/* Short Description */}
              <p className="text-gray-600 mb-6">
                Qui irure exercitation esse nostrud reprehenderit officia aliqua
                dolore ad dolore esse. Reprehenderit laborum laboris anim quis
                mollit consectetur sint Lorem in nisi voluptate labore veniam
                voluptate. Et cupidatat consectetur voluptate ipsum ipsum
                consequat aliqua excepteur do irure pariatur eiusmod mollit.
              </p>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="#"
                  className="text-[#0A66C2] hover:text-[#004182] text-2xl"
                >
                  <Linkedin />
                </a>
                <a
                  href="#"
                  className="text-[#1DA1F2] hover:text-[#0d8de1] text-2xl"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  className="text-[#E1306C] hover:text-[#c2275b] text-2xl"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  className="text-[#1877F2] hover:text-[#0b63d2] text-2xl"
                >
                  <Facebook />
                </a>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-10">
            {/* Image Right */}
            <div className="w-full md:w-1/2">
              <Image
                src="/images/elon-musk.png"
                alt="Isha Mehta"
                width={600}
                height={600}
                className="rounded-xl object-cover border border-black w-full h-auto"
              />
            </div>
            {/* Text Left */}
            <div className="text-center md:text-left flex-1">
              {/* Position */}
              <p className="text-primary text-sm font-semibold uppercase tracking-widest mb-2">
                Head of Sales
              </p>

              {/* Name */}
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">Elon Musk</h2>

              {/* Experience */}
              <p className="text-gray-500 text-base font-medium mb-4">
                8+ Years of Experience
              </p>

              {/* Short Description */}
              <p className="text-gray-600 mb-6">
                Qui irure exercitation esse nostrud reprehenderit officia aliqua
                dolore ad dolore esse. Reprehenderit laborum laboris anim quis
                mollit consectetur sint Lorem in nisi voluptate labore veniam
                voluptate. Et cupidatat consectetur voluptate ipsum ipsum
                consequat aliqua excepteur do irure pariatur eiusmod mollit.
              </p>

              {/* Social Links */}
              <div className="flex justify-center md:justify-start gap-4">
                <a
                  href="#"
                  className="text-[#0A66C2] hover:text-[#004182] text-2xl"
                >
                  <Linkedin />
                </a>
                <a
                  href="#"
                  className="text-[#1DA1F2] hover:text-[#0d8de1] text-2xl"
                >
                  <Twitter />
                </a>
                <a
                  href="#"
                  className="text-[#E1306C] hover:text-[#c2275b] text-2xl"
                >
                  <Instagram />
                </a>
                <a
                  href="#"
                  className="text-[#1877F2] hover:text-[#0b63d2] text-2xl"
                >
                  <Facebook />
                </a>
              </div>
            </div>
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
