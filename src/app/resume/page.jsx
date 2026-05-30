'use client'

import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa"
import { SiExpress, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si"

const about = {
  title: "About Me",
  description: "Results-driven Full Stack Developer with expertise in MERN stack and Next.js. Skilled in developing scalable web applications, ensuring responsive UI/UX, and integrating secure authentication systems. Passionate about coding, problem-solving, and delivering high-quality software solutions",

  info : [
    {
      fieldName : "Name",
      fieldValue : "Rajneesh Kumar"
    },
    {
      fieldName : "Email",
      fieldValue : "rajneeshkumar.tech@gmail.com"
    },
    {
      fieldName : "Location",
      fieldValue : "New Delhi, India"
    },
    {
      fieldName : "Phone",
      fieldValue : "(+91) 9999591445"
    },
    {
      fieldName : "Nationality",
      fieldValue : "Indian"
    },
   {
      fieldName : "Languages",
      fieldValue : "English, Hindi, Bhojpuri"
   },{
      fieldName : "Freelance",
      fieldValue : "Available"
   }
  ]
}

const experience = {
  icon : "👨‍💻 ",
  title : "Experience",
  description : "I have worked on various projects, both personal and professional, that have allowed me to apply my skills in real-world scenarios. I have experience in developing web applications using the MERN stack, creating responsive user interfaces, and implementing authentication systems. I am passionate about coding and continuously learning new technologies to enhance my skills and deliver high-quality software solutions.",
  items : [
    {
      title : "Full Stack Developer",
      company : "Tech Solutions Inc.",
      duration : "Jan 2022 - Present",
      description : "Developed and maintained web applications using the MERN stack, ensuring responsive design and optimal performance. Collaborated with cross-functional teams to deliver high-quality software solutions that met client requirements."
    }
  ]
}

const education = {
  icon : "🎓 ",
  title : "My Education",
  description : "I have a strong foundation in computer science and software engineering principles. I hold a degree in Computer Science and have completed several courses in web development, database management, and software engineering.",
  items : [
    {
      institution : "MSIET",
      degree : "Bachelor of Technology in Computer Science & Engineering",
      duration : "2023 - 2026"
    },
    {
      institution : "Udemy",
      degree : "Full Stack Web Development",
      duration : "2025",
    },
    {
      institution : "Ducat",
      degree : "Web Development",
      duration : "2023 - 2024",
    },{
      institution : "GBPIT",
      degree : "Diploma in Engineering",
      duration : "2019 - 2021"
    },{
      institution : "Industrial Training Institute",
      degree : "Computer Operator and Programming Assistant",
      duration : "2018 - 2019"
    }
  ]
}

const skills = {
  icon : "🛠️ " ,
  title : "My Skills",
  description : "I possess a diverse skill set that includes proficiency in the MERN stack (MongoDB, Express.js, React.js, Node.js), Next.js, and various front-end technologies. I am adept at creating responsive user interfaces",
  skillList : [
   {
    icon : <FaHtml5 />,
    name : "HTML5"
   },{
    icon : <FaCss3/>,
    name : "CSS3"
   },{
    icon : <FaJs/>,
    name : "JavaScript"
   },{
    icon : <FaReact/>,
    name : "React.js"
   },{
    icon : <SiNextdotjs/>,
    name : "Next.js"
   },{
    icon : <SiTailwindcss/>,
    name : "Tailwind CSS"
   },{
    icon : <FaNodeJs/>,
    name : "Node.js"
   },{
    icon : <SiMongodb/>,
    name : "MongoDB"
   },{
    icon : <SiExpress/>,
    name : "Express.js"
   }
  ]
}

import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"

const Resume = () => {
  return (
   <>
  <motion.div
  initial={{opacity : 0}}
  animate={{opacity : 1, transition : { delay : 2.4, duration : 0.4 , ease : "easeIn"}}}
  className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
  >
<div className="container mx-auto">
  <Tabs 
  defaultValue="about" 
  className="flex flex-col xl:flex-row gap-[60px]" > 
    <TabsList className="flex flex-col w-full max-w-95 mx-auto xl:mx-0 gap-6 " >
      <TabsTrigger value = "about" >About</TabsTrigger>
      <TabsTrigger value = "experience" >Experience</TabsTrigger>
      <TabsTrigger value = "education" >Education</TabsTrigger>
      <TabsTrigger value = "skills" >Skills</TabsTrigger>
    </TabsList>

    {/* content */}
  <div className="min-h-[70vh] w-full">
{/* About */}
<TabsContent value = "about" className="w-full ">
  About
</TabsContent>

{/* experience  */}
<TabsContent value = "experience" className="w-full ">
  <div className="flex flex-col text-center gap-7 xl:text-left" >
    <h3 className="text-4xl font-bold" >{experience.title}</h3>
    <p className="max-w-150 text-white/60 mx-auto xl:mx-0">{experience.description}</p>
    <ScrollArea className = "h-100">
<ul>
  {
    experience.items.map((item, index) =>{
      return  <li key={index}>
         <span>
        {item.duration}
         </span>
         
        </li>
    })
  }
</ul>
    </ScrollArea>

  </div>
</TabsContent>

{/* Education */}
<TabsContent value = "education" className="w-full ">
  Education
</TabsContent>

{/* Skills */}
<TabsContent value = "skills" className="w-full ">
  Skills
</TabsContent>
  </div>
     </Tabs>


</div>
  </motion.div>
   </>
  )
}

export default Resume