import { render, screen } from "@testing-library/react";
import { genre, mockStore } from "../../store";
import HomePage from "./HomePage";
import { Wrapper } from "../../mocks/Wrapper";

describe("Given a Browse component with the genre on the context being ''", () => {
  describe("When it renders", () => {
    test("Then it should show a 'Most Popular' section title", () => {
      const setGenre = () => {
        let titleGenre;

        if (!genre) {
          titleGenre = "Most Popular";
        } else {
          titleGenre = genre;
        }
        return titleGenre;
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
  describe("When it ee", () => {
    test("Then it should show a 'Action' section title", () => {
      const setGenre = () => {
        let titleGenre;
        if (!genre) {
          titleGenre = "Most Popular";
        } else {
          titleGenre = genre;
        }
        return titleGenre;
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
  });
});
