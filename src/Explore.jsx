<<<<<<< Updated upstream
=======
import React from "react";
import "./Explore.css";
import Friends from "./Friends";
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import Topics from "./Topics";
import SearchIcon from "@mui/icons-material/Search";


function Explore() {
  return (
    <>
      <div className="Explore">
        <div className="Explore_header">
          </div>
        <SearchIcon className="Explore__SearchIcon" />
        <input placeholder="Search Twitter" type="text" />
          <SettingsSharpIcon />
        </div>
        <div className="ExploreContent">
         <Topics />
        </div>
      <div className="widgets">
        <Friends />
      </div>
    </>
  );
}


export default Explore;
>>>>>>> Stashed changes
