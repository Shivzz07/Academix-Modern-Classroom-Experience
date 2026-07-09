import {React,useState,memo, useContext }from 'react'
import Navbar from '../Navbar'
import Tasklist from '../StudentDashboard/Tasklist'
import TaskMapping2 from '../TaskMapping/TaskMapping2'
import { TasksContext } from '../TaskList/AllTasks'
import TaskMappingMobile from '../TaskMapping/TaskMappingMobile'
const EmployeeDashboard = ({user}) => {

  const[accept,setaccept] = useState(0)
  const[reject,setreject] = useState(0)
  const[complete,setcomplete] = useState(0)

  console.log(complete)

  function accept_increment(){
    setaccept(accept+1)
  }
  function reject_increment(){
    setreject(reject+1)
  }
  function complete_increment(){
    setcomplete(complete+1)
  }



  return (
    <>
    <div className='lg:flex lg:flex-row xl:flex xl:flex-col lg:mx-auto xl:gap-0 flex flex-col gap-5 '>
    <div className='lg:flex lg:mx-auto lg:mb-auto'>
      <Tasklist user={user} accept={accept} reject={reject} complete={complete}/>
    </div>
    
    <div className='lg:mt-10 xl:mt-0 lg:h-full lg:w-full  '>
      <TaskMapping2 acc={accept_increment} rej={reject_increment} com={complete_increment}/>
      <TaskMappingMobile acc={accept_increment} rej={reject_increment} com={complete_increment}/>
    </div>
    
    </div>
    
    </>
      
    
  )
}

export default memo(EmployeeDashboard)
