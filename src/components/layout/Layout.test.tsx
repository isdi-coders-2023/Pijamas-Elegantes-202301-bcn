import { render, screen } from "@testing-library/react";

import { UIWrapper, Wrapper } from "../../mocks/Wrapper";
import { mockStore, mockUIStore } from "../../store";
import Layout from "./Layout";

const store = mockStore;

describe("Given a Layout component", () => {
  render(
    <UIWrapper store={mockUIStore}>
      <Wrapper store={store}>
        <Layout />
      </Wrapper>
    </UIWrapper>
  );

  describe("When rendered and the aplication is loading data", () => {
    test("Then it should render a loader", () => {});

    const loader = screen.getByRole("dialog", {
      name: "the page is loading",
    });

    expect(loader).toBeInTheDocument();
  });
});
