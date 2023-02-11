import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Given a Header component", () => {
  describe("When it renders itself", () => {
    test("It should show a header with an accesible name 'GameVault'", () => {
      render(
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      );

      const header = screen.getByRole("heading", {
        name: "GameVault",
      });

      expect(header).toBeInTheDocument();
    });
  });
});
