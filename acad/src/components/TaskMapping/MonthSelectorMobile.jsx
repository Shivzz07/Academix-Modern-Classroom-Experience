import React,{useState,useContext} from 'react'
  import Slider from "react-slick";
  import Calendar from './Calendar/Calendar.jsx'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TasksContext } from '../TaskList/AllTasks.jsx'
const MonthSelectorMobile = ({onSelectedMonth}) => {

  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="relative w-48 lg:hidden">

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm 
                   flex items-center justify-between 
                   hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-black"
      >
        <span aria-placeholder='month'>{selectedMonth}</span>

        {/* Arrow Icon */}
        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-20">

          <button onClick={() => {
                setSelectedMonth("January") 
                setIsOpen(false) 
onSelectedMonth(0)
          }} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Jan</button>

          <button onClick={() => {
            setSelectedMonth("Feburary")
            setIsOpen(false) 
onSelectedMonth(1)}} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Feb</button>

          <button onClick={() => {
            setSelectedMonth("March")
            setIsOpen(false) 
onSelectedMonth(2)}} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Mar</button>

          <button onClick={() => {
            setSelectedMonth("April")
            setIsOpen(false) 
onSelectedMonth(3)}} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Apr</button>

          <button onClick={() => {
            setSelectedMonth("May")
            setIsOpen(false) 
onSelectedMonth(4)}} className="block w-full text-left px-4 py-2 hover:bg-gray-100">May</button>

          <button onClick={() => {
            setSelectedMonth("June")
            setIsOpen(false) 
onSelectedMonth(5)}} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Jun</button>

          <button onClick={() => {
            setSelectedMonth("July")
            setIsOpen(false) 
onSelectedMonth(6)}} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Jul</button>

          <button onClick={() => {
            setSelectedMonth("August")
            setIsOpen(false) 
onSelectedMonth(7)}} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Aug</button>

          <button onClick={() => {
            setSelectedMonth("September")
            setIsOpen(false) 
onSelectedMonth(8)}} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Sep</button>

          <button onClick={() => {
            setSelectedMonth("October")
            setIsOpen(false) 
onSelectedMonth(9)}} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Oct</button>

          <button onClick={() => {
            setSelectedMonth("November")
            setIsOpen(false) 
onSelectedMonth(10)}} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Nov</button>

          <button onClick={() => {
            setSelectedMonth("December")
            setIsOpen(false) 
onSelectedMonth(11)}} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Dec</button>

        </div>
      )}
    </div>
  );
};

export default MonthSelectorMobile
