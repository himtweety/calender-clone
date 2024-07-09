import React from "react";
import Day from "./Day";

function Month({ month }) {
  // console.table(month);
  return (
    <div className="flex-1 grid grid-cols-7 grid-rows-5">
      {month.map((weekRow, i) => (
        <React.Fragment key={i}>
          {weekRow.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default Month;
