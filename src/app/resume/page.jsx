"use client";

import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About Me",
  description:
    "Results-driven Full Stack Developer with expertise in MERN stack and Next.js. Skilled in developing scalable web applications, ensuring responsive UI/UX, and integrating secure authentication systems.",
  info: [
    { fieldName: "Name", fieldValue: "Rajneesh Kumar" },
    { fieldName: "Email", fieldValue: "rajneeshkumar.tech@gmail.com" },
    { fieldName: "Location", fieldValue: "New Delhi, India" },
    { fieldName: "Phone", fieldValue: "(+91) 9999591445" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Languages", fieldValue: "English, Hindi, Bhojpuri" },
    { fieldName: "Freelance", fieldValue: "Available" },
  ],
};

const experience = {
  icon: "👨‍💻 ",
  title: "My Experience",
  description:
    "I have worked on various projects, both personal and professional, that have allowed me to apply my skills in real-world scenarios using the MERN stack.",
  items: [
    {
      position: "Production Officer",
      company: "ACC LTD",
      duration: "May 2023 - Mar 2025",
    },
    {
      position: "Engineer Trainee",
      company: "ACC LTD",
      duration: "Apr 2022 - May 2023",
    },
  ],
};

const education = {
  icon: "🎓 ",
  title: "My Education",
  description:
    "I have a strong foundation in computer science and software engineering principles, holding a degree and multiple certifications.",
  items: [
    {
      institution: "MSIET",
      degree: "Bachelor of Technology in Computer Science & Engineering",
      duration: "2023 - 2026",
    },
    {
      institution: "Udemy",
      degree: "Full Stack Web Development",
      duration: "2025",
    },
    {
      institution: "Ducat",
      degree: "Web Development",
      duration: "2023 - 2024",
    },
    {
      institution: "GBPIT",
      degree: "Diploma in Engineering",
      duration: "2019 - 2021",
    },
    {
      institution: "Industrial Training Institute",
      degree: "Computer Operator and Programming Assistant",
      duration: "2018 - 2019",
    },
  ],
};

const skills = {
  icon: "🛠️ ",
  title: "My Skills",
  description:
    "I possess a diverse skill set that includes proficiency in the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, and Tailwind CSS.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiExpress />, name: "Express.js" },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      // Fixed: Height target tightened and py lowered
      className="min-h-[70vh] flex items-center justify-center py-2 xl:py-0"
    >
      <div className="container mx-auto px-4 md:px-0">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-6 xl:gap-10"
        >
          {/* Sidebar Tabs Buttons */}
          <TabsList className="flex flex-col w-full max-w-[260px] mx-auto xl:mx-0 gap-3">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Content Panels Area */}
          <div className="w-full min-h-[45vh]">
            
            {/* Experience Content */}
            <TabsContent value="experience" className="max-w-4xl w-full m-0">
              <div className="flex flex-col gap-3 text-center xl:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold">{experience.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-[650px] mx-auto xl:mx-0">
                  {experience.description}
                </p>
                {/* Fixed: Reduced height to strictly fit within standard viewports */}
                <ScrollArea className="h-[270px] pr-2 mt-1">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 p-1">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[130px] py-3 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-0.5 shadow-md"
                      >
                        <span className="text-accent text-xs font-medium">{item.duration}</span>
                        <h3 className="text-base max-w-[260px] min-h-[38px] flex items-center text-center lg:text-left font-semibold leading-tight">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-accent rounded-full"></span>
                          <p className="text-white/60 text-xs">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Content */}
            <TabsContent value="education" className="max-w-4xl w-full m-0">
              <div className="flex flex-col gap-3 text-center xl:text-left">
                <h3 className="text-2xl lg:text-3xl font-bold">{education.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-[650px] mx-auto xl:mx-0">
                  {education.description}
                </p>
                {/* Fixed: Reduced scroll container height */}
                <ScrollArea className="h-[270px] pr-2 mt-1">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 p-1">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[130px] py-3 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-0.5 shadow-md"
                      >
                        <span className="text-accent text-xs font-medium">{item.duration}</span>
                        <h3 className="text-base min-h-[38px] flex items-center text-center lg:text-left font-semibold leading-tight line-clamp-2">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="w-1 h-1 bg-accent rounded-full"></span>
                          <p className="text-white/60 text-xs">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Content */}
            <TabsContent value="skills" className="max-w-4xl h-full w-full m-0">
              <div className="flex flex-col gap-3 text-center xl:text-left">
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl lg:text-3xl font-bold">{skills.title}</h3>
                  <p className="text-white/80 text-sm leading-relaxed max-w-[650px] mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <TooltipProvider duration={100}>
                  {/* Fixed: Reduced height for maximum bounds control */}
                  <ScrollArea className="h-[240px] pr-2 mt-1">
                    <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2.5 p-1">
                      {skills.skillList.map((skill, index) => (
                        <li key={index}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[90px] bg-[#232329] rounded-xl flex items-center justify-center group shadow-md">
                              <div className="text-4xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize text-xs font-medium">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </TooltipProvider>
              </div>
            </TabsContent>

            {/* About Content */}
            <TabsContent value="about" className="max-w-4xl text-center xl:text-left w-full m-0">
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl lg:text-3xl font-bold">{about.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed max-w-[650px] mx-auto xl:mx-0 font-normal">
                  {about.description}
                </p>
                
                {/* Fixed: Extra sleek grid with reduced vertical padding */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 max-w-[760px] mx-auto xl:mx-0 text-left mt-1">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start md:items-center justify-start gap-2 md:gap-4 flex-col sm:flex-row border-b border-white/5 pb-0.5 md:pb-0 md:border-none"
                    >
                      <span className="text-white/60 text-xs min-w-[80px] block">
                        {item.fieldName}
                      </span>
                      <span className="text-sm md:text-base font-medium text-white break-all">
                        {item.fieldValue}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;