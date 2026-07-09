import React from "react";

import back2 from "../../../assets/wallpapers/back2.PNG";
import back3 from "../../../assets/wallpapers/back3.jpg";
import back4 from "../../../assets/wallpapers/back4.jpg";
import back5 from "../../../assets/wallpapers/back5.jpg";
import back6 from "../../../assets/wallpapers/back6.jpg";
import back7 from "../../../assets/wallpapers/back7.jpg";
import back12 from "../../../assets/wallpapers/back12.jpg";
import back13 from "../../../assets/wallpapers/back13.jpg";
const WallpaperMenu = ({ wallpaper, winCol, close }) => {
  return (
    <>
      <div className="bg-white rounded- border-1 border-gray-500 w-25 h-auto absolute top-60 left-90  ">
        <div className="flex flex-col justify-around w-full">
          <h1 className="text-[10px] border-b-2  border-gray-200 flex justify-center font-sans font-semibold ">
            Wallpaper Menu
          </h1>
          <button
            onClick={() => {
              wallpaper(back3);
              winCol("#427A43");
              close();
              //  setmonCol("#427A43")
            }}
            className="border-b-1 border-b-gray-200 w-full mt-2 "
          >
            <h1 className="flex text-[10px] font-sans font-semibold px-2 hover:bg-blue-500  hover:text-green-300 duration-500">
              Green
            </h1>
          </button>
          <button
            onClick={() => {
              wallpaper(back4);
              winCol("#D53302");
              close();
              // setmonCol("#FEEE91")
            }}
            className="border-b-1 border-b-gray-200 w-full  "
          >
            <h1 className="flex text-[10px] font-sans font-semibold px-2 hover:bg-blue-500 hover:text-orange-200 duration-500">
              Orange
            </h1>
          </button>
          <button
            onClick={() => {
              wallpaper(back5);
              winCol("#193CB8");
              close();
              //  setmonCol("#1B3C53")
            }}
            className="border-b-1 border-b-gray-200 w-full  "
          >
            <h1 className="flex text-[10px] font-sans font-semibold px-2 hover:bg-blue-500 hover:text-blue-200 duration-500">
              Blue
            </h1>
          </button>
          <button
            onClick={() => {
              wallpaper(back6);
              winCol("#F696BB");
              close();
              //  setmonCol("#1B3C53")
            }}
            className="border-b-1 border-b-gray-200 w-full  "
          >
            <h1 className="flex text-[10px] font-sans  font-semibold px-2 hover:bg-blue-500 hover:text-blue-200 duration-500">
              Evening
            </h1>
          </button>
          <button
            onClick={() => {
              wallpaper(back7);
              winCol("#BCB341");
              close();
              //  setmonCol("#1B3C53")
            }}
            className="border-b-1 border-b-gray-200 w-full  "
          >
            <h1 className="flex text-[10px] font-sans font-semibold px-2 hover:bg-blue-500 hover:text-blue-200 duration-500">
              Daytime
            </h1>
          </button>

          <button
            onClick={() => {
              wallpaper(back12);
              winCol("#F28A65");
              close();
              //  setmonCol("#1B3C53")
            }}
            className="border-b-1 border-b-gray-200 w-full  "
          >
            <h1 className="flex text-[10px] font-sans font-semibold px-2 hover:bg-blue-500 hover:text-blue-200 duration-500">
              Watermelon
            </h1>
          </button>
          <button
            onClick={() => {
              wallpaper(back13);
              winCol("#209294");
              close();
              //  setmonCol("#1B3C53")
            }}
            className="border-b-1 border-b-gray-200 w-full  "
          >
            <h1 className="flex text-[10px] font-sans font-semibold px-2 hover:bg-blue-500 hover:text-blue-200 duration-500">
              Forest Heart
            </h1>
          </button>

          <button
            className="  w-full "
            onClick={() => {
              wallpaper(back2);
              winCol("#FEA314");
              close();
              //  setmonCol("#FC63B6")
            }}
          >
            <h1 className="flex text-[10px] font-sans  font-semibold px-2 hover:bg-blue-500 hover:text-white duration-500">
              Reset
            </h1>
          </button>
        </div>
      </div>
    </>
  );
};

export default WallpaperMenu;
