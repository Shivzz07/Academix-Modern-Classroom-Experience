import { React, useState, memo, useContext, useEffect } from "react";
import jan_socio from "../../../assets/socio/jan_socio.PNG";
import feb_socio from "../../../assets/socio/feb_socio.PNG";
import mar_socio from "../../../assets/socio/mar_socio.PNG";
import apr_socio from "../../../assets/socio/apr_socio.PNG";
import may_socio from "../../../assets/socio/may_socio.PNG";
import jun_socio from "../../../assets/socio/jun_socio.PNG";
import jul_socio from "../../../assets/socio/jul_socio.PNG";
import aug_socio from "../../../assets/socio/aug_socio.PNG";
import sep_socio from "../../../assets/socio/sep_socio.PNG";
import oct_socio from "../../../assets/socio/oct_socio.PNG";
import nov_socio from "../../../assets/socio/nov_socio.PNG";
import dec_socio from "../../../assets/socio/dec_socio.PNG";
import DayCell from "./DayCell_admin";
import { TasksContext } from "../../TaskList/AllTasks";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.js";

const Calendar = ({ month, Close_win, height }) => {
  const monthConfig = [
    { name: "January", wallpaper: jan_socio, color: "#4B9AF9" },
    { name: "February", wallpaper: feb_socio, color: "#25DCEC" },
    { name: "March", wallpaper: mar_socio, color: "#00A038" },
    { name: "April", wallpaper: apr_socio, color: "#A8DD67" },
    { name: "May", wallpaper: may_socio, color: "#68D2AE" },
    { name: "June", wallpaper: jun_socio, color: "#F2D400" },
    { name: "July", wallpaper: jul_socio, color: "#FFD9AC" },
    { name: "August", wallpaper: aug_socio, color: "#FFC6FF" },
    { name: "September", wallpaper: sep_socio, color: "#C7CDFF" },
    { name: "October", wallpaper: oct_socio, color: "#FF734F" },
    { name: "November", wallpaper: nov_socio, color: "#EB1B67" },
    { name: "December", wallpaper: dec_socio, color: "#B77CBC" },
  ];

  const currentMonthData = monthConfig[month];
  const cur_color = currentMonthData?.color;
  const cur_wall = currentMonthData?.wallpaper;
  const cur_month_name = currentMonthData?.name;

  let date = new Date();
  const cur_year = date.getFullYear();

  const calendarDays = generateCalendar(month, cur_year);
  function generateCalendar(mon, year) {
    const firstday = new Date(year, mon, 1).getDay();
    const totaldays = new Date(year, mon + 1, 0).getDate();
    const days = [];
    for (let i = 0; i < firstday; i++) days.push(0);
    for (let i = 1; i <= totaldays; i++) days.push(i);
    return days;
  }

  const mapdate = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];

  //   let quests = [];
  //       const [tasks, setTasks] = useState([]);
  //   const fetchAdminQuests = async () => {
  //   const adminUID = "SfWRHj0TdHUWyydqkhWdx1HPRYR2";

  //   const questsRef = collection(db, "Users", adminUID, "tasks");

  //   try {
  //     const querySnapshot = await getDocs(questsRef);

  //     quests = querySnapshot.docs.map(doc => ({
  //       id: doc.id,
  //       ...doc.data() // Spread all fields
  //     }));

  //     setTasks(quests)
  //     // console.log(quests); // Array of quest objects

  //     // // Now loop
  //     // quests.forEach(quest => {
  //     //   console.log(quest.title, quest.auraPoints);
  //     // });

  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  //  useEffect(() => {
  //     fetchAdminQuests();

  //  }, [])

  return (
    <div
      className={`top-[10vh] md:w-auto md:h-auto xl:absolute lg:absolute xl:top-${[height]} xl:left-[0vh] lg:bg-white xl:mx-8 lg:top-[2vh] lg:left-[0vh] lg:mx-4 xl:w-auto xl:h-auto xl:flex xl:flex-col xl:gap-0 lg:flex-wrap lg:rounded-3xl lg:flex lg:flex-col lg:gap-0`}
    >
      <div
        className="lg:flex lg:justify-end lg:rounded-t-3xl"
        style={{ backgroundColor: cur_color }}
      >
        <button
          id="close"
          className="lg:text-white hidden lg:flex text-white lg:text-4xl lg:hover:duration-100 lg:hover:bg-red-500 lg:px-4 lg:rounded-tr-3xl lg:rounded-bl-3xl"
          onClick={Close_win}
        >
          x
        </button>
      </div>

      <div
        className="lg:flex lg:justify-center lg:items-center"
        style={{ backgroundColor: cur_color }}
      >
        <img
          src={cur_wall}
          alt="wall"
          className="lg:mb-4 sm:h-full sm:w-full  lg:w-60 hidden lg:flex"
        />

        <div className="flex flex-row justify-center items-center lg:hidden py-3 w-full border-1 ">
          <h1 className="text-4xl text-white play">{cur_month_name}</h1>
        </div>
      </div>

      <div className="flex flex-col gap-4 px-4 py-4 lg:hidden w-full h-110 overflow-y-scroll  border-1 text-white">
        {mapdate.map((day, index) => (
          <>
            <DayCell
              height={height}
              key={index}
              daymob={day}
              day={day}
              year={cur_year}
              cur_color={cur_color}
              month={month}
            />
          </>
        ))}
      </div>

      <div className="hidden lg:block">
        <div className="grid grid-cols-7 bg-white border-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
            <h1 key={d} className="play text-center text-xs py-1">
              {d}
            </h1>
          ))}
        </div>

        {/* Calendar grid */}

        <div className="grid grid-cols-7">
          {calendarDays.map((day, index) => (
            <DayCell
              height={height}
              key={index}
              day={day}
              year={cur_year}
              cur_color={cur_color}
              month={month}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Calendar);
