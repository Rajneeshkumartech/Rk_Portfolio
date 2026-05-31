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

// About Data
const about = {
  title: "About Me",
  description:
    "Results-driven Full Stack Developer with expertise in MERN stack and Next.js. Skilled in developing scalable web applications, ensuring responsive UI/UX, and integrating secure authentication systems. Passionate about coding, problem-solving, and delivering high-quality software solutions.",
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

// Experience Data
const experience = {
  icon: "👨‍💻 ",
  title: "My Experience",
  description:
    "I have worked on various projects, both personal and professional, that have allowed me to apply my skills in real-world scenarios. I have experience in developing web applications using the MERN stack, creating responsive user interfaces, and implementing authentication systems.",
  items: [
    {
      position: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      duration: "Jan 2022 - Present",
    },
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

// Education Data
const education = {
  icon: "🎓 ",
  title: "My Education",
  description:
    "I have a strong foundation in computer science and software engineering principles. I hold a degree in Computer Science and have completed several courses in web development, database management, and software engineering.",
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

// Skills Data
const skills = {
  icon: "🛠️ ",
  title: "My Skills",
  description:
    "I possess a diverse skill set that includes proficiency in the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, and various front-end technologies.",
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-16"
        >
          {/* Sidebar Tabs Buttons */}
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          {/* Content Panels Area */}
          <div className="min-h-[70vh] w-full">
            
            {/* Experience Content */}
            <TabsContent value="experience" className="max-w-4xl">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-[650px] mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] p-1">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent text-sm font-medium">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-semibold">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                          <p className="text-white/60 text-base">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education Content */}
            <TabsContent value="education" className="max-w-4xl">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-[650px] mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] p-1">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent text-sm font-medium">{item.duration}</span>
                        <h3 className="text-xl min-h-[60px] text-center lg:text-left font-semibold">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                          <p className="text-white/60 text-base">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills Content */}
            <TabsContent value="skills" className="max-w-4xl h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-[30px]">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-[650px] mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <TooltipProvider duration={100}>
                  <ScrollArea className="h-[320px]">
                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-1">
                      {skills.skillList.map((skill, index) => (
                        <li key={index}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize text-sm font-medium">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </TooltipProvider>
              </div>
            </TabsContent>

            {/* About Content (With Fixed Font Sizes & Grid Spacing) */}
            <TabsContent value="about" className="max-w-4xl text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                
                {/* Fixed Description Size and Height */}
                <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-[650px] mx-auto xl:mx-0 font-normal">
                  {about.description}
                </p>
                
                {/* Fixed Responsive Grid Layout */}
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-[720px] mx-auto xl:mx-0 text-left">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start xl:items-center justify-start gap-4 flex-col sm:flex-row"
                    >
                      {/* Fixed Label Alignment */}
                      <span className="text-white/60 text-sm md:text-base min-w-[100px] block">
                        {item.fieldName}
                      </span>
                      {/* Fixed Value Size */}
                      <span className="text-lg md:text-xl font-medium text-white break-words">
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