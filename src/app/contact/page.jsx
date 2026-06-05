"use client";
import { sendEmail } from "./actions";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "9999591445",
    link: "tel:9999591445",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "rajneeshkumar.tech@gmail.com",
    link: "mailto:rajneeshkumar.tech@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Delhi, India",
    link: "https://maps.google.com/?q=Delhi, India",
  },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: "", isError: false });
  const [selectedService, setSelectedService] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Page refresh hone se rokna
    setLoading(true);
    setStatusMessage({ text: "", isError: false });

    // Form ka saara data ak इकट्ठा karna
    const formData = new FormData(e.target);
    formData.append("service", selectedService); // Select ka data alag se add kiya

    // Backend function ko call karna
    const result = await sendEmail(formData);

    setLoading(false);

    if (result.success) {
      setStatusMessage({ text: "Message sent successfully! 🎉", isError: false });
      e.target.reset(); // Form ko clear karna
      setSelectedService(""); // Dropdown reset karna
    } else {
      setStatusMessage({ text: result.error || "Failed to send message.", isError: true });
    }
  };

  

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.0, duration: 0.4, ease: "easeIn" },
      }}
      // Safe viewport boundaries
      className="min-h-[calc(100vh-140px)] xl:h-[calc(100vh-160px)] flex items-center py-2 xl:py-0 overflow-hidden"
    >
      {/* Fixed: Added robust horizontal responsive padding (px-4 to xl:px-12) to prevent edge touching */}
      <div className="container mx-auto px-4 md:px-8 xl:px-12 w-full">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center justify-between w-full">
          {/* Left Side: Form Container */}
          <div className="w-full lg:w-[55%] order-2 lg:order-0">
            {/* Fixed: Internal padding balanced to p-5 md:p-6 for internal breathing space */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-5 md:p-6 bg-[#27272c] rounded-xl w-full shadow-xl">
              <div>
                <h3 className="text-xl md:text-2xl text-accent font-semibold mb-0.5">
                  Let&apos;s work together!
                </h3>
                <p className="text-white/60 text-[11px] md:text-xs leading-relaxed">
                  Feel free to reach out if you have any questions or would like
                  to collaborate.
                </p>
              </div>

              {/* Inputs Grid - Balanced gaps */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-0.5">
                <Input
                  required
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="h-9 bg-primary/40 border-white/10 text-xs text-white placeholder:text-white/40 focus:border-accent transition-all px-4"
                />
                <Input
                  required
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="h-9 bg-primary/40 border-white/10 text-xs text-white placeholder:text-white/40 focus:border-accent transition-all px-4"
                />
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="h-9 bg-primary/40 border-white/10 text-xs text-white placeholder:text-white/40 focus:border-accent transition-all px-4"
                />
                <Input
                  required
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  className="h-9 bg-primary/40 border-white/10 text-xs text-white placeholder:text-white/40 focus:border-accent transition-all px-4"
                />
              </div>

              {/* Select Service Dropdown */}
              <Select onValueChange={(value) => setSelectedService(value)} value={selectedService}>
                <SelectTrigger className="w-full h-9 bg-primary/40 border-white/10 text-xs text-white/60 focus:border-accent transition-all px-4">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="bg-[#27272c] border-white/10 text-white">
                  <SelectGroup>
                    <SelectLabel className="text-white/40 text-[11px]">
                      Select a service
                    </SelectLabel>
                    <SelectItem
                      value="Frontend Development"
                      className="text-xs"
                    >
                      Frontend Development
                    </SelectItem>
                    <SelectItem
                      value="Backend & API Development"
                      className="text-xs"
                    >
                      Backend & API Development
                    </SelectItem>
                    <SelectItem value="Full-Stack Web Apps" className="text-xs">
                      Full-Stack Web Apps
                    </SelectItem>
                    <SelectItem
                      value="Performance Optimization / Bug Fixing"
                      className="text-xs"
                    >
                      Performance Optimization / Bug Fixing
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Message Box */}
              <Textarea
                name="message"
                placeholder="Your Message"
                required
                className="min-h-20 lg:min-h-20 max-h-24 bg-primary/40 border-white/10 text-xs text-white placeholder:text-white/40 focus:border-accent resize-none transition-all px-4 py-2"
              />

              {/* Status Message Label */}
              {statusMessage.text && (
                <p className={`text-xs font-medium ${statusMessage.isError ? "text-red-500" : "text-accent"}`}>
                  {statusMessage.text}
                </p>
              )}

              {/* Submit Button */}
             {/* Submit Button with Loading State */}
              <Button
                type="submit"
                disabled={loading}
                className="self-start bg-accent hover:bg-accent-hover text-primary font-bold text-[11px] uppercase tracking-wider rounded-full px-6 h-9 transition-all duration-300 mt-0.5 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          {/* Right Side: Contact Info Sidebar */}
          {/* Fixed: Right side padding layout alignment secured */}
          <div className="w-full lg:w-[40%] flex items-center lg:justify-end order-1 lg:order-0 mb-4 lg:mb-0 lg:pl-6">
            <ul className="flex flex-col gap-4 xl:gap-5 w-full max-w-80 lg:max-w-none">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-4 group">
                  <a
                    href={item.link}
                    target={item.title === "Location" ? "_blank" : "_self"} // Location ko alag tab me kholne ke liye
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group cursor-pointer w-fit"
                  >
                  <div className="w-10 h-10 xl:w-11 xl:h-11 bg-[#27272c] rounded-full flex items-center justify-center text-base xl:text-lg text-accent shadow-md shrink-0 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-white/40 text-[10px] uppercase tracking-widest font-mono leading-none mb-0.5">
                      {item.title}
                    </p>
                    <h4 className="text-xs md:text-sm text-white font-medium break-all leading-tight">
                      {item.description}
                    </h4>
                  </div></a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
