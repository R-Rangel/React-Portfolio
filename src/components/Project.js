import React from 'react'
import PROJ1 from '../assets/passwordgen.png'
import PROJ2 from '../assets/weatherdash.png'

const Project = () => {
  return (
    <div name='projects' className='w-full h-screen bg-[#0D1317] text-[white]'> 
     <div  className='flex  justify-center items-center w-full h-full ' >
      <div  className='max-w-[700px] w-full '>
        <h1 className='flex justify-center font-bold text-4xl py-4'> Projects (click image to see app) </h1>
        <p>A simple password generator that prompts a user questions based on their preferd password.</p>
              <a  href='https://r-rangel.github.io/password-gen/'> 
                <img className='' href='' src={PROJ1} alt='Module1'/>
              </a>
       
        <p className='pt-20'>A weather dashboard where you can search a city and will then display the weather</p>
        <a href='https://r-rangel.github.io/Weather-DashBoard/'> 
          <img  src={PROJ2} alt='Module2'/>
        </a>
       
        
      </div>
     </div>
    </div>
  )
}

export default Project