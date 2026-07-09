import { animateMotionValue } from "framer-motion";
import React, { useState } from "react";

function ShowPage() {
  const yourbtn = document.querySelector(".your");
  yourbtn?.addEventListener("mouseenter", () => {});

  return (
    <div id="home" className="relative flex justify-center ">
      <img
        src="https://i.ibb.co/7tJH9LRr/school-bag-removebg-preview.png"
        alt=""
        className="absolute  z-99 hidden dark:grayscale duration-300 lg:flex xl:py-65 lg:py-15 lg:scale-65 xl:scale-85 "
      />
      <div className=" flex flex-col justify-center sm:py-20 py-15 w-full items-center">
        <div className="w-full hover:bg-blue-400 duration-400 " id="your">
          <h1 className=" flex justify-center text xl:text-9xl dark:bg-transparent  dark:border-0   lg:text-7xl md:text-5xl  mx-auto text-blue-400 hover:text-pink-200 cursor-crosshair text-4xl sm:px-40 px-0  relative z-10  animate-niche">
            YOUR
          </h1>
        </div>
        <div className="w-full hover:text-green-100 hover:bg-pink-500 duration-400 modern">
          <h1 className="flex justify-center text xl:text-9xl lg:text-7xl  dark:border-0  md:text-5xl relative z-10  dark:grayscale text-pink-500  hover:text-green-100 hover:border-pink-800   my-2 cursor-crosshair text-4xl   mx-auto sm:px-40">
            MODERN
          </h1>
        </div>
        <div className="w-full hover:text-amber-100 hover:bg-green-400 duration-400 class">
          <h1 className="flex justify-center text xl:text-9xl lg:text-7xl dark:bg-transparent hover:text-amber-100 dark:border-0 dark:grayscale   md:text-5xl  cursor-crosshair    text-green-400 text-4xl   mx-auto sm:px-60 tracking-wide">
            CLASSROOM
          </h1>
        </div>
      </div>
    </div>
  );
}

export default ShowPage;
