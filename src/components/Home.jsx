import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#1d1d1d]'>\

        {/* Container */}
        <div className='max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-4xl sm:text-7xl font-bold text-white'>Hi,</p>
            <div className='flex flex-row'>
                <h1 className='text-4xl sm:text-7xl font-bold text-white'>I'm</h1>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#08fdd8] ml-2'>Houston Le,</h1>
            </div>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>software developer</h2>
            <div>
            <Link
            to='contact'
            smooth={true}
            duration={500}
            className='text-[#08fdd8] group border-2 border-[#08fdd8] px-6 py-3 my-6 inline-block items-center hover:bg-[#08fdd8] hover:border-[#08fdd8] hover:text-[#1d1d1d]'
            >
                Contact Me!
                <span className='group-hover:rotate-90 duration-300 inline-flex align-items-center'>
                    <HiArrowNarrowRight className='ml-3 inline-block align-middle'/>
                </span>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Home