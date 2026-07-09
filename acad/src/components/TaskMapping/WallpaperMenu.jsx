import React from 'react'
import Wall from '../../assets/Wall.png'
import back2 from '../../assets/back2.png'
import back3 from '../../assets/back3.jpg'
import back4 from '../../assets/back4.jpg'
import back5 from '../../assets/back5.jpg'
const WallpaperMenu = ({wallpaper, winCol, close}) => {
  return (
    <>
         <div className='bg-[#FFF0CE] duration-1000 flex justify-center  w-20 h-30 absolute xl:top-126 xl:left-110 lg:top-48 lg:left-150 rounded-3xl'>
           <div className='flex flex-col justify-center items-center gap-2'>
             <button onClick={() => {
               
               wallpaper(back3)
               winCol("#427A43")
              //  setmonCol("#427A43")
               }}>
                 <div className='w-10 h-3 bg-gradient-to-r from-green-500 to-cyan-300 rounded-3xl hover:animate-pulse hover:transition-all '></div>
             </button>
             <button onClick={() => {
   
              wallpaper(back4)
              winCol("#D53302")
              // setmonCol("#FEEE91")
             }}>
                <div className='w-10 h-3  bg-linear-to-r from-red-500 via-orange-500 to-amber-500 rounded-3xl hover:animate-pulse hover:transition-all'></div>
             </button>
             <button onClick={() => {
   
               wallpaper(back5)
               winCol("#193CB8")
              //  setmonCol("#1B3C53")
             }}>
                <div className='w-10 h-3 bg-linear-to-t from-sky-400 to-indigo-400 rounded-3xl hover:animate-pulse hover:transition-all '></div>
             </button>
             <button className=" text-red-600 text-[10px] play hover:scale-90 hover:duration-50 rounded-3xl" onClick={()=> {
               wallpaper(back2)
               winCol("#FEA314")
              //  setmonCol("#FC63B6")
             }}>
               RESET
             </button>
             <button className=" bg-red-600 text-[10px] play hover:duration-700 px-2  rounded-full text-white hover:bg-green-600 hover:text-white  " onClick={close}>
               X
             </button>
             </div>
             
           </div>
           
         </> 
  )
}

export default WallpaperMenu
