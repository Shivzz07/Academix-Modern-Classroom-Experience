import {React,useState,useRef} from 'react'
import TextType2 from './TextType2'
import GlareHover from './GlareHover'
import { Link } from 'react-router-dom';




function Pricing() {

  const [textColor, setTextColor] = useState("#4a5565");
  const [divColor , setDivColor] = useState("4a5565");
  const customColor = "fffff";
  return (
    <div id="pricing" className='w-full flex flex-col justify-center items-center pb-20'>
      <div className='text-2xl font-sans sm:text-5xl flex justify-center font-extralight sm:mt-5'>
        <TextType2
             text={["yoo pls buy this I am broke T_T","PRICING"]}
             typingSpeed={25}
             pauseDuration={5000}
             showCursor={true}
             />
      </div>
      <div className='flex flex-col sm:flex sm:flex-col sm:justify-center sm:items-center items-center sm:mx-30 md:mx-100 justify-center sm:mt-10 pt-5 sm:gap-5 '>

      <div style={{ height: '300px', position: 'relative' }}>
        <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1500}
            playOnce={false}
          >
        <div className='flex hover:border-white hover:bg-purple-400  duration-700 transition-all sm:pb-10 sm:pr-5 bg-gray-500 sm:flex sm:items-start rounded-3xl hover:drop-shadow-gray-300 group-hover:bg-blue-400 '
        onMouseEnter={() => setDivColor("#7d2fd0")} 
        onMouseLeave={()=> setDivColor("#4a5565")}>
          <div className='flex flex-col justify-center pt-6 pb-10 pr-25 sm:scale-95 scale-95 ' >
            <div className='flex flex-row sm:gap-4'>
              <h1 className='bold text-white sm:text-[40px] text-[30px] flex'> Free</h1>
              <button  style={{backgroundColor:divColor }} className='comp text-sm flex pt-2 sm:pt-0 sm:flex sm:justify-center sm:items-center bg-gray-600 transition-all duration-300 rounded-full px-8 mx-4 py-4 sm:py-0 sm:scale-95  font-extralight text-white hover:text-[#7d2fd0] cursor-pointer'
              onMouseEnter={() => setDivColor("#ffff")} 
        onMouseLeave={()=> setDivColor("#7d2fd0")}>0+ Aura</button>
            </div>
            <div className='flex flex-col sm:gap-5 sm:pt-8 text-white gap-2 pt-8'>
              <h1> Access to AI-powered study assistant with limited queries per day</h1>
              <h1>Task management for assignments, deadlines, and reminders</h1> 
              <h1 className='hidden sm:block'>Basic progress tracking and analytics</h1>
              <h1 className='hidden sm:block'>Community support and resource sharing</h1>
            </div>
          </div>
        </div>
        </GlareHover>
        </div>

      <div style={{ height: '300px', position: 'relative' }}>
       <GlareHover
         glareColor="#ffffff"
         glareOpacity={0.3}
         glareAngle={-45}
         glareSize={400}
         transitionDuration={1500}
         playOnce={false}>
        <div className={`hover:border-white hover:bg-amber-400 duration-700 transition-all sm:pb-10 sm:pr-8 pb-8  rounded-3xl bg-gray-400  hover:drop-shadow-gray-300 group-hover:bg-blue-400 `}
        onMouseEnter={() => setTextColor("#FF5308")} 
        onMouseLeave={()=> setTextColor("#4a5565")}>
          <div className='flex flex-col justify-center pt-6 pb-10 scale-95 overflow-hidden ' >
            <div className='flex flex-row'>
              <h1 className='bold text-white sm:text-[40px] text-[25px] flex'>$25 -/mo</h1>
              <nav>
                <Link to="/login" style={{backgroundColor:textColor }} className={`comp text-sm flex sm:mt-2 sm:mx-3 mx-3 mb-4 sm:mb-0 transition-all duration-300 rounded-full px-5 py-4  font-extralight text-white cursor-pointer  hover:text-red-400`} 
              onMouseEnter={() => setTextColor("#ffff")} 
        onMouseLeave={()=> setTextColor("#FF5308")}>999+ Aura</Link>
              </nav>
              
            </div>
             <div className='flex flex-col sm:gap-5 sm:mt-8 text-white'>
              <h1 className=''>Unlimited AI queries with advanced explanations & personalized study guidance</h1>
              <h1>Smart task automation (auto-scheduling, prioritization, calendar sync)</h1> 
              <h1 className='hidden sm:block'>Detailed performance insights with downloadable reports</h1>
              <h1 className='hidden sm:block'>Priority support and early access to new features</h1>
            </div>
          </div>
        </div>
     </GlareHover>
     </div>

      </div>
      
    </div>
  )
}

export default Pricing
