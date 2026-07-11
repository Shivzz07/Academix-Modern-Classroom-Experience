import { React, useState, memo, Component, useContext, useEffect } from "react";
import MonthSelector from "./MonthSelector_admin.jsx";
import Calendar from "../Calendar_admin.jsx";
import WallpaperMenu_admin from "../WallpaperMenu_Admin.jsx";
import LiveClock from "../LiveClock_admin.jsx";
import AllQuestsbar from "../../../../components/TaskMapping/AllQuestsbar.jsx";
import back2 from "../../../../assets/wallpapers/back2.PNG";

const TaskMapping2_admin = ({ newscontent }) => {
  const [selectMonth, setSelectedMonth] = useState(null);
  const [wallpaper, setWallpaper] = useState(back2);
  const [showWallpaper, setshowWallpaper] = useState(false);
  const [winCol, setwinCol] = useState("#FEA314");
  const [emoji, setEmoji] = useState("");
  const [color, setColor] = useState("#FB2C36");
  const [height_div, setHeight] = useState(0);

  const [savedWallpaper, setSavedWallpaper] = useState(
    () => localStorage.getItem("wallpaperAdmin") || back2,
  );
  const [savedWinCol, setSavedWinCol] = useState(
    () => localStorage.getItem("winColAdmin") || "#FEA314",
  );

  useEffect(() => {
    const storedWinCol = localStorage.getItem("winColAdmin");
    if (storedWinCol) setwinCol(storedWinCol);
  }, []);

  const handleWinColChange = (newCol) => {
    setwinCol(newCol);
    setSavedWinCol(newCol);
    localStorage.setItem("winColAdmin", newCol);
  };

  useEffect(() => {
    const stored = localStorage.getItem("wallpaperAdmin");
    if (stored) setWallpaper(stored);
  }, []);
  const handleWallpaperChange = (newWallpaper) => {
    setWallpaper(newWallpaper);
    setSavedWallpaper(newWallpaper);
    localStorage.setItem("wallpaperAdmin", newWallpaper);
  };

  return (
    <>
      <div className=" lg:flex lg:flex-col lg:justify-center lg:items-center ">
        <div className="hidden lg:w-[95%] xl:w-[95%] lg:mx-auto rounded-3xl lg  lg:flex lg:mb-10 lg:flex-col ">
          <AllQuestsbar winCol={winCol} />
          <div className="xl:relative lg:relative xl:z-0 xl:h-[85vh] overflow-hidden">
            <img
              src={wallpaper}
              alt=""
              className="lg:flex xl:w-full h-full w-full lg:z-0 absolute xl:z-0 rotate-180"
            />
            <div className="xl:relative lg:relative xl:z-10   md:flex md:flex-row ">
              <MonthSelector
                onSelectedMonth={setSelectedMonth}
                height_test={setHeight}
                onToggleWallpaper={() => setshowWallpaper(true)}
                Col={winCol}
                emoj={setEmoji}
                color={setColor}
                newscontent={newscontent}
              />

              {selectMonth !== null && (
                <Calendar
                  month={selectMonth}
                  height={height_div}
                  Close_win={() => setSelectedMonth(null)}
                />
              )}
            </div>
          </div>
          {showWallpaper && (
            <WallpaperMenu_admin
              wallpaper={handleWallpaperChange}
              winCol={handleWinColChange}
              close={() => setshowWallpaper(false)}
            />
          )}
          <LiveClock Color={winCol} />
        </div>
      </div>
    </>
  );
};

export default TaskMapping2_admin;
