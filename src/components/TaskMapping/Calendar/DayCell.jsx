import {React,useState, memo, useContext} from 'react'
import TaskDialog from './TaskDialog.jsx'
import twemoji from '@twemoji/api';
import { TasksContext } from '../../TaskList/AllTasks.jsx'
import { createPortal } from 'react-dom'
import Stickman from '../../../assets/character/classic.gif'
import { AuthContext } from '../../../context/AuthContext.jsx'



const DayCell = ({cur_color, month , day,daymob ,year, height, curtask}) => {

   
     const cur_month = ["January","Feburary","March","April", "May","June","July","August","September","October","November", "December"]
  
    
    
 
 const emojis = [
    ..."😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😜😝🤪🤨🧐🤓😎🥸🤩🥳😏😒😞😔😟😕🙁☹️😣😖😫😩🥺😢😭😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🤗🤔🤭🤫🤥😶😐😑😬🙄😯😦😧😮😲🥱😴🤤😪😵🤐🥴🤢🤮🤧😷🤒🤕🤑🤠😈👿👹👺🤡💩👻💀☠️👽👾🤖🎃😺😸😹😻😼😽🙀😿😾🐶🐱🐭🐹🐰🦊🐻🐼🐻‍❄️🐨🐯🦁🐮🐷🐽🐸🐵🙈🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🪲🐞🦋🐌🐛🦟🪰🪱🐜🐢🐍🦎🐙🦑🦐🦞🦀🐡🐠🐟🐬🐳🐋🦈🐊🐅🐆🦓🦍🦧🐘🦣🦛🦏🐪🐫🦒🦘🦬🐃🐂🐄🐎🐖🐏🐑🦙🐐🦌🐕🐩🦮🐕‍🦺🐈🐈‍⬛🪶🐓🦃🦚🦜🦢🦩🕊️🐇🦝🦨🦡🦫🦦🦥🐁🐀🐿️🦔🍎🍏🍊🍋🍌🍉🍇🍓🫐🍈🍒🍑🥭🍍🥥🥝🍅🍆🥑🥦🥬🥒🌶️🫑🌽🥕🫒🧄🧅🥔🍠🥐🥯🍞🥖🥨🧀🥚🍳🧈🥞🧇🥓🥩🍗🍖🌭🍔🍟🍕🥪🥙🧆🌮🌯🥗🥘🍝🍜🍲🍛🍣🍱🥟🍤🍙🍚🍘🍥🥠🥮🍢🍡🍧🍨🍦🥧🧁🍰🎂🍮🍭🍬🍫🍿🍩🍪🥛🍼🫖☕🍵🍶🍺🍻🥂🍷🥃🍸🍹🧉🍾⚽🏀🏈⚾🥎🎾🏐🏉🎱🏓🏸🥅🏒🏑🏏🥍🏹🎣🤿🥊🥋🎽🛹🛼🛷⛸️🥌🎿⛷️🏂🪂🚗🚕🚙🚌🚎🏎️🚓🚑🚒🚐🛻🚚🚛🚜🛵🏍️🛺🚲🛴🚨🚦🚥🚧🛑⛽🚏🗺️🗿🗽🗼🏰🏯🎡🎢🎠⛲🎪🎭🎨🎬🎤🎧🎼🎹🥁🎷🎺🎸🪕🎻🎲🧩♟️🎯🎳🎮🕹️🎰",
  ].slice(0, 400);
    const [random_emoji] = useState(() => emojis[Math.floor(Math.random() * emojis.length)]);


      const colors = ["#FF5733","#33FF57","#3357FF","#FF33A8","#A833FF","#33FFF6","#FFC300","#FF8D1A","#8DFF1A","#1AFF8D","#1A8DFF","#8D1AFF","#FF1A8D","#4CAF50","#2196F3","#9C27B0","#E91E63","#FF9800","#795548","#607D8B","#00BCD4","#CDDC39","#F44336","#3F51B5","#009688","#673AB7","#FFEB3B","#03A9F4","#8BC34A","#FF5722","#1ABC9C","#2ECC71","#3498DB","#9B59B6","#34495E","#16A085","#27AE60","#2980B9","#8E44AD","#2C3E50","#F1C40F","#E67E22","#E74C3C","#95A5A6","#D35400","#C0392B","#BDC3C7","#7F8C8D","#FF6F61","#6B5B95","#88B04B","#F7CAC9","#92A8D1","#955251","#B565A7","#009B77","#DD4124","#D65076","#45B8AC","#EFC050","#5B5EA6","#9B2335","#DFCFBE","#55B4B0","#E15D44","#7FCDCD","#BC243C","#C3447A","#98B4D4","#FFB7B2","#91A8D0","#034F84","#F7786B","#9896A4","#DD4132","#BFD641","#7BC4C4","#FFA500","#40E0D0","#8A2BE2","#20B2AA","#DC143C","#00FA9A","#4682B4","#D2691E","#9ACD32","#FF4500","#6A5ACD","#2E8B57","#483D8B"];
    
      const [random_color] = useState(() => colors[Math.floor(Math.random() * colors.length)]);
      const ransom_color = random_color.toString() || ""

    let aura = 999;
    let aura_deduct=0;
    let date = new Date()
    const format_date = `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;

const formatted_date = `${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;


  
  const[showDialog,setshowDialog]= useState(false);
  const {user} = useContext(AuthContext);
  const {merged_tasks} = useContext(TasksContext)
    const tasks = merged_tasks;
    



  function assignTasks(tasks)
  {
    if(tasks.date === format_date)
        {
          aura_deduct = aura-4;
          return true;
        }
        else
        {
          return false;
        }
  }

  
    const task4thisday = tasks.filter(assignTasks);

    



  const mobile_tasks = task4thisday;

    
    const {accept,reject,complete,gif,setaccept,updateTaskStatus,acceptchange,rejectchange,completechange,aura_count, setaura,setreject,setcomplete} = useContext(TasksContext)
    const [task_name , settask_name] = useState("")
    const [auradialog, setauradialog] = useState(false);

    function accept_increment(){
      setaura(aura_count+10)
      setaccept(accept+1)
      setauradialog(false)
      
  }
  function complete_increment(){
      setaura(aura_count+20)
      setcomplete(complete+1)
      setauradialog(false)
  }
 


  return (
    <>
    
      <div className={`lg:flex lg:flex-row lg:justify-center lg:items-center `}  >
        <div className={` lg:w-100 hiddem  `} style={{height: height!=0 ? height*4 : height}} >            
          <div className=' lg:bg-white lg:border-1  lg:border-e-gray-100 lg:flex lg:flex-col lg:h-full lg:w-full '>
           
            <h1 className='lg:px-5 lg:text-white px-2 play' style={{backgroundColor:cur_color}}>{day !==0 && day}</h1> 
             { 
            task4thisday.map(tasks => 
              (
            
            <div  className='hidden lg:flex lg:flex-col lg:xl:text-sm  lg:lg:text-[10px] lg:h-full ' style={{backgroundColor:random_color}}>
              <div className='lg:flex lg:justify-end lg:px-2'>
              <h1 className='text-md border-1 border-gray-600 bg-white rounded-full'>{random_emoji}</h1>
              </div>
              <div className=' lg:px-2  xl:px-4  lg:text-[8px] xl:text-[8px] play text-white'>
                <button className='lg:relative  lg:cursor-pointer ' >
                  <h1 className='lg:underline' onClick={() => {
                  setshowDialog(true)
                  
                }}>{tasks.title}</h1>
                  
                </button>
                
                 <h1 className='lg:block '>Deadline : {tasks.deadline}</h1>
              </div>
              
            </div>
              ))
               }
               {
        showDialog && (<TaskDialog close_Win={() => setshowDialog(false)} task={tasks}  day = {day} ran_color = {ransom_color} year ={year} month={month}  random_emoji = {random_emoji}  />)
              }
          </div>   
      </div>
       <div className='lg:hidden'>

      
       {mobile_tasks.map(t => (
         
      <div key={t.id} className='lg:hidden flex flex-col w-full rounded-bl-2xl shadow-lg border-1 text-white' >
        <div className='flex flex-col px-5 py-4 gap-2 w-full' style={{backgroundColor: random_color}}>
          
          <div className='flex flex-row justify-between items-center w-full'>
            
            <span className='text-black text-[11px] font-semibold px-3 py-1 rounded-full' style={{backgroundColor: cur_color}}> Deadline : {t.deadline}</span>
           </div>
          <h2 className='text-white text-lg underline play mt-1'>{t.title}</h2>
          <textarea
                  value={t.content}
                  readOnly
                  placeholder="Enter the Quest Content"
                  required
                  rows={8}
                  className="px-4 py-2 w-full rounded-md outline-none resize-none overflow-y-scroll "
                />

        </div>


        <div className='flex flex-row justify-center w-full play text-sm gap-0  '>
          {t.accepted_status === "pending" && (
                  <>
                      <button className='bg-[#00D492] text-white rounded-bl-lg hover:border-2 hover:border-teal-700  hover:text-teal-700 w-full duration-100' 
                          key = {t.id}
                      onClick={() =>
                             {
                        updateTaskStatus(t.id, "accepted", 10);
                        acceptchange(1)
                        settask_name("Accept");
                              
                            }
                          } >Accept</button> 

            
                    <button className='bg-[#f4c300] duration-100  w-full text-white hover:border-2 hover:border-amber-600 hover:text-amber-600 ' 
                    key={t.id}
                    onClick={() => 
                      {
                      updateTaskStatus(t.id, "rejected", -5);
                        rejectchange(1)
                        alert("You have rejected this task -5 AURA");
                        setaura(aura_count - 5);
                        setreject(reject + 1);
                      
                      }
                      }>Reject</button>
                        </>
                )}
                {t.accepted_status === "accepted" && (
                    <button className='bg-[#8DBCFF] w-full rounded-br-lg hover:text-blue-800 hover:border-blue-800 hover:border-2 text-white  duration-500' 
                     key={t.id}
                    onClick={() => 
                      {
                        updateTaskStatus(t.id, "completed",20);
                      completechange(1)
                      
                      settask_name("Complete");
                      
                      }
                      }>Completed</button>
                )}
                {t.accepted_status === "rejected" && (
                  <p className="text-sm text-gray-400 flex justify-center items-center">
                    You rejected this quest.
                  </p>
                )}

                {t.accepted_status === "completed" && (
                  <p className="text-sm text-green-600 flex justify-center items-center">Quest completed!</p>
                )}
        </div>
      </div>
    ))}
    {auradialog &&
                     createPortal(
                       <div className="lg:hidden fixed inset-0 z-999 " >

                         <div className="absolute inset-0 backdrop-blur-md bg-black/30 "></div>

                         <div className="relative flex items-center justify-center h-full">
                           <div className="w-70 h-auto rounded-lg dark:grayscale bg-gray-700 shadow-xl">

                             <div className="flex flex-col justify-center gap-5">

                              
            
                               <div>
                                 <img src={Stickman} alt="" className="w-full h-auto rounded-t-lg dark:grayscale"/>
                               </div>

                               <div className="flex flex-col justify-center items-center py-4 gap-4 text-white dark:grayscale">
                                <div className='flex justify-center items-center play'>
                                 {task_name=="Accept" ? 
                            
                                 <span className="px-4 flex flex-col justify-center items-center play" >
                                  <h1>Accept this task for +10 AURA</h1>
                                  <h1>Click the collect button to accept this task.</h1>
                                  
                                 </span> 
                                
                                 : 
                                 <span className="px-4 flex flex-col justify-center items-center play text-sm" >
                                  <h1>Complete this task for +20 AURA</h1>
                            
                                  <h1>Click the collect button if you have completed this task.</h1>
                                  
                                 </span>
                                 }
                                 </div>

                                 <button onClick={task_name=="Accept" ? accept_increment : complete_increment} className="bg-blue-400 px-4 rounded-lg hover:scale-95 animate-pulse duration-300 cursor-pointer">
                                   Collect
                                 </button>
                               </div>

                             </div>

                           </div>
                         </div>

                       </div>,
                       document.body
                     )}

      </div>
    </div>
      </>
  )
}

export default memo(DayCell);