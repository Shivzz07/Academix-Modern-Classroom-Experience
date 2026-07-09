import React, { useEffect, useState } from 'react'
import aura from '../../assets/aura.gif'
import rank from '../../assets/rank.gif'
import mission from '../../assets/mission.gif'
import TextPressure from './TextPressure';
  


function Features() {
   const [textColor, setTextColor] = useState("#FCCD05");
   
  return (
    
    <div id="features" className='back w-full flex-col justify-center group'
    onMouseLeave={() => setTextColor("#FCCD05")}>
      <div className='flex justify-center '>

<div style={{position: 'relative', height: '100px'}} className='mt-5 sm:mt-0'>
  
  <TextPressure
    text="~Features~"
    flex={false}
    alpha={false}
    stroke={false}
    width={false}
    weight={true}
    italic={false}
    textColor={textColor}
    strokeColor="#FBCD06"
    minFontSize={100}
  />
</div>
        {/* <h1 className='text sm:text-[100px] text-amber-300 text-[60px] mt-5 sm:mt-0 '>~Features~</h1> */}
      </div>
      <div className='flex flex-col sm:flex-row sm:justify-evenly justify-center items-center px-20 sm:gap-5 '
      >
        <div className='first hover:border-white hover:scale-[90%] scale-80  duration-700 transition-all pb-20 rounded-xl bg-blue-400 border-1 border-green-300 hover:drop-shadow-gray-300 group-hover:bg-blue-400'
           onMouseEnter={() => setTextColor("#7bf1a8")}
           
           >
          <img src={mission} alt="" className='hidden sm:flex  rounded-t-xl'/>
          <div className=' flex-col justify-center pt-6 overflow-hidden ' >
            <h1 className='text text-green-300 text-3xl flex justify-center'> QUEST</h1>
             <p className='flex px-2 pt-2 text-sm text-white font-extralight '>Admins drop challenges, and students can upload their work directly. A built-in AI study buddy helps along the way with clarifications and hints, making every task feel more like a guided mission</p>
          </div>
        </div>
        <div className='bg-pink-600 hover:border-white scale-85 rounded-xl border-[0.5px] border-blue-300 hover:scale-[95%] duration-700 pb-20' 
        onMouseEnter={() => setTextColor("#FDA5D5")}
           >
          <img src={aura} alt="" className='hidden sm:block rounded-t-xl' />
          <div className=' flex-col justify-center pt-6 overflow-hidden '>
            <h1 className='text text-pink-300 text-3xl flex justify-center'> AURA</h1>
             <p className='flex px-5 pt-2 text-sm text-white font-extralight '>Every approved submission earns Aura — the platform’s unique currency. Aura isn’t just points; it’s a mix of progress, recognition, and bragging rights that fuels motivation.</p>
          </div>
        </div>
        <div className='bg-[#E75C5F] hover:scale-[95%] scale-85 duration-700 hover:border-white pb-10 sm:pb-20 rounded-xl border-1
        ' 
        onMouseEnter={() => setTextColor("#E75C5F")}
           >
          <img src={rank} alt="" className='hidden sm:flex rounded-t-xl ' />
          <div className=' flex-col justify-center sm:pt-10 pt-6 pb-4   '>
            <h1 className='text text-amber-100 text-3xl flex justify-center'>RANKS</h1>
             <p className='flex px-5 pt-2 text-sm sm:overflow-hidden text-white font-extralight '>The leaderboard turns learning into a friendly competition. Students climb the ranks with their Aura, showcasing consistency, skill, and effort in a visible way</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
