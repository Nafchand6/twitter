import React from "react";
import "./Topics.css";
import TopicItem from "./TopicItem";

function Topics() {
  return (
    <div className="widgetsTopics">
      <div className="widgetsTopicsHeader">
        <span>What's going on?</span>
      </div>
      <TopicItem
        category="Celebrities · Trending"
        title="Zendaya"
        numberoftweet="50K"
      />
      <TopicItem
        category="Movies · Trending"
        title="Avatar"
        numberoftweet="102.5K"
      />
      <TopicItem
        category="Series · Trending"
        title="Last of us"
        numberoftweet="89K"
      />
      <TopicItem
        category="Gaming · Trending"
        title="Hogwarts Legacy"
        numberoftweet="301.5K"
      />
      <TopicItem
        category="Books · Trending"
        title="ACOTAR"
        numberoftweet="60.1K"
      />

      <div className="widgetsTopicMore">
        <span>Show more</span>
      </div>
    </div>
  );
}

export default Topics;