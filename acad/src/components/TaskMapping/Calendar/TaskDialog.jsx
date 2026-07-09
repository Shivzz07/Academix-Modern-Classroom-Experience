import {React,useState, memo, useContext} from 'react'
import { TasksContext } from '../../TaskList/AllTasks'

const TaskDialog = ({close, day,month,year, ran_color , accept_task , reject_task , complete_task}) => {

 const format_date = `${year}-${month}-${day}`
 
 const [show_accept,setshow_accept] = useState(true)
 const [show_dialog,setshow_dialog] = useState(true)
 const {task_stat, updateTask} = useContext(TasksContext)
 const task = task_stat;

  function assignTasks(tasks)
  {
    
    if(tasks.date === format_date)
        {
            return true;
                  
        }
    else
        {
          return false;
        }
  }

  const task4thisday = task.filter(assignTasks);
  const accepted_task = task4thisday.filter((task) => task.accepted_status ==="pending")
  console.log(accepted_task)
  return (
    
    <>
              
              <div className={`play border-1  bg-white absolute xl:top-[50%] xl:left-[50%] xl:w-100 translate-[-50%] lg:top-[50%] lg:left-[50%] rounded-xl  flex`}>
                <div className='flex flex-col gap-4 w-full '>
                  <div className=' flex justify-end rounded-t-xl' style={{backgroundColor:ran_color}}>
                    <button className='hover:bg-red-500 hover:text-white duration-200 rounded-tr-xl px-5  ' onClick={close}>X</button>
                  </div>
                  
                  {task4thisday.map(tasks => (
                  
                    <>
                  <div className='flex flex-col xl:w-full h-full duration-500 text-sm'>
                     <p className='underline xl:w-full px-4'>{tasks.title}</p> 
                     <p className='xl:w-full px-4'>{tasks.content}</p>
                  </div>
                  <div className='flex flex-row gap-2 mx-2 mb-2 justify-center lg:scale-[80%] xl:scale-100 '>
                    
                    {accepted_task.map(tasks => 
                    ( 
                      <>
                      {show_accept && 
                      <button className='bg-teal-700 text-[#97FCBC] hover:bg-[#97FCBC] hover:text-teal-700 rounded-sm px-4 duration-100' 
                          key = {tasks.id}
                      onClick={() =>
                            {
                              updateTask(tasks.id, "accepted");
                              accept_task()
                              alert("You have accepted this task succesffuly")
                            }
                                  } >Accept</button> 
                      }
                      </>
                    ))}
                    {show_dialog &&
                    <>
                    <button className='bg-[#FFBF5D] rounded-sm px-4 text-white  hover:bg-[#985b00] duration-500' 
                    key={tasks.id}
                    onClick={() => 
                      {
                      updateTask(tasks.id, "rejected")
                      setshow_dialog(false)
                      reject_task()
                      }}>Reject</button>
                    <button className='bg-[#8DBCFF] rounded-sm px-4 text-blue-800 hover:bg-blue-800 hover:text-[#8DBCFF]  duration-500' 
                    onClick={() => {
                      updateTask(tasks.id, "rejected")
                      setshow_dialog(false)
                      complete_task()}}>Completed</button>
                    </>}
                  </div>
                  </>
                   ))}
                  
                  
                
                </div>
              </div>
              </>
  )
}

export default memo(TaskDialog);
