import React, { createContext, useState } from 'react'
import login_rewamp from '../../assets/login_rewamp.gif'
import EmployeeDashboard from '../Dashboard/EmployeeDashboard';
import { Navigate, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import App from '../../App';

const Login = ({setUser}) => {

  const [userName, SetuserName] = useState("");
  const [email,setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleinput = (e) => {
    var s = e.target.value;
    if(s.length>10)
    {
      alert('username should be less than 10 characters')
    }
    else
    {
      SetuserName(e.target.value); // 'SetuserName' sets the 'userName' with the value of the input from the form (value) 
    }
    
  }
  const SubmitForm = (e) => {
    e.preventDefault();
    var emailId = email;
    
    if(emailId == "a@gmail.com")
    {
     
      setUser({role:"employee"})
      navigate("/login/employee");
      
    }
    else
    {
      
      alert('Email is invalid')
      setEmail("")
      setPass("")
      SetuserName("")
    }
    
  }

  return (
    <>
<div className=' flex justify-center items-center mb-2 '>
      
      <div className='flex justify-center border-1 bg-blue-400 rounded-4xl scale-[70%]  '>
        <div className='md:block hidden h-auto '>
          <img src={login_rewamp} alt="" className='min-h-full rounded-tl-4xl rounded-bl-4xl ' />
      </div>
      <div className='  flex flex-col w-auto md:px-10 gap-5 xl:py-50 lg:py-20'>
        <div className='flex flex-col gap-4 items-center '>
          <h1 className='text text-white text-5xl flex items-center justify-center'>Login</h1>
          <h1 className='text text-[#393E3C] text-5xl  flex items-center justify-center'>Welcome!👋</h1>
          <h1 className='text text-[#393E3C] text-5xl underline  flex items-center justify-center'>{userName}</h1>
        </div>
          
        <form 
        onSubmit={(e) => {
          SubmitForm(e)
        }}
        action="" className='flex flex-col items-center justify-center h-auto py-10 gap-3 px-10 '>
          <input type="name" value={userName} onChange={handleinput} placeholder='Enter your nick name'  className=' border-1  w-80 h-10 bg-white text-blue-400 px-2'/>
          <input type="email"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
           placeholder='Enter your email address' 
           required className=' border-1  w-80 h-10 bg-white text-blue-400 px-2'/>
          <input type="password" 
          value={pass}
          onChange={(e)=>{
            setPass(e.target.value)
          }} 
          placeholder='Enter your password' 
          required className='border-1  w-80 h-10 bg-white text-blue-400 px-2' />
          <button 
          
          className='bg-blue-800 px-4  text-blue-200 hover:bg-[#FFD230] hover:text-black duration-500 play cursor-pointer'>Let's go!</button>
        </form>
      </div>
      </div>
    </div> 
  
</>
  )
}

export default Login
