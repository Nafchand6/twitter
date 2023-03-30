import Avatar from '@mui/material/Avatar';
import React from "react";
import "./FriendFollow.css";

function FriendFollow({ image, displayName, username }) {
  return (
    <div className="friendFollowItem">
      <div className="friendFollowImage">
        <Avatar src={image} />
      </div>
      <div className="profileCardNameCol">
        <div className="profileCardNameColName">
          <span>{displayName}</span>
        </div>
        <div className="profileCardNameColuserName">
          <span>@{username}</span>
        </div>
      </div>
      <div className="friendFollowButton">
        <span>Follow</span>
      </div>
    </div>
  );
}

export default FriendFollow;