import React, { useState } from "react";
import Rgb from "./Rgb";
import Hex from "./Hex";
import Hsl from "./Hsl";

export const Color = (props) => {
    const { color, onChange } = props;
    const [ panel, setPanel ] = useState('rgb');

    return (
        <div>
            <Rgb color={color} onChange={onChange} isHidden={panel !== 'rgb'} onPanelSet={setPanel}/>
            <Hex color={color} onChange={onChange} isHidden={panel !== 'hex'} onPanelSet={setPanel}/>
            <Hsl color={color} onChange={onChange} isHidden={panel !== 'hsl'} onPanelSet={setPanel}/>
        </div>
	)
}

export default Color;