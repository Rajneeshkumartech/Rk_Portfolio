"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Photo = () => {
  return (
    <div className="w-[280px] h-[280px] xl:w-[380px] xl:h-[380px] relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
        }}
        className="w-full h-full relative flex items-center justify-center"
      >
        {/* Image Frame Layer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.4, delay: 2.4, ease: "easeInOut" },
          }}
          className="absolute w-[88%] h-[88%] mix-blend-lighten z-10"
        >
          <Image
            src="/assets/profile1.png"
            alt="Profile Image"
            priority
            quality={100}
            fill
            sizes="(max-width: 1280px) 200px, 300px"
            className="object-contain rounded-full"
          />
        </motion.div>

        {/* Precise Spinning Circle */}
        <svg
          className="w-full h-full absolute inset-0 z-0 select-none pointer-events-none"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="230"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [0, 360], // Fixed: 0 se 360 full frame rotate hoga
            }}
            transition={{
              duration: 10, // Fixed: Total 20s cycle (10s forward, 10s reverse)
              repeat: Infinity,
              repeatType: "reverse", // Fixed: Dobara reverse active kiya reverse direction ke liye
              ease: "easeInOut", // Fixed: Isse reverse aate waqt smooth aur slow motion feel hoga
            }}
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Photo;