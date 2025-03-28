// src/components/CalenderGrid.jsx

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CalenderGrid = ({ days, hours, setIsModelOpen }) => {
  const currentDay = "Friday 28";

  return (
    <div className="grid grid-cols-8 gap-px bg-gray-300 text-sm">
      <div className="bg-white h-12" />
      {days.map((day) => (
        <div
          key={day}
          className={`h-12 flex items-center justify-center font-semibold ${
            day === currentDay ? "bg-blue-100 text-blue-700" : "bg-white"
          }`}
        >
          {day}
        </div>
      ))}

      {hours.map((hour) => (
        <React.Fragment key={hour}>
          <div className="bg-white h-24 flex items-center justify-center text-gray-500">
            {hour}
          </div>
          {days.map((day) => (
            <div
              key={day + hour}
              className="bg-white h-24 border-t border-gray-200 group relative transition-colors duration-200 hover:bg-blue-50"
            >
              <button
                onClick={() => setIsModelOpen(true)}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-blue-600 hover:text-blue-800"
              >
                <FontAwesomeIcon icon={faPlus} className="text-[20px]" />
              </button>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CalenderGrid;
