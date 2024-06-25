import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [miniCalMonth, setMiniCalMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  useEffect(() => {
    if (miniCalMonth !== null) {
      setMonthIndex(miniCalMonth);
    }
  }, [miniCalMonth]);
  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,
        miniCalMonth,
        setMiniCalMonth,
        selectedDay,
        setSelectedDay,
        showEventModal,
        setShowEventModal
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
