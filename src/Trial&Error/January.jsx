// import {React , useState }from 'react'
// import Jan from '../../assets/Jan.png'
// import cross from '../../assets/cross.svg'
// import back2 from '../../assets/back2.PNG'
// import Janu from '../../assets/Janu.png'
// import Feb from '../../assets/Feb.png'
// import Mar from '../../assets/Mar.png'
// import Apr from '../../assets/Apr.png'
// import May from '../../assets/May.png'
// import Jun from '../../assets/Jun.png'
// import Jul from '../../assets/Jul.png'
// import Aug from '../../assets/Aug.png'
// import Sep from '../../assets/Sep.png'
// import Oct from '../../assets/Oct.png'
// import Nov from '../../assets/Nov.png'
// import Dec from '../../assets/Dec.png'


// import Wall from '../../assets/wall.png'
// import Clock from '../../assets/Clock.png'
// import back3 from '../../assets/back3.jpg'
// import back4 from '../../assets/back4.jpg'
// import back5 from '../../assets/back5.jpg'
// import jan_socio from '../../assets/socio/jan_socio.png'
// import feb_socio from '../../assets/socio/feb_socio.png'
// import mar_socio from '../../assets/socio/mar_socio.png'
// import apr_socio from '../../assets/socio/apr_socio.png'
// import may_socio from '../../assets/socio/may_socio.png'
// import jun_socio from '../../assets/socio/jun_socio.png'
// import jul_socio from '../../assets/socio/jul_socio.png'
// import aug_socio from '../../assets/socio/aug_socio.png'
// import sep_socio from '../../assets/socio/sep_socio.png'
// import oct_socio from '../../assets/socio/oct_socio.png'
// import nov_socio from '../../assets/socio/nov_socio.png'
// import dec_socio from '../../assets/socio/dec_socio.png'

// import getRandomEmoji from './random_emoji.js'

// const January = () => {
//     const[wallpaper,setWallpaper] = useState(back2)
//       const[show,setShow] = useState(false);
//       const[winCol,setwinCol] = useState("#FEA314")
//       const[monCol,setmonCol] = useState("#FC63B6")
//       const[time,setTime] = useState(new Date());
//       const[monthWallpaper, setmonthWallpaper] = useState(jan_socio);
//       const[monthWallpaperColor , setmonthWallpaperColor] = useState("#4B9AF9")
//       const[showJan,setJanshow] = useState(false);
//       const[showFeb,setFebshow] = useState(false);
//       const[showMar,setMarshow] = useState(false);
//       const[showApr,setAprshow] = useState(false);
//       const[showMay,setMayshow] = useState(false);
//       const[showJune,setJuneshow] = useState(false);
//       const[showJuly,setJulyshow] = useState(false);
//       const[showAug,setAugshow] = useState(false);
//       const[showSep,setSepshow] = useState(false);
//       const[showOct,setOctshow] = useState(false);
//       const[showNov,setNovshow] = useState(false);
//       const[showDec,setDecshow] = useState(false);
//       const[random_color, setrandom_color] = useState("");
//       const[Emoji, setEmoji] = useState()
//       const[dialog,setDialog] = useState(false)
   

//       setmonthWallpaper(jan_socio)
//       setmonthWallpaper("#4B9AF9")
//       setEmoji("🙂")
//       setrandom_color("fffff")
//   return (
//     <>
//       <div className='xl:absolute lg:absolute xl:top-[3vh] xl:left-[0vh] bg-white xl:mx-8 lg:top-[2vh] lg:left-[0vh] lg:mx-4 xl:w-auto xl:h-auto xl:flex xl:flex-col xl:gap-0  lg:flex-wrap lg:rounded-3xl lg:flex lg:flex-col  lg:gap-0'>
//       <div className=' flex justify-end px-4 rounded-t-3xl' style={{backgroundColor:monthWallpaperColor}}>
//         <button id="close" className='text-white text-4xl  hover:scale-[80%] hover:duration-100 hover:text-red-600' onClick={() => {
//           setJanshow(false);
//           setFebshow(false);
//           setMarshow(false);
//           setAprshow(false);
//           setMayshow(false);
//           setJuneshow(false);
//           setJulyshow(false);
//           setAugshow(false);
//           setSepshow(false);
//           setOctshow(false);
//           setNovshow(false);
//           setDecshow(false);
          
//         }} >x</button>
//       </div>
//     <div className='flex justify-center items-center ' style={{backgroundColor:monthWallpaperColor}}>
//          <img src={monthWallpaper} alt="" className='mb-4 bg-[#4B9AF9] lg:h-20 lg:w-60' />
//       </div>
     
