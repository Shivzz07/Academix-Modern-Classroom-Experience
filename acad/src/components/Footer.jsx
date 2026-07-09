import React from 'react'

function Footer() {
  return (

    <div className='flex flex-row sm:px-0 sm:flex sm:flex-row sm:justify-around bg-amber-300  sm:items-center '>
        <div className='sm:px-10 pt-2 flex flex-col '>
            <h1 className='bold text-xl  text-red-600 sm:text-4xl px-8 pt-2'>Academix</h1>
            <h1 className='text-red-600 px-10 sm:text-md text-sm'>@2025 Academix</h1>
        </div>
        <div className='flex flex-row justify-center items-center sm:flex sm:flex-row sm:justify-center sm:items-center  gap-5'>
            <div className=' rounded-full duration-700 md:w-30 md:h-30 sm:w-20 sm:h-20 w-20 h-20'>
                <a href="https://www.linkedin.com/in/shivam-mittal-7z/" target='_blank' className=''>
                <img src="https://static.vecteezy.com/system/resources/previews/018/930/480/non_2x/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="" /></a>
            </div>
            <div className='rounded-full duration-700 md:w-25 md:h-25 sm:w-10 sm:h-10 w-10 h-10 '>
                 <a href="https://github.com/Shivzz07/" target='_blank' className=' text-white'>
                 <img src="https://img.icons8.com/fluent-systems-filled/512/40C057/github.png" alt="" /></a>
            </div>
            <div className=' rounded-full duration-700 md:w-20 md:h-20 sm:w-10 sm:h-10 w-10 h-10'>
                 <a href="https://www.instagram.com/mt_shivam7/" target='_blank' className=''>
                 <img src="https://cdn2.iconfinder.com/data/icons/2018-social-media-app-logos/1000/2018_social_media_popular_app_logo_instagram-512.png" alt="" className='rounded-full'/></a>
            </div>
            <div className='rounded-full  duration-700 md:w-35 md:h-25 sm:w-20 sm:h-15 w-10 h-10'>
                 <a href="https://x.com/crZzay_guy" target='_blank' className=' text-white '>
                 <img src="https://images.icon-icons.com/4029/PNG/512/twitter_x_new_logo_x_rounded_icon_256078.png" alt="" /></a>
            </div>
       </div>
    </div>
    

  )
}

export default Footer
