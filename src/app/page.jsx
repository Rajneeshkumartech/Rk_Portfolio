import Photo from '@/components/Photo'
import Social from '@/components/Social'
import { Button } from '@/components/ui/button'
import React from 'react'
import { FiDownload } from 'react-icons/fi'

const Home = () => {
  return (
   <>
   <section className='h-full' > 
    <div className=' container mx-auto h-full' >
      <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24' >
        {/* text */}
        <div className='text-center xl:text-left'>
          <span className='text-xl' >Web Developer</span>
          <h1 className='h1 mb-6 '  >Hello i&apos;m
<br />
          <span className='text-accent'>Rajneesh Kumar</span>
          </h1>
          <p className='max-w-125  mb-9 text-white/80'>Breaking the web, fixing the web, and making it better. I&apos;m a MERN stack explorer turning imagination into interactive reality—one component at a time.
</p>

{/* buttons & socials */}
<div className='flex flex-col xl:flex-row items-center gap-8'>
  <Button 
  variant='outline'
  size='lg'
  className='group-hover:flex items-center gap-2'
  >
   <span>
      Download CV
    </span>
    <FiDownload className='text-xl'/>
  </Button>

{/*  */}
<div className='mb-8 xl:mb-0' >
  <Social containerStyles="flex gap-6 " iconStyles="w-9 h-9 border border-accent rounded-full flex items-center justify-center text-accent text-base hover:text-primary hover:bg-accent hover:transition-all duration-500"/>
  </div>


  </div>
        </div>
        {/* photo */}
        <div><Photo/></div>
      </div>
    </div>
   </section>
   </>
  )
}

export default Home