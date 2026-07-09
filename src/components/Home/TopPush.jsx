import React from 'react'

function TopPush() {
  const back = () => {
    document.getElementById("top").scrollIntoView({behavior:"smooth"})
  }
  return (
    <a href='#' className=' bg-gray-300 dark:hover:bg-red-300 flex justify-center py-4 sm:py-0 sm:flex sm:flex-center sm:items-center text-white hover:bg-green-200 duration-300 transition-all'>
     Back to top
    </a>
  ) 
}

export default  TopPush
