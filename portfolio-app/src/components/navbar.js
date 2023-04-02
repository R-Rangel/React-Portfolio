import React from 'react'

 const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#00076f] text-[#ffe4f2]'>
        
        <div className=''>
            <ul className='flex'>
                
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>Resume</li>
            </ul>
        </div>
       
    </div>
  )
}

export default Navbar