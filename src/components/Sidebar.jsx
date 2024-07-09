import React from "react";
import CreateEventBtn from "./CreateEventBtn";
import SidebarMiniCal from "./SidebarMiniCal";
import Labels from "./Labels";

function Sidebar() {
  return (
    <aside className="border p-5 w-64">
      <CreateEventBtn />
      <SidebarMiniCal/>
      <Labels/>
    </aside>
  );
}

export default Sidebar;
