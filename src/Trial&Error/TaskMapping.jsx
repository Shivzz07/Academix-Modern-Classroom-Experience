import React, { useEffect, useState, useRef } from 'react'
import Jan from '../../assets/Jan.png'
import cross from '../../assets/cross.svg'
import back2 from '../../assets/back2.png'
import Janu from '../../assets/Janu.png'
import Feb from '../../assets/Feb.png'
import Mar from '../../assets/Mar.png'
import Apr from '../../assets/Apr.png'
import May from '../../assets/May.png'
import Jun from '../../assets/Jun.png'
import Jul from '../../assets/Jul.png'
import Aug from '../../assets/Aug.png'
import Sep from '../../assets/Sep.png'
import Oct from '../../assets/Oct.png'
import Nov from '../../assets/Nov.png'
import Dec from '../../assets/Dec.png'


import Wall from '../../assets/wall.png'
import Clock from '../../assets/Clock.png'
import back3 from '../../assets/back3.jpg'
import back4 from '../../assets/back4.jpg'
import back5 from '../../assets/back5.jpg'
import jan_socio from '../../assets/socio/jan_socio.png'
import feb_socio from '../../assets/socio/feb_socio.png'
import mar_socio from '../../assets/socio/mar_socio.png'
import apr_socio from '../../assets/socio/apr_socio.png'
import may_socio from '../../assets/socio/may_socio.png'
import jun_socio from '../../assets/socio/jun_socio.png'
import jul_socio from '../../assets/socio/jul_socio.png'
import aug_socio from '../../assets/socio/aug_socio.png'
import sep_socio from '../../assets/socio/sep_socio.png'
import oct_socio from '../../assets/socio/oct_socio.png'
import nov_socio from '../../assets/socio/nov_socio.png'
import dec_socio from '../../assets/socio/dec_socio.png'

import getRandomEmoji from './random_emoji.js'


