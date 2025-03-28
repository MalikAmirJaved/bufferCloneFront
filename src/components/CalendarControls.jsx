// src/components/CalendarControls.jsx
import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CalendarControls = ({ currentMonth, onPrev, onNext, onToday, view, setView }) => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <div className="flex items-center space-x-2">
        <button onClick={onPrev} className="p-2 hover:bg-gray-200 rounded">
          <ChevronLeft size={18} />
        </button>
        <button onClick={onNext} className="p-2 hover:bg-gray-200 rounded">
          <ChevronRight size={18} />
        </button>
      </div>

      <span className="text-lg font-semibold">{currentMonth}</span>

      <button onClick={onToday} className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-100">
        Today
      </button>
    </div>
  );
};

export default CalendarControls;
