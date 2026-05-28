"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { BsArrowDownRight } from "react-icons/bs";
const services = [
  {
    num: "01",
    title: "Frontend Development",
    desc: "Creating responsive, interactive, and user-friendly web interfaces using React and modern CSS frameworks. Bringing UI designs to life with clean code.",
    href: "#",
  },
  {
    num: "02",
    title: "Backend & API Development",
    desc: "Building robust server-side logic, RESTful APIs, and managing databases using Node.js, Express, and MongoDB. Ensuring secure and fast data handling.",
    href: "#",
  },
  {
    num: "03",
    title: "Full-Stack Web Apps",
    desc: "eveloping end-to-end web applications from scratch. Integrating seamless frontend experiences with powerful backend systems.",
    href: "#",
  },
  {
    num: "04",
    title: "Performance Optimization / Bug Fixing",
    desc: "Optimizing website loading speed, fixing complex layout or logical bugs, and ensuring smooth state management across the application.",
    href: "#",
  },
];

const Services = () => {
  return (
    <>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-15"
          >
            {services.map((service, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-1 flex-col gap-6 group justify-center"
                >
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-transparent text-outline text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="w-17.5 h-17.5 rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-3xl text-primary" />
                    </Link>
                  </div>
                  {/* title */}
                    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                      {service.title}
                    </h2>
                    {/* description */}
                    <p className="text-white/60">{service.desc}</p>
                    {/* border */}
                    <div className="border-b border-white/20 w-full"></div>
                  
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
