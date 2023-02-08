import { screen, render } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Given a Pagination component", () => {
  describe("When it is invoked", () => {
    test("It should render a previous page button and a next page button", () => {
      render(<Pagination />);

      const previousPageButton = screen.getByRole("button", {
        name: "Previous Page",
      });

      expect(previousPageButton).toBeInTheDocument();

      const nextPageButton = screen.getByRole("button", {
        name: "Next Page",
      });

      expect(nextPageButton).toBeInTheDocument();
    });
  });

  describe("When pageNumber=1", () => {
    test("The previous page button class should be 'off'", () => {
      render(<Pagination />);

      const previousPageButton = screen.getByRole("button", {
        name: "Previous Page",
      });

      expect(previousPageButton).toHaveClass("off");
    });
  });
});
