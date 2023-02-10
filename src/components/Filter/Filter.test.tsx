import { screen, render, fireEvent } from "@testing-library/react";
import React from "react";
import { Wrapper } from "../../mocks/Wrapper";
import { mockStore, pageNumberDispatch } from "../../store";
import FilterButton from "./Filter";

describe("Given a Filter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a select element", () => {
      render(
        <Wrapper store={mockStore}>
          <FilterButton />
        </Wrapper>
      );

      const filterButton = screen.getByRole("combobox") as HTMLSelectElement;
      expect(filterButton).toBeInTheDocument();
    });
  });

  describe("When the user clicks the option 'action'", () => {
    test("Then the genre should be 'action'", () => {
      render(
        <Wrapper store={mockStore}>
          <FilterButton />
        </Wrapper>
      );

      const filterButton = screen.getByRole("combobox") as HTMLSelectElement;
      fireEvent.change(filterButton, { target: { value: "action" } });
      expect(pageNumberDispatch).toBeCalled();
    });
  });
});