const TaskMapping = () => {

  const[wallpaper,setWallpaper] = useState(back2)
  const[show,setShow] = useState(false);
  const[winCol,setwinCol] = useState("#FEA314")
  const[monCol,setmonCol] = useState("#FC63B6")
  const[time,setTime] = useState(new Date());
  const[monthWallpaper, setmonthWallpaper] = useState(jan_socio);
  const[monthWallpaperColor , setmonthWallpaperColor] = useState("#4B9AF9")
  const[showJan,setJanshow] = useState(false);
  const[showFeb,setFebshow] = useState(false);
  const[showMar,setMarshow] = useState(false);
  const[showApr,setAprshow] = useState(false);
  const[showMay,setMayshow] = useState(false);
  const[showJune,setJuneshow] = useState(false);
  const[showJuly,setJulyshow] = useState(false);
  const[showAug,setAugshow] = useState(false);
  const[showSep,setSepshow] = useState(false);
  const[showOct,setOctshow] = useState(false);
  const[showNov,setNovshow] = useState(false);
  const[showDec,setDecshow] = useState(false);
  const[random_color, setrandom_color] = useState("");
  const[Emoji, setEmoji] = useState()
  const[dialog,setDialog] = useState(false)
  const[opacity_screen , setopacity_screen] = useState(1)


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


 const colors = [
  "#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#A833FF",
  "#33FFF6", "#FFC300", "#FF8D1A", "#8DFF1A", "#1AFF8D",
  "#1A8DFF", "#8D1AFF", "#FF1A8D", "#4CAF50", "#2196F3",
  "#9C27B0", "#E91E63", "#FF9800", "#795548", "#607D8B",
  "#00BCD4", "#CDDC39", "#F44336", "#3F51B5", "#009688",
  "#673AB7", "#FFEB3B", "#03A9F4", "#8BC34A", "#FF5722",
  "#1ABC9C", "#2ECC71", "#3498DB", "#9B59B6", "#34495E",
  "#16A085", "#27AE60", "#2980B9", "#8E44AD", "#2C3E50",
  "#F1C40F", "#E67E22", "#E74C3C", "#95A5A6", "#D35400",
  "#C0392B", "#BDC3C7", "#7F8C8D", "#FF6F61", "#6B5B95",
  "#88B04B", "#F7CAC9", "#92A8D1", "#955251", "#B565A7",
  "#009B77", "#DD4124", "#D65076", "#45B8AC", "#EFC050",
  "#5B5EA6", "#9B2335", "#DFCFBE", "#55B4B0", "#E15D44",
  "#7FCDCD", "#BC243C", "#C3447A", "#98B4D4", "#FFB7B2",
  "#91A8D0", "#034F84", "#F7786B", "#9896A4", "#DD4132",
  "#BFD641", "#7BC4C4", "#FFA500", "#40E0D0", "#8A2BE2",
  "#20B2AA", "#DC143C", "#00FA9A", "#4682B4", "#D2691E",
  "#9ACD32", "#FF4500", "#6A5ACD", "#2E8B57", "#483D8B"
];

const emojis = [..."😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😜😝🤪🤨🧐🤓😎🥸🤩🥳😏😒😞😔😟😕🙁☹️😣😖😫😩🥺😢😭😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🤗🤔🤭🤫🤥😶😐😑😬🙄😯😦😧😮😲🥱😴🤤😪😵🤐🥴🤢🤮🤧😷🤒🤕🤑🤠😈👿👹👺🤡💩👻💀☠️👽👾🤖🎃😺😸😹😻😼😽🙀😿😾🐶🐱🐭🐹🐰🦊🐻🐼🐻‍❄️🐨🐯🦁🐮🐷🐽🐸🐵🙈🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🪲🐞🦋🐌🐛🦟🪰🪱🐜🐢🐍🦎🐙🦑🦐🦞🦀🐡🐠🐟🐬🐳🐋🦈🐊🐅🐆🦓🦍🦧🐘🦣🦛🦏🐪🐫🦒🦘🦬🐃🐂🐄🐎🐖🐏🐑🦙🐐🦌🐕🐩🦮🐕‍🦺🐈🐈‍⬛🪶🐓🦃🦚🦜🦢🦩🕊️🐇🦝🦨🦡🦫🦦🦥🐁🐀🐿️🦔🍎🍏🍊🍋🍌🍉🍇🍓🫐🍈🍒🍑🥭🍍🥥🥝🍅🍆🥑🥦🥬🥒🌶️🫑🌽🥕🫒🧄🧅🥔🍠🥐🥯🍞🥖🥨🧀🥚🍳🧈🥞🧇🥓🥩🍗🍖🌭🍔🍟🍕🥪🥙🧆🌮🌯🥗🥘🍝🍜🍲🍛🍣🍱🥟🍤🍙🍚🍘🍥🥠🥮🍢🍡🍧🍨🍦🥧🧁🍰🎂🍮🍭🍬🍫🍿🍩🍪🥛🍼🫖☕🍵🍶🍺🍻🥂🍷🥃🍸🍹🧉🍾⚽🏀🏈⚾🥎🎾🏐🏉🎱🏓🏸🥅🏒🏑🏏🥍🏹🎣🤿🥊🥋🎽🛹🛼🛷⛸️🥌🎿⛷️🏂🪂🚗🚕🚙🚌🚎🏎️🚓🚑🚒🚐🛻🚚🚛🚜🛵🏍️🛺🚲🛴🚨🚦🚥🚧🛑⛽🚏🗺️🗿🗽🗼🏰🏯🎡🎢🎠⛲🎪🎭🎨🎬🎤🎧🎼🎹🥁🎷🎺🎸🪕🎻🎲🧩♟️🎯🎳🎮🕹️🎰"].slice(0, 400);

  let menuRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown",(event) => {
      if(!menuRef.current.contains(event.target))
      {
        setShow(false)
      }
    })
  });
  

  return (
    <>
    <div className={`lg:flex lg:flex-col lg:justify-center lg:items-center md:hidden `} style={{opacity:opacity_screen}}>
      <div className=' lg:w-[95%] xl:w-[95%] lg:mx-auto rounded-3xl lg  lg:flex lg:mb-10 lg:flex-col '>
        
        {/* this is the All Queasts bar */}
        <div className="lg:w-full lg:h-15 lg:bg-[${winCol}] md:rounded-t-3xl md:flex md:flex-row md:pt-5 md:px-5 md:gap-5 md:justify-between" style={{backgroundColor :winCol}}>
            
            <div className='flex flex-row gap-5'>
               <div className='rounded-full bg-red-500 w-5 h-5'></div>
               <div className='rounded-full bg-amber-300 w-5 h-5'></div>
               <div className='rounded-full bg-green-500 w-5 h-5'></div>
            </div>

            <h1 className='text-2xl play text-white'>All Quests</h1>
            
            <div>
                <img src={cross} alt="" className='w-10 h-6 ' />
            </div>
            
        </div> 


        

        {/* this is the wallpaper behind all tasks container */}
        <div>
          <div className='xl:relative lg:relative xl:z-0 xl:h-[80vh] overflow-hidden'>
            <img src={wallpaper} alt="" className='xl:w-full lg:w-full lg:z-0 absolute xl:z-0 xl:rotate-180' />

            {/*  this is all tasks container*/}
        <div className='xl:relative lg:relative xl:z-10  md:flex md:flex-row  '>
          <div className='md:flex md:flex-row md:gap-10 mx-20 '>
          <div className=' md:flex md:flex-col md:gap-4 '>
             <button > <img src={Janu} alt="" className='w-30 h-20  hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover': monCol}} 
             onClick={() => {
              setJanshow(true)
              // console.log(showJan)
              {/* random color generate */}
              const random = Math.floor(Math.random() * colors.length)
              const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
              setEmoji(randomEmoji)
              setrandom_color(colors[random])
              setmonthWallpaper(jan_socio)
              setmonthWallpaperColor("#4B9AF9")
             }} /></button>
              <button> <img src={Feb} alt="" className='w-20 h-20    hover:bg-[var(--bg-hover)] hover:animate-pulse   hover:duration-500' style={{'--bg-hover': monCol}}
              onClick={() => {
                setFebshow(true)
                setmonthWallpaper(feb_socio)
                setmonthWallpaperColor("#25DCEC")
              }}/></button>
              <button><img src={Mar} alt=""  className='w-20 h-20  hover:bg-[var(--bg-hover)]   hover:animate-pulse  hover:duration-500' style={{'--bg-hover': monCol}}
              onClick={() => {
                setMarshow(true)
                setmonthWallpaper(mar_socio)
                setmonthWallpaperColor("#00A038")
              }}/></button>
              <button><img src={Apr} alt="" className='w-20 h-20   hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover': monCol}}
              onClick={() => {
                setAprshow(true)
                setmonthWallpaper(apr_socio)
                setmonthWallpaperColor("#A8DD67")
              }}/></button>
              <button><img src={May} alt="" className='w-20 h-20    hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover': monCol}}
              onClick={() => {
                setMayshow(true)
                setmonthWallpaper(may_socio)
                setmonthWallpaperColor("#68D2AE")
              }}/></button>
              <button><img src={Jun} alt=""  className='w-20 h-20    hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover': monCol}}
              onClick={() => {
                setJuneshow(true)
                setmonthWallpaper(jun_socio)
                setmonthWallpaperColor("#F2D400")
              }}/></button>

          </div>
          <div className=' md:flex md:flex-col md:gap-4 '>
            <button><img src={Jul} alt="" className='w-20 h-20  hover:bg-[var(--bg-hover)]   hover:animate-pulse     hover:duration-500' style={{'--bg-hover': monCol}}
            onClick={() => {
                setJulyshow(true)
                setmonthWallpaper(jul_socio)
                setmonthWallpaperColor("#FFD9AC")
              }}/></button>
              <button><img src={Aug} alt="" className='w-20 h-20  hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover': monCol}}
              onClick={() => {
                setAugshow(true)
                setmonthWallpaper(aug_socio)
                setmonthWallpaperColor("#FFC6FF")
              }}/></button>
              <button><img src={Sep} alt=""  className='w-20 h-20 hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover': monCol}}
              onClick={() => {
                setSepshow(true)
                setmonthWallpaper(sep_socio)
                setmonthWallpaperColor("#C7CDFF")
              }}/></button>
              <button><img src={Oct} alt="" className='w-20 h-20 hover:bg-[var(--bg-hover)]   hover:animate-pulse  hover:duration-500' style={{'--bg-hover': monCol}}
              onClick={() => {
                setOctshow(true)
                setmonthWallpaper(oct_socio)
                setmonthWallpaperColor("#FF734F")
              }}/></button>
              <button><img src={Nov} alt="" className='w-20 h-20  hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover': monCol}}
              onClick={() => {
                setNovshow(true)
                setmonthWallpaper(nov_socio)
                setmonthWallpaperColor("#EB1B67")
              }}/></button>
              <button><img src={Dec} alt=""  className='w-20 h-20 hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover': monCol}}
              onClick={() => {
                setDecshow(true)
                setmonthWallpaper(dec_socio)
                setmonthWallpaperColor("#B77CBC")
              }}/></button>
            
          </div>
          <div className=' md:flex md:flex-col md:gap-5 '>
            <button onClick={()=>
            setShow(true)}>
                <img src={Wall} alt="" className='w-20 h-20'/>
            </button>
              
            
          </div>
          </div>
          {
         (showJan || (showFeb || showMar || showApr || showMay || showJune|| showJuly|| showAug|| showSep || showOct|| showNov|| showDec)) && (<>
      <div className='xl:absolute lg:absolute xl:top-[3vh] xl:left-[0vh] bg-white xl:mx-8 lg:top-[2vh] lg:left-[0vh] lg:mx-4 xl:w-auto xl:h-auto xl:flex xl:flex-col xl:gap-0  lg:flex-wrap lg:rounded-3xl lg:flex lg:flex-col  lg:gap-0'>
      <div className=' flex justify-end px-4 rounded-t-3xl' style={{backgroundColor:monthWallpaperColor}}>
        <button id="close" className='text-white text-4xl  hover:scale-[80%] hover:duration-100 hover:text-red-600' onClick={() => {
          setJanshow(false);
          setFebshow(false);
          setMarshow(false);
          setAprshow(false);
          setMayshow(false);
          setJuneshow(false);
          setJulyshow(false);
          setAugshow(false);
          setSepshow(false);
          setOctshow(false);
          setNovshow(false);
          setDecshow(false);
          
        }} >x</button>
      </div>
    <div className='flex justify-center items-center ' style={{backgroundColor:monthWallpaperColor}}>
         <img src={monthWallpaper} alt="" className='mb-4 bg-[#4B9AF9] lg:h-20 lg:w-60' />
      </div>
     
      <div className=' flex flex-row justify-center items-center gap-[12%] '>
        <h1 className='play'>Sun</h1>
        <h1 className='play'>Mon</h1>
        <h1 className='play'>Tue</h1>
        <h1 className='play'>Wed</h1>
        <h1 className='play'>Thu</h1>
        <h1 className='play'>Fri</h1>
        <h1 className='play'>Sat</h1>
      </div>
      <div className='flex flex-col  justify-center items-center '>
        
        <div className='grid grid-cols-7 lg:grid-cols-7 '>
          <div className='px-35  pt-20 bg-white border-1'>
            <h1 className='lg:px-5 text-white' style={{backgroundColor:monthWallpaperColor}}></h1> 
                      </div>
          <div className=' bg-white  border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}></h1> 
                      </div>
          <div className=' bg-white border-1 flex flex-col justify-start ' style={{
           
            backgroundColor:random_color}}>
              <div className='lg:flex lg:flex-row justify-between items-center'>
                <h1 className=' lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>1</h1>
                <h1 className='  rounded-full text-lg  mx-2'>{Emoji}</h1>
              </div>
            
            
            <button className=' underline text-white play cursor-pointer' onClick={() => {
              setDialog(true)
              }}>OOPS Revision</button> 
            
            <p className='lg:px-5 text-white play text-sm' >Deadline : 5th Jan</p>
                      </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>2</h1> 
                      </div>
          <div className=' flex flex-col items-start justify-start  bg-white border-1'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>3</h1>
            
          </div>
          <div className='flex flex-col items-start justify-start  bg-white border-1'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>4</h1> 
            </div>
          <div className='flex flex-col items-start justify-start bg-white border-1'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>5</h1> 
            </div>
        </div>
          <div className='grid grid-cols-7 lg:grid-cols-7 '>
          <div className=' flex flex-col items-start justify-start px-35 pt-15 bg-white border-1'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>67</h1> 
            </div>
          <div className=' bg-white  border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>7</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>8</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>9</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>10</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>11</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>12</h1> 
            </div>
        </div>
        <div className='grid grid-cols-7 lg:grid-cols-7  '>
          <div className='px-35 pt-15 bg-white border-1 flex items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>13</h1>
            </div>
          <div className=' bg-white  border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>14</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>15</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>16</h1> 
            </div>
          <div className= 'bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>17</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>18</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>17</h1> 
            </div>
        </div>
        <div className='grid grid-cols-7 lg:grid-cols-7 '>
          <div className='px-35 pt-15 bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>18</h1> 
            </div>
          <div className=' bg-white  border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>19</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>20</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>21</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>22</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>23</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>24</h1> 
            </div>
        </div>
        <div className='grid grid-cols-7 lg:grid-cols-7 '>
          <div className='px-35 pt-15 bg-white border-1 rounded-bl-3xl flex flex-col items-start justify-start'>
            <h1 className=' lg:px-5 text-white' style={{backgroundColor:monthWallpaperColor}}>25</h1> 
            </div>
          <div className=' bg-white  border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>26</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>27</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>28</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>29</h1> 
            </div>
          <div className=' bg-white border-1 flex flex-col items-start justify-start'>
            <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>30</h1> 
            </div>
          <div className=' bg-white border-1 rounded-br-3xl flex flex-col items-start justify-start'>
            <h1 className='lg:px-5 text-white' style={{backgroundColor:monthWallpaperColor}}>31</h1> 
            </div>
        </div>
      </div>
      
    </div>
          {
            ((dialog && showJan && !showApr) && (
              <>
              <div className=' bg-white absolute xl:top-[50%] xl:left-[35%] lg:top-[50%] lg:left-[35%] rounded-3xl border-1 flex '>
                <div className='flex flex-col gap-4'>
                  <div className='bg-amber-300 flex justify-end xl:px-4 lg:px-2 rounded-tr-3xl rounded-tl-3xl border-1'>
                    <button onClick={() => {
                      setDialog(false)
                      setopacity_screen(1)}}>x</button>
                  </div>
                  <div className='flex flex-col xl:px-20 lg:px-5 text-sm'>
                    <p className=''>OOPS Revision</p>
                    <p>Lorem ipsum dolis molestiae minusrrrr a</p>
                   <p>Lorem ipsum dolis molestiae miniurrrrrre!</p>
                   <p>Lorem ipsum dolis molestiae mirrrrrniure!</p>
                  </div>
                  <div className='flex flex-row gap-2 mx-2 mb-2 justify-center lg:scale-[80%] xl:scale-100'>
                    <button className='bg-green-400 px-4'>Accept</button>
                    <button className='bg-green-400 px-4'>Reject</button>
                    <button className='bg-green-400 px-4'>Completed</button>
                  </div>
                </div>
              </div>
              </>
            ))
          }
          </>)
         }
        </div>

        


          </div>
          
          
          

        </div>
        {/* live date , text message and clock */}
          <div className='play rounded-b-3xl w-full p-2 flex justify-between  text-white xl:text-3xl lg:text-xl' style={{backgroundColor : winCol}}>
            
              <div className=''>
              <h1>{time.toLocaleDateString()}</h1>
              </div>
              <div>
                {isMorning && <h1>Wake up champ!</h1> }
                {isAfternoon && <h1>A lunch break won't hurt much!</h1> }
                {isEvening && <h1>Evening tea is all I need!</h1> }
                {isNight && <h1>Wish I could finish this fast to sleep!</h1> }
                {isMidnight && <h1>Time to burn some night oil!</h1> }
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
        

        

         
       
        

        
      </div>
    </div>
    { 
    show && (
      <>
      <div ref={menuRef} className='bg-[#FFF0CE] duration-1000 flex justify-center  w-20 h-30 absolute xl:top-126 xl:left-110 lg:top-48 lg:left-150 rounded-3xl'>
        <div className='flex flex-col justify-center items-center gap-2'>
          <button onClick={() => {
            
            setWallpaper(back3)
            setwinCol("#427A43")
            setmonCol("#427A43")}}>
              <div className='w-10 h-5 bg-gradient-to-r from-green-500 to-cyan-300 rounded-3xl hover:animate-pulse hover:transition-all '></div>
          </button>
          <button onClick={() => {

           setWallpaper(back4)
           setwinCol("#F5824A")
           setmonCol("#FEEE91")
          }}>
             <div className='w-10 h-5  bg-linear-to-r from-red-500 via-orange-500 to-amber-500 rounded-3xl hover:animate-pulse hover:transition-all'></div>
          </button>
          <button onClick={() => {

            setWallpaper(back5)
            setwinCol("#193CB8")
            setmonCol("#1B3C53")
          }}>
             <div className='w-10 h-5 bg-linear-to-t from-sky-400 to-indigo-400 rounded-3xl hover:animate-pulse hover:transition-all '></div>
          </button>
          <button className=" text-red-600 text-[10px] play hover:scale-90 hover:duration-50 rounded-3xl" onClick={()=> {
            setWallpaper(back2)
            setwinCol("#FEA314")
            setmonCol("#FC63B6")
          }}>
            RESET
          </button>
        </div>
          </div>
      </> ) 
    }
    </>
  )
}

export default TaskMapping
