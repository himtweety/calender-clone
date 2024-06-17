import React from "react";
import addEvent from "../assets/add.png";
function CreateEventBtn() {
  return (
    <button className="flex items-center justify-center font-bold mx-auto py-4 pl-8 mt-12 mb-6 
        border p-2 rounded-full flex ite shadow-md hover:shadow-2xl">
      <img src={addEvent} alt="create event" className="w-3 h-3"/>
      <span className="pl-3 pr-7 text-center align-middle">Create</span>
     </button>
  );
}

export default CreateEventBtn;
