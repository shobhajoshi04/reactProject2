import { motion, useAnimation } from 'framer-motion';
import React, { useState } from 'react';

const Features = () => {
  const animation1 = useAnimation();
  const animation2 = useAnimation();

  const [cards, setCards] = useState([animation1, animation2]);

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className='w-full py-10 '>
      <div className='w-full px-20 border-b-[1px] pb-15 border-zinc-700'> 
        <h1 className='text-[4vw] tracking-tight font-["Neue Monstreal"] '>Featured Projects</h1>
      </div>

      <div className='px-20'>
        <div className="cards w-full mt-10 flex gap-10">
          <motion.div onHoverStart={() => handleHover(0)} onHoverEnd={() => handleHoverEnd(0)} className=" card-container relative w-1/2 h-[75vh]">
            <h1 className="absolute flex -translate-x-1/2 overflow-hidden top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-8xl font-['Gilroy'] tracking-tighter left-full">
              {"VISE".split('').map((item, index) => (
                <motion.span initial={{ y: "100%" }} animate={animation1} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }} className='inline-block' key={index}>{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full overflow-hidden rounded-xl h-full">
              <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png" alt="" />
            </div>
          </motion.div>

          <motion.div onHoverStart={() => handleHover(1)} onHoverEnd={() => handleHoverEnd(1)} className=" card-container relative w-1/2 h-[75vh] ">
            <h1 className="absolute flex translate-x-1/2 top-1/2 -translate-y-1/2 overflow-hidden text-[#CDEA68] z-[9] text-8xl font-['Gilroy'] tracking-tighter right-full">
              {"FYDE".split('').map((item, index) => (
                <motion.span initial={{ y: "100%" }} animate={animation2} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }} className='inline-block' key={index}>{item}</motion.span>
              ))}
            </h1>
            <div className="card w-full overflow-hidden rounded-xl h-full">
              <img className="w-full h-full bg-cover" src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;