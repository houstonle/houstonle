import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaLinkedinIn} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll';

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-4 bg-[#1d1d1d] text-gray-300 z-20'>

        {/* Logo */}
        <div>
          <img src={Logo} alt='logo' className='w-16 h-16 mr-2' />
        </div>

        {/* Menu */}
          <ul className='hidden md:flex'>
            <Link to="home" smooth={true} duration={500} className='px-4 cursor-pointer hover:text-[#08fdd8] text-gray-400'>
              Home
            </Link>
            <Link to="about" smooth={true} duration={500} className='px-4 cursor-pointer hover:text-[#08fdd8] text-gray-400'>
              About
            </Link>
            <Link to="work" smooth={true} duration={500} className='px-4 cursor-pointer hover:text-[#08fdd8] text-gray-400'>
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={500} className='px-4 cursor-pointer hover:text-[#08fdd8] text-gray-400'>
              Contact
            </Link>
          </ul>


      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-30'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'fixed top-0 right-0 w-full h-screen bg-[#1d1d1d] flex flex-col justify-center items-center'}>
            <Link onClick={handleClick} to="home" smooth={true} duration={500} className='px-4 cursor-pointer text-4xl py-6 text-gray-400'>
              Home
            </Link>
            <Link onClick={handleClick} to="about" smooth={true} duration={500} className='px-4 cursor-pointer text-4xl py-6 text-gray-400'>
              About
            </Link>
            <Link onClick={handleClick} to="work" smooth={true} duration={500} className='px-4 cursor-pointer text-4xl py-6 text-gray-400'>
              Projects
            </Link>
            <Link onClick={handleClick} to="contact" smooth={true} duration={500} className='px-4 cursor-pointer text-4xl py-6 text-gray-400'>
              Contact
            </Link>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>

          <li className='pl-8 pr-4 w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300 font-bold'
            href='https://github.com/houstonle'>
              Github <FaGithub size={30}/>
            </a>
          </li>

          <li className='pl-8 pr-4 w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300 font-bold'
            href='https://www.linkedin.com/in/houston-le-650206239/'>
              Linkedin <FaLinkedin size={30}/>
            </a>
          </li>

          <li className='pl-8 pr-4 w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300 font-bold'
            href='mailto: Houston.Le@hotmail.com'>
              Email <HiOutlineMail size={30}/>
            </a>
          </li>

          <li className='pl-8 pr-4 w-40 h-16 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300 font-bold'
            href='/'>
              Resume <BsFillPersonLinesFill size={30}/>
            </a>
          </li>

        </ul>
      </div>

</div>

  )
}

export default Navbar