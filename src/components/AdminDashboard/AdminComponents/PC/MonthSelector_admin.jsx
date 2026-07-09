import React, { useContext, useState } from "react";
import Wall from "../../../../assets/logos/Wall.png";
import clapper from "../../../../assets/logos/clapper.png";
import Janu from "../../../../assets/month_gfx/Janu.png"; 
import Feb from "../../../../assets/month_gfx/Feb.png";
import Mar from "../../../../assets/month_gfx/Mar.png";
import Apr from "../../../../assets/month_gfx/Apr.png";
import May from "../../../../assets/month_gfx/May.png";
import Jun from "../../../../assets/month_gfx/Jun.png";
import Jul from "../../../../assets/month_gfx/Jul.png";
import Aug from "../../../../assets/month_gfx/Aug.png";
import Sep from "../../../../assets/month_gfx/Sep.png";
import Oct from "../../../../assets/month_gfx/Oct.png";
import Nov from "../../../../assets/month_gfx/Nov.png";
import Dec from "../../../../assets/month_gfx/Dec.png";
import { TasksContext } from "../../../TaskList/AllTasks";

const MonthSelector = ({
  onSelectedMonth,
  onToggleWallpaper,
  Col,
  height_test,
  newscontent,
}) => {
  const [clapperdb, setclapperdb] = useState(false);

  const { random_color } = useContext(TasksContext);

  return (
    <div className="md:flex md:flex-row md:gap-5 mx-20 pt-4 ">
      <div className=" md:flex md:flex-col md:justify-evenly md:gap-8 md:flex-wrap">
        <button>
          {" "}
          <img
            src={Janu}
            alt=""
            className="w-20 h-20  hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500"
            style={{ "--bg-hover": Col }}
            onClick={() => {
              onSelectedMonth(0);
              height_test(18);
            }}
          />
        </button>
        <button>
          {" "}
          <img
            src={Feb}
            alt=""
            className="w-18 h-20    hover:bg-[var(--bg-hover)] hover:animate-pulse   hover:duration-500"
            style={{ "--bg-hover": Col }}
            onClick={() => {
              onSelectedMonth(1);
              height_test(24);
            }}
          />
        </button>
        <button>
          <img
            src={Mar}
            alt=""
            className="w-20 h-20  hover:bg-[var(--bg-hover)]   hover:animate-pulse  hover:duration-500"
            style={{ "--bg-hover": Col }}
            onClick={() => {
              onSelectedMonth(2);
              height_test(18);
            }}
          />
        </button>
        <button>
          <img
            src={Apr}
            alt=""
            className="w-20 h-20   hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500"
            style={{ "--bg-hover": Col }}
            onClick={() => {
              onSelectedMonth(3);
              height_test(18);
            }}
          />
        </button>
        <button>
          <img
            src={May}
            alt=""
            className="w-20 h-20    hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500"
            style={{ "--bg-hover": Col }}
            onClick={() => {
              onSelectedMonth(4);
              height_test(18);
            }}
          />
        </button>
        <button>
          <img
            src={Jun}
            alt=""
            className="w-20 h-20    hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500"
            style={{ "--bg-hover": Col }}
            onClick={() => {
              onSelectedMonth(5);
              height_test(18);
            }}
          />
        </button>
      </div>
      <div className=" md:flex md:flex-col md:justify-evenly md:gap-8 md:flex-wrap">
        <button>
          <img
            src={Jul}
            alt=""
            className="w-20 h-20  hover:bg-[var(--bg-hover)]   hover:animate-pulse     hover:duration-500"
            style={{ "--bg-hover": Col }}
            onClick={() => {
              onSelectedMonth(6);
              height_test(18);
            }}
          />
        </button>
        <button>
          <img
            src={Aug}
            alt=""
            className="w-20 h-20  hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500"
            style={{ "--bg-hover": Col }}
            onClick={() => {
              onSelectedMonth(7);
              height_test(18);
            }}
          />
        </button>
        <button>
          <img
            src={Sep}
            alt=""
            className="w-20 h-20 hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500"
            style={{ "--bg-hover": Col }}
            onClick={() => {
              onSelectedMonth(8);
              height_test(18);
            }}
          />
        </button>
        <button>
          <img
            src={Oct}
            alt=""
            className="w-20 h-20 hover:bg-[var(--bg-hover)]   hover:animate-pulse  hover:duration-500"
            style={{ "--bg-hover": Col }}
            onClick={() => {
              onSelectedMonth(9);
              height_test(18);
            }}
          />
        </button>
        <button>
          <img
            src={Nov}
            alt=""
            className="w-20 h-20  hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500"
            style={{ "--bg-hover": Col }}
            onClick={() => {
              onSelectedMonth(10);
              height_test(18);
            }}
          />
        </button>
        <button>
          <img
            src={Dec}
            alt=""
            className="w-20 h-20 hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500"
            style={{ "--bg-hover": Col }}
            onClick={() => {
              onSelectedMonth(11);
              height_test(18);
            }}
          />
        </button>
      </div>
      <div className=" md:flex md:flex-col md:gap-8 ">
        <button onClick={onToggleWallpaper}>
          <img src={Wall} alt="" className="w-20 h-20" />
        </button>
        <button onClick={() => {setclapperdb(true)}}>
          <img src={clapper} alt="" className="w-20 h-20" />
        </button>
      </div>
      {clapperdb && (
        <>
          <div
            className={`play border-1  bg-white z-99 absolute xl:top-[30%] xl:left-[50%] xl:w-100 translate-[-50%] lg:top-[30%] lg:left-[50%] rounded-xl  flex`}
          >
            <div className="flex flex-col gap-4 w-full ">
              <div
                className=" flex justify-between rounded-t-xl  "
                style={{ backgroundColor: random_color }}
              >
                <h1 className="lg:px-5 lg:text-white px-2 play cursor-pointer">
                  Gossips
                </h1>
                <button
                  className="hover:bg-red-500 hover:text-white duration-200 rounded-tr-xl  px-5  "
                  onClick={() => {setclapperdb(false)}}
                >
                  X
                </button>
              </div>
              <div className="text-black px-10 w-full pb-2">
                {newscontent.length>0 ? newscontent : "Please wait while we generate a conversation for you..."}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};




export default MonthSelector;
