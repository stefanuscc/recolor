import React, { useCallback } from "react";
 
export const Hex = (props) => {
    const { color, isHidden = false, onChange, onPanelSet } = props;

    const handlePanel = useCallback((event) => {
        onPanelSet('rgb');
    }, [onPanelSet]);

    const handleHexChange = useCallback((event) => {
        var val = event.target.value;
        if (val?.slice(0, 1) !== "#") {
            val = "#" + val;
        }
        onChange(val);
    }, [onChange]);

    return (
        <div className={"mt-1 bg-white rounded-md shadow-sm -space-y-px " + (isHidden ? 'hidden' : '')}>
            <div className="flex -space-x-px border border-gray-300 rounded-t-md">
                <div className="flex-1 flex items-center py-1">
                    <div className="w-full text-center text-sm">HEX</div>
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
                <div className="w-full flex-1 min-w-0">
                    <label className="sr-only">R</label>
                    <input 
                        type="text" name="r" id="r" 
                        className="focus:ring-indigo-500 focus:border-indigo-500 py-1 relative block w-full bg-transparent focus:z-10 text-sm border-none" 
                        placeholder="R"
                        value={color.hex}
                        onChange={handleHexChange}
                    ></input>
                </div>
            </div>
        </div>
	)
}

export default Hex;