'use client'

import CountUp from "react-countup"

const stats = [
    {
        num:'1',
        text:"Years of Learning"
    },
    {
        num:'4',
        text:"Full-Stack Projects"
    },{
        num:'8',
        text:"Tech Stack Skills"
    },{
        num:'100',
        text:"Agile & Open to Git Collaboration"
    },
]

const Stats = () => {
  return (
    <>
   <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
     <div className="container mx-auto">
<div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none" >{stats.map((item , index )=>{
return (  <div key={index} 
className="flex flex-1 gap-4 items-center justify-center xl:justify-start ">
    <CountUp
    end={item.num}
    duration={5}
    delay={2}
    className="text-4xl xl:text-6xl font-extrabold "
    />
<p className={`${item.text.length<15?"max-w-25":"max-w-37.5"} leading-snug text-white/80 `}  >{item.text} </p>
    </div>
)
})}</div>
    </div>
   </section>
    </>
  )
}

export default Stats

