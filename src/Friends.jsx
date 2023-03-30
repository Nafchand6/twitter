import React from "react";
import "./Friends.css";
import FriendFollow from "./FriendFollow";

function Friends() {
  return (
    <div className="friends">
      <div className="friendsHeader">
        <span>Who to follow</span>
      </div>
      <FriendFollow
        username="TomHolland"
        displayName="Peter Parker"
        image=""
      />
      <FriendFollow
        username="EmmaWatson"
        displayName="Emma W"
        image=""
      />
      <FriendFollow
        username="JohnnyDepp"
        displayName="Jack Sparrow"
        image=""
      />
      <div className="widgetsTopicMore">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default Friends;