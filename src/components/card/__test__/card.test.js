import React from "react";
import Card from "../Card";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("<Card />", () => {
  test("it renders", () => {
    const title = "test title";
    const author = "Jon";
    const year = 2000;

    const { getByTestId } = render(
      <Card title={title} author={author} year={year} />
    );
    const titleElement = getByTestId("title");
    const authorElement = getByTestId("author");
    const yearElement = getByTestId("year");

    expect(titleElement).toHaveTextContent("test title");
    expect(authorElement).toHaveTextContent("Jon");
    expect(yearElement).toHaveTextContent(2000);
  });
});
