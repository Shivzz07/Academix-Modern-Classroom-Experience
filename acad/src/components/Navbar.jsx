import { Link } from "react-router-dom";
import { useContext, useState } from "react";
// import { userContext } from "./Auth/Login";

function Navbar({user}) {

  console.log("user",user)
  const pricing = () =>
  {
    document.getElementById("pricing").scrollIntoView({ behavior: "smooth" });
  }
  const home = () =>
  {
    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
  }
  const features = () =>
  {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
  }

  
  return (
    <>
<header className="w-full px-4 ">
      <div className='mx-auto max-w-8xl rounded-4xl   bg-no-repeat bg-yellow-300 flex justify-between px-3 sm:justify-between md:justify-between sm:gap-15 md:gap-12  py-4 my-2 sm:px-8 border-1 border-blue-600 '>
      
        <div className=' text-red-600'>
        <h1 className='bold sm:block tracking-wide text-sm sm:text-xl md:text-2xl '> Academix</h1>
        </div>
        <div className='text tracking-wide md:gap-12 sm:gap-6 hidden sm:flex'>
          
            
            
              <nav className="text tracking-wide md:gap-12 sm:gap-6 hidden sm:flex mt-2">

                {!user && (
                 <>
            <Link  className='bg-[#1B9FF6] px-4 rounded-xl text-[#ffffff] hover:bg-[#163963] hover:text-white duration-300 cursor-pointer' to="/" onClick={home}>Home</Link>
            <Link className='bg-[#1B9FF6] px-4 rounded-full text-[#ffffff] hover:bg-[#163963] hover:text-white duration-300 cursor-pointer ' to="/" onClick={features}>Features</Link>
            <Link className='bg-[#1B9FF6] px-4 rounded-full text-[#ffffff] hover:bg-[#163963] hover:text-white duration-300 cursor-pointer' to="/" onClick={pricing}>Pricing</Link>
                </>
                )}

                {user?.role === "employee" && (
                  <>
            <Link to="/login/employee"></Link>
            <Link  className='bg-[#1B9FF6] px-4 rounded-xl text-[#ffffff] hover:bg-[#163963] hover:text-white duration-300 cursor-pointer' to="/login/employee">Dashboard</Link>
           
              <Link  className='bg-[#1B9FF6] px-4 rounded-xl text-[#ffffff] hover:bg-[#163963] hover:text-white duration-300 cursor-pointer' to="/login/employee">Leaderboards</Link>
            </>
            )}
            </nav>

          
          
           
          
           
            
        </div>
          <nav>
            {!user && (<Link className='text-[#336db5] hover:text-[#1B9FF6] hover:underline' to="/login">Login</Link>)}
            {user?.role && (
              <Link className='text-[#336db5] hover:text-[#1B9FF6] hover:underline' to="/" onClick={()=>{
                setUser(null);
              }}>Logout</Link>)}
          </nav>

    </div>
    </header>
    
</>
  )
  
}
export default Navbar
