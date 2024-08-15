import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-10 '> 
       <div className='cursor-pointer'>
          AZURA
       </div>
       <div>
        <ul className='cursor-pointer flex gap-10'>
               <li>Features</li>
               <li>Testimonials</li>
               <li>Pricing</li>
               <li>FAQS</li>
        </ul>
       </div>
       <div>
        <button>Signup</button>
       </div>
    </div>
  )
}

export default Navbar