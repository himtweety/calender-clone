import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: () => {},
  miniCalMonth: 0,
  setMiniCalMonth: () => {},
  selectedDay: null,
  setSelectedDay: () => {},
});

export default GlobalContext;
