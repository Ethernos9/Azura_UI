import React from 'react'
import Navbar from './components/Navbar'
import Left from './components/Left'
import Right from './components/Right'
import Page2 from './pages/Page2'

const App = () => {
  return (
  <div className=''>
    <div className='h-screen bg-gradient-to-b from-[#e3f2ff] via-[#d2ecff] to-white">
  <!-- Your content here -->'>
         <div>
             <Navbar/>
         </div>
        <div className='flex h-screen '>
           <div className='w-1/2'>
              <Left/>
           </div>
        <div className=' w-1/2'>
          <div>
             <Right/>
          </div>
          
      </div>
    </div>
  
    </div>
    <div className='pt-32'>
      <Page2/>
    </div>
    </div>
  )
}

export default App