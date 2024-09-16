import React, { useEffect, useState } from 'react';




const Eyes = () => {
    const [rotate, setRotate] = useState(0);

    

    useEffect(() => {
        const handleMouseMove = (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); 
            setRotate(angle - 180);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    


    return (
        <div className='w-full relative h-screen overflow-hidden '>
            
            <div data-scroll data-scroll-speed="-.7" className='w-full relative h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div className='absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-96'>


                    <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
                        <div className='w-2/3 h-2/3 rounded-full relative bg-black'>
                            <div
                                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8'
                            >
                                <div className='w-8 h-8 rounded-full bg-zinc-100' />
                            </div>

                            <div className='w-full h-full flex justify-center items-center'>
                                <h3 className='text-white font-["Gilroy"] text-lg tracking-tight uppercase'>Play</h3>
                            </div>
                          
                        </div>
                    </div>

                    <div className='w-[15vw] h-[15vw] flex items-center justify-center rounded-full bg-zinc-100'>
                        <div className='w-2/3 h-2/3 rounded-full relative bg-black'>
                            <div
                                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                                className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-8'
                            >
                                <div className='w-8 h-8 rounded-full bg-zinc-100' />
                            </div>
                            <div className='w-full h-full flex justify-center items-center'>
                                <h3 className='text-white text-xl tracking-tight uppercase'>Play</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
    

        </div>
    );
};

export default Eyes;




 