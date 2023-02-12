import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { UIWrapper, Wrapper } from "../mocks/Wrapper";
import { mockStore, mockUIStore } from "../store";
import { routesConfiguration } from "./router";

describe("Given a router configuration", () => {
  describe("When we establish '/home' as initial entry and render that path", () => {
    test("Then it should show a text 'Browse Games By Popularity and Genre'", () => {
      const router = createMemoryRouter(routesConfiguration, {
        initialEntries: ["/", "/home"],
      });

      render(
        <UIWrapper store={mockUIStore}>
          <Wrapper store={mockStore}>
            <RouterProvider router={router} />
          </Wrapper>
        </UIWrapper>
      );

      const heading = screen.getByRole("heading", {
        name: "Browse Games By Popularity and Genre",
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When we establish 'ajkdflasdfads' as initial entry and render that path", () => {
    test("Then it should show a text '404'", () => {
      const router = createMemoryRouter(routesConfiguration, {
        initialEntries: ["/", "/ajkdflasdfads"],
      });

      render(
        <UIWrapper store={mockUIStore}>
          <Wrapper store={mockStore}>
            <RouterProvider router={router} />
          </Wrapper>
        </UIWrapper>
      );

      const heading = screen.getByRole("heading", {
        name: "404",
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
