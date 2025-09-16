// src/pages/calendar/CalendarPage.tsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage: React.FC = () => {
  const [date, setDate] = useState<Date | Date[]>(new Date());

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📅 Calendar</h1>

      <div className="bg-white shadow-md rounded-xl p-6 w-fit">
        <Calendar
          onChange={setDate}
          value={date}
          className="rounded-lg border-none"
        />
      </div>

      {/* Selected Date */}
      <div className="mt-6 text-lg font-medium">
        Selected:{" "}
        {Array.isArray(date)
          ? `${date[0].toDateString()} - ${date[1].toDateString()}`
          : date.toDateString()}
      </div>
    </div>
  );
};

export default CalendarPage;
