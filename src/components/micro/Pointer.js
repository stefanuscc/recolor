import React from "react";

export const Pointer = (props) => {
    const { className, color, left, top = 0.5 } = props;
    const nodeClass = ["recolor__pointer", ...className].join(" ");
    const style = {
        top: `${top * 100}%`,
        left: `${left * 100}%`,
    };

	return (
        <div className={nodeClass} style={style}>
            <div className="recolor__pointer-fill" style={{ backgroundColor: color }}></div>
        </div>
	)
}

export default Pointer;