import { render, screen } from "@testing-library/react";
import { genre, mockStore } from "../../store";
import HomePage from "./HomePage";
import { Wrapper } from "../../mocks/Wrapper";

describe("Given a Browse component", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Most Popular' section title", () => {
      const setGenre = () => {
        let currentGenre;

        if (!genre) {
          currentGenre = "Most Popular";
        } else {
          currentGenre = genre;
        }
        return currentGenre;
      };
      const expectedTitle = setGenre();

      render(
        <Wrapper store={mockStore}>
          <HomePage></HomePage>
        </Wrapper>
      );

      const sectionTitle = screen.getByRole("heading", {
        name: `${expectedTitle}`,
      });

      expect(sectionTitle).toBeInTheDocument();
    });

    test("Then it should show a list of cards", () => {
      render(
        <Wrapper store={mockStore}>
          <HomePage></HomePage>
        </Wrapper>
      );

      const unorderedList = screen.getByRole("list");

      expect(unorderedList).toBeInTheDocument();
    });
  });
});
