import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Socials = [
    {icon: <FaGithub />, path: "https://github.com/Rajneeshkumartech"},
    {icon: <FaLinkedin />, path: "https://linkedin.com/in/rk-rajneesh-kumar"},
]

const Social = ({containerStyles , iconStyles}) => {
  return (
    <div className={containerStyles} >
        {Socials.map((item , index)=>{
            return <Link key={index} href={item.path} target="_blank" className={iconStyles}>{item.icon}</Link>
        })}
    </div>
    
  )
}

export default Social