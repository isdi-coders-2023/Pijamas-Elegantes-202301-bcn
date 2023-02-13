import { render, screen } from "@testing-library/react";
import { genre, mockStore, mockUIStore } from "../../store";
import HomePage from "./HomePage";
import { UIWrapper, Wrapper } from "../../mocks/Wrapper";
import { BrowserRouter } from "react-router-dom";
import { mockStore2 } from "../../store2";

describe("Given a HomePage component with the genre on the context being ''", () => {
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
        <BrowserRouter>
          <UIWrapper store={mockUIStore}>
            <Wrapper store={mockStore}>
              <HomePage />
            </Wrapper>
          </UIWrapper>
        </BrowserRouter>
      );

      const sectionTitle = screen.getByRole("heading", {
        name: `${expectedTitle}`,
      });

      expect(sectionTitle).toBeInTheDocument();
    });

    test("Then it should show a list of cards", () => {
      render(
        <BrowserRouter>
          <UIWrapper store={mockUIStore}>
            <Wrapper store={mockStore}>
              <HomePage />
            </Wrapper>
          </UIWrapper>
        </BrowserRouter>
      );

      const unorderedList = screen.getByRole("list");

      expect(unorderedList).toBeInTheDocument();
    });
  });
  describe("When it ee", () => {
    test("Then it should show a 'Action' section title", () => {
      let genre = "action";

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
        <BrowserRouter>
          <UIWrapper store={mockUIStore}>
            <Wrapper store={mockStore2}>
              <HomePage />
            </Wrapper>
          </UIWrapper>
        </BrowserRouter>
      );

      const sectionTitle = screen.getByRole("heading", {
        name: `${expectedTitle}`,
      });

      expect(sectionTitle).toBeInTheDocument();
    });
  });
});
