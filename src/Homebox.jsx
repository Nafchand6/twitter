import React from "react";
import "./HomeBox.css";
import Widgets from "./Widgets";

const HomeBox = () => {
	return (
		<div className="Home">
			<Widgets />
			<div className="HomeBox"></div>
		</div>
	);
};

export default HomeBox;
