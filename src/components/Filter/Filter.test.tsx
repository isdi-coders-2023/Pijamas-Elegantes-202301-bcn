import { screen, render, fireEvent } from "@testing-library/react";
import { UIWrapper, Wrapper } from "../../mocks/Wrapper";
import { mockStore, mockUIStore, pageNumberDispatch } from "../../store";
import FilterButton from "./Filter";

describe("Given a Filter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a select element", () => {
      render(
        <UIWrapper store={mockUIStore}>
          <Wrapper store={mockStore}>
            <FilterButton />
          </Wrapper>
        </UIWrapper>
      );

      const filterButton = screen.getByRole("combobox") as HTMLSelectElement;
      expect(filterButton).toBeInTheDocument();
    });
  });

  describe("When the user clicks the option 'action'", () => {
    test("Then the genre should be 'action'", () => {
      render(
        <UIWrapper store={mockUIStore}>
          <Wrapper store={mockStore}>
            <FilterButton />
          </Wrapper>
        </UIWrapper>
      );

      const filterButton = screen.getByRole("combobox") as HTMLSelectElement;
      fireEvent.change(filterButton, { target: { value: "action" } });
      expect(pageNumberDispatch).toBeCalled();
    });
  });
});
