import { useState, memo, useContext } from 'react'
import TaskDialog from './PC/TaskDialog_admin.jsx'
import TaskDialogMob from './Mobile/TaskDialog_admin_mobile.jsx'
import { TasksContext } from '../../TaskList/AllTasks.jsx'

const DayCell = ({ cur_color, month, day, daymob, year, height }) => {
  const { random_emoji, task_stat, updateTask } = useContext(TasksContext)

  const colors = ["#FF5733","#33FF57","#3357FF","#FF33A8","#A833FF","#33FFF6","#FFC300","#FF8D1A","#8DFF1A","#1AFF8D","#1A8DFF","#8D1AFF","#FF1A8D","#4CAF50","#2196F3","#9C27B0","#E91E63","#FF9800","#795548","#607D8B","#00BCD4","#CDDC39","#F44336","#3F51B5","#009688","#673AB7","#FFEB3B","#03A9F4","#8BC34A","#FF5722","#1ABC9C","#2ECC71","#3498DB","#9B59B6","#34495E","#16A085","#27AE60","#2980B9","#8E44AD","#2C3E50","#F1C40F","#E67E22","#E74C3C","#95A5A6","#D35400","#C0392B","#BDC3C7","#7F8C8D","#FF6F61","#6B5B95","#88B04B","#F7CAC9","#92A8D1","#955251","#B565A7","#009B77","#DD4124","#D65076","#45B8AC","#EFC050","#5B5EA6","#9B2335","#DFCFBE","#55B4B0","#E15D44","#7FCDCD","#BC243C","#C3447A","#98B4D4","#FFB7B2","#91A8D0","#034F84","#F7786B","#9896A4","#DD4132","#BFD641","#7BC4C4","#FFA500","#40E0D0","#8A2BE2","#20B2AA","#DC143C","#00FA9A","#4682B4","#D2691E","#9ACD32","#FF4500","#6A5ACD","#2E8B57","#483D8B"]

  const [random_color] = useState(() => colors[Math.floor(Math.random() * colors.length)])
  const ransom_color = random_color.toString()

  const format_date = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`

  const now = new Date()
  const today_str = `${now.getFullYear()}-${String(now.getMonth()).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`

  const isPastDate = today_str > format_date

  const allTasksForDay = task_stat.filter(t => t.status === true && t.date === format_date)
  const hasTask = allTasksForDay.length === 0

  const [showDialog, setShowDialog] = useState(false)
  const [col, setCol] = useState('#FFFFFF')
  const [submit, setSubmit] = useState(true)

  const openDialog = () => {
    setShowDialog(true)
    setCol('#FFDF20')
  }

  const closeDialog = () => {
    setShowDialog(false)
    setCol('#FFFFFF')
  }

  const handleCellClickPC = () => {
    if (day === 0) return alert("You may be clicking on an invalid date.")
    if (isPastDate && allTasksForDay.length === 0) return alert("You may be clicking a date that has already passed.")
    openDialog()
  }

  const handleCellClickMobile = () => {
    if (day === 0) return
    if (isPastDate && allTasksForDay.length === 0) return
    if (!isPastDate && !hasTask) return
    openDialog()
  }

  return (
    <>
      <div className="lg:flex lg:flex-row lg:justify-center lg:items-center">
        <div className="lg:w-100 hidden lg:block" style={{ height: height !== 0 ? height * 4 : height }}>
          <div
            className="box lg:bg-white hover:bg-amber-300 lg:border-1 lg:border-e-gray-100 lg:flex lg:flex-col lg:h-full lg:w-full"
            onClick={handleCellClickPC}
            style={{ backgroundColor: col }}
          >
            <h1 className="lg:px-5 lg:text-white px-2 play" style={{ backgroundColor: cur_color }}>
              {day !== 0 && day}
            </h1>

            {isPastDate && day !== 0 && allTasksForDay.length === 0 ? (
              <h1 className="flex cursor-default justify-center items-center text-[8px] pt-5 text-gray-600 opacity-65 play">
                Quests cannot be assigned to this date
              </h1>
            ) : (
              <span />
            )}

            {allTasksForDay.map(task => (
              <div
                key={task.id}
                className="hidden lg:flex lg:flex-col lg:xl:text-sm lg:lg:text-[10px] lg:h-full"
                style={{ backgroundColor: random_color }}
              >
                <div className="lg:flex lg:justify-end lg:px-2">
                  <h1>{random_emoji}</h1>
                </div>
                <div className="lg:px-2 xl:px-4 lg:text-[8px] xl:text-[10px] play text-white">
                  <button className="lg:relative lg:cursor-pointer">
                    <h1 className="lg:underline">{task.title}</h1>
                  </button>
                  <h1 className="lg:block">Deadline : {task.deadline}</h1>
                </div>
              </div>
            ))}
          </div>

          {showDialog && (
            <TaskDialog
              close_Win={closeDialog}
              task={task_stat}
              day={day}
              ran_color={ransom_color}
              year={year}
              month={month}
              submit={submit}
              setsubmit={setSubmit}
            />
          )}
        </div>

        <div className="lg:hidden">
          <div
            className="box hover:bg-amber-300 lg:flex lg:flex-col lg:h-full lg:w-full"
            onClick={handleCellClickMobile}
            style={{ backgroundColor: col }}
          >
            <h1 className="px-2 play cursor-pointer" style={{ backgroundColor: cur_color }}>
              {day !== 0 && day}
            </h1>

            {isPastDate && day !== 0 && allTasksForDay.length === 0 ? (
              <h1 className="flex cursor-default justify-center items-center text-[8px] pt-5 text-gray-500 opacity-25 play">
                Quests cannot be assigned to this date
              </h1>
            ) : (
              <span />
            )}

            {allTasksForDay.map(t => (
              <div key={t.id} className="lg:hidden flex flex-col w-full rounded-bl-2xl shadow-lg border-1 text-white">
                <div className="flex flex-col px-5 py-4 gap-2 w-full" style={{ backgroundColor: random_color }}>
                  <div className="flex flex-row justify-between items-center w-full">
                    <span
                      className="text-white text-[11px] font-semibold px-3 py-1 rounded-full"
                      style={{ backgroundColor: cur_color }}
                    >
                      Deadline {t.deadline}
                    </span>
                  </div>
                  <h2 className="text-white text-lg underline play mt-1">{t.title}</h2>
                  <textarea
                    value={t.content}
                    readOnly
                    placeholder="Enter the Quest Content"
                    rows={8}
                    className="px-4 py-2 w-full rounded-md outline-none resize-none"
                  />
                </div>
              </div>
            ))}
          </div>

          {showDialog && (
            <TaskDialogMob
              close_Win={closeDialog}
              task={task_stat}
              day={day}
              ran_color={ransom_color}
              year={year}
              month={month}
              submit={submit}
              setsubmit={setSubmit}
            />
          )}
        </div>
      </div>
    </>
  )
}

export default memo(DayCell)