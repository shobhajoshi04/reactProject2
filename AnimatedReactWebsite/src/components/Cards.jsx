import { map } from 'framer-motion/client'
import React from 'react'

const Cards = () => {
  return (
    <div  data-scroll data-scroll-section data-scroll-speed="-.3"  className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='Card-cont h-[50vh] w-1/2'>
        <div className='Card  relative flex items-center justify-center rounded-xl w-full h-full  bg-[#004D43]'>
          <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />  
            <button className='absolute text-[#CDEA68] tracking-tight text-sm  left-10 bottom-5 px-5 py-1 rounded-full border-[1px] border-[#CDEA68] '>&copy;2019-2022</button>
        </div>
        </div>
        
        <div className='Card-cont   w-1/2 flex gap-5 h-[50vh]'>
        <div className='Card relative flex items-center justify-center rounded-xl w-1/2 h-full  bg-[#192826]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />  
        <button className='absolute text-[#CDEA68] tracking-tight text-sm  left-10 bottom-5 px-5 py-1 rounded-full border-[1px] border-[#CDEA68] '>&copy;2019-2022</button>
        </div>
        <div className='Card relative flex items-center justify-center rounded-xl w-1/2 h-full  bg-[#192826]'>
        <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />  
            <button className='absolute text-[#CDEA68] tracking-tight text-sm  left-10 bottom-5 px-5 py-1 rounded-full border-[1px] border-[#CDEA68] '>&copy;2019-2022</button></div>


        </div>
        

    </div>
  )
}

export default Cards