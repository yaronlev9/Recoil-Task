import React from "react";
import Menu from "../Menu/Menu.js";
import SideBarList from "../SideBarList/SideBarList.js";
import "./sidebar.css";
// DO NOT TOUCH THIS
import {sidebarRenderMeterState} from "../../ChallengeUtils/renderMeter.js";
import {useRenderMeter} from "../../ChallengeUtils/hooks.js";
// ------------------------


function SideBar() {
	//DO NOT TOUCH THAT
	useRenderMeter(sidebarRenderMeterState);
	// ---------------------------------------------
	return (
		<div className="sidebar">
			<Menu />
			<SideBarList />
		</div>
	);
}

export default SideBar;
