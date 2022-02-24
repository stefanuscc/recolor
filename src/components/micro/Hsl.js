import React, { useCallback } from "react";
import { hsvaToHex, hslaToHsva, hsvaToHsla } from "../../utils/convert";
 
export const Hsl = (props) => {
    const { color, isHidden = false, onChange, onPanelSet } = props;

    const handlePanel = useCallback((event) => {
        onPanelSet('hex');
    }, [onPanelSet]);

    const handleHslChange = useCallback((component, value) => {
        const { h, s, l } = hsvaToHsla(color.hsv);

        switch (component) {
            case "h":
                onChange(hsvaToHex(hslaToHsva({ h: value ?? 0, s, l })));
            return;
            case "s":
                onChange(hsvaToHex(hslaToHsva({ h, s: value ?? 0, l })));
            return;
            case "l":
                onChange(hsvaToHex(hslaToHsva({ h, s, l: value ?? 0 })));
            return;
            default:
            return;
        }
    }, [color, onChange]);

    return (
        <div className={"mt-1 bg-white rounded-md shadow-sm -space-y-px " + (isHidden ? 'hidden' : '')}>
            <div className="flex -space-x-px border border-gray-300 rounded-t-md">
                <div className="flex-1 flex items-center py-1">
                    <div className="w-1/3 text-center text-sm">H</div>
                    <div className="w-1/3 text-center text-sm">S</div>
                    <div className="w-1/3 text-center text-sm">L</div>
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
                    <label className="sr-only">H</label>
                    <input 
                        type="text" name="h" id="h" 
                        className="focus:ring-indigo-500 focus:border-indigo-500 py-1 relative block w-full bg-transparent focus:z-10 text-sm border-none" 
                        placeholder="H"
                        value={hsvaToHsla(color.hsv).h}
                        onChange={(event) => handleHslChange("h", event.target.value)}
                    ></input>
                </div>
                <div className="w-1/3 flex-1 min-w-0">
                    <label className="sr-only">S</label>
                    <input 
                        type="text" name="s" id="s" 
                        className="focus:ring-indigo-500 focus:border-indigo-500 py-1 relative block w-full bg-transparent focus:z-10 text-sm border-none" 
                        placeholder="S"
                        value={hsvaToHsla(color.hsv).s}
                        onChange={(event) => handleHslChange("s", event.target.value)}
                    ></input>
                </div>
                <div className="w-1/3 flex-1 min-w-0">
                    <label className="sr-only">L</label>
                    <input 
                        type="text" name="l" id="l" 
                        className="focus:ring-indigo-500 focus:border-indigo-500 py-1 relative block w-full bg-transparent focus:z-10 text-sm border-none" 
                        placeholder="L"
                        value={hsvaToHsla(color.hsv).l}
                        onChange={(event) => handleHslChange("l", event.target.value)}
                    ></input>
                </div>
            </div>
        </div>
	)
}

export default Hsl;