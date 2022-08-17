

export default function AboutCard() {
  return (
    <div name='about' className='text-gray-700  bg-white w-full h-[400px] '>
      <div className='flex flex-col justify-center items-center w-full h-full'>
          <div className='hover:scale-110 duration-500 '>
              <p className=' text-4xl font-bold inline  mb-10'>About</p>
          </div>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            
      
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='hover:scale-110 duration-500  sm:text-right text-4xl font-bold'>
              <p>"Building the future one line of code at a time"</p>
            </div>
            <div className='hover:scale-110 duration-500 '>
              <p>Language agnostic Software Engineer always striving to sharpen my coding skills. I maintain a curious mindset and a logical and intuitive perspective that elevates my ability to find unconventional solutions to complex business problems. I stay sharp and diligent and always keep the bigger picture in sight. I believe consistency is key and unlocks all doors to opportunity.</p>  
            </div>
          </div>
      </div>
    </div>
  )
}
