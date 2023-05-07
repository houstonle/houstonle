import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1d1d1d] text-[#08fdd8]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4'>
                <p className='text-4xl font-bold inline'>About Me</p>
                <p className=' text-white pt-4'>
                    As a recent computer science graduate with a passion for coding, I have a strong background in both front-end and back-end development. I'm eager seeking to expand my skill set and learn new technologies
                    to stay ahead in the ever-evolving field of computer science. Beyond my professional life, I enjoy spending time playing video games and have a keen interest in mechanical keyboards. I believe that a work-life balance is
                    important and find joy in exploring my hobbies outside of coding.
                </p>
                <p className=' text-white pt-4'>
                    One aspect of my coding philosophy is my affinity for pair programming. I find that it fosters effective communication, promotes high-quality code,
                    and encourages efficient coding practices. Collaborating with others and leveraging their strengths is an excellent way for me to continuously learn and grow as a developer. 
                    Mu ultimate goal is to make a positive impact through my coding skills, whether it's through small utility scripts or a large-scale applications,
                    I'm motivated by the idea that my work can be useful and beneficial to others.
                </p>
                <p className=' text-white pt-4'>
                    Here are some technologies I have experience with:
                </p>
                <div className='grid grid-cols-3 gap-8'>
                    <div className='flex flex-col text-center'>
                        <p className=' text-[#08fdd8] text-lg pt-4'> Programming Languages </p>
                        <ul className='text-center'>
                            <li className=' text-white pt-2'> Python </li>
                            <li className=' text-white pt-2'> Java </li>
                            <li className=' text-white pt-2'> C/C++ </li>
                            <li className=' text-white pt-2'> SQL </li>
                        </ul>
                    </div>
                    <div className='flex flex-col text-center'>
                        <p className=' text-[#08fdd8] text-lg pt-4'> Development </p>
                        <ul className='text-center'>
                            <li className=' text-white pt-2'> Django </li>
                            <li className=' text-white pt-2'> React and React Native</li>
                            <li className=' text-white pt-2'> HTML </li>
                            <li className=' text-white pt-2'> CSS </li>
                            <li className=' text-white pt-2'> Tailwind </li>
                            <li className=' text-white pt-2'> Expo </li>
                        </ul>
                    </div>
                    <div className='flex flex-col text-center'>
                        <p className=' text-[#08fdd8] text-lg pt-4'> Additional Skills </p>
                        <ul className='text-center'>
                            <li className=' text-white pt-2'> Git </li>
                            <li className=' text-white pt-2'> Excel </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About