import React, { useState, useEffect } from "react"
import { Link } from "react-scroll"
import logo from "../images/logo.png"

const Navbar = () => {
    const [navBg, setNavBg] = useState(false);
    const changeNavBg = () => {
        window.scrollY > 0 ? setNavBg(true) : setNavBg(false)
    }
    
    useEffect(() => {
        window.addEventListener('scroll', changeNavBg);
        return () => {
            window.removeEventListener('scroll', changeNavBg);
        }
    }, []);
  return (
    <>
        <nav onScroll={changeNavBg} className= {`fixed w-full px-20 h-20 flex justify-between items-center z-50 transition-colors duration-300 ${navBg ? 'bg-nav-blue' : 'bg-transparent'}`}>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500} className="cursor-pointer w-36 h-16 pb-4 flex align-items justify-center">
                <img src={logo} alt="logo" className="w-full h-full object-fit"/>
            </Link>
            <div className="flex justify-end">
                <ul className="flex flex-row gap-10">
                    <li className={`cursor-pointer ${navBg ? 'text-white' : 'text-black'}`}><Link activeClass="active" to="home" spy={true} smooth={true} offset={0} duration={500}>HOME</Link></li>
                    <li className={`cursor-pointer ${navBg ? 'text-white' : 'text-black'}`}><Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>ABOUT ME</Link></li>
                    <li className={`cursor-pointer ${navBg ? 'text-white' : 'text-black'}`}><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500}>SKILLS</Link></li>
                    <li className={`cursor-pointer ${navBg ? 'text-white' : 'text-black'}`}><Link activeClass="active" to="experience" spy={true} smooth={true} offset={-70} duration={500}>EXPERIENCE</Link></li>
                    <li className={`cursor-pointer ${navBg ? 'text-white' : 'text-black'}`}><Link activeClass="active" to="footer" spy={true} smooth={true} offset={-70} duration={500}>CONTACT ME</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
} 
export default Navbar