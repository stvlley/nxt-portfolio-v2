import {AiFillHtml5, } from 'react-icons/ai'
import {DiCss3 } from 'react-icons/di'
import {Parallax, ParallaxLayer }from '@react-spring/parallax'
export default function Skills() {
  return (
        <>
        <Parallax pages={2}>

        <div name='skills' className='bg-skills-img  w-full h-[600px] text-white'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col  justify-center w-full h-full'>
          <ParallaxLayer>
          <div className=' p-4 hover:scale-110 duration-500 '>
              <p className='rounded-lg text-4xl font-bold inline'>Skills</p>
          </div>
          </ParallaxLayer>
      

          <ParallaxLayer offset={1}>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='rounded-lg pt-3 bg-white  hover:scale-110 duration-500'>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md bg-white hover:scale-110 duration-500'>
                  <p className='my-4'>CSS</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-white hover:scale-110 duration-500'>
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-white hover:scale-110 duration-500'>
                  <p className='my-4'>REACT</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-white hover:scale-110 duration-500'>
                  <p className='my-4'>RAILS</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-white hover:scale-110 duration-500'>
                  <p className='my-4'>TAILWIND</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-white hover:scale-110 duration-500'>
                  <p className='my-4'>SUPABASE</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-white hover:scale-110 duration-500'>
                  <p className='my-4'>NEXT</p>
              </div>
              
          </div>
          </ParallaxLayer>
  
      </div>
    </div>
    </Parallax>
    </>
  )
}
