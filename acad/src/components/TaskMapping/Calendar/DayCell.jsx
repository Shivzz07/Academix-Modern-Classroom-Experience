import {React,useState, memo, useContext} from 'react'
import TaskDialog from './TaskDialog.jsx'
import {pulse} from 'react-animations'
import { TasksContext } from '../../TaskList/AllTasks.jsx'


const DayCell = ({cur_color, month , day,daymob ,year, height, accept_task, reject_task , complete_task}) => {

   
     const cur_month = ["January","Feburary","March","April", "May","June","July","August","September","October","November", "December"]
    const {random_color, random_emoji,task_stat, settask_stat} = useContext(TasksContext)
    const ransom_color = random_color.toString()
    const tasks = task_stat;

    const format_date = `${year}-${month}-${day}` 
    let aura = 999;
    let aura_deduct=0;
    let date = new Date()


  const formatted_date = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` 
  const[showDialog,setshowDialog]= useState(false);

  
  function assignTasks(tasks)
  {
    if(tasks.accepted_status == "rejected")
    {
           
            return false;
    }
    if(tasks.date === format_date && tasks.deadline > formatted_date)
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

    
    const [show_dialog,setshow_dialog] = useState(true)
  
   function assignTasksmob(tasks)
  {
    
    
    if(tasks.accepted_status == "rejected")
    {
           
            return false;
    }
    if(tasks.date === format_date && tasks.deadline > formatted_date)
        {
          aura_deduct = aura-4;
          return true;
        }
        else
        {
          return false;
        }
  }


  const mobile_tasks = task_stat.filter(assignTasksmob);
  const accepted_task = mobile_tasks.filter((task) => task.accepted_status ==="pending")

    
    
    
 


  return (
    <>
    
      <div className={`lg:flex lg:flex-row lg:justify-center lg:items-center `}  >
        <div className={` lg:w-100 hiddem  `} style={{height: height!=0 ? height*4 : height}} >            
          <div className='hidden lg:bg-white lg:border-1  lg:border-e-gray-100 lg:flex lg:flex-col lg:h-full lg:w-full '>
           
            <h1 className='lg:px-5 lg:text-white' style={{backgroundColor:cur_color}}>{day !==0 && day}</h1> 
             { 
            task4thisday.map(tasks => 
              (
            
            <div  className='hidden lg:flex lg:flex-col lg:xl:text-sm  lg:lg:text-[10px] lg:h-full ' style={{backgroundColor:random_color}}>
              <div className='lg:flex lg:justify-end lg:px-2'>
                <h1>{random_emoji}</h1>
              </div>
              <div className='hidden xl:pt-2 lg:px-2  xl:px-4 lg:pt-4 lg:text-[8px] xl:text-[10px]'>
                <button className='lg:relative  lg:cursor-pointer ' >
                  <h1 className='lg:underline' onClick={() => {
                  setshowDialog(true)
                  
                }}>{tasks.title}</h1>
                </button>
                
                 <h1 className='hidden lg:block '>Deadline : {tasks.deadline}</h1>
              </div>
              
            </div>
              ))
               }
               {
        showDialog && (<TaskDialog close={() => setshowDialog(false)} task={tasks}  day = {day} ran_color = {ransom_color} year ={year} month={month} accept_task={accept_task} reject_task={reject_task} complete_task={complete_task} />)
              }
          </div>   
      </div>
       <div className='lg:hidden'>

        <h1 className='lg:px-5 lg:text-white' style={{backgroundColor:cur_color}}>{daymob !==0 && day}</h1> 
       {mobile_tasks.map(t => (
         
      <div key={t.id} className='lg:hidden flex flex-col w-full  rounded-2xl shadow-lg border-1'>
        <div className='flex flex-col px-5 py-4 gap-2 w-full' style={{backgroundColor: random_color}}>
          
          <div className='flex flex-row justify-between items-center w-full'>
            <span className='text-white text-[11px] font-semibold px-3 py-1 rounded-full' style={{backgroundColor: cur_color}} > Date: {t.date}</span>
            <span className='text-white text-[11px] font-semibold px-3 py-1 rounded-full' style={{backgroundColor: cur_color}}> Deadline {t.deadline}</span>
          </div>

          <h2 className='text-white text-lg underline play mt-1'>{t.title}</h2>
          <p className='text-white text-xs leading-relaxed play opacity-90'>{t.content}</p>

        </div>


        <div className='flex flex-row w-full'>
          {accepted_task.map(t => 
                    ( 
                      <>

                      <button className='bg-teal-700 text-[#97FCBC] hover:bg-[#97FCBC] hover:text-teal-700 w-full duration-100' 
                          key = {t.id}
                      onClick={() =>
                            {
                              
                              updateTask(t.id, "accepted");
                              accept_task()
                              alert("You have accepted this task succesffuly")
                              
                            }
                          } >Accept</button> 

                      </>
                    ))}
                    {show_dialog &&
                    <>
                    <button className='bg-[#FFBF5D] w-full text-white  hover:bg-[#985b00] duration-500' 
                    key={t.id}
                    onClick={() => 
                      {
                      updateTask(t.id, "rejected")
                      setshow_dialog(false)
                      reject_task()
                      }}>Reject</button>
                    <button className='bg-[#8DBCFF] w-full text-blue-800 hover:bg-blue-800 hover:text-[#8DBCFF]  duration-500' 
                    onClick={() => {
                      updateTask(t.id, "rejected")
                      setshow_dialog(false)
                      complete_task()}}>Completed</button>
                    </>}
        </div>
      </div>
    ))}

      </div>
    </div>
      </>
  )
}

export default memo(DayCell);