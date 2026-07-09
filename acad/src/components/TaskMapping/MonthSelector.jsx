
import React from 'react'
import Wall from '../../assets/Wall.png'
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
import TaskMappingMobile from './TaskMappingMobile'

const MonthSelector = ({onSelectedMonth, onToggleWallpaper, Col , emoj ,color, height_test}) => {

  return (
    <div className='md:flex md:flex-row md:gap-10 mx-20 pt-4 '>
              <div className=' md:flex md:flex-col md:gap-2 '>
                
                 <button > <img src={Janu} alt="" className='w-20 h-20  hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover': Col}} 
                 onClick={() => {

                onSelectedMonth(0)
                height_test(18)

                 }} /></button>
                  <button> <img src={Feb} alt="" className='w-18 h-20    hover:bg-[var(--bg-hover)] hover:animate-pulse   hover:duration-500' style={{'--bg-hover':  Col}}
                  onClick={() => {
                    onSelectedMonth(1)
                    height_test(24)
                 
                   
                  }}/></button>
                  <button><img src={Mar} alt=""  className='w-20 h-20  hover:bg-[var(--bg-hover)]   hover:animate-pulse  hover:duration-500' style={{'--bg-hover':  Col}}
                  onClick={() => {
                    onSelectedMonth(2)
                    height_test(18)
                 
                    
                  }}/></button>
                  <button><img src={Apr} alt="" className='w-20 h-20   hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover':  Col}}
                  onClick={() => {
                    onSelectedMonth(3)
                    height_test(18)
                 
                   
                  }}/></button>
                  <button><img src={May} alt="" className='w-20 h-20    hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover':  Col}}
                  onClick={() => {
                   onSelectedMonth(4)
                   height_test(18)
                  
                    
                  }}/></button>
                  <button><img src={Jun} alt=""  className='w-20 h-20    hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover':  Col}}
                  onClick={() => {
                    onSelectedMonth(5)
                    height_test(18)
                
                    
                  }}/></button>
    
              </div>
              <div className=' md:flex md:flex-col md:gap-2'>
                <button><img src={Jul} alt="" className='w-20 h-20  hover:bg-[var(--bg-hover)]   hover:animate-pulse     hover:duration-500' style={{'--bg-hover':  Col}}
                onClick={() => {
                    onSelectedMonth(6)
                    height_test(18)
                  
                    
                  }}/></button>
                  <button><img src={Aug} alt="" className='w-20 h-20  hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover':  Col}}
                  onClick={() => {
                   onSelectedMonth(7)
                   height_test(18)
                
                    
                  }}/></button>
                  <button><img src={Sep} alt=""  className='w-20 h-20 hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover':  Col}}
                  onClick={() => {
                    onSelectedMonth(8)
                    height_test(18)
                  
                    
                  }}/></button>
                  <button><img src={Oct} alt="" className='w-20 h-20 hover:bg-[var(--bg-hover)]   hover:animate-pulse  hover:duration-500' style={{'--bg-hover':  Col}}
                  onClick={() => {
                    onSelectedMonth(9)
                    height_test(18)
                 
                   
                  }}/></button>
                  <button><img src={Nov} alt="" className='w-20 h-20  hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover': Col}}
                  onClick={() => {
                  onSelectedMonth(10)
                  height_test(18)
                  
                    
                  }}/></button>
                  <button><img src={Dec} alt=""  className='w-20 h-20 hover:bg-[var(--bg-hover)]  hover:animate-pulse   hover:duration-500' style={{'--bg-hover':  Col}}
                  onClick={() => {
                    onSelectedMonth(11)
                    height_test(18)
                  
                    
                  }}/></button>
                
              </div>
        <div className=' md:flex md:flex-col md:gap-5 '>
            <button onClick={onToggleWallpaper}>
                <img src={Wall} alt="" className='w-20 h-20'/>
            </button>
        </div>
    </div>
  )
}

export default MonthSelector
