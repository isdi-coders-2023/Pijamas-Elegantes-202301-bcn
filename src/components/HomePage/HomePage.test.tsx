import { render, screen } from "@testing-library/react";
import { mockStore, mockUIStore } from "../../store";
import HomePage from "./HomePage";
import { UIWrapper, Wrapper } from "../../mocks/Wrapper";

describe("Given a Browse component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Most Popular' section title", () => {
      const expectedTitle = "Most Popular";

      render(
        <UIWrapper store={mockUIStore}>
          <Wrapper store={mockStore}>
            <HomePage></HomePage>
          </Wrapper>
        </UIWrapper>
      );

      const sectionTitle = screen.getByRole("heading", {
        name: `${expectedTitle}`,
      });

      expect(sectionTitle).toBeInTheDocument();
    });

    test("Then it should show a list of cards", () => {
      render(
        <UIWrapper store={mockUIStore}>
          <Wrapper store={mockStore}>
            <HomePage></HomePage>
          </Wrapper>
        </UIWrapper>
      );

      const unorderedList = screen.getByRole("list");

      expect(unorderedList).toBeInTheDocument();
    });
  });
});
