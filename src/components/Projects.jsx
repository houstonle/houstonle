import React from 'react';
import { FaGithub, FaPlayCircle } from 'react-icons/fa';
import Terminal from '../assets/terminal.jpeg';
import ClientServer from '../assets/client_server.png';
import Book from '../assets/book.avif';
import Financial from '../assets/financial.png';


const Projects = () => {
  return (
    <div name='work' className='w-full h-full bg-[#1d1d1d]'>

      <div className='max-w-[1000px] mx-auto flex flex-col justify-center h-full px-4 pt-20'>
        <div className='pb-8 max-w-[1000px] w-full'>
          <p className='text-4xl font-bold inline text-[#08fdd8]'>Projects</p>
          <p className='pt-6 text-white'>// Check out some of my projects</p>
        </div>

        <div className=' max-w-[1000px] w-full flex py-3'>
          <div className='flex-shrink-0 w-1/3 relative hidden md:block'>
            <img src={Terminal} alt='CLI' className='w-full h-full object-cover'/>
            <div className='absolute top-0 left-0 w-full h-full bg-[#08fdd8] opacity-40 transition duration-300 ease-in-out hover:opacity-0'></div>
          </div>
          <div className='flex flex-col justify-center ml-8 flex-grow'>
            <p className='text-[#08fdd8] text-xl text-right'>CLI Shell Interface</p>
            <div className='bg-[#1d1d1d] flex-grow'>
              <p className='text-white text-right'>
                A command-line interface (CLI) shell that accepts a set of simple commands and provides
                functionality for managing processes and handling input/output redirection. The shell is implemented in
                C/C++ and runs on a Unix-like operating system.
              </p>
            </div>
            <a className='text-gray-300 self-end ml-auto m-4' href='https://github.com/houstonle/CLI-shell-interface'>
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        <div className='max-w-[1000px] w-full flex py-3'>
          <div className='flex flex-col justify-center mr-8 flex-grow'>
            <p className='text-[#08fdd8] text-xl text-left'>Client Server Monitoring</p>
            <div className='bg-[#1d1d1d] flex-grow'>
              <p className='text-white text-left'>
                An Implementation of a basic client-server architecture. Multiple clients can connect to a server thorugh TCP. 
                The clients are able to send transactions to the server, which are then processed and sent back to the clients. The system also includes logging functionality to keep track of server and client activities.
                Groff was used to generate manual pages for the client and server programs.
              </p>
            </div>
            <a className='text-gray-300 mr-auto m-4' href='https://github.com/houstonle/Client-Server-Monitoring'>
              <FaGithub size={30} />
            </a>
          </div>
          <div className='flex-shrink-0 w-1/3 relative hidden md:block'>
            <img src={ClientServer} alt='CLI' className='w-full h-full object-cover'/>
            <div className='absolute top-0 right-0 w-full h-full bg-[#08fdd8] opacity-40 transition duration-300 ease-in-out hover:opacity-0'></div>
          </div>
        </div>

        <div className=' max-w-[1000px] w-full flex py-3'>
          <div className='flex-shrink-0 w-1/3 relative hidden md:block'>
            <img src={Book} alt='CLI' className='w-full h-full object-cover'/>
            <div className='absolute top-0 left-0 w-full h-full bg-[#08fdd8] opacity-40 transition duration-300 ease-in-out hover:opacity-0'></div>
          </div>
          <div className='flex flex-col justify-center ml-8 flex-grow'>
            <p className='text-[#08fdd8] text-xl text-right'>Community Library App</p>
            <div className='bg-[#1d1d1d] flex-grow'>
              <p className='text-white text-right'>
                A mobile app which provides a social community for showcasing your personal book collection and sharing books with others in your coummunity by allowing users to lend and request books from other users.
                Users can add books via scanning or inputting an ISBN. Once added, books can be viewed and requested by other users. 
              </p>
            </div>
            <a className='text-gray-300 self-end ml-auto m-4' href='https://github.com/CMPUT301F20T30/3dayslate'>
              <FaGithub size={30} />
            </a>
          </div>
        </div>

        <div className='max-w-[1000px] w-full flex py-3'>
          <div className='flex flex-col justify-center mr-8 flex-grow'>
            <p className='text-[#08fdd8] text-xl text-left'>Financial Planning App</p>
            <div className='bg-[#1d1d1d] flex-grow'>
              <p className='text-white text-left'>
                This project is a financial planning app that aims to help small-to-medium sized financial businesses increase lead generation.
                The end user is presented with a borad featuere set that includes a broad toolkit of financial planning and management features,
                including the ability to connect personal bank accounts and set budgets and goals for income and expenses. Click the play button below
                to see a demo of the app.
              </p>
            </div>
            <a className='text-gray-300 mr-auto m-4' href='https://www.youtube.com/watch?v=Oe509Xa5bRg&t=51s'>
              <FaPlayCircle size={30} />
            </a>
          </div>
          <div className='flex-shrink-0 w-1/3 relative hidden md:block'>
            <img src={Financial} alt='CLI' className='w-full h-full object-cover'/>
            <div className='absolute top-0 right-0 w-full h-full bg-[#08fdd8] opacity-40 transition duration-300 ease-in-out hover:opacity-0'></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Projects;

