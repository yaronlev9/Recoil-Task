import React from "react";
import { canvasBackgroundColorState } from "../../Atoms/canvasBackgroundColorState.js";
import { useRecoilState } from "recoil";
import "./colorPicker.css";

function ColorPicker() {
	const [backgroundColor, setBackgroundColor] = useRecoilState(
		canvasBackgroundColorState
	);

	return (
		<div className="colorPicker">
			<label htmlFor="colorPickerInput">
				change canvas color to random color:
				<input
					id="colorPickerInput"
					type="color"
					value={backgroundColor}
					onChange={({ target }) => setBackgroundColor(target.value)}
				/>
			</label>
		</div>
	);
}

export default ColorPicker;
