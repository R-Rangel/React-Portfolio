import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-[#0D1317] flex justify-center items-center p-4'>
      <form action="" className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline text-[white]'>Contact Me</p>
          <p className='text-[white] py-4'> If you'd like to contact me, please submit the form below!</p>
        </div>
        <input className='p-2' type ="text" placeholder='Name' name="name" />
        <input className='my-4 p-2' type ="email" placeholder='Email' name="email" />
        <textarea className='p-2' name="message"   rows='10' placeholder='Message'></textarea>
        <button className='text-[white] border-2 hover:bg-[green] px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
      </form>
    </div>
  )
}

export default Contact