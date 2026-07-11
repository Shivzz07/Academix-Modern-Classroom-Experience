import { React, useState, memo, useContext, useRef, useEffect } from "react";
import { TasksContext } from "../../TaskList/AllTasks";
import Stickman from "../../../assets/character/classic.gif";
import bear from "../../../assets/character/bear.gif";
import cat from "../../../assets/character/cat.gif";
import { createPortal } from "react-dom";

const TaskDialog = ({ close_Win, day, month, year, ran_color }) => {
  const format_date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  const display_date = `${String(day).padStart(2, "0")}/${String(month + 2).padStart(2, "0")}/${year}`;
  const {
    merged_tasks,
    updateTaskStatus,
    accept,
    reject,
    complete,
    gif,
    setaccept,
    aura_count,
    setaura,
    setreject,
    setcomplete,
    fetchData,
     acceptchange,
        rejectchange,
        completechange,
        random_emoji
  } = useContext(TasksContext);
  const [auradialog, setauradialog] = useState(false);
  const [task_name, settask_name] = useState("");
   const [auradialogcolor, setauradialogcolor] = useState("#E29294");
    const [auradialogbordercolor, setauradialogbordercolor] = useState("#FFD98F");
    const [collect , setcollect] = useState("Collect")

  const tasks = merged_tasks;

  function assignTasks(t) {
    return t.date === format_date;
  }

  const task4thisday = tasks.filter(assignTasks);
 const paneRef  = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const pane  = paneRef.current;
    const title = titleRef.current;
    if (!pane || !title) return;

    const bringToFront = () => {
      globalZIndex += 1;
      pane.style.zIndex = globalZIndex;
    };

    let startX = 0;
    let startY = 0;
    let originLeft = 0;
    let originTop = 0;

    const drag = (event) => {
      event.preventDefault();
      pane.style.left = originLeft + (event.pageX - startX) + "px";
      pane.style.top  = originTop  + (event.pageY - startY) + "px";
    };

    const stopDrag = () => {
      pane.classList.remove("is-dragging");
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mouseup", stopDrag);
    };

    const startDrag = (event) => {
      pane.classList.add("is-dragging");
      originLeft = pane.offsetLeft;
      originTop  = pane.offsetTop;
      startX = event.pageX;
      startY = event.pageY;

      document.addEventListener("mousemove", drag);
      document.addEventListener("mouseup", stopDrag);
    };

    pane.addEventListener("mousedown", bringToFront);
    title.addEventListener("mousedown", startDrag);

   
    return () => {
      pane.removeEventListener("mousedown", bringToFront);
      title.removeEventListener("mousedown", startDrag);
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("mouseup", stopDrag);
    };
  }, []); 



 function currrentgif() {
  if (gif.toString() == "Stickman") return Stickman;
  else if (gif.toString() == "Bear") return bear;
  else return cat;
}


  function accept_increment() {
  fetchData();
  setauradialog(false);
}

  return (
    <>
      <div
       ref={paneRef}
        className={`play border-1 bg-white absolute xl:top-[50%] xl:left-[50%] xl:w-100 translate-[-50%] lg:top-[50%] lg:left-[50%] rounded-xl pane cursor-grab flex`}
      >
        <div className="flex flex-col gap-4 w-full ">
          <div
           ref={titleRef}
            className="flex justify-between rounded-t-xl title "
            style={{ backgroundColor: ran_color }}
          >
            <h1 className="px-2 text-white">{display_date}</h1>
            <button
              className="hover:bg-red-500 hover:text-white duration-200 rounded-tr-xl px-5"
              onClick={close_Win}
            >
              X
            </button>
          </div>

          {task4thisday.length === 0 && (
            <p className="px-4 pb-4 text-sm text-gray-400">
              No quest for this day.
            </p>
          )}

          {task4thisday.map((t) => (
            <div key={t.id} className="flex flex-col gap-2">
              <div className="flex flex-col xl:w-full duration-500 text-sm ">
                <p className="underline xl:w-full px-4">{t.title}{random_emoji}</p>
                <textarea
                  value={t.content}
                  readOnly
                  placeholder="Enter the Quest Content"
                  required
                  rows={10}
                  className="px-4 py-2 w-full rounded-md outline-none resize-none "
                />
              </div>

              <div className="flex flex-row gap-2 mx-2 mb-2 justify-center lg:scale-[80%] xl:scale-100">
                {t.accepted_status === "pending" && (
                  <>
                    <button
                      className="bg-teal-700 text-[#97FCBC] hover:bg-[#97FCBC] hover:text-teal-700 rounded-sm px-4 duration-100"
onClick={() => {
  updateTaskStatus(t.id, "accepted", 10);
  acceptchange(1);

  if (gif.toString() == "Stickman") {
    setauradialogcolor("#8FD5FF");
    setauradialogbordercolor("#50A2FF");
  } else if (gif.toString() == "Bear") {
    setauradialogcolor("#3BA8AD");
    setauradialogbordercolor("#154f52");
  } else {
    setauradialogcolor("#E29294");
    setauradialogbordercolor("#FFD98F");
  }

  setauradialog(true);
  settask_name("Accept");
}}
                    >
                      Accept
                    </button>

                    <button
                      className="bg-[#FFBF5D] rounded-sm px-4 text-white hover:bg-[#985b00] duration-500"
                      onClick={() => {
                        updateTaskStatus(t.id, "rejected", -5);
                        rejectchange(1)
                        alert("You have rejected this task -5 AURA");
                        setaura(aura_count - 5);
                        setreject(reject + 1);
                      }}
                    >
                      Reject
                    </button>
                  </>
                )}

                {t.accepted_status === "accepted" && (
                  <button
                    className="bg-[#8DBCFF] rounded-sm px-4 text-blue-800 hover:bg-blue-800 hover:text-[#8DBCFF] duration-500"
                  onClick={() => {
  updateTaskStatus(t.id, "completed", 20);
  completechange(1);

  if (gif.toString() == "Stickman") {
    setauradialogcolor("#8FD5FF");
    setauradialogbordercolor("#50A2FF");
  } else if (gif.toString() == "Bear") {
    setauradialogcolor("#3BA8AD");
    setauradialogbordercolor("#154f52");
  } else {
    setauradialogcolor("#E29294");
    setauradialogbordercolor("#FFD98F");
  }

  setauradialog(true);
  settask_name("Complete");
}}
                  >
                    Completed
                  </button>
                )}

                {t.accepted_status === "rejected" && (
                  <p className="text-sm text-gray-400">
                    You rejected this quest.
                  </p>
                )}

                {t.accepted_status === "completed" && (
                  <p className="text-sm text-green-600">Quest completed!</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {auradialog &&
          createPortal(
            <div className="fixed inset-0 z-999">
              <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>
              <div className="relative flex items-center justify-center h-full">
                <div className="w-70 h-auto rounded-lg  shadow-xl border-2" style={{backgroundColor : auradialogcolor,
                  borderColor:auradialogbordercolor
                }}>
                  <div className="flex flex-col justify-center gap-5">
                    <div className="">
                      <img
                        src={currrentgif()}
                        alt=""
                        className="w-full h-auto  rounded-t-xl"
                         style={{  borderColor : auradialogbordercolor}}
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center py-4 gap-4 text-black">
                      <div className="flex justify-center items-center play text-white">
                        {task_name === "Accept" ? 
                         (
                           <span className="px-4 flex flex-col justify-center items-center play">
                            <h1>Click the collect button to accept this task for +10 AURA.</h1>
                          </span>
                         )
                         : (
                           <span className="px-4 flex flex-col justify-center items-center play text-sm">
                            <h1>Click the collect button if you have completed this task for +20 AURA</h1>
                          </span>
                        )}
                      </div>
                      <button
  onClick={accept_increment}
  className="relative overflow-hidden bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-lg hover:scale-95 duration-300 cursor-pointer text-black font-semibold"
>
  <span className="relative z-10 text-white ">Collect</span>

  <span className="absolute inset-0 overflow-hidden rounded-lg">
    <span className="absolute top-0 -left-20 h-full w-10 bg-gradient-to-r from-transparent via-yellow-200/90 to-transparent animate-shine"></span>
  </span>
</button>

                    </div>
                    
                  </div>
                </div>
              </div>
            </div>,
            document.body,
          )}
      </div>
    </>
  );
};

export default memo(TaskDialog);
