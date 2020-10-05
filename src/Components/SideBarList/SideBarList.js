import React from "react";
import SideBarItem from "../SideBarItem/SideBarItem.js";
import { useRecoilValue} from "recoil";
import { rectsIdsArrState } from "../../Atoms/rectsIdsArrState.js";
import "./sideList.css";
// DO NOT TOUCH THAT
import {useRenderMeter} from "../../ChallengeUtils/hooks.js";
import {sideBarListRenderMeterState} from "../../ChallengeUtils/renderMeter";
// ---------------------


function SideBarList() {
	//DO NOT TOUCH THAT
	useRenderMeter(sideBarListRenderMeterState)
	// ----------------
	const rectsIdsArr = useRecoilValue(rectsIdsArrState);
	return (
		<ul className="sidebar__list">
			{rectsIdsArr.map(id => (
				<SideBarItem key={id} rectId={id} />
			))}
		</ul>
	);
}

export default SideBarList;
