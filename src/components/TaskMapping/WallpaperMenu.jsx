import React from 'react'
import Wall from '../../assets/logos/wall.png'
import back2 from '../../assets/wallpapers/back2.png'
import back3 from '../../assets/wallpapers/back3.jpg'
import back4 from '../../assets/wallpapers/back4.jpg'
import back5 from '../../assets/wallpapers/back5.jpg'
import back7 from '../../assets/wallpapers/back7.jpg'
import back8 from '../../assets/wallpapers/back8.jpg'
import back9 from '../../assets/wallpapers/back11.jpg'
import back10 from '../../assets/wallpapers/back10.jpg'
const WallpaperMenu = ({wallpaper, winCol, close}) => {
  return (
    <>
         <div className='bg-white  rounded- border-1 border-gray-500 w-25 h-auto dark:xl:top-140 dark:xl:left-100 dark:md:top-60 dark:md:left-140 dark:lg:top-60  absolute xl:top-140 xl:left-105 md:top-60 md:left-140 lg:top-60    '>
                    <div className='flex flex-col justify-around w-full'>
                      <h1 className='text-[10px] border-b-2  border-gray-200 flex justify-center font-sans font-semibold '>Wallpaper Menu</h1>
                      <button onClick={() => {
                        
                        wallpaper(back3)
                        winCol("#427A43")
                        close()
                       //  setmonCol("#427A43")
                        }} className='border-b-1 border-b-gray-200 w-full mt-2 '>
                         <h1 className='flex text-[10px] font-sans font-semibold px-2 hover:bg-blue-500  hover:text-white duration-500'>Green</h1>
                      </button>
                      <button onClick={() => {
            
                       wallpaper(back4)
                       winCol("#D53302")
                       close()
                       // setmonCol("#FEEE91")
                      }} className='border-b-1 border-b-gray-200 w-full  '>
                           <h1 className='flex text-[10px] font-sans font-semibold px-2 hover:bg-blue-500 hover:text-white duration-500'>Orange</h1>
                      </button>
                      <button onClick={() => {
            
                        wallpaper(back5)
                        winCol("#193CB8")
                        close()
                       //  setmonCol("#1B3C53")
                      }} className='border-b-1 border-b-gray-200 w-full  '>
                           <h1 className='flex text-[10px] font-sans font-semibold px-2 hover:bg-blue-500 hover:text-white duration-500'>Blue</h1>
                     
                      </button>
                      <button onClick={() => {
            
                        wallpaper(back8)
                        winCol("#FD8F49")
                        close()
                       //  setmonCol("#1B3C53")
                      }} className='border-b-1 border-b-gray-200 w-full  '>
                           <h1 className='flex text-[10px] font-sans font-semibold px-2 hover:bg-blue-500 hover:text-white duration-500'>Citylife</h1>
                     
                      </button>
                      <button onClick={() => {
            
                        wallpaper(back10)
                        winCol("#2368B5")
                        close()
                       //  setmonCol("#1B3C53")
                      }} className='border-b-1 border-b-gray-200 w-full  '>
                           <h1 className='flex text-[10px] font-sans font-semibold px-2 hover:bg-[#2368B5] hover:text-white duration-500'>Village</h1>
                     
                      </button>
                      <button onClick={() => {
            
                        wallpaper(back9)
                        winCol("#F3A4AF")
                        close()
                       //  setmonCol("#1B3C53")
                      }} className='border-b-1 border-b-gray-200 w-full  '>
                           <h1 className='flex text-[10px] font-sans font-semibold px-2 hover:bg-blue-500 hover:text-white duration-500'>Sunflower</h1>
                     
                      </button>
                      
                      
                      
                      <button className="  w-full " onClick={()=> {
                        wallpaper(back2)
                        winCol("#FEA314")
                        close()
                       //  setmonCol("#FC63B6")
                      }}>
                           <h1 className='flex text-[10px] font-sans  font-semibold px-2 hover:bg-blue-500 hover:text-white duration-500'>Reset</h1>
                      
                      </button>
         
                      </div>
                      
                    </div>
           
         </> 
  )
}

export default WallpaperMenu
