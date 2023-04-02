import React from 'react'

const Main = () => {
  return (
    <div className='w-full h-screen bg-[#0D1317]'>
        <div className='max-w-[1000px] mx-uato px-8 flex flex-col justify-center h-full text-[white]'>
            <p1 className='text-[#9f45b0]'> Hello, my name is</p1>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#6564DB]'>Ricardo Rangel</h1>
            <h2 className='text-2xl sm:text-4xl font-bold text-[#101D42]'>I am a Northwester coding bootcamp student.</h2>
            <p className='text-[#89D2DC] py-7 max-w-[700px]'>
                My dream of becoming a programmer started when I was young and got my first computer. Playing with inspect element and learning how applications were made really inspired me to pursue my dream. I am focused on becoming a front-end developer and working with others who have my passion in designing new and amazing things.
            </p>
        </div>
    </div>
  )
}

export default Main