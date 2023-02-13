import { render, screen } from "@testing-library/react";
import { UIWrapper, Wrapper } from "../../mocks/Wrapper";
import { gameDetail, mockStore, mockUIStore } from "../../store";
import DetailPage from "./DetailPage";

describe("Given a DetailPage component", () => {
  describe("When given a game detail and rendered", () => {
    test("Then it should show the game title", () => {
      render(
        <UIWrapper store={mockUIStore}>
          <Wrapper store={mockStore}>
            <DetailPage />
          </Wrapper>
        </UIWrapper>
      );

      const gameDetailTitle = screen.getByRole("heading", {
        name: gameDetail.name,
      });

      expect(gameDetailTitle).toBeInTheDocument();
    });

    test("Then it should show the game image", () => {
      render(
        <UIWrapper store={mockUIStore}>
          <Wrapper store={mockStore}>
            <DetailPage />
          </Wrapper>
        </UIWrapper>
      );

      const gameDetailImage = screen.getByRole("img", {
        name: "alternative game image",
      });

      expect(gameDetailImage).toBeInTheDocument();
    });
  });
});
