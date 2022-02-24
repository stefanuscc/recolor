import { hexToRgba, rgbaToHex, rgbaToHsva } from "./convert";

export function getRgb(color) {
  const matches = /rgb\((\d+),\s?(\d+),\s?(\d+)\)/i.exec(color);
  const r = Number(matches?.[1] ?? 0);
  const g = Number(matches?.[2] ?? 0);
  const b = Number(matches?.[3] ?? 0);
  const a = 1;

  return {
    r,
    g,
    b,
    a,
  };
}

export function parseColor(color) {
  var hex = "";
  var rgb = {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
  var hsv = {
    h: 0,
    s: 0,
    v: 0,
    a: 1
  };

  if (color.slice(0, 1) === "#") {
    hex = color;
    rgb = hexToRgba(hex);
    hsv = rgbaToHsva(rgb);
  } else if (color.slice(0, 3) === "rgb") {
    rgb = getRgb(color);
    hex = rgbaToHex(rgb);
    hsv = rgbaToHsva(rgb);
  }

  return {
    hex,
    rgb,
    hsv
  };
}

export function getSaturationCoordinates(color) {
  const { s, v } = rgbaToHsva(color.rgb);

  const x = s;
  const y = 100 - v;

  return [x, y];
}

export function getHueCoordinates(color) {
  const { h } = color.hsv;

  const x = (h / 360) * 100;

  return x;
}

export const round = (number, digits = 0, base = Math.pow(10, digits)) => {
  return Math.round(base * number) / base;
};

// Clamps a value between an upper and lower bound.
// We use ternary operators because it makes the minified code
// 2 times shorter then `Math.min(Math.max(a,b),c)`
export const clamp = (number, min = 0, max = 1) => {
  return number > max ? max : number < min ? min : number;
};