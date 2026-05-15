'use client'
import { usePathname } from 'next/navigation';
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { CiMenuFries } from 'react-icons/ci';
import Link from 'next/link';

// link array of objact banaya hai dynamically navbar ke options ko list karwane ke liye 
const links = [
    {
        name:"Home",
        path:"/",
    },
    {
        name:"Services",
        path:"/services",
    },
    {
        name:"Resume",
        path:"/resume",
    },
    {
        name:"Work",
        path:"/work",
    },
    {
        name:"Contact",
        path:"/contact",
    },
]

const Mobilenav = () => {

const pathname = usePathname();
    
  return (
   <>
  <Sheet>
    <SheetTrigger className = ' flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent'/>
    </SheetTrigger>
    <SheetContent className='flex flex-col'>
<div className='mt-32 mb-20 text-2xl text-center'>
    <Link href='/'  >
    <h1 className='text-4xl font-semibold'>RK<span className='text-accent' >.</span></h1></Link>
</div>
<nav className='flex flex-col justify-center items-center gap-8'>
{links.map((link , index)=>{ 
return <>
<Link href={link.path} key={index} className={` ${link.path === pathname && "text-accent border-b-2 border-accent " } text-xl hover:text-accent transition-all `}>
    {link.name}
</Link>
</>
})}
</nav>
    </SheetContent>
  </Sheet>
   </>
  )
}

export default Mobilenav