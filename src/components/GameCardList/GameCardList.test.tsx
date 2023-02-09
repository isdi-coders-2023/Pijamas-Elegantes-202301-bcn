import { fetchGames_response, mswServer } from "../../mocks/gamesMocks";
import GameCardList from "./GameCardList";
import { screen, render } from "@testing-library/react";
import GamesContextProvider from "../../store/contexts/games/GameContextProvider";

describe("Given a GameCardList component", () => {
  describe("When it receives a list of 2 games", () => {
    beforeEach(() => mswServer.listen());
    afterEach(() => mswServer.restoreHandlers());
    afterAll(() => mswServer.close());

    test("It should render 2 games cards", async () => {
      mswServer.use(fetchGames_response);

      render(<GameCardList />, { wrapper: GamesContextProvider });

      const GamesCards = await screen.findAllByRole("listitem");

      for (const GameCard of GamesCards) {
        expect(GameCard).toBeInTheDocument();
      }
    });
  });
});
