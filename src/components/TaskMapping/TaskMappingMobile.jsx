import { useState } from "react";
import MonthSelectorMobile from "./MonthSelectorMobile.jsx";
import Calendar from "./Calendar/Calendar.jsx";
import WallpaperMenu from "./WallpaperMenu.jsx";
import LiveClock from "./LiveClock.jsx";
import AllQuestsbar from "./AllQuestsbar.jsx";


const TaskMappingMobile = () => {

  const [selectMonth, setSelectedMonth] = useState(null);

  return (
    <>
      <div className="lg:hidden flex flex-col justify-center items-center">
        
        <div className="w-[95%] mx-auto rounded-3xl flex flex-col mb-10">
          

          <div className="relative z-0 h-[80vh] overflow-hidden">

            <div className="relative z-10 flex flex-col gap-5">

              <MonthSelectorMobile 
                onSelectedMonth={setSelectedMonth}
              />

              {selectMonth !== null && (
                <Calendar
                  month={selectMonth}
                />
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskMappingMobile;