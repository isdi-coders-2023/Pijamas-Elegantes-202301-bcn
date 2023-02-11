import { UIContext } from "./UIContext";
import { useContext } from "react";
import UIContextProvider from "./UIContextProvider";
import { render, screen } from "@testing-library/react";

describe("Given a UIContextProvider", () => {
  describe("When its child element receives false loading status", () => {
    test("Then it should show a span with an accesible name 'Loading status is false'", () => {
      const TestComponent = () => {
        const { isLoading } = useContext(UIContext);

        return (
          <span
            role="status"
            aria-label={`Loading status is ${isLoading}`}
          ></span>
        );
      };

      render(
        <UIContextProvider>
          <TestComponent />
        </UIContextProvider>
      );

      const expectedParagraph = screen.getByRole("status", {
        name: "Loading status is false",
      });

      expect(expectedParagraph).toBeInTheDocument();
    });
  });
});
