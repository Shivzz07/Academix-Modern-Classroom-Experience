import {React,useState,useEffect} from 'react'

const LiveClock = ({Color}) => {
  const[time,setTime] = useState(new Date());
useEffect(()=> {
    setInterval(() => {
      setTime(new Date)
    },1000)
  },[])
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const isNight = hours >= 19 && hours <=23
  const isMidnight = hours >= 0 && hours <= 3
  const isAfternoon = hours >= 12 && hours <17
  const isEvening = hours >= 17 && hours < 19
  const isMorning = hours >3 && hours <=11 
  const mins = minutes <= 9;
  const secs = seconds <10;
  const hrs = hours >=0 && hours <=9;
  return (
    <div className='play rounded-b-3xl w-full p-2 flex justify-between text-white  xl:text-3xl lg:text-xl' style={{backgroundColor : Color}}>
            
              <div className=''>
              <h1>{time.toDateString()}</h1>
              </div>
              <div>
                {isMorning && <h1>Good morning, main character.</h1> }
                {isAfternoon && <h1>So... who's actually finishing these?</h1> }
                {isEvening && <h1>The sunset looks tempting today.</h1> }
                {isNight && <h1>My to-do list has a to-do list.</h1> }
                {isMidnight && <h1>You're either cooking... or getting cooked.</h1> }
              </div>
              <div className='flex flex-row'>
                {hrs && <h1>0</h1>}
            <h1>{hours}:</h1>
            {mins && <h1>0</h1>}
            <h1>{minutes}:</h1>
            {secs && <h1>0</h1>}
            <h1>{seconds}</h1>
              </div>
          </div>
  )
}

export default LiveClock
