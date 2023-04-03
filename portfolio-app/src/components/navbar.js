import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0D1317] text-[#ffe4f2]'>
        
        <div className=''>
            <ul className='flex'>
                <li><a href="/">About Me</a></li>
                <li><a href="/">Portfolio</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">Resume</a></li>
            </ul>
        </div>
       
    </div>
  )
}

export default Navbar
