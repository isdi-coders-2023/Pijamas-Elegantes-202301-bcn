import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MockContextProvider } from "../../mocks/Wrapper";
import { mockStore } from "../../store";
import Pagination from "./Pagination";

const mockLoadGames = jest.fn();

jest.mock("../../hooks/useApi", () => {
  return () => ({
    loadGames: () => mockLoadGames(),
  });
});

describe("Given a Pagination component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a previous page button and a next page button", () => {
      render(
        <MockContextProvider store={mockStore}>
          <Pagination />
        </MockContextProvider>
      );

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

  describe("When the user clicks on the previous page button", () => {
    test("Then an action should be called", async () => {
      render(
        <MockContextProvider store={mockStore}>
          <Pagination />
        </MockContextProvider>
      );

      const nextPageButton = screen.getByRole("button", {
        name: "Next Page",
      });
      userEvent.click(nextPageButton);

      const previousPageButton = screen.getByRole("button", {
        name: "Previous Page",
      });

      userEvent.click(previousPageButton);
      expect(mockLoadGames).not.toHaveBeenCalledTimes(2);
    });
  });
  describe("When the user clicks on the next page button", () => {
    test("Then an action should be called", () => {
      render(
        <MockContextProvider store={mockStore}>
          <Pagination />
        </MockContextProvider>
      );

      const nextPageButton = screen.getByRole("button", {
        name: "Next Page",
      });

      userEvent.click(nextPageButton);

      expect(mockLoadGames).toHaveBeenCalled();
    });
  });
});
