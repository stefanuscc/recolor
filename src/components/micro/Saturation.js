import React, { useCallback } from "react";
import Pointer from "./Pointer"

import { hsvaToHslString, hsvaToRgba, rgbaToHex } from "../../utils/convert";
import { clamp, round } from "../../utils/manipulator";

export const Saturation = (props) => {
    const { color, onChange } = props;
    
    const handleChange = useCallback((event) => {
        const { width, height, left, top } = event.target.getBoundingClientRect();

        const x = clamp(event.clientX - left, 0, width);
        const y = clamp(event.clientY - top, 0, height);

        const s = (x / width) * 100;
        const v = 100 - (y / height) * 100;

        const rgb = hsvaToRgba({ h: color?.hsv.h, s, v });

        onChange(rgbaToHex(rgb));
    }, [color, onChange]);

    const containerStyle = {
        backgroundColor: hsvaToHslString({ h: color.hsv.h, s: 100, v: 100, a: 1 }),
    };

    return (
        <div className="recolor__saturation" 
            style={containerStyle} 
            onClick={handleChange}
            aria-label="Color"
            aria-valuetext={`Saturation ${round(color.hsv.s)}%, Brightness ${round(color.hsv.v)}%`}
        >
            <Pointer
                className="recolor__saturation-pointer"
                top={1 - color.hsv.v / 100}
                left={color.hsv.s / 100}
                color={hsvaToHslString(color.hsv)}
            />
        </div>
    );
}

export default Saturation;


