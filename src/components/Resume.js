import React from 'react';
import RESUME from '../assets/resume.png'

const Resume = () => {
  return (
    <div name= "resume" className='w-full h-screen bg-[#0D1317] text-[white]'>
    <div className='flex  justify-center items-center w-full h-full '>
      <div className='max-w-[700px] w-full '>
      <div>
        <h1 className='flex justify-center font-bold text-4xl py-4'>Resume</h1>
      <img className='' src={RESUME} alt="Resume"/>
    </div>
        <div>

        </div>
      </div>
    </div>     
</div>
  )
}

export default Resume;
