import { render, screen } from "@testing-library/react";
import { mockStore } from "../../store";
import HomePage from "./HomePage";
import { MockContextProvider } from "../../mocks/Wrapper";

describe("Given a Browse component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Most Popular' section title", () => {
      const expectedTitle = "Most Popular";

      render(
        <MockContextProvider store={mockStore}>
          <HomePage></HomePage>
        </MockContextProvider>
      );

      const sectionTitle = screen.getByRole("heading", {
        name: `${expectedTitle}`,
      });

      expect(sectionTitle).toBeInTheDocument();
    });

    test("Then it should show a list of cards", () => {
      render(
        <MockContextProvider store={mockStore}>
          <HomePage></HomePage>
        </MockContextProvider>
      );

      const unorderedList = screen.getByRole("list");

      expect(unorderedList).toBeInTheDocument();
    });
  });
});
