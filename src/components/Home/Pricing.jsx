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
      className="w-full flex flex-col justify-center items-center pb-20"
    >
      <div className="text-2xl font-sans sm:text-5xl flex justify-center font-extralight sm:mt-5 cursor-crosshair">
        <div className="dark:hidden">
          <TextType2
            text={["yoo pls buy this I am broke T_T", "PRICING"]}
            typingSpeed={25}
            pauseDuration={5000}
            showCursor={true}
          />
        </div>
        {dark && (
          <div className="flex flex-row font-sans text-white">
            <h1>Pricing</h1>
          </div>
        )}
      </div>
      <div className="flex flex-col sm:flex sm:flex-col h-full sm:justify-center scale-[60%] gap-10 md:scale-[100%]   sm:items-center items-center sm:mx-30 md:mx-100 justify-center sm:mt-10 pt-5 sm:gap-5 ">
        <div style={{ height: "300px", position: "relative" }}>
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-45}
            glareSize={400}
            transitionDuration={1500}
            playOnce={false}
          >
            <div
              className="flex hover:border-white hover:bg-purple-400 w-full h-full   duration-700 transition-all sm:pb-10 dark:border-black sm:pr-5 bg-gray-500 sm:flex sm:items-start  hover:drop-shadow-gray-300 group-hover:bg-blue-400 "
              onMouseEnter={() => setDivColor("#7d2fd0")}
              onMouseLeave={() => setDivColor("#4a5565")}
            >
              <div className="flex flex-col justify-center pt-6 pb-10 pr-25 sm:scale-95 scale-95 ">
                <div className="flex flex-row sm:gap-4">
                  <h1 className="bold text-white sm:text-[40px] text-[30px] flex">
                    {" "}
                    Free
                  </h1>
                  <Link
                    to="/register"
                    style={{ backgroundColor: divColor }}
                    className="comp text-sm flex pt-2 sm:pt-0 sm:flex sm:justify-center sm:items-center bg-gray-600 transition-all duration-300 rounded-full px-8 mx-4 py-4 sm:py-0 sm:scale-95  font-extralight text-white hover:text-[#7d2fd0] cursor-pointer"
                    onMouseEnter={() => setDivColor("#ffff")}
                    onMouseLeave={() => setDivColor("#7d2fd0")}
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

        <div style={{ height: "300px", position: "relative" }}>
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
              <div className="flex flex-col justify-center pt-6 pb-10 scale-95 overflow-hidden ">
                <div className="flex flex-row">
                  <h1 className="bold text-white sm:text-[40px] text-[25px] flex">
                    $25 -/mo
                  </h1>
                  <nav>
                    <Link
                      to="/register"
                      style={{ backgroundColor: textColor }}
                      className={`comp text-sm flex sm:mt-2 sm:mx-3 mx-3 mb-4 sm:mb-0 transition-all duration-300 rounded-full px-5 py-4  font-extralight text-white cursor-pointer  hover:text-red-400`}
                      onMouseEnter={() => setTextColor("#ffff")}
                      onMouseLeave={() => setTextColor("#FF5308")}
                      onClick={() => setaura(999)}
                    >
                      999+ Aura
                    </Link>
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
      </div>
    </div>
  );
}

export default Pricing;
