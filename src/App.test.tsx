import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { UIWrapper, Wrapper } from "./mocks/Wrapper";
import { mockStore, mockUIStore } from "./store";
import App from "./App";

describe("Given a App component", () => {
  describe("When rendered", () => {
    test("Then it should show a title with the text 'Most Popular'", () => {
      const expectedHeading = "GameVault";

      render(
        <BrowserRouter>
          <UIWrapper store={mockUIStore}>
            <Wrapper store={mockStore}>
              <App />
            </Wrapper>
          </UIWrapper>
        </BrowserRouter>
      );

      const heading = screen.getByRole("heading", {
        name: `${expectedHeading}`,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
