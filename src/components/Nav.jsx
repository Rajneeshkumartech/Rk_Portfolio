"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
// pathname use kiya gya hai navbar me path ko higligh kr ne ke liye 
    const pathname = usePathname();
  return (
    <>
    <nav className="flex gap-8">
        {links.map((link,index)=>{
return <Link href={link.path} key={index} className={`${link.path===pathname && "text-accent border-b-2 border-accent "}font-medium hover:text-accent transition-all`} >{link.name}</Link>
        })
           
        }
    </nav>
    </>
  )
}

export default Nav



