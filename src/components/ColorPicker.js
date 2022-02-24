import React, { useMemo } from "react";
import Hue from "./micro/Hue";
import Color from "./micro/Color";
import Saturation from "./micro/Saturation";

import { parseColor } from "../utils/manipulator";

export const ColorPicker = (props) => {
	const {color, onChange} = props

	const parsedColor = useMemo(() => parseColor(color), [color]);

	return (
		<div className="recolor">
			<Saturation color={parsedColor} onChange={onChange}/>
			<Hue color={parsedColor} onChange={onChange}/>
			<Color color={parsedColor} onChange={onChange}/>
		</div>
	)
}

export default ColorPicker;


