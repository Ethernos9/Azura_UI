import React from 'react'

const Left = () => {
  return (
    <div className='flex flex-col h-screen text-center justify-center '>
        <div className='pl-4'>
            <h1 className='text-6xl font-bold'>Optimize and Grow Your Real Estate Portfolio with Azura</h1>
        </div>
        <div className='mt-4'>
            <p>Experience seamless property management and take control of your portfolio effortlessly.</p>
        </div>

        <div className='  p-10 flex'>
          <div  className='flex gap-5' >
          <button className=' bg-blue-500 p-2 rounded-xl border-zinc-200'>Get Started</button>
          <button className='bg-color1 border-solid focus:ring-blue-300 p-2 rounded-xl border-zinc-200'>Learn More</button>
            
          </div>
        </div>
    </div>
    
  )
}

export default Left