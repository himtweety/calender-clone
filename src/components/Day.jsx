import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";

function Day({ day, rowIdx }) {
  const getCurrentDayClass = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 rounded-full w-7"
      : "";
  };
  const { setSelectedDay, setShowEventModal, savedEvents } =
    useContext(GlobalContext);
  const [dayEvents, setDayEvents] = useState([]);
  useEffect(() => {
    const evts = savedEvents.filter(
      (evt) =>
        dayjs(evt.day).format("DD-MM-YY") === dayjs(day).format("DD-MM-YY")
    );
    setDayEvents(evts);
  }, [savedEvents, day]);
  return (
    <div className="border border-gray-400 flex flex-col">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm mt-1">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          setSelectedDay(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((evt, idx) => (
          <div
            key={idx}
            className={`bg-${evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate`}
          >
            {evt.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Day;
