import React, { useContext, useState } from 'react'
import TaskMapping2_admin from './AdminComponents/PC/TaskMapping2_admin'
import TaskMappingMobile_admin from './AdminComponents/Mobile/TaskMappingMobile_admin'
import ChattingTest2 from './ChattingTest2.jsx'
import { TasksContext } from '../TaskList/AllTasks.jsx'
import { AuthContext } from '../../context/AuthContext.jsx'

const AdminDashboard = () => {

  const {user} = useContext(AuthContext)
  const [newscontent,setnewscontent] = useState("");

  return (
    <div className='lg:mt-10 xl:mt-10 lg:h-full lg:w-full  '>
      <div className=''>
      <TaskMapping2_admin newscontent={newscontent}/>
      <TaskMappingMobile_admin/>

      </div>
      <div className=' relative flex flex-col'>
        {/* <Testchat /> */}
        <ChattingTest2 setnewscontent={setnewscontent}/>
        
      </div>
    </div>
  )
}

export default AdminDashboard
