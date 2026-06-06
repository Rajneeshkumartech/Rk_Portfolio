import Header from "@/components/Header";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { JetBrains_Mono } from "next/font/google";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://rk-portfolio.vercel.app"),
  title: "Rajneesh Kumar | Full Stack Developer Portfolio",
  description: "Official portfolio of Rajneesh Kumar, a passionate Full Stack Web Developer specializing in MERN stack, Next.js, and optimized web applications.",
  keywords: ["Rajneesh Kumar", "Rajneesh Kumar Tech", "Full Stack Developer", "Next.js Portfolio", "MERN Stack Developer India" ,"Web Developer Portfolio", "React Developer", "Node.js Developer", "JavaScript Developer", "Web Development Services", "Contact Rajneesh Kumar" , "web developer"],
  authors: [{ name: "Rajneesh Kumar" }],
  openGraph: {
    title: "Rajneesh Kumar | Full Stack Developer Portfolio",
    description: "Explore my latest web development projects, skills, and experience.",
    url: "https://rk-portfolio.vercel.app", // Yahan apni live Vercel link daal dena baad me
    siteName: "Rajneesh Kumar Portfolio",
    images: [
      {
        url: "/assets/portfolio-preview.png", 
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} min-h-screen w-full antialiased`}>
      <body className="bg-[#1c1c22] text-white m-0 min-h-screen w-full overflow-x-hidden">
        <TooltipProvider>
          <div className="flex flex-col min-h-screen w-full lg:px-20 px-4 overflow-x-hidden">
            <Header />
            <StairTransition />
            <PageTransition>
              <main className="w-full flex-1">
                {children}
              </main>
            </PageTransition>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}