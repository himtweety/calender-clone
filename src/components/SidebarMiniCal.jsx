import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import { getMonth } from "../utill";
import GlobalContext from "../context/GlobalContext";

const SidebarMiniCal = () => {
  const [currrentMonthIdx, setCurrrentMonthIdx] = useState(dayjs().month());
  const [currrentMonth, setCurrrentMonth] = useState(getMonth());
  const { monthIndex, setMiniCalMonth, selectedDay, setSelectedDay } =
    useContext(GlobalContext);
  useEffect(() => {
    setCurrrentMonthIdx(monthIndex);
  }, [monthIndex]);
  useEffect(() => {
    setCurrrentMonth(getMonth(currrentMonthIdx));
  }, [currrentMonthIdx]);

  const handlePrevMonth = () => {
    setCurrrentMonthIdx(currrentMonthIdx - 1);
  };
  const handleNextMonth = () => {
    setCurrrentMonthIdx(currrentMonthIdx + 1);
  };
  const getDayClass = (day) => {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = selectedDay && selectedDay.format(format);
    if (nowDay === currDay) {
      return "bg-blue-500 rounded-full text-white";
    } else if (currDay === slcDay) {
      return "bg-blue-100 rounded-full text-blue-600 font-bold";
    } else return "";
  };
  return (
    <div className="mt-9">
      <header className="flex justify-between">
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currrentMonthIdx)).format(
            "MMMM YYYY"
          )}
        </p>
        <button onClick={handlePrevMonth}>
          <span className="span material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_left
          </span>
        </button>
        <button onClick={handleNextMonth}>
          <span className="span material-icons-outlined cursor-pointer text-gray-600 mx-2">
            chevron_right
          </span>
        </button>
      </header>
      <div className="grid grid-cols-7 grid-rows-6">
        {currrentMonth[0].map((day, i) => (
          <span>{day.format("dd").charAt(0)}</span>
        ))}
        {currrentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, j) => (
              <button
                key={j}
                onClick={() => {
                  setMiniCalMonth(currrentMonthIdx);
                  setSelectedDay(day);
                }}
                className={`py-1 w-full ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SidebarMiniCal;
