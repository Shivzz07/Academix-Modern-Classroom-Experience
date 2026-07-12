import { React, useState, useRef, useContext } from "react";
import TextType2 from "./TextType2";
import GlareHover from "./GlareHover";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";
import { TasksContext } from "../TaskList/AllTasks";

function Pricing() {
  const [textColor, setTextColor] = useState("#4a5565");
  const [divColor, setDivColor] = useState("4a5565");
  const customColor = "#FF0000";
  const { dark } = useTheme();
  const { aura_count, setaura } = useContext(TasksContext);

  return (
    <div
      id="pricing"
      className="w-full flex flex-col justify-center items-center "
    >
      <div className="text-2xl font-sans sm:text-4xl flex justify-center font-extralight sm:mt-5 pb-10 sm:pb-0 cursor-crosshair">
        <div className="">
          <TextType2
            text={["yoo pls buy this I am broke T_T", "PRICING"]}
            typingSpeed={25}
            pauseDuration={5000}
            showCursor={true}
          />
        </div>
        {/* {dark && (
          <div className="flex flex-row font-sans text-white">
            <h1>Pricing</h1>
          </div>
        )} */}
      </div>
      <div className="flex flex-col sm:flex sm:flex-col w-full h-full sm:justify-center  gap-10   sm:items-center items-center sm:mx-30 md:mx-100 justify-center sm:mt-10 pt-5 sm:gap-5 ">
        <div style={{ height: "300px", position: "relative" }} className="hidden md:flex">
        
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1500}
            playOnce={false}
          >
            <div
              className="flex hidden md:flex hover:border-white hover:bg-purple-400 w-full h-full   duration-700 transition-all  dark:border-black  bg-gray-500   hover:drop-shadow-gray-300 group-hover:bg-blue-400 "
                onMouseEnter={() => setDivColor("#9810FA")}
              onMouseLeave={() => setDivColor("#4a5565")}
            >
              <div className="flex  flex-col justify-center px-4 ">
                <div className="flex flex-row sm:gap-4">
                  <h1 className="bold text-white sm:text-[40px] text-[30px] flex">
                    {" "}
                    FREE
                  </h1>
                  <Link
                    to="/register"
                    style={{ backgroundColor: divColor }}
                    className="comp text-sm flex sm:flex sm:justify-center sm:items-center bg-gray-600 transition-all px-6 duration-300 rounded-full   font-extralight text-white hover:bg-white hover:text-[#7d2fd0] cursor-pointer"
                      onMouseEnter={() => setDivColor("#FFFFFF")}
              onMouseLeave={() => setDivColor("#D500FF")}
                    onClick={() => setaura(0)}
                  >
                    0+ Aura
                  </Link>
                </div>
                <div className="flex flex-col sm:gap-5 sm:pt-8 text-white gap-2 pt-8">
                  <h1> Start with 0 aura and grind your way up </h1>
                  <h1> Draw and doodle directly on your dashboard</h1>
                  <h1 className="hidden sm:block">
                    {" "}
                    Full access to quests and weekly aura drops{" "}
                  </h1>
                  <h1 className="hidden sm:block">
                    Basic dashboard customization and wallpapers{" "}
                  </h1>
                </div>
              </div>
            </div>
          </GlareHover>
        </div>
        <div>
          <div className="first hover:border-white md:hidden duration-700 w-full  transition-all pb-8 rounded-xl bg-purple-400  border-1 border-green-300 hover:drop-shadow-gray-300 group-hover:bg-blue-400">
                    
                    <div className="flex flex-col justify-center items-center pt-6 gap-4 overflow-hidden  px-10">
                      <h1 className="bold text-white text-3xl flex justify-center">
                        {" "}
                       FREE
                      </h1>
                      <p className="flex  pt-2 text-sm flex-col text-white font-extralight ">
                       <h1>1. Start with 0 aura and grind your way up </h1>
                  <h1> 2. Draw and doodle directly on your dashboard</h1>
                      </p>
                      <Link
                    to="/register"
                 
                    className="px-4 rounded-xl py-2  text-white comp bg-purple-600 hover:bg-white hover:text-purple-600 duration-500 "
                   
                    onClick={() => setaura(0)}
                  >
                    0+ Aura
                  </Link>

                    </div>
                  </div>
        </div>

        <div style={{ height: "300px", position: "relative" }}  className="hidden md:flex">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1500}
            playOnce={false}
          >
            <div
              className={`hover:border-white hover:bg-amber-400 duration-700 w-full h-full  transition-all sm:pb-10 sm:pr-8 pb-8   bg-gray-400  hover:drop-shadow-gray-300 group-hover:bg-blue-400 `}
              onMouseEnter={() => setTextColor("#FF5308")}
              onMouseLeave={() => setTextColor("#4a5565")}
            >
              <div className="flex flex-col justify-center pt-6 pb-10 px-4  overflow-hidden ">
                <div className="flex flex-row">
                  <div className="flex flex-row gap-2">
                      <h1 className="bold text-white line-through   sm:text-[40px] text-[25px] flex">
                    $5 -/mo
                  </h1>
                    <h1 className="bold text-white sm:text-[40px] text-[25px] flex">
                    FREE
                  </h1>
                  </div>
                
                  <nav>
                    <div className="flex flex-row px-4 gap-2 ">
                       <Link
                      to="/register"
                      style={{ backgroundColor: textColor }}
                      className={`comp text-sm flex transition-all duration-300 px-4 py-4 rounded-full  font-extralight text-white cursor-pointer  hover:text-red-400`}
                      onMouseEnter={() => setTextColor("#ffffff")}
                      onMouseLeave={() => setTextColor("#FF5308")}
                      onClick={() => setaura(999)}
                    >
                      999+ Aura
                    </Link>
                    <h1 className="text-sm text-white play py-4">
                    {"(Free for first 100 users)"}
                  </h1>
                    </div>
                   
                  </nav>
                </div>
                <div className="flex flex-col sm:gap-5 sm:mt-8 text-white">
                   
                  <h1 className="">
                    Kickstart with 999 aura — hit the ground running
                  </h1>
                  <h1>
                    {" "}
                    Quest streaks with daily aura drops — never lose momentum
                  </h1>
                  <h1 className="hidden sm:block">
                    Build your own ID card with full avatar customization{" "}
                  </h1>
                  <h1 className="hidden sm:block">
                    Premium wallpapers, widgets and full dashboard
                    personalization{" "}
                  </h1>
                </div>
              </div>
            </div>
          </GlareHover>
        </div>

        <div>
          <div 
          className="first hover:border-white md:hidden duration-700 w-full  transition-all pb-8 rounded-xl bg-amber-400  border-1 border-green-300 hover:drop-shadow-gray-300 group-hover:bg-blue-400"
          
          >
                    
                    <div className="flex flex-col justify-center items-center pt-6 gap-4 overflow-hidden px-10">
                      <div className="flex flex-row gap-2">
                        <h1 className="bold text-white text-3xl flex justify-center line-through decoration-red-500">
                        {" "}
                       $5 -/mo
                      </h1>
                       <h1 className="bold text-white text-3xl flex justify-center ">
                        {" "}
                     FREE
                      </h1>
                      </div>
                     
                      <p className="flex pt-2 text-sm flex-col text-white font-extralight ">
                       <h1>1.Kickstart with 999 aura, added momentum </h1>
                  <h1> 2.Build own ID card with full avatar customization{" "}</h1>
                      </p>
                      <div className="flex flex-col justify-center items-center gap-4">
                      <Link
                    to="/register"
                    
                    className="px-4 rounded-xl py-2 text-white hover:text-[#FF5308] comp bg-[#FF5308] hover:bg-white duration-500 "
                   
                    onClick={() => setaura(999)}
                  >
                    999+ Aura
                  </Link>
                  <h1 className="text-sm text-[#dd4808] play">
                    {"(Free for first 100 users)"}
                  </h1>
                
</div>
                    </div>
                  </div>
        </div>
        
      </div>
    </div>
  );
}

export default Pricing;
