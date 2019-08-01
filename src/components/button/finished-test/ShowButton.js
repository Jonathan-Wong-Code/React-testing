import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ShowButton from "../ShowButton";

afterEach(cleanup);

describe("<ShowButton />", () => {
  test("Should not render a message when the component loads", () => {
    const { queryByTestId } = render(<ShowButton />);
    expect(queryByTestId("show-button-message")).toBeNull();
  });

  test("Should render a message when the button is clicked", () => {
    const { getByTestId } = render(<ShowButton />);
    fireEvent.click(getByTestId("show-button-button"));
    expect(getByTestId("show-button-message")).toBeDefined();
    expect(getByTestId("show-button-message")).toHaveTextContent("hello");
  });
});
