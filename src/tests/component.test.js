import React from "react";
import { getByRole, screen, render, cleanup, fireEvent } from "@testing-library/react";
import { ColorInput } from "../components/ColorInput";
import "@testing-library/jest-dom";

import renderer from "react-test-renderer"

afterEach(cleanup);

it("Renders proper color picker markup", () => {
    const view = renderer.create(<ColorInput color="#AAAAAA" />);

    expect(view).toMatchSnapshot();
});