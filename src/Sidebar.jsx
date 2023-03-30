import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@mui/icons-material/Home";
<<<<<<< Updated upstream
import SearchIcon from "@mui/icons-material/Search";
=======
import TagIcon from "@mui/icons-material/Tag";
>>>>>>> Stashed changes
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from "@mui/material";
<<<<<<< Updated upstream
=======
import { Link, useLocation } from "react-router-dom";
>>>>>>> Stashed changes

function Sidebar() {
  return (
<<<<<<< Updated upstream
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active Icon={<HomeIcon/>} text="Home" />
      <SidebarOption active Icon={<SearchIcon/>} text="Explore" />
      <SidebarOption Icon={<NotificationsNoneIcon/>} text="Notification" />
      <SidebarOption Icon={<MailOutlineIcon/>} text="Messages" />
      <SidebarOption Icon={<BookmarkBorderIcon/>} text="Bookmarks" />
      <SidebarOption Icon={<ListAltIcon/>} text="Lists" />
      <SidebarOption Icon={<PermIdentityIcon/>} text="Profile" />
      <SidebarOption Icon={<MoreHorizIcon/>} text="More" /> 
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
=======
    <>
      <div className="sidebar">
        <TwitterIcon className="sidebar__twitterIcon" />

        <nav>
          <Link style={{textDecoration: 'none'}} to="/" >
            <SidebarOption Icon={<HomeIcon />} text="Home" />
            {location === "/Home"}
          </Link>

          <Link style={{textDecoration: 'none'}} to="/Explore">
            <SidebarOption Icon={<TagIcon />} text="Explore" />
            {location === "./Explore"}
          </Link>
        </nav>
       
        <SidebarOption Icon={<NotificationsNoneIcon />} text="Notifications"/>
        <SidebarOption Icon={<MailOutlineIcon />} text="Messages" />
        <SidebarOption Icon={<BookmarkBorderIcon />} text="Bookmarks" />
        <SidebarOption Icon={<ListAltIcon />} text="Lists" />
        <SidebarOption Icon={<PermIdentityIcon />} text="Profile" />
        <SidebarOption Icon={<MoreHorizIcon />} text="More" />
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Tweet
        </Button>
      </div>
    </>
>>>>>>> Stashed changes
  );
}

export default Sidebar;