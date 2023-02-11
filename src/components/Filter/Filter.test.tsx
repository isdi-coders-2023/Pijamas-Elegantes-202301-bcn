import { screen, render, fireEvent } from "@testing-library/react";
import { MockContextProvider } from "../../mocks/Wrapper";
import { genre, mockStore } from "../../store";
import FilterButton from "./Filter";

describe("Given a Filter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a select element", () => {
      render(
        <MockContextProvider store={mockStore}>
          <FilterButton />
        </MockContextProvider>
      );

      const filterButton = screen.getByRole("combobox") as HTMLSelectElement;
      expect(filterButton).toBeInTheDocument();
    });
  });

  describe("When the user clicks the option 'action'", () => {
    test("Then the genre should be 'action'", () => {
      render(
        <MockContextProvider store={mockStore}>
          <FilterButton />
        </MockContextProvider>
      );

      const filterButton = screen.getByRole("combobox") as HTMLSelectElement;
      fireEvent.change(filterButton, { target: { value: "action" } });
      expect(genre).toEqual("action");
    });
  });
});
