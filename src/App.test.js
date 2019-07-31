import React from "react";
import App from "./App";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import { JestEnvironment } from "@jest/environment";

jest.mock("axios");
afterEach(cleanup);

describe("<App />", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});
