import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3"  className='h-screen bg-zinc-900 pt-1'>
      <div className="mt-40 px-16">
        {["we create", "eye opening", "presentations"].map((item, index) => {
          return (
            <div className='mb-1'>
              <div className='flex items-end'>
                {index === 1 && (
                  <motion.div initial={{width: 0}} animate={{width: "9vw"}} translate={{ease: [0.76 , 0 , 0.24 ,1]}}
                    className='w-[9vw]  overflow-hidden mr-2 -mt-4 h-[5.7vw] relative  rounded-lg bg-red-500'>
                      <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg" alt="" />
                    </motion.div>
                    

                  
                )}
                <h1
                  className='text-[7vw] leading-none uppercase tracking-tighter font-bold pt-4 -mt-6'
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className='mt-28 py-5 border-t-[1px] border-zinc-500 px-16 flex justify-between items-center'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
          return (
            <p key={index} className='text-md font-light tracking-tight leading-none'>
              {item}
            </p>
          );
        })}
        <div className='flex items-center gap-2'>
          <div className='px-6 py-1 border-[1px] border-zinc-500 font-light font-sm uppercase rounded-full'>
            start the project
          </div>
          <div className='w-8 h-8 flex items-center justify-center rounded-full border-[1px] border-zinc-500'>
            <span className='rotate-45'>
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;