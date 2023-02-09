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
});
