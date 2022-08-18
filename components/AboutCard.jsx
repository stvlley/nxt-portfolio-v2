

export default function AboutCard() {
  return (
    <div name='about' className='text-gray-700  bg-white w-full h-[400px] '>
      <div className='flex flex-col justify-center sm:items-center w-full h-full'>
          <div className='border-2  shadow-md shadow-gray-400  border-gray-700  p-1 rounded-lg px-3 mx-5 hover:scale-110 duration-500 '>
              <p className=' text-2xl px-1 sm:text-3xl md:text-4xl font-bold   mb-1 w-full  '>About</p>
          </div>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            
      
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='hover:scale-110 duration-500  text-center  sm:text-right text-2xl  sm:text-3xl md:text-6xl font-bold'>
              <p className="">"Building the future one line of code at a time"</p>
            </div>
            <div className='hover:scale-110 duration-500 '>
              <p className="text-sm sm:text-lg p-3 mb-5">Language agnostic Software Engineer always striving to sharpen my coding skills. I maintain a curious mindset and a logical and intuitive perspective that elevates my ability to find unconventional solutions to complex business problems. I stay sharp and diligent and always keep the bigger picture in sight. I believe consistency is key and unlocks all doors to opportunity. </p>  
            </div>
          </div>
      </div>
    </div>
  )
}
