import React, { useState, useContext } from "react";

import { TasksContext } from "../../../TaskList/AllTasks";
const MonthSelectorMobile = ({ onSelectedMonth }) => {
  const [selectedMonth, setSelectedMonth] = useState("Month");
  const [isOpen, setIsOpen] = useState(false);
  const { random_color } = useContext(TasksContext);
  const [moncolor, setmoncolor] = useState("#ffffff");

  return (
    <div className="relative w-48 lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2  border border-gray-300 rounded-md shadow-sm 
                   flex items-center justify-between 
                   hover:border-gray-400 focus:outline-none"
        style={{ backgroundColor: moncolor }}
      >
        <span aria-placeholder="month" className="play text-white">
          {selectedMonth}
        </span>

        <svg
          className={`w-4 h-4 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute play mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-20">
          <button
            onClick={() => {
              setmoncolor("#4B9AF9");
              setSelectedMonth("January");
              setIsOpen(false);
              onSelectedMonth(0);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Jan
          </button>

          <button
            onClick={() => {
              setmoncolor("#25DCEC");
              setSelectedMonth("Feburary");
              setIsOpen(false);
              onSelectedMonth(1);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Feb
          </button>

          <button
            onClick={() => {
              setmoncolor("#00A038");
              setSelectedMonth("March");
              setIsOpen(false);
              onSelectedMonth(2);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Mar
          </button>

          <button
            onClick={() => {
              setmoncolor("#A8DD67");
              setSelectedMonth("April");
              setIsOpen(false);
              onSelectedMonth(3);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Apr
          </button>

          <button
            onClick={() => {
              setmoncolor("#68D2AE");
              setSelectedMonth("May");
              setIsOpen(false);
              onSelectedMonth(4);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            May
          </button>

          <button
            onClick={() => {
              setmoncolor("#F2D400");
              setSelectedMonth("June");
              setIsOpen(false);
              onSelectedMonth(5);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Jun
          </button>

          <button
            onClick={() => {
              setmoncolor("#FFD9AC");
              setSelectedMonth("July");
              setIsOpen(false);
              onSelectedMonth(6);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Jul
          </button>

          <button
            onClick={() => {
              setmoncolor("#FFC6FF");
              setSelectedMonth("August");
              setIsOpen(false);
              onSelectedMonth(7);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Aug
          </button>

          <button
            onClick={() => {
              setmoncolor("#C7CDFF");
              setSelectedMonth("September");
              setIsOpen(false);
              onSelectedMonth(8);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Sep
          </button>

          <button
            onClick={() => {
              setmoncolor("#FF734F");
              setSelectedMonth("October");
              setIsOpen(false);
              onSelectedMonth(9);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Oct
          </button>

          <button
            onClick={() => {
              setmoncolor("#EB1B67");
              setSelectedMonth("November");
              setIsOpen(false);
              onSelectedMonth(10);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Nov
          </button>

          <button
            onClick={() => {
              setmoncolor("#B77CBC");
              setSelectedMonth("December");
              setIsOpen(false);
              onSelectedMonth(11);
            }}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
          >
            Dec
          </button>
        </div>
      )}
    </div>
  );
};

export default MonthSelectorMobile;
