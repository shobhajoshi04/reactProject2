import { motion } from 'framer-motion'
import React from 'react' 
// import {motion} from "framer-motion"

const Marquee = () => {
  return (
    
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='Marquee w-full py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43]'>
    
        <div className='text border-t-[1px] flex whitespace-nowrap border-b-[1px]  overflow-hidden border-x-zinc-300'>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear" , duration: 5}} className='text-[22vw] pr-20 font-["Founders Grotesk"] -mt-[2vw] leading-none uppercase tracking-tigher font-bold '>we are ochi</motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear" , duration: 5}} className='text-[22vw] pr-20 font-["Founders Grotesk"] -mt-[2vw] leading-none uppercase  tracking-tighter font-bold '>we are ochi</motion.h1>
        </div>

    </div>
  )
}

export default Marquee