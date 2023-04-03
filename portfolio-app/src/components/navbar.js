import React from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0D1317] text-[#ffe4f2]'>
        
        <div className=''>
            <ul className='flex'>
                <li>
                <Link to="home" smooth={true} duration={500} >
                    About Me
               </Link>
                </li>

                <li> 
                  <Link to="projects" smooth={true} duration={500} >
                    Projects
                  </Link>
               </li>

                <li> 
                  <Link to="resume" smooth={true} duration={500} >
                    Resume
                  </Link>
               </li>

                <li> 
                  <Link to="contact" smooth={true} duration={500} >
                    Contact
                  </Link>
               </li>

            </ul>
        </div>
       
    </div>
  )
}

export default Navbar
