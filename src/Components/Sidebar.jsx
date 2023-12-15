import React from "react";
import SidebarColumn from "./SidebarColumn";

const Sidebar = ({ data }) => {
  return data.map((element, index) => (
    <SidebarColumn key={index} block={element} />
  ));
};

export default Sidebar;
