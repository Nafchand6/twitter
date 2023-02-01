import React from "react";
import Feed from "./Feed";
import Widgets from "./Widgets";
import HomeBox from "./HomeBox";


export default function Home() {
  return (
    <HomeBox>
      <Feed />
      <Widgets />
      </HomeBox>

  );
}

