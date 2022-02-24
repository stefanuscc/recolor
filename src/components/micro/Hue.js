import React, { useCallback } from "react";
import Pointer from "./Pointer"

import { hsvaToHslString, hsvaToRgba, rgbaToHex } from "../../utils/convert";
import { clamp, round } from "../../utils/manipulator";

export const Hue = (props) => {
    const { color, onChange } = props;
    const handleChange = useCallback((event) => {
        const { width, left } = event.target.getBoundingClientRect();
        const x = clamp(event.clientX - left, 0, width);
        const h = Math.round((x / width) * 360);

        const hsv = { h, s: color?.hsv.s, v: color?.hsv.v };
        const rgb = hsvaToRgba(hsv);

        onChange(rgbaToHex(rgb));
    }, [color, onChange]);

	return (
        <div className="recolor__hue"
            aria-label="Hue"
            aria-valuetext={round(color?.hsv.h)}
            onClick={handleChange}
        >
            <Pointer
                className="recolor__hue-pointer"
                left={color?.hsv.h / 360}
                color={hsvaToHslString({ h: color?.hsv.h, s: 100, v: 100, a: 1 })}
            />
        </div>
	)
}

export default Hue;


