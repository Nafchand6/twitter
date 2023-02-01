import React from "react";
import "./Explore.css";
import SearchIcon from '@mui/icons-material/Search';

function Explore() {
    return (
      
        <div className = "Explore">
            <div className = "Explore__header">
                <SearchIcon 
                    className = "Explore__SearchIcon" 
                />
                <input placeholder = "Search Twitter" type = "text" />
            </div>
            </div>
            
    )
    }

export default Explore;