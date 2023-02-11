import { render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

describe("Given an ErrorPage component", () => {
  describe("When it renders itself", () => {
    test("It should show an error message with a title, subtitle and description", () => {
      render(<ErrorPage />);

      const title = screen.getByRole("heading", {
        name: "404",
      });

      const subtitle = screen.getByRole("heading", {
        name: "Page Not Found",
      });

      expect(title).toBeInTheDocument();
      expect(subtitle).toBeInTheDocument();
    });
  });
});
