import React, { useState,memo } from 'react'
import red from "../../assets/red.png"
import blue from "../../assets/blue.png"
import green from "../../assets/green.png"
import yellow from "../../assets/yellow.png"
import marioback from "../../assets/mobile/marioback.png"
import gameboy from "../../assets/mobile/gameboy.png"
import crow from "../../assets/mobile/crow.png"
import gameover from "../../assets/mobile/gameover.png"


const Tasklist = ({user, accept, reject, complete}) => {

  return (
    <div className=' xl:justify-center lg:flex xl:flex xl:mx-auto'>
      <div className='hidden lg:block flex-col justify-start items-start xl:flex xl:flex-row xl:w-[100%] h-auto gap-5 xl:gap-auto '>
        <div className='relative xl:hover:translate-y-2  duration-500 '>

          <img src={red} alt="" className='new xl:w-88 xl:h-88 w-50  '/>
          
          <div className='absolute xl:top-40 xl:left-15 top-22 left-8  '>
            <h1 className='relative text-white xl:bottom-8 xl:left-23 xl:text-7xl text-5xl bottom-6 left-13 play'>1</h1>
            <h1 className='xl:text-2xl text-sm text-white play lg:text-red-800'>New Quest</h1>
          </div>

        </div>
        <div className='relative xl:hover:translate-y-2 duration-500 ' >
           <img src={green} alt="" className=' xl:w-88 xl:h-88 w-50'/>
          
          <div className='absolute xl:top-40 xl:left-15 top-22 left-8  '>
            <h1 className='relative text-teal-700 xl:bottom-8 xl:left-23 xl:text-7xl text-5xl bottom-6 left-13 play'>{accept}</h1>
            <h1 className='xl:text-2xl text-sm text-teal-700 xl:text-teal-800 play'>Accepted</h1>
          </div>
        </div>
        <div className='relative xl:hover:translate-y-2  duration-500 '>
          <img src={blue} alt="" className=' xl:w-88 xl:h-88 w-50  '/>
          
          <div className='absolute xl:top-40 xl:left-15 top-22 left-8  '>
            <h1 className='relative text-blue-800 xl:bottom-8 xl:left-23 xl:text-7xl text-5xl bottom-6 left-13 play'>{complete}</h1>
            <h1 className='xl:text-2xl text-sm text-blue-800 xl:text-blue-800 play'>Completed</h1>
          </div>
        </div>
        <div className='relative xl:hover:translate-y-2  duration-500 '>
           <img src={yellow} alt="" className=' xl:w-88 xl:h-88 w-50  '/>
          
          <div className='absolute xl:top-40 xl:left-15 top-22 left-8  '>
            <h1 className='relative text-white xl:bottom-8 xl:left-23 xl:text-7xl text-5xl bottom-6 left-13 play'>{reject}</h1>
            <h1 className='xl:text-2xl text-sm text-white xl:text-white play lg:text-amber-400'>Failed</h1>
          </div>
        </div>
        
       
        
        
      </div>
      <div className='lg:hidden  flex flex-row px-5 justify-between '>
        <div className='bg-red-500 md:px-10 sm:px-5 px-2 border-2 border-red-800 flex flex-col items-center  rounded-tr-4xl '>
          <div className='mx-auto py-2 flex justify-center items-center'>
            <img className='md:h-30 sm:h-20 sm:w-auto md:w-auto w-0 h-0 ' src={marioback} alt="" />
          </div>
          <div className='sm:flex sm:flex-col sm:justify-center sm:items-center flex flex-col justify-center items-center '>
            <h1 className='text-white play px-2 sm:px-0'>0</h1>
            <h1 className='text-white play py-2'>New Quest</h1>
            
          </div>
        </div>
        <div className='bg-emerald-400 md:px-10 sm:px-5 px-2 border-2 border-teal-700 flex flex-col items-center rounded-tl-4xl '>
          <div className='mx-auto py-2 flex justify-center items-center'>
            <img className='md:h-30 md:w-auto sm:h-20 sm:w-auto md:px-3 w-0 h-0 ' src={gameboy} alt="" />
          </div>
          <div className='sm:flex sm:flex-col sm:justify-center sm:items-center flex flex-col justify-center items-center '>
            <h1 className='text-white play'>{accept}</h1>
            <h1 className='text-white play py-2 '>Accepted</h1>
            
          </div>
        </div>
        <div className='bg-cyan-400 border-2 md:px-10 sm:px-5 px-2 border-cyan-800 flex flex-col items-center  rounded-tr-4xl'>
          <div className='mx-auto py-2 flex justify-center items-center'>
            <img className='md:h-30 md:w-auto sm:h-20 sm:w-auto md:px-3 w-0 h-0' src={crow} alt="" />
          </div>
          <div className='flex flex-col justify-center items-center '>
            <h1 className='text-white play'>{complete}</h1>
            <h1 className='text-white play py-2 '>Completed</h1>
            
            
          </div>
        </div>
        <div className='bg-amber-200 border-2 md:px-10 sm:px-5 py-2 px-2 border-amber-500 flex flex-col items-center rounded-tl-4xl'>
          <div className='mx-auto  flex justify-center items-center'>
            <img className='md:h-30 md:w-35 sm:h-20 sm:w-25 w-0 h-0  ' src={gameover} alt="" />
          </div>
          <div className='flex flex-col justify-center items-center '>
            <h1 className='text-white play'>{reject}</h1>
            <h1 className='text-white play py-2'>Failed</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(Tasklist)
