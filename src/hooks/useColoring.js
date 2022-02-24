import { useState, useEffect, useCallback, useRef } from "react";
import { equalColorObjects } from "../utils/compare";

export function useColoring(
  color,
  onChange?
) {
  // Save onChange callback in the ref for avoiding "useCallback hell"
  const onChangeCallback = (event) => onChange(event);

  // No matter which color model is used (HEX, RGB(A) or HSL(A)),
  // all internal calculations are based on HSVA model
  const [hsva, updateHsva] = useState(color);

  // By using this ref we're able to prevent extra updates
  // and the effects recursion during the color conversion
  const cache = useRef({ color, hsva });

  // Update local HSVA-value if `color` property value is changed,
  // but only if that's not the same color that we just sent to the parent
  useEffect(() => {
    if (color != cache.current.color) {
      const newHsva = color;
      cache.current = { hsva: newHsva, color };
      updateHsva(newHsva);
    }
  }, [color]);

  // Trigger `onChange` callback only if an updated color is different from cached one;
  // save the new color to the ref to prevent unnecessary updates
  useEffect(() => {
    let newColor;
    if (
      (hsva == cache.current.hsva) &&
      ((newColor = hsva), cache.current.color)
    ) {
      cache.current = { hsva, color: newColor };
      onChangeCallback(newColor);
    }
  }, [hsva, onChangeCallback]);

  // Merge the current HSVA color object with updated params.
  // For example, when a child component sends `h` or `s` only
  const handleChange = useCallback((params) => {
    updateHsva((current) => Object.assign({}, current, params));
  }, []);

  return [hsva, handleChange];
}