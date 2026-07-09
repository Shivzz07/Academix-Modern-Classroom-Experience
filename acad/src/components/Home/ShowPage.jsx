import React from 'react'

function ShowPage() {
  return (
    <div id="home" className='relative flex justify-center'>
        <img src="https://i.ibb.co/7tJH9LRr/school-bag-removebg-preview.png" alt="" className='absolute z-99 hidden duration-300 lg:flex xl:py-65 lg:py-15 lg:scale-65 xl:scale-85 '/>
        <div className=' flex flex-col justify-center sm:py-20 py-15 '>
           <h1 className='flex justify-center text xl:text-9xl  lg:text-7xl md:text-5xl mx-auto text-blue-400 hover:text-pink-200 hover:bg-blue-400 hover:border-blue-700  duration-500 cursor-crosshair text-4xl sm:px-40 px-20 bg-pink-200 border-2 relative z-10 delay:0.2s animate-niche'>YOUR</h1>
           <h1 className='flex justify-center text xl:text-9xl lg:text-7xl md:text-5xl relative z-10 border-2  text-pink-500  hover:text-green-100 hover:bg-pink-500 hover:border-pink-800   my-2 duration-500  cursor-crosshair text-4xl bg-green-100  mx-auto sm:px-40 px-40 '>MODERN</h1>
           <h1 className='flex justify-center text xl:text-9xl lg:text-7xl md:text-5xl hover:text-amber-100 cursor-crosshair hover:bg-green-400 hover:border-green-600  text-green-400 text-4xl duration-500  bg-amber-100 mx-auto sm:px-60 px-45 border-2 tracking-wide'>CLASSROOM</h1>
        </div>
           
    </div>                                                                                                                                                                                       
    
  )
}

export default ShowPage
