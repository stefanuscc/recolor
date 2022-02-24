import React, { useState, useRef } from "react";
import ColorPicker from './ColorPicker';

import { useOutsideAlert } from '../hooks/useOutsideAlert'

export const ColorInput = (props) => {
	const {color, onChange, ...restProps} = props
	const [pickColor, setPickColor] = useState(false);
	const activeClass = (active) => { return active ? 'transform opacity-100 scale-100 -translate-x-1/2' : 'transform opacity-0 scale-95 -translate-x-1/2'; }
	const pickerClass = ["origin-top absolute left-1/2 top-10 mt-2 w-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none", activeClass(pickColor)].join(' ');

	const colorInput = useRef(null);
	const wrapperRef = useRef(null);
	useOutsideAlert(wrapperRef, (event) => {
		setPickColor(false)
	});

	return (
		<div {...restProps} ref={wrapperRef} className="relative inline-flex text-left">
			<div className="flex">
				<button type="button" className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm" 
					onClick={ () => colorInput.current.focus() }
				>
					<div className="inline-flex rounded-full h-5 w-5" style={{ backgroundColor: color }}></div>
				</button>
				<input
					ref={colorInput}
					type="text"
					name={props.name ?? 'colorpicker'}
					data-testid={props.id ?? 'colorpicker'}
					id={props.id ?? 'colorpicker'}
					className="focus:ring-indigo-0 focus:border-indigo-0 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
					placeholder="Pick Color"
					readOnly="readonly"
					onFocus={ () => setPickColor(true) }
					value={color ?? ''}
				/>
			</div>
			<div className={pickerClass} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
				<div>
					<div className="px-4 py-3" role="none">
						<ColorPicker color={color} onChange={onChange}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ColorInput;