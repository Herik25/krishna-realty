"use client";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import CustomAccordian from "@/components/custom/CustomAccordian";
import { Button } from "@/components/ui/button";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Blogs() {
  return (
    <div>
      <Header />
      <section className="relative w-full h-[calc(100vh-5rem)] bg-background text-center px-4 grid place-items-center">
        <div className="text-center text-black">
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Insights, Ideas &{" "}
            <span className="bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] bg-clip-text text-transparent">
              Industry Trends
            </span>
          </h1>
          <p className="mt-6 text-xl sm:text-2xl font-light max-w-3xl mx-auto">
            Stay updated with the latest articles, tips, and news. From product
            launches to tech deep-dives, discover what’s shaping the future.
          </p>
        </div>
      </section>

      <section className="pt-10 pb-20 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
            <span className="font-semibold text-lg text-primary mb-2 block">
              Our Blogs
            </span>
            <h2
              className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
            >
              Our Recent News
            </h2>
            <p className="text-base text-body-color">
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="bg-background border border-black rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  height={224}
                  width={400}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                    {blog.date}
                  </span>
                  <h3 className="text-xl font-semibold text-black mb-2 hover:text-primary transition-colors duration-200 cursor-pointer">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-700 mb-4">
                    {blog.description}
                  </p>
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="text-sm text-black font-medium border border-black py-2 px-4 rounded-full"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
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
