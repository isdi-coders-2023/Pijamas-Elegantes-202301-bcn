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

      const gameNameTitle = screen.getByRole("heading", {
        name: "GTA V",
      });

      const gameImage = screen.getByAltText("GTA V");

      expect(gameNameTitle).toBeInTheDocument();
      expect(gameImage).toBeInTheDocument();
    });
  });
});
