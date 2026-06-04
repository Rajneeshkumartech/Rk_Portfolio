'use client'

import CountUp from "react-countup"

const stats = [
  {
    num: 1,
    text: "Years of Learning"
  },
  {
    num: 4,
    text: "Full-Stack Projects"
  },
  {
    num: 8,
    text: "Tech Stack Skills"
  },
  {
    num: 100,
    text: "Agile & Open to Git Collaboration"
  },
]

const Stats = () => {
  return (
    <>
      {/* Fixed: Bottom padding reduced to zero out additional layout overflows */}
      <section className="pt-2 pb-2 xl:pt-0 xl:pb-2">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[90vw] mx-auto xl:max-w-none">
            {stats.map((item, index) => {
              return (
                <div 
                  key={index} 
                  className="flex gap-2 md:gap-3 items-center justify-start xl:justify-start"
                >
                  <CountUp
                    end={item.num}
                    duration={4}
                    delay={1.5}
                    className="text-2xl md:text-4xl xl:text-5xl font-extrabold text-white"
                  />
                  <p className="text-white/70 text-xs md:text-sm leading-tight max-w-[110px] font-normal">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Stats;