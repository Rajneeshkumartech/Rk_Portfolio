
import Link from "next/link"
import Nav from "./Nav"
import { Button } from "./ui/button"
import Mobilenav from "./Mobilenav"


const Header = () => {
  return (
   <>
   <header className="py-8">
    <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
      <Link href="/">
      <h1 className="text-4xl font-semibold">
        RK<span className="text-accent">.</span></h1></Link>

        {/* desktop nav & hire me button */}
         <div className=" hidden lg:flex items-center gap-8">
            <Nav />
            <Link href="/contact" >
            <Button className='cursor-pointer' >Hire me</Button>
            </Link>
         </div>

         {/* Mobile Nav */}
            <div className="lg:hidden">
                <Mobilenav/>
            </div>
         
    </div>
   </header>
   </>
  )
}

export default Header