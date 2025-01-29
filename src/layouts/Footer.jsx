import React, { useState } from 'react'
import LogoImg from '../assets/image/logo icon.svg'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";
import { GiRoyalLove } from "react-icons/gi";


const Footer = () => {
    const [activeLink, setActiveLink] = useState('')
    const handleLinkClick = (link)=>{
        setActiveLink(link);
    }

  return (
    <footer className='flex flex-col px-6 lg:px-10 pt-15 text-gray-700 text-sm'>
        <div className='flex flex-col lg:flex-row justify-between mb-5 items-center gap-5 lg:gap-0' >
        <Link to='home' className='cursor-pointer'> 
            <div className='flex flex-col lg:flex-row items-center'>
                    <img src={LogoImg} alt="logo"/>
                    <span className='font-bold text-gray-700 text-[10px] lg:text-[14px]'>JohnDev,</span>   
            </div>
            </Link>
            <div className='flex flex-col lg:flex-row items-center w-[80%] mx-auto justify-center '>
               <Link to='home' className={`px-3 py-2 mb-0 text-[10px] lg:text-[14px] font-medium cursor-pointer ${activeLink === 'home' ? 'text-purple-500': 'text-gray-800'}`} onClick={()=>(handleLinkClick('home'))}><div>Home</div></Link>
               <Link to='portfolio' className={`px-3 py-2 mb-0 text-[10px] lg:text-[14px] font-medium cursor-pointer ${activeLink === 'portfolio' ? 'text-purple-500': 'text-gray-800'}`} onClick={()=>(handleLinkClick('portfolio'))}><div>Portfolio</div></Link>
               <Link to='about' className={`px-3 py-2 mb-0 text-[10px] lg:text-[14px] font-medium cursor-pointer ${activeLink === 'about' ? 'text-purple-500': 'text-gray-800'}`} onClick={()=>(handleLinkClick('about'))}><div>About me</div></Link>
               <Link to='contact' className={`px-3 py-2 mb-0 text-[10px] lg:text-[14px] font-medium cursor-pointer ${activeLink === 'contact' ? 'text-purple-500': 'text-gray-800'}`} onClick={()=>(handleLinkClick('contact'))}><div>Contact</div></Link>
               <Link to='testimonial' className={`px-3 py-2 mb-0 text-[10px] lg:text-[14px] font-medium cursor-pointer ${activeLink === 'testimonial' ? 'text-purple-500': 'text-gray-800'}`} onClick={()=>(handleLinkClick('testimonial'))}><div>Testimonials</div></Link>
               <Link to='skills' className={`px-3 py-2 mb-0 text-[10px] lg:text-[14px] font-medium cursor-pointer ${activeLink === 'skills' ? 'text-purple-500': 'text-gray-800'}`} onClick={()=>(handleLinkClick('skills'))}><div>Skills</div></Link>
            </div>
            <div className='flex gap-4 text-sm lg:text-[14px] items-center '>
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            </div>
        </div>
        <hr className='border border-gray-500' />
        <div className='flex flex-col lg:flex-row items-center lg:items-start gap-3 lg:gap-0 justify-between mt-2 mb-7 text-[10px] lg:text-[14px]'>
                <p className='flex items-center gap-2'>Made with <span className='text-red-400'><GiRoyalLove /></span> by Airdokan</p>
                <div className='flex gap-4'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies settings</p>
                </div>
        </div>
    </footer>
  )
}

export default Footer