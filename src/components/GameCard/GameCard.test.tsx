import { GameCardProps } from "./GameCard";
import { screen, render } from "@testing-library/react";
import { GameCard } from "./GameCard";
import { GamesContextProvider } from "../../store/contexts/games/GameContextProvider";
import { CamelCaseGameStructure } from "../../data/types";
import { Wrapper } from "../../mocks/Wrapper";
import { mockStore } from "../../store";
import { BrowserRouter } from "react-router-dom";

describe("Given a GameCard component", () => {
  describe("When it receives game properties", () => {
    test("It should render four spans and one image", () => {
      const game: GameCardProps = {
        game: {
          id: 69,
          platforms: [],
          released: "yesterday",
          backgroundImage: "",
          name: "GTA V",
          rating: 5,
          genres: [{ name: "Action" }],
          addedByStatus: { playing: 50 },
        },
      };

      render(
        <BrowserRouter>
          <Wrapper store={mockStore}>
            <GameCard game={game.game} />
          </Wrapper>
        </BrowserRouter>
      );

      const gameNameTitle = screen.getByRole("heading", {
        name: "GTA V",
      });

      const gameImage = screen.getByAltText("GTA V");

      expect(gameNameTitle).toBeInTheDocument();
      expect(gameImage).toBeInTheDocument();
    });
  });

  describe("When it receives a game named 'The Witcher 3: Wild Hunt'", () => {
    test("It should render a shorter name 'The Witcher 3'", () => {
      const game: GameCardProps = {
        game: {
          id: 420,
          platforms: [],
          released: "",
          backgroundImage: "",
          name: "The Witcher 3: Wild Hunt",
          rating: 5,
          genres: [{ name: "action" }],
          addedByStatus: { playing: 69 },
        },
      };

      const expectedName = "The Witcher 3";

      render(
        <BrowserRouter>
          <Wrapper store={mockStore}>
            <GameCard game={game.game} />
          </Wrapper>
        </BrowserRouter>
      );

      const gameNameTitle = screen.getByRole("heading", {
        name: "The Witcher 3",
      });

      const altName = screen.getByAltText(expectedName);

      expect(gameNameTitle).toBeInTheDocument();
      expect(altName).toBeInTheDocument();
    });
  });

  describe("When it receives games through the provider", () => {
    test("Then it should have those games", () => {
      const game: CamelCaseGameStructure = {
        id: 1,
        name: "Super Meat Boy",
        released: "",
        backgroundImage: "",
        genres: [
          {
            name: "",
          },
        ],
        platforms: [],
        rating: 5,
        addedByStatus: {
          playing: 9,
        },
      };

      render(
        <BrowserRouter>
          <GamesContextProvider>
            <GameCard game={game} />
          </GamesContextProvider>
        </BrowserRouter>
      );

      const gameNameTitle = screen.getByRole("heading", {
        name: "Super Meat Boy",
      });

      expect(gameNameTitle).toBeInTheDocument();
    });
  });
});
