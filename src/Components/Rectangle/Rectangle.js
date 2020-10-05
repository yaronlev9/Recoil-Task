import React from "react";
import { useRecoilValue } from "recoil";
import { rectAtomFamily } from "../../Atoms/rectAtom.js";
import "./rectangle.css";

function Rectangle({ rectId }) {
	const rectAtom = useRecoilValue(rectAtomFamily(rectId));
	return (
		<div
			className="rect"
			style={{
				width: rectAtom.width,
				height: rectAtom.height,
				backgroundColor: rectAtom.color,
			}}>
			<span>{rectAtom.name}</span>
		</div>
	);
}

export default Rectangle;
