// src/components/ui/calendar/calendar.jsx
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; 

const CalendarComponent = () => {
  const [selectedDay, setSelectedDay] = useState(new Date());

  return (
    <div>
      <DayPicker 
        selected={selectedDay}
        onSelect={setSelectedDay}
      />
      <p>Selected day: {selectedDay.toLocaleDateString()}</p>
    </div>
  );
};

export default CalendarComponent;