//       <div className=' flex flex-row justify-center items-center gap-[12%] '>
//         <h1 className='play'>Sun</h1>
//         <h1 className='play'>Mon</h1>
//         <h1 className='play'>Tue</h1>
//         <h1 className='play'>Wed</h1>
//         <h1 className='play'>Thu</h1>
//         <h1 className='play'>Fri</h1>
//         <h1 className='play'>Sat</h1>
//       </div>
//       <div className='flex flex-col  justify-center items-center '>
        
//         <div className='grid grid-cols-7 lg:grid-cols-7 '>
//           <div className='px-35  pt-20 bg-white border-1'>
//             <h1 className='lg:px-5 text-white' style={{backgroundColor:monthWallpaperColor}}></h1> 
//                       </div>
//           <div className=' bg-white  border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}></h1> 
//                       </div>
//           <div className=' bg-white border-1 flex flex-col justify-start ' style={{
           
//             backgroundColor:random_color}}>
//               <div className='lg:flex lg:flex-row justify-between items-center'>
//                 <h1 className=' lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>1</h1>
//                 <h1 className='  rounded-full text-lg  mx-2'>{Emoji}</h1>
//               </div>
            
            
//             <button className=' underline text-white play cursor-pointer' onClick={() => {
//               setDialog(true)
//               }}>OOPS Revision</button> 
            
//             <p className='lg:px-5 text-white play text-sm' >Deadline : 5th Jan</p>
//                       </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>2</h1> 
//                       </div>
//           <div className=' flex flex-col items-start justify-start  bg-white border-1'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>3</h1>
            
//           </div>
//           <div className='flex flex-col items-start justify-start  bg-white border-1'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>4</h1> 
//             </div>
//           <div className='flex flex-col items-start justify-start bg-white border-1'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>5</h1> 
//             </div>
//         </div>
//           <div className='grid grid-cols-7 lg:grid-cols-7 '>
//           <div className=' flex flex-col items-start justify-start px-35 pt-15 bg-white border-1'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>67</h1> 
//             </div>
//           <div className=' bg-white  border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>7</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>8</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>9</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>10</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>11</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>12</h1> 
//             </div>
//         </div>
//         <div className='grid grid-cols-7 lg:grid-cols-7  '>
//           <div className='px-35 pt-15 bg-white border-1 flex items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>13</h1>
//             </div>
//           <div className=' bg-white  border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>14</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>15</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>16</h1> 
//             </div>
//           <div className= 'bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>17</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>18</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>17</h1> 
//             </div>
//         </div>
//         <div className='grid grid-cols-7 lg:grid-cols-7 '>
//           <div className='px-35 pt-15 bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>18</h1> 
//             </div>
//           <div className=' bg-white  border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>19</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>20</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>21</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>22</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>23</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>24</h1> 
//             </div>
//         </div>
//         <div className='grid grid-cols-7 lg:grid-cols-7 '>
//           <div className='px-35 pt-15 bg-white border-1 rounded-bl-3xl flex flex-col items-start justify-start'>
//             <h1 className=' lg:px-5 text-white' style={{backgroundColor:monthWallpaperColor}}>25</h1> 
//             </div>
//           <div className=' bg-white  border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>26</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>27</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>28</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>29</h1> 
//             </div>
//           <div className=' bg-white border-1 flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5  text-white' style={{backgroundColor:monthWallpaperColor}}>30</h1> 
//             </div>
//           <div className=' bg-white border-1 rounded-br-3xl flex flex-col items-start justify-start'>
//             <h1 className='lg:px-5 text-white' style={{backgroundColor:monthWallpaperColor}}>31</h1> 
//             </div>
//         </div>
//       </div>
      
//     </div>
//           {
//             ((dialog && showJan ) && (
//               <>
//               <div className=' bg-white absolute xl:top-[50%] xl:left-[35%] lg:top-[50%] lg:left-[35%] rounded-3xl border-1 flex '>
//                 <div className='flex flex-col gap-4'>
//                   <div className='bg-amber-300 flex justify-end xl:px-4 lg:px-2 rounded-tr-3xl rounded-tl-3xl border-1'>
//                     <button onClick={() => {
//                       setDialog(false)
//                       setopacity_screen(1)}}>x</button>
//                   </div>
//                   <div className='flex flex-col xl:px-20 lg:px-5 text-sm'>
//                     <p className=''>OOPS Revision</p>
//                     <p>Lorem ipsum dolis molestiae minusrrrr a</p>
//                    <p>Lorem ipsum dolis molestiae miniurrrrrre!</p>
//                    <p>Lorem ipsum dolis molestiae mirrrrrniure!</p>
//                   </div>
//                   <div className='flex flex-row gap-2 mx-2 mb-2 justify-center lg:scale-[80%] xl:scale-100'>
//                     <button className='bg-green-400 px-4'>Accept</button>
//                     <button className='bg-green-400 px-4'>Reject</button>
//                     <button className='bg-green-400 px-4'>Completed</button>
//                   </div>
//                 </div>
//               </div>
//               </>
//             ))
//           }

//         </>
//     )
// }

// export default January
