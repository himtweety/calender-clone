import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";

const labelsClass = ["indigo", "gray", "green", "blue", "red", "purple"];
function EventModal() {
  const { selectedDay, setShowEventModal } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [selLabel, setSelLabel] = useState(labelsClass[0]);
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <button onClick={() => setShowEventModal(false)}>
            <span className="material-icons-outlined text-gray-400">close</span>
          </button>
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
      </form>
    </div>
  );
}

export default EventModal;
