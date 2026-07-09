import React from 'react'


const AllQuestsbar = ({winCol}) => {
  return (
            <div className="w-ful lg:w-full lg:h-15 lg:bg-[${winCol}] md:rounded-t-3xl md:flex md:flex-row md:pt-5 md:px-5 md:gap-5 md:justify-between" style={{backgroundColor :winCol}}>
                
                <div className='flex flex-row gap-5'>
                   <div className='rounded-full bg-red-500 w-5 h-5'>
                    <h1 className='px-1 mb-1 hover:text-black text-red-500'>+</h1>
                   </div>
                   <div className='rounded-full bg-amber-300 w-5 h-5'>
                    <h1 className='px-1 mb-1 hover:text-black text-amber-300'>-</h1>
                   </div>
                   <div className='rounded-full bg-green-500 w-5 h-5'>
                    <h1 className='px-1 mb-1 hover:text-black text-green-500'>=</h1>
                   </div>
                </div>
    
                <h1 className='text-2xl play text-white'>All Quests</h1>
                
                <div>
                    <h1>x</h1>
                </div>
                
            </div>
  )
}

export default AllQuestsbar
