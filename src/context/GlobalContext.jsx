import React from "react";

const GlobalContext = React.createContext({
  monthIndex: 0,
  setMonthIndex: () => {},
  miniCalMonth: 0,
  setMiniCalMonth: () => {},
  selectedDay: null,
  setSelectedDay: () => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCallEvent: ({ type, payload }) => {},
  savedEvents: [],
  selectEvent: null,
  setSelectEvent: () => {},
  setLabels: () => {},
  updateLabel: () => {},
  labels: [],
  filteredEvents: [],
});

export default GlobalContext;
