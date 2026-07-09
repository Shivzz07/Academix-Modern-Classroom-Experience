import { React, useState, memo, useContext, useEffect } from "react";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
import { AuthContext } from "../../../../context/AuthContext";
import { collection, getDocs, getDoc, addDoc } from "firebase/firestore";
import { TasksContext } from "../../../TaskList/AllTasks";

const TaskDialog = ({ close_Win, day, month, year, ran_color, col, submit, setsubmit }) => {
  const format_date = `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [content_length, setcontent_length] = useState(0);
  const [overcontent_col, setovercontent_col] = useState("#000000");
  const [duration, setduration] = useState(0);

  useEffect(() => {
    setcontent_length(content.length);
    if (content.length < 501) {
      setovercontent_col("#000000");
    } else {
      setovercontent_col("#FF0000");
    }
  }, [content.length, overcontent_col]);

  const handleInput = (e) => {
    var s = e.target.value;
    if (s.length > 30) {
      alert("Title should be less than 30 characters or 5 words");
    } else {
      settitle(e.target.value);
    }
  };

  const format_Date = `${year}-${month < 10 ? "0" + month : month}-${day < 10 ? "0" + day : day}`;
  const { task_stat, addTaskOptimistic } = useContext(TasksContext);
  const { user } = useContext(AuthContext);
  const db = getFirestore();
  const adminUID = user.uid;

  function assignTasks(tasks) {
    if (tasks.status == true && tasks.date == format_Date) return true;
  }

  const task4thisday = task_stat.filter(assignTasks);
  const hasTask = task4thisday.length > 0;
  const existingTask = task4thisday[0];

  // -- date calculation, same as PC --
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  function getDaysInMonth(month, year) {
    const days = [0, 31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    return days[month];
  }

  function addDaysToDate(year, month, day, daysToAdd) {
    let d = day, m = month, y = year;
    d += Number(daysToAdd);
    while (d > getDaysInMonth(m, y)) {
      d -= getDaysInMonth(m, y);
      m += 1;
      if (m > 11) { m = 0; y += 1; }
    }
    const mm = String(m + 1).padStart(2, "0");
    const dd = String(d).padStart(2, "0");
    return `${y}-${mm}-${dd}`;
  }

  const deadline_date = addDaysToDate(year, month, day, duration);

  async function handlesubmit() {
    close_Win();
    setsubmit(false);

    const newTask = {
      title,
      content,
      date: format_date,
      deadline: deadline_date,
      day,
      status: true,
    };

    const questsRef = collection(db, "Users", adminUID, "tasks");
    try {
      const docRef = await addDoc(questsRef, newTask);
      addTaskOptimistic({ ...newTask, id: docRef.id });
    } catch (err) {
      alert("Failed to save task: " + err.message);
    }
  }

  return (
    <>
      <div className="play border-1 cursor-pointer bg-white z-99 absolute md:left-1/4 top-1/4 left-[10%] mx-auto rounded-xl ">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between rounded-t-xl" style={{ backgroundColor: ran_color }}>
            <h1 className="lg:px-5 lg:text-white px-2 play">
              {day !== 0 && day}-{month + 1}-{year}
            </h1>
            <button
              className="hover:bg-red-500 hover:text-white duration-200 rounded-tr-xl px-5"
              onClick={close_Win}
            >
              X
            </button>
          </div>

          <div className="px-4">
            <div className="flex flex-col gap-3 w-full text-sm">
              <form action="" id="form">
                <input
                  type="text"
                  value={hasTask ? existingTask.title : title}
                  onChange={hasTask ? undefined : handleInput}
                  readOnly={hasTask}
                  placeholder="Enter the title"
                  className="underline px-4 text-gray-500 py-2 border-none outline-none w-full"
                />
                <textarea
                  value={hasTask ? existingTask.content : content}
                  onChange={hasTask ? undefined : (e) => setcontent(e.target.value)}
                  readOnly={hasTask}
                  placeholder="Enter the Quest Content"
                  required
                  rows={10}
                  className="px-4 py-2 w-full rounded-md outline-none resize-none border border-gray-300"
                  style={{ color: overcontent_col }}
                />
                <div className="text-gray-500 play text-[10px] flex justify-end">
                  {`${content_length}/500`}
                </div>
              </form>
            </div>

           
            {!hasTask && (
              <div className="flex flex-row py-5">
                <h1 className="text-sm text-gray-400">Quest duration(days) :</h1>
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => {
                    if (e.target.value > 0 && e.target.value <= 30)
                      setduration(Number(e.target.value));
                  }}
                  placeholder="(x days)"
                  className="text-[12px] w-auto flex justify-center px-2 text-gray-400"
                />
              </div>
            )}
          </div>

         
          {hasTask && (
            <div className="flex justify-center items-center">
              <h1 className="text-sm text-gray-400">
                Deadline: {existingTask.deadline}
              </h1>
            </div>
          )}

          
          <div className="flex justify-center items-center pb-4">
            {!hasTask && submit && (
              <button
                className="px-4 rounded-xl text-white border-0 hover:border-black hover:border-1 hover:cursor-pointer"
                style={{ backgroundColor: ran_color }}
                onClick={handlesubmit}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(TaskDialog);