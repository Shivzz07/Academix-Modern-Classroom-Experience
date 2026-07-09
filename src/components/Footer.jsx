import React, { useContext } from 'react'
import { Button } from './ui/button'
import { TasksContext } from './TaskList/AllTasks'

function Footer() {
     const  {blogdialog, setblogdialog} = useContext(TasksContext);
  return (

    <div className='absolute z-99 w-full  flex flex-row sm:px-0 sm:flex sm:flex-row sm:justify-around bg-amber-300 dark:bg-gray-800 dark:border-t-2 dark:border-gray-500   sm:items-center '>
        <div className=' pt-2 flex flex-col justify-center items-center gap-2'>
            <h1 className='text text-xl  text-red-600 sm:text-4xl px-8 pt-2 dark:text-pink-400 '>Academix</h1>
            <h1 className='text-red-600 px-10 sm:text-md text-sm dark:text-white'>@2025 Academix</h1>
          <button className='hidden md:flex px-10 sm:text-md text-sm dark:text-white hover:underline text-red-600  hover:text-red-600  duration-200 dark:bg-transparent cursor-pointer rounded-2xl'
          onClick={() => {setblogdialog(true)}}>Blog</button>
            
        </div>
        <div className='flex flex-row justify-center items-center  gap-5 '>
            <div className=' rounded-full duration-700 '>
                <a href="https://www.linkedin.com/in/shivam-mittal-7z/" target='_blank' className=''>
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png " alt="" className='w-20 h-20 md:w-30 md:h-30 sm:w-20 sm:h-20' /></a>
            </div>
            <div className='rounded-full duration-700  '>
                 <a href="https://github.com/Shivzz07/" target='_blank' className=' text-white'>
                 <img src="https://img.icons8.com/fluent-systems-filled/512/40C057/github.png" alt=""  className='md:w-25 md:h-25 sm:w-10 sm:h-10 w-10 h-10'/></a>
            </div>
            <div className=' rounded-full duration-700 '>
                 <a href="https://www.instagram.com/mt_shivam7/" target='_blank' className=''>
                 <img src="https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_instagram-512.png" alt="" className='rounded-full md:w-20 md:h-20 sm:w-10 sm:h-10 w-10 h-10'/></a>
            </div>
            <div className='rounded-full  duration-700 '>
                 <a href="https://x.com/crZzay_guy" target='_blank' className=' text-white '>
                 <img src="https://images.icon-icons.com/4029/PNG/512/twitter_x_new_logo_x_rounded_icon_256078.png" alt="" className='md:w-30 md:h-20 sm:w-25 sm:h-20 w-15 h-10'/></a>
            </div>
       </div>
    </div>
    

  )
}

export default Footer
