import React, { useEffect, useMemo, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

const savedEventReducer = (state, { type, payload }) => {
  switch (type) {
    case "push":
      return [...state, payload];
    case "update":
      return state.map((evt) => (evt.id === payload.id ? payload : evt));
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
};
const initEvents = () => {
  const storedEvents = localStorage.getItem("storedEvents");
  const parsedEvents = storedEvents ? JSON.parse(storedEvents) : [];
  return parsedEvents;
};
function ContextWrapper(props) {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [miniCalMonth, setMiniCalMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [labels, setLabels] = useState([]);
  const [selectEvent, setSelectEvent] = useState(null);
  const [savedEvents, dispatchCallEvent] = useReducer(
    savedEventReducer,
    [],
    initEvents
  );
  useEffect(() => {
    localStorage.setItem("storedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  useEffect(() => {
    setLabels((prevLabels) => {
      return [...new Set(savedEvents.map((evt) => evt.label))].map((label) => {
        {
          console.log(labels);
          const currentLabel = prevLabels.find((lbl) => lbl.label === label);

          return {
            label,
            checked: currentLabel ? currentLabel.checked : true,
          };
        }
      });
    });
  }, [savedEvents]);

  useEffect(() => {
    if (miniCalMonth !== null) {
      setMonthIndex(miniCalMonth);
    }
  }, [miniCalMonth]);

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);

  const updateLabel = (label) => {
    setLabels(labels.map((lbl) => (lbl.label === label.label ? label : lbl)));
  };
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
        setShowEventModal,
        dispatchCallEvent,
        selectEvent,
        setSelectEvent,
        savedEvents,
        setLabels,
        labels,
        updateLabel,
        filteredEvents
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}

export default ContextWrapper;
