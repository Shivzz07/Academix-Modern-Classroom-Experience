import React from "react";
import { useTheme } from "../../context/ThemeContext";
import schoolbag from "../../assets/miscellaneous/school_bag.png";

function ShowPage() {
  const { dark } = useTheme();
  return (
    <div id="home" className="relative flex justify-center ">
      <img
        src={schoolbag}
        alt=""
        className="absolute  z-99 hidden  duration-300 lg:flex xl:py-65 lg:py-15 lg:scale-65 xl:scale-85 "
      />
      <div className="flex flex-col justify-center sm:py-20 py-15 w-full">
        <h1 className="wavy-container px-5 flex justify-center rotate-2 z-99 text xl:text-9xl dark:rotate-4 dark:hover:rotate-0   lg:text-7xl md:text-5xl mx-auto dark:text-blue-400 dark:hover:text-pink-200 text-blue-400 hover:text-pink-200 hover:bg-blue-400 hover:border-blue-700 duration-500 cursor-crosshair text-4xl sm:px-20 bg-pink-200 relative z-10 delay:0.2s animate-niche dark:bg-transparent ">
          YOUR
        </h1>

        <h1 className="wavy-container px-10 flex justify-center rotate-[-2deg] text xl:text-9xl dark:rotate-[-4deg]  dark:hover:rotate-0 lg:text-7xl   md:text-5xl relative z-10 text-green-100 dark:text-pink-500 dark:hover:text-pink-300 hover:text-pink-500 hover:bg-green-100 hover:border-pink-800 duration-500 cursor-crosshair text-4xl bg-pink-500 mx-auto sm:px-20 dark:bg-transparent">
          MODERN
        </h1>

        <h1 className="wavy-container px-15 flex justify-center text xl:text-9xl lg:text-7xl    md:text-5xl hover:text-green-400 cursor-crosshair hover:bg-amber-100 dark:text-green-400 dark:hover:text-green-300 hover:border-green-600 text-amber-100 text-4xl duration-500 bg-green-400 mx-auto sm:px-25 tracking-wide dark:bg-transparent">
          CLASSROOM
        </h1>
      </div>
    </div>
  );
}

export default ShowPage;
