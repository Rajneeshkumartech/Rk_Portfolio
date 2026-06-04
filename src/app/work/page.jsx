"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Full Stack",
    title: "Project 1",
    description:
      "A secure password manager built with React, Node.js, and MongoDB. It allows users to store and manage their passwords securely, with features like encryption and multi-factor authentication.",
    stack: [{ name: "React Js" }, { name: "Node Js" }, { name: "MongoDB" }],
    name: "Secure Password Manager",
    image: "/work/thumb1.png",
    Live: "",
    Github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Project 2",
    description:
      "A finance dashboard built with React and Chart.js. It provides a visual representation of financial data, allowing users to track their investments and performance.",
    stack: [{ name: "React Js" }, { name: "Chart.js" }],
    name: "Finance Dashboard",
    image: "/work/thumb2.png",
    Live: "https://smart-paisa-tracker.vercel.app/",
    Github: "https://github.com/Rajneeshkumartech/Expense_Tracker",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiperInstance) => {
    const currentIndex = swiperInstance.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      // Fixed: Padding ko py-12 se kam karke py-4 ya py-6 kiya taaki vertical space bache
      className="min-h-[75vh] flex flex-col justify-center py-6 xl:py-0"
    >
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col lg:flex-row xl:gap-[30px] items-center">
          
          {/* Left Side: Project Details */}
          {/* Fixed: xl:h-[460px] hata diya taaki zabardasti bada box na bane */}
          <div className="w-full lg:w-[50%] flex flex-col justify-center order-2 lg:order-0 lg:pr-6">
            {/* gap-[30px] ko thoda compact karke gap-4 kiya taaki text upar na bhage */}
            <div className="flex flex-col gap-4">
              {/* Outline Number */}
              <div className="text-7xl lg:text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* Project Category */}
              <h2 className="text-3xl lg:text-[42px] font-bold leading-none text-white capitalize">
                {project.category} project
              </h2>
              {/* Project Description */}
              <p className="text-white/60 text-base lg:text-lg leading-relaxed">{project.description}</p>
              {/* Project Stack */}
              <ul className="flex gap-x-4 gap-y-2 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-lg text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* Border */}
              <div className="border-b border-white/20 my-2"></div>

              {/* Action Buttons */}
              <div className="flex gap-4 items-center">
                {project.Live && (
                  <Link href={project.Live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="h-[55px] w-[55px] rounded-full bg-white/5 flex items-center justify-center group border border-transparent hover:border-accent transition-all">
                          <BsArrowUpRight className="text-white text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}

                {project.Github && (
                  <Link href={project.Github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="h-[55px] w-[55px] rounded-full bg-white/5 flex items-center justify-center group border border-transparent hover:border-accent transition-all">
                          <BsGithub className="text-white text-2xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>GitHub Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Swiper / Image Mockup */}
          {/* Fixed: Grid structure balanced kiya taaki height windows ke bahar na jaye */}
          <div className="w-full lg:w-[50%] flex items-center mb-8 lg:mb-0">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="w-full h-auto rounded-xl"
              onSlideChange={handleSlideChange}
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={index} className="w-full">

                  <div>
                    <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10" ></div>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-[#1c1c22]">
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider button */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-1.25rem)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none " 
              BtnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[30px] h-[26px]  flex items-center justify-center border border-transparent hover:border-accent transition-all"
              />

            </Swiper>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Work;