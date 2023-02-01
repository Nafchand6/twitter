import React from "react";
import "./HomeBox.css";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

const HomeBox = () => {
  return (
    <div className="Home">
      <Sidebar />
       <Widgets />
      <div className="HomeBox">
      </div>
    </div>
  );
};

export default HomeBox;