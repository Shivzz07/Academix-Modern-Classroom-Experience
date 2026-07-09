import { useState } from "react";
import MonthSelectorMobile from "./MonthSelectorMobile.jsx";
import Calendar from "./Calendar/Calendar.jsx";
import WallpaperMenu from "./WallpaperMenu.jsx";
import LiveClock from "./LiveClock.jsx";
import AllQuestsbar from "./AllQuestsbar.jsx";
import back2 from "../../assets/back2.png";

const TaskMappingMobile = ({acc,rej,com}) => {

  const [selectMonth, setSelectedMonth] = useState(null);

  return (
    <>
      <div className="lg:hidden flex flex-col justify-center items-center">
        
        <div className="w-[95%] mx-auto rounded-3xl flex flex-col mb-10">
          

          <div className="relative z-0 h-[80vh] overflow-hidden">

            <div className="relative z-10 flex flex-col">

              <MonthSelectorMobile 
                onSelectedMonth={setSelectedMonth}
              />

              {selectMonth !== null && (
                <Calendar
                  month={selectMonth}
                  accept_task={acc}
                  reject_task={rej}
                  complete_task={com}
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