import GameCardList from "./GameCardList";
import { render, screen } from "@testing-library/react";
import { UIWrapper, Wrapper } from "../../mocks/Wrapper";
import { mockStore, mockUIStore } from "../../store";

describe("Given a GameCardList component", () => {
  describe("When it receives a list of 2 games", () => {
    test("It should show 2 games cards", async () => {
      render(
        <UIWrapper store={mockUIStore}>
          <Wrapper store={mockStore}>
            <GameCardList />
          </Wrapper>
        </UIWrapper>
      );

      const GameCards = screen.getAllByRole("listitem");

      for (const GameCard of GameCards) {
        expect(GameCard).toBeInTheDocument();
      }
    });
  });
});
