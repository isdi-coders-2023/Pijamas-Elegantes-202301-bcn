import { screen, render } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When invoked with the class 'primary__button', with the text 'Primary' and with the action 'plusOne'", () => {
    test("It should render a button with the class 'primary__button', the text 'Primary', and the function 'plusOne'", () => {
      const plusOne = () => {
        let number = 2;
        return number;
      };

      render(
        <Button className="primary__button" text={"Primary"} action={plusOne} />
      );

      const genericButton = screen.getByRole("button", {
        name: "Primary",
      });

      expect(genericButton).toHaveClass("primary__button");
      expect(genericButton).toHaveTextContent("Primary");
    });
  });

  describe("When it receives a function and the user clicks on the button", () => {
    const action = jest.fn();

    render(
      <Button className="primary__button" text={"Secondary"} action={action} />
    );

    const genericButton = screen.getByRole("button", {
      name: "Secondary",
    });
    userEvent.click(genericButton);
    expect(action).toHaveBeenCalled();
  });
});
