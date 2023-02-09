import { GameCardProps } from "./GameCard";
import { screen, render } from "@testing-library/react";
import { GameCard } from "./GameCard";

describe("Given a GameCard component", () => {
  describe("When it receives game properties", () => {
    test("It should render four spans and one image", () => {
      const game: GameCardProps = {
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

      render(<GameCard game={game.game} />);

      const ratingSpan = screen.getByRole("definition", {
        name: "5",
      });

      const genreSpan = screen.getByRole("definition", {
        name: "Action",
      });

      const currentPlayersSpan = screen.getByRole("definition", {
        name: "50",
      });

      const gameNameSpan = screen.getByRole("definition", {
        name: "GTA V",
      });

      const gameImage = screen.getByRole("img", {
        name: "GTA V",
      });

      expect(ratingSpan).toBeInTheDocument();
      expect(genreSpan).toBeInTheDocument();
      expect(currentPlayersSpan).toBeInTheDocument();
      expect(gameNameSpan).toBeInTheDocument();
      expect(gameImage).toBeInTheDocument();
    });
  });
});
