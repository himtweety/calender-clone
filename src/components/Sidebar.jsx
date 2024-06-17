import React from "react";
import CreateEventBtn from "./CreateEventBtn";
import SidebarMiniCal from "./SidebarMiniCal";

function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventBtn />
      <SidebarMiniCal/>
    </aside>
  );
}

export default Sidebar;
