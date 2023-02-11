import GameCardList from "./GameCardList";
import { render, screen } from "@testing-library/react";
import { MockContextProvider } from "../../mocks/Wrapper";
import { mockStore } from "../../store";

describe("Given a GameCardList component", () => {
  describe("When it receives a list of 2 games", () => {
    test("It should show 2 games cards", async () => {
      render(
        <MockContextProvider store={mockStore}>
          <GameCardList />
        </MockContextProvider>
      );

      const GameCards = screen.getAllByRole("listitem");

      for (const GameCard of GameCards) {
        expect(GameCard).toBeInTheDocument();
      }
    });
  });
});
