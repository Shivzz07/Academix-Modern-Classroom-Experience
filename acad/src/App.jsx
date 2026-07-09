import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './components/Home/Home'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'

import { Routes, Route } from 'react-router-dom'
import { TasksProvider } from './components/TaskList/AllTasks'

function App() {
const [user , setUser] = useState(null);
  console.log("APP USER:", user);
  return (
    <TasksProvider>
    <>
    <Navbar user={user} setUser={setUser}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login setUser={setUser}/>}/>
      <Route path="/login/employee" element={<EmployeeDashboard setUser={setUser}/>}/>
      <Route path="/login/admin" element={<AdminDashboard/>}/>
    </Routes>
    <Footer/>
    </>
     </TasksProvider>
  )
}

export default App
