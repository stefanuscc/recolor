import React, { useCallback } from "react";
import { rgbaToHex } from "../../utils/convert";
 
export const Rgb = (props) => {
    const { color, isHidden = false, onChange, onPanelSet } = props;

    const handlePanel = useCallback((event) => {
        onPanelSet('hsl');
    }, [onPanelSet]);

    const handleRgbChange = useCallback((component, value) => {
        const { r, g, b } = color.rgb;

        switch (component) {
            case "r":
                onChange(rgbaToHex({ r: value ?? 0, g, b }));
            return;
            case "g":
                onChange(rgbaToHex({ r, g: value ?? 0, b }));
            return;
            case "b":
                onChange(rgbaToHex({ r, g, b: value ?? 0 }));
            return;
            default:
            return;
        }
    }, [color, onChange]);

    return (
        <div className={"mt-1 bg-white rounded-md shadow-sm -space-y-px " + (isHidden ? 'hidden' : '')}>
            <div className="flex -space-x-px border border-gray-300 rounded-t-md">
                <div className="flex-1 flex items-center py-1">
                    <div className="w-1/3 text-center text-sm">R</div>
                    <div className="w-1/3 text-center text-sm">G</div>
                    <div className="w-1/3 text-center text-sm">B</div>
                </div>
                <div className="flex-0 min-w-0 flex items-center">
                    <button type="button" className="px-1" onClick={handlePanel}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex -space-x-px border border-gray-300 rounded-b-md">
                <div className="w-1/3 flex-1 min-w-0">
                    <label className="sr-only">R</label>
                    <input 
                        type="text" name="r" id="r" 
                        className="focus:ring-indigo-500 focus:border-indigo-500 py-1 relative block w-full bg-transparent focus:z-10 text-sm border-none" 
                        placeholder="R"
                        value={color.rgb.r}
                        onChange={(event) => handleRgbChange("r", event.target.value)}
                    ></input>
                </div>
                <div className="w-1/3 flex-1 min-w-0">
                    <label className="sr-only">G</label>
                    <input 
                        type="text" name="g" id="g" 
                        className="focus:ring-indigo-500 focus:border-indigo-500 py-1 relative block w-full bg-transparent focus:z-10 text-sm border-none" 
                        placeholder="G"
                        value={color.rgb.g}
                        onChange={(event) => handleRgbChange("g", event.target.value)}
                    ></input>
                </div>
                <div className="w-1/3 flex-1 min-w-0">
                    <label className="sr-only">B</label>
                    <input 
                        type="text" name="b" id="b" 
                        className="focus:ring-indigo-500 focus:border-indigo-500 py-1 relative block w-full bg-transparent focus:z-10 text-sm border-none" 
                        placeholder="B"
                        value={color.rgb.b}
                        onChange={(event) => handleRgbChange("b", event.target.value)}
                    ></input>
                </div>
            </div>
        </div>
	)
}

export default Rgb;