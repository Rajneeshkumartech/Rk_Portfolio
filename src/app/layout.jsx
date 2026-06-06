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
  title: "Rajneesh Kumar | Full Stack Developer Portfolio",
  description: "Welcome to my portfolio. I build optimized full-stack web applications using the MERN & Next.js stack.",
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