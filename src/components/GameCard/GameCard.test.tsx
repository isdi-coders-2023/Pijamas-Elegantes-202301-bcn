import { GameCardProps } from "./GameCard";
import { screen, render } from "@testing-library/react";
import { GameCard } from "./GameCard";

describe("Given a GameCard component", () => {
  describe("When it receives game properties", () => {
    test("It should render four spans and one image", () => {
      const game: GameCardProps = {
        key: "",
        game: {
          id: 69,
          platforms: [],
          released: "yesterday",
          background_image: "",
          name: "GTA V",
          rating: 5,
          genres: [{ name: "Action" }],
          added_by_status: { playing: 50 },
        },
      };

      render(<GameCard game={game.game} key={game.game.name} />);

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
        key: "",
        game: {
          id: 420,
          platforms: [],
          released: "",
          background_image: "",
          name: "The Witcher 3: Wild Hunt",
          rating: 5,
          genres: [{ name: "action" }],
          added_by_status: { playing: 69 },
        },
      };

      const expectedName = "The Witcher 3";

      render(<GameCard game={game.game} key={game.game.name} />);

      const gameNameTitle = screen.getByRole("heading", {
        name: "The Witcher 3",
      });

      const altName = screen.getByAltText(expectedName);

      expect(gameNameTitle).toBeInTheDocument();
      expect(altName).toBeInTheDocument();
    });
  });
});
