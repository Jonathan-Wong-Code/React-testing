import { render, cleanup, wait } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import axios from "axios";
import APIExample from "./../apiExample";

jest.mock("axios");
afterEach(cleanup);
describe("<APIExample />", () => {
  test("it should render", () => {
    render(<APIExample />);
  });

  test("It should render with a successful API Call", async () => {
    axios.get.mockResolvedValueOnce({
      data: {
        name: "pikachu",
        sprites: {
          front_default: "imgURL"
        }
      }
    });
    const { getByTestId, getByAltText, queryByTestId } = render(<APIExample />);

    await wait(() => {
      expect(getByTestId("pokemon-name")).toHaveTextContent("name: pikachu");
      expect(getByAltText("pikachu")).toHaveAttribute("src", "imgURL");
      expect(queryByTestId("error")).toBeNull();
    });
  });

  test("Should render an error when API call not successful", async () => {
    axios.get.mockImplementationOnce = () => Promise.reject(new Error());
    const { queryByTestId, queryByAltText, getByTestId } = render(
      <APIExample />
    );

    await wait(() => {
      expect(queryByTestId("pokemon-name")).toBeNull();
      expect(queryByAltText("pikachu")).toBeNull();
      expect(getByTestId("error")).toBeDefined();
    });
  });
});
