import {React , useState,memo , Component, useContext, useEffect} from 'react'
import MonthSelector from './MonthSelector.jsx'
import Calendar from './Calendar/Calendar.jsx'
import WallpaperMenu from './WallpaperMenu.jsx'
import LiveClock from './LiveClock.jsx'
import AllQuestsbar from './AllQuestsbar.jsx'
import back2 from '../../assets/wallpapers/back2.png'
import { TasksContext } from '../TaskList/AllTasks.jsx'
import TaskMappingMobile from './TaskMappingMobile.jsx'
import { AuthContext } from '../../context/AuthContext.jsx'
import Drawing from './Drawing.jsx'


const TaskMapping2 = () => {

  
  const[selectMonth,setSelectedMonth] = useState(null)
  const [wallpaper, setWallpaper] = useState(back2)
  const[showWallpaper , setshowWallpaper] = useState(false)
  const [winCol, setwinCol] = useState("#FEA314")
  const [emoji , setEmoji] = useState("")
  const [color , setColor] = useState("#FB2C36")
  const [height_div , setHeight] = useState(0)


 const [savedWallpaper, setSavedWallpaper] = useState(() => localStorage.getItem('wallpaper') || back2)
 const [savedWinCol, setSavedWinCol] = useState(() => localStorage.getItem('winCol') || "#FEA314")

useEffect(() => {
  const storedWinCol = localStorage.getItem('winCol')
  if (storedWinCol) setwinCol(storedWinCol)  
}, [])

const handleWinColChange = (newCol) => {
  setwinCol(newCol)                          
  setSavedWinCol(newCol)                   
  localStorage.setItem('winCol', newCol)   
}

 useEffect(() => {
  const stored = localStorage.getItem('wallpaper')
  if (stored) setWallpaper(stored)
}, [])
 const handleWallpaperChange = (newWallpaper) => {
    setWallpaper(newWallpaper)         
    setSavedWallpaper(newWallpaper)     
    localStorage.setItem('wallpaper', newWallpaper)  
  }

  const { user } = useContext(AuthContext)

  const [drawingdialog, setdrawingdialog] = useState(false);
  const [remove, setremove] = useState(true);
  function reset() 
  {
    setdrawingdialog(false)
    setremove(true)
   
  }


  return (
    <>
    <div className=' lg:flex lg:flex-col lg:justify-center lg:items-center '  >
      
      <div className='hidden lg:w-[95%] xl:w-[95%] lg:mx-auto rounded-3xl lg  lg:flex lg:mb-10 lg:flex-col '>
        <AllQuestsbar winCol={winCol}/>
        
         <div className='xl:relative lg:relative xl:z-0 xl:h-[80vh] overflow-hidden' >
            {
                  drawingdialog && (<Drawing setremove={() => setremove(false)} closewin={reset} wallpaper={wallpaper}/>)
                  
            }
           <img src={wallpaper} alt="" className='w-full h-full absolute z-0 rotate-180'/>
           {remove &&
           <>
            <div className='xl:relative lg:relative xl:z-999   md:flex md:flex-row '>
               <MonthSelector onSelectedMonth={setSelectedMonth} 
               height_test = {setHeight}
                              onToggleWallpaper={() => setshowWallpaper(true)} 
                              setremove = {setremove}
                              setshowWallpaper ={setshowWallpaper}
                              setdrawingdialog = {setdrawingdialog}
                              Col={winCol} 
                              emoj={setEmoji}
                              color={setColor}

                />
                
                {selectMonth !== null && 
                <Calendar  month={selectMonth}
                           height = {height_div}
                           
                           Close_win={() => setSelectedMonth(null)}
                />}
           </div>
            </> }
            
        </div>
        {
                  showWallpaper && (<WallpaperMenu wallpaper={handleWallpaperChange}  winCol={handleWinColChange} close={() => setshowWallpaper(false)}/>)
        }
        
         <LiveClock Color={winCol}/>      
      </div>
    </div>
    </>
  )
}

export default memo(TaskMapping2)
