import {React , useState,memo , Component, useContext} from 'react'
import MonthSelector from './MonthSelector.jsx'
import Calendar from './Calendar/Calendar.jsx'
import WallpaperMenu from './WallpaperMenu.jsx'
import LiveClock from './LiveClock.jsx'
import AllQuestsbar from './AllQuestsbar.jsx'
import back2 from '../../assets/back2.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TasksContext } from '../TaskList/AllTasks.jsx'
import TaskMappingMobile from './TaskMappingMobile.jsx'


const TaskMapping2 = ({acc,rej,com}) => {
  const[selectMonth,setSelectedMonth] = useState(null)
  const [wallpaper, setWallpaper] = useState(back2)
  const[showWallpaper , setshowWallpaper] = useState(false)
  const [winCol, setwinCol] = useState("#FEA314")
  const [emoji , setEmoji] = useState("")
  const [color , setColor] = useState("#FB2C36")
  const [height_div , setHeight] = useState(0)
  console.log(winCol);



  return (
    <>
    <div className=' lg:flex lg:flex-col lg:justify-center lg:items-center '  >
      <div className='hidden lg:w-[95%] xl:w-[95%] lg:mx-auto rounded-3xl lg  lg:flex lg:mb-10 lg:flex-col '>
        <AllQuestsbar winCol={winCol}/>
         <div className='xl:relative lg:relative xl:z-0 xl:h-[80vh] overflow-hidden' >
           <img src={wallpaper} alt="" className='lg:flex xl:w-full lg:w-full lg:z-0 absolute xl:z-0 xl:rotate-180'/>
           <div className='xl:relative lg:relative xl:z-10   md:flex md:flex-row '>
               <MonthSelector onSelectedMonth={setSelectedMonth} 
               height_test = {setHeight}
                              onToggleWallpaper={() => setshowWallpaper(true)} 
                              Col={winCol} 
                              emoj={setEmoji}
                              color={setColor}

                />
                
                {selectMonth !== null && 
                <Calendar  month={selectMonth}
                           height = {height_div}
                           accept_task = {acc}
                           reject_task = {rej}
                           complete_task = {com}
                           Close_win={() => setSelectedMonth(null)}
                />
                }
                
                
           </div>
            
        </div>
        {
                  showWallpaper && (<WallpaperMenu wallpaper={setWallpaper} winCol={setwinCol} close={() => setshowWallpaper(false)}/>)
        }
         <LiveClock Color={winCol}/>      
      </div>
    </div>
    </>
  )
}

export default memo(TaskMapping2)
