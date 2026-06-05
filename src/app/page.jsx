"use client";

import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    // Fixed: Full screen flex height restriction taaki single viewport me set rahe
    <section className="w-full lg:h-[calc(100vh-140px)] flex flex-col justify-between py-4 xl:py-0 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 flex-1 flex flex-col justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 xl:gap-0 w-full">
          {/* Text block */}
          <div className="text-center lg:text-left order-2 lg:order-0 max-w-[540px]">
            <span className="text-xs md:text-sm tracking-[0.2em] text-white/60 uppercase font-mono mb-1 block">
              Web Developer
            </span>
            {/* Fixed: Font scaling dynamically locked to prevent screen pushing */}
            <h1 className="text-3lg md:text-5xl lg:text-[46px] font-semibold leading-tight my-2 text-white">
              Hello I&apos;m <br />
              <span className="text-accent text-outline-hover">
                Rajneesh Kumar
              </span>
            </h1>
            <p className="mb-6 text-xs md:text-sm text-white/60 max-w-[440px] mx-auto lg:mx-0 leading-relaxed tracking-wide">
              Breaking the web, fixing the web, and making it better. I&apos;m a
              MERN stack explorer turning imagination into interactive reality.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6">
              <Link
                href="/resume/Rajneesh_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 border border-accent text-accent bg-transparent hover:bg-accent hover:text-primary transition-all duration-300 rounded-full px-5 py-3.5 text-xs font-semibold uppercase tracking-wider"
                >
                  <span>View CV</span>
                  <FiDownload className="text-base" />
                </Button>
              </Link>

              <div className="flex items-center justify-center">
                <Social
                  containerStyles="flex gap-4"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-sm hover:text-primary hover:bg-accent transition-all duration-500 bg-transparent"
                />
              </div>
            </div>
          </div>

          {/* Photo block */}
          <div className="order-1 lg:order-0 flex items-center justify-center lg:pr-4">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats Section pinned properly at the bottom */}
      {/* <div className="w-full mt-4 lg:mt-0 lg:pb-4"><Stats /></div> */}
    </section>
  );
};

export default Home;
