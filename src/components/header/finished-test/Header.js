import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import Header from "./../Header";

afterEach(cleanup);

describe("<Header />", () => {
  test("it renders with an h1", () => {
    const { getByTestId } = render(<Header />);
    const headerOne = getByTestId("header-one");
    expect(headerOne).toBeDefined();
    expect(headerOne).toHaveTextContent("Welcome to my app!");
  });

  test("it renders with an h2", () => {
    const { getByTestId } = render(<Header />);
    const headerTwo = getByTestId("header-two");
    expect(headerTwo).toBeDefined();
    expect(headerTwo).toHaveTextContent("The little app of goodness");
  });
});
