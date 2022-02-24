
import React, { useState, useCallback } from "react";
import './App.css';
import ColorInput from './components/ColorInput';

function App() {
	const [chosenColor, setChosenColor] = useState("#AAAAAA");

	const handleChange = useCallback((color) => {
		setChosenColor(color);
	}, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="mt-1 flex rounded-md shadow-sm">
          <ColorInput name="colorpicker" id="colorpicker" color={chosenColor} onChange={handleChange}/>
        </div>
      </header>
    </div>
  );
}

export default App;
