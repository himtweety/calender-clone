import React, { useState } from "react";
import Header from "./components/Header";
import Month from "./components/Month";
import Sidebar from "./components/Sidebar";
import { getMonth } from "./utill";

export default function App() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <React.Fragment>
      <div className="h-screen flex-columns">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
}
