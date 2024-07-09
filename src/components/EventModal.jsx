import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const labelsClass = ["indigo", "gray", "green", "blue", "red", "purple"];
function EventModal() {
  const {
    selectedDay,
    setShowEventModal,
    dispatchCallEvent,
    selectEvent,
    setSelectEvent,
  } = useContext(GlobalContext);
  const [title, setTitle] = useState(selectEvent ? selectEvent.title : "");
  const [desc, setDesc] = useState(selectEvent ? selectEvent.desc : "");
  const [selLabel, setSelLabel] = useState(
    selectEvent
      ? labelsClass.find((lbl) => lbl === selectEvent.label)
      : labelsClass[0]
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      desc,
      label: selLabel,
      day: selectedDay.valueOf(),
      id: selectEvent ? selectEvent.id : Date.now(),
    };
    if (selectEvent) {
      dispatchCallEvent({ type: "update", payload: calendarEvent });
    } else dispatchCallEvent({ type: "push", payload: calendarEvent });
    setShowEventModal(false);
  };
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <div>
            {selectEvent && (
              <span
                onClick={() => {
                  dispatchCallEvent({ type: "delete", payload: selectEvent });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                delete
              </span>
            )}

            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200
              focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p>{selectedDay.format("dddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="description"
              placeholder="Add Description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200
              focus:outline-none focus:ring-0 focus:border-blue-500"
            />
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              {labelsClass.map((lc, j) => (
                <span
                  key={j}
                  onClick={() => setSelLabel(lc)}
                  className={`bg-${lc}-500 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selLabel === lc && (
                    <span className="material-icons-outlined text-white text-sm font-semibold">
                      check
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="flex justify-end w-100 border-t p-3 mt-5">
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}

export default EventModal;
