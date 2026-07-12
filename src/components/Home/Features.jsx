import React, { useEffect, useState } from "react";
import aura from "../../assets/miscellaneous/aura.gif";
import rank from "../../assets/miscellaneous/rank.gif";
import mission from "../../assets/miscellaneous/mission.gif";
import TextPressure from "./TextPressure";
import TextType3 from "./TextType3";
import TextType4 from "./TextType4";
import mission_pov from "../../assets/miscellaneous/mission_pov.png";
import aura_pov from "../../assets/miscellaneous/aura_pov.png";
import leader_pov from "../../assets/miscellaneous/leader_pov.png";

import { useTheme } from "../../context/ThemeContext";

function Features() {
  const [questdiv, setquestdiv] = useState(false);
  const [rankdiv, setrankdiv] = useState(false);
  const [textColor, setTextColor] = useState("#FCCD05");
  const { dark } = useTheme();

  return (
    <div
      id="features"
      className="back w-full flex-col justify-center gap-5 group dark:xl:mt-40 dark:mt-0 dark:md:mt-20 pb-10 "
      onMouseLeave={() => {}}
    >
      <div className="flex justify-center ">
        <div
          style={{ position: "relative", height: "120px" }}
          className=" sm:mt-0 cursor-crosshair "
        >
          <div className="hidden sm:flex">
          <TextPressure
            text="Features"
            flex={false}
            alpha={false}
            stroke={false}
            width={false}
            weight={true}
            italic={false}
            textColor={textColor}
            strokeColor="#FBCD06"
            minFontSize={100}
          />
          </div>
          <div>
          
        <div className="text-xl sm:hidden ">
          <TextType4
            text={["have time to look this up?", "FEATURES", "have time to look this up?", "FEATURES"]}
            typingSpeed={25}
            pauseDuration={5000}
            showCursor={true}
          />
        </div>
          </div>
        </div>
   
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-evenly justify-center items-center px-20 sm:gap-5 cursor-pointer">
        <div className="first hover:border-white hover:scale-[100%] md:hover:scale-[90%]   scale-80  duration-700 transition-all pb-20 rounded-xl bg-blue-400 border-1 border-green-300 hover:drop-shadow-gray-300 group-hover:bg-blue-400">
          <img
            src={mission}
            alt=""
            className="hidden sm:flex w-full rounded-t-xl dark:hidden"
          />
          <img
            src={mission_pov}
            alt=""
            className="hidden w-full dark:sm:flex "
          />
          <div className=" flex-col justify-center pt-6 overflow-hidden ">
            <h1 className="text text-green-300 text-3xl flex justify-center">
              {" "}
              QUEST
            </h1>
            <p className="flex px-2 pt-2 text-sm text-white font-extralight ">
              Fresh quests drop. You accept the challenge, complete the
              objective, and keep your adventure going. Stay consistent,
              maintain your streak, and prove you're built different.
            </p>
          </div>
        </div>

        <div
          className="bg-pink-600 hover:border-white scale-80  rounded-xl border-[0.5px] border-blue-300 hover:scale-[100%] md:hover:scale-[90%]  duration-700 pb-20"
          onMouseEnter={() => {}}
        >
          <div>
            <img
              src={aura}
              alt=""
              className="hidden w-full sm:block rounded-t-xl dark:hidden"
            />
            <img
              src={aura_pov}
              alt=""
              className="hidden w-full dark:sm:flex "
            />
            <div className=" flex-col justify-center pt-6 overflow-hidden ">
              <h1 className="text text-pink-300 text-3xl flex justify-center">
                {" "}
                AURA
              </h1>
              <p className="flex px-5 pt-2 text-md text-white font-extralight ">
                Aura is the universal flex. Complete quests, stack Aura, and let
                everyone know who's carrying the lobby. No speeches. Just
                numbers.
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-[#E75C5F] hover:scale-[100%] md:hover:scale-[90%]  scale-80 duration-700 hover:border-white pb-20 sm:pb-20 rounded-xl border-1
        "
          onMouseEnter={() => {}}
        >
          <img
            src={rank}
            alt=""
            className="hidden w-full sm:flex rounded-t-xl dark:hidden"
          />
          <img
            src={leader_pov}
            alt=""
            className="hidden w-full dark:sm:flex "
          />
          <div className=" flex-col justify-center sm:pt-10 pt-6   ">
            <h1 className="text text-amber-100 text-3xl flex justify-center">
              RANKS
            </h1>
            <p className="flex px-5 pt-2 text-sm sm:overflow-hidden text-white font-extralight ">
              Only the top players get remembered. Fight your way up the
              leaderboard, overtake the competition, and claim your place at the
              top.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
