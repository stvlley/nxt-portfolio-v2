import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import Typical from 'react-typical'


const Hero = ({heading, message}) => {
  return (
    <div className='flex h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='goup max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full'>
        <h2 className='text-4xl hover:scale-110 duration-500  sm:text-4xl font-bold text-[#8892b0]'>Hey I'm,</h2>
        <h1 className='goup hover:scale-110 duration-500 text-4xl sm:text-7xl font-bold text-[#d4f6fa]'>
          Stephen Talley.
        </h1>       
        <div className='hover:scale-110 duration-500'>
        <Typical
        className=' text-2xl sm:text-4xl font-bold text-[#8892b0]'
        loop={Infinity}
        wrapper="b"
        steps={[
            `I'm a Web Developer 💻`,
            3000,
            `I'm a Software Engineer ⚙️`,
            3000,

        ]}></Typical>
            
          <button onClick={() => {}} 
          className=' rounded-lg text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#00ffff] hover:text-gray-700 hover:border-[#00ffff]'>
           View Projects
            <span className='group-hover:rotate-90 duration-300'>
              <BiRightArrow />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;