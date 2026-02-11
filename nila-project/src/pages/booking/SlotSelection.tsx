import React, { useState, useEffect } from "react";
// import { slotsData } from '../../data/session/slotselection';

export type TimePeriod = "Morning" | "Afternoon" | "Evening";

export interface TimeSlot {
  time: string;
}

export interface DaySlot {
  id: string;
  day: string;
  date: string;
  fullDate: string; 
  slotsCount: number;
  disabled?: boolean;
  periods: {
    period: TimePeriod;
    slots: TimeSlot[];
  }[];
}

interface Props {
  data: any;
  setData: (data: any) => void;
  setError: (msg: string) => void;
}

const SlotSelection: React.FC<Props> = ({ data, setData, setError }) => {
  const [selectedDay, setSelectedDay] = useState<DaySlot | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [availableSlots, setAvailableSlots] = useState<DaySlot[]>([]);

  // Generate available dates (Today + Next 7 days)
  useEffect(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Start of today

    const generateDates = () => {
      const dates: DaySlot[] = [];
      for (let i = 0; i < 8; i++) { // Today + 7 days
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        
        const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dateStr = date.getDate().toString().padStart(2, '0') + ' ' + 
                       date.toLocaleDateString('en-US', { month: 'short' });
        
        dates.push({
          id: date.getTime().toString(),
          day: dayNames[date.getDay()],
          date: dateStr,
          fullDate: date.toISOString().split('T')[0],
          slotsCount: i === 0 ? 5 : 12, // Today fewer slots
          periods: generatePeriods(date)
        });
      }
      setAvailableSlots(dates);
      // ✅ Default: Today
      setSelectedDay(dates[0]);
    };

    generateDates();
  }, []);

  // ✅ Generate time slots based on day/time
  const generatePeriods = (date: Date): DaySlot['periods'] => {
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    
    const morningSlots = isToday && now.getHours() >= 12 
      ? [] // No morning if past noon
      : ["09:00", "09:30", "10:00", "10:30", "11:00"];
    
    const afternoonSlots = ["14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];
    const eveningSlots = ["18:00", "18:30", "19:00", "19:30", "20:00"];

    return [
      { period: "Morning" as TimePeriod, slots: morningSlots.map(t => ({ time: t })) },
      { period: "Afternoon" as TimePeriod, slots: afternoonSlots.map(t => ({ time: t })) },
      { period: "Evening" as TimePeriod, slots: eveningSlots.map(t => ({ time: t })) }
    ];
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
    setData({ ...data, slot, selectedDay: selectedDay?.fullDate });
    setError("");
  };

  const handleDaySelect = (day: DaySlot) => {
    setSelectedDay(day);
    setSelectedSlot(""); // Reset slot when changing day
    setData({
      ...data,
      date: day.date,
      fullDate: day.fullDate
    });
    setError("");
  };

  if (!selectedDay) return <div>Loading slots...</div>;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg space-y-6">
      {/* ✅ Date Selection - Today onwards */}
      <div className="flex gap-3 overflow-x-auto pb-2">
        {availableSlots.map((day) => (
          <button
            key={day.id}
            onClick={() => handleDaySelect(day)}
            disabled={day.disabled}
            className={`min-w-[110px] rounded-2xl border-2 p-4 text-center transition-all duration-300 flex flex-col items-center
              ${selectedDay.id === day.id 
                ? "bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-xl scale-105" 
                : day.disabled 
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200" 
                  : "bg-white hover:bg-teal-50 hover:border-teal-300 hover:shadow-md border-gray-200"
              }`}
          >
            <p className="font-bold text-sm">{day.day}</p>
            <p className="text-xs font-semibold mt-1">{day.date}</p>
            <p className="text-xs opacity-75">{day.slotsCount} slots</p>
          </button>
        ))}
      </div>

      {/* Selected Date Info */}
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border border-teal-200">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-teal-800">{selectedDay.day}, {selectedDay.date}</p>
            <p className="text-sm text-teal-600">Available slots: <span className="font-bold">{selectedDay.periods.reduce((acc, p) => acc + p.slots.length, 0)}</span></p>
          </div>
          {selectedSlot && (
            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold">
              {selectedSlot}
            </span>
          )}
        </div>
      </div>

      {/* ✅ Time Slot Sections */}
      {selectedDay.periods.map((section) => (
        section.slots.length > 0 && (
          <div key={section.period} className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                section.period === 'Morning' ? 'from-orange-500' :
                section.period === 'Afternoon' ? 'from-teal-500' : 'from-purple-500'
              }`}></div>
              {section.period} Slots
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {section.slots.map((slot) => (
                <button
                  key={slot.time}
                  onClick={() => handleSlotSelect(slot.time)}
                  className={`rounded-xl py-3 px-4 font-medium transition-all duration-300 shadow-sm hover:shadow-md
                    ${selectedSlot === slot.time
                      ? "bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-lg scale-105" 
                      : "bg-white border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-800"
                    }`}
                >
                  {slot.time}
                </button>
              ))}
            </div>
          </div>
        )
      ))}

      {/* No slots message */}
      {selectedDay.periods.every(p => p.slots.length === 0) && (
        <div className="text-center py-12">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg font-semibold text-gray-600 mb-2">No slots available</p>
          <p className="text-sm text-gray-500">Try selecting another date</p>
        </div>
      )}
    </div>
  );
};

export default SlotSelection;

