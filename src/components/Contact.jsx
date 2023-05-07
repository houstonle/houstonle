import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1d1d1d] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/cdcce4db-c3dc-48ac-b4e9-d9090feb1bc0" className='flex flex-col max-w-[1000px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold text-[#08fdd8]'>Contact</p>
                <o className='text-white py-1'>// Submit the form below or email me - Houston.Le@hotmail.com</o>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
            <textarea name="message" className='bg-[#ccd6f6] p-2' id="" placeholder='Message' rows="10"></textarea>
            <button className='text-[#08fdd8] border-2 border-[#08fdd8] hover:bg-[#08fdd8] hover:border-[#08fdd8] hover:text-black px-8 py-3 my-8 mx-auto flex items-center'>Send Message!</button>
        </form>
    </div>
  )
}

export default Contact