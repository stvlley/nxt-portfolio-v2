import {AiFillHtml5, } from 'react-icons/ai'
import {DiCss3 } from 'react-icons/di'
import {Parallax, ParallaxLayer }from '@react-spring/parallax'
import Image from 'next/image'
export default function Skills() {
  return (
        <>

        <div name='skills' className='bg-skills-img  w-full h-[600px] text-white'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col  justify-center w-full h-full'>
          <div className=' p-4 hover:scale-110 duration-500 '>
              <p className='rounded-lg text-4xl font-bold inline'>Skills</p>
          </div>
      

          <div className='w-full text-gray-700 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className=' rounded-lg pt-3 shadow-lg bg-white hover:scale-110 duration-500'>
                  <Image src='/html.svg' alt='' width={72} height={50} />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md bg-white hover:scale-110 duration-500'>
              <Image src='/css.svg' alt='' width={72} height={50} />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-white hover:scale-110 duration-500'>
              <Image src='/javascript.svg' alt='' width={72} height={50} />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-white hover:scale-110 duration-500'>
              <Image src='/react-dark.svg' alt='' width={72} height={50} />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-white hover:scale-110 duration-500'>
              <Image src='/rails.svg' alt='' width={72} height={50} />
                  <p className='my-4'>RAILS</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-white hover:scale-110 duration-500'>
              <Image src='/nextjs-dark.svg' alt='' width={72} height={50} />
                  <p className='my-4'>NEXTJS</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-white hover:scale-110 duration-500'>
              <Image src='/tailwindcss-dark.svg' alt='' width={72} height={50} />
                  <p className='my-4'>TAILWINDCSS</p>
              </div>
              <div className='rounded-lg pt-3 shadow-md  bg-white hover:scale-110 duration-500'>
              <Image src='/python-light.svg' alt='' width={72} height={50} />
                  <p className='my-4'>PYTHON</p>
              </div>
              
          </div>
  
      </div>
    </div>
    </>
  )
}
