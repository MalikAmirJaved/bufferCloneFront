import React, { useContext, useState } from "react";
import { Grip } from "lucide-react";
import CalenderGrid from "../../components/CalenderGrid";
import CalendarControls from "../../components/CalendarControls";
import dayjs from "dayjs";
import PostModal from "../../components/PostModal";

const Dashboard = () => {

  const [isModelOpen, setIsModelOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [view, setView] = useState("week");

 


  const handlePrev = () => {
    setCurrentDate(prev => prev.subtract(1, "week"));
  };

  const handleNext = () => {
    setCurrentDate(prev => prev.add(1, "week"));
  };

  const handleToday = () => {
    setCurrentDate(dayjs());
  };

  // Sample dynamic days and hours based on current week (you can enhance this)
  const startOfWeek = currentDate.startOf("week");
  const days = Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day").format("dddd D"));
  const hours = Array.from({ length: 12 }, (_, i) => `${i + 6} AM`);

  return (
    <section className="p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <span className="w-14 h-14 border-2 border-gray-300 rounded-full flex items-center justify-center">
            <Grip size={32} />
          </span>
          <span className="text-2xl font-semibold">All Channels</span>
        </div>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-gray-100 rounded">Today</button>
          <button className="px-4 py-2 bg-gray-100 rounded">Week</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Calendar</button>
        </div>
      </div>

      <div>
            <CalendarControls
              currentMonth={currentDate.format("MMMM YYYY")}
              onPrev={handlePrev}
              onNext={handleNext}
              onToday={handleToday}
              view={view}
              setView={setView}
            />

            {/* Calendar - FIXED LINE BELOW */}
            <CalenderGrid days={days} hours={hours} setIsModelOpen={setIsModelOpen} />

      </div>
      <div>
        <div className=""> 
          {isModelOpen && 
            <div className="bg-black/60 fixed inset-0 z-50 flex items-center justify-center">
                <PostModal setIsModelOpen={setIsModelOpen} />
            </div>
          }

        </div>
      </div>
    </section>
  );
};

export default Dashboard;
