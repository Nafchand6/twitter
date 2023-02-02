import React, { useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";

function Feed() {
  const [posts] = useState([]);

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox />
      {posts.map((post) => (
        <Post
          key={post.text}
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      ))}
    </div>
  );
}
export default Feed;
