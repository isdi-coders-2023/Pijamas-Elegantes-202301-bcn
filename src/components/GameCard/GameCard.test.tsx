import { GameCardProps } from "./GameCard";
import { screen, render } from "@testing-library/react";
import { GameCard } from "./GameCard";

describe("Given a GameCard component", () => {
  describe("When it receives game properties", () => {
    test("It should render four spans and one image", () => {
      const game: GameCardProps = {
        gameImage: "",
        currentPlayers: 150,
        genre: "Action",
        gameName: "GTA V",
        rating: 4.5,
      };

      render(
        <GameCard
          currentPlayers={game.currentPlayers}
          gameImage={game.gameImage}
          genre={game.genre}
          gameName={game.gameName}
          rating={game.rating}
        />
      );

      const ratingSpan = screen.getByRole("definition", {
        name: "4.5",
      });

      const genreSpan = screen.getByRole("definition", {
        name: "Action",
      });

      const currentPlayersSpan = screen.getByRole("definition", {
        name: "150",
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
