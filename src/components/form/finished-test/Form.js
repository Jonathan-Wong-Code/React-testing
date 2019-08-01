import { render, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import Form from "../Form";

// Cleans up the test-dom so we don't get multiple renders of our component.
afterEach(cleanup);

describe("<Form />", () => {
  const handleSubmit = jest.fn();

  test("it renders", () => {
    render(<Form handleSubmit={handleSubmit} />);
  });
  // Teach clean up here to clean up test DOM
  test("Should initialize with a disabled button and not submittable", () => {
    const { getByText } = render(<Form handleSubmit={handleSubmit} />);

    const button = getByText(/submit/i);
    expect(button).toBeDisabled();
  });

  test("Should be able to submit the form when name and email have been filled", () => {
    const { getByLabelText, getByTestId, getByText } = render(
      <Form handleSubmit={handleSubmit} />
    );

    const button = getByText(/submit/i);
    const nameInput = getByLabelText(/name/i);
    const emailInput = getByLabelText(/email/i);
    const form = getByTestId("form");

    fireEvent.change(nameInput, { target: { value: "Jonathan" } });
    fireEvent.change(emailInput, { target: { value: "jon@jon.com" } });

    expect(nameInput).toHaveValue("Jonathan");
    expect(emailInput).toHaveValue("jon@jon.com");
    expect(button).toBeEnabled();

    fireEvent.submit(form);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith("Jonathan", "jon@jon.com");
  });
});
